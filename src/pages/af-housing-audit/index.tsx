import { Download } from 'lucide-react';
import Head from 'next/head';

import { Button } from '@/components/ui/button';

import Navbar from '../../components/Navbar';

const Index = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Affordable Housing Oversight Audit | City of LA</title>
        <meta
          name='description'
          content="Audit of the Los Angeles Housing Department's oversight of the City's affordable rental housing. Covers habitability, affordability, and financial risk."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen bg-gray-900 text-white'>
        {/* Navigation */}
        <nav
          className='flex items-center justify-between border-b border-gray-800 px-8 py-4'
          role='navigation'
          aria-label='affordable housing oversight audit page navigation'
        >
          <div></div>
          <ul className='flex items-center space-x-8'>
            <li>
              <a
                href='#about'
                className='rounded px-2 py-1 text-gray-300 transition-colors hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#findings'
                className='rounded px-2 py-1 text-gray-300 transition-colors hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'
              >
                Findings
              </a>
            </li>
            <li>
              <a
                href='#recommendations'
                className='rounded px-2 py-1 text-gray-300 transition-colors hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'
              >
                Recommendations
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section
          className='mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 py-16 lg:grid-cols-2'
          aria-labelledby='hero-heading'
          id='about'
        >
          <div className='space-y-8'>
            <h1
              id='hero-heading'
              className='text-5xl font-bold leading-tight'
              style={{ color: '#41ffca' }}
            >
              AFFORDABLE HOUSING
              <br />
              OVERSIGHT AUDIT
            </h1>

            <div className='flex gap-4'>
              <Button
                asChild
                className='font-semibold text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'
                style={{ backgroundColor: '#41ffca' }}
              >
                <a
                  href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/LAHD%20Affordable%20Housing%20Oversight%20-%20Final%20Report%20(2025.06.03).pdf?alt=media&token=55422707-52ee-4230-b167-9fcba2d0a7f9'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Download Affordable Housing Oversight Audit Report PDF (opens in new tab)'
                >
                  <Download className='mr-2 h-4 w-4' aria-hidden='true' />
                  Download Report
                </a>
              </Button>
            </div>

            <p className='text-lg leading-relaxed text-gray-300'>
              Performance audit of the Los Angeles Housing Department (LAHD)'s
              oversight of the affordability, habitability, and financial
              viability of the City's affordable rental housing. The audit
              covers the period between 2020 and 2023.
            </p>
          </div>

          <div className='flex items-center justify-center'>
            <div className='shadow-2xl'>
              <img
                src='/affhousing-cover.jpg'
                alt='Cover of the Affordable Housing Oversight Audit Report showing the title and Los Angeles Controller logo'
                className='w-full max-w-md rounded-lg'
              />
            </div>
          </div>
        </section>

        {/* Key Findings Section */}
        <section
          id='findings'
          className='px-8 py-12 pb-4 text-black'
          style={{ backgroundColor: '#41ffca' }}
          aria-labelledby='findings-heading'
        >
          <div className='mx-auto max-w-7xl'>
            <h2 id='findings-heading' className='mb-8 text-4xl font-bold'>
              KEY FINDINGS
            </h2>

            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
              <div className='space-y-6 lg:col-span-2'>
                <ul className='space-y-6' role='list'>
                  <li className='text-base font-medium leading-relaxed'>
                    LAHD's weak enforcement of affordability requirements has
                    resulted in widespread and unaddressed noncompliance by
                    properties with restricted affordable units
                  </li>

                  <li className='text-base font-medium leading-relaxed'>
                    LAHD's inspection system has fallen short in addressing
                    housing code violations, which threatens the health and
                    safety of tenants contending with mold and infestations
                  </li>

                  <li className='text-base font-medium leading-relaxed'>
                    LAHD's inadequate financial oversight, including its failure
                    to properly assess and monitor the financial health of the
                    City's inventory and loan portfolio, places the City's
                    affordable housing inventory at risk
                  </li>

                  <li className='text-base font-medium leading-relaxed'>
                    LAHD's siloed and reactive oversight strategy has hampered
                    any efforts toward effective and efficient monitoring and
                    tracking of affordable housing units.
                  </li>
                </ul>
              </div>

              <div className='space-y-4'>
                <div
                  className='rounded-lg bg-white bg-opacity-30 p-4'
                  role='img'
                  aria-labelledby='stat1-label'
                >
                  <div className='mb-1 text-4xl font-bold' aria-hidden='true'>
                    33%
                  </div>
                  <div id='stat1-label' className='text-sm font-semibold'>
                    OF PROPERTIES WERE NON-COMPLIANT WITH LAHD'S REQUIREMENTS
                  </div>
                </div>

                <div
                  className='rounded-lg bg-white bg-opacity-30 p-4'
                  role='img'
                  aria-labelledby='stat2-label'
                >
                  <div className='mb-1 text-4xl font-bold' aria-hidden='true'>
                    13%
                  </div>
                  <div id='stat2-label' className='text-sm font-semibold'>
                    OF PROPERTIES WERE NON-COMPLIANT WITH RENT/INCOME LIMITS
                  </div>
                </div>

                <div
                  className='rounded-lg bg-white bg-opacity-30 p-4'
                  role='img'
                  aria-labelledby='stat3-label'
                >
                  <div className='mb-1 text-4xl font-bold' aria-hidden='true'>
                    20%
                  </div>
                  <div id='stat3-label' className='text-sm font-semibold'>
                    OF PROPERTIES WERE NON-COMPLIANT WITH SUBMITTING SUFFICIENT
                    INFORMATION
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Recommendations Section */}
        <section
          id='recommendations'
          className='bg-gray-900 px-8 py-12 pb-4'
          aria-labelledby='recommendations-heading'
        >
          <div className='mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2'>
            <div>
              <h2
                id='recommendations-heading'
                className='mb-8 text-4xl font-bold'
                style={{ color: '#41ffca' }}
              >
                KEY RECOMMENDATIONS
              </h2>

              <ul className='space-y-4 text-gray-300' role='list'>
                <li className='text-sm leading-relaxed'>
                  Develop and implement an enforcement procedure to address
                  cases of noncompliance.
                </li>

                <li className='text-sm leading-relaxed'>
                  Extend its financial oversight and risk-based monitoring
                  system to all affordable housing projects, and incorporate
                  information about risks it identifies.
                </li>

                <li className='text-sm leading-relaxed'>
                  Develop policies to better monitor and enforce the City's loan
                  agreement requirements that impact its ability to conduct
                  financial monitoring.
                </li>

                <li className='text-sm leading-relaxed'>
                  Develop and propose, for the City Council's consideration, a
                  program to strategically preserve distressed affordable
                  housing projects at risk of failing.
                </li>

                <li className='text-sm leading-relaxed'>
                  Develop policies to ensure that onsite audits for
                  federally-funded rental projects are conducted at least once
                  every three years.
                </li>

                <li className='text-sm leading-relaxed'>
                  Review at least annually the performance and compliance of
                  each contractor it uses to carry out responsibilities under
                  federally-funded affordable housing.
                </li>

                <li className='text-sm leading-relaxed'>
                  Develop property standards and inspection procedures for
                  federally-funded rental projects that include how it will
                  address mold and infestation issues.
                </li>

                <li className='text-sm leading-relaxed'>
                  Examine at least annually the financial condition of
                  federally-funded rental projects and take actions to correct
                  problems where feasible.
                </li>

                <li className='text-sm leading-relaxed'>
                  Develop a risk-based monitoring system to identify, assess,
                  and respond to high-risk issues at federally-funded rental
                  projects.
                </li>

                <li className='text-sm leading-relaxed'>
                  Reconcile project data in the Affordable Housing Inventory so
                  that it can be relied on for oversight purposes.
                </li>
              </ul>
            </div>

            <div>
              <h2
                className='mb-8 text-4xl font-bold'
                style={{ color: '#41ffca' }}
                id='statistics-heading'
              >
                CITY OF LA AFFORDABLE HOUSING STATISTICS
              </h2>

              <div className='space-y-12' aria-labelledby='statistics-heading'>
                <div role='img' aria-labelledby='stat4-label'>
                  <div
                    className='mb-4 text-6xl font-bold'
                    style={{ color: '#41ffca' }}
                    aria-hidden='true'
                  >
                    47,000
                  </div>
                  <div
                    id='stat4-label'
                    className='text-xl font-semibold text-gray-300'
                  >
                    AFFORDABLE RESTRICTED RENTAL UNITS ACROSS ~1,600 PROPERTIES
                  </div>
                </div>

                <div role='img' aria-labelledby='stat5-label'>
                  <div
                    className='mb-4 text-6xl font-bold'
                    style={{ color: '#41ffca' }}
                    aria-hidden='true'
                  >
                    400,000
                  </div>
                  <div
                    id='stat5-label'
                    className='text-xl font-semibold text-gray-300'
                  >
                    AFFORDABLE RENTALS NEEDED TO ADDRESS LA'S AFFORDABLE HOUSING
                    SHORTAGE
                  </div>
                </div>

                <div role='img' aria-labelledby='stat6-label'>
                  <div
                    className='mb-4 text-6xl font-bold'
                    style={{ color: '#41ffca' }}
                    aria-hidden='true'
                  >
                    41%
                  </div>
                  <div
                    id='stat6-label'
                    className='text-xl font-semibold text-gray-300'
                  >
                    OF HOUSEHOLDS (OVER 568,000 HOUSEHOLDS) IN THE CITY OF LA
                    ARE LOWER-INCOME RENTERS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
