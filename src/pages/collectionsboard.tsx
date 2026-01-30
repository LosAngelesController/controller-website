import Link from 'next/link';
import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import collections from '@/collectionsboard.json';



export default function CollectionsBoard(props: any) {
  return (
    <>
      <Navbar />

      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo
          title='Collections Board of Review'
          description='See Collections Board of Review meeting agendas and minutes, plus details on write-off approvals for uncollectible City accounts in Los Angeles.'
        />

        <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <h1 className='py-2 dark:text-white sm:pt-4 sm:pb-2'>
            Collections Board of Review
          </h1>
          <p className='dark:text-white mt-6'>
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

          <div className='mt-3 '>
            <h2 className='mt-2 text-lg font-semibold dark:text-white'>
              Meeting Agendas and Minutes
            </h2>
            <table>
              <caption className="sr-only">
                Meetings with links to agendas and minutes
              </caption>
              <thead>
                <tr className="text-left dark:text-white">
                  <th scope="col" className="px-1 py-2">Date</th>
                  <th scope="col" className="px-1 py-2">Agenda</th>
                  <th scope="col" className="px-1 py-2">Minutes</th>
                </tr>
              </thead>
              <tbody>
                {collections.map((eachmeeting: any, key: number) => (
                  <tr className='dark:text-white' key={key}>
                    <td className='px-1'>{eachmeeting.date}</td>

                    {eachmeeting.agenda ? (
                      <td className='px-1'>
                        <Link
                          href={eachmeeting.agenda}
                          className='text-green-700 dark:text-mejito'
                          aria-label={`Agenda for meeting on ${eachmeeting.date}`}
                        >
                          Agenda
                        </Link>
                      </td>
                    ) : (
                      <td aria-label="Not available"></td>
                    )}

                    {eachmeeting.minutes ? (
                      <td className='px-1'>
                        <Link
                          href={eachmeeting.minutes}
                          className='text-green-700 dark:text-mejito'
                          aria-label={`Minutes for meeting on ${eachmeeting.date}`}
                        >
                          Minutes
                        </Link>
                      </td>
                    ) : (
                      <td aria-label="Not available"></td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
}
