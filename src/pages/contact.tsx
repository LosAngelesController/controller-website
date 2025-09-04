import Image from 'next/image';
import * as React from 'react';

import ImportantLinksSection from '@/components/ImportantLinksSection';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { SocialPageSeries } from '@/components/SocialPageSeries';

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

export default function Contact(props: any) {
  return (
    <>
      <Navbar />
      <Layout>
        <Seo />

        <div className='bgColorHeader relative px-4 pt-8 text-base text-sm md:px-32 md:px-0 md:pt-24 md:text-white'>
          <div className='background-1'>
            {/* max-w-2md z-10 mx-auto text-white */}
            <div className='z-10 mx-auto max-w-7xl text-white'>
              <div className='mx-auto flex flex-row lg:max-w-3xl'>
                <div className='my-auto'>
                  {' '}
                  <h1 className="text-xl md:text-3xl">Contact The Controller's Office</h1>
                </div>

                <SocialPageSeries />

                <div className='ml-auto'>
                  <Image
                    src='/images/ken-new-blob-big.png'
                    alt=''
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      {/* contact form footer like */}

      <section className='bg-white dark:bg-gray-900'>
        <div className=' container mx-auto mt-4  px-4 py-4 '>
          <ImportantLinksSection />
        </div>
        <div className='grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4'>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-gray-100'>
              Office
            </h2>
            <ul className='text-gray-500 dark:text-gray-100'>
              <li className='mb-4'>
                <p>200 N. Main Street, Suite 300</p>
              </li>
              <li className='mb-4'>
                <p>Los Angeles, CA 90012</p>
              </li>
              <li className='mb-4'>
                <p>213.978.7211 Fax</p>
              </li>
              <li className='mb-4'>
                <p>www.controller.lacity.gov</p>
              </li>
              <li className='mb-6'>
                <h3 className="text-base">General Inquiries</h3>
              </li>
              <li className='mb-4'>
                <p>213.978.7200</p>
              </li>
              <li className='mb-4'>
                <p>controller.mejia@lacity.org</p>
              </li>
              <li className='mb-6'>
                <h3 className="text-base">Media Inquiries</h3>
              </li>
              <li className='mb-4'>
                <p>diana.chang@lacity.org</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-gray-100'>
              Financial Analysis and Reporting
            </h2>
            <ul className='text-gray-500 dark:text-gray-100'>
              <li className='mb-4'>
                <p>213.978.7300</p>
              </li>
            </ul>

            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-gray-100'>
              Accounting Operations
            </h2>
            <ul className='text-gray-500 dark:text-gray-100'>
              <li className='mb-4'>
                <p>213.978.7292</p>
              </li>
            </ul>

            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-gray-100'>
              Audit Services
            </h2>
            <ul className='text-gray-500 dark:text-gray-100'>
              <li className='mb-4'>
                <p>213.978.7500</p>
              </li>
            </ul>

            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-gray-100'>
              Management Services
            </h2>
            <ul className='text-gray-500 dark:text-gray-100'>
              <li className='mb-4'>
                <p>213.978.7250</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-gray-100'>
              Office Hours
            </h2>
            <ul className='text-gray-500 dark:text-gray-100'>
              <li className='mb-4'>
                <p>Monday-Friday 9am-5pm</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
