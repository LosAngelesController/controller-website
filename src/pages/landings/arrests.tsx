/* eslint-disable no-irregular-whitespace */
import Head from 'next/head';
import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import { data } from '@/data.json';

import RaceTable from '@/components/arrests/RaceTable';
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
        <title>LAPD Arrests Maps and Analysis</title>
      </Head>
      <Navbar />

      <main id="main-content" tabIndex={-1} >
        <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h2
              className='mobile-left-align pb-4 pt-8 dark:text-white'
              style={{ flex: '1' }}
            >
              LAPD Arrest Maps & Analysis{' '}
              <span style={{ marginLeft: '5px' }}>(2019-22)</span>
            </h2>
            <a
              href='#spanish_translation'
              style={{
                backgroundColor: '#41ffca',
                borderRadius: '8px',
                border: '2px solid #000000',
                color: '#000000',
                fontFamily:
                  "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: '18px',
                fontWeight: 'normal',
                fontStyle: 'normal',
                padding: '10px 10px',
                textDecoration: 'none',
                minWidth: '20px',
                textAlign: 'center',
                direction: 'ltr',
                letterSpacing: '0px',
                width: '150px',
              }}
            >
              Traducción en Español
            </a>
          </div>
          <br></br>

          <div
            className='image-container mobile-left-align'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src='/images/arrests/lapdarrests timelapse GIF.GIF'
              alt='An animated gif of the map, showing each year, 2019 through 2022. Arrests appear to decrease significantly between 2019 and 2020, and then further decrease slightly each year over the following years.'
              width='400'
              height='600'
              style={{ float: 'left', marginRight: '20px' }}
            />
            <div style={{ flex: '1' }}>
              <p
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                This map shows locations and details of the nearly 300,000 arrests
                the Los Angeles Police Department made between 2019 and 2022.{' '}
                <br />
                <br />
                Users can navigate the map and filter by race, Council District,
                LAPD Division, and arrest type.
                <br />
                <br />
                The data was obtained from the Los Angeles Police Department, but
                marks the first time the data has been made accessible and mapped
                for the public without limitations.
              </p>
              <br></br>
              <p
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                Arrests are triggered by allegations of criminal acts that may or
                may not have occurred.
              </p>
              <br></br>
              <br></br>
              <center>
                <a
                  href='https://arrests.lacontroller.app/'
                  target='_blank'
                  style={{
                    backgroundColor: '#41ffca',
                    borderRadius: '8px',
                    border: '2px solid #000000',
                    color: '#000000',
                    // display: "block",
                    fontFamily:
                      "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: '18px' /* Updated font size */,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    padding: '10px 20px' /* Updated padding values */,
                    textDecoration: 'none',
                    minWidth: '20px',
                    textAlign: 'center',
                    direction: 'ltr',
                    letterSpacing: '0px',
                  }}
                  rel='noreferrer'
                >
                  Click Here to Open the Map
                </a>
              </center>
            </div>
          </div>
        </div>

        <br></br>
        <center>
          <div>
            <h3
              className='mobile-left-align dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <b>Summary and Analysis</b>
            </h3>
          </div>
        </center>
        <br></br>
        <br></br>
        <center>
          <div>
            <h3
              className='mobile-left-align dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <b>Race</b>
            </h3>
          </div>
        </center>

        <div className='image-container'>
          <img
            src='/images/arrests/lapdarrests-race.png'
            width='400'
            height='600'
            alt='A bar chart of LAPD Arrests by Race, 2019-2022. The tallest bar is Hispanic/Latino, at 51%. Next is Black, at 27%, then White at 16%, then Other at 5%. Total arrests for each of the following 4 race categories are not more than 0%: Asian, Pacific Islander, Unknown, and American Indian/Alaskan Native. The Source of Data is LAPD.'
          />
          <img
            src='/images/arrests/lapopulation.png'
            width='400'
            height='600'
            alt='A bar chart of Los Angeles Population by Race.  Hispanic/Latino is 48%.  Black is 8%. White is 29%. Other is 0%.  Asian is 12%, Pacific Islander is 0%, 2+ races is 3%, and American Indian/Alaskan Native is 0%. Source of Data is American Community Survey, 2021 5-Year Estimate.'
          />
        </div>

        <center>
          <div>
            <span
              className='mobile-left-align dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <p className='mobile-left-align'>
                As the map highlights, Brown and Black people are arrested at a
                disproportionate rate,<br></br>making up an average of 78.26% of
                all arrests over the past four years (2019-2022) <br></br>despite
                being only 56% of the LA City population according to 2020 Census
                data.{' '}
              </p>

              <ul className='mobile-left-align'>
                {/* <li>Brown and Black people are arrested at a disproportionate rate relative to the overall population  </li> */}
                <br></br>
                <li>
                  Brown & Black people = 78.26% of all arrests from 2019-2022
                </li>

                <li>
                  Brown & Black people = 56% of the LA City population (per 2020
                  Census data)
                </li>
              </ul>
            </span>

            {/* Accessible race tables replacing images */}
            <div className='mx-auto grid max-w-[880px] grid-cols-1 gap-4 place-items-center md:grid-cols-2 md:gap-x-6 md:gap-y-6 md:place-items-start mt-8'>
              <RaceTable
                year={2019}
                grandTotal="92,350"
                rows={[
                  { label: 'American Indian/Alaskan Native', count: '10', pct: '0.01%' },
                  { label: 'Asian', count: '514', pct: '0.56%' },
                  { label: 'Black', count: '26,286', pct: '28.46%' },
                  { label: 'Hispanic/Latino', count: '44,367', pct: '48.04%' },
                  { label: 'Other', count: '5,016', pct: '5.43%' },
                  { label: 'Pacific Islander', count: '39', pct: '0.04%' },
                  { label: 'Unknown', count: '14', pct: '0.02%' },
                  { label: 'White', count: '16,104', pct: '17.44%' },
                ]}
              />
              <RaceTable
                year={2020}
                grandTotal="66,983"
                rows={[
                  { label: 'American Indian/Alaskan Native', count: '1', pct: '0.00%' },
                  { label: 'Asian', count: '319', pct: '0.48%' },
                  { label: 'Black', count: '18,523', pct: '27.65%' },
                  { label: 'Hispanic/Latino', count: '34,333', pct: '51.26%' },
                  { label: 'Other', count: '3,391', pct: '5.06%' },
                  { label: 'Pacific Islander', count: '19', pct: '0.03%' },
                  { label: 'Unknown', count: '9', pct: '0.01%' },
                  { label: 'White', count: '10,388', pct: '15.51%' },
                ]}
              />
              <RaceTable
                year={2021}
                grandTotal="66,814"
                rows={[
                  { label: 'American Indian/Alaskan Native', count: '6', pct: '0.01%' },
                  { label: 'Asian', count: '289', pct: '0.43%' },
                  { label: 'Black', count: '18,393', pct: '27.53%' },
                  { label: 'Hispanic/Latino', count: '34,226', pct: '51.23%' },
                  { label: 'Other', count: '3,402', pct: '5.09%' },
                  { label: 'Pacific Islander', count: '20', pct: '0.03%' },
                  { label: 'Unknown', count: '8', pct: '0.01%' },
                  { label: 'White', count: '10,470', pct: '15.67%' },
                ]}
              />
              <RaceTable
                year={2022}
                grandTotal="61,874"
                rows={[
                  { label: 'American Indian/Alaskan Native', count: '5', pct: '0.01%' },
                  { label: 'Asian', count: '304', pct: '0.49%' },
                  { label: 'Black', count: '16,192', pct: '26.17%' },
                  { label: 'Hispanic/Latino', count: '32,614', pct: '52.71%' },
                  { label: 'Other', count: '3,489', pct: '5.64%' },
                  { label: 'Pacific Islander', count: '20', pct: '0.03%' },
                  { label: 'Unknown', count: '10', pct: '0.02%' },
                  { label: 'White', count: '9,240', pct: '14.93%' },
                ]}
              />
            </div>
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <h3
              className='mobile-left-align dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <b>Council Districts</b>
            </h3>
          </div>
        </center>
        <div className='image-container'>
          <img
            src='/images/arrests/lapdarrestsCD-2019.png'
            width='400'
            height='600'
            alt='A bar chart of LAPD Arrests by Council District, 2019. There are 15 Council Districts. Council District 14 has a much higher number of arrests than any other district, with around 14,000 arrests. There are several other Council Districts with around 7,000 to 9,000 arrests (CDs 1, 6, 8, 9, 13), The rest of the Council Districts have fewer than around 5,000 to 6,000 arrests. CDs 5 and 12 in particular have the fewest number of arrests, at around 2,500 arrests each. Source of data is LAPD.'
          />
          <img
            src='/images/arrests/lapdarrestsCD-2020.png'
            width='400'
            height='600'
            alt='A bar chart of LAPD Arrests by Council District, 2020. There are fewer arrests overall compared to 2019. There are 15 Council Districts. Council District 14 has the highest number of arrests, at around 7,500 arrests,  but is also fairly close in number of arrests to districts 8 and 9, which are around 6,000 arrests.  CDs 1, 6, 10, 11, and 13 each have around 5,000 arrests. The rest of the Council Districts have much fewer than 5,000  arrests. CDs 5 and 12 have the fewest number of arrests, at under 2,500 arrests each. Source of data is LAPD.'
          />
        </div>

        <div className='image-container'>
          <img
            src='/images/arrests/lapdarrestsCD-2021.png'
            width='400'
            height='600'
            alt='A bar chart of LAPD Arrests by Council District, 2021. There are still fewer arrests overall compared to 2019. There are 15 Council Districts. Council Districts  8 and 14 have the highest number of arrests, at around 6,000  arrests,  and are also fairly close in number of arrests to districts 9, and 11 which are also close to 6,000 arrests.  CDs 1, 6, and 13 each have around 5,000 arrests. The rest of the Council Districts havemuch fewer than 5,000  arrests. CDs 5 and 12 again have the fewest number of arrests, at under 2,500 arrests each. Source of data is LAPD.'
          />
          <img
            src='/images/arrests/lapdarrestsCD-2022.png'
            width='400'
            height='600'
            alt='A bar chart of LAPD Arrests by Council District, 2022. There are still fewer arrests overall compared to 2019. There are 15 Council Districts. Council Districts 14, 8, and 1 have the highest number of arrests, at around 5,000 to 6,000  arrests,  and are also fairly close in number of arrests to districts 6, 9,  11, and 13 which are also close to 5,000 arrests. The rest of the Council Districts havemuch fewer than 5,000  arrests. CDs 4 and 5 have the fewest number of arrests, at under 2,500 arrests each. Source of data is LAPD. '
          />
        </div>
        <br />
        <center>
          <div className='mobile-left-align'>
            <span
              className='mobile-left-align dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              For almost every year, Council District 14 leads all other districts
              for the total number of arrests. In 2021,
              <br></br>
              it came in second to Council District 8 by a difference of only
              three arrests.
            </span>
          </div>
        </center>
        <br />

        <br />
        <center>
          <div>
            <h3
              className='mobile-left-align dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <b>Arrest Type</b>
            </h3>
          </div>
        </center>
        <center>
          <div className='image-container'>
            <img
              src='/images/arrests/lapdarrests-types2019.png'
              width='400'
              height='600'
              alt='A bar chart of LAPD Arrests by Council District, 2019. There are 15 Council Districts. Council District 14 has a much higher number of arrests than any other district, with around 14,000 arrests. There are several other Council Districts with around 7,000 to 9,000 arrests (CDs 1, 6, 8, 9, 13), The rest of the Council Districts have fewer than around 5,000 to 6,000 arrests. CDs 5 and 12 in particular have the fewest number of arrests, at around 2,500 arrests each. Source of data is LAPD.'
            />
            <img
              src='/images/arrests/lapdarrests-types2020.png'
              width='400'
              height='600'
              alt='A bar chart of LAPD Arrests by Council District, 2020. There are fewer arrests overall compared to 2019. There are 15 Council Districts. Council District 14 has the highest number of arrests, at around 7,500 arrests,  but is also fairly close in number of arrests to districts 8 and 9, which are around 6,000 arrests.  CDs 1, 6, 10, 11, and 13 each have around 5,000 arrests. The rest of the Council Districts have much fewer than 5,000  arrests. CDs 5 and 12 have the fewest number of arrests, at under 2,500 arrests each. Source of data is LAPD.'
            />
          </div>

          <div className='image-container'>
            <img
              src='/images/arrests/lapdarrests-types2021.png'
              width='400'
              height='600'
              alt='A bar chart of LAPD Arrests by Council District, 2021. There are still fewer arrests overall compared to 2019. There are 15 Council Districts. Council Districts  8 and 14 have the highest number of arrests, at around 6,000  arrests,  and are also fairly close in number of arrests to districts 9, and 11 which are also close to 6,000 arrests.  CDs 1, 6, and 13 each have around 5,000 arrests. The rest of the Council Districts havemuch fewer than 5,000  arrests. CDs 5 and 12 again have the fewest number of arrests, at under 2,500 arrests each. Source of data is LAPD.'
            />
            <img
              src='/images/arrests/lapdarrests-types2022.png'
              width='400'
              height='600'
              alt='A bar chart of LAPD Arrests by Council District, 2022. There are still fewer arrests overall compared to 2019. There are 15 Council Districts. Council Districts 14, 8, and 1 have the highest number of arrests, at around 5,000 to 6,000  arrests,  and are also fairly close in number of arrests to districts 6, 9,  11, and 13 which are also close to 5,000 arrests. The rest of the Council Districts havemuch fewer than 5,000  arrests. CDs 4 and 5 have the fewest number of arrests, at under 2,500 arrests each. Source of data is LAPD. '
            />
          </div>
          {/* <div className="image-container">
  <img src="/images/arrests/lapdarrests-type2019.png" width="400" height="600" alt="A donut chart of LAPD Arrests by Type, 2019. There are 2 categories: There’s Felony, and there’s Misdemeanor & Infraction. The bigger category is Misdemeanor & Infraction at 55,954, or 62.4%. Felony is 33,663, or 37.6%. Source of Data is LAPD. " />
    <img src="/images/arrests/lapdarrests-type2020.png" width="400" height="600" alt="A donut chart of LAPD Arrests by Type, 2020. There are 2 categories: There’s Felony, and there’s Misdemeanor & Infraction. The slightly bigger category is Misdemeanor & Infraction at 34,659, or 52.8%. Felony is 31,015, or 47.2%. Source of Data is LAPD. " />
  </div>
  <div className="image-container">
  <img src="/images/arrests/lapdarrests-type2021.png" width="400" height="600" alt="A donut chart of LAPD Arrests by Type, 2021. There are 2 categories: There’s Felony, and there’s Misdemeanor & Infraction. They are almost even.Misdemeanor & Infraction is marginally bigger at 33,179, or 50.4%. Felony is 32,597, or 49.6%. Source of Data is LAPD." />
    <img src="/images/arrests/lapdarrests-type2022.png" width="400" height="600" alt="A donut chart of LAPD Arrests by Type, 2021. There are 2 categories: There’s Felony, and there’s Misdemeanor & Infraction. They are even.Misdemeanor & Infraction is marginally bigger at 30,431, or 50%. Felony is 30,378, or 50%. Source of Data is LAPD. " />
  </div> */}
        </center>
        <br></br>
        <center>
          <div className='mobile-left-align'>
            <span className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
              The LAPD arrest types fall into five categories identified by the
              LAPD: <br></br>(1) felony, (2) misdemeanor, (3) infractions, (4)
              dependent, and (5) other.
            </span>
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <span
              className='mobile-left-align dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <p className='mobile-left-align'>
                Under California law, a felony is a crime that is punishable with
                death, by imprisonment in the state prison, <br></br>or . . . by
                imprisonment in a county jail under [certain provisions]. Every
                other crime or public offense is a misdemeanor except those
                offenses that are classified as infractions. <br></br>Misdemeanors
                and infractions carry varying degrees of financial and
                incarceration consequences.
              </p>

              {/* <p className='mobile-left-align'>
          Every other crime or public offense is a misdemeanor except those offenses 
  that are classified as infractions. <br></br>Misdemeanors and
  infractions carry varying degrees of financial and incarceration consequences.
          </p> */}
            </span>
          </div>
        </center>
        {/* <center> 
  <div className='mobile-left-align'>
    
  <p className='dark:text-white' style={{fontFamily: "Helvetica"}}> <br></br>
  Under California law, a felony is a crime that is punishable with death, by imprisonment in the 
  state prison, or . . . by imprisonment in a county jail under [certain provisions]. 
  Every other crime or public offense is a misdemeanor except those offenses 
  that are classified as infractions. Misdemeanors and
  infractions carry varying degrees of financial and incarceration consequences.

  </p>
    
  
  </div>
  </center> */}

        <br></br>
        <center>
          <div>
            <p
              className='mobile-left-align dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              LAPD makes more arrests for misdemeanor and infraction offenses than
              for felonies.
            </p>
          </div>
        </center>
        <br></br>
        <center>
          <div>
            <span
              className='mobile-left-align dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <ul className='mobile-left-align'>
                <li className='mobile-left-align'>
                  2019: 55,954 misdemeanor & infraction arrests vs. 33,663 felony
                  arrests{' '}
                </li>
                <li className='mobile-left-align'>
                  2020: 34,659 misdemeanor & infraction arrests vs. 31,015 felony
                  arrests
                </li>
                <li className='mobile-left-align'>
                  2021: 33,179 misdemeanor & infraction arrests vs. 32,597 felony
                  arrests
                </li>
                <li className='mobile-left-align'>
                  2022: 30,431 misdemeanor & infraction arrests vs. 30,378 felony
                  arrests
                </li>
              </ul>
              <br></br>
              <div>
                <h3
                  className='mobile-left-align dark:text-white'
                  style={{ fontFamily: 'Helvetica' }}
                >
                  <b>Dependent Arrests</b>
                </h3>
              </div>
              <p
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                {' '}
                <br></br>
                According to LAPD data, they make over 400 arrests each year in
                the “dependent” category. <br></br>
                This category includes children who are taken into custody because
                their parent or <br></br>guardian has been accused of abuse,
                neglect, <br></br> or endangerment, as well as children who are
                deemed to be runaways or <br></br> beyond parental control.
              </p>

              <p
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                {' '}
                <br></br>
                The data available is unclear about the nature of these
                interactions, <br></br>
                but raises questions about the frequency that children and youth
                are coming into contact with the LAPD.
              </p>
              <br></br>
              <ul className='mobile-left-align'>
                <li className='mobile-left-align'>
                  2019: 464 Dependent arrests{' '}
                </li>
                <li className='mobile-left-align'>2020: 429 Dependent arrests</li>
                <li className='mobile-left-align'>2021: 422 Dependent arrests</li>
                <li className='mobile-left-align'>2022: 545 Dependent arrests</li>
              </ul>
            </span>
          </div>
        </center>

        <br></br>
        <hr></hr>

        <div id='spanish_translation'>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h2 className='mobile-left-align pb-4 pt-8 dark:text-white'>
              Mapas y Análisis de Arrestos de LAPD (2019-2022)
            </h2>

            <div
              className='image-container mobile-left-align'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img
                src='/images/arrests/lapdarrests timelapse GIF.GIF'
                alt='GRÁFICO: Mapa de tiempo transcurrido mostrando tendencias de arrestos'
                width='400'
                height='600'
                style={{ float: 'left', marginRight: '20px' }}
              />
              <div style={{ flex: '1' }}>
                <p
                  className='mobile-left-align dark:text-white'
                  style={{ fontFamily: 'Helvetica' }}
                >
                  Este mapa demuestra ubicaciones y detalles de más de 300,000
                  arrestos que el Departamento de Policía de Los Ángeles hizo
                  entre 2019 y 2022. Usuarios pueden navegar el mapa y filtrar por
                  raza, Distrito del Consejo, División de LAPD, y tipo de
                  arrestos.
                  <br />
                  <br />
                  La información fue obtenida del Departamento de Policía de Los
                  Ángeles, pero marca la primera vez que la información ha sido
                  accesible y cartografiada para el público sin limitaciones.
                </p>
                <br></br>
                <p
                  className='mobile-left-align dark:text-white'
                  style={{ fontFamily: 'Helvetica' }}
                >
                  Los arrestos son basados en denuncias de actos criminales que
                  pueden o no haber ocurrido.
                </p>
                <br></br>
                <br></br>
                <center>
                  <a
                    href='https://arrests.lacontroller.app/'
                    target='_blank'
                    style={{
                      backgroundColor: '#41ffca',
                      borderRadius: '8px',
                      border: '2px solid #000000',
                      color: '#000000',
                      // display: "block",
                      fontFamily:
                        "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontSize: '18px' /* Updated font size */,
                      fontWeight: 'normal',
                      fontStyle: 'normal',
                      padding: '10px 20px' /* Updated padding values */,
                      textDecoration: 'none',
                      minWidth: '20px',
                      textAlign: 'center',
                      direction: 'ltr',
                      letterSpacing: '0px',
                    }}
                    rel='noreferrer'
                  >
                    Abrir el Mapa
                  </a>
                </center>
              </div>
            </div>
          </div>

          <br></br>
          <center>
            <div>
              <h3
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                <b>Resumen y Análisis</b>
              </h3>
            </div>
          </center>
          <br></br>
          <br></br>
          <center>
            <div>
              <h3
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                <b>Arrestos por Raza</b>
              </h3>
            </div>
          </center>
          <div className='image-container'>
            <img
              src='/images/arrests/spanish/Sp-lapdarrests-race.png'
              width='400'
              height='600'
              alt='Gráfico de barras de arrestos del LAPD por raza, 2019–2022. La categoría más alta es Hispano/Latino (51%), seguida de Negra/Afrodescendiente (27%), Blanca (16%) y Otras (5%). Fuente: LAPD.'
            />
            <img
              src='/images/arrests/spanish/Sp-lapopulation.png'
              width='400'
              height='600'
              alt='Gráfico de barras de la población de Los Ángeles por raza. Hispano/Latino 48%, Negra/Afrodescendiente 8%, Blanca 29%, Asiática 12%, Isla del Pacífico 0%, 2+ razas 3%, Indígena Estadounidense/Nativo de Alaska 0%. Fuente: ACS 2021 (estimación a 5 años).'
            />
          </div>

          <center>
            <div>
              <span
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                <p className='mobile-left-align'>
                  Como el mapa refleja, gente morena y negra o afrodescendiente
                  son arrestados en una <br></br>
                  tasa desproporcionada, componiendo un promedio de 78.26% de
                  todos <br></br>los arrestos en los últimos cuatro años
                  (2019-2022),
                  <br></br> a pesar de ser solo 56% de la población de la ciudad
                  de Los Ángeles, segun los datos del Censo de 2020.
                </p>

                <ul className='mobile-left-align'>
                  {/* <li>Brown and Black people are arrested at a disproportionate rate relative to the overall population  </li> */}
                  <br></br>
                  <li>
                    Gente morena y negra o afrodescendiente = 78.26% arrestos de
                    2019-2022
                  </li>

                  <li>
                    Gente morena y negra o afrodescendiente = 56% de la población
                    de la ciudad de Los Ángeles (según datos del Censo de 2020)
                  </li>
                </ul>
              </span>

              <div className='mx-auto grid max-w-[880px] grid-cols-1 gap-4 place-items-center md:grid-cols-2 md:gap-x-6 md:gap-y-6 md:place-items-start mt-8'>
                <RaceTable
                  year={2019}
                  grandTotal="92,350"
                  labels={{
                    caption: 'Arrestos del LAPD por raza, 2019',
                    source: 'Fuente de datos: Departamento de Policía de Los Ángeles',
                    raceColumn: 'Raza',
                    countColumn: '# de Arrestos',
                    percentColumn: '% de Arrestos',
                    grandTotal: 'Gran total',
                  }}
                  rows={[
                    { label: 'Indígena de las Américas o Nativa de Alaska', count: '10', pct: '0.01%' },
                    { label: 'Asiático', count: '514', pct: '0.56%' },
                    { label: 'Negra o Afrodescendiente', count: '26,286', pct: '28.46%' },
                    { label: 'Hispana/Latina', count: '44,367', pct: '48.04%' },
                    { label: 'Otra raza', count: '5,016', pct: '5.43%' },
                    { label: 'Isleña del Pacífico', count: '39', pct: '0.04%' },
                    { label: 'Desconocido', count: '14', pct: '0.02%' },
                    { label: 'Blanca', count: '16,104', pct: '17.44%' },
                  ]}
                />
                <RaceTable
                  year={2020}
                  grandTotal="66,983"
                  labels={{
                    caption: 'Arrestos del LAPD por raza, 2020',
                    source: 'Fuente de datos: Departamento de Policía de Los Ángeles',
                    raceColumn: 'Raza',
                    countColumn: '# de Arrestos',
                    percentColumn: '% de Arrestos',
                    grandTotal: 'Gran total',
                  }}
                  rows={[
                    { label: 'Indígena de las Américas o Nativa de Alaska', count: '1', pct: '0.00%' },
                    { label: 'Asiático', count: '319', pct: '0.48%' },
                    { label: 'Negra o Afrodescendiente', count: '18,523', pct: '27.65%' },
                    { label: 'Hispana/Latina', count: '34,333', pct: '51.26%' },
                    { label: 'Otra raza', count: '3,391', pct: '5.06%' },
                    { label: 'Isleña del Pacífico', count: '19', pct: '0.03%' },
                    { label: 'Desconocido', count: '9', pct: '0.01%' },
                    { label: 'Blanca', count: '10,388', pct: '15.51%' },
                  ]}
                />
                <RaceTable
                  year={2021}
                  grandTotal="66,814"
                  labels={{
                    caption: 'Arrestos del LAPD por raza, 2021',
                    source: 'Fuente de datos: Departamento de Policía de Los Ángeles',
                    raceColumn: 'Raza',
                    countColumn: '# de Arrestos',
                    percentColumn: '% de Arrestos',
                    grandTotal: 'Gran total',
                  }}
                  rows={[
                    { label: 'Indígena de las Américas o Nativa de Alaska', count: '6', pct: '0.01%' },
                    { label: 'Asiático', count: '289', pct: '0.43%' },
                    { label: 'Negra o Afrodescendiente', count: '18,393', pct: '27.53%' },
                    { label: 'Hispana/Latina', count: '34,226', pct: '51.23%' },
                    { label: 'Otra raza', count: '3,402', pct: '5.09%' },
                    { label: 'Isleña del Pacífico', count: '20', pct: '0.03%' },
                    { label: 'Desconocido', count: '8', pct: '0.01%' },
                    { label: 'Blanca', count: '10,470', pct: '15.67%' },
                  ]}
                />
                <RaceTable
                  year={2022}
                  grandTotal="61,874"
                  labels={{
                    caption: 'Arrestos del LAPD por raza, 2022',
                    source: 'Fuente de datos: Departamento de Policía de Los Ángeles',
                    raceColumn: 'Raza',
                    countColumn: '# de Arrestos',
                    percentColumn: '% de Arrestos',
                    grandTotal: 'Gran total',
                  }}
                  rows={[
                    { label: 'Indígena de las Américas o Nativa de Alaska', count: '5', pct: '0.01%' },
                    { label: 'Asiático', count: '304', pct: '0.49%' },
                    { label: 'Negra o Afrodescendiente', count: '16,192', pct: '26.17%' },
                    { label: 'Hispana/Latina', count: '32,614', pct: '52.71%' },
                    { label: 'Otra raza', count: '3,489', pct: '5.64%' },
                    { label: 'Isleña del Pacífico', count: '20', pct: '0.03%' },
                    { label: 'Desconocido', count: '10', pct: '0.02%' },
                    { label: 'Blanca', count: '9,240', pct: '14.93%' },
                  ]}
                />
              </div>
            </div>

            {/* </div> */}
          </center>
          <br></br>
          <center>
            <div>
              <h3
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                <b>Arrestos por Distrito del Consejo</b>
              </h3>
            </div>
          </center>
          <div className='image-container'>
            <img
              src='/images/arrests/spanish/Sp-lapdarrestsCD-2019.png'
              width='400'
              height='600'
              alt='Gráfico de barras de arrestos del LAPD por Distrito del Consejo, 2019. Hay 15 Distritos del Consejo. El Distrito 14 tiene muchos más arrestos que cualquier otro, con alrededor de 14,000. Varios otros distritos tienen entre 7,000 y 9,000 arrestos (Distritos 1, 6, 8, 9 y 13). El resto tiene menos de aproximadamente 5,000 a 6,000 arrestos. En particular, los Distritos 5 y 12 tienen la menor cantidad, alrededor de 2,500 cada uno. Fuente: LAPD.'
            />
            <img
              src='/images/arrests/spanish/Sp-lapdarrestsCD-2020.png'
              width='400'
              height='600'
              alt='Gráfico de barras de arrestos del LAPD por Distrito del Consejo, 2020. En general hay menos arrestos que en 2019. Hay 15 Distritos del Consejo. El Distrito 14 tiene la mayor cantidad, con alrededor de 7,500, aunque está relativamente cerca de los Distritos 8 y 9 (aprox. 6,000). Los Distritos 1, 6, 10, 11 y 13 tienen alrededor de 5,000 cada uno. El resto tiene bastante menos de 5,000. Los Distritos 5 y 12 son los más bajos, con menos de 2,500 cada uno. Fuente: LAPD.'
            />
          </div>

          <div className='image-container'>
            <img
              src='/images/arrests/spanish/Sp-lapdarrestsCD-2021.png'
              width='400'
              height='600'
              alt='Gráfico de barras de arrestos del LAPD por Distrito del Consejo, 2021. Aún hay menos arrestos en total que en 2019. Hay 15 Distritos del Consejo. Los Distritos 8 y 14 tienen las cifras más altas, cerca de 6,000, y están relativamente cerca de los Distritos 9 y 11 (también cerca de 6,000). Los Distritos 1, 6 y 13 tienen alrededor de 5,000 cada uno. El resto tiene bastante menos de 5,000. Los Distritos 5 y 12 nuevamente son los más bajos, con menos de 2,500 cada uno. Fuente: LAPD.'
            />
            <img
              src='/images/arrests/spanish/Sp-lapdarrestsCD-2022.png'
              width='400'
              height='600'
              alt='Gráfico de barras de arrestos del LAPD por Distrito del Consejo, 2022. Aún hay menos arrestos en total que en 2019. Hay 15 Distritos del Consejo. Los Distritos 14, 8 y 1 registran las cifras más altas, alrededor de 5,000 a 6,000, y están relativamente cerca de los Distritos 6, 9, 11 y 13 (también cerca de 5,000). El resto tiene bastante menos de 5,000. Los Distritos 4 y 5 tienen las cifras más bajas, con menos de 2,500 cada uno. Fuente: LAPD.'
            />
          </div>
          <br />
          <center>
            <div className='mobile-left-align'>
              <span
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                Casi cada año, el Distrito del Consejo 14 lidera todos los otros
                distritos en número de arrestos totales.
                <br></br>
                En el 2021, llegó en segundo lugar, después del Distrito del
                Consejo 8, con una diferencia de solo 3 arrestos.
              </span>
            </div>
          </center>
          <br />

          <br />
          <center>
            <div>
              <h3
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                <b>Tipo de Arresto</b>
              </h3>
            </div>
          </center>
          <center>
            <div className='image-container'>
              <img
                src='/images/arrests/spanish/Sp-lapdarrests-type2019.png'
                width='400'
                height='600'
                alt='Gráfico de barras de arrestos del LAPD por Distrito del Consejo, 2019. Hay 15 Distritos del Consejo. El Distrito 14 tiene muchos más arrestos que cualquier otro, con alrededor de 14,000. Varios otros distritos tienen entre 7,000 y 9,000 arrestos (Distritos 1, 6, 8, 9 y 13). El resto tiene menos de aproximadamente 5,000 a 6,000 arrestos. En particular, los Distritos 5 y 12 tienen la menor cantidad, alrededor de 2,500 cada uno. Fuente: LAPD.'
              />
              <img
                src='/images/arrests/spanish/Sp-lapdarrests-type2020.png'
                width='400'
                height='600'
                alt='Gráfico de barras de arrestos del LAPD por Distrito del Consejo, 2020. En general hay menos arrestos que en 2019. Hay 15 Distritos del Consejo. El Distrito 14 tiene la mayor cantidad, con alrededor de 7,500, aunque está relativamente cerca de los Distritos 8 y 9 (aprox. 6,000). Los Distritos 1, 6, 10, 11 y 13 tienen alrededor de 5,000 cada uno. El resto tiene bastante menos de 5,000. Los Distritos 5 y 12 son los más bajos, con menos de 2,500 cada uno. Fuente: LAPD.'
              />
            </div>

            <div className='image-container'>
              <img
                src='/images/arrests/spanish/Sp-lapdarrests-type2021.png'
                width='400'
                height='600'
                alt='Gráfico de barras de arrestos del LAPD por Distrito del Consejo, 2021. Aún hay menos arrestos en total que en 2019. Hay 15 Distritos del Consejo. Los Distritos 8 y 14 tienen las cifras más altas, cerca de 6,000, y están relativamente cerca de los Distritos 9 y 11 (también cerca de 6,000). Los Distritos 1, 6 y 13 tienen alrededor de 5,000 cada uno. El resto tiene bastante menos de 5,000. Los Distritos 5 y 12 nuevamente son los más bajos, con menos de 2,500 cada uno. Fuente: LAPD.'
              />
              <img
                src='/images/arrests/spanish/Sp-lapdarrests-type2022.png'
                width='400'
                height='600'
                alt='Gráfico de barras de arrestos del LAPD por Distrito del Consejo, 2022. Aún hay menos arrestos en total que en 2019. Hay 15 Distritos del Consejo. Los Distritos 14, 8 y 1 registran las cifras más altas, alrededor de 5,000 a 6,000, y están relativamente cerca de los Distritos 6, 9, 11 y 13 (también cerca de 5,000). El resto tiene bastante menos de 5,000. Los Distritos 4 y 5 tienen las cifras más bajas, con menos de 2,500 cada uno. Fuente: LAPD.'
              />
            </div>
            {/* <div className="image-container">
  <img src="/images/arrests/lapdarrests-type2019.png" width="400" height="600" alt="A donut chart of LAPD Arrests by Type, 2019. There are 2 categories: There’s Felony, and there’s Misdemeanor & Infraction. The bigger category is Misdemeanor & Infraction at 55,954, or 62.4%. Felony is 33,663, or 37.6%. Source of Data is LAPD. " />
    <img src="/images/arrests/lapdarrests-type2020.png" width="400" height="600" alt="A donut chart of LAPD Arrests by Type, 2020. There are 2 categories: There’s Felony, and there’s Misdemeanor & Infraction. The slightly bigger category is Misdemeanor & Infraction at 34,659, or 52.8%. Felony is 31,015, or 47.2%. Source of Data is LAPD. " />
  </div>
  <div className="image-container">
  <img src="/images/arrests/lapdarrests-type2021.png" width="400" height="600" alt="A donut chart of LAPD Arrests by Type, 2021. There are 2 categories: There’s Felony, and there’s Misdemeanor & Infraction. They are almost even.Misdemeanor & Infraction is marginally bigger at 33,179, or 50.4%. Felony is 32,597, or 49.6%. Source of Data is LAPD." />
    <img src="/images/arrests/lapdarrests-type2022.png" width="400" height="600" alt="A donut chart of LAPD Arrests by Type, 2021. There are 2 categories: There’s Felony, and there’s Misdemeanor & Infraction. They are even.Misdemeanor & Infraction is marginally bigger at 30,431, or 50%. Felony is 30,378, or 50%. Source of Data is LAPD. " />
  </div>
    */}
          </center>
          <br></br>
          <center>
            <div className='mobile-left-align'>
              <span
                className='dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                Los tipos de arresto de LAPD se dividen en cinco categorías
                identificadas por LAPD: <br></br>(1) delito grave, (2) delito
                menor, (3) infracciones, (4) dependiente y (5) otros.
              </span>
            </div>
          </center>
          <br></br>
          <center>
            <div>
              <span
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                <p className='mobile-left-align'>
                  Según la ley de California, un delito grave es un delito que
                  puede ser castigado con la muerte, con encarcelamiento en una
                  prisión estatal o por encarcelamiento en <br></br>una cárcel del
                  condado bajo [ciertas disposiciones]. Cualquier otro delito y
                  ofensa pública es un delito menos grave, <br></br>excepto
                  aquellos delitos que se clasifican como infracciones. Los
                  delitos menores y las infracciones conllevan diversos grados de
                  consecuencias financieras y de encarcelamiento.
                </p>

                {/* <p className='mobile-left-align'>
          Every other crime or public offense is a misdemeanor except those offenses 
  that are classified as infractions. <br></br>Misdemeanors and
  infractions carry varying degrees of financial and incarceration consequences.
          </p> */}
              </span>
            </div>
          </center>
          {/* <center> 
  <div className='mobile-left-align'>
    
  <p className='dark:text-white' style={{fontFamily: "Helvetica"}}> <br></br>
  Under California law, a felony is a crime that is punishable with death, by imprisonment in the 
  state prison, or . . . by imprisonment in a county jail under [certain provisions]. 
  Every other crime or public offense is a misdemeanor except those offenses 
  that are classified as infractions. Misdemeanors and
  infractions carry varying degrees of financial and incarceration consequences.

  </p>
    
  
  </div>
  </center> */}
          <br></br>

          <center>
            <div>
              <p
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                LAPD hace más arrestos por delitos menores e infracciones que por
                delitos graves.
              </p>
            </div>
          </center>
          <br></br>
          <center>
            <div>
              <span
                className='mobile-left-align dark:text-white'
                style={{ fontFamily: 'Helvetica' }}
              >
                <ul className='mobile-left-align'>
                  <li className='mobile-left-align'>
                    2019: 55,954 arrestos por delitos menores e infracciones
                    frente a 33,663 arrestos por delitos graves{' '}
                  </li>
                  <li className='mobile-left-align'>
                    2020: 34,659 arrestos por delitos menores e infracciones
                    frente a 31,015 arrestos por delitos graves
                  </li>
                  <li className='mobile-left-align'>
                    2021: 33,179 arrestos por delitos menores e infracciones
                    frente a 32 597 arrestos por delitos graves
                  </li>
                  <li className='mobile-left-align'>
                    2022: 30,431 arrestos por delitos menores e infracciones
                    frente a 30 378 arrestos por delitos graves
                  </li>
                </ul>
                <br></br>
                <div>
                  <h3
                    className='mobile-left-align dark:text-white'
                    style={{ fontFamily: 'Helvetica' }}
                  >
                    <b>Arrestos de dependientes</b>
                  </h3>
                </div>
                <p
                  className='mobile-left-align dark:text-white'
                  style={{ fontFamily: 'Helvetica' }}
                >
                  {' '}
                  <br></br>
                  Según los datos de LAPD, realizan más de 400 arrestos cada año
                  en la categoría de “dependientes”. <br></br>
                  Esta categoría incluye niños detenidos porque sus padres o
                  guardián han sido acusados<br></br>
                  ​de abuso, negligencia o peligro, así como niños que se
                  consideran fugitivos o fuera del control de los padres.
                </p>

                <p
                  className='mobile-left-align dark:text-white'
                  style={{ fontFamily: 'Helvetica' }}
                >
                  {' '}
                  <br></br>
                  Los datos disponibles no son claros sobre la naturaleza de estas
                  interacciones, pero plantean dudas sobre <br></br>
                  la frecuencia con la que los niños y jóvenes entran en contacto
                  con el Departamento de Policía de Los Ángeles.
                </p>
                <br></br>
                <ul className='mobile-left-align'>
                  <li className='mobile-left-align'>
                    2019: 464 arrestos de dependientes
                  </li>
                  <li className='mobile-left-align'>
                    2020: 429 arrestos de dependientes
                  </li>
                  <li className='mobile-left-align'>
                    2021: 422 arrestos de dependientes
                  </li>
                  <li className='mobile-left-align'>
                    2022: 545 arrestos de dependientes
                  </li>
                </ul>
              </span>
            </div>
          </center>
        </div>
      </main>
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
