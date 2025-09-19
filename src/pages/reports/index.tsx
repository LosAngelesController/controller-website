import * as React from 'react';
import { titleCase } from 'true-case';

import '@/styles/aboutstyles.module.css';

import Layout from '@/components/layout/Layout';
import LineItem from '@/components/LineItem';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import { finance } from './../../financeindex.json';

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

export default function ReportsIndex(props: any) {
  return (
    <>
      <Navbar />

      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo
          title='Financial Reports'
          description='Financial Reports as mandated by the Charter since 2013'
        />

        <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <h1 className='dark:text-gray-50 mt-4'>Financial Reports</h1>

          <div className='md:hidden mt-6'>
            {finance.map((eachreport: any, eachreportnum: number) => (
              <LineItem
                key={eachreportnum}
                dept={eachreport.dept}
                link={`${eachreport.pre === false ? '' : '/reports/'}${
                  eachreport.link
                }`}
                name={eachreport.name}
                year={eachreport.year}
              />
            ))}
          </div>

          <div className='hidden md:block mt-6'>
            <div className='grid grid-cols-3 gap-x-6 gap-y-4 lg:grid-cols-3'>
              {finance.map((eachreport: any, eachreportnum: number) => (
                <div
                  key={eachreportnum}
                  className='mb-2 w-full max-w-xs rounded-lg bg-gray-200  dark:bg-zinc-800 dark:text-white
                  shadow'
                >
                  <a
                    href={`${eachreport.pre === false ? '' : '/reports/'}${
                      eachreport.link
                    }`}
                    className="block focus:outline-none focus:ring-2 focus:ring-black       focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-white dark:focus:ring-offset-zinc-900 rounded-lg"
                  >
                    <img src={eachreport.image} className='w-full rounded-t-lg'></img>
                    <div className=' px-2 py-2'>
                      <p className='dark:text-white'>
                        {eachreport.year} |{' '}
                        <span>
                          {titleCase(eachreport.dept).replace(
                            /( )?department/gi,
                            ''
                          )}
                        </span>
                      </p>
                      <p className='font-bold dark:text-white'>
                        {eachreport.name}
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

  const newaudits = finance.map((eachItem: any) => {
    delete eachItem.textofpage;
    delete eachItem.pdflink;
    return eachItem;
  });
  return {
    props: {
      newaudits,
    },
  };
}
