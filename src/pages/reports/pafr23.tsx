import Link from 'next/link';
import * as React from 'react';

import BondedDebtandLongTermNotesPayable from '@/components//pafr23comp/BondedDebtandLongTermNotesPayable';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import BarChart from '@/components/pafr23comp/BarChart';
import CityActivities from '@/components/pafr23comp/CityActivities';
import { Credit } from '@/components/pafr23comp/credit';
import GeneralFundExpenses from '@/components/pafr23comp/GeneralFundExpenses';
import GeneralFundRevenues from '@/components/pafr23comp/GeneralFundRevenues';
import NetPosition from '@/components/pafr23comp/NetPosition';
import TopEmployeeChart from '@/components/pafr23comp/TopEmployee';
import TotalExpenditure from '@/components/pafr23comp/TotalExpendituresExpenses';
import TotalRevnues from '@/components/pafr23comp/TotalRevnues';
import Seo from '@/components/Seo';

export default function pafr23(props: any) {
  return (
    <>
      <Navbar />
      <Seo
        title='Popular Annual Financial Report FY23'
        description='Report & Visualizations of Expenditures, Revenues, and Debt for the City of Los Angeles'
        image='https://controller.lacity.gov/images/pafr23-thumbnail.png'
      />
      <Layout>
        <div className='flex flex-col pb-2 dark:text-white'>
          <div
            className=''
            style={{
              //url
              background: 'url(/images/pafr23.png)',
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
                  Popular Annual Financial Report FY23
                </span>
                <br></br>
                <span className='rounded-lg bg-black bg-opacity-60 px-2 py-1 text-base italic sm:text-lg'>
                  A summary of the City of Los Angeles Annual Comprehensive
                  Financial Report for Fiscal Year ended June 30, 2023.
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
                href='/acfr23.pdf'
                target='_blank'
                rel='noreferrer noopener'
                className='text-green-800 underline dark:text-mejito'
              >
                Click here for the full FY2023 Annual Comprehensive Financial
                Report
              </Link>
            </p>
            <br />
            <div className='lg:max-w-5xl'>
              <h2>A Message from City Controller Kenneth Mejia</h2>
              <p>
                <br />
                Community Members of the City of Los Angeles
                <br />
                <br />
                <img
                  className='float-right mb-2 ml-2 w-32 sm:mb-4 sm:ml-4 sm:w-64'
                  src='/images/new_KM.jpg'
                  alt='Portrait of Kenneth Mejia'
                />
                As the Controller for the City of Los Angeles, our Office has
                the Charter responsibility to prepare and publish the City’s
                Annual Comprehensive Financial Report (ACFR) of the City for the
                fiscal year ended June 30, 2023. I can report a year of strong
                revenue growth that contributed to record reserves on July 1,
                the beginning of the current fiscal year.
                <br />
                <br />
                Unfortunately, it is also my responsibility to report the bad
                news: this year the City is spending well beyond our actual
                revenues. Projected deficits for years to come will force
                wrenching choices that threaten the vital services Angelenos
                rely on. This is not the result of a sudden economic downturn,
                but the culmination of years of short-term budget balancing at
                the cost of long-term fiscal sustainability.
                <br />
                <br />
                <b>
                  {' '}
                  Grim news requires serious long-term solutions for the future
                </b>
                <br />
                <br />
                We’ve already seen the whiplash as the State of California has
                gone from a record- breaking surplus to a projected huge deficit
                next fiscal year. While not as dependent on volatile revenues as
                the State, the reality is that both the strong economic recovery
                from the pandemic and major Federal emergency aid are behind us.
                Not only has revenue growth slowed, it is falling far short of
                the optimistic projections contained in this year’s adopted
                budget. Meanwhile, spending is exceeding expected levels. The
                estimates of the City Administrative Officer contained in his
                recent January statement point to a budget shortfall in excess
                of $143 million to be addressed by a partial hiring freeze and
                tapping the City’s Reserve Fund. The shortfall could swell to as
                much as $400 million next year, according to the CAO.
                <br />
                <br />
                Even as we look back on the positive results from the prior
                year, the warning signs were there:
                <br />
                <br />
              </p>
            <ul className='pl-5 md:pl-6'>
                <li>
                  As previously reported, despite widespread staff vacancies,
                  General Fund departmental spending actually exceeded last
                  year’s adopted budget by nearly $200 million. Had the
                  vacancy rate been closer to normal, the budget would have
                  been in the red.
                </li>
                <br></br>
                <li>
                  As our Office has consistently pointed out, citywide
                  deferred maintenance of vital infrastructure requires urgent
                  attention. Last year’s underspending of $316 million in
                  budgeted capital expenditures underscores that the City
                  continues to fall behind – which means even higher costs in
                  the long run.
                </li>
                <br></br>
                <li>
                  Again, as we have warned, current staff shortages and
                  long-term underinvestment in the training, technology,
                  equipment and facilities for our workforce hobbles
                  productivity and shortchanges our residents. The
                  homelessness crisis and the reality of a changing climate
                  put even further strain on City resources.
                </li>
              </ul>
                <br />
              <p>
                The contract for rank-and-file police staff ratified last fall
                will add nearly a billion dollars in additional costs over the
                next four years, with the likelihood of commensurate increases
                in compensation for police management. The new five-year
                contracts negotiated with civilian bargaining units will have an
                even larger budget impact, putting budget projections deeply in
                the red for the next five years.
                <br />
                <br />
                Without a long-term approach to putting our fiscal house in
                order, short-term decisions will doom Los Angeles to an
                inexorable decline in public services, undermining our quality
                of life and the economic prospects of our residents.
                <br />
                <br />
                Nothing short of a serious, strategic five-year plan to fix our
                City’s finances can meet this moment. Scrambling every year to
                paper over budget gaps will result in ever-worsening political
                pain and economic hardships.
                <br />
                <br />A transition to a two-year budget cycle would save
                enormous staff time, give greater opportunity for meaningful
                community participation, and allow for a more strategic approach
                to the City’s Finances. The City also needs a transparent
                Capital Improvement Program beyond the current wish list of
                billions of dollars in unfunded projects. Participatory
                budgeting, expanded beyond its current experimental pilot, would
                offer greater citizen engagement in the City’s fiscal health.
                <br />
                The City should also break with the opaque process where annual
                departmental budgets are simply marginally adjusted (up or down)
                without fundamentally altering the long- standing budgetary
                status quo. Given the daunting financial realities, the City
                needs to undertake a strategic reallocation of resources to what
                matters most to the long-term wellbeing of all of our residents.
                Budgets are not just numbers; they are a statement of values. As
                our city changes, so should our financial priorities.
                <br />
                <br />
                Our Office is eager to collaborate with the Mayor, Council, and
                greater community to reform the City’s budgeting process and
                priorities. This must be a long-term commitment because the
                problems are long-standing and will require a phased approach to
                solving. Budget reform and more accountable stewardship of the
                public’s resources are vital to minimize abrupt service cuts
                (which disproportionately hurt our most vulnerable) – especially
                if economic conditions deteriorate.
                <br />
                <br />
                Los Angeles is a vibrant, dynamic center of one of the world’s
                most diverse and influential regions. Our City has the potential
                to restore fiscal health, improve vital City services, and lead
                the world in confronting climate change, housing insecurity, and
                a changing economy. It would be tragically short-sighted not to
                tackle the City’s fiscal challenges to capture that potential.
                We must put our City on the path to fiscal sustainability so we
                can do the job our residents expect us to do.
                <br />
                <br />
                My staff and I appreciate the cooperation shown by City
                departments as we prepared this report. Should you have
                questions or require additional information, please contact my
                Director of Financial Analysis and Reporting, Rahoof Oyewole at
                rahoof.oyewole@lacity.org.
              </p>
              <p>
                Respectfully submitted,
                <br />
                <img
                  src='/images/sig-light.png'
                  alt="Kenneth Mejia\'s Signature"
                  className='w-64 dark:hidden'
                />
                <img
                  src='/images/sig-dark.png'
                  alt="Kenneth Mejia\'s Signature"
                  className='hidden w-64 dark:block'
                />
                Kenneth Mejia
                <br />
                Los Angeles City Controller
              </p>
            </div>
            <br />
            <h2>About Popular Annual Financial Reporting</h2>
            <div className='mt-6 lg:max-w-5xl'>
              <img
                className='float-left mr-1 mb-1 w-32 dark:hidden md:w-48 lg:w-64'
                src='/images/Award-1.png'
                alt='Certificate awarded by the Government Finance Officers Association to the City of Los Angeles for excellence in financial reporting, fiscal year ending June 30, 2022.'
              />
              <img
                className='float-left mr-1 mb-1 hidden w-32 dark:block md:w-48 lg:w-64'
                src='/images/Award-1.png'
                alt='Certificate awarded by the Government Finance Officers Association to the City of Los Angeles for excellence in financial reporting, fiscal year ending June 30, 2022.'
              />
              <p className=''>
                Government Finance Officers Association of the United States and
                Canada (GFOA) has given an Award for Outstanding Achievement in
                Popular Annual Financial Reporting to the City of Los Angeles
                for its Popular Annual Financial Report for the fiscal year
                ended June 30, 2022. The Award for Outstanding Achievement in
                Popular Annual Financial Reporting is a prestigious national
                award recognizing conformance with the highest standards for
                preparation of state and local government popular reports.
              </p>
              <p className='mt-3'>
                In order to receive an Award for Outstanding Achievement in
                Popular Annual Financial Reporting, a government unit must
                publish a Popular Annual Financial Report, whose contents
                conform to program standards of creativity, presentation,
                understandability, and reader appeal. An Award for Outstanding
                Achievement in Popular Annual Financial Reporting is valid for a
                period of one year only. We believe our current report continues
                to conform to the Popular Annual Financial Reporting
                requirements, and we are submitting it to GFOA to determine its
                eligibility for another Award.
              </p>
              <div className='clear-both'></div>
            </div>

            <h2 className='mt-3'>Local Economy</h2>

            <p className='mt-2 lg:max-w-5xl'>
              The City and its surrounding metropolitan region feature
              incredible diversity in both population and the economy. Tourism
              and hospitality, professional and business services, international
              trade, entertainment production, and wholesale trade and logistics
              all contribute significantly to local employment. The Port of Los
              Angeles handles the largest volume of containerized cargo of all
              U.S. ports and ranks as number one in cargo value for U.S.
              waterborne foreign traffic. According to preliminary ACI
              statistics, in the calendar year 2022, Los Angeles International
              Airport (LAX) was the sixth busiest airport in the world in terms
              of total passengers and ninth busiest in terms of total cargo
              metric tons. According to the U.S. DOT originating and destination
              (O&D) Survey of Airline Passenger Traffic for calendar year 2022,
              LAX had the largest number of domestic O&D passengers in the U.S.
              O&D passengers begin and end their journeys at LAX, while
              connecting passengers transfer to other flights at LAX.
              <br />
              <br />
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '1rem',
              }}
            >
              <article>
                <img
                  style={{
                    float: 'left',
                    marginRight: '1rem',
                    marginBottom: '1rem',
                    width: '256px',
                    display: 'block',
                  }}
                  src='/images/conventioncenter.png'
                  alt='Convention Center'
                  className='soup-image'
                />
                <p className='mt-2  lg:max-w-5xl'>
                  The post-pandemic economic recovery continued through fiscal
                  year 2023 and resulted in robust General Fund revenue growth
                  for the City. The strong revenues allowed the City to end
                  fiscal year 2023 in a solid financial position, with a July 1,
                  2023 Reserve Fund balance of $648.3 million, an all-time high.
                </p>
                <p className='mt-2  lg:max-w-5xl'>
                  There are several economic factors that could impact revenues
                  and the overall City’s fiscal position in the upcoming year.
                  According to the University of California (UCLA) Anderson
                  Forecast, while the California economy is growing faster than
                  the U.S. economy, there is a risk that high interest rates
                  might still disrupt the current expansion on the downside.
                  Even though recession worries have subsided, increased
                  military conflict abroad and a sense of greater geopolitical
                  risk have kept uncertainty about the future high. The
                  uncertainty factor, combined with a slower-growing U.S.
                  economy in 2024, suggests a slower-growing California economy
                  in 2024.
                </p>
                <p className='mt-2  lg:max-w-5xl'>
                  The unemployment rate within the City of Los Angeles appears
                  to be inching up as well. Although labor disputes involving
                  SAG-AFTRA, Writers, and Longshore workers that consumed most
                  of 2023 have subsided, the Los Angeles Hotel workers' strike
                  is still unsettled. According to the California Employment
                  Development Department, the unemployment rate for the City of
                  Los Angeles metro area rose from 4.6 percent in November 2022
                  to 5.3 percent in November 2023.
                </p>
                <p className='mt-2  lg:max-w-5xl'>
                  Another factor is the higher mortgage interest rates, which
                  continue to put downward pressure on real estate sales volume
                  and prices. According to the California Association of
                  Realtors’ November 2023 Sales Report, although the median
                  price was up by 7.2 percent in Los Angeles, sales volume
                  declined by 5.1 percent compared to November 2022. These
                  economic factors contribute to downward economic pressures
                  which could negatively affect the City’s economically
                  sensitive revenue sources and the City’s financial position in
                  2024.
                </p>
              </article>
            </div>

            {/* Add Visual - Demographic and Economic Data */}

            {/* <h2 className='mt-3 dark:text-white'>City of LA Demographic</h2> */}
            <h2 className='mt-3 dark:text-white'>
              Demographic and Economic Data
            </h2>
            <div className='lg:max-w-5xl'>
              <BarChart />
            </div>
            {/* Add Visual - Principal Employers */}

            {/* <h2 className='mt-3 dark:text-white'>Top Employers in Los Angeles County 2023</h2> */}
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
            <div className='clear-both'></div>

            <div className='mt-2 lg:max-w-5xl'>
              <p>
                The City operates under a Mayor-Council form of government. The
                Mayor supervises the administrative processes of the City and
                works with the City Council in matters relating to legislation,
                budget and finance. The 15-member City Council enacts
                ordinances, levies taxes, authorizes contracts and public
                improvements, adopts zoning and other land use contracts, and
                provides necessary resources for the budgetary departments and
                offices of the City. The City Controller and City Attorney are
                independently elected citywide.
              </p>
              <br />
              <div className='mb-4'>
                <img
                  className='mx-auto mb-4 w-64 max-w-full md:float-left md:mr-4 md:mb-2 md:w-48 lg:w-64'
                  src='/images/vistahermosa.png'
                  alt='Vista Hermosa'
                />
                <p className='text-center md:text-left'>
                  The City has 46 departments, bureaus, commissions, and
                  offices, 39 of which have their operating funds annually
                  budgeted by the City Council. The Department of Water and
                  Power, Harbor Department, and the Department of Airports are
                  publicly-owned entities under the control of boards appointed
                  by the Mayor and confirmed by the City Council. Several other
                  departments are fiscally independent or under the control of
                  independent boards.
                </p>
                <div className='clear-both'></div>
              </div>
              <br />
              <br />
              <p>
                Public services provided by the City include police, fire and
                paramedics, residential refuse collection and disposal,
                wastewater collection and treatment, street maintenance and
                traffic management, enforcement of building safety laws,
                libraries, recreation and parks, community development, housing
                and services for seniors, planning; two airports, harbor, power
                and water services, and the convention center. Performance data
                on some of these services is collected below in the “City
                Activities” section.
              </p>
            </div>
            <br />

            <div className='mt-2 rounded-lg border-4 border-mejito bg-mejito bg-opacity-30 px-2 py-2 dark:bg-opacity-20 lg:max-w-5xl'>
              {/* Pick of sherlock killa of the left side insert here later */}
              <img
                src='/sherlockcorgi.png'
                className='float-left mb-1 mr-1 w-32'
                alt=''
              />
              <section aria-labelledby='key-terms-heading'>
                <h2 id='key-terms-heading' className='mt-3'>Key Terms</h2>
                <span className='font-bold'>Governmental Activities:</span>{' '}
                Functions of the City that are primarily supported by taxes and
                intergovernmental revenues. These include general government,
                police, fire and paramedics, public works, health and sanitation
                (other than sewer services), transportation, cultural and
                recreational services, and community development.
                <br />
                <br />
                <span className='font-bold'>
                  Business-Type Activities:
                </span>{' '}
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
                intangibles, construction in progress, nuclear fuel and a
                natural gas field that the city owns. The City uses these
                capital assets to provide services to its citizens;
                consequently, these assets are not available for future
                spending.
              </section>
            </div>
          </div>

          <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
            <div className='PortraitofCityOfLA-23 lg:max-w-5xl'></div>
            <h2 className='mt-3'>City Revenues and Expenses (FY 2023)</h2>

            <h3 className='mt-3'>Total City Revenues: $21.6 billion</h3>

            <p className='mt-2 lg:max-w-5xl'>
              For the fiscal year that ended on June 30, 2023, total City
              revenues were $21.6 billion, an increase of 8.4% over the prior
              year.
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
              Total revenues of governmental activities were $10.2 billion,
              while the combined operating revenues from City’s six
              business-type activities was $11.4 billion.
            </p>

            <h3 className='mt-3'>Total City Expenses: $19.6 billion</h3>
            <p className='mt-3'>
              For the fiscal year that ended on June 30, 2023, expenses were
              $19.6 billion, 18.2% more than the prior year.
            </p>
            <div className='lg:max-w-5xl'>
              <TotalExpenditure />
            </div>
          </div>

          <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
            <p className='mt-4 lg:max-w-5xl'>
              Total expenses increased by $3.0 billion or 18.2% compared to FY
              22. Expenses increased by $2.1 billion in the governmental
              activities primarily in the following functional areas: general
              government by $605.4 million, protections of persons and property
              by $1.0 billion, public works by $128.6 million, health and
              sanitation by $183.4 million, transportation by $78.0 million,
              cultural and recreational services by $108.7 million, community
              development of $1.5 million, and interest on long-term debt of
              $56.1 million and $839.4 million increase in the City’s
              business-type activities.
              <br />
              <br />
              <br />
            </p>

            {/* <Changeinnetpos /> */}
          </div>

          <div className='container mx-0 px-4 pb-3 pt-3  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
            <div className='laportrait lg:max-w-5xl'></div>
            <br></br>

            <div className='lg:max-w-5xl'>
              <h2>Net Position</h2>
              <p className='mt-2 lg:max-w-5xl'>
                City of Los Angeles’s Net position provides insight into the
                City’s financial position as of June 30, 2023. It includes a
                summary of what the City owns (assets and deferred outflows){' '}
                <b>minus</b> what the City owes (liabilities and deferred
                inflows).
                <br />
                <br />
              </p>
              <div className='flex flex-col gap-y-2 md:flex-row md:gap-x-3 lg:max-w-5xl'>
                <div className=' rounded-lg bg-gray-100 px-3 py-3 dark:bg-gray-800 md:w-1/2'>
                  <p className='font-bold'>
                    Assets represent what the City owns:
                  </p>
                <ul className='list-disc px-4 pl-5 md:pl-6'>
                    <li>Cash and pooled investments</li>
                    <li>Receivables</li>
                    <li>Capital assets (land, buildings and infrastructure)</li>
                  </ul>
                  <br></br>
                  Total City Assets: $86.9 billion.
                  <br />
                  Deferred Outflows of Resources: $5.2 billion.
                  <br />
                  <span className='font-bold'>Total: $92.1 billion.</span>
                  <br />
                  <br />
                </div>
                <div className='rounded-lg bg-gray-100 px-3 py-3 dark:bg-gray-800   md:w-1/2'>
                  <p className='font-bold'>
                    Liabilities represent what the City owes:
                  </p>
                <ul className='list-disc px-4 pl-5 md:pl-6'>
                    <li>Bonds and notes</li>
                    <li>Claims and judgments</li>
                    <li>Unearned revenue</li>
                    <li>Accounts payable and accrued expenses</li>
                  </ul>
                  <br></br>
                  Total City Liabilities: $58.8 billion. <br />
                  Deferred Inflows of Resources: $2.7 billion.
                  <br />
                  <span className='font-bold'>Total: $61.5 billion.</span>
                </div>
              </div>
              <p className="font-bold text-2xl">
                <br />
                <br />
                Net Position: $30.6 billion, $2.0 billion, 7.1% increase from FY
                22
              </p>
              The City’s net position is illustrated in the table below:
              <NetPosition />
            </div>
            <br></br>
            <div className='lg:max-w-5xl'>
              <p>
                The net position of $30.6 billion consisted of:
                <br />
                <br />
                <span className='font-bold'>
                  Net investment in capital assets:
                </span>{' '}
                $22.7 billion, including land, building, infrastructure and
                equipment, less accumulated depreciation and outstanding debt,
                deferred outflows and deferred inflows of resources related to
                acquisition, construction or improvements. This is an increase
                of $401.6 million over FY 22.
                <br />
                <br />
                <span className='font-bold'>Restricted Net Position:</span> $6.9
                billion, which represents amounts with constrained placed on
                their use by (1) external groups such as creditors, grantors,
                contributors, or laws and regulations of other governments or,
                (2) law through constitutional provisions or enabling
                legislation. This is an increase of $779.6 million over FY 22.
                <br />
                <br />
                <span className='font-bold'>
                  Unrestricted Net Position:
                </span>{' '}
                $971.9 million is the net unrestricted amount. Compared to FY22,
                the overall unrestricted position increased by $857.5 million,
                primarily due to a combination of reduction in governmental
                deficit by $12.8 million and an increased in business-type of
                $844.7 million.
                <br />
                <br />
              </p>
            </div>
            <br></br>
            <div className='lg:max-w-5xl'>
              <p>
                <h2 className='mt-3'>Dollars In – General Fund Revenues:</h2>
                City of Los Angeles’ government resources and services are
                funded through several different revenue streams. In FY 2023,
                the City collected General Fund revenues of $6.7 billion with
                the majority received through taxes which makes up $5.7 billion
                or 84.6% of General Fund revenue.
                <br></br>
                <br></br>
                <GeneralFundRevenues />
                {/* <ChangeinnetposGen /> */}
              </p>

              {/*Net Pos Generally */}
              {/* <p className='mt-3'>In FY 23, General Fund revenues of $6.7 billion was a 9.3% increase from FY 22, and exceeds General Fund expenditures by $745.5 million.
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

              <p className='font-bold md:text-xl'>
                In FY 23, General Fund revenues of $6.7 billion was a 9.3%
                increase from FY 22, and exceeds General Fund expenditures by
                $745.5 million.
              </p>
              <br />

              {/* </p> */}
              {/* <h2 className='mt-3'>General Fund Revenues</h2> */}
              {/* <h4 className='font-bold'>
              FY 22 Total General Fund Revenues: $6.2 billion, $498.5 million
              8.8% increase from FY 21
            </h4> */}
              {/*Revenues  vis */}

              {/* revenues text */}
              <ul className='list-disc pl-5 md:pl-6'>
                <li>
                  <span className='font-bold'>Property taxes</span>, which
                  represent 39.4% of General Fund revenue, increased by $166.1
                  million (6.7%), due to growth in current secured property tax
                  receipts of $150.5 million, a combined increase of $55.5
                  million from vehicle license fees replacement and Ex-
                  Community Redevelopment Agency tax increment receipts, and
                  offset by a decrease of $45.8 million in prior secured
                  property tax receipts.
                </li>
                <li>
                  <span className='font-bold'>
                    Economy-sensitive revenues continued post pandemic recovery
                  </span>
                  :<b> Sales tax </b>
                  increased by $10.7 million (1.5%) as a result of improvement
                  in local economic activity, while <b> business tax </b>
                  grew by $60.4 million (8.0%) due to growth in non- cannabis
                  offset by a decrease in legal recreational cannabis.
                  <b> Utility users’ tax </b> revenues posted an increase of
                  $73.1 million (11.6%), as growth in gas users’ tax and
                  electrical users taxes, offset the modest decline in
                  communications users tax. Gas user taxes contributed $61.7
                  million of the increase in this category primarily due to the
                  increased energy prices and consumption during much of the
                  fiscal year.
                </li>
                {/* <li>
                <span className='font-bold'>Utility users’ tax</span> revenues posted an increase of $73.1 million (11.6%),
                 as growth in gas users’ tax and electrical users taxes, offset the modest decline in communications users tax.
                  Gas user taxes contributed $61.7 million of the increase in this category primarily due to the increased energy
                   prices and consumption during much of the fiscal year. 

              </li> */}
                <li>
                  <span className='font-bold'>Other tax revenues</span> were up
                  by $42.4 million or 5.4%, primarily due to increases of $59.8
                  million in Transient Occupancy Tax, $21.4 million in Parking
                  Occupancy Tax receipts and $63.6 million increase in Franchise
                  Income from high natural gas prices. These increases were
                  offset by the reduction of $100.4 million in Documentary
                  Transfer Tax revenue due to continued real estate sales volume
                  and pricing declines.
                </li>
                <li>
                  <span className='font-bold'>Charges for services</span>,
                  provided to Enterprise Funds increased by $49.9 million or
                  15.2% over prior fiscal year.
                </li>
                <li>
                  <span className='font-bold'>Net investment</span> earnings
                  and other revenues increased by $131.4 million due to a
                  total increase of $147.2 million in investment earnings and
                  a change in the fair value of investments resulting from the
                  higher interest rates, partially offset by a $15.7 million
                  decrease in other revenues.
                </li>{' '}
              </ul>
            </div>
            <br />
            <div className='lg:max-w-5xl'>
              <h2 className='mt-3'>Dollars Out – General Fund Expenditures </h2>
              <p>
                The City of Los Angeles provides a wide range of services to
                residents ranging from public safety, fire and paramedics,
                residential refuse collection and disposal, wastewater
                collection and treatment, street maintenance and traffic
                management, enforcement of building safety laws, libraries,
                recreation and parks, community development, etc.{' '}
              </p>
              <br></br>
              <br></br>
              <p>
                The operating fund from which the City accounts for the money
                coming in and the expenditures paid out is the General Fund.
              </p>
              <br></br>
              <br></br>
              <GeneralFundExpenses />
              <p className='font-bold md:text-xl'>
                In FY 23, General Fund Expenditures was $6.0 billion, $238.7
                million (4.1%) increase over FY 22, primarily due to the
                following:
              </p>
              {/*Expenses  vis */}

              <br />
              <ul className='list-disc pl-5 md:pl-6'>
                <li>
                  <span className='font-bold'>Salaries and Benefits</span>{' '}
                  increased by $69.6 million (1.9%), due to payment to certain
                  labor organization members for deferred compensation
                  adjustments and cash awards, and workers' compensation and
                  liability payouts.
                </li>
                <li>
                  <span className='font-bold'>Capital outlays</span> increased
                  by $13.8 million or 25.5%, mainly attributed to the
                  recognition of $5.7 million in right-to-use (RTU) subscription
                  contracts for GASB 96 implementation and a $5.0 million
                  increase in vehicle and transportation equipment acquisition.
                </li>
                <li>
                  <span className='font-bold'>
                    Contractual services, operating equipment, and supplies went
                    up by,
                  </span>{' '}
                  $86.2 million or 8.7%, primarily attributed to increased fuel
                  and utility costs and other commodity prices for citywide
                  departments.
                </li>
                <li>
                  <span className='font-bold'>Debt service</span> payments
                  increased by $50.0 million, primarily attributed to the
                  increase of interest expenditures due to higher interest
                  rates.
                </li>
              </ul>
            </div>
            <div className='container mx-0 pb-3 pt-3  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
              <h2 className='mt-3'>How Much Does The City Owe?</h2>
              <p className='mt-3 font-bold text-xl'>
                Bonded Debt and Long-Term Notes Payable: $39.2 billion, 5.0%
                increase from FY 22
              </p>
              <div className='lg:max-w-5xl'>
                <BondedDebtandLongTermNotesPayable />
              </div>
              <br></br>
              <div className='lg:max-w-5xl'>
                <p>
                  The City has established guidelines for the structure and
                  management of the City’s debt, which include target and
                  ceiling levels for certain debt ratios to be used for
                  financial planning purposes and restrictions on the types of
                  items that can be financed, limiting financing only to those
                  items with a useful life of six years or more. In accordance
                  with this policy, the ratio of annual debt payments cannot
                  exceed 15% of General Fund revenues for voter-approved and
                  non-voter approved debt overall, and cannot exceed 6% of
                  General Fund revenues for non-voter approved debt alone. The
                  6% ceiling for non-voter approved debt may be exceeded only if
                  there is a guaranteed new revenue stream for the debt payments
                  and the additional debt will not cause the ratio to exceed
                  7.5%, or there is no guaranteed revenue stream but the 6%
                  ceiling shall not be exceeded for more than one year.
                </p>
              </div>
              <ul className='pl-5 md:pl-6'>
                <br></br>
                <li>
                  <span className='font-bold'>For Fiscal Year 2023,</span> the
                  ratios were 3.9% for overall debt and 2.4% for non-voter
                  approved debt.
                </li>
                <br></br>
                <li>
                  <span className='font-bold'>
                    Of the $39.2 billion long-term bonds and notes payable,
                  </span>{' '}
                  $1.1 billion were General Obligation bonds.
                </li>
                <br></br>
                <li>
                  <span className='font-bold'>As of June 30, 2023,</span> the
                  City was in compliance with its Debt Policies.
                </li>
              </ul>

              <h3 className='mt-6'>
                Ratings of the City’s General Obligation Bonds
              </h3>
              <Credit />

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
              <p>
                The charts represent performance metrics reported across
                departments. Switch departments using the picker below.
              </p>
              <br />
            </div>
            <div className='container mx-0 pb-3  dark:text-gray-100 sm:px-4 lg:mx-auto lg:max-w-7xl'>
              <div className='lg:max-w-5xl'>
                <CityActivities />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
