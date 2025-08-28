'use client';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Fragment, useEffect, useState } from 'react';

import NewTranslate from '@/components/NewTranslate';

import { ThemeContext } from '@/themeManager';

import { ChangeColour } from './changeColour';

//import Translate from '@/components/Translate';

interface newiteminterface {
  name: string;
  href: string;
  current: boolean;
}

const navigation: any = [
  { name: 'About', href: '/about' },
  { name: 'Data', href: '/data' },
  { name: 'Oversight', href: '/audits' },
  { name: 'Financials', href: '/reports' },
  { name: 'Budgets', href: '/budgets' },
  // { name: 'Events', href: '/events', current: false },
  { name: 'Press', href: '/press', current: false },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

function getWindowDimensions() {
  if (typeof window != 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return {
      width: 0,
      height: 0,
    };
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window != 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions;
}

export default function Navbar(props: any) {
  const { height, width } = useWindowDimensions();
  const [mobiletranslateopen, setMobileTranslateOpen] = useState(false);

  const navarraycurrent = () => {
    return navigation.map((item: any) => {
      if (typeof window !== 'undefined') {
        if (item.href === window.location.pathname) {
          item['current'] = true;
        } else {
          item['current'] = false;
        }
      } else {
        item['current'] = false;
      }

      return item;
    });
  };
  return (
    <>
      <Script src='//navbar.lacity.org/global_nav.js'></Script>

      <Disclosure
        as='nav'
        className='relative z-50 border-b border-gray-300 drop-shadow-sm dark:bg-whosestreets dark:text-white'
      >
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl pl-2 drop-shadow-sm sm:px-4 md:px-2 lg:px-8'>
              <div className='relative flex h-16 items-center justify-between'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button
                    onClick={() => {
                      setMobileTranslateOpen(false);
                    }}
                    className='inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-[#80ffdc]  hover:text-black focus:outline-none dark:bg-whosestreets dark:text-white dark:hover:text-gray-100'
                  >
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>

                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='flex flex-shrink-0 items-center'>
                    <Link href='/'>
                      <Image
                        className='block h-8 w-auto dark:hidden print:block'
                        src='/images/logo-elect.png'
                        alt='City of Los Angeles Controller’s Office Homepage'
                        height={32}
                        width={72}
                        priority={true}
                        unoptimized={true}
                      />
                      <Image
                        className='hidden h-8 w-auto dark:block print:hidden'
                        src='/images/KennethMejia-logo-white-elect.png'
                        alt='City of Los Angeles Controller’s Office Homepage'
                        height={32}
                        width={72}
                        priority={true}
                        unoptimized={true}
                      />
                    </Link>
                  </div>

                  <div className='hidden sm:ml-4 sm:block lg:ml-6'>
                    <div className='flex gap-x-3 lg:gap-x-4'>
                      {navarraycurrent().map((item: newiteminterface) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'text-gray-800 dark:text-gray-100'
                              : 'text-gray-900 hover:text-black hover:underline dark:text-white dark:hover:text-white',
                            'rounded-md px-2 py-2 text-sm font-medium lg:px-3'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                      {/* <Translate /> */}
                      <div className='align-right  ml-auto'>
                        <ChangeColour />
                      </div>
                      {width >= 768 && <NewTranslate />}
                    </div>
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center dark:text-white sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <button
                    onClick={() => {
                      setMobileTranslateOpen(!mobiletranslateopen);
                    }}
                    aria-label='Open Translate Selector'
                    className='px-4 py-4 sm:px-0 sm:pb-4 sm:pt-3 md:hidden'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='mr-1 h-6 w-6'
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
                className={`${mobiletranslateopen ? 'md:hidden' : 'hidden'}`}
              >
                {width < 768 && <NewTranslate />}
              </div>
            </div>

            <Disclosure.Panel className='md:hidden'>
              <div className='space-y-1 px-2 pb-3 pt-2'>
                {navarraycurrent().map((item: newiteminterface) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-green-900 text-white dark:text-white'
                        : 'text-gray-800 dark:text-gray-100',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <ThemeContext.Consumer>
                  {(themeChanger) => (
                    <div
                      className='inline-flex rounded-md shadow-sm'
                      role='group'
                    >
                      <button
                        type='button'
                        className='rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'
                        onClick={themeChanger.makeLight}
                      >
                        Light
                      </button>
                      <button
                        type='button'
                        className='border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'
                        onClick={themeChanger.makeDark}
                      >
                        Dark
                      </button>
                      <button
                        type='button'
                        className='rounded-r-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'
                        onClick={themeChanger.makeSystem}
                      >
                        System
                      </button>
                    </div>
                  )}
                </ThemeContext.Consumer>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
