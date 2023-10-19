import { Chart, registerables } from 'chart.js';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';

import Debt from '@/pages/reports/charts/Debt';
import Expenditures from '@/pages/reports/charts/Expenditures';
import Reserve from '@/pages/reports/charts/Reserve';
import Revenue from '@/pages/reports/charts/Revenue';
Chart.register(...registerables);

const Home = () => {
  const buttonStyle = {
    backgroundColor: '#41ffca',
    color: 'black',
    padding: '10px 20px',
    margin: '0 10px',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'inline-block',
  };

  const pdfLink =
    'https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/FY2022-23%20Preliminary%20Financial%20Report_v%20FINAL.pdf?alt=media&token=4a3d798d-6030-41f8-a40b-4b36884c305c'; // Replace with the actual PDF link

  return (
    <>
      <Navbar />
      <Layout>
        <div className='flex flex-col pb-2 dark:text-white'>
          <div
            style={{
              background: 'url(/images/pfr-banner.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              minHeight: '630px',
              minWidth: '1200px',
            }}
          >
            {/* <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100 sm:px-4 lg:mx-auto lg:max-w-7xl'>
              <div className='xl:mt-64'>
                <span className='xl:py-1'></span>
              </div>
              <h1 className='w-content mt-64 mb-64 ml-2 px-2 px-2 text-2xl text-white sm:px-4 sm:py-4 sm:text-3xl md:text-4xl lg:mb-96 lg:mt-96 xl:mb-32'>
                <span className='rounded-lg bg-black bg-opacity-60 px-2 py-1'>
                  Revenue Forecast 2023-2024 Web Summary
                </span>
                <br></br>
              </h1>
            </div> */}
          </div>
        </div>
      </Layout>

      <div className='text-black dark:text-white'>
        <center>
          {/* <h1>FY 23 Preliminary Financial Report</h1> */}
          <br></br>

          <br />
          <br />
          <div
            className='text-left dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <p className='mb-4'>
              One of the City Controller’s primary responsibilities is analyzing
              and reporting on the City’s financial health. The Preliminary
              Financial Report, made available each October after the City
              closes its books, is the first of such report each year. It
              provides information on how the City spent its money over the past
              fiscal year, with data and analysis of the City’s revenues and
              expenditures, reserves and bonded indebtedness.
            </p>

            <p className='mb-4'>
              Last fiscal year saw solid growth, with many General Fund revenue
              sources outperforming Budget and exceeding the previous fiscal
              year. While the post-Pandemic revenue growth has been strong,
              efforts to rein in inflation are likely to cool economic growth
              and potentially tip the economy into recession at some point.
              There are also serious long-term fiscal strains that will not be
              solved by kicking the can down the road:
            </p>

            <p className='mb-4'>
              Scroll below to view the interactive data visualizations. You can
              also read the Controller’s cover letter down below or access the
              full report by clicking here:
            </p>
          </div>
          <a
            href={pdfLink}
            target='_blank'
            rel='noopener noreferrer'
            style={buttonStyle}
          >
            View Full Report
          </a>

          <div
            className='text-left dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <br />
            <br />
            <p className='mb-4'>
              <b>Preliminary Financial Report for Fiscal Year 2022-2023</b>
              <br></br>
            </p>

            <p className='mb-4'>
              Each year at this time, the Controller’s Office submits the
              Preliminary Financial Report (PFR) to review the City of Los
              Angeles’ financials for the prior fiscal year. Our report is the
              City’s primary look back at municipal finances after the close of
              the fiscal year, providing an overview and analysis of revenues,
              expenditures, reserves and bonded indebtedness. In January 2024,
              the Controller’s Office will follow up by issuing the Annual
              Comprehensive Financial Report for 2022-2023, which is prepared in
              accordance with Generally Accepted Accounting Principles and
              audited by an independent firm of certified public accountants.
            </p>

            <p className='mb-4'>
              Accompanying this report are online interactive visualizations
              with 10 years of data, which may be found at
              https://controller.lacity.gov/reports/pfr23. Information on
              special fund balances and uses, historic Reserve Fund balances,
              and other budgetary information may also be found on my website.
              <br></br>
              <br></br>
              While this report covers the previous fiscal year, it is meant to
              help City leaders understand and assess the health of the City’s
              finances – as well as to address future challenges.
            </p>

            <p className='mb-4'>
              <b>Continued Recovery </b>
              <br></br>
              General Fund revenues were marked by strong 9% growth over the
              previous fiscal year. That performance exceeded the adopted budget
              projections by $135.7 million. General Fund budgetary department’s
              actual expenditures increased by 6.6% over the previous fiscal
              year and exceeded the adopted budget by nearly $200 million or
              4.1%. This was offset by savings of $120 million in the
              Unappropriated Balance and $155 million in General City Purposes
              spending. The combination of higher than anticipated revenues and
              lower than expected total expenses saw the City’s General Fund
              begin this fiscal year with General Fund reserves (Reserve Fund,
              Budget Stabilization Fund and Unappropriated Balance line item set
              aside for mid-year adjustments) at a record-high $876.3 million or
              11.1% of the General Fund, exceeding the City’s goal of 10%
              reserves
              <br></br>
              Overall, all City spending for all budgeted funds (including the
              General Fund) was $1.2 billion below the level in the Adopted
              Budget. Special purpose funds accounted for nearly $600 million of
              those savings, along with $316 million in underspending on capital
              projects.
            </p>

            <p className='mb-4'>
              <b> The report highlights a number of key indicators:</b>
              <br></br>
              <br></br>● Major contributors to the strong revenue increase
              include Utility Users Tax revenue ($93 million above budget)
              primarily from higher natural gas and electric prices; franchise
              income ($53.7 million above); Transient Occupancy (Hotel) Tax
              $46.8 million above); and Business Tax ($38.9 million above).
              <br></br>
              <br></br>● Some revenue sources fell below budget projections:
              Documentary Transfer Tax ($77.3 million below); Licenses, Permits
              and Fines ($40.8 million below); Parking Fines ($21.million
              below); and Grant Receipts ($15.6 million below).
              <br></br>
              <br></br>● While staff vacancies resulted in $118 million in
              savings among civilian employees, Police and Fire salaries were
              $29 million over their budgeted amount. The overspending was
              attributed to increased overtime, unbudgeted salary payouts
              associated with agreements with sworn employee unions and excess
              sick payouts.
              <br></br>
              <br></br>● Liability pay-outs of $172.5 million exceeded budget by
              nearly 100%.
              <br></br>
              <br></br>● The City’s debt ratio remains well below the limits
              under City policy, providing the potential for expanded capital
              investment if revenue flows can support new borrowing.
              <br></br>
              <br></br>● The City is not spending what it is budgeting for which
              means less services, resources, and infrastructure are being
              provided for Angelenos.
              <br></br>
              <br></br>● While chronic staffing shortages reduce compensation
              outlays, retaining and attracting staff to fill those jobs puts a
              double strain on finances going forward as raises and new hires
              absorb higher revenues.
            </p>
            <br></br>
            <p className='mb-4'>
              <b>Hard choices lie ahead</b>
              <br></br>
              <br></br>
              Despite widespread staff vacancies, General Fund departmental
              spending actually exceeded last year’s adopted budget by nearly
              $200 million, meaning that rebuilding the City’s workforce will
              make it more difficult to balance the General Fund budget in the
              future.
              <br></br>
              <br></br>● Major contributors to the strong revenue increase
              include Utility Users Tax revenue ($93 million above budget)
              primarily from higher natural gas and electric prices; franchise
              income ($53.7 million above); Transient Occupancy (Hotel) Tax
              $46.8 million above); and Business Tax ($38.9 million above).
              <br></br>
              <br></br>● The contract for rank and file police staff will add
              nearly a billion dollars in additional costs over the next four
              years, with the likelihood of commensurate increases in
              compensation for police management and the larger civilian
              workforce. All by themselves, these adjustments tilt future
              budgets into structural deficits.
              <br></br>
              <br></br>● As our Office has consistently pointed out, pension
              debt and citywide deferred maintenance of vital infrastructure
              require urgent attention. Last year’s underspending of $316
              million in budgeted capital expenditures underscores that the City
              continues to fall behind – which means even higher costs in the
              long run.
              <br></br>
              <br></br>● Again, as we have warned, staff shortages and
              underinvestment in the training, technology, equipment and
              facilities for our workforce hobbles productivity and shortchanges
              our residents. All these pressures will tempt decision-makers to
              utilize the City’s reserves for short-term fixes, dashing the
              hard-won gains of fiscal prudence for maintaining those funds to
              protect against genuine emergencies and maintain strong credit
              ratings to minimize the cost of capital bonding.
            </p>

            <p className='mb-4'>
              To address these sobering concerns, this Office continues to
              advocate for reform of the City’s outmoded budget practices. A
              transition to a two-year cycle would save enormous staff time,
              give greater opportunity for meaningful community participation
              and allow for a more strategic approach to the City’s Finances.
              The City also needs a transparent Capital Improvement Program
              beyond the current wish list of billions of dollars in unfunded
              projects. Participatory budgeting, expanded beyond its current
              experimental pilot, would offer greater citizen engagement in the
              City’s fiscal health.
            </p>

            <p className='mb-4'>
              The City should also break with the opaque process where annual
              departmental budgets are simply marginally adjusted (up or down)
              without fundamentally altering the long-standing budgetary status
              quo. Given the daunting financial realities, the City needs to
              undertake a strategic reallocation of resources to what matters
              most to the long-term wellbeing of all of our residents. Budgets
              are not just numbers, they are a statement of values. As our city
              changes, so should our financial priorities.
            </p>

            <p className='mb-4'>
              By taking the long view and reforming our budgeting practices, the
              City can better serve everyone in our community. Budget reform and
              more accountable stewardship of the public’s resources can also
              minimize abrupt service cuts (which disproportionately hurt our
              most vulnerable) if economic conditions deteriorate
            </p>

            <p className='mb-4'>
              My staff and I appreciate the cooperation shown by City
              departments as we prepared this report. Should you have questions
              or require additional information, please contact my Director of
              Financial Analysis and Reporting, Wally Oyewole at
              rahoof.oyewole@lacity.org.
            </p>

            <p className='mb-4'>Respectfully submitted,</p>

            <p className='mb-4'>
              KENNETH MEJIA
              <br></br>
              City Controller
            </p>

            <br></br>
          </div>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Revenues</h1>
        <p className='mb-4'>
          During the 2022-23 fiscal year, total revenues in budgeted funds were
          $10.9 billion, a 6.5% increase over the prior year and 0.3% less than
          the Budget.
          <br></br>
          General Fund revenues totaled $7.6 billion, a 10.1 percent growth
          compared to last year, and was $135.7 million or 1.8 percent above the
          Budget. <br></br>Revenue in budgeted special revenue funds was $3.2
          billion, a decrease of 1.1 percent over the prior year, and 4.8
          percent under the Budget
          <br></br>
          View this interactive data visualization to explore the relative size
          of the City’s revenue sources and their growth over the past 10 years.
        </p>
        <Revenue />
        <br></br>
        <br></br>
        <h1>Expenditures</h1>
        <p className='mb-4'>
          Total expenditures, including encumbrances were $10.6 billion, $647
          million or 6.5% percent higher than the year prior as spending
          increased across nearly every category.
          <br></br>
          This interactive data visualization compares the expenditures of the
          City’s different departments, as well as non-departmental
          expenditures, over the past 10 years.
        </p>
        <Expenditures />
        <br></br>
        <br></br>
        <h1>Reserves</h1>
        <br></br>
        <p className='mb-4'>
          The Reserve Fund is established to ensure that funds are available for
          unanticipated expenditures and revenue shortfalls in the General Fund.
          The City’s Reserve Fund Policy sets a goal for the Reserve Fund to be
          at least 5% of the General Fund budget every year. On July 1, 2023,
          the Reserve Fund had a balance of $648.3 million, 8.2% of the General
          Fund budget and well above the 5% Reserve Fund Policy goal.
        </p>
        <br></br>
        <p className='mb-4'>
          The Budget Stabilization Fund (BSF) was added to the City Charter in
          2011. The purpose of the BSF is to set aside funds when the City
          exceeds revenue projections to help smooth out years when revenue is
          stagnant or in decline. In fiscal year 2023, the BSF grew slightly to
          $195.8 million.
        </p>
        <p className='mb-4'>
          Click the chart below to view the performance of the Reserve Fund and
          Budget Stabilization Fund, both in dollar terms and as a percentage of
          budgeted General Fund revenues.
        </p>
        <Reserve />
        <br></br>
        <h1>Debt</h1>
        <p className='mb-4'>
          The City’s debt management policy establishes guidelines for the
          structure and management of the City’s debt obligations. These
          guidelines include a non-voter-approved debt service cap of 6% and a
          total debt service cap of 15% as a percent of General Fund revenues.
          The City’s debt service obligations decreased to 3.9% last fiscal
          year.
        </p>
        <Debt />
      </div>
    </>
  );
};

export default Home;
