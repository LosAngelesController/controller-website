import Link from 'next/link';
import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import { data } from '@/data.json';

import Layout from '@/components/layout/Layout';
import LineItem from '@/components/LineItem';
import Navbar from '@/components/Navbar';
import OpenDataSeries from '@/components/opendataseries';
import Seo from '@/components/Seo';

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
  const dataAltOverrides: Record<string, string> = {
    'Visualizing Nine Years of Audits, Reports and Data Stories':
      'Preview image for Visualizing Nine Years of Audits, Reports and Data Stories, showing the Los Angeles skyline from a hillside.',
    'Get Ready, L.A.':
      'Preview image for Get Ready, L.A., showing a Los Angeles Fire Department ambulance in motion.',
    'Homelessness and Housing Hub':
      'Preview image for Homelessness and Housing Hub, showing an unhoused person and belongings on a city sidewalk.',
    'Unidos: Latinx en Los Angeles':
      'Preview image for Unidos: Latinx en Los Angeles, showing a mural of community members.',
    "L.A.'s Cost of Living Crisis":
      "Preview image for L.A.'s Cost of Living Crisis, showing palm trees with the downtown skyline at sunset.",
    'LGBTQ+ Pride, Progress and Perseverance':
      'Preview image for LGBTQ+ Pride, Progress and Perseverance, showing a rainbow crosswalk.',
    'Free Food in California':
      'Preview image for Free Food in California, showing assorted fruits and vegetables.',
    'Free Tax Prep Los Angeles':
      'Preview image for Free Tax Prep Los Angeles, showing a tax return form.',
    'Inside L.A. City Finances':
      'Preview image for Inside L.A. City Finances, showing the Los Angeles skyline at night.',
    'The Problems and Progress of Prop. HHH Story Map':
      'Preview image for The Problems and Progress of Prop. HHH Story Map, showing tents along a city street.',
    'Black History Is L.A. History':
      'Preview image for Black History Is L.A. History, showing the Watts Towers.',
    'City Activities Dashboard':
      'Preview image for City Activities Dashboard, showing the Hollywood sign at sunset.',
    'City Properties Available for Homeless Housing and Services':
      'Preview image for City Properties Available for Homeless Housing and Services, showing an aerial view of city neighborhoods.',
    'Holiday Financial Tips':
      'Preview image for Holiday Financial Tips, showing a piggy bank with holiday decorations.',
    'The High Cost of Homeless Housing':
      'Preview image for The High Cost of Homeless Housing, showing a rendering of a multi-story housing building.',
    'Summer Fun in L.A.':
      'Preview image for Summer Fun in L.A., showing children playing in a swimming pool.',
    'Youth Programs':
      'Preview image for Youth Programs, showing a youth sports team with medals.',
    'Property Panel':
      'Preview image for Property Panel, showing a shaded map of Los Angeles neighborhoods.',
    'LGBTQ+ Resources':
      'Preview image for LGBTQ+ Resources, showing Los Angeles City Hall lit in rainbow colors.',
    'Affordable Housing: Incentives and Oversight':
      'Preview image for Affordable Housing: Incentives and Oversight, showing the Los Angeles skyline.',
    'Street Talk: Parking Tickets in LA':
      'Preview image for Street Talk: Parking Tickets in LA, showing parked cars along a street.',
    'Ready for Take Off?':
      'Preview image for Ready for Take Off?, showing a map of Los Angeles with airplane icons.',
    'Small Business Microloan Tracker':
      'Preview image for Small Business Microloan Tracker, showing an open sign in a storefront window.',
    'A More Modern Approach to City-Owned Art':
      'Preview image for A More Modern Approach to City-Owned Art, showing a mural on a wall.',
    'LGBTQ+ Pride & Power':
      'Preview image for LGBTQ+ Pride & Power, showing a mural of community members.',
    'Stimulus Checks in Los Angeles':
      'Preview image for Stimulus Checks in Los Angeles, showing a stylized map graphic.',
    'Food Pantries Across L.A. County':
      'Preview image for Food Pantries Across L.A. County, showing assorted vegetables on a table.',
    "Sparking DWP's Wildfire Prevention Strategy":
      'Preview image for Sparking DWP\'s Wildfire Prevention Strategy, showing power lines near a wildfire.',
    'City Workforce Dashboard':
      'Preview image for City Workforce Dashboard, showing an illustration of a diverse group of people.',
    'A Great Divide: L.A. Equity Index':
      'Preview image for A Great Divide: L.A. Equity Index, showing a shaded map of Los Angeles neighborhoods.',
    'Getting Main St. Back on Its Feet: Small Biz Resources':
      'Preview image for Getting Main St. Back on Its Feet: Small Biz Resources, showing outdoor dining on a city sidewalk.',
    'Be Prepared: How to Build a Financial First Aid Kit':
      'Preview image for Be Prepared: How to Build a Financial First Aid Kit, showing identification cards and documents.',
    'Meeting the Moment to Advance Prop. HHH':
      'Preview image for Meeting the Moment to Advance Prop. HHH, showing tents in front of an apartment building.',
    'COVID-19 Job Losses In L.A.':
      'Preview image for COVID-19 Job Losses In L.A., showing people standing in a socially distanced line.',
    'Sidewalk Repair Requests Dashboard':
      'Preview image for Sidewalk Repair Requests Dashboard, showing a cracked sidewalk with raised pavement.',
    'Hunger for Solutions to Food Insecurity':
      'Preview image for Hunger for Solutions to Food Insecurity, showing volunteers loading boxes of produce.',
    'LAFD COVID-19 Labor Costs Dashboard':
      'Preview image for LAFD COVID-19 Labor Costs Dashboard, showing a COVID-19 testing site.',
    'How the American Rescue Plan is Impacting L.A.':
      'Preview image for How the American Rescue Plan is Impacting L.A., showing a bar chart graphic.',
    'LGBTQ+ Pride: Toward Equity & Equity':
      'Preview image for LGBTQ+ Pride: Toward Equity & Equity, showing a rainbow crosswalk.',
    'COVID-19 Spending Tracker':
      'Preview image for COVID-19 Spending Tracker, showing a chart with virus icons.',
    'COVID-19 Dashboard':
      'Preview image for COVID-19 Dashboard, showing a shaded map of Los Angeles.',
    'Illegal Dumping Dashboard':
      'Preview image for Illegal Dumping Dashboard, showing trash in an alley.',
    '311 Dashboard':
      'Preview image for 311 Dashboard, showing a phone displaying a city service app.',
  };

  return (
    <>
      <Navbar />

      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo
          title='Open Data'
          description='Explore Los Angeles Controller open data, interactive dashboards, and datasets covering city finances, services, and performance.'
        />

        <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <h1 className="sr-only">Open Data</h1>
          <h2 className='pt-8 pb-4 dark:text-white'>Financial Data</h2>

          <OpenDataSeries />

          <div className='flex flex-row pt-2'>
            <Link href='https://controllerdata.lacity.org/browse?limitTo=datasets' className={kirbybutton}>
              All Datasets
            </Link>
          </div>

          <h2 className='pt-8 pb-4 dark:text-white'>Data Sites</h2>

          <div className='md:hidden'>
            {data.map((eachdata: any, eachdatanum: number) => (
              <LineItem
                key={eachdatanum}
                dept={eachdata.dept}
                link={`${eachdata.link}`}
                name={eachdata.name}
                year={eachdata.year}
              />
            ))}
          </div>

          <div className='hidden md:block'>
            <div className='grid grid-cols-3 gap-x-6 gap-y-4 lg:grid-cols-3'>
              {data.map((eachaudit: any, eachauditnum: number) => (
                <div
                  key={eachauditnum}
                  className='mb-2 w-full max-w-xs rounded-lg bg-gray-200 dark:bg-zinc-800 dark:text-white'
                >
                  <a
                    href={`${eachaudit.link}`}
                    target='_blank'
                    rel='noreferrer'
                    className='block rounded-lg focus:outline-none'
                  >
                    <img
                      src={eachaudit.image}
                      className='w-full'
                      alt={
                        Number(eachaudit.year) >= 2023
                          ? `Preview image for ${eachaudit.name}`
                          : dataAltOverrides[(eachaudit.name || '').trim()] ||
                            ''
                      }
                    />
                    <div className=' px-2 py-2'>
                      <p className='dark:text-white'>
                        {eachaudit.year} | <span>{eachaudit.dept}</span>
                      </p>
                      <p className='font-bold dark:text-white'>
                        {eachaudit.name}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
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
