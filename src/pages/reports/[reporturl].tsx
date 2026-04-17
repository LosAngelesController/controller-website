import jquerylib from 'jquery';
import jsdom from 'jsdom';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { titleCase } from 'true-case';

import { cleanthehtml } from '@/components/cleanthehtmlforprevpages';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import financeexport from './../../financeexport.json';

interface eachaudit {
  name: string;
  year: number | string;
  dept: string;
  link: string;
  pdflink: string;
  description?: string;
  textofpage: string;
  htmlofpage: string;
}

interface auditinterface {
  report: eachaudit;
}

export default function Report(props: auditinterface) {
  // Ref scopes DOM work to the injected-content container so we never
  // accidentally reach into Navbar/Layout chrome.
  const injectedContentRef = React.useRef<HTMLDivElement | null>(null);

  const removeloadingissuesontableau = React.useCallback(() => {
    const root = injectedContentRef.current;
    if (!root) return;

    root
      .querySelectorAll(
        "[style='position:absolute;top:0;left:0;right:0;bottom:0;border:0;padding:0;margin:0']"
      )
      .forEach((eachElement) => {
        if (eachElement.parentElement) {
          if (eachElement.parentElement.querySelector('iframe[src]')) {
            eachElement.remove();
          }
        }
      });

    root.querySelectorAll('iframe:not([src])').forEach((eachElement) => {
      if (eachElement.parentElement) {
        if (eachElement.parentElement.querySelector('iframe[src]')) {
          eachElement.remove();
        }
      }
    });
  }, []);

  const relabelGenericVizTitles = React.useCallback(() => {
    const root = injectedContentRef.current;
    if (!root) return;

    const yearRaw = String(props.report?.year ?? '').trim();
    const baseLabel = yearRaw
      ? /^FY/i.test(yearRaw) || yearRaw.includes('-')
        ? yearRaw
        : `FY${yearRaw}`
      : '';
    const assignedLabels = new Map<string, number>();

    const findHeadingText = (start: HTMLElement) => {
      let node: HTMLElement | null = start;
      while (node) {
        let sibling: HTMLElement | null =
          node.previousElementSibling as HTMLElement | null;
        while (sibling) {
          const headings = sibling.querySelectorAll('h2, h3');
          if (headings.length > 0) {
            const last = headings[headings.length - 1];
            return last.textContent?.trim() || '';
          }
          if (sibling.matches('h2, h3')) {
            return sibling.textContent?.trim() || '';
          }
          sibling = sibling.previousElementSibling as HTMLElement | null;
        }
        node = node.parentElement;
      }
      return '';
    };

    const iframes = Array.from(root.querySelectorAll('iframe'));
    iframes.forEach((iframe) => {
      const title = (iframe.getAttribute('title') || '').trim();
      if (!title || /^data visualization$/i.test(title)) {
        const headingText = findHeadingText(iframe);
        const labelBase = headingText
          ? `${headingText} visualization`
          : 'Report visualization';
        const baseTitle = baseLabel ? `${baseLabel} ${labelBase}` : labelBase;
        const duplicateCount = (assignedLabels.get(baseTitle) ?? 0) + 1;
        assignedLabels.set(baseTitle, duplicateCount);
        const label =
          duplicateCount === 1 ? baseTitle : `${baseTitle} ${duplicateCount}`;
        iframe.setAttribute('title', label);
      }
    });
  }, [props.report?.year]);

  // Hide decorative SVGs (Tableau spinners etc.) from AT. They have no
  // <title>/aria-label in the source HTML, so screen readers would otherwise
  // announce nothing useful. SC 1.1.1 Non-text Content.
  const hideDecorativeSvgs = React.useCallback(() => {
    const root = injectedContentRef.current;
    if (!root) return;

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
  }, []);

  // Tableau preview images are wrapped in <a href="#"> links that do nothing.
  // These are keyboard-focusable dead ends. SC 2.1.1 Keyboard, SC 2.4.4.
  // Unwrap them so the image remains but the no-op link is removed.
  const unwrapDeadLinks = React.useCallback(() => {
    const root = injectedContentRef.current;
    if (!root) return;

    root.querySelectorAll('a[href="#"]').forEach((anchor) => {
      // Only unwrap if the only meaningful child is an image
      const onlyImage =
        anchor.children.length === 1 &&
        anchor.children[0].tagName === 'IMG' &&
        (anchor.textContent ?? '').trim() === '';
      if (onlyImage && anchor.parentElement) {
        const img = anchor.children[0];
        anchor.parentElement.replaceChild(img, anchor);
      }
    });
  }, []);

  const runA11yPasses = React.useCallback(() => {
    removeloadingissuesontableau();
    relabelGenericVizTitles();
    hideDecorativeSvgs();
    unwrapDeadLinks();
  }, [
    removeloadingissuesontableau,
    relabelGenericVizTitles,
    hideDecorativeSvgs,
    unwrapDeadLinks,
  ]);

  React.useEffect(() => {
    // Run once on mount to catch static content.
    runA11yPasses();

    // Tableau embeds inject iframes asynchronously. Use a MutationObserver
    // instead of a leaking setInterval so we react the moment new nodes
    // appear, and we can clean it up on unmount.
    const root = injectedContentRef.current;
    if (!root || typeof MutationObserver === 'undefined') return;

    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      // Debounce via rAF so we don't thrash during bursty Tableau mutations.
      requestAnimationFrame(() => {
        scheduled = false;
        runA11yPasses();
      });
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src', 'title', 'style'],
    });

    return () => {
      observer.disconnect();
    };
  }, [runA11yPasses]);

  const hasPdfLink = Boolean(props.report?.pdflink);

  return (
    <>
      <Head>
        <link rel='stylesheet' href='/legacywp.css' />
      </Head>
      <Navbar />
      <Layout>
        <Seo
          title={props.report.name}
          description={
            props.report.description
              ? props.report.description
              : `Financial Report for ${props.report.year}`
          }
        />
        <main className=' dark:bg-zinc-900'>
          {props.report && (
            <div className=' container mx-4 px-4 pb-3 pt-5  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
              <h1 className='font-sm'>{props.report.name}</h1>
              <div className='text-2xl font-semibold'>
                <span className='font-normal'>{props.report.year} </span>
                {props.report.dept && (
                  <span>
                    {' '}
                    {titleCase(props.report.dept).replace(
                      /( )?department/gi,
                      ''
                    )}
                  </span>
                )}
              </div>
              {hasPdfLink && (
                // Group the two PDF links so AT users understand they're
                // related (view vs. download the same document).
                <div
                  className='mt-3 flex flex-row gap-x-2'
                  role='group'
                  aria-label={`PDF actions for ${props.report.name}`}
                >
                  <Link legacyBehavior href={props.report.pdflink}>
                    <a
                      className='rounded-full bg-black px-3 py-1 font-semibold text-white'
                      // Target size: px-3 py-1 -> ~24px tall. Keep it readable.
                    >
                      View PDF
                    </a>
                  </Link>
                  <Link legacyBehavior href={props.report.pdflink}>
                    <a
                      download
                      // min 44x44 meets SC 2.5.5 AAA, easily clears 2.5.8 AA (24x24)
                      className='inline-flex items-center justify-center rounded-full bg-black p-2.5 text-white md:p-3'
                      aria-label={`Download ${props.report.name} as PDF`}
                    >
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        className='h-4 w-4'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fill='currentColor'
                          d='M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z'
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              )}

              <div className='legacycontentgal mt-3'>
                <div
                  ref={injectedContentRef}
                  dangerouslySetInnerHTML={{
                    __html: props.report.htmlofpage,
                  }}
                ></div>
              </div>
            </div>
          )}
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const reporturl = context.params.reporturl;

  //illegally cast to any type because nextjs doesnt recognize it
  const reportfullbroken: any = financeexport;

  //pull the url
  const returnedreport: any = reportfullbroken[reporturl];

  // Guard first — the original code called `delete` on undefined, which
  // would throw before the notFound branch could run.
  if (returnedreport == undefined) {
    return {
      notFound: true,
    };
  }

  delete returnedreport.textofpage;

  const dom = new jsdom.JSDOM(returnedreport.htmlofpage);

  const $: any = jquerylib(dom.window);

  $('img[data-lazy-src]').each((elementindex: number, element: any) => {
    $(element).attr('src', $(element).attr('data-lazy-src'));

    $(element).attr('srcset', $(element).attr('data-lazy-srcset'));
  });

  const cleanedhtml = dom.serialize();

  const returnedreportcleaned = {
    ...returnedreport,
    htmlofpage: cleanthehtml(cleanedhtml),
  };

  return {
    props: {
      report: returnedreportcleaned,
    },
  };
}
