import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import { CurrentRevListSources } from '@/components/revenue25/CurrentRevListSources';
import { Debt } from '@/components/revenue25/Debt';
import { HistoricalRevAll } from '@/components/revenue25/HistoricalRevAll';
import Seo from '@/components/Seo';
export default function pafr22(props: any) {
  return (
    <>
      <Navbar />
      <Seo
        title='Revenue Forecast for Fiscal Year 2025'
        description='Forecast & Visualizations of Revenue for the City of Los Angeles'
        image='https://controller.lacity.gov/images/revforecast24-25-thumbnail.png'
      />

      <Layout>
        <div className='flex flex-col pb-2 dark:text-white'>
          <div
            className=''
            style={{
              //url
              background:
                'url(https://controller.lacity.gov/images/revforecast24-25-web.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
            }}
          >
            <div className='mx-auto px-4 pb-3 pt-5 dark:text-gray-100 sm:px-6 lg:max-w-5xl'>
              <div className='xl:mt-64'>
                <span className='xl:py-1'></span>
              </div>
              <h1 className='mt-64 mb-64 px-2 text-2xl text-white sm:px-4 sm:py-4 sm:text-3xl md:text-4xl lg:mb-40 lg:mt-40 xl:mb-32'>
                <span className='rounded-lg bg-black/70 px-2 py-1'>
                  Revenue Forecast 2024-2025 Web Summary
                </span>
                <br />
              </h1>
            </div>
          </div>
          {/* <div
            style={{ marginRight: '15px' }}
            className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100 sm:px-4 lg:mx-auto lg:max-w-7xl'
          > */}
          <div className='mx-auto w-full px-4 pb-3 pt-5 dark:text-gray-100 sm:px-6 lg:max-w-5xl'>
            <br />
            <p>
              Each year, in accordance with City Charter Section 311(c), my
              office submits a Revenue Forecast Report, which includes
              information gathered from City departments, recent regional
              economic reports and meetings with local economists. This report
              covers updated revenue estimates for the remainder of the
              current fiscal year, ending June 30, 2024, and projections for
              fiscal year 2025. Forecasts inherently involve uncertainty,
              however, our estimates of revenue for this year have proven to
              be more accurate than the ones on which the adopted budget was
              ultimately based. Next year’s projections reflect our best
              estimates and seeks to promote responsible budgeting in the
              fiscal year ahead. Also included in the report are the estimated
              requirements for debt service and General Fund cash flow
              borrowing.
            </p>
            <br />
            <p className='text-green-800 underline dark:text-[#41ffca]'>
              <Link
                href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/financial%20reports%2FController%20Revenue%20Forecast%20Report_FY24%2625_%20Final.pdf?alt=media&token=f33ddc87-44f3-4d25-8091-66be3eb931ac'
                target='_blank'
                rel='noreferrer noopener'
                className='text-green-800 underline dark:text-mejito'
              >
                Click here to read the full FY 2025 Revenue Forecast Report
              </Link>
            </p>
            <br />
            <div className='lg:max-w-4xl'>
              <p>
                Explore below actual receipts for fiscal year 2023, projected
                revenues and their sources for fiscal years 2024 and 2025, and
                compare last year’s revenues to the estimates for this and
                next fiscal year.
                <br />
                <br />
                <CurrentRevListSources />
              </p>
            </div>
            <br />
            <div className='lg:max-w-4xl'>
              <h2>Revenue</h2>
              <br />
              <h3>FY 2024 ESTIMATE</h3>
              <br />
              The City’s adopted budget for fiscal year 2024, totals $13.1
              billion. General Fund Revenues represent 60% of that ($7.90
              billion), while the rest, close to $5.2 billion, comes from
              numerous special purpose funds and available balances.
              <br />
              <br />
              The Los Angeles County economy has overcome most of the
              challenges it faced during the COVID-19 pandemic. Following the
              recovery, population decline, housing supply and affordability,
              and poverty have become the primary challenges. Predictions of a
              recession by the end of 2023 never materialized—with a real
              possibility the county avoids a recession in favor of a modest,
              sustained growth in the coming years. Our estimates for fiscal
              year 2023-24 were based on current trends.
              <br />
              <br />
              We estimate that total General Fund revenue will be $7.7 billion
              (including the $136.4 million transfer from the Reserve Fund),
              lower than the Budget by $160.0 million (2.0 percent), and
              exceeding the prior fiscal year by $161.6 million or 2.1
              percent.
              <br />
              <br />
              <h3>Lower Revenues, Higher Expenses Force Emergency Action</h3>
              <br />
              <p>
                <b>
                  {' '}
                  Our last year’s report predicted "trouble ahead".
                  Unfortunately, that proved to be true.
                </b>
                In our March 2023 estimate, we projected revenues of $7.560
                billion for the General Fund (GF). The City’s adopted budget
                assumed GF revenues of $7.767 billion (not including transfers
                from the Reserve Fund). In the CAO’s recent January financial
                report regarding fiscal concerns, they have estimated that the
                City’s General Fund revenues are now $158 million below plan.
                Combined with some departments exceeding their budget, the
                City has been forced to adopt an abrupt hiring freeze on
                filling all jobs except those deemed "critical". With
                double-digit vacancy rates across nearly every City
                department, a hiring freeze will have a negative impact on
                virtually all City services.
              </p>
              <br />
              <h3>MEASURE ULA</h3>
              <br />
              <p>
                Effective April 1, 2023, a new transfer tax, United to House
                LA (Measure ULA) was imposed on residential and commercial
                real-property sales and transfers within the City of Los
                Angeles where the consideration or value is greater than $5
                million. The new tax, which is in addition to the current
                transfer tax, imposes a 4.00% tax on real property sales or
                transfers at over $5 million but less than $10 million, and a
                5.5% tax on real property sales and transfers valued at $10
                million or more. The City generated $15.6 million ULA revenue
                in fiscal year 2022-23 and $156.9 million (as of January 2024)
                in fiscal year 2023-24. Revenue generated by the new tax is
                intended to be used to fund affordable housing and tenant
                assistance programs, including development, construction,
                acquisition, rehabilitation, and operation of housing.
                <br />
                <br />
                The future of ULA still remains unclear due to pending
                litigations and a November 2024 statewide ballot measure that
                threatens to invalidate the Measure. Due to these uncertain
                outcomes and short history, it is difficult for this Office to
                accurately forecast ULA revenue for fiscal year 2024-25. Based
                on collection trend so far, our year-end estimate for 2023-24
                is $270.3 million, $334.3 million or 55.3 percent below the
                $604.6 million in 2023-24 Adopted Budget. Our projection for
                2024-25 is $271.1 million, 0.3 percent above 2023-24 estimate.
                My Office is urging the City to continue to responsibly
                allocate ULA receipts, and to have a contingency plan in place
                to refund any collections already expended in case the measure
                is invalidated.
                <br />
                <br />
              </p>
              <h3>FY 2025 PROJECTION</h3>
              <br />
              <p>
                The future remains uncertain, and it is difficult to predict
                the direction of the economy. The national economy has so far
                experienced no recession over the past year, with inflation
                falling and a continuing strong labor market. Interest rate
                hikes cooled the residential and commercial real estate
                markets. Our local economy was dampened by a fall in overseas
                tourism and major strikes affecting the City’s signature
                industry.{' '}
                <b>
                  Looking ahead, we see some recovery but only an anemic 1.73%
                  increase in General Fund revenues over Fiscal 2023-24
                  projected actuals.
                </b>{' '}
                Our estimate of $7.738 billion in General Fund revenue next
                year falls well short of the sharp rise in City expenses due
                to negotiated labor agreements and other cost increases.
                <br />
                <br />
                The largest revenue increase is projected to come from a 4.1%
                increase in Property Taxes ($83M growth). Vehicle License
                Replacement fee is expected to grow by 5.4%, adding $34
                million. Business License and Parking Users’ taxes are also
                expected to outperform the overall average increase. On the
                other hand, the Power Transfer, franchise payments and
                interest income are all expected to be lower in the coming
                year for a net increase of just $132 million in GF revenue.
                <br />
                <br />
              </p>
            </div>
            <p>
              Explore historical total City revenue by source or category:
            </p>
            <br />
            <HistoricalRevAll></HistoricalRevAll>
            <br />
            <p className='font-semibold'>
              Although we expect a slight growth for fiscal year 2025 based on
              current trends, should the national economy fall into a
              recession within the next fiscal year, the City may realize less
              General Fund revenue than we estimate, as most economically
              sensitive revenues would be impacted.
            </p>
            <br />
            <h3>THE NEED FOR A LONG-TERM STRATEGY</h3>
            <br />
            <p>
              General Fund expenses are on track to increase considerably next
              fiscal year. The State is experiencing its own severe budget
              challenges. The Mayor’s ambitious effort to meet the
              homelessness emergency will continue. Meanwhile, the hiring
              freeze will mean continued stress on both front-line and support
              services from Animal Services to Public Works. The City still
              lacks a credible and comprehensive Capital Improvement Plan to
              address its staggering backlog of deferred maintenance and the
              need to modernize our aging infrastructure.
            </p>
            <br />

            <p>
              All of this means that short-term fixes and budget gimmickry
              will only prolong pain and lead to "an inexorable decline in
              public services, undermining our quality of life and the
              economic prospects of our residents" as our Office warned in
              January when releasing the City’s Annual Comprehensive Financial
              Report.
            </p>
            <br />
            <p>
              I summarized last year’s March Revenue Forecast with this
              advice: "The voters of Los Angeles expressed their choices for
              change in the last election. It will be our shared
              responsibility not to be trapped by business as usual if we are
              to deliver on their expectations. Taking the long view and the
              high road will be essential to making a more equitable, livable
              and resilient city for our four million residents."
            </p>
            <br />
            <p>
              Our residents deserve to have their City’s fiscal house put in
              order so that not only their City government lives within its
              means, but they can too. Our residents deserve to look forward
              to a brighter future for themselves and their families based on
              a strong economy that leaves no one behind.
            </p>
            <br />
            <p>
              <b>
                {' '}
                Now is the time for City leadership to recognize the need to
                move beyond business as usual and get down to the business of
                meeting the changing needs of our changing city.
              </b>
              <br />
              <br />
            </p>
            <h2>Debt</h2>
            <br />
            {/* <br /> */}
            <p>
              The estimated debt service requirement for 2024-25 on the City’s
              long-term debt is $549.8 million, which is $22.8 million less
              than 2023-24 mainly due to decrease in General Obligation Bonds
              (GOB) total payments ($109.5 million compared to $138.0 million
              in 2023-24). The $109.5 million payment is for principal and
              interest payments on the City’s $1.2 billion in outstanding GOB.
              The remaining debt service covers the Municipal Improvement
              Corporation of Los Angeles (MICLA), the Wastewater system, the
              Solid Waste Resources Programs, and Site-Specific Tax Revenue
              Debt.
              <br />
              <br />
              In total, debt service is projected to be 3.68 percent of
              projected 2024-25 General Fund receipts, well under the 15
              percent limit set by the City’s Debt Policy.
            </p>
            <br />
            <Debt />
          </div>
        </div>
        {/* </div> */}
      </Layout>
    </>
  );
}
