import { AppProps } from 'next/app';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import * as React from 'react';
import TagManager from 'react-gtm-module';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/sglobal.css';

import { ThemeContext } from './../themeManager';
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */
//G-EPEH5SFW1V
const tagManagerArgs = {
  gtmId: 'G-DF7TCXWPKS',
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  });

  useEffect(() => {
    const htmlSelected = document.querySelector('html');
    if (htmlSelected) {
      htmlSelected.classList.add('dark');
    }
  }, []);

  const [darkmode, setdarkmode] = useState<boolean | null>(null);

  const [currentColour, setCurrentColour] = useState<string>('system');

  const dontburnmyeyes = () => {
    const bodySelected = document.querySelector('body');

    if (bodySelected) {
      bodySelected.classList.remove('dontburnmyeyesoutplz');
    }
  };

  function updateSystem() {
    let tosetcolour = 'system';

    if (typeof document !== 'undefined') {
      // console.log('inside document');
      const bodySelected = document.querySelector('body');
      const htmlSelected = document.querySelector('html');

      if (localStorage.theme === 'dark') {
        tosetcolour = 'dark';
      }
      if (localStorage.theme === 'light') {
        tosetcolour = 'light';
      }

      if (currentColour !== tosetcolour) {
        setCurrentColour(tosetcolour);
      }

      if (typeof window != undefined) {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (
          localStorage.theme === 'dark' ||
          (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          if (bodySelected) {
            bodySelected.classList.add('dark');
            bodySelected.classList.add('dark:bg-bruhdark');
            bodySelected.classList.add('dark:bg-bruhdark');
          }

          if (htmlSelected) {
            htmlSelected.classList.add('dark');
          }
        } else {
          if (bodySelected) {
            bodySelected.classList.remove('dark');
            dontburnmyeyes();
          }

          if (htmlSelected) {
            htmlSelected.classList.remove('dark');
          }
        }
      }
    }
  }

  function makeLight() {
    // console.log('make light');
    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light';
    updateSystem();
    dontburnmyeyes();
  }

  function makeDark() {
    // Whenever the user explicitly chooses dark mode
    // console.log('make dark');
    localStorage.theme = 'dark';
    updateSystem();
  }

  function makeSystem() {
    // Whenever the user explicitly chooses to respect the OS preference
    // console.log('make sys');
    localStorage.removeItem('theme');
    updateSystem();
    dontburnmyeyes();
  }

  updateSystem();

  const themeChanger: any = {
    makeLight,
    makeDark,
    makeSystem,
    updateSystem,
    currentColour,
  };

  useEffect(() => {
    updateSystem();
  });

  return (
    <>
      <header className='z-[9999999999] w-full bg-[#0f2940] text-xs leading-none text-white'>
        <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between px-3 py-2'>
          {/* Left Side */}
          <div className='flex items-center space-x-2'>
            {/* City Seal */}
            <Image
              src='/Seal_of_Los_Angeles.svg.png'
              alt='City of Los Angeles Seal'
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

          {/* Right Side */}
          <div className='flex gap-2'>
            <a
              href='https://myla311.lacity.org/'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded border border-[#A7CEEC] px-2 py-1 hover:outline-white focus:outline-2 focus:outline-white'
            >
              City Services
            </a>
            <a
              href='https://lacity.gov/directory'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded border border-[#A7CEEC] px-2 py-1 hover:outline-white focus:outline-2 focus:outline-white'
            >
              City Directory
            </a>
          </div>
        </div>
      </header>

      <ThemeContext.Provider value={themeChanger}>
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-DF7TCXWPKS'
        ></Script>
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
    window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DF7TCXWPKS');
  `}
        </Script>

        {/* <Script
          src='https://website-widgets.pages.dev/dist/sienna.min.js'
          strategy='beforeInteractive'
        ></Script> */}
        <Script
          src='https://cdn.userway.org/widget.js'
          data-account='oOgzlS5nAK'
          strategy='beforeInteractive'
        ></Script>

        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
