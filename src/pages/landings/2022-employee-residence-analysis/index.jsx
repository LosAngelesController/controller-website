'use client';
import Head from 'next/head';

import Bargaining from '@/components/2022employeeResidenceAnalysis/Bargaining';
import CDBar2 from '@/components/2022employeeResidenceAnalysis/CDBar2';
import Cities from '@/components/2022employeeResidenceAnalysis/Cities';
import Department from '@/components/2022employeeResidenceAnalysis/Department';
import CD from '@/components/2022employeeResidenceAnalysis/EmployeesByCD';
import FiftyK from '@/components/2022employeeResidenceAnalysis/FiftyK';
import FiftyKPieIn from '@/components/2022employeeResidenceAnalysis/FiftyKPieIn';
import FiftyKPieOut from '@/components/2022employeeResidenceAnalysis/FiftyKPieOut';
import HundredK from '@/components/2022employeeResidenceAnalysis/HundredK';
import HundredKIn from '@/components/2022employeeResidenceAnalysis/HundredKIn';
import HundredKOut from '@/components/2022employeeResidenceAnalysis/HundredKOut';
import OutOfState from '@/components/2022employeeResidenceAnalysis/OutOfState';
import Summary from '@/components/2022employeeResidenceAnalysis/Summary';
import SummaryPie1 from '@/components/2022employeeResidenceAnalysis/SummaryPie1';
import SummaryPie2 from '@/components/2022employeeResidenceAnalysis/SummaryPie2';
import Navbar from '@/components/Navbar';

export default function Employees() {
  return (
    <>
      <Head>
        <title>2022 City of LA Payroll Employee Residence Analysis</title>
        <meta
          name='description'
          content="A detailed analysis of the residence locations of City of LA payroll employees in 2022, exploring the impact on the city's economy and community."
        />
        <meta
          name='keywords'
          content='City of LA, Payroll, Employee Residence, 2022 Analysis, Local Hire, City Budget, Community Engagement'
        />
        <meta name='author' content='Executive Office of the Controller' />
        <meta
          property='og:title'
          content='2022 City of LA Payroll Employee Residence Analysis'
        />
        <meta
          property='og:description'
          content="A detailed analysis of the residence locations of City of LA payroll employees in 2022, exploring the impact on the city's economy and community."
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://controller.lacity.gov/landings/2022-employee-residence-analysis' />
        {/* <meta
          property='og:image'
          content='https://controller.lacity.gov/landings/2022-employee-residence-analysis/image.jpg'
        /> */}
      </Head>
      <Navbar />
      <section className='md:max-w container mx-auto px-4 sm:container lg:max-w-3xl xl:max-w-4xl'>
        <center>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h1
              className='pt-8 pb-4 text-xl font-bold dark:text-white lg:text-3xl'
              style={{ fontFamily: 'Helvetica' }}
            >
              2022 City of LA Payroll Employee Residence Analysis
            </h1>
          </div>
          <div
            className='text-left dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <p className='mb-3'>
              When it comes to payroll, <b>where</b> do your tax dollars
              “literally” <b>go</b>?
            </p>
            <p className='mb-3'>
              Payroll is one of the largest expenses of our City's budget. Some
              questions we get asked frequently are{' '}
              <b>“How many City employees live in the City of LA?”</b> and{' '}
              <b>
                “What’s the potential amount of those dollars getting reinvested
                back into our city?”
              </b>
            </p>
            <p className='mb-4'>
              Although City employees are not required to live in the City, some
              of the benefits of City employees living in the city they work in
              include:
            </p>
            <ul className='mb-4 ml-10'>
              <li>
                &bull; Reinvesting tax dollars back into the city (e.g. local
                spending / local taxes)
              </li>
              <li>
                &bull; Increases in our city budget due to more local revenue
                which means more spending on city resources and services
              </li>
              <li>
                &bull; More engagement with the local communities they serve as
                City employees
              </li>
              <li>
                &bull; Shorter commutes and faster response time in case of work
                emergencies
              </li>
              <li>
                &bull; Less traffic, greenhouse gas emissions and stress on
                workers and their families
              </li>
            </ul>
            <p className='mb-3'>
              Where people choose to live is the product of many factors –
              including affordability, lifestyle choices and family ties. But a
              close match between City staff and the communities they serve
              strengthens not only the economic health of Los Angeles, it also
              strengthens the bonds of connection and public trust.
            </p>
            <p className='mb-10'>
              Programs like “Targeted Local Hire” foster that relationship, but
              reform of the Civil Service system is needed to expand those
              opportunities beyond entry-level positions which are usually lower
              paying positions compared to other city jobs as evidenced by our
              analysis. This is especially important considering that our City
              suffers from chronic staffing vacancies where 1 out of every 6
              jobs are unfilled. Other large cities have implemented incentives
              for employees, including first responders, to live in the
              communities they serve. Continued progress toward promoting
              additional affordable housing in our city, especially workforce
              housing and transit-oriented community projects, can offer more
              and better choices that are affordable to City workers.
            </p>
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <Summary />
          </div>
          <div className='mb-6 grid grid-cols-1 sm:mb-8 md:mb-12 md:grid-cols-2 md:gap-6 lg:mb-16'>
            <SummaryPie1 />
            <SummaryPie2 />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <Cities />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <OutOfState />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <FiftyK />
          </div>
          <div className='mb-6 grid grid-cols-1 sm:mb-8 md:mb-12 md:grid-cols-2 md:gap-6 lg:mb-16'>
            <FiftyKPieOut />
            <FiftyKPieIn />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <HundredK />
          </div>
          <div className='mb-6 grid grid-cols-1 sm:mb-8 md:mb-12 md:grid-cols-2 md:gap-6 lg:mb-16'>
            <HundredKOut />
            <HundredKIn />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <CD />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <CDBar2 />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <Department />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <Bargaining />
          </div>
        </center>
      </section>
    </>
  );
}
