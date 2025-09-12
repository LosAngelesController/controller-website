'use client';
import Head from 'next/head';
import React, { useEffect } from 'react';

import Navbar from '@/components/Navbar';
import DeathAge from '@/components/unhousedDeaths/DeathAge';
import DeathCD from '@/components/unhousedDeaths/DeathCD';
import DeathMode from '@/components/unhousedDeaths/DeathMode';
import DeathMonth from '@/components/unhousedDeaths/DeathMonth';
import DeathPlace from '@/components/unhousedDeaths/DeathPlace';
import DeathRace from '@/components/unhousedDeaths/DeathRace';
import ModePie from '@/components/unhousedDeaths/ModePie';
import PlacePie from '@/components/unhousedDeaths/PlacePie';
import RacePie from '@/components/unhousedDeaths/RacePie';

export default function CashForKeys() {
  useEffect(() => {
    const canvases = document.querySelectorAll('canvas');
    const labels = [
      'Pie chart of unhoused deaths in the city of LA by mode in 2023 with percentages',
      'Bar chart of number of unhoused deaths in city of LA by mode in year 2023. 678 deaths by accident. 40 deaths by homicide. 160 deaths by natural causes. 16 deaths by suicide. 6 undetermined modes of death.',
      'Pie chart of unhoused deaths in city of LA by places without proper utilities and places with utilities',
      'Bar chart of number of unhoused deaths in city of LA by place in year 2023. 14 deaths in abandoned/vacant building. 19 deaths in business/restaurant/mall/plaza. 19 deaths in encampment. 3 deaths in facility/building. 4 deaths in garage. 135 deaths in healthcare facility. 20 deaths in hotel/motel. 2 deaths in jail. 9 deaths in mobilehome/motorhome/trailer. 18 deaths in other. 22 deaths outdoors (nature). 23 deaths at park/recreation areas. 31 deaths in parking. 12 deaths in patio/yard/shed. 24 deaths in public transit. 48 deaths in residence. 7 deaths in restroom/bathroom. 16 deaths in shelter. 338 deaths on street/freeway/tunnel/sidewalk. 38 deaths in tent. 70 deaths in vehicle.',
      'Pie chart of unhoused deaths in city of LA by race in 2023 with percentages',
      'Bar chart of number of unhoused deaths in city of LA by race in year 2023. 4 American Indian. 17 Asian. 281 Black. 1 Hawaiian/Pacific Islander. 289 Hispanic/Latino. 1 Hispanic/Latino/Black. 6 Hispanic/Latino/White. 3 Middle Eastern. 24 Unknown. 274 White.',
      'Bar chart of number of unhoused deaths in city of LA by council district in year 2023. CD 1 had 105 deaths. CD 2 had 37 deaths. CD 3 had 20 deaths. CD 4 had 35 deaths. CD 5 had 45 deaths. CD 6 had 46 deaths. CD 7 had 36 deaths. CD 8 had 31 deaths. CD 9 had 40 deaths. CD 10 had 40 deaths. CD 11 had 48 deaths. CD 12 had 38 deaths. CD 13 had 77 deaths. CD 14 had 269 deaths. CD 15 had 33 deaths.',
      'Bar chart of number of unhoused deaths in city of LA by month in year 2023. 115 deaths in January. 100 deaths in February. 87 deaths in March. 81 deaths in April. 70 deaths in May. 76 deaths in June. 77 deaths in July. 81 deaths in August. 77 deaths in September. 71 deaths in October. 45 deaths in November. 20 deaths in December.',
      'Bar chart of number of unhoused deaths in city of LA by age in year 2023 with percentages.'
    ];

    canvases.forEach((canvas, index) => {
      canvas.setAttribute('aria-label', labels[index]);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Unhoused Deaths 2023</title>
      </Head>
      <Navbar />
      <body
        className='container mx-auto px-4 dark:text-white sm:container lg:max-w-3xl xl:max-w-4xl'
        style={{ fontFamily: 'Helvetica' }}
      >
        <main id='main-content' tabIndex={-1} className='mx-auto text-center'>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h1 className='pt-8 pb-4 text-center text-3xl font-bold'>
              Deaths of Unhoused People in the City of LA, 2023
            </h1>
          </div>
          <div className='mb-10'>
            <a
              href='https://docs.google.com/spreadsheets/d/1d1dfpxcHKBXoqpGhzPxAbwcbovDVKwU5lZHWviwxQsE/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='mx-2 mb-4 inline-block rounded py-2 px-4 font-bold text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600'
              style={{ backgroundColor: '#41ffca', border: '1px solid black' }}
              aria-label='Table Version (opens in a new tab)'
            >
              Table Version
              <span className='sr-only'> — opens in a new tab</span>
            </a>

            <a
              href='https://unhouseddeaths2023.lacontroller.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='mx-2 mb-4 inline-block rounded py-2 px-4 font-bold text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600'
              style={{ backgroundColor: '#41ffca', border: '1px solid black' }}
              aria-label='Map (opens in a new tab)'
            >
              Map
              <span className='sr-only'> — opens in a new tab</span>
            </a>
          </div>
          <div>
            <h2 className='mb-10 text-2xl font-bold'>Analysis</h2>
            <div className='text-left'>
              <p className='mb-4'>
                This map and analysis show details of deaths of unhoused people
                in the City of Los Angeles in 2023. The map can be viewed by
                race and Council District. Hovering over the map shows more
                details of each death, including Council District, case number,
                date, location, age, race, gender, place, cause, and mode.
              </p>
              <p className='mb-4'>
                In 2023,{' '}
                <strong>
                  there were a total of 900 deaths of unhoused people
                </strong>{' '}
                in the City of LA.
              </p>
              <ul className='ml-4 mb-4'>
                <li>
                  &#x2022; Most common mode of death: <b>Accident (75%)</b>
                </li>
                <li>
                  &#x2022; <b>40</b> unhoused people were murdered in 2023,
                  which is <b>12% of all homicides</b> in the City of LA.
                  Unhoused people are only about 1% of the population.
                </li>
                <li>
                  &#x2022; <b>At least 73%</b> of deaths were in{' '}
                  <strong>streets or areas without proper utilities</strong>,
                  such as tents, parking lots, parks, RVs, and vacant buildings.
                </li>
                <li>
                  &#x2022; Most common place of death:{' '}
                  <b>Street/Freeway/Tunnel/Sidewalk</b>
                </li>
                <li>
                  &#x2022; <strong>Black people were 31% of deaths</strong>.
                  Black people are only 8% of the City’s general population, but
                  are 33% of the City’s unhoused population.
                </li>
                <li>
                  &#x2022;{' '}
                  <strong>
                    Council Districts 14 and 1 had the highest numbers of deaths
                  </strong>{' '}
                  as well as some of the highest unhoused populations.
                </li>
                <li>
                  &#x2022; <b>January, February,</b> and <b>March</b> were the
                  most deadly months.
                </li>
              </ul>
              <p className='mb-4'>
                This dataset was obtained from the LA County Medical-Examiner
                Coroner.
              </p>
            </div>
            <div className='mb-14'>
              <h3 className='mt-10 mb-4 text-left text-xl font-bold'>Mode:</h3>
              <div className='mb-7 text-left'>
                <p className='mb-4'>
                  Mode of death can take a while to investigate and conclusions
                  are preliminary.
                </p>
                <p className='mb-4'>
                  “Mode” vs “Cause”: Mode of death is the way in which cause
                  contributed to death. Cause of death is the specific factor
                  (e.g., injury, disease, etc.) that led to mode of death. Mode
                  of death is more established data.
                </p>
                <div>
                  <p className='mb-2 font-bold'>Mode of Death:</p>
                  <ul className='ml-4'>
                    <li>
                      Accident: 678 deaths <b>(75%)</b>
                    </li>
                    <li>
                      Natural: 160 deaths <b>(18%)</b>
                    </li>
                    <li>
                      Homicide: 40 deaths <b>(4%)</b>
                    </li>
                    <li>
                      Suicide: 16 deaths <b>(2%)</b>
                    </li>
                    <li>
                      Undetermined: 6 deaths <b>(1%)</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h4>Unhoused Deaths in City of LA by Mode, 2023</h4>
                <ModePie />
                <DeathMode />
              </div>
            </div>
            <div className='mb-14'>
              <h3 className='mb-4 text-left text-xl font-bold'>Place:</h3>
              <div>
                <div className='mb-7 text-left'>
                  <p className='mb-4'>
                    <strong>At least 73%</strong> of deaths were in{' '}
                    <strong>streets or areas without proper utilities</strong>,
                    such as tents, parking lots, parks, RVs, and vacant
                    buildings.
                  </p>
                  <p className='mb-4'>
                    <b>15%</b> were in <b>healthcare facilities</b>.
                  </p>
                  <p className='mb-4'>
                    <b>10%</b> were in other <b>sheltered places</b>, such as
                    hotels, residences, and interim housing facilities.
                  </p>
                  <p className='mb-4'>
                    (<b>2%</b> were classified as taking place in "<b>Other</b>
                    ".)
                  </p>
                </div>
                <div>
                  <h4>Unhoused Deaths in City of LA by Place, 2023</h4>
                  <PlacePie />
                </div>
                <div className='mb-7 text-left'>
                  <p className='mb-2 font-bold'>Top 5 Places of Death:</p>
                  <ul className='ml-4'>
                    <li>
                      Street/Freeway/Tunnel/Sidewalk: <b>338</b> deaths
                    </li>
                    <li>
                      Healthcare Facility: <b>135</b> deaths
                    </li>
                    <li>
                      Vehicle: <b>70</b> deaths
                    </li>
                    <li>
                      Residence: <b>48</b> deaths
                    </li>
                    <li>
                      Tent: <b>38</b> deaths
                    </li>
                  </ul>
                </div>
                <h4>Unhoused Deaths in City of LA by Place, 2023</h4>
                <DeathPlace />
              </div>
            </div>
            <div className='mb-14'>
              <h3 className='mb-4 text-left text-xl font-bold'>Race:</h3>
              <div>
                <p className='mb-4 text-left'>
                  While Black people are only 8% of the City of LA’s general
                  population, they were{' '}
                  <strong>31% of the City’s unhoused people who died</strong>.
                  Black people were 33% of the City’s unhoused population in
                  2023.
                </p>
                <div className='mb-4 text-left'>
                  <p className='mb-2 font-bold'>Race:</p>
                  <ul className='ml-4'>
                    <li>
                      Hispanic/Latino: 289 <b>(32%)</b>
                    </li>
                    <li>
                      Black: 281 <b>(31%)</b>
                    </li>
                    <li>
                      White: 274 <b>(30%)</b>
                    </li>
                    <li>
                      Unknown: 24 <b>(3%)</b>
                    </li>
                    <li>
                      Asian: 17 <b>(2%)</b>
                    </li>
                    <li>
                      Hispanic/Latino/White: 6 <b>(1%)</b>
                    </li>
                    <li>
                      American Indian: 4 <b>(0.4%)</b>
                    </li>
                    <li>
                      Middle Eastern: 3 <b>(0.3%)</b>
                    </li>
                    <li>
                      Hispanic/Latino/Black: 1 <b>(0.1%)</b>
                    </li>
                    <li>
                      Hawaiian/Pacific Islander: 1 <b>(0.1%)</b>
                    </li>
                  </ul>
                </div>
                <p className='mb-7 text-left'>
                  Data including categories for race set by L.A. County
                  Medical-Examiner Coroner.
                </p>
              </div>

              <div>
                <h4>Unhoused Deaths in City of LA by Race, 2023</h4>
                <RacePie />
                <DeathRace />
              </div>
            </div>
            <div className='mb-14'>
              <h3 className='mb-4 text-left text-xl font-bold'>
                City Council District:
              </h3>
              <div className='mb-7 text-left'>
                <p className='mb-4'>
                  The highest unhoused <strong>populations</strong> in 2022 (the
                  most recent data available) were in Council Districts{' '}
                  <strong>14, 9,</strong> and <strong>1</strong> (followed
                  closely by 6 and 13),{' '}
                  <a
                    href='https://www.lahsa.org/data?id=52-homeless-count-by-city-of-la-council-district-2015-2022'
                    target='_blank'
                    rel='noreferrer'
                    className='text-blue-700 underline'
                  >
                    according to LAHSA
                  </a>
                </p>
                <p className='mb-4'>
                  The highest numbers of <strong>deaths</strong> of unhoused
                  people in 2023 were in Council Districts <strong>14</strong>{' '}
                  and <strong>1</strong>.
                </p>
                <div>
                  <p className='mb-2 font-bold'>
                    Unhoused Deaths by City Council District, 2023:
                  </p>
                  <ul className='ml-4'>
                    <li>
                      Council District 1: 105 deaths <b>(11.7%)</b>
                    </li>
                    <li>
                      Council District 2: 37 deaths <b>(4.1%)</b>
                    </li>
                    <li>
                      Council District 3: 20 deaths <b>(2.2%)</b>
                    </li>
                    <li>
                      Council District 4: 35 deaths <b>(3.9%)</b>
                    </li>
                    <li>
                      Council District 5: 45 deaths <b>(5.0%)</b>
                    </li>
                    <li>
                      Council District 6: 46 deaths <b>(5.1%)</b>
                    </li>
                    <li>
                      Council District 7: 36 deaths <b>(4.0%)</b>
                    </li>
                    <li>
                      Council District 8: 31 deaths <b>(3.4%)</b>
                    </li>
                    <li>
                      Council District 9: 40 deaths <b>(4.4%)</b>
                    </li>
                    <li>
                      Council District 10: 40 deaths <b>(4.4%)</b>
                    </li>
                    <li>
                      Council District 11: 48 deaths <b>(5.3%)</b>
                    </li>
                    <li>
                      Council District 12: 38 deaths <b>(4.2%)</b>
                    </li>
                    <li>
                      Council District 13: 77 deaths <b>(8.6%)</b>
                    </li>
                    <li>
                      Council District 14: 269 deaths <b>(29.9%)</b>
                    </li>
                    <li>
                      Council District 15: 33 deaths <b>(3.7%)</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h4>Unhoused Deaths in City of LA by Council District, 2023</h4>
                {/* <CDPie /> */}
                <DeathCD />
              </div>
            </div>
            <div className='mb-14'>
              <h3 className='mb-7 text-left text-xl font-bold'>Month:</h3>
              <div className='mb-7 text-left'>
                <p className='mb-4'>
                  The <b>highest</b> numbers of deaths occurred in{' '}
                  <b>January</b>, <b>February</b>, and <b>March</b>, followed by
                  April and August.
                </p>
                <p className='mb-4'>
                  Deaths <b>dropped</b> significantly in <b>November</b> and{' '}
                  <b>December</b>
                </p>
                <p className='mb-2 font-bold'>Month:</p>
                <ul className='ml-4'>
                  <li>January: 115 deaths (12.8%)</li>
                  <li>February: 100 deaths (11.1%)</li>
                  <li>March: 87 deaths (9.7%)</li>
                  <li>April: 81 deaths (9.0%)</li>
                  <li>May: 70 deaths ( 7.8%)</li>
                  <li>June: 76 deaths (8.4%)</li>
                  <li>July: 77 deaths (8.6%)</li>
                  <li>August: 81 deaths (9.0%)</li>
                  <li>September: 77 deaths (8.6%)</li>
                  <li>October: 71 deaths (7.9%)</li>
                  <li>November: 45 deaths (5.0%)</li>
                  <li>December: 20 deaths (2.2%)</li>
                </ul>
              </div>
              <div>
                <h4>Unhoused Deaths in City of LA by Month, 2023</h4>
                {/* <MonthPie /> */}
                <DeathMonth />
              </div>
            </div>
            <div className='mb-14'>
              <h3 className='mb-7 text-left text-xl font-bold'>Age:</h3>
              <div className='mb-7 text-left'>
                <p className='mb-4'>
                  <b>68%</b> of deaths were suffered by people{' '}
                  <b>ages 31-60. Ages 51-60</b> had the <b>highest</b> death
                  rate.
                </p>
                <p className='mb-2 font-bold'>Age:</p>
                <ul className='ml-4'>
                  <li>
                    Under 1 year: 3 deaths <b>(0.3%)</b>
                  </li>
                  <li>
                    1-10 years: 0 deaths <b>(0.0%)</b>
                  </li>
                  <li>
                    11-20 years: 5 deaths <b>(0.6%)</b>
                  </li>
                  <li>
                    21-30 years: 93 deaths <b>(10.4%)</b>
                  </li>
                  <li>
                    31-40 years: 187 deaths <b>(20.9%)</b>
                  </li>
                  <li>
                    41-50 years: 183 deaths <b>(20.5%)</b>
                  </li>
                  <li>
                    51-60 years: 243 deaths <b>(27.2%)</b>
                  </li>
                  <li>
                    61-70 years: 139 deaths <b>(15.6%)</b>
                  </li>
                  <li>
                    71-80 years: 36 deaths <b>(4.0%)</b>
                  </li>
                  <li>
                    Over 81 years: 4 deaths <b>(0.4%)</b>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Unhoused Deaths in City of LA by Age, 2023</h4>
                {/* <AgePie /> */}
                <DeathAge />
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
