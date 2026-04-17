import { AppProps } from 'next/app';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect } from 'react';
import * as React from 'react';
import TagManager from 'react-gtm-module';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/sglobal.css';

import { ThemeProvider } from '../themeManager';

/*
  a11y + correctness notes:

  - All theme logic has moved into themeManager.tsx. This file previously
    duplicated makeLight/makeDark/makeSystem/updateSystem and maintained
    a second copy of currentColour in its own state. That duplication caused
    a render-phase side effect (updateSystem() called during render),
    useEffects with no deps that re-ran every render, and two sources of
    truth for the current theme. All of that is gone.

  - The top "Official Website" banner used to be inside a <header> element,
    creating two banner landmarks (this one and the one inside <Navbar>).
    It is now a <div role='region' aria-label='Government website notice'>
    so there is only one <header>/banner per page.

  - External links in the top banner now include a sr-only "(opens in new tab)"
    hint so screen reader users are warned about context change.

  - The city seal is adjacent to text that already names the city, so the
    image is marked decorative (alt='') to avoid redundant announcements.
*/

const tagManagerArgs = {
  gtmId: 'G-DF7TCXWPKS',
};

function MyApp({ Component, pageProps }: AppProps) {
  // Initialize GTM once on mount. The original code had no dep array,
  // which meant it re-initialized on every render.
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ThemeProvider>
      {/*
        a11y: government-site notice banner.
        Not a <header>/banner landmark — Navbar owns that. Using a named
        region means screen-reader users can still jump to it via the
        landmarks list, but it doesn't collide with the primary banner.
      */}
      <div
        role='region'
        aria-label='Government website notice'
        className='w-full bg-[#0f2940] text-xs leading-none text-white'
      >
        <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between px-3 py-2'>
          <div className='flex items-center space-x-2'>
            <Image
              src='/Seal_of_Los_Angeles.svg.png'
              alt='Seal of Los Angeles'
              aria-hidden='true'
              width={20}
              height={20}
              className='object-contain'
            />
            <div className='text-white'>
              <span className='block sm:inline'>An Official Website of </span>
              <br className='block sm:hidden' />
              <span>
                the City of
                <span className='inline sm:hidden'> L.A.</span>
                <span className='hidden sm:inline'> Los Angeles</span>
              </span>
            </div>
          </div>

          <div className='flex gap-2'>
            <a
              href='https://myla311.lacity.org/'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded border border-[#A7CEEC] px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f2940]'
            >
              City Services
              <span className='sr-only'> (opens in new tab)</span>
            </a>
            <a
              href='https://lacity.gov/directory'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded border border-[#A7CEEC] px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f2940]'
            >
              City Directory
              <span className='sr-only'> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </div>

      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-DF7TCXWPKS'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DF7TCXWPKS');
        `}
      </Script>

      {/*
        NOTE: UserWay is an accessibility overlay. Overlays are widely
        criticized by a11y practitioners for interfering with native
        assistive technology and not delivering actual compliance.
        See https://overlayfactsheet.com for the consensus view.
        Real WCAG 2.1 AA compliance comes from the source code — which is
        what we're doing in this remediation. Consider whether the overlay
        is still needed once the underlying a11y work is complete.
      */}
      <Script
        src='https://cdn.userway.org/widget.js'
        data-account='oOgzlS5nAK'
        strategy='beforeInteractive'
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
