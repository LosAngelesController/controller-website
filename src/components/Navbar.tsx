'use client';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import NewTranslate from '@/components/NewTranslate';

import { ThemeContext } from '@/themeManager';

import { ChangeColour } from './changeColour';

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  className?: string;
}

const navigation: NavItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Data', href: '/data' },
  { name: 'Oversight', href: '/audits' },
  { name: 'Financials', href: '/reports' },
  { name: 'Budgets', href: '/budgets' },
  // { name: 'Events', href: '/events' },
  { name: 'Press', href: '/press' },
  { name: 'Contact', href: '/contact' },
  {
    name: 'Charter Reform 2026',
    href: 'https://charterreform.lacontroller.app/',
    external: true,
    className:
      'font-semibold text-teal-800 hover:text-teal-900 ' +
      'dark:!text-[#41ffca] dark:hover:!text-[#41ffca] ' +
      'hover:bg-teal-50/60 dark:hover:bg-white/10 ' +
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 dark:focus-visible:ring-[#41ffca]',
  },
];

function classNames(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  return { width: 0, height: 0 };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions;
}

export default function Navbar(props: any) {
  const { width } = useWindowDimensions();
  const [mobileTranslateOpen, setMobileTranslateOpen] = useState(false);

  /*
    a11y: use Next.js usePathname() instead of window.location to avoid
    SSR/CSR hydration mismatch. With the old approach, aria-current='page'
    was wrong on first paint.
  */
  const pathname = usePathname();

  const isCurrent = (href: string) => {
    if (href.startsWith('http')) return false;
    return pathname === href;
  };

  return (
    <header>
      {/*
        a11y: skip link. Targets <main id='main-content'> in page layouts.
        Visually hidden until focused, then revealed in the top-left corner.
      */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
      >
        Skip to main content
      </a>

      <Disclosure
        as='nav'
        aria-label='Primary'
        className='relative z-50 border-b border-gray-300 drop-shadow-sm dark:bg-whosestreets dark:text-white'
      >
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl pl-2 drop-shadow-sm sm:px-4 md:px-2 lg:px-8'>
              <div className='relative flex h-16 items-center justify-between'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/*
                    a11y: Mobile menu button.
                    - Headless UI's Disclosure.Button handles aria-expanded and aria-controls automatically.
                    - The sr-only text below updates based on `open` state so the name reflects the action.
                    - focus-visible:ring replaces the removed outline so focus is always visible.
                  */}
                  <Disclosure.Button
                    onClick={() => {
                      setMobileTranslateOpen(false);
                    }}
                    className='inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-[#80ffdc] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:bg-whosestreets dark:text-white dark:hover:text-gray-100'
                  >
                    <span className='sr-only'>
                      {open ? 'Close main menu' : 'Open main menu'}
                    </span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>

                <div className='flex flex-1 items-center justify-center xl:items-stretch xl:justify-start'>
                  <div className='flex flex-shrink-0 items-center'>
                    {/*
                      a11y: one <Link> with a single accessible name.
                      The two <Image>s are both in the DOM (CSS toggles visibility
                      for light/dark/print). We mark the hidden duplicate with alt=''
                      and aria-hidden so screen readers announce the link exactly once.
                    */}
                    <Link
                      href='/'
                      aria-label='City of Los Angeles Controller’s Office, home'
                      className='focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'
                    >
                      <Image
                        className='block h-8 w-auto dark:hidden print:block'
                        src='/images/logo-elect.png'
                        alt='Kenneth Mejia logo'
                        aria-hidden='true'
                        height={32}
                        width={72}
                        priority={true}
                        unoptimized={true}
                      />
                      <Image
                        className='hidden h-8 w-auto dark:block print:hidden'
                        src='/images/KennethMejia-logo-white-elect.png'
                        alt='Kenneth Mejia logo'
                        aria-hidden='true'
                        height={32}
                        width={72}
                        priority={true}
                        unoptimized={true}
                      />
                    </Link>
                  </div>

                  <div className='hidden sm:ml-4 sm:block lg:ml-6'>
                    <div className='flex gap-x-3 lg:gap-x-4'>
                      {navigation.map((item) => {
                        const current = isCurrent(item.href);

                        // a11y: internal links use Next <Link> to preserve SPA
                        // focus behavior. External links use <a> with rel + an
                        // SR-only "(opens in new tab)" hint if target is set.
                        const sharedClasses = classNames(
                          current
                            ? 'text-gray-900 underline underline-offset-4 decoration-2 dark:text-gray-100'
                            : 'text-gray-900 dark:text-white',
                          'rounded-md px-2 py-2 text-sm font-medium lg:px-3',
                          'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600',
                          item.className
                        );

                        if (item.external) {
                          return (
                            <a
                              key={item.name}
                              href={item.href}
                              target='_blank'
                              rel='noopener noreferrer'
                              className={sharedClasses}
                            >
                              {item.name}
                              <span className='sr-only'>
                                {' '}
                                (opens in new tab)
                              </span>
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            aria-current={current ? 'page' : undefined}
                            className={sharedClasses}
                          >
                            {item.name}
                          </Link>
                        );
                      })}

                      <div className='align-right ml-auto'>
                        <ChangeColour />
                        {width >= 1280 && <NewTranslate />}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='absolute inset-y-0 right-0 flex items-center dark:text-white sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  {/*
                    a11y: Translate toggle (mobile).
                    - aria-expanded reflects state.
                    - aria-controls points to the panel it toggles.
                    - Label reflects action.
                    - SVG marked aria-hidden since button is already labeled.
                  */}
                  <button
                    type='button'
                    onClick={() => setMobileTranslateOpen(!mobileTranslateOpen)}
                    aria-expanded={mobileTranslateOpen}
                    aria-controls='mobile-translate-panel'
                    aria-label={
                      mobileTranslateOpen
                        ? 'Close translate selector'
                        : 'Open translate selector'
                    }
                    className='px-4 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 sm:px-0 sm:pb-4 sm:pt-3 md:hidden'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='mr-1 h-6 w-6'
                      aria-hidden='true'
                      focusable='false'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802'
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                id='mobile-translate-panel'
                hidden={!mobileTranslateOpen}
                className={mobileTranslateOpen ? 'md:hidden' : ''}
              >
                {width < 768 && <NewTranslate />}
              </div>
            </div>

            <Disclosure.Panel className='xl:hidden'>
              <div className='space-y-1 px-2 pb-3 pt-2'>
                {navigation.map((item) => {
                  const current = isCurrent(item.href);
                  const sharedClasses = classNames(
                    current
                      ? 'bg-green-900 text-white dark:text-white'
                      : 'text-gray-800 dark:text-gray-100',
                    'block rounded-md px-3 py-2 text-base font-medium',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600'
                  );

                  if (item.external) {
                    return (
                      <Disclosure.Button
                        key={item.name}
                        as='a'
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={sharedClasses}
                      >
                        {item.name}
                        <span className='sr-only'> (opens in new tab)</span>
                      </Disclosure.Button>
                    );
                  }

                  return (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      aria-current={current ? 'page' : undefined}
                      className={sharedClasses}
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                })}

                {/*
                  a11y: theme toggle.
                  - role='radiogroup' with aria-label names the group.
                  - Each button is aria-pressed so assistive tech knows which is active.
                  - We rely on themeChanger.current (if exposed) to know active state;
                    if not exposed, at minimum the group has a name.
                */}
                <ThemeContext.Consumer>
                  {(themeChanger: any) => {
                    const current: 'light' | 'dark' | 'system' | undefined =
                      themeChanger?.current;

                    return (
                      <div
                        className='inline-flex rounded-md shadow-sm'
                        role='group'
                        aria-label='Color theme'
                      >
                        <button
                          type='button'
                          aria-pressed={current === 'light'}
                          onClick={themeChanger.makeLight}
                          className='rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 aria-pressed:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                        >
                          Light
                        </button>
                        <button
                          type='button'
                          aria-pressed={current === 'dark'}
                          onClick={themeChanger.makeDark}
                          className='border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 aria-pressed:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                        >
                          Dark
                        </button>
                        <button
                          type='button'
                          aria-pressed={current === 'system'}
                          onClick={themeChanger.makeSystem}
                          className='rounded-r-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 aria-pressed:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                        >
                          System
                        </button>
                      </div>
                    );
                  }}
                </ThemeContext.Consumer>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
