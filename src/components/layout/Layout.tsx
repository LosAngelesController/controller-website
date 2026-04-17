import * as React from 'react';

/*
  a11y: This component owns the single <main> landmark for every page that
  uses it. Pages rendered inside <Layout> must NOT wrap their content in
  another <main> — only one <main> is allowed per document (HTML spec,
  WCAG 1.3.1).

  - id='main-content' is the target of the "Skip to main content" link in Navbar.
  - tabIndex={-1} lets the skip link move focus here programmatically
    without making <main> itself a tab stop during normal keyboard navigation.
*/
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main id='main-content' tabIndex={-1}>
      {children}
    </main>
  );
}
