'use client';
import Head from 'next/head';
import Link from 'next/link';

import FairMarketRent from '@/components/eviction/FairMarketRent';
import NoticesByCd from '@/components/eviction/NoticesByCd';
import NoticesByMonth from '@/components/eviction/NoticesByMonth';
import NoticeType from '@/components/eviction/NoticeType';
import Top20Zip from '@/components/eviction/Top20Zip';
import Navbar from '@/components/Navbar';

export default function Evictions() {
  return (
    <>
      <Head>
        <title>
          Eviction Notices (February 2023 - April 2025) Summary and Analysis
        </title>
      </Head>
      <Navbar />
      <main id="main-content" tabIndex={-1} className='container mx-auto mb-12 px-4 sm:container lg:max-w-3xl xl:max-w-4xl'>
        <center>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h1 className='pb-4 pt-8 text-center text-3xl font-bold dark:text-white'>
              Eviction Notices (February 2023 - April 2025)
            </h1>
          </div>
          <div>
            <Link
              href='https://docs.google.com/spreadsheets/d/e/2PACX-1vTwkKXHVAsJjGwuEuzY7ILdmYtN_rCmZZsxjECdHK8kG1jGEMjpDa0VWR1UFy97vTNlgtfyysbDYQJL/pubhtml'
              passHref
              target='_blank'
            >
              <button
                className='mb-4 rounded px-4 py-2 font-bold text-black'
                style={{
                  backgroundColor: '#41ffca',
                  border: '1px solid #2b9176'
                }}
              >
                Table Version
              </button>
            </Link>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h2 className='mb-12 text-2xl font-bold'>
              <b>Summary and Analysis</b>
            </h2>
          </div>
          <div
            className='text-left dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <p className='mb-2'>
              [May 2025 Update] We analyzed updated data from the Los Angeles
              Housing Department (LAHD) from February 2023 through April 2025.
            </p>
            <p className='mb-4'>
              The data reveals that from February 2023 to April 2025, LAHD
              received a total of
              <b> 210,901</b> eviction notices. <b>5,427</b> notices were filed
              for April 2025.
            </p>
            <ul className='mb-10 ml-10 list-outside list-disc'>
              <li>
                <b>210,901 eviction notices were filed</b>
              </li>
              <li>
                <b>94% of eviction notices were for “non-payment of rent”</b>
              </li>
              <li>
                <b>89% came with a 3-day notice</b>
              </li>
              <li>
                <b>$3,987.85 is the average amount of rent owed</b>
              </li>
            </ul>

            <br></br>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold'>
              <b>Number of Eviction Notices</b>
            </h4>
          </div>
          <div className='mb-16'>
            {' '}
            <NoticesByMonth />
          </div>
        </center>
        <center>
          <div>
            <h4
              className='mb-4 text-xl font-bold dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <b>Council District</b>
            </h4>
          </div>
          <div className='mb-16'>
            {' '}
            <NoticesByCd />
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold dark:text-white'>
              <b>Top 20 Zip Codes with Highest Number of Eviction Notices</b>
            </h4>
          </div>
          <div className='mb-12'>
            {' '}
            <Top20Zip />
          </div>
          <div
            className='mb-16 text-left dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <p className='mb-4'>
              The table above shows the top 20 Zip Codes with the highest number
              of eviction notices filed with the City from February 2023 to
              April 2025.
            </p>
            <p className='mb-4'>
              Units located within <b>90028 </b>(Hollywood area) had the highest
              number of eviction notices filed from February 2023 to April 2025
              with <b>12,651</b> followed by <b>90012</b> (Downtown LA,
              Chinatown area) with <b>10,053</b>.
            </p>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold dark:text-white'>
              <b>Fair Market Rent</b>
            </h4>
            <div className='mb-4 text-left'>
              <p className='mb-4'>
                The <b>Just Cause Ordinance (JCO)</b> contains a provision where
                a landlord can evict a tenant only if the amount due exceeds one
                month of fair market rent for the Los Angeles metro area.
              </p>
            </div>
          </div>
          <div className='mb-16'>
            {' '}
            <FairMarketRent />
            <p className='italic dark:text-white'>
              Note: The Fair Market Rent (FMR) amounts are adjusted each Fiscal
              Year (October to September).
            </p>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold dark:text-white'>
              <b>Notice Types</b>
            </h4>
            <div className='mb-4 text-left'>
              <p>
                When served with an eviction, tenants are given a deadline to
                either pay rent owed or move out ("pay or quit") or to fix an
                issue or move out ("perform or quit"). Other notices will only
                give a deadline to move out (such as 30-day notices).
              </p>
            </div>
          </div>
          <div className='mb-16'>
            {' '}
            <NoticeType />
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold dark:text-white'>
              <b>Tenant Protection Deadlines</b>
            </h4>
            <ul className='ml-7 list-disc'>
              <li className='mb-4 text-left'>
                <b>Allowable Rent Increases for RSO Units</b>:
              </li>
              <ul className='ml-10 list-[circle]'>
                <li className='mb-4 text-left'>
                  RSO annual rent increases are allowed only once every 12
                  months.
                </li>
                <li className='mb-4 text-left'>
                  The allowable rent increase of 4% still in effect started on{' '}
                  <b>July 1, 2024</b> through <b>June 30, 2025</b>. The
                  additional 1-2% is still applicable if the tenant is provided
                  with electric service and/or gas by the landlord, totaling
                  5-6%.
                </li>
              </ul>
              <li className='mb-4 text-left'>
                Protections for Tenants Impacted by the January 2025 Wildfires
              </li>
              <ul className='ml-10 list-[circle]'>
                <li className='mb-4 text-left'>
                  Tenants are protected from eviction between February 1, 2025
                  and July 31, 2025 if they lost actual wages due to one of the
                  following:
                </li>
                <ul className='ml-10 list-[circle]'>
                  <li className='mb-2 text-left'>
                    Your place of employment or business was destroyed or
                    rendered uninhabitable due to the Wildfires
                  </li>
                  <p className='mb-2 text-left'>OR</p>
                  <li className='mb-2 text-left'>
                    Your employer has laid you off or reduced your working hours
                  </li>
                  <p className='mb-2 text-left'>OR</p>
                  <li className='mb-4 text-left'>
                    You had clients located in the Wildfires, which resulted in
                    a loss of income.
                  </li>
                </ul>
                <p className='mb-4 text-left'>
                  Rent not paid during this time must be paid to the landlord on
                  or before July 31, 2025.
                </p>
                <li className='mb-4 text-left'>
                  <p className='mb-2'>
                    Effective <b>February 24, 2025</b>, eviction protections
                    were approved for those that have unauthorized persons or
                    pets that were displaced due to the fires. The tenant must
                    have notified their landlord in writing by{' '}
                    <b>March 25, 2025</b>.
                  </p>
                  <p>
                    Rent for rental units covered under the RSO cannot be
                    increased for additional tenants and/or pets added to a
                    tenancy if displaced due to the wildfires.
                  </p>
                </li>
              </ul>
              <li className='mb-4 text-left'>
                Eviction notices are required to be filed with the Los Angeles
                Housing Department within (3) business days of service. If not
                filed, a tenant may raise an affirmative defense in an Unlawful
                Detainer (UD) case.
              </li>
            </ul>
            <br></br>
            <p className='text-left'>
              For continuous updates on eviction notices, please visit LAHD’s{' '}
              <b>Eviction Notices Filed</b> dashboard:
            </p>
            <p className='mt-2 text-left'>
              <a
                href='https://housing2.lacity.org/residents/renters/eviction-notices-filed'
                target='_blank'
                className='text-blue-500 underline'
                rel='noreferrer'
              >
                {' '}
                https://housing2.lacity.org/residents/renters/eviction-notices-filed
              </a>
            </p>
          </div>
        </center>
      </main>
    </>
  );
}
