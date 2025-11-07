import Head from 'next/head';
import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import { data } from '@/data.json';

import Navbar from '@/components/Navbar';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const kirbybutton =
  'w-content rounded-full bg-black px-4 py-2 font-bold text-white dark:bg-white dark:text-black';

export default function Data(props: any) {
  return (
    <>
      <Head>
        <title>41.18 Arrests (Jan 2012 - May 2023) Summary and Analysis</title>
      </Head>
      <Navbar />

      <main id='main-content' tabIndex={-1}>
        <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <h1 className='pb-4 pt-8 dark:text-white'>
            41.18 Arrests Map (Jan 2012 - May 2023)
          </h1>

          <center>
            <a
              href='https://4118arrests.lacontroller.app'
              target='_blank'
              rel='noopener noreferrer'
              className='block rounded-lg focus:outline-none'
            >
              <img
                src='/images/4118/year-animated-gif.gif'
                width='400'
                height='600'
                alt='An animated gif of each year of the map, from 2012-2022, along with percentages of arrests by race. For 2012-2018, there are a lot more total arrests and they are most concentrated in Downtown LA, Hollywood, and Venice. For 2019-2022, total arrests are down from previous years.  For 2012-2017, the percentage of those arrested who are Black is always between 40 to 50%. In 2018 the percentage of those arrested who are Black goes down each year. By 2022 Black people make up 19% of those arrested. From 2012-2017, White people make up about 30% of those arrested each year. Starting in 2018, White people makeup about 40% of those arrested each year. Hispanic/Latin people make up between 15-25% of those arrested each year from 2012-2019, and then arrests start rising in 2020 - they make up 38% of those arrested in 2022. 
    The areas that are most concentrated with the highest total arrests vary - in 2019 Skid Row and Venice have higher arrests. In 2020 Venice has higher arrests. In 2019 and 2020, West Los Angeles has higher arrests. In 2020, Chatsworth and Westlake-MacArthur Park have higher arrests too. 
    The Source of Data is LAPD.'
              />
            </a>
          </center>
        </div>
        <br />

        <center>
          <a
            href='https://4118arrests.lacontroller.app'
            target='_blank'
            style={{
              backgroundColor: '#41ffca',
              borderRadius: '8px',
              border: '2px solid #000000',
              color: '#000000',
              // display: "block",
              fontFamily: "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: '24px',
              fontWeight: 'normal',
              fontStyle: 'normal',
              padding: '16px 28px',
              textDecoration: 'none',
              minWidth: '30px',
              textAlign: 'center',
              direction: 'ltr',
              letterSpacing: '0px',
            }}
            rel='noreferrer'
          >
            Click Here to Open the Map
          </a>
        </center>

        <br></br>
        <center>
          <div>
            <p className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
              This map shows details of arrests under{' '}
              <b>
                LA Municipal Code 41.18, <br></br>which criminalizes sitting,
                lying, & sleeping, or placing personal property in the public
                right-of-way in certain instances.
              </b>
            </p>
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <h2 className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
              <b>Summary and Analysis</b>
            </h2>
          </div>
        </center>
        <br></br>
        <br></br>
        <div>
          <center>
            {' '}
            <img
              src='/images/4118/numberOf.png'
              width='400'
              height='600'
              alt='A bar chart showing the number of 41.18 arrests 2012-2022. 2012-2018 are all in the thousands. 2017 is the highest bar, showing 5,738 arrests. 2019-2022 show much lower numbers than previous years - these numbers are in the hundreds. Arrests in 2020 are the lowest, at 340, and have been rising each year since. 2021 had 568 arrests, and 2022 had 853 arrests. The source of data is the Los Angeles Police Department.'
            />
          </center>
        </div>
        <br></br>
        <br></br>
        <center>
          <div>
            <strong>
              <span
                className='dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                From 2012-2022, LAPD made over 36,000 41.18 arrests.
              </span>
            </strong>
          </div>
        </center>
        <br />
        <center>
          <div>
            <strong>
              <span
                className='dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                📅 Average arrests/year:<br></br>2012-2018: 4,781 <br></br>
                2019-2022: 662
              </span>
            </strong>
          </div>
        </center>
        <br />
        <center>
          <div>
            <span className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
              The drop in arrests followed the 2018 court ruling in the case
              <br></br>
              Martin v. Boise, barring cities from enforcing anti-camping laws
              without offering adequate shelter.
            </span>
          </div>
        </center>
        <br />
        <center>
          <div>
            <img
              src='/images/4118/forRace.png'
              width='400'
              height='600'
              alt='A donut chart of 41.18 Arrests by Race. The largest segment is Black, at 42.5%, or 15,654 arrests. The second largest segment is White, at 34.0%, or 12,495 arrests. 3rd largest is Hispanic/Latin, at 20.5% or 7,552 arrests. Other is 2.4% at 887 arrests. Asian is 0.5% at 198 arrests. American Indian/Alaskan Native is 0.0% at 9 arrests. Pacific Islander is 0.0% at 4 arrests. The source of data and race categories are by the Los Angeles Police Department.'
            />
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <strong>
              <span
                className='dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                41.18 Arrests by Race:<br></br>Black: 43% <br></br>White: 34%{' '}
                <br></br>Hispanic/Latin: 21%<br></br>Other: 2%
              </span>
            </strong>
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <span className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
              LA Population by Race:<br></br>Black: 8% <br></br>White: 29%{' '}
              <br></br>Hispanic/Latin: 48%<br></br>Other: 15%
            </span>
          </div>
        </center>
        <br></br>
        <br></br>
        <center>
          <div>
            <strong>
              <p className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
                43% of those arrested were Black.<br></br> Black people are only
                8% of the general population of the City of LA.
              </p>
            </strong>
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <img
              src='/images/4118/byCD.png'
              width='400'
              height='600'
              alt='Bar Chart of 41.18 Arrests by Council District, Jan 2012 to May 2023. There are 15 council districts. Three Council Districts show substantially taller bars than the other 12 Council Districts. Of the three highest bars: Council District 14 has by far the tallest bar, representing 18,972 arrests. Council District 11 has 5,961 arrests, and CD13 has 5,206 arrests. All 12 other council districts have fewer than 1000 arrests. Source of Data is LAPD.'
            />
          </div>
        </center>
        <br></br>
        <br></br>
        <center>
          <div>
            <strong>
              <span
                className='dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                41.18 Arrests by Council District:
              </span>
            </strong>
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <strong>
              <p className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
                Over 50% of 41.18 arrests were in Council District 14 (includes
                Skid Row, DTLA).
              </p>
            </strong>
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <strong>
              <p className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
                16% of arrests were in CD11 (includes Venice), and 14% of arrests
                were in CD13 (includes Hollywood).
              </p>
            </strong>
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <p className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
              All other Council Districts had less than 3% of arrests each.
            </p>
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <img
              src='/images/4118/byType.png'
              width='400'
              height='600'
              alt='Donut Chart of 41.18 Arrests by Type, Jan 2012-May 2023. It shows 84% Misdemeanors and 16% Infractions. Source of Data is LAPD.'
            />
          </div>
        </center>
        <br></br>
        <br></br>
        <center>
          <div>
            <strong>
              <span
                className='dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                41.18 Arrests by Type:<br></br>Misdemeanors: 84% <br></br>
                Infractions: 16%{' '}
              </span>
            </strong>
          </div>
        </center>
        <br></br>
        <br></br>
        <center>
          <div>
            <p className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
              41.18 violations can be cited as either infractions or misdemeanors.{' '}
              <br></br>
              Infractions can lead to a fine of up to $2,500.<br></br>{' '}
              Misdemeanors can result in a fine plus up to 6 months in jail.
            </p>
          </div>
        </center>
        <br></br>

        <center>
          <div>
            <img
              src='/images/4118/bySex.png'
              width='400'
              height='600'
              alt='Donut Chart of 41.18 Arrests by Sex, Jan 2012-May 2023. It shows 73% Male and 27% Female. Source of Data is LAPD.'
            />
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <strong>
              <span
                className='dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                41.18 Arrests by Sex:<br></br>73% of those arrested were male.{' '}
                <br></br>27% were female. <br></br>
              </span>
            </strong>
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <p className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
              The general population of the City of LA is 49% male and 51% female.
            </p>
          </div>
        </center>
      </main>

      <br></br>

      {/* <center><hr style={{height: "2px", width: "50%"}}></hr></center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2012</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2012.png" width="400" height="600" alt="A graphic showing the map filtered to show 2012 only. Total Arrests: 4,096. Arrests are most concentrated in Downtown LA, Hollywood, and Venice. Data Source is LAPD" />
</center>
<br></br>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2013</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2013.png" width="400" height="600" alt="A graphic showing the map filtered to show 2013 only. Total Arrests: 5,411. Arrests are most concentrated in Downtown LA, Hollywood, Venice, and a small part of South LA. Data Source is LAPD" />
</center>
<br></br>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica" }}><b>2014</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2014.png" width="400" height="600" alt="A graphic showing the map filtered to show 2014 only. Total Arrests: 4,583. Arrests are most concentrated in Downtown LA, Hollywood, Venice, and a few small parts of South LA. Data Source is LAPD" />
</center>
<br></br>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2015</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2015.png" width="400" height="600" alt=" A graphic showing the map filtered to show 2015 only. Total Arrests: 4,742. Arrests are most concentrated in Downtown LA, and Hollywood, Venice, and a few small parts of South LA. Data Source is LAPD" />
</center>
<br></br>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2016</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2016.png" width="400" height="600" alt=" A graphic showing the map filtered to show 2016 only. Total Arrests: 5,438 Arrests are most concentrated in Downtown LA, and Hollywood, and Venice. Data Source is LAPD" />
</center>
<br></br>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2017</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2017.png" width="400" height="600" alt=" A graphic showing the map filtered to show 2017 only. Total Arrests: 5,738 Arrests are most concentrated in Downtown LA, and Hollywood, and Venice. Data Source is LAPD" />
</center>
<br></br>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2018</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2018.png" width="400" height="600" alt=" A graphic showing the map filtered to show 2018 only. Total Arrests: 3,456. Arrests are most concentrated in Downtown LA, and Hollywood, and Venice. Data Source is LAPD" />
</center>
<br></br>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2019</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2019.png" width="400" height="600" alt="  A graphic showing the map filtered to show 2019 only. Total Arrests: 887 Arrests are most concentrated in Skid Row and Venice. Data Source is LAPD" />
</center>
<br></br>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2020</b></h1></center>
<br></br>
<br></br>
<center>
  <img src="/images/4118/2020.png" width="400" height="600" alt=" A graphic showing the map filtered to show 2020 only. Total Arrests: 340. Arrests are not as highly concentrated for 2020 as other years. There is some more intensity in Venice than other areas of this year’s map. Data Source is LAPD" />
</center>
<br></br>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2021</b></h1></center>
<br></br>
<br></br>
<center>
  <img src="/images/4118/2021.png" width="400" height="600" alt="  A graphic showing the map filtered to show 2021 only. Total Arrests: 568. Arrests are most concentrated in West Los Angeles. Data Source is LAPD" />
</center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2022</b></h1></center>
<br></br>
<br></br>
<center>
  <img src="/images/4118/2022.png" width="400" height="600" alt=" A graphic showing the map filtered to show 2022 only. Total Arrests: 853. Arrests are most concentrated in Chatsworth, Westlake-MacArthur Park, and West Los Angeles. Data Source is LAPD" />
</center>
<center><hr style={{height: "2px", width: "50%"}}></hr></center> */}
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts

  const newaudits = data.map((eachItem: any) => {
    delete eachItem.textofpage;
    delete eachItem.pdflink;
    return eachItem;
  });
  return {
    props: {
      newaudits,
    },
  };
}
