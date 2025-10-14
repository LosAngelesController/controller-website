import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import { CurrentRevListSources } from '@/components/revenue24/CurrentRevListSources';
import { Debt } from '@/components/revenue24/Debt';
import { HistoricalRevAll } from '@/components/revenue24/HistoricalRevAll';
import Seo from '@/components/Seo';
export default function pafr22(props: any) {
  return (
    <>
      <Navbar />
      <Seo
        title='Revenue Forecast for Fiscal Year 2024'
        description='Forecast & Visualizations of Revenue for the City of Los Angeles'
        image='https://controller.lacity.gov/images/thumbnail-reve-forecast.png'
      />
      <Layout>
        <div className='flex flex-col pb-2 dark:text-white'>
          <div
            style={{
              background: 'url(/images/revforecastcoverpic-yee.jpg)',
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
                  Revenue Forecast 2023-2024 Web Summary
                </span>
              </h1>
            </div>
          </div>
          <div className='mx-auto w-full px-4 pb-3 pt-5 dark:text-gray-100 sm:px-6 lg:max-w-5xl'>
            <br />
            <p>
              Each year, in accordance with City Charter Section 311(c), my
              office submits a Revenue Forecast Report, which includes
              information gathered from City departments, recent regional
              economic reports and meetings with local economists. This report
              covers updated revenue estimates for the remainder of the current
              fiscal year, ending June 30, 2023, and projections for fiscal year
              2024. Although forecasts inherently involve uncertainty, this
              report offers our best estimates and seeks to promote responsible
              budgeting in the fiscal year ahead. Also included in the report
              are the estimated requirements for debt service and General Fund
              cash flow borrowing.
            </p>
            <br />
            <p className='text-green-800 underline dark:text-[#41ffca]'>
              <Link
                href='/revenueforecastfy2024.pdf'
                target='_blank'
                rel='noreferrer noopener'
                className='text-green-800 underline dark:text-mejito'
              >
                Click here to read the full FY 2024 Revenue Forecast Report
              </Link>
            </p>
            <br />
            <div className='lg:max-w-4xl'>
              <p>
                Explore actual receipts for fiscal year 2022, projected revenues
                and their sources for fiscal years 2023 and 2024, and compare
                last year’s revenues to the estimates for this and next fiscal
                year.
              </p>
              <div className='my-6'>
                <CurrentRevListSources />
              </div>
            </div>
            <br />
            <div className='lg:max-w-4xl'>
              <h2>Revenue</h2>
              <br />
              <h3>FY 2023 Estimate</h3>
              The City's adopted budget for this fiscal year 2023, totals $11.76
              billion. General Fund Revenues represent 63% of that ($7.45
              billion), while the rest, close to $4.31 billion, comes from
              numerous special purpose funds and available balances. The economy
              has remained resilient despite earlier fears of an imminent
              recession. However, the California's economic outlook for the
              remainder of the fiscal year remains uncertain, and mainly depends
              on national economic policy. Our Estimates were based on current
              trends with no recession scenario. We estimate the General Fund
              receipts for the current fiscal year will total $7.5 billion, 0.7%
              more than the budgeted amount and 7.8% above the last fiscal year
              (excluding ARPA receipt of $639.5 million). The General Fund is
              projected to end the fiscal year with a $52 million revenue
              surplus. Transient occupancy tax revenues will increase by 21.4%
              over last fiscal year, franchise income will increase by 27.7%,
              sales tax revenues will increase by 24% and documentary transfer
              tax receipts will rise by 22%. All three utility user’s tax
              receipts will increase - gas by 23.9%, electric by 5.6% and
              telephone by 8.6%. However, documentary transfer tax will
              experience biggest decline of 25.3% ($76M) due to real estate
              sales slowdown. Also, parking fines will decrease by 8.7%,
              occupancy tax receipts from short-term rentals will fall this
              fiscal year by 7.9%, and revenues from licenses, permits, fees and
              fines will fall by 0.7%.
              <br />
              <br />
              <h3>Measure ULA</h3>
              <p>
                Effective April 1, 2023, a new transfer tax, United to House LA
                (Measure ULA) will be imposed on residential and commercial
                real-property sales and transfers within the City of Los Angeles
                where the consideration or value is greater than $5 million. The
                new tax, which is in addition to the current transfer tax,
                imposes a 4.00% tax on real property sales or transfers at over
                $5 million but less than $10 million, and a 5.5% tax on real
                property sales and transfers valued at $10 million or more.
                Revenue generated by the new tax is intended to be used to fund
                affordable housing and tenant assistance programs, including
                development, construction, acquisition, rehabilitation, and
                operation of housing.
              </p>
              <br />
              <p>
                While the voters overwhelmingly passed Measure ULA in November
                2022 election, the constitutionality of the Measure is currently
                being challenged in court. At this point, my office cannot
                predict the litigation outcome or estimate ULA revenue. It is
                also unclear at this point what impact (if any) the measure will
                have on the overall real estate market in the City of Los
                Angeles, and the existing General Fund documentary transfer tax
                revenue.
                <br />
                <br />
              </p>
              <h3>FY 2024 Projection</h3>
              <p>
                The future remains uncertain, and it is difficult to predict the
                direction of the economy. Economists differ on the likelihood of
                a recession during fiscal 2024. Continuing strong employment and
                consumer spending have led many to alter their forecasts to
                suggest a potential “soft landing” without a recession or only a
                mild one. Much depends on whether inflation continues to abate
                and how harshly the Fed reacts. Our projection for the upcoming
                year assumes that the economy will slow down in fiscal year
                2024, but no recession.
                <br />
                <br />
              </p>
            </div>
            <HistoricalRevAll></HistoricalRevAll>
            <br />
            <p className='font-semibold'>
              Although we expect a slight growth of 0.8% for fiscal year 2024,
              as of the date of this report, the perception of where the federal
              monetary policy is headed as well as the potential impact on
              national economy continue to change every day. Should the economy
              fall into a recession within the next fiscal year, the City may
              realize less General Fund revenue than we estimate as most
              economically sensitive revenues would be impacted.
            </p>
            <br />
            <p>
              Expenses are on track to increase considerably next fiscal year.
              The scope of Mayor Bass' homeless emergency efforts to fund
              temporary housing and spur construction of additional permanent
              housing is unknown, but will undoubtedly require major funding.
              The City continues to operate with chronically high levels of
              staff vacancies. While this mitigates expenses, it is
              unsustainable across nearly every one of the City's mission
              critical services Failure to invest in the skills and
              effectiveness of the workforce will further degrade efficiency and
              effectiveness of city services to the community.
            </p>
            <br />
            <p>
              Existing deferred commitments to staff compensation as well as
              upcoming contract negotiations taking place in an inflationary job
              market put increased pressure on the City's ability to live within
              its means. Moreover, the poor performance of pension investments
              in the current economic climate will trigger ongoing increases in
              pension obligations, which already consume fully 15% of the City's
              General Fund budget.
            </p>
            <br />
            <p>
              Finally, the City of Los Angeles has for decades deferred
              maintenance and investment in vital infrastructure. The results
              are increasingly visible in our streets, sidewalks, and parks,
              while silent decay is taking its toll on the support systems that
              will come under increased pressure from climate change. Postponing
              capital investment will only mean higher costs (and risks) in the
              future.
            </p>
            <br />
            <p>
              These four pressures: funding new priorities, restoring staff
              capacity, negotiating sustainable compensation levels and
              investing in 21st Century infrastructure cannot be solved in a
              single budget year. They will require long-term strategic
              collaboration between the Mayor, Council, labor and the people of
              Los Angeles. The Controller's Office pledges our commitment to
              link arms to make the City's budget more transparent and help
              frame the needed community dialogue to ensure it more effectively
              reflects the vital priorities of a changing city.
              <br />
              <br />
            </p>
            <h2>Debt</h2>
            <p>
              The estimated debt service requirement for 2023-24 on the City's
              long-term debt is $553.5 million, which is $3.3 million more than
              2022-23 due to new General Obligation Bonds, Series 2022-A. A
              total of $138.0 million of this sum is for principal and interest
              payments on the City's $1.0 billion in outstanding General
              Obligation Bonds (GOB). The remaining debt service covers the
              Municipal Improvement Corporation of Los Angeles (MICLA), the
              Wastewater system, the Solid Waste Resources Programs, and
              Site-Specific Tax Revenue Debt. In total, debt service is
              projected to be 4.01 percent of projected 2023-24 General Fund
              receipts, well under the 15 percent limit set by the City’s Debt
              Policy.
            </p>
            <Debt />
          </div>
        </div>
      </Layout>
    </>
  );
}
