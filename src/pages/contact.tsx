import Image from 'next/image';
import * as React from 'react';

import ImportantLinksSection from '@/components/ImportantLinksSection';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { SocialPageSeries } from '@/components/SocialPageSeries';

export default function Contact(props: any) {
  return (
    <>
      <Navbar />
      <Layout>
        <Seo
          title="Contact the Controller's Office"
          description='Contact the Los Angeles City Controller’s Office for general inquiries, media requests, and department phone numbers, hours, and address.'
        />

        {/*
          a11y note: Layout already provides the single <main id='main-content'>
          landmark. Do not add another <main> here.
        */}
        <div className='bgColorHeader relative px-4 pt-8 text-sm text-white sm:text-base md:px-32 md:pt-24'>
          <div className='background-1'>
            <div className='z-10 mx-auto max-w-7xl text-white'>
              <div className='mx-auto flex flex-row lg:max-w-3xl'>
                <div className='my-auto'>
                  <h1 className='text-xl md:text-3xl'>
                    Contact the Controller&apos;s Office
                  </h1>
                </div>

                <SocialPageSeries />

                <div className='ml-auto'>
                  {/*
                    a11y: The portrait identifies the office holder.
                    Alt text gives screen-reader users the same context
                    sighted users get from the photo.
                  */}
                  <Image
                    src='/images/ken-new-blob-big.png'
                    alt='Los Angeles City Controller Kenneth Mejia'
                    width={500}
                    height={500}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className='bg-white dark:bg-gray-900'
          aria-labelledby='contact-info-heading'
        >
          <h2 id='contact-info-heading' className='sr-only'>
            Contact information
          </h2>

          <div className='container mx-auto mt-4 px-4 py-4'>
            <ImportantLinksSection />
          </div>

          <div className='container mx-auto px-4 pb-8 pt-12'>
            <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
              <div className='text-[#4b5e7a] dark:text-gray-100'>
                <h3 className='mb-2 text-sm font-semibold uppercase'>Office</h3>
                <address className='not-italic'>
                  <p className='mb-2'>200 N. Main Street, Suite 300</p>
                  <p className='mb-2'>Los Angeles, CA 90012</p>
                  <p className='mb-2'>
                    <span aria-label='Fax number 2 1 3. 9 7 8. 7 2 1 1'>
                      213.978.7211
                    </span>{' '}
                    Fax
                  </p>
                  <p className='mb-8'>
                    <a
                      href='https://www.controller.lacity.gov'
                      className='underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'
                    >
                      www.controller.lacity.gov
                    </a>
                  </p>
                </address>

                <h4 className='mb-2 text-base'>General Inquiries</h4>
                <p className='mb-2'>
                  <a
                    href='tel:+12139787200'
                    aria-label='Call general inquiries at 2 1 3. 9 7 8. 7 2 0 0'
                    className='underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'
                  >
                    213.978.7200
                  </a>
                </p>
                <p className='mb-8'>
                  <a
                    href='mailto:controller.mejia@lacity.org'
                    className='underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'
                  >
                    controller.mejia@lacity.org
                  </a>
                </p>

                <h4 className='mb-2 text-base'>Media Inquiries</h4>
                <p className='mb-2'>
                  <a
                    href='mailto:diana.chang@lacity.org'
                    className='underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'
                  >
                    diana.chang@lacity.org
                  </a>
                </p>
              </div>

              <div className='text-[#4b5e7a] dark:text-gray-100'>
                <h3 className='mb-2 text-sm font-semibold uppercase'>
                  Financial Analysis and Reporting
                </h3>
                <p className='mb-8'>
                  <a
                    href='tel:+12139787300'
                    aria-label='Call Financial Analysis and Reporting at 2 1 3. 9 7 8. 7 3 0 0'
                    className='underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'
                  >
                    213.978.7300
                  </a>
                </p>

                <h3 className='mb-2 text-sm font-semibold uppercase'>
                  Accounting Operations
                </h3>
                <p className='mb-8'>
                  <a
                    href='tel:+12139787292'
                    aria-label='Call Accounting Operations at 2 1 3. 9 7 8. 7 2 9 2'
                    className='underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'
                  >
                    213.978.7292
                  </a>
                </p>

                <h3 className='mb-2 text-sm font-semibold uppercase'>
                  Audit Services
                </h3>
                <p className='mb-8'>
                  <a
                    href='tel:+12139787500'
                    aria-label='Call Audit Services at 2 1 3. 9 7 8. 7 5 0 0'
                    className='underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'
                  >
                    213.978.7500
                  </a>
                </p>

                <h3 className='mb-2 text-sm font-semibold uppercase'>
                  Management Services
                </h3>
                <p className='mb-2'>
                  <a
                    href='tel:+12139787250'
                    aria-label='Call Management Services at 2 1 3. 9 7 8. 7 2 5 0'
                    className='underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'
                  >
                    213.978.7250
                  </a>
                </p>
              </div>

              <div className='text-[#4b5e7a] dark:text-gray-100'>
                <h3 className='mb-2 text-sm font-semibold uppercase'>
                  Office Hours
                </h3>
                <p className='mb-2'>Monday–Friday, 9 a.m. – 5 p.m.</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
