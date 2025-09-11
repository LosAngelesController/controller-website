import Head from 'next/head';
import React from 'react';

import Navbar from '@/components/Navbar';



export default function InterimHousing() {
  const buttonStyle = {
    backgroundColor: '#41ffca',
    color: 'black',
    padding: '10px 0',
    margin: '0 20px',
    textDecoration: 'none',
    border: '1.5px solid black',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '170px',
    height: '70px',
    textAlign: 'center',
  };

  return (
    <>
      <Head>
        <title>
          LAPD Helicopter Audit
        </title>
      </Head>
      <Navbar />
      <main id='main-content' tabIndex={-1} className='md:max-w container mx-auto px-4 sm:max-w-4xl lg:max-w-6xl xl:max-w-7xl'>
        <center>
          <div className='mt-6'>
            {/* images/homelessaudit-sheltercover-site2.png */}
            <h1 className="sr-only">LAPD Helicopter Audit</h1>
            <img
              src='/images/lapdhelicopter-banner.png'
              alt=''
            />
          </div>
          <div className='mt-7 mb-7 dark:text-white'>
            <iframe
              className='w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2'
              height='400'
              src='https://www.youtube.com/embed/cuInkGr10ag?si=37oJmr2keiG-dDhG'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
          <div className='mb-7 flex flex-row justify-center'>
            <a
              href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/LAPD%20Air%20Support%20FINAL_12.10.2023.pdf?alt=media&token=90f3d118-6cec-41c2-93aa-f3c2eb7d457c'
              className='text-base sm:text-base md:text-lg lg:text-lg xl:text-lg'
              style={buttonStyle}
            >
              Full Report
            </a>
            {/* <a
              href='https://helicopteraudit2019.lacontroller.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-base sm:text-base md:text-lg lg:text-lg xl:text-lg'
              style={buttonStyle}
            >
              LAPD Helicopter Map<br></br>
            </a> */}
            <a
              href='#cost-analysis'
              className='text-base sm:text-base md:text-lg lg:text-lg xl:text-lg'
              style={buttonStyle}
            >
              Cost Analysis Summary
            </a>
          </div>
          <div>
            <p className='mt-4 mb-5 text-left dark:text-white'>
              December 11, 2023
            </p>
            <p className='mb-5 text-left dark:text-white'>
              Honorable Karen Bass, Mayor<br></br>Honorable Hydee Feldstein Soto, City Attorney
              <br></br>Honorable Members of the Los Angeles City Council


            </p>
            <p className='mb-5 text-left dark:text-white'>
              Re: Audit of the Los Angeles Police Department’s Air Support Division
            </p>
            <p className='mb-5 text-left dark:text-white'>


              Our City’s investments in public safety account for a significant portion of our annual discretionary budget.
              To better empower both the general public and policymakers to understand what we are receiving in return
              for our investment, my Office conducted its  <b><i>first-ever audit</i></b> of the Los Angeles Police Department’s (LAPD)
              airborne operation, the Air Support Division (ASD). The audit was launched in response to calls from community
              members and organizations who requested more information regarding the costs and performance of LAPD helicopters.
              Our audit focused on the LAPD’s use of helicopters from fiscal years (FYs) 2018 through 2022 and explored
              whether the LAPD has justified the need for the program’s current size and scope, which consists of 17
              helicopters and more than 90 employees.
              {' '}
            </p>
            <p className='mb-5 text-left dark:text-white'>
              Despite spending an average of $46.6 million every year on the ASD, there is limited external oversight or monitoring
              of the ASD, its policies, practices, or whether the program, which was established in the 1970s,
              is in line with the City’s present-day needs. Over its 67 year history, the ASD program has transitioned
              from 1 helicopter to a fleet of 17. With no comprehensive, external audit of the program until now, inefficiencies,
              data reliability issues, and lack of transparency and performance monitoring have gone unchecked.

              {' '}
            </p>
            <p className='mb-5 text-left dark:text-white'>
              Our audit’s findings strongly suggest that the LAPD’s current use of helicopters causes significant harm to the
              community without meaningful or reliable assessment of the benefits it may or may not deliver.



              Our audit shows significant areas of concern with ASD, including but not limited to:



            </p>
            <ul className='mb-5 ml-10 text-left dark:text-white'>
              <li>
                &bull; <b>The ASD program costs nearly $50 million annually while most of the flight time is not devoted to high priority events. </b>
                Our audit found that the estimated annual cost to operate the helicopter program is $46.6 million (i.e., $127,805 per day or $2,916 per flight hour). There are 14 City departments whose annual budgets do not reach this amount;

              </li>
              <li>
                &bull; 61% of flight time was dedicated to activities not associated with the highest priority incidents, such as transportation flights, general patrol time, and ceremonial flights;

              </li>
              <li>
                &bull;Some transportation and ceremonial flights were an inefficient, inappropriate use of City funds, (including passenger shuttle flights for a “Chili Fly-In” and a fly-by at a golf tournament);

              </li>
              <li>
                &bull; Helicopters spend a disproportionate amount of time in certain communities when compared to other areas and levels of alleged crime;

              </li>
              <li>
                &bull; There is no persuasive empirical evidence that shows a clear link between helicopter patrols and crime reduction, and the LAPD has not done the work to collect necessary data to test such claims;

              </li>
              <li>
                &bull;  ASD helicopters burn approximately 761,600 gallons of fuel and release approximately 7,427 metric tons of carbon dioxide equivalent per year (equivalent to over 19 million miles driven by gas-powered passenger cars);


              </li>
              <li>
                &bull; ASD patrols flout best practices for mitigating nuisance noise by flying below the recommended distance above ground level;


              </li>
              <li>
                &bull;LAPD does not have a formal contract with its flight log application vendor, raising ethical, legal, and other concerns. Without a contract, flight related data may be accessed by unauthorized persons and  can be misused or withheld from the LAPD.

              </li>
              <li>
                &bull; There are significant issues with flight data collection and monitoring.


              </li>
            </ul>
            <p className='mb-5 text-left dark:text-white'>
              It is unsurprising that the helicopter program’s cost is high given that, unlike most jurisdictions, the City operates its helicopter fleet on an almost continuous basis. Typically, there are two helicopters flying for 20 hours every day of the year. During FY 2018-22, these helicopters logged an average of 16,000 hours of flight time each year at a cost of $2,916 per flight hour.

            </p>
            <p className='mb-5 text-left dark:text-white'>
              Our audit identified several issues of concern about how ASD helicopter flight hours were spent. Most alarmingly, we found that approximately 61% of ASD’s flight time was dedicated to activities not associated with high priority crime. Instead, that 61% of flight time was devoted to lower priority calls, transportation and ceremonial flights, and scheduled patrols of specific areas.


            </p>
            <p className='mb-5 text-left dark:text-white'>
              At least some of the transportation and ceremonial flights were an inefficient or inappropriate use of City money as they provided little to no public safety benefit. For example, included in the transportation flights that lasted hours were a 6-hour shuttle flight for an ASD-sponsored “Chili Fly-In” and a roundtrip helicopter transport of two high ranking LAPD officials from LAPD headquarters in Downtown LA to a meeting at the Harbor Community police station.
            </p>
            <p className='mb-5 text-left dark:text-white'>
              ASD also conducted 783 ceremonial “fly-by” activities, which are flights over a ceremony or event. These fly-by activities included, in part, LAPD events like academy graduations, retirement ceremonies, and police station events as well as community events and golf tournaments. We found that for at least 161 of the fly-by activities there was not enough information to determine what category of activity took place.
            </p>
            <p className='mb-5 text-left dark:text-white'>
              Even when ASD does devote some of its flight time (39%) to high priority crime types, based on the data currently available, neither our office nor the LAPD can  demonstrate that police helicopters actually deter crime in the City.
            </p>
            <p className='mb-5 text-left dark:text-white'>
              There is evidence, however, that helicopters can have a negative quality of life impact on the lives of residents who live in communities with frequent helicopter activity. Long-term noise exposure to aircrafts can lead to: decreased sleep quality, increased stress, cognitive impairment, reduced metabolism, and cardiovascular disease (i.e. heart attack, stroke, heart disease, etc.).

            </p>
            <p className='mb-5 text-left dark:text-white'>
              Taking a closer look at emissions and pollution, our audit found that ASD helicopters:


            </p>
            <ul className='mb-5 ml-10 text-left dark:text-white'>
              <li>
                &bull; Burn approximately 47.6 gallons of fuel per hour



              </li>
              <li>
                &bull; Burn approximately 761,600 gallons of fuel per year (based on ASD flying 16,000 hours per year)



              </li>
              <li>
                &bull; Release approximately 7,427 metric tons of carbon dioxide equivalent per year


              </li>
            </ul>
            <p className='mb-5 text-left dark:text-white'>
              <b>  Our audit makes recommendations for (1) reducing inefficiencies,
                (2) improving data collection and management, and
                (3) boosting transparency and performance monitoring, including but not limited to the following:
              </b>
              {' '}
            </p>
            <ul className='mb-5 ml-10 text-left dark:text-white'>
              <li>
                &bull; Establish a formal set of performance metrics and performance goals that are routinely gathered, assessed, and made public so that residents, policymakers, the Board of Police Commissioners, LAPD management, and ASD can monitor on a regular basis;

              </li>
              <li>
                &bull; Complete a formal assessment of air support needs for patrol and incident response operations to assess the program’s current operations and whether rightsizing opportunities exist;



              </li>
              <li>
                &bull; Revise existing data fields or establish new data fields in the Daily Flight Log to allow ASD to track responses to Part I crimes, and responses where the ASD aircrew is directly responsible for an apprehension or recovery of a firearm;



              </li>
              <li>
                &bull; Update the ASD Manual to establish policies for the planning and authorization of directed patrols, fly-bys, and administrative flights.


              </li>
            </ul>
            <p className='mb-5 text-left dark:text-white'>
              With this audit, the City now has the information to better determine whether the City needs an airborne program that is this big, this costly, and this damaging to its environment.
            </p>

            <p className='mb-5 text-left dark:text-white'>
              Respectfully submitted,
            </p>
            <div>
              <img
                src='/images/sig-light.png'
                className='float-left mb-5 mr-4 h-auto w-40'
                alt='Signature of Kenneth Mejia, City Controller'
              />
            </div>
            <p className='mb-5 text-left dark:text-white clear-left'>
              KENNETH MEJIA<br></br>City Controller
            </p>
          </div>
          <br></br>

          <h1 id='cost-analysis' className='mb-5 text-left dark:text-white '>
            Cost Analysis Summary
          </h1>
          <p className='mb-5 text-left dark:text-white'>
            To identify costs related to Los Angeles Police Department (LAPD) helicopters, our auditors met with representatives from LAPD, the General Services Department (GSD), and the Information Technology Agency (ITA) as part of the cost estimate development process. We advised each during the meetings of our intent to develop a cost estimate that was based on total payroll costs and other costs (parts, materials, contracts, and services related to helicopters and their operations).


          </p>
          <p className='mb-5 text-left dark:text-white'>
            GSD and ITA provided the requested cost information. When we met with the LAPD to discuss the labor costs requests, the LAPD advised that it would take several weeks to provide the information because of workload constraints caused by the annual budget preparation cycle. The LAPD suggested that Controller audit staff run its own report, so our staff ran its own payroll report to identify LAPD helicopter labor costs. Controller audit staff sent the query information to the LAPD to confirm the query methodology.

          </p>
          <p className='mb-5 text-left dark:text-white'>
            In addition to the information above, Controller audit staff worked with GSD to obtain information necessary to estimate fuel costs, and worked with CAO to obtain information necessary to develop cost estimates related to helicopter financing.

          </p>
          <p className='mb-5 text-left dark:text-white'>
            For a thorough breakdown of identified costs, please see here:
          </p>
          <div className="overflow-x-auto bg-white p-2">
            <table className="
                w-full border-collapse border border-black
                [&_th]:border [&_td]:border
                [&_th]:border-black [&_td]:border-black
              ">
              <caption className="text-xl font-bold p-2 text-center">
                LAPD Air Support Costs by Category and Fiscal Year
              </caption>

              <thead>
                <tr className="bg-gray-100">
                  <th scope="col" className="p-1 text-left font-normal">Category</th>
                  <th scope="col" className="p-1 text-center font-normal">FY 2018</th>
                  <th scope="col" className="p-1 text-center font-normal">FY 2019</th>
                  <th scope="col" className="p-1 text-center font-normal">FY 2020</th>
                  <th scope="col" className="p-1 text-center font-normal">FY 2021</th>
                  <th scope="col" className="p-1 text-center font-normal">FY 2022</th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-[#dbe1f3]">
                  <th scope="colgroup" colspan="6" className="p-1 text-left font-bold border-y">
                    LAPD LABOR SWORN
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-normal text-gray-900">Gross Pay (Pay and Compensated Time Off)</th>
                  <td className="p-1 text-right text-gray-900">$11,211,938.12</td>
                  <td className="p-1 text-right text-gray-900">$10,946,128.13</td>
                  <td className="p-1 text-right text-gray-900">$12,807,085.98</td>
                  <td className="p-1 text-right text-gray-900">$12,116,558.46</td>
                  <td className="p-1 text-right text-gray-900">$11,681,559.45</td>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-normal text-gray-900">Overhead (Fringe Benefits, Central Services, and Admin Support)</th>
                  <td className="p-1 text-right text-gray-900">$18,371,881.80</td>
                  <td className="p-1 text-right text-gray-900">$18,601,850.15</td>
                  <td className="p-1 text-right text-gray-900">$19,503,911.24</td>
                  <td className="p-1 text-right text-gray-900">$19,483,426.01</td>
                  <td className="p-1 text-right text-gray-900">$17,625,136.90</td>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-normal text-gray-900">Overtime</th>
                  <td className="p-1 text-right text-gray-900">$1,359,746.26</td>
                  <td className="p-1 text-right text-gray-900">$1,345,034.55</td>
                  <td className="p-1 text-right text-gray-900">$1,352,711.20</td>
                  <td className="p-1 text-right text-gray-900">$704,349.46</td>
                  <td className="p-1 text-right text-gray-900">$1,104,933.26</td>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-bold">Total</th>
                  <td className="p-1 text-right font-bold">$30,943,566.18</td>
                  <td className="p-1 text-right font-bold">$30,893,012.83</td>
                  <td className="p-1 text-right font-bold">$33,663,708.42</td>
                  <td className="p-1 text-right font-bold">$32,304,333.94</td>
                  <td className="p-1 text-right font-bold">$30,411,629.61</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="bg-[#dce1ef]">
                  <th scope="colgroup" colspan="6" className="p-1 text-left font-bold border-y">
                    LAPD LABOR CIVILIAN
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-normal text-gray-900">Gross Pay (Pay and Compensated Time Off)</th>
                  <td className="p-1 text-right text-gray-900">$653,406.58</td>
                  <td className="p-1 text-right text-gray-900">$648,226.44</td>
                  <td className="p-1 text-right text-gray-900">$666,668.81</td>
                  <td className="p-1 text-right text-gray-900">$525,200.25</td>
                  <td className="p-1 text-right text-gray-900">$323,613.97</td>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-normal text-gray-900">Overhead (Fringe Benefits, Central Services, and Admin Support)</th>
                  <td className="p-1 text-right text-gray-900">$1,158,097.82</td>
                  <td className="p-1 text-right text-gray-900">$1,177,568.16</td>
                  <td className="p-1 text-right text-gray-900">$908,802.92</td>
                  <td className="p-1 text-right text-gray-900">$723,358.31</td>
                  <td className="p-1 text-right text-gray-900">$303,258.65</td>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-normal text-gray-900">Overtime</th>
                  <td className="p-1 text-right text-gray-900">$52.45</td>
                  <td className="p-1 text-right text-gray-900">$2,383.65</td>
                  <td className="p-1 text-right text-gray-900">$260.94</td>
                  <td className="p-1 text-right text-gray-900">$22.52</td>
                  <td className="p-1 text-right text-gray-900">$2,947.46</td>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-bold">Total</th>
                  <td className="p-1 text-right font-bold">$1,811,556.85</td>
                  <td className="p-1 text-right font-bold">$1,828,178.25</td>
                  <td className="p-1 text-right font-bold">$1,575,732.67</td>
                  <td className="p-1 text-right font-bold">$1,248,581.08</td>
                  <td className="p-1 text-right font-bold">$629,820.08</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="bg-[#dce1ef] ">
                  <th scope="colgroup" colspan="6" className="p-1 text-left font-bold border-y">
                    LAPD CONTRACTS (Maintenance)
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left text-gray-900">Total</th>
                  <td className="p-1 text-center text-gray-900">—</td>
                  <td className="p-1 text-center text-gray-900">—</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$2,717.20</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$2,600.00</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$3,200.00</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="bg-[#e2eed9]">
                  <th scope="colgroup" colspan="6" className="p-1 text-left font-bold border-y">
                    GSD LABOR (Maintenance)
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-normal text-gray-900">Gross Pay (Pay and Compensated Time Off)</th>
                  <td className="p-1 text-right text-gray-900">$2,405,728.59</td>
                  <td className="p-1 text-right text-gray-900">$2,450,317.57</td>
                  <td className="p-1 text-right text-gray-900">$2,306,887.18</td>
                  <td className="p-1 text-right text-gray-900">$2,191,728.50</td>
                  <td className="p-1 text-right text-gray-900">$2,313,021.01</td>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-normal text-gray-900">Overhead (Fringe Benefits, Central Services, and Admin Support)</th>
                  <td className="p-1 text-right text-gray-900">$2,304,687.99</td>
                  <td className="p-1 text-right text-gray-900">$2,405,721.79</td>
                  <td className="p-1 text-right text-gray-900">$2,338,491.54</td>
                  <td className="p-1 text-right text-gray-900">$2,123,346.57</td>
                  <td className="p-1 text-right text-gray-900">$2,316,259.24</td>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-normal text-gray-900">Overtime</th>
                  <td className="p-1 text-right text-gray-900">$58,346.00</td>
                  <td className="p-1 text-right text-gray-900">$48,781.00</td>
                  <td className="p-1 text-right text-gray-900">$91,752.00</td>
                  <td className="p-1 text-right text-gray-900">$60,748.00</td>
                  <td className="p-1 text-right text-gray-900">$54,780.00</td>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-bold">Total</th>
                  <td className="p-1 text-right font-bold">$4,768,762.59</td>
                  <td className="p-1 text-right font-bold">$4,904,820.36</td>
                  <td className="p-1 text-right font-bold">$4,737,130.72</td>
                  <td className="p-1 text-right font-bold">$4,375,823.07</td>
                  <td className="p-1 text-right font-bold">$4,684,060.25</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="bg-[#e2eed9]">
                  <th scope="colgroup" colspan="6" className="p-1 text-left font-bold border-y">
                    GSD PARTS MATERIALS (Maintenance)
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left text-gray-900">Total</th>
                  <td className="p-1 text-right text-gray-900 font-bold">$3,238,163.00</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$3,430,088.00</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$4,026,081.00</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$4,269,712.00</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$5,002,103.00</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="bg-[#fff4cc]">
                  <th scope="colgroup" colspan="6" className="p-1 text-left font-bold border-y">
                    ITA LABOR (Maintenance)
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-normal text-gray-900">Gross Pay (Pay and Compensated Time Off)</th>
                  <td className="p-1 text-right text-gray-900">$135,142.13</td>
                  <td className="p-1 text-right text-gray-900">$93,321.66</td>
                  <td className="p-1 text-right text-gray-900">$158,167.27</td>
                  <td className="p-1 text-right text-gray-900">$177,851.96</td>
                  <td className="p-1 text-right text-gray-900">$214,384.52</td>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-normal text-gray-900">Overhead (Fringe Benefits, Central Services, and Admin Support)</th>
                  <td className="p-1 text-right text-gray-900">$124,776.73</td>
                  <td className="p-1 text-right text-gray-900">$98,799.65</td>
                  <td className="p-1 text-right text-gray-900">$336,089.62</td>
                  <td className="p-1 text-right text-gray-900">$402,621.26</td>
                  <td className="p-1 text-right text-gray-900">$475,526.30</td>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-normal text-gray-900">Overtime</th>
                  <td className="p-1 text-right text-gray-900">$14.81</td>
                  <td className="p-1 text-right text-gray-900">$2,184.40</td>
                  <td className="p-1 text-right text-gray-900">$5,155.05</td>
                  <td className="p-1 text-right text-gray-900">$1,291.95</td>
                  <td className="p-1 text-right text-gray-900">$1,173.06</td>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left font-bold">Total</th>
                  <td className="p-1 text-right font-bold">$259,933.66</td>
                  <td className="p-1 text-right font-bold">$194,305.71</td>
                  <td className="p-1 text-right font-bold">$499,411.94</td>
                  <td className="p-1 text-right font-bold">$581,765.16</td>
                  <td className="p-1 text-right font-bold">$691,083.89</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="bg-[#fff4cc]">
                  <th scope="colgroup" colspan="6" className="p-1 text-left font-bold border-y">
                    ITA PARTS MATERIALS (Maintenance)
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left text-gray-900">Total</th>
                  <td className="p-1 text-right text-gray-900 font-bold">$86,791.36</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$61,959.69</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$141,437.37</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$268,445.67</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$41,422.90</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="bg-gray-200">
                  <th scope="colgroup" colspan="6" className="p-1 text-left font-bold border-y">
                    FUEL
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left text-gray-900">Total</th>
                  <td className="p-1 text-right text-gray-900 font-bold">$1,815,146.67</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$2,028,394.67</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$1,592,378.67</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$1,391,189.33</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$2,509,472.00</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="bg-gray-200">
                  <th scope="colgroup" colspan="6" className="p-1 text-left font-bold border-y">
                    HELICOPTER FINANCING (MICLA)
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="p-1 text-left text-gray-900">Total</th>
                  <td className="p-1 text-right text-gray-900 font-bold">$1,628,437.99</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$1,772,284.00</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$1,937,718.08</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$2,496,974.82</td>
                  <td className="p-1 text-right text-gray-900 font-bold">$4,490,059.60</td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <th scope="row" className="p-1 text-left font-bold italic">Overall Total</th>
                  <td className="p-1 text-right font-bold -2">$44,552,358.29</td>
                  <td className="p-1 text-right font-bold -2">$45,113,043.51</td>
                  <td className="p-1 text-right font-bold -2">$48,176,316.05</td>
                  <td className="p-1 text-right font-bold -2">$46,939,425.07</td>
                  <td className="p-1 text-right font-bold -2">$48,462,851.33</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </center>
      </main>
    </>
  );
}
