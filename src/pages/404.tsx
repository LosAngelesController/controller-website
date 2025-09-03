import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

export default function NotFoundPage(props: any) {
  return (
    <>
      <Navbar themeChanger={props.themeChanger} />
      <Layout>
        <Seo templateTitle='Not Found' />

        <section className='bg-white dark:bg-whosestreets'>
          <div className='layout flex min-h-[80vh] flex-col items-center justify-center text-center text-black dark:text-white'>
            {false && (
              <RiAlarmWarningFill
                size={60}
                className='drop-shadow-glow animate-flicker text-red-500'
              />
            )}

            <img
              src='/images/corgi-happy-cropped.png'
              className='w-32 lg:w-64'
            ></img>

            <h1 className='mt-8 text-lg sm:text-4xl md:text-6xl'>
              Uh oh! The corgi couldn't find the page!
            </h1>
            <h2 className=''>404 Error</h2>
            <ArrowLink className='mt-4 dark:text-white md:text-lg' href='/'>
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </Layout>
    </>
  );
}
