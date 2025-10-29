import * as React from 'react';
import { titleCase } from 'true-case';

import '@/styles/aboutstyles.module.css';

import Layout from '@/components/layout/Layout';
import LineItem from '@/components/LineItem';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import { audits } from '@/upcomingindex.json';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function Audits(props: any) {
  return (
    <>
      <Navbar />

      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo
          title='Upcoming Audits & Reports'
          description='Upcoming Audits & Reports performed by the LA Controller.'
        />

        <div className=' flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <h1 className='dark:text-white'>Upcoming Audits & Reports</h1>

          <div className='md:hidden mt-3'>
            {audits.map((eachaudit: any, eachauditnum: number) => (
              <LineItem
                key={eachauditnum}
                dept={eachaudit.dept}
                link={`${eachaudit.pre === false ? '' : '/upcoming/'}${
                  eachaudit.link
                }`}
                name={eachaudit.name}
                year={eachaudit.year}
              />
            ))}
          </div>

          <div className='hidden md:block mt-3'>
            <div className='grid grid-cols-3 gap-x-6 gap-y-4 lg:grid-cols-3'>
              {props.audits.map((eachaudit: any, eachauditnum: number) => (
                <div
                  key={eachauditnum}
                  className='mb-2 w-full max-w-xs rounded-lg bg-gray-200 dark:bg-zinc-800 dark:text-white'
                >
                  {/* <a href={eachaudit.link}></a> */}
                  <a
                    href={
                      eachaudit.pre === false
                        ? eachaudit.link
                        : `${eachaudit.link}`
                    }
                    className="block rounded-lg focus:outline-none"
                  >
                    {eachaudit.image ? (
                      <img src={eachaudit.image} className='w-full' />
                    ) : null}
                    <div className=' px-2 py-2'>
                      <p className='dark:text-white'>
                        {eachaudit.year} |{' '}
                        <span>
                          {titleCase(eachaudit.dept).replace(
                            /( )?department( of)?/gi,
                            ''
                          )}
                        </span>
                      </p>
                      <p className='font-bold dark:text-white'>
                        {eachaudit.name}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  return {
    props: {
      audits,
    },
  };
}
