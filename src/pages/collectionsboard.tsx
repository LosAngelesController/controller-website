import Link from 'next/link';
import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import collections from '@/collectionsboard.json';

interface Meeting {
  date: string;
  agenda?: string;
  minutes?: string;
}

export default function CollectionsBoard(_props: any) {
  return (
    <>
      {/*
        SC 2.4.1 Bypass Blocks — skip link lets keyboard users jump past
        Navbar straight to main content. Visually hidden until focused.
      */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-yellow-400'
      >
        Skip to main content
      </a>

      <Navbar />

      <Layout>
        <Seo
          title='Collections Board of Review'
          description='See Collections Board of Review meeting agendas and minutes, plus details on write-off approvals for uncollectible City accounts in Los Angeles.'
        />

        <main
          id='main-content'
          tabIndex={-1}
          className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'
        >
          <h1 className='py-2 text-3xl font-bold dark:text-white sm:pb-2 sm:pt-4'>
            Collections Board of Review
          </h1>
          <p className='mt-6 dark:text-white'>
            The Los Angeles Administrative Code Section 5.182 establishes a
            Collections Board of Review (Board) to review uncollectible accounts
            of City departments, bureaus and offices. The Board consists of the
            Controller, Director of Finance and the City Administrative Officer,
            or duly appointed representatives of each. The Controller is the
            Chair of the Board. The Board is authorized to approve write off of
            uncollectible accounts when the amount involved is less than $5,000.
            If the uncollectible account is $5,000 or over, the Board may
            recommend write off to the City Council. The Board generally meets
            on the last Wednesday of the months of January, April, July and
            October at 9:00 am in the Controller’s office.
          </p>

          <section className='mt-3' aria-labelledby='meetings-heading'>
            <h2
              id='meetings-heading'
              className='mt-2 text-lg font-semibold dark:text-white'
            >
              Meeting Agendas and Minutes
            </h2>

            {/*
              SC 1.4.10 Reflow — wrapper allows horizontal scroll on very narrow
              viewports without breaking the page layout. table-auto + word-break
              handles long URLs gracefully on larger screens.
            */}
            <div className='mt-2 overflow-x-auto'>
              <table className='w-full border-collapse text-left'>
                <caption className='sr-only'>
                  Collections Board of Review meetings, with links to the agenda
                  and minutes for each date where available.
                </caption>
                <thead>
                  <tr className='border-b-2 border-gray-300 dark:border-gray-600 dark:text-white'>
                    <th scope='col' className='px-2 py-2 font-semibold'>
                      Date
                    </th>
                    <th scope='col' className='px-2 py-2 font-semibold'>
                      Agenda
                    </th>
                    <th scope='col' className='px-2 py-2 font-semibold'>
                      Minutes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(collections as Meeting[]).map((eachmeeting, key) => (
                    <tr
                      key={`${eachmeeting.date}-${key}`}
                      className='border-b border-gray-200 dark:border-gray-700 dark:text-white'
                    >
                      <th
                        scope='row'
                        className='px-2 py-2 align-top font-normal'
                      >
                        {eachmeeting.date}
                      </th>

                      <td className='px-2 py-2 align-top'>
                        {eachmeeting.agenda ? (
                          <Link
                            href={eachmeeting.agenda}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='
                              text-green-800 underline decoration-1 underline-offset-2
                              hover:text-green-900 hover:decoration-2
                              focus-visible:outline focus-visible:outline-2
                              focus-visible:outline-offset-2 focus-visible:outline-yellow-500
                              dark:text-mejito dark:hover:text-green-300
                            '
                            aria-label={`Agenda (PDF) for meeting on ${eachmeeting.date}, opens in a new tab`}
                          >
                            Agenda
                            <span className='sr-only'>
                              {' '}
                              (PDF, opens in new tab)
                            </span>
                          </Link>
                        ) : (
                          <>
                            <span aria-hidden='true'>—</span>
                            <span className='sr-only'>
                              No agenda available for {eachmeeting.date}
                            </span>
                          </>
                        )}
                      </td>

                      <td className='px-2 py-2 align-top'>
                        {eachmeeting.minutes ? (
                          <Link
                            href={eachmeeting.minutes}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='
                              text-green-800 underline decoration-1 underline-offset-2
                              hover:text-green-900 hover:decoration-2
                              focus-visible:outline focus-visible:outline-2
                              focus-visible:outline-offset-2 focus-visible:outline-yellow-500
                              dark:text-mejito dark:hover:text-green-300
                            '
                            aria-label={`Minutes (PDF) for meeting on ${eachmeeting.date}, opens in a new tab`}
                          >
                            Minutes
                            <span className='sr-only'>
                              {' '}
                              (PDF, opens in new tab)
                            </span>
                          </Link>
                        ) : (
                          <>
                            <span aria-hidden='true'>—</span>
                            <span className='sr-only'>
                              No minutes available for {eachmeeting.date}
                            </span>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
