'use client';
import Head from 'next/head';
import React, { useState } from 'react';

import BarChart from '@/components/charts/BarChart';
import NumberOfArrests from '@/components/charts/NumberOfArrests';
import RaceBarChart from '@/components/charts/RaceBarChart';
import RacePieChart from '@/components/charts/RacePieChart';

export default function Home() {
  const [loader, setLoader] = useState(false);
  const [intakeData, setIntake] = useState({});

  const [showBarChart, setShowBarChart] = useState(true);
  const toggleChart = () => {
    setShowBarChart(!showBarChart);
  };

  return (
    <>
      <Head>
        <title>41.18 Recent Arrests Summary and Analysis</title>
        <meta
          name='description'
          content='An analysis of 41.18 arrests from January 2021 to December 2024'
        />
        <meta
          name='keywords'
          content='41.18, arrests, city of Los Angeles, homelessness'
        />
        <meta
          property='og:title'
          content='41.18 Recent Arrests Summary and Analysis'
        />
        <meta
          property='og:description'
          content='An analysis of 41.18 arrests from January 2021 to December 2024'
        />
        {/* <meta
          property='og:image'
          content='https://example.com/about-image.jpg'
        /> */}
        <meta
          property='og:url'
          content='https://controller.lacity.gov/landings/analysis/4118recentarrests'
        />
        {/* <meta name='twitter:card' content='summary_large_image' /> */}
      </Head>
      <section className='flex min-h-screen flex-col p-10'>
        <div className='text-center'>
          <h1 className='mt-5 text-3xl font-bold' style={{ color: '#ffca41' }}>
            Summary & Analysis
          </h1>

          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a
              href='https://docs.google.com/spreadsheets/d/1llilA7y0LiHjM_0s9lrFJPdZAGfSaOnWjJo_dkKZhHo/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                marginRight: '10px',
                backgroundColor: '#41ffca',
                color: 'black',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              TABLE VERSION
            </a>
            <a
              href='https://4118recentarrests.lacontroller.app/'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                backgroundColor: '#41ffca',
                color: 'black',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              MAP
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              className='text-left dark:text-white'
              style={{ fontFamily: 'Helvetica', maxWidth: '600px' }}
            >
              <br />
              <br />
              <p className='mb-4'>
                This map and analysis show details of arrests under LA Municipal
                Code 41.18, which criminalizes sitting, lying, and sleeping, or
                placing personal property in the public right-of-way in certain
                instances.
              </p>

              <p className='mb-4'>
                On{' '}
                <u>
                  <b>
                    <a
                      href='https://clkrep.lacity.org/onlinedocs/2020/20-1376-S1_ord_187127_09-03-21.pdf'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      July 29, 2021
                    </a>
                  </b>
                </u>
                , the City of LA amended 41.18 in an attempt to comply with the
                2018 Ninth Circuit Court of Appeals ruling in{' '}
                <span style={{ fontStyle: 'italic' }}>Martin v. Boise</span>,
                which prohibits cities from enforcing anti-camping laws if they
                do not have enough shelter beds for unhoused residents.
                Following the 2018{' '}
                <span style={{ fontStyle: 'italic' }}>Martin v. Boise</span>{' '}
                ruling and prior to the City’s 2021 amendment, enforcement of
                41.18 was unconstitutional under the Eighth Amendment’s
                prohibition on cruel and unusual punishment. The
                constitutionality of the current version of 41.18 is still
                disputed.
              </p>

              <p className='mb-4'>
                This map and analysis display 41.18 arrest data obtained from
                the Los Angeles Police Department beginning on January 1, 2021
                through December 13, 2024, to encapsulate enforcement in the
                months leading up to the July 29, 2021 41.18 amendment and the
                most recent available data.
              </p>
            </div>

            <div
              className='text-left dark:text-white'
              style={{ fontFamily: 'Helvetica', maxWidth: '600px' }}
            >
              <p className='mb-4'>
                From January 1, 2021 to December 13, 2024, there were 4,361
                41.18 arrests in the City of LA.
              </p>
              <p className='mb-4'>
                41.18 violations can be cited as either infractions or
                misdemeanors. Infractions can lead to a fine of up to $2,500.
                Misdemeanors can result in a fine plus up to 6 months in jail.
              </p>
              <br />
              <br />
              <hr />
            </div>
          </div>
        </div>

        <br></br>

        <center>
          {' '}
          <div className='chart-container'>
            <center>
              <h2 className='mt-5 text-2xl font-bold'>
                Number of 41.18 Arrests By Year:
              </h2>
            </center>
            <br></br>
            <br></br>
            <center>
              <NumberOfArrests />
            </center>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className='chart-container'>
            <br></br>
            <center>
              <h2 className='mt-5 text-2xl font-bold'>
                41.18 Arrests by Council District:
              </h2>
            </center>
            <br></br>
            <center>
              <BarChart />
            </center>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div
            className='chart-container'
            style={{ width: '100%', height: '100%' }}
          >
            <br />
            <br />
            <center>
              <h2 className='mt-5 text-2xl font-bold'>
                41.18 Arrests by Race:
              </h2>
            </center>
            <center>
              <label htmlFor='chartTypeToggle'>{showBarChart ? 'Bar chart' : 'Pie chart'}</label>
              <input
                id='chartTypeToggle'
                type='checkbox'
                onChange={toggleChart}
                checked={showBarChart}
              />
              {showBarChart ? <RaceBarChart /> : <RacePieChart />}
            </center>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </center>

        <br></br>
        <style>
          {`
      
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

          :root {
            background-color: black;
            color: white;
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --foreground-rgb: 255, 255, 255;
              --background-start-rgb: 0, 0, 0;
              --background-end-rgb: 0, 0, 0;
            }
          }

          body {
            color: rgb(var(--foreground-rgb));
            background: linear-gradient(
                to bottom,
                transparent,
                rgb(var(--background-end-rgb))
              )
              rgb(var(--background-start-rgb));
          }

    
          .chart-container {
            max-width: 900px;
            height: 500px;
            text-align: center;
          }

   
          @media (max-width: 767px) {
            .chart-container {
       
            }
          }

          @media (max-width: 600px) {
            .chart-container {
       
              max-width: 100%;
              height: auto;
            }
          }
        `}
        </style>
        <br></br>
        <br></br>
      </section>
    </>
  );
}
