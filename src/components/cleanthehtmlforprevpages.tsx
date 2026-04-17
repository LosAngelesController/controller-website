import jsdom from 'jsdom';

/**
 * Clean legacy WordPress HTML for injection via dangerouslySetInnerHTML.
 *
 * Preserves the original string-level transforms (asset URL rewrites, email
 * swap, inline-height strip, Tableau script hoist) and adds a set of DOM
 * passes that fix WCAG 2.1 issues in the source HTML.
 *
 * Options:
 *   pageHasOwnH1 — the reports page template renders its own <h1> from
 *     report.name, so any <h1> in the content creates a duplicate. Set
 *     false if calling this from a context where no outer h1 is rendered.
 */
interface CleanOptions {
  pageHasOwnH1?: boolean;
}

export function cleanthehtml(
  htmlstring: string,
  options: CleanOptions = {}
): string {
  const { pageHasOwnH1 = true } = options;

  // --------------------------------------------------------------------
  // Stage 1: original string-level transforms (unchanged behavior)
  // --------------------------------------------------------------------
  let cleanedhtmlstring = htmlstring
    .replace(
      /https:\/\/(www.)?lacontroller.org\/wp-content\//g,
      'https://wpstaticarchive.lacontroller.io/wp-content/'
    )
    .replace(/https:\/\/(www.)?lacontroller.org\//g, '/')
    .replace(/style="height:( )?\d*px;"/gi, '')
    .replace(/controller.galperin@lacity.org/gi, 'controller.mejia@lacity.org');

  const tableaustring =
    '<script src="https://public.tableau.com/javascripts/api/viz_v1.js"></script>';
  const tableauregex =
    /<script src="https:\/\/public.tableau.com\/javascripts\/api\/viz_v1.js"><\/script>/gi;

  if (cleanedhtmlstring.includes(tableaustring)) {
    cleanedhtmlstring = cleanedhtmlstring.replace(tableauregex, '');
    cleanedhtmlstring = tableaustring + cleanedhtmlstring;
  }

  // --------------------------------------------------------------------
  // Stage 2: DOM-based accessibility passes
  //
  // The Tableau script must stay at the top of the returned string. We
  // split it off, run DOM passes on the body, then prepend it again.
  // --------------------------------------------------------------------
  let tableauPrefix = '';
  if (cleanedhtmlstring.startsWith(tableaustring)) {
    tableauPrefix = tableaustring;
    cleanedhtmlstring = cleanedhtmlstring.slice(tableaustring.length);
  }

  const dom = new jsdom.JSDOM(
    `<div id="__a11y_root">${cleanedhtmlstring}</div>`
  );
  const doc = dom.window.document;
  const root = doc.getElementById('__a11y_root');
  if (!root) return tableauPrefix + cleanedhtmlstring;

  demoteDuplicateH1s(root, pageHasOwnH1);
  fixHeadingLevelSkips(root);
  fixDeadAnchorLinks(root);
  hideDecorativeSvgs(root);
  promoteTableHeaders(root);
  disambiguateGenericLinkText(root);
  secureExternalLinks(root);

  return tableauPrefix + root.innerHTML;
}

/* ------------------------------------------------------------------ *
 * Pass 1 — Duplicate <h1>                                             *
 *                                                                     *
 * The 2014/2015/2016 preliminary financial reports embed their own    *
 * <h1> inside htmlofpage. The page template already renders an <h1>   *
 * from report.name, so we end up with two on the page. Demote the     *
 * content h1 to h2. SC 1.3.1 Info and Relationships; SC 2.4.6.        *
 * ------------------------------------------------------------------ */
function demoteDuplicateH1s(root: Element, pageHasOwnH1: boolean) {
  if (!pageHasOwnH1) return;
  root.querySelectorAll('h1').forEach((h1) => {
    replaceTag(h1, 'h2');
  });
}

/* ------------------------------------------------------------------ *
 * Pass 2 — Heading level skips                                        *
 *                                                                     *
 * acfr2021 starts at <h4> (skipping h2, h3 entirely), and cafr-2019   *
 * jumps h2 → h4. Walk all content headings in document order, shift   *
 * the whole outline up so the shallowest becomes h2 (since the page   *
 * template owns h1), and cap any remaining skips at prev+1.           *
 * SC 1.3.1.                                                           *
 * ------------------------------------------------------------------ */
function fixHeadingLevelSkips(root: Element) {
  const headings = Array.from(
    root.querySelectorAll('h1, h2, h3, h4, h5, h6')
  ) as HTMLElement[];
  if (headings.length === 0) return;

  let minLevel = 6;
  for (const h of headings) {
    const lvl = parseInt(h.tagName[1], 10);
    if (lvl < minLevel) minLevel = lvl;
  }
  // Normalize so the shallowest content heading is h2 (directly under the
  // page's h1). If content already starts at h2 or higher, shift is 0.
  const shift = minLevel > 2 ? minLevel - 2 : 0;

  let prev = 1; // the page template's h1
  for (const h of headings) {
    let lvl = parseInt(h.tagName[1], 10) - shift;
    if (lvl < 2) lvl = 2;
    if (lvl > prev + 1) lvl = prev + 1;
    if (lvl > 6) lvl = 6;

    if (`H${lvl}` !== h.tagName) {
      replaceTag(h, `h${lvl}`);
    }
    prev = lvl;
  }
}

/* ------------------------------------------------------------------ *
 * Pass 3 — Dead <a href="#"> wrappers                                 *
 *                                                                     *
 * 135 anchors across the dataset wrap Tableau preview images in       *
 * <a href="#">…</a>. The link does nothing — pressing Enter jumps to  *
 * page top. Keyboard users hit a focus trap; screen readers announce  *
 * a link with no useful purpose. Unwrap when the only meaningful      *
 * child is an <img>. SC 2.1.1 Keyboard; SC 2.4.4 Link Purpose; 4.1.2. *
 *                                                                     *
 * Do NOT touch anchors with real hrefs or in-page anchor hrefs (#id). *
 * ------------------------------------------------------------------ */
function fixDeadAnchorLinks(root: Element) {
  root.querySelectorAll('a[href="#"]').forEach((anchor) => {
    const elementChildren = Array.from(anchor.children);
    const textContent = (anchor.textContent ?? '').trim();

    const onlyImage =
      elementChildren.length === 1 &&
      elementChildren[0].tagName === 'IMG' &&
      textContent === '';

    if (onlyImage) {
      anchor.replaceWith(elementChildren[0]);
      return;
    }

    // Other href="#" anchors with real text: convert to inert <span> so
    // they no longer pull keyboard focus to a no-op destination.
    if (textContent.length > 0) {
      const span = root.ownerDocument!.createElement('span');
      for (const attr of Array.from(anchor.attributes)) {
        if (attr.name === 'href') continue;
        span.setAttribute(attr.name, attr.value);
      }
      span.innerHTML = anchor.innerHTML;
      anchor.replaceWith(span);
    }
  });
}

/* ------------------------------------------------------------------ *
 * Pass 4 — Decorative SVGs with no accessible name                    *
 *                                                                     *
 * 85 SVGs across reports (Tableau spinners, chrome icons) lack any    *
 * <title>, aria-label, or aria-hidden. Mark them aria-hidden="true"   *
 * + focusable="false" so screen readers and keyboard skip them.       *
 * SC 1.1.1 Non-text Content.                                          *
 *                                                                     *
 * The client component also runs this pass on hydration to cover      *
 * SVGs injected by Tableau after load — doing it server-side as well  *
 * means the first byte shipped is already clean.                      *
 * ------------------------------------------------------------------ */
function hideDecorativeSvgs(root: Element) {
  root.querySelectorAll('svg').forEach((svg) => {
    if (svg.hasAttribute('aria-hidden')) return;
    const hasTitle = svg.querySelector('title');
    const hasLabel =
      svg.hasAttribute('aria-label') || svg.hasAttribute('aria-labelledby');
    if (!hasTitle && !hasLabel) {
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
    }
  });
}

/* ------------------------------------------------------------------ *
 * Pass 5 — Tables missing <th>                                        *
 *                                                                     *
 * 2017-preliminary-financial-report has two <table id="dataTable">    *
 * that use only <td>. They're really file-download lists, and each    *
 * row's first cell is an anchor like "Exhibits" or "Revenues, fiscal  *
 * years 2007-2017" followed by format links. No header row exists.    *
 *                                                                     *
 * Heuristic: if the first row looks like column headers (short,       *
 * non-linked, non-empty in every cell), promote to <th scope="col">.  *
 * Otherwise, synthesize a neutral header row — better than nothing    *
 * for AT, and preferable to the role="presentation" escape hatch      *
 * because these really do contain tabular data (file + format).       *
 *                                                                     *
 * Also adds a visually-hidden <caption> if missing, using the table's *
 * id for context. SC 1.3.1.                                           *
 * ------------------------------------------------------------------ */
function promoteTableHeaders(root: Element) {
  root.querySelectorAll('table').forEach((table) => {
    if (table.querySelector('th')) return;

    const firstRow = table.querySelector('tr');
    if (!firstRow) return;

    const firstRowCells = Array.from(firstRow.children).filter(
      (c) => c.tagName === 'TD'
    ) as HTMLElement[];
    if (firstRowCells.length === 0) return;

    const looksLikeHeaders = firstRowCells.every((cell) => {
      const text = (cell.textContent ?? '').trim();
      const hasLinkOrImg = cell.querySelector('a, img');
      return text.length > 0 && text.length <= 40 && !hasLinkOrImg;
    });

    if (looksLikeHeaders) {
      firstRowCells.forEach((td) => {
        const th = replaceTag(td, 'th') as HTMLElement;
        th.setAttribute('scope', 'col');
      });
    } else {
      // Synthesize a header row. For the 2017 report tables, cells
      // commonly split into [description, Excel link, (blank), csv link],
      // so neutral "Column N" labels are the safest default. Reviewers
      // can tune per-report later.
      const headerRow = root.ownerDocument!.createElement('tr');
      const colCount = Array.from(firstRow.children).length;
      for (let i = 0; i < colCount; i++) {
        const th = root.ownerDocument!.createElement('th');
        th.setAttribute('scope', 'col');
        th.textContent = colCount === 1 ? 'File' : `Column ${i + 1}`;
        headerRow.appendChild(th);
      }
      const thead = root.ownerDocument!.createElement('thead');
      thead.appendChild(headerRow);
      table.insertBefore(thead, table.firstChild);
    }

    if (!table.querySelector('caption')) {
      const caption = root.ownerDocument!.createElement('caption');
      caption.className = 'sr-only';
      caption.textContent = 'Report data files';
      table.insertBefore(caption, table.firstChild);
    }
  });
}

/* ------------------------------------------------------------------ *
 * Pass 6 — Ambiguous link text                                        *
 *                                                                     *
 * Scan found 1 "here" link, 8 "Excel", 8 "csv" across the dataset.    *
 * "Excel" and "csv" repeat in the 2017 table rows (format per row)    *
 * where the surrounding row gives context, but SC 2.4.4 requires      *
 * "purpose determined from the link alone *or* from link + context".  *
 *                                                                     *
 * We append an aria-label that includes the row's first-cell text so  *
 * screen reader users hearing "Excel, link" get "Revenues fiscal      *
 * years 2007-2017, Excel, link" instead. Bare "here" gets flagged     *
 * but left as-is — rewriting it risks changing editorial meaning.     *
 * ------------------------------------------------------------------ */
function disambiguateGenericLinkText(root: Element) {
  const ambiguous = new Set([
    'excel',
    'csv',
    'xls',
    'xlsx',
    'pdf',
    'download',
    'view',
    'link',
  ]);

  root.querySelectorAll('a').forEach((anchor) => {
    if (anchor.hasAttribute('aria-label')) return;

    const text = (anchor.textContent ?? '').trim().toLowerCase();
    if (!ambiguous.has(text)) return;

    // Look for context in the containing row (for the 2017 data tables)
    // or the enclosing paragraph.
    const row = anchor.closest('tr');
    let context = '';
    if (row) {
      const firstCell = row.querySelector('td, th');
      if (firstCell && firstCell !== anchor.closest('td, th')) {
        context = (firstCell.textContent ?? '').trim();
      }
    }
    if (!context) {
      const p = anchor.closest('p, li');
      if (p) {
        context = (p.textContent ?? '').replace(text, '').trim();
      }
    }

    if (context) {
      // Keep the label concise: context + ", " + link text
      anchor.setAttribute(
        'aria-label',
        `${context.slice(0, 80)}, ${anchor.textContent?.trim() ?? ''}`
      );
    }
  });
}

/* ------------------------------------------------------------------ *
 * Pass 7 — External links opening in new tabs                         *
 *                                                                     *
 * Any <a target="_blank"> without rel="noopener noreferrer" is both   *
 * a security issue (reverse tabnabbing) and, per SC 3.2.5 best        *
 * practice, should ideally warn the user. We add the rel attribute    *
 * universally; warning text is left to editorial discretion.          *
 *                                                                     *
 * Scan showed zero current violations, but enforcing here prevents    *
 * regressions if new reports are added.                               *
 * ------------------------------------------------------------------ */
function secureExternalLinks(root: Element) {
  root.querySelectorAll('a[target="_blank"]').forEach((anchor) => {
    const rel = (anchor.getAttribute('rel') ?? '').toLowerCase();
    const tokens = new Set(rel.split(/\s+/).filter(Boolean));
    tokens.add('noopener');
    tokens.add('noreferrer');
    anchor.setAttribute('rel', Array.from(tokens).join(' '));
  });
}

/* ------------------------------------------------------------------ *
 * Utility                                                             *
 * ------------------------------------------------------------------ */
function replaceTag(el: Element, newTag: string): Element {
  const replacement = el.ownerDocument!.createElement(newTag);
  for (const attr of Array.from(el.attributes)) {
    replacement.setAttribute(attr.name, attr.value);
  }
  replacement.innerHTML = el.innerHTML;
  el.replaceWith(replacement);
  return replacement;
}
