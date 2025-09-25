import Link from 'next/link';
import * as React from 'react';

import BarChart from '@/components/BarChart';
import BondedDebtandLongTermNotesPayable from '@/components/BondedDebtandLongTermNotesPayable';
import CityActivities from '@/components/CityActivities';
import GeneralFundExpenses from '@/components/GeneralFundExpenses';
import GeneralFundRevenues from '@/components/GeneralFundRevenues';
import NetPosition from '@/components/NetPosition';
import { Credit } from '@/components/pafr23visualise/credit';
import TopEmployeeChart from '@/components/TopEmployee';
import TotalExpenditure from '@/components/TotalExpendituresExpenses';
import TotalRevnues from '@/components/TotalRevnues';

export default function pafr24(props: any) {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Seo
        title='Popular Annual Financial Report FY24'
        description='Report & Visualizations of Expenditures, Revenues, and Debt for the City of Los Angeles'
        image='https://controller.lacity.gov/images/pafr24-thumbnail.jpg'
      /> */}
      {/* <Layout> */}
      <div className='flex flex-col pb-2 dark:text-white'>
        <div
          className=''
          style={{
            //url
            background: 'url(/images/pafr24.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
        >
          <div className=' container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
            <div className='xl:mt-64'>
              <span className='xl:py-1'></span>
            </div>
            <h1 className='w-content mb-64 ml-2 mt-64 px-2 px-2  text-2xl text-white sm:px-4 sm:py-4 sm:text-3xl md:text-4xl lg:mb-96 lg:mt-96 xl:mb-32'>
              <span className='rounded-lg bg-black bg-opacity-60 px-2 py-1'>
                Popular Annual Financial Report FY24
              </span>
              <br></br>
              <span className='rounded-lg bg-black bg-opacity-60 px-2 py-1 text-base italic sm:text-lg'>
                A summary of the City of Los Angeles Annual Comprehensive
                Financial Report for Fiscal Year ended June 30, 2024.
              </span>
            </h1>
          </div>
        </div>
        <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
          <br />
          <p className='lg:max-w-5xl'>
            LA City Controller Kenneth Mejia releases the Annual Comprehensive
            Financial Report (ACFR) each January to provide a complete picture
            of the City’s finances. This website contains the Popular Annual
            Financial Report (PAFR), a summary of the ACFR that presents the
            information in a more accessible format, along with charts and
            graphs measuring how the City serves residents.
          </p>
          <br />
          <p className='text-green-800 underline dark:text-[#41ffca]'>
            <Link
              href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Press%20Releases%2Fpafr25%2FACFR%202024_secured.pdf?alt=media&token=aec1a01a-d50a-41d1-90b1-1797353479ba'
              target='_blank'
              rel='noreferrer noopener'
              className='text-green-800 underline dark:text-mejito'
            >
              Click here for the full FY2024 Annual Comprehensive Financial
              Report
            </Link>
          </p>
          <br />
          <div className='lg:max-w-5xl'>
            <h2>A Message from City Controller Kenneth Mejia</h2>
            <p>
              <br />
              Honorable Mayor Karen Bass <br />
              Honorable Members of the Council of the City of Los Angeles
              <br />
              Community Members of the City of Los Angeles
              <br />
              <br />
              <br />
              <img
                className='float-right mb-2 ml-2 w-32 sm:mb-4 sm:ml-4 sm:w-64'
                src='/images/new_KM.jpg'
                alt='Portrait of Kenneth Mejia'
              />
              As the Controller for the City of Los Angeles, our Office has the
              Charter responsibility to prepare and publish the City’s Annual
              Comprehensive Financial Report (ACFR) of the City for the fiscal
              year ended June 30, 2024. As we are all painfully aware, revenue
              shortfalls, liability payouts, and departmental over-expenditures
              caused the City to end the year in deficit, requiring drawing down
              nearly half the City’s General Fund Reserves.
              <br />
              <br />
              As we warned at this time last year, the City is continuing to
              spend well beyond our actual revenues and adopted budget. The City
              exceeded various department and non-department adopted budgets
              triggering austerity measures that adversely impacted most
              departments and city services. The top areas of spending over
              budget (when compared on a cash basis) included:
              <br />
              <br />
              <ul className='mb-4 ml-12 list-disc'>
                <li>
                  Liability Claims by $153 million (largest shares include
                  Police at $75.1 million and Miscellaneous at $71.6 million)
                </li>
                <li>Police by $127 million</li>
                <li>General Services by $105 million</li>
              </ul>
              At the opposite end, there was underspending in critical areas
              related to homelessness, infrastructure, animal services, and
              basic services to make up for the overspending.
              <br />
              <br />
              In last year’s letter, we predicted <q>deficits for years to come
              (that) will force wrenching choices that threaten the vital
              services Angelenos rely on. This is not the result of a sudden
              economic downturn, but the culmination of years of short-term
              budget balancing at the cost of long-term fiscal sustainability.</q>
              <br />
              <br />
              Short-term budget balancing resulted in the elimination of 1700 then-vacant positions, which included a majority of
              positions that weren’t vacant for very long. As the year has progressed, the service impacts of those cuts are
              hitting as departments scramble with severely diminished capacities to address undiminished (and even growing)
              needs.
              <br />
              <br />
              Given the devastating damage and disruptions from the firestorm
              disaster, the fiscal stress could not come at a worse time. We’ve
              gone from record levels of General Fund reserves 18 months ago to
              the brink of needing to officially declare a “fiscal emergency.”
              The full scope is just emerging for disaster response expenses;
              revenue loss from property damage and business disruption; and the
              costs of recovery and rebuilding. This added stress on the budget
              comes on top of the growing responsibilities for preparing for the
              Olympic and Paralympic Games in 2028.
              <br />
              <br />
              In January 2025, three rating agencies, S&P, Fitch, and Kroll,
              placed the City's ratings on negative watch status, indicating
              that the City's ratings are under review and that there is
              meaningful potential for a negative rating change. Additionally,
              Moody's Ratings revised the outlooks on the City's issuer rating
              for wastewater revenue bonds rating from stable to negative.
              <br />
              <br />
              Last year at this time we noted that, <q>The contract for rank and
              file police staff ratified last fall will add nearly a billion
              dollars in additional costs over the next four years, with the
              likelihood of commensurate increases in compensation for police
              management. The new five year contracts negotiated with civilian
              bargaining units will have an even larger budget impact, putting
              budget projections deeply in the red for the next five years.</q>
              <br />
              <br />
              Unfortunately, those sober predictions proved accurate last fiscal
              year – and in the current fiscal year, the underbudgeting for the
              impacts of those contracts leaves many departments forced for the
              first time into automatic overspending simply to honor the payroll
              costs of their existing (and understaffed) workforce who are now
              working even more overtime to keep up. Similarly, the continued
              underbudgeting of the soaring costs of legal liability judgments
              and settlements resulted in $240.4 million last fiscal year and
              estimated to be $301 million for the current fiscal year.
              <br />
              <br />
              The 3.0% increase over FY23 in General Fund revenues falls below
              both average historical growth and the rate of growth in
              expenditures. While property taxes (which represent 40.2% of
              General Fund revenue) increased by $136.4 million (5.1%),
              economy-sensitive revenues declined overall versus prior year:
              <ul className='my-4 ml-12 list-disc'>
                <li className='mb-2'>
                  The ongoing inflation, higher interest rates, and the impacts
                  of the entertainment industry strike negatively affected local
                  economic activities in FY24, resulting in Sales tax decreasing
                  by $28.2 million (4.0%) and Business tax falling by $35.2
                  million (4.3%).
                </li>
                <li className='mb-2'>
                  Utility users tax (which comprise gas, electric and
                  communication users’ taxes) revenues posted a decrease of
                  $21.5 million (3.0%) primarily due to a drop in gas users tax
                  receipts, after a return of previously high natural gas prices
                  to normal levels.
                </li>
                <li>
                  Other tax revenues decreased by $66.2 million or 8.1%. There
                  were reductions in both Franchise Income ($30.1 million) and
                  in Documentary Transfer Tax revenue ($49 million), the latter
                  reflecting the slump in real estate sales. Intergovernmental
                  revenues decreased by $11.1 million due to a reduction in
                  State and Federal grant receipts.
                </li>
              </ul>
              <br></br>
              While revenues lagged, General Fund expenditures jumped to $6.8
              billion, $841 million or 14.0% increase over FY23, primarily due
              to the following:
              <ul className='my-4 ml-12 list-disc'>
                <li className='mb-2'>
                  Salaries and Benefits increased by $343.6 million (11.2%) with
                  increases for sworn and civilian employees from new labor
                  agreements as well as increased sworn overtime for the Police
                  and Fire Departments and large retirement and sick payouts for
                  the Fire Department.
                </li>
                <li className='mb-2'>
                  Liability payouts for legal claims rose by $246.6 million,
                  well beyond the $82 million budgeted.
                </li>
                <li className='mb-2'>
                  Capital outlays increased by $68.2 million, although capital
                  expenditures still fall far short of the unfunded needs for
                  street, sidewalk, street light and other vital infrastructure
                  repair and replacement.
                </li>
                <li className='mb-2'>
                  Contractual services, operating equipment, and supplies rose
                  by $138.8 million (12.6%) due to increased costs for
                  homelessness programs, solid waste activities, fleet
                  maintenance and repair, auto parts and equipment, fuel and
                  energy, human resources management project, and outside legal
                  counsel.
                </li>
                <li>
                  The combined expenditures for retirement contributions and
                  workers' compensation rose by $31.7 million. Additionally,
                  interest payments for debt service increased by $10.7 million,
                  primarily due to higher interest payments for Tax and Revenue
                  Anticipation Notes (TRAN) borrowing that has been used to earn
                  a discount on the City’s pension payments.
                </li>



              </ul>
              <br />
              The late Dr. Herbert Stein, who chaired the President’s
              Council of Economic Advisors, wrote, <q>Things that can’t go on
              forever, don’t.</q> Given the grim fiscal prospects for the years
              ahead, it is time for fundamental change to the City’s
              unsustainable budgetary practices.
              <br />
              <br></br>
              We continue to advocate for the Mayor and Council to develop a
              strategic five-year plan to fix our City’s finances. Without a
              long-term approach to putting our fiscal house in order,
              short-term decisions will doom Los Angeles to an inexorable
              decline in public services, undermining our quality of life and
              the economic prospects of our residents.
              <br />
              <br />
              I strongly commend the Mayor’s capital infrastructure vision
              outlined in her Executive Directive No. 9 which lays out a
              comprehensive approach to <q>making our neighborhoods more resilient
              and equitable by revitalizing our streets and tackling years of
              deferred maintenance and underinvestment in our most vulnerable
              communities.</q>
              <br />
              <br />
              In that spirit, we have advocated for a transition to a two-year
              budget cycle that would save enormous staff time, give greater
              opportunity for meaningful community participation and allow for a
              more systematic approach to the City’s Finances.
              <br />
              <br />
              Department heads also need greater flexibility in allocating
              shrinking resources. They have the responsibility for delivering
              quality services yet lack the authority to direct hiring and
              spending within their budgets to best deliver those results.
              <br />
              <br />
              The City also needs greater transparency and accountability in its
              budgeting. Unlike most cities, LA segregates pension and benefit
              costs from department budgets, obscuring the true total cost of
              personnel. Similarly, LA could learn from cities that have
              mechanisms for rewarding departments that hold down liability
              costs and/or penalize those which fail to address preventable
              liability claims.
              <br />
              <br />
              Our Office is eager to collaborate with the Mayor, Council and
              greater community to reform the City’s budgeting process and
              priorities. This must be a long-term commitment because the
              problems are long-standing and will require a phased approach to
              solving. Budget reform and more accountable stewardship of the
              public’s resources are vital to minimize abrupt service cuts
              (which disproportionately hurt our most vulnerable).
              <br />
              <br />
              Finally, I would like to acknowledge the professional and
              dedicated staff of the Financial Analysis and Reporting Division
              of the Controller’s Office for the preparation of this report. I
              would also like to express my appreciation to all those in our
              Office and citywide who made contributions to the report. At a
              time of staff shortages and resource constraints, their work is
              deeply valued and respected.
              <br />
              <br />
              Should you have questions or require additional information,
              please contact my Director of Financial Analysis and Reporting,
              Wally Oyewole at{' '}
              <u className='text-blue-400'>rahoof.oyewole@lacity.org</u>
              .
              <br />
              <br />

            </p>
            <p>
              Respectfully submitted,
              <br />
              <img
                src='/images/sig-light.png'
                aria-label="Kenneth Mejia\'s Signature"
                className='w-64 dark:hidden'
              />
              <img
                src='/images/sig-dark.png'
                aria-label="Kenneth Mejia\'s Signature"
                className='hidden w-64 dark:block'
              />
              Kenneth Mejia
              <br />
              Los Angeles City Controller
            </p>
          </div>
          <br />
          <h2 className='mt-3'>About Popular Annual Financial Reporting</h2>
          <p className='mt-2  lg:max-w-5xl '>
            <img
              className='float-left mb-4 mr-1 w-32 dark:hidden md:w-48 lg:w-64'
              src='/images/award24.png'
              alt='Certificate awarded by the Government Finance Officers Association for excellence in FY2023 financial reporting'
            ></img>
            <img
              className='float-left mb-4 mr-1 hidden w-32 dark:block md:w-48 lg:w-64'
              src='/images/award24.png'
              alt='Certificate awarded by the Government Finance Officers Association for excellence in FY2023 financial reporting'
            />
            <div className='mt-3' style={{ paddingLeft: '18rem' }}>
              Government Finance Officers Association of the United States and
              Canada (GFOA) has given an Award for Outstanding Achievement in
              Popular Annual Financial Reporting to the City of Los Angeles for
              its Popular Annual Financial Report for the fiscal year ended June
              30, 2023. The Award for Outstanding Achievement in Popular Annual
              Financial Reporting is a prestigious national award recognizing
              conformance with the highest standards for preparation of state
              and local government popular reports.
            </div>
            <br />
            <div className='mt-3' style={{ paddingLeft: '18rem' }}>
              In order to receive an Award for Outstanding Achievement in
              Popular Annual Financial Reporting, a government unit must publish
              a Popular Annual Financial Report, whose contents conform to
              program standards of creativity, presentation, understandability,
              and reader appeal. An Award for Outstanding Achievement in Popular
              Annual Financial Reporting is valid for a period of one year only.
              We believe our current report continues to conform to the Popular
              Annual Financial Reporting requirements, and we are submitting it
              to GFOA to determine its eligibility for another Award.
            </div>
          </p>

          <br></br>
          <h2 className='mt-3'>Local Economy</h2>

          {/* <p className='mt-2 lg:max-w-5xl'>
            The City and its surrounding metropolitan region feature incredible diversity in both
            population and the economy. Tourism and hospitality, professional and business services,
            international trade, entertainment production, and wholesale trade and logistics all contribute
            significantly to local employment. The Port of Los Angeles handles the largest volume of containerized
            cargo of all U.S. ports and ranks as number one in cargo value for U.S. waterborne foreign traffic.
            According to preliminary ACI statistics, in the calendar year 2022, Los Angeles International Airport (LAX)
            was the sixth busiest airport in the world in terms of total passengers and ninth busiest in terms of total
            cargo metric tons. According to the U.S. DOT originating and destination (O&D) Survey of Airline Passenger
            Traffic for calendar year 2022, LAX had the largest number of domestic O&D passengers in the U.S. O&D passengers
            begin and end their journeys at LAX, while connecting passengers transfer to other flights at LAX.
            <br />
            <br />

          </p> */}




          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "1rem",
            }}
          >
            <article>
              <img
                style={{
                  float: "left",
                  marginRight: "1rem",
                  marginBottom: "1rem",
                  width: "256px",
                  display: "block",
                }}
                src="/images/conventioncenter.png"
                alt="Convention Center"
                className="soup-image"
              />
              <p className="mt-2 lg:max-w-5xl">
                According to the U.S. Bureau of Economic Analysis, Los Angeles-Long Beach-Anaheim, CA (MSA), with a Gross Domestic Product of $1.295 trillion in 2023, is the second- ranked metropolitan area in the United States. The City and its surrounding metropolitan region feature incredible diversity in both population and the economy. Tourism and hospitality, professional and business services, international trade and education, entertainment production, sports, and wholesale trade and logistics all contribute significantly to local employment.
              </p>
              <p className="mt-2 lg:max-w-5xl">
                The Port of Los Angeles handles the largest volume of containerized cargo of all U.S. ports and ranks as number one in cargo value for U.S. waterborne foreign traffic. According to ACI World’s 2023 Airport Traffic Report, in the calendar year 2023, Los Angeles International Airport (LAX) ranked as the eighth busiest airport in the world in terms of total passengers and the ninth busiest airport in the world in terms of total cargo. The Los Angeles MSA experienced strong economic growth in 2023, with an increase in economic output of 4.8%, as measured by Gross Domestic Product.

              </p>
              <p className="mt-2 lg:max-w-5xl">

                The fiscal year 2025 General Fund Budget assumes the City would see solid revenue growth while continuing to make historic investments to reduce homelessness and improve public safety. While the economic activities and General Fund revenues continue to remain stable during the first half of fiscal year 2025, there remain several factors that could affect future economic outlook and the economically-sensitive revenue sources.
              </p>
              <p className="mt-2 lg:max-w-5xl">
                A critical part of Los Angeles' economy depends on the entertainment industry. The filming activities reportedly hit a new low in 2024, driven by studio cost cutting and the relocation of production to cheaper locales, including U.K. and Central Europe. Some executives attributed the decline in production to increased cost of labor from the 2023 strike, a contention rejected by union leaders. An undisputed factor is California’s inability to compete with tax incentives offered by other states and countries, a situation that Governor Newsom is now trying to address. Businesses that rely on the entertainment economy are rallying behind the Governor’s proposal to increase annual film and TV tax credit allocation from $330 million to $750 million. This should help keep more production in Los Angeles. It is unclear, however, how much of the decline can be reversed with the new tax incentive policy.

              </p>
              <p className="mt-2 lg:max-w-5xl">

                Property taxes are the biggest source of revenue for the General Fund and higher mortgage interest rates continue to affect affordability and real estate sales volume in Los Angeles and surrounding areas. However, the California Association of Realtors (C.A.R.) recently released its 2025 housing and economic forecast, predicting a stable economy and lower interest rate environment that would stimulate sales and price appreciation in 2025. Any improvement in housing sales and prices should boost transfer tax revenues to the General Fund.
              </p>
              <p className="mt-2 lg:max-w-5xl">
                Finally, at the time of this report, the City is dealing with a major fire disaster in Pacific Palisades and other communities, the magnitude of which the City has never seen. Several widespread fires burned thousands of acres, devastating many communities and families. The fires have reportedly burned thousands of homes and businesses, with many lives lost. While the firefighters and first responders are still working around the clock to put out fires in many areas, the disaster so far has been described as one of the worst disasters in United States’ history, with preliminary property loss estimates ranging in the billions. The impacted Angelenos face a long road ahead as they try to rebuild their lives. Although the scale of the impact is still being assessed at the time of this report, the loss of this magnitude is bound to significantly affect the local economy and revenues to the City.

              </p>
              <p className="mt-2 lg:max-w-5xl">

                Because of all these factors, the City is likely to be facing fiscal challenges for a foreseeable future. It is therefore incumbent on City policymakers to plan accordingly, rethink priorities and implement General Fund expenditure reduction measures, should in case the projected growth in General Fund revenue fails to materialize. The City’s initial fire damage estimate submitted to FEMA shows a total of $358.0 million in costs related to emergency response, infrastructure/structural damages and debris removal estimated through January 10, 2025.
              </p>

            </article>
          </div>
          {/* <h2 className='mt-3'>Local Economy</h2>

          <p className='mt-2 lg:max-w-5xl'>
            According to the U.S. Bureau of Economic Analysis, Los Angeles-Long
            Beach-Anaheim, CA (MSA), with a Gross Domestic Product of $1.295
            trillion in 2023, is the second-ranked metropolitan area in the
            United States. The City and its surrounding metropolitan region
            feature incredible diversity in both population and the economy.
            Tourism and hospitality, professional and business services,
            international trade and education, entertainment production, sports,
            and wholesale trade and logistics all contribute significantly to
            local employment.
            <br />
            <br />
          </p>

          <p className='mt-2 lg:max-w-5xl'>
            The Port of Los Angeles handles the largest volume of containerized
            cargo of all U.S. ports and ranks as number one in cargo value for
            U.S. waterborne foreign traffic. According to ACI World’s 2023
            Airport Traffic Report, in the calendar year 2023, Los Angeles
            International Airport (LAX) ranked as the eighth busiest airport in
            the world in terms of total passengers and the ninth busiest airport
            in the world in terms of total cargo. The Los Angeles MSA
            experienced strong economic growth in 2023, with an increase in
            economic output of 4.8%, as measured by Gross Domestic Product.
            <br />
            <br />
          </p>
          <p className='mt-2 lg:max-w-5xl'>
            The fiscal year 2025 General Fund Budget assumes the City would see
            solid revenue growth while continuing to make historic investments
            to reduce homelessness and improve public safety. While the economic
            activities and General Fund revenues continue to remain stable
            during the first half of fiscal year 2025, there remain several
            factors that could affect future economic outlook and the
            economically-sensitive revenue sources.
            <br />
            <br />
          </p>
          <p className='mt-2 lg:max-w-5xl'>
            The Ports of Los Angeles and Long Beach reported increased activity
            in late 2024 as shipments were diverted away from East Coast ports
            due to unresolved labor negotiations. The recent elections
            reportedly also had an impact on trade volume as the country braces
            for potential tariffs under the incoming administration. With the
            President’s promises to impose tariffs on the U.S.'s top three
            trading partners—Mexico, Canada, and China—many merchants are
            reportedly sending large shipments before the new administration
            takes office and tariffs take effect. While these recent activities
            bode well for the Los Angeles economy in the short run, the
            long-term impact of tariff policies remains uncertain.
            <br />
            <br />
          </p>
          <p className='mt-2 lg:max-w-5xl'>
            A critical part of Los Angeles' economy depends on the entertainment
            industry. Filming activities reportedly hit a new low in 2024,
            driven by studio cost-cutting and the relocation of production to
            cheaper locales, including the U.K. and Central Europe. Some
            executives attributed the decline in production to increased labor
            costs following the 2023 strike, a contention rejected by union
            leaders. An undisputed factor is California’s inability to compete
            with tax incentives offered by other states and countries, a
            situation that Governor Newsom is now trying to address. Businesses
            that rely on the entertainment economy are rallying behind the
            Governor’s proposal to increase annual film and TV tax credit
            allocation from $330 million to $750 million. This should help keep
            more production in Los Angeles. It is unclear, however, how much of
            the decline can be reversed with the new tax incentive policy.
            <br />
            <br />
          </p>
          <p className='mt-2 lg:max-w-5xl'>
            Property taxes are the biggest source of revenue for the General
            Fund. Higher mortgage interest rates continue to affect
            affordability and real estate sales volume in Los Angeles and
            surrounding areas. However, the California Association of Realtors
            (C.A.R.) recently released its 2025 housing and economic forecast,
            predicting a lower interest rate environment that will ease the
            current "lock-in" effect (where sellers with lower mortgage rates
            have been unwilling to sell), leading to an increase in housing
            inventory. C.A.R. expects the shift to encourage both buyers and
            sellers to re-enter the market, boosting California home sales by
            10.5 percent and prices by 4.6 percent in 2025. Locally, Zillow, a
            national real estate company, also predicts steady growth in home
            sales and a 2.3 percent price appreciation for Los Angeles in 2025.
            These projections assume a stable economy and lower interest rates
            in 2025. Any improvement in housing sales and prices should boost
            transfer tax revenues to the General Fund.
            <br />
            <br />
          </p>
          <p className='mt-2 lg:max-w-5xl'>
            Another significant factor affecting the outlook for the second half
            of the fiscal year is the lack of clarity on the economic impact of
            the proposed policies of the incoming federal administration. In
            January 2025, new U.S. President Donald Trump returns to the White
            House with plans to implement several economic policies he promised
            during the 2024 campaign. On one hand, small business optimism and
            consumer confidence have picked up, and expectations of tax cuts,
            deregulations, and energy policies have boosted projections of
            corporate earnings. On the other hand, according to the University
            of California (UCLA) Anderson Forecast, some of the policies could
            have a notable effect on California and Los Angeles’ economy.
            Policies around tariffs on the U.S.'s three largest trading
            partners, immigration, and regulations may stoke inflation while
            stifling economic growth. How these policies ultimately manifest is
            not necessarily clear at this time, as many of these policies would
            not come into focus until late 2025.
            <br />
            <br />
          </p>
          <p className='mt-2 lg:max-w-5xl'>
            Finally, at the time of this report, the City is dealing with a
            major fire disaster in Pacific Palisades and other communities, the
            magnitude of which the City has never seen. Several widespread fires
            have burned thousands of acres, devastating many communities and
            families. The fires have reportedly burned thousands of homes and
            businesses, with many lives lost. While firefighters and first
            responders are still working around the clock to put out fires in
            many areas, the disaster so far has been described as one of the
            worst disasters in United States’ history, with preliminary property
            loss estimates ranging in the billions. The impacted Angelenos face
            a long road ahead as they try to rebuild their lives. Although the
            scale of the impact is still being assessed at the time of this
            report, a loss of this magnitude is bound to significantly affect
            the local economy and revenues to the City.
            <br />
            <br />
          </p>
          <p className='mt-2 lg:max-w-5xl'>
            Because of all these factors, the City is likely to be facing fiscal
            challenges for a foreseeable future. It is therefore incumbent on
            City policymakers to plan accordingly, rethink priorities and
            implement General Fund expenditure reduction measures, should in
            case the projected growth in General Fund revenue fails to
            materialize. The City’s initial fire damage estimate submitted to
            FEMA shows a total of $358.0 million in costs related to emergency
            response, infrastructure/structural damages and debris removal
            estimated through January 10, 2025.
            <br />
            <br />
          </p> */}

          {/* <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <article>
                <img
                  style={{
                    float: "left",
                    marginRight: "1rem",
                    marginBottom: "1rem",
                    width: "256px",
                    display: "block",
                  }}
                  src="/images/conventioncenter.png"
                  alt="Convention Center"
                  className="soup-image"
                />
                <p className="mt-2  lg:max-w-5xl">
                  The post-pandemic economic recovery continued through fiscal
                  year 2024 and resulted in robust General Fund revenue growth for
                  the City. The strong revenues allowed the City to end fiscal
                  year 2024 in a solid financial position, with a July 1, 2024
                  Reserve Fund balance of $648.3 million, an all-time high.
                </p>
                <p className="mt-2  lg:max-w-5xl">
                  There are several economic factors that could impact revenues
                  and the overall City’s fiscal position in the upcoming year.
                  According to the University of California (UCLA) Anderson
                  Forecast, while the California economy is growing faster than
                  the U.S. economy, there is a risk that high interest rates might
                  still disrupt the current expansion on the downside. Even though
                  recession worries have subsided, increased military conflict
                  abroad and a sense of greater geopolitical risk have kept
                  uncertainty about the future high. The uncertainty factor,
                  combined with a slower-growing U.S. economy in 2024, suggests a
                  slower-growing California economy in 2024.
                </p>
                <p className="mt-2  lg:max-w-5xl">
                  The unemployment rate within the City of Los Angeles appears to
                  be inching up as well. Although labor disputes involving
                  SAG-AFTRA, Writers, and Longshore workers that consumed most of
                  2024 have subsided, the Los Angeles Hotel workers' strike is
                  still unsettled. According to the California Employment
                  Development Department, the unemployment rate for the City of
                  Los Angeles metro area rose from 4.6 percent in November 2022 to
                  5.3 percent in November 2024.
                </p>
                <p className="mt-2  lg:max-w-5xl">
                  Another factor is the higher mortgage interest rates, which
                  continue to put downward pressure on real estate sales volume
                  and prices. According to the California Association of Realtors’
                  November 2024 Sales Report, although the median price was up by
                  7.2 percent in Los Angeles, sales volume declined by 5.1 percent
                  compared to November 2022. These economic factors contribute to
                  downward economic pressures which could negatively affect the
                  City’s economically sensitive revenue sources and the City’s
                  financial position in 2024.
                </p>
              </article>
            </div> */}

          {/* Add Visual - Demographic and Economic Data */}

          {/* <h2 className='mt-3 dark:text-white'>City of LA Demographic</h2> */}
          <h2 className='mt-3 dark:text-white'>
            Demographic and Economic Data
          </h2>
          <div className='lg:max-w-5xl'>
            <BarChart />
          </div>
          {/* Add Visual - Principal Employers */}

          {/* <h2 className='mt-3 dark:text-white'>Top Employers in Los Angeles County 2024</h2> */}
          <h2 className='mt-3 dark:text-white'>Principal Employers</h2>
          <div className='lg:max-w-5xl'>
            <TopEmployeeChart />
          </div>

          {/* <br />
            <Demographics />
            <br />
            <Employers /> */}
        </div>
        <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100 sm:px-4 lg:mx-auto lg:max-w-7xl'>
          <h2 className='mt-3'>City Organization</h2>
          <div className='clear: both;'></div>

          <p className='mt-2 lg:max-w-5xl'>
            The City operates under a Mayor-Council form of government. The
            Mayor supervises the administrative processes of the City and works
            with the City Council in matters relating to legislation, budget and
            finance. The 15-member City Council enacts ordinances, levies taxes,
            authorizes contracts and public improvements, adopts zoning and
            other land use contracts, and provides necessary resources for the
            budgetary departments and offices of the City. The City Controller
            and City Attorney are independently elected citywide.
            <br />
            <img
              className='float-left mb-1 mr-1 w-80 dark:hidden md:w-48 lg:w-64'
              src='/images/vistahermosa.png'
              alt='Vista Hermosa Park overlooking downtown Los Angeles'
            ></img>
            <br />
            The City has 46 departments, bureaus, commissions and offices, 39 of
            which have their operating funds annually budgeted by the City
            Council. The Department of Water and Power, Harbor Department, and
            the Department of Airports are publicly-owned entities under the
            control of boards appointed by the Mayor and confirmed by the City
            Council. Several other departments are fiscally independent or under
            the control of independent boards.
            <br />
            <br />
            Public services provided by the City include police, fire and
            paramedics, residential refuse collection and disposal, wastewater
            collection and treatment, street maintenance and traffic management,
            enforcement of building safety laws, libraries, recreation and
            parks, community development, housing and services for seniors,
            planning; two airports, harbor, power and water services, and the
            convention center. Performance data on some of these services is
            collected below in the “City Activities” section.
          </p>
          <br />

          <div className='mt-2 rounded-lg border-4 border-mejito bg-mejito bg-opacity-30 px-2 py-2 dark:bg-opacity-20 lg:max-w-5xl'>
            {/* Pick of sherlock killa of the left side insert here later */}
            <img
              src='/sherlockcorgi.png'
              className='float-left mb-1 mr-1 w-32'
              alt=''
            />
            <p>
              <h2 className='mt-3'>Key Terms</h2>
              <span className='font-bold'>Governmental Activities:</span>{' '}
              Functions of the City that are primarily supported by taxes and
              intergovernmental revenues. These include general government,
              police, fire and paramedics, public works, health and sanitation
              (other than sewer services), transportation, cultural and
              recreational services, and community development.
              <br />
              <br />
              <span className='font-bold'>Business-Type Activities:</span>{' '}
              Functions and services provided to the general public, that are
              intended to recover all or a portion of their costs through user
              fees and charges. These include airports, harbor, power, water,
              sewer and convention center services.
              <br />
              <br />
              <span className='font-bold'>Net Position:</span> The difference
              between the value of what the City owns minus the value of what
              the City owes. One can look at net position as the City’s "net
              worth."
              <br />
              <br />
              <span className='font-bold'>General Fund:</span> The main
              operating fund of the City, which is used to finance general
              government operations.
              <br />
              <br />
              <span className='font-bold'>Capital Assets:</span> These include
              land, buildings, facilities, equipment, infrastructure,
              intangibles, construction in progress, nuclear fuel and a natural
              gas field that the city owns. The City uses these capital assets
              to provide services to its citizens; consequently, these assets
              are not available for future spending.
            </p>
          </div>
        </div>

        <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
          <div className='PortraitofCityOfLA lg:max-w-5xl'></div>

          <h3 className='mt-3'>Total City Revenues: $21.9 billion</h3>

          <p className='mt-2 lg:max-w-5xl'>
            For the fiscal year that ended on June 30, 2024, total City{' '}
            <b>
              revenues were $21.9 billion, an increase of $217.6 million or 1.0%{' '}
            </b>
            over the prior year.
            <br></br>
            <br></br>
          </p>
        </div>

        <div className='container mx-0 px-4 pb-3 pt-3  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
          {/* <h3 className='mt-3'>Total City Revenues: $21.6 billion</h3> */}
          {/* Add Visual - City Revenues */}
          <div className='lg:max-w-5xl'>
            <TotalRevnues />
          </div>
          <p>
            Total revenues of governmental activities were $10.3 billion, while
            the combined operating revenues from City’s six business-type
            activities was $11.5 billion. Revenues were relatively flat compared
            to previous year.
          </p>

          <h3 className='mt-3'>Total City Expenses: $20.7 billion</h3>
          <p className='mt-3'>
            For the fiscal year that ended on June 30, 2024,{' '}
            <b>
              {' '}
              expenses were $20.7 billion, an increase of $1.2 billion or 6.0%
              more{' '}
            </b>{' '}
            than the prior year. The growth in expenses outpaced the growth in
            revenues due to cost increases in many governmental activities.
          </p>
          <div className='lg:max-w-5xl'>
            <TotalExpenditure />
          </div>
        </div>

        <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
          <p className='mt-4 lg:max-w-5xl'>
            Total expenses increased by $1.2 billion or 6.0% compared to FY 23.
            Expenses increased by $1.3 billion in the governmental activities
            across various functions due to increases in salary expense,
            retirement costs, contract services and procurement, and subsidies
            to outside organizations. Net pension and OPEB-related expenses for
            the City’s Sworn and civilian retirement systems increased by $408.2
            million, and expenses for contractual services, procurement,
            operating equipment, supplies, and payments to outside agencies rose
            by $854.5 million. Contractual expense increases were primarily
            driven by inflationary impacts, including rising prices for
            commodities, materials, and energy. These were offset by a decrease
            in expenses related to the City’s business-type activities by $119.2
            million.
            <br />
            <br />
            <br />
          </p>

          {/* <Changeinnetpos /> */}
        </div>

        <div className='container mx-0 px-4 pb-3 pt-3  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
          <div className='lapotrait lg:max-w-5xl'></div>
          <br></br>
          <h2>Net Position</h2>
          <p className='mt-2 lg:max-w-5xl'>
            City of Los Angeles’s Net position provides insight into the City’s
            financial position as of June 30, 2024. It includes a summary of
            what the City owns (assets and deferred outflows)
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {' '}
              minus
            </span>{' '}
            what the City owes (liabilities and deferred inflows).
            <br />
            <br />
          </p>
          <div className='flex flex-col gap-y-2 md:flex-row md:gap-x-3 lg:max-w-5xl'>
            <div className=' rounded-lg bg-gray-100 px-3 py-3 dark:bg-gray-800 md:w-1/2'>
              <p className='font-bold'>Assets represent what the City owns:</p>
              <ul className='list-disc px-4'>
                <li>Cash and pooled investments</li>
                <li>Receivables</li>
                <li>Capital assets (land, buildings and infrastructure)</li>
              </ul>
              <br></br>
              Total City Assets: $89.0 billion.
              <br />
              Deferred Outflows of Resources: $5.3 billion.
              <br />
              <span className='font-bold'>Total: $94.3 billion.</span>
              <br />
              <br />
            </div>
            <div className='rounded-lg bg-gray-100 px-3 py-3 dark:bg-gray-800   md:w-1/2'>
              <p className='font-bold'>
                Liabilities represent what the City owes:
              </p>
              <ul className='list-disc  px-4'>
                <li>Bonds and notes</li>
                <li>Claims and judgments</li>
                <li>Unearned revenue</li>
                <li>Accounts payable and accrued expenses</li>
              </ul>
              <br></br>
              Total City Liabilities: $59.4 billion. <br />
              Deferred Inflows of Resources: $3.2 billion.
              <br />
              <span className='font-bold'>Total: $62.6 billion.</span>
            </div>
          </div>
          <h3>
            <br />
            <br />
            <b>
              {' '}
              Net Position: $31.7 billion, $1.1 billion, 3.6% increase from FY23
            </b>
          </h3>
          The City’s net position is illustrated in the table below:
          <div className='lg:max-w-5xl'>
            <NetPosition />
          </div>
          <br></br>
          <div className='lg:max-w-5xl'>
            <p>
              The net position of $31.7 billion consisted of:
              <br />
              <br />
              <span className='font-bold'>
                Net investment in capital assets:
              </span>{' '}
              $24.4 billion, including land, building, infrastructure and
              equipment, less accumulated depreciation and outstanding debt,
              deferred outflows and deferred inflows of resources related to
              acquisition, construction or improvements. This is an increase of
              $1.6 billion over FY23. The City uses these assets to provide
              services to its citizens so these assets are not available for
              future spending.
              <br />
              <br />
              <span className='font-bold'>Restricted Net Position:</span> : $7.2
              billion, which represents amounts with constrained placed on their
              use by (1) external groups such as creditors, grantors,
              contributors, or laws and regulations of other governments or, (2)
              law through constitutional provisions or enabling legislation.
              This is an increase of $284.8 million over FY23. These assets are
              also not available for future spending.
              <br />
              <br />
              <span className='font-bold'>Unrestricted Net Position:</span>{' '}
              $148.5 million is the net unrestricted amount. Compared to FY23,
              the overall unrestricted position decreased by $823.4 million,
              primarily due to an increase in governmental deficit. This amount
              may be used to meet City’s obligations related to its
              business-type activities.
              <br />
              <br />
              <h2 className='mt-3'>Dollars In – General Fund Revenues:</h2>
              City of Los Angeles’ government resources and services are funded
              through several different revenue streams. In FY24, the City
              collected General Fund revenues of <b>$6.9 billion</b> with $5.7
              billion or 82% coming from taxes.
              <br></br>
              <br></br>
              <GeneralFundRevenues />
              {/* <ChangeinnetposGen /> */}
            </p>

            {/*Net Pos Generally */}
            {/* <p className='mt-3'>In FY23, General Fund revenues of $6.7 billion was a 9.3% increase from FY 22, and exceeds General Fund expenditures by $745.5 million.
</p> */}
            <br></br>
            {/* <p>
              The General Fund is the general operating fund of the City and
              includes transactions of the Reserve Fund and other accounts that
              have General Fund type activity for generally accepted accounting
              principles reporting purposes.
              <br />
              <br />
              On June 30, 2022, the General Fund reported a total fund balance
              of $1.5 billion, composed of $66.5 million nonspendable; $85.1
              million committed; $724.3 million assigned for general government
              purposes; and $621.8 million unassigned.
              <br />
              <br /> */}

            <span className='font-bold  '>
              <b>In FY24,</b> General Fund revenues was{' '}
              <b>
                {' '}
                $6.9 billion, $200.7 million (3.0%) increase over FY23, and
                exceeds General Fund expenditures by $105.4 million.
              </b>
            </span>

            {/* </p> */}
            {/* <h2 className='mt-3'>General Fund Revenues</h2> */}
            {/* <h4 className='font-bold'>
              FY 22 Total General Fund Revenues: $6.2 billion, $498.5 million
              8.8% increase from FY 21
            </h4> */}
            {/*Revenues  vis */}

            {/* revenues text */}
            <ul className='list-disc'>
              <li>
                <span className='font-bold'>Property taxes</span>,which
                represent 40.2% of General Fund revenue, increased by $136.4
                million (5.1%), due to growth in current secured property tax
                receipts of $110.7 million and a combined increase of $38.5
                million from vehicle license fees replacement and Ex-Community
                Redevelopment Agency tax increment receipts, and the increase
                offset by a decrease of $10.1 million in prior secured property
                tax receipts.
              </li>
              <li>
                <span className='font-bold'>
                  Economy-sensitive revenues continued post pandemic recovery
                </span>
                : The ongoing inflation, higher interest rates, and the impacts
                of the entertainment industry strike negatively affected local
                economic activities in FY24, resulting in
                <b> Sales tax revenues </b>
                decreasing by $28.2 million (4.0%) and{' '}
                <b> Business tax revenues </b>
                falling by $35.2 million (4.3%).
                <b> Utility users tax </b> (which comprise gas, electric and
                communication users’ taxes) revenues posted a decrease of $21.5
                million (3.0%). The decline was primarily due to a drop of $52.0
                million in gas users tax receipts, following a return of
                previously high natural gas prices to normal levels. This
                decrease was patially offset by a growth of $5.0 million in
                communications users tax revenue from one-time receipts of prior
                year tax liabilities, and an increase of $25.5 million in
                electrical users’ tax revenues due to rising energy prices and
                higher consumption.
              </li>
              {/* <li>
                <span className='font-bold'>Utility users tax</span> revenues posted an increase of $73.1 million (11.6%),
                 as growth in gas users’ tax and electrical users taxes, offset the modest decline in communications users tax.
                  Gas user taxes contributed $61.7 million of the increase in this category primarily due to the increased energy
                   prices and consumption during much of the fiscal year. 

              </li> */}
              <li>
                <span className='font-bold'>Other tax revenues</span> decreased
                by $66.2 million or 8.1%. Some of the key revenue sources in
                this category are:
                <b> Parking and Transient Occupancy Tax</b>, which increased by
                $11.6 million as a result of increased international tourism.
                There was a combined drop of $30.1 million from{' '}
                <b>Franchise Income</b>, a reduction of $49.0 million in{' '}
                <b>Documentary Transfer Tax</b> revenue due to continued slump
                in real estate sales as higher mortgage rates continue to affect
                housing affordability. And intergovernmental revenues decreased
                by $11.1 million due to a reduction in State and Federal grant
                receipts.
                <li>
                  <span className='font-bold'>Charges for services</span>,
                  increased by $122.5 million or 33.3% over prior fiscal year.
                  This increase is primarily due to increased billings from (1)
                  emergency ambulance services provided by the Fire Department,
                  and (2) services rendered to the Los Angeles County
                  Metropolitan Transportation Authority (LACMTA) by the Police
                  Department.
                </li>
                <li>
                  <span className='font-bold'>Net investment earnings </span>
                  and <span className='font-bold'>other revenues</span>{' '}
                  increased by $114.2 million. Increase in investment earnings
                  resulting from the higher interest rates and a change in the
                  fair value of investments accounted for $105.0 million, while
                  other revenues increased by $9.2 million.
                </li>{' '}
              </li>
            </ul>
          </div>
          <br />
          <div className='lg:max-w-5xl'>
            <h2 className='mt-3'>Dollars Out – General Fund Expenditures </h2>
            <p>
              The City of Los Angeles provides a wide range of services to
              residents ranging from public safety, fire and paramedics,
              residential refuse collection and disposal, wastewater collection
              and treatment, street maintenance and traffic management,
              enforcement of building safety laws, libraries, recreation and
              parks, community development, etc.{' '}
            </p>
            <br></br>
            <br></br>
            <p>
              The operating fund from which the City accounts for the money
              coming in and the expenditures paid out is the General Fund.
            </p>
          </div>
          <br></br>
          <br></br>
          <div className='lg:max-w-5xl'>
            <GeneralFundExpenses />
          </div>
          <div className='lg:max-w-5xl'>
            <h4 className='font-bold'>
              In FY24 General Fund Expenditures was $6.8 billion, $840.7 million
              (14.0%) increase over FY23, primarily due to the following:
            </h4>
            {/*Expenses  vis */}

            <br />
            <ul className='list-disc'>
              <li>
                <span className='font-bold'>Salaries and Benefits</span>{' '}
                increased by $343.6 million (11.2%), due to compensation
                adjustments for sworn and civilian employees from new labor
                agreements, increased sworn overtime for the Police Department,
                retirement sick payouts for the Fire Department, overtime for
                fire life safety inspections and various cost-of-living
                adjustments and bonus pay provisions for civilian labor
                agreements.
              </li>
              <li>
                <span className='font-bold'>Liability</span> payouts for
                liability claims related to tort, non-tort, and tax-related
                cases rose by $246.6 million, or 211.4%. This is a significant
                increase, due primarily to increased number of liability payouts
                resulting from court judgments or settlements.
              </li>
              <li>
                <span className='font-bold'>Capital outlays</span> increased by
                $68.2 million, or 100.7%. This rise is primarily comprised of a
                $30.1 million increase in building acquisitions by the General
                Services Department, $20.5 million attributed to right-to-use
                (RTU) subscription contracts, $11.0 million in costs related to
                various capital improvement projects, and a $7.1 million
                increase in vehicle and transportation equipment acquisitions by
                the Police Department.
              </li>
              <li>
                <span className='font-bold'>
                  Contractual services, operating equipment, and supplies
                </span>{' '}
                went up by, $138.8 million, or 12.6%. This rise is primarily
                attributed to higher costs in several areas, including
                homelessness programs, solid waste activities, fleet maintenance
                and repair, auto parts and equipment, fuel and energy, human
                resources management project, and outside legal counsel, among
                others across various departments.
              </li>
              <li>
                <span className='font-bold'>
                  Debt service and other expenditures
                </span>{' '}
                The combined expenditures for retirement contributions and
                workers' compensation rose by $31.7 million. Additionally,
                interest payments for debt service increased by $10.7 million
                due to $9.4 million increase in interest payments for Tax and
                Revenue Anticipation Notes (TRAN), driven by higher interest
                rates. There was also a $1.3 million interest payments increase
                related to RTU leases and subscription contracts.
              </li>
            </ul>
          </div>
          <div className='container mx-0 px-4 pb-3 pt-3  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
            <h3 className='mt-3'>How Much Does The City Owe?</h3>
            <h4>
              Bonded Debt and Long-Term Notes Payable: $39.4 billion, an
              increase of $180.8 million or 0.5% from FY23
            </h4>
            <div className='lg:max-w-5xl'>
              <BondedDebtandLongTermNotesPayable />
            </div>
            <br></br>
            <div className='lg:max-w-5xl'>
              <p>
                The City has established guidelines for the structure and
                management of the City’s debt, which include target and ceiling
                levels for certain debt ratios to be used for financial planning
                purposes and restrictions on the types of items that can be
                financed, limiting financing only to those items with a useful
                life of six years or more. In accordance with this policy, the
                ratio of annual debt payments cannot exceed 15% of General Fund
                revenues for voter-approved and non-voter approved debt overall,
                and cannot exceed 6% of General Fund revenues for non-voter
                approved debt alone. The 6% ceiling for non-voter approved debt
                may be exceeded only if there is a guaranteed new revenue stream
                for the debt payments and the additional debt will not cause the
                ratio to exceed 7.5%, or there is no guaranteed revenue stream
                but the 6% ceiling shall not be exceeded for more than one year.
              </p>
            </div>
            <ul>
              <br></br>
              <li>
                <span className='font-bold'>For Fiscal Year 2024,</span> the
                ratios were{' '}
                <b>
                  {' '}
                  4.3% for overall debt and 2.6% for non-voter approved debt.
                </b>{' '}
                As of June 30, 2024, the City was in compliance with its Debt
                Policies.
              </li>
              <br></br>
              <li>
                <span className='font-bold'>
                  Of the <b>$39.4 billion long-term bonds and notes payable,</b>{' '}
                  $960.2 million were General Obligation bonds backed by the
                  City. The remaining $38.4 billion are backed by Enterprise
                  Funds and other specified Special Revenue sources.
                </span>{' '}
                {/* $1.1 billion were General Obligation bonds. */}
              </li>
              <br></br>
              {/* <li>
                  <span className='font-bold'>
                    As of June 30, 2024,

                  </span>{' '}
                  the City was in compliance with its Debt Policies.

                </li> */}
            </ul>
            <h3 className='mt-3'>
              Ratings of the City’s Debts by Rating Agencies
            </h3>
            <span className='font-bold'>
              By maintaining good (above median average) credit ratings, the
              City is able to obtain favorable lending terms on City’s debts,
              thereby saving taxpayers money on City’s long-term debts.
            </span>{' '}
            <br></br>
            <br></br>
            <br></br>
            <Credit />
            <br></br>
            <span>
              In January 2025, three rating agencies, S&P Global Ratings, Fitch
              Ratings, and Kroll Bond Rating Agency, placed the City's ratings
              on watch negative status, indicating that the City's ratings are
              under review and that there is meaningful potential for a negative
              rating change. The actions reflect the risk of potential exposure
              of the City's General Fund to wildfire liability claims and the
              potential impact of recovery and response on the City's unbudgeted
              expenditures and available liquidity.
              {/* Additionally, Moody's Ratings revised the
                outlooks on the City's issuer rating for Sewer's senior and
                subordinate wastewater revenue bonds rating from stable to
                negative. */}
            </span>{' '}
            <br></br><br />
            <span>
              S&P Global Ratings placed the City's general obligation bonds and
              MICLA's lease revenue bonds on CreditWatch with negative
              implications. S&P Global Ratings expects to complete its review by
              April 15, 2025. Similarly, Kroll Bond Rating Agency placed both
              bonds on Watch Downgrade and expects to complete its review by
              April 16, 2025. Moody's Ratings also revised the outlooks on the
              City's issuer rating, general obligation bond rating, MICLA lease
              revenue bond rating, wastewater system senior and subordinate
              revenue bond ratings, and solid waste resources revenue bond
              rating from stable to negative. Fitch Ratings placed the City's
              Issuer Default Rating on Rating Watch Negative and expects to
              complete its review by July 17, 2025.
            </span>
            <br></br><br />
            <span>
              S&P Global Ratings lowered its long-term and underlying ratings on
              Power's revenue bonds outstanding from 'AA-' to 'A' and Water's
              revenue bonds outstanding from 'AA+' to 'AA-'. Both Power and
              Water ratings were placed on CreditWatch with negative
              implications in connection with the increasing frequency and
              severity of highly destructive wildfires within the DWP service
              territory. Additionally, Moody's Ratings revised the outlooks on
              the City's issuer rating for Sewer's senior and subordinate
              wastewater revenue bonds rating from stable to negative.
            </span>
            {/* <p className='mt-4 lg:max-w-5xl'>
              The City has established guidelines for the structure and
              management of the City’s debt, which include target and ceiling
              levels for certain debt ratios to be used for financial planning
              purposes and restrictions on the types of items that can be
              financed, limiting financing only to those items with a useful
              life of six years or more. In accordance with this policy, the
              ratio of annual debt payments cannot exceed 15% of General Fund
              revenues for voter-approved and non-voter approved debt overall,
              and cannot exceed 6% of General Fund revenues for non-voter
              approved debt alone. The 6% ceiling for non-voter approved debt
              may be exceeded only if there is a guaranteed new revenue stream
              for the debt payments and the additional debt will not cause the
              ratio to exceed 7.5%, or there is no guaranteed revenue stream but
              the 6% ceiling shall not be exceeded for more than one year.
              <br />
              <br />
              For 2022, the ratios were{' '}
              <span className='font-bold'>4.7% for overall debt</span> and{' '}
              <span className='font-bold'>
                3.0% for non-voter approved debt.
              </span>{' '}
              <br />
              <br />
              Of the{' '}
              <span className='font-bold'>
                $37.3 billion long-term bonds and notes payable, $751.7 million
                were General Obligation bonds.
              </span>
              <br />
              <br />
              As of June 30, 2022, the City is in compliance with its Debt
              Policies.
            </p> */}
          </div>
          <br />
          <div className='lg:max-w-5xl'>
            <h2 className='mt-3'>City Activities</h2>
            <br />
            {/* <p>
                The charts represent performance metrics reported across
                departments. Switch departments using the picker below.
              </p> */}
            <br />
          </div>
          <div className='container mx-0 pb-3  dark:text-gray-100 sm:px-4 lg:mx-auto lg:max-w-7xl'>
            <div className='lg:max-w-5xl'>
              <CityActivities />
            </div>
          </div>
        </div>
      </div>
      {/* </Layout> */}
    </>
  );
}
