import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <main id="main-content" tabIndex={-1}>
    {children}
    </main>;
}
