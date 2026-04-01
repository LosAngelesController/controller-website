// eslint-disable-next-line simple-import-sort/imports
import Link from 'next/link';
import * as React from 'react';
import { titleCase } from 'true-case';

import { data } from '@/data.json';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import { audits } from '@/auditsindex.json';
import { upcoming } from '@/upcoming.json';
import { finance } from '@/financeindex.json';
import { budget } from '@/budget.json';

import Image from 'next/image';

import OpenDataSeries from '@/components/opendataseries';
import ImportantLinksSection from '@/components/ImportantLinksSection';
import { SocialPageSeries } from '@/components/SocialPageSeries';

interface bigcardprops {
  key: number;
  link: string;
  image: string;
  year: string;
  document: string;
  dept?: any;
  name: string;
  alt: string;
}

const kirbybutton =
  'w-content rounded-full bg-black px-4 py-2 font-bold text-white dark:bg-white dark:text-black';

const CHARTER_SITE_URL = 'https://charterreform.lacontroller.app/';

function LineCard(props: any) {
  return (
    <div
      key={props.key}
      className='mb-2 w-full max-w-sm rounded-lg border border-gray-500 bg-gray-100 dark:border-gray-300 dark:bg-zinc-800 dark:text-gray-100'
    >
      <a href={`${props.link}`} className='block rounded-lg'>
        <div className='px-2 py-2'>
          <p>
            {props.year} <span>{props.dept}</span>
          </p>
          <p className='font-semibold'>{props.name}</p>
        </div>
      </a>
    </div>
  );
}

function UpcomingBigCard(props: any) {
  return (
    <div
      key={props.key}
      className="mb-2 w-full max-w-xs rounded-lg border border-gray-500 bg-gray-100 dark:border-gray-300 dark:bg-zinc-800 dark:text-gray-100"
    >
      <a href={`${props.link}`} className="block rounded-lg">
        <div className="px-3 py-3">
          <p className="text-sm">
            {props.year} <span>{props.dept}</span>
          </p>

          <p className="font-semibold">{props.name}</p>
        </div>
      </a>
    </div>
  );
}

function BigCard(props: bigcardprops) {
  return (
    <div
      key={props.key}
      className='mb-2 w-full max-w-xs rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-gray-100'
    >
      <a href={`${props.link}`} className='block rounded-lg'>
        <img src={props.image} className='w-full' alt={props.alt}></img>
        <div className='px-2 py-2'>
          <p>
            {props.year} <span>{props.dept}</span>
          </p>
          <p className='font-semibold'>{props.name}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomePage(props: any) {

  const [showPopup, setShowPopup] = React.useState(true);

  return (
    <>
      <Navbar />

      <Layout>
        <Seo />









        {/* HERO */}

        <div className='bgColorHeader relative pt-4 md:pt-12'>
          <div className='background-1'>
            <div className='mx-auto text-white lg:max-w-6xl xl:max-w-7xl'>
              <div className='flex'>

                <div className='w-full pt-2'>
                  <p className='text-xl font-bold md:text-3xl'>
                    Kenneth Mejia, CPA
                  </p>

                  <h1 className='text-xl md:text-3xl'>
                    City Controller of Los Angeles
                  </h1>

                  <SocialPageSeries />

                  <div className='ml-auto mt-10'>
                    <Image
                      src='/images/killa-website2.png'
                      alt='Portrait'
                      height={900}
                      width={500}
                    />
                  </div>
                </div>

                <div className='flex w-full items-end md:w-1/2'>
                  <div className='ml-auto'>
                    <Image
                      src='/images/ken-new-blob-big.png'
                      alt='Portrait of Kenneth Mejia'
                      height={900}
                      width={500}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}


        {/* MOST VISITED SITES */}
        <div className='container mx-auto px-4 pt-10'>
          <h2 className='frontpageh2section'>Most Visited Websites</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-5'>

            {/* Bathroom Map */}
            <Link href='https://bathrooms.lacontroller.app' target='_blank'>
              <div className='rounded-2xl p-6 transition cursor-pointer 
        bg-[#2a2a2a] border border-[#3a3a3a] 
        hover:border-[#41ffca]/40 hover:shadow-[0_0_25px_rgba(65,255,202,0.05)]'>

                <svg width="42" height="42" viewBox="0 0 24 24" fill="none"
                  stroke="#41ffca" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  className="mb-5">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8" cy="7" r="1.5" />
                  <circle cx="16" cy="7" r="1.5" />
                  <path d="M8 9v6M16 9v6" />
                  <path d="M6.5 15h3M14.5 15h3" />
                </svg>

                <h3 className='text-white font-semibold text-sm'>Bathroom Map</h3>
              </div>
            </Link>

            {/* Budget */}
            <Link href='https://budget.lacontroller.app/' target='_blank'>
              <div className='rounded-2xl p-6 transition cursor-pointer 
        bg-[#2a2a2a] border border-[#3a3a3a] 
        hover:border-[#41ffca]/40 hover:shadow-[0_0_25px_rgba(65,255,202,0.05)]'>

                <svg width="42" height="42" viewBox="0 0 24 24" fill="none"
                  stroke="#41ffca" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  className="mb-5">
                  <path d="M4 18h16" />
                  <rect x="5" y="12" width="2" height="6" rx="1" />
                  <rect x="10" y="9" width="2" height="9" rx="1" />
                  <rect x="15" y="6" width="2" height="12" rx="1" />
                  <path d="M6 6l4-2 4 2 4-2" />
                </svg>

                <h3 className='text-white font-semibold text-sm'>Interactive City Budget</h3>
              </div>
            </Link>

            {/* Homelessness */}
            <Link href='https://homelessdashboard.lacontroller.app/' target='_blank'>
              <div className='rounded-2xl p-6 transition cursor-pointer 
        bg-[#2a2a2a] border border-[#3a3a3a] 
        hover:border-[#41ffca]/40 hover:shadow-[0_0_25px_rgba(65,255,202,0.05)]'>

                <svg width="42" height="42" viewBox="0 0 24 24" fill="none"
                  stroke="#41ffca" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  className="mb-5">
                  <path d="M3 10l9-6 9 6" />
                  <rect x="5" y="10" width="14" height="10" rx="2" />
                  <path d="M14 6l2-2" />
                  <circle cx="17" cy="4" r="1.5" />
                </svg>

                <h3 className='text-white font-semibold text-sm'>Homelessness Dashboard</h3>
              </div>
            </Link>

            {/* Liability */}
            <Link href='https://liabilityclaims.lacontroller.app' target='_blank'>
              <div className='rounded-2xl p-6 transition cursor-pointer 
        bg-[#2a2a2a] border border-[#3a3a3a] 
        hover:border-[#41ffca]/40 hover:shadow-[0_0_25px_rgba(65,255,202,0.05)]'>

                <svg width="42" height="42" viewBox="0 0 24 24" fill="none"
                  stroke="#41ffca" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  className="mb-5">
                  <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>

                <h3 className='text-white font-semibold text-sm'>Liability Claims Dashboard</h3>
              </div>
            </Link>

            {/* Metrics */}
            <Link href='https://lacitymetrics.lacontroller.app/' target='_blank'>
              <div className='rounded-2xl p-6 transition cursor-pointer 
        bg-[#2a2a2a] border border-[#3a3a3a] 
        hover:border-[#41ffca]/40 hover:shadow-[0_0_25px_rgba(65,255,202,0.05)]'>

                <svg width="42" height="42" viewBox="0 0 24 24" fill="none"
                  stroke="#41ffca" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  className="mb-5">
                  <rect x="3" y="4" width="18" height="12" rx="2" />
                  <path d="M7 12v-3M11 12v-5M15 12v-7" />
                  <circle cx="18" cy="17" r="2" />
                </svg>

                <h3 className='text-white font-bold text-sm'>
                  City Departments Metrics Dashboard
                </h3>
              </div>
            </Link>

          </div>
        </div>

        {/* FINANCIAL DATA */}

        <div className='container mx-auto px-4'>
          <h2 className='frontpageh2section'>Financial Data</h2>

          <OpenDataSeries />

          <div className='flex flex-row pt-2'>
            <Link href='https://controllerdata.lacity.org/browse?limitTo=datasets'>
              <div className={`${kirbybutton}`}>All Datasets</div>
            </Link>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <h2 className='frontpageh2section'>Oversight</h2>

          <div className='hidden grid-cols-3 gap-x-4 gap-y-4 md:grid md:grid-cols-4 lg:grid-cols-5'>
            {audits.slice(0, 4).map((eachaudit: any, key: number) => (
              <BigCard
                key={key}
                link={`${eachaudit.pre === false ? '' : ''}${eachaudit.link}`}
                image={eachaudit.image}
                name={`${eachaudit.Year} | ${eachaudit.document} | ${eachaudit.category} | ${eachaudit.name}  `}
                alt={eachaudit.alt ? eachaudit.alt : eachaudit.name}
                year=''
                document=''
              />
            ))}

            <div className='hidden lg:block'>
              {audits.slice(4, 5).map((eachaudit: any, key: number) => (
                <BigCard
                  key={key}
                  link={`${eachaudit.pre === false ? '' : ''}${eachaudit.link}`}
                  image={eachaudit.image}
                  name={`${eachaudit.Year} | ${eachaudit.document} | ${eachaudit.category} | ${eachaudit.name}`}
                  alt={eachaudit.alt ? eachaudit.alt : eachaudit.name}
                  year=''
                  document=''
                />
              ))}
            </div>
          </div>

          <div className='rounded-lg md:hidden'>
            {audits.slice(0, 6).map((eachaudit: any, key: number) => (
              <LineCard
                key={key}
                link={`${eachaudit.pre === false ? '' : ''}${eachaudit.link}`}
                image={eachaudit.image}
                name={`${eachaudit.Year} | ${eachaudit.document} | ${eachaudit.category} | ${eachaudit.name}`}
                alt={eachaudit.alt ? eachaudit.alt : eachaudit.name}
              />
            ))}
          </div>

          <div className='flex flex-row'>
            <Link href='/audits'>
              <div className={`${kirbybutton}`}>All Oversight</div>
            </Link>
          </div>
        </div>

        <div className='container mx-auto px-4  '>
          <h2 className='frontpageh2section'> Upcoming Audits & Reports</h2>

          <div className='hidden grid-cols-3 gap-x-4 gap-y-4 md:grid md:grid-cols-4 lg:grid-cols-5'>
            {upcoming.slice(0, 4).map((eachupcoming: any, key: number) => (
              <UpcomingBigCard
                key={key}
                link={`${eachupcoming.link}`}
                year={eachupcoming.year}
                dept={titleCase(eachupcoming.dept)}
                name={eachupcoming.name}
                alt={eachupcoming.alt ? eachupcoming.alt : eachupcoming.name}
                image=''
                document=''
              />
            ))}

            <div className='hidden lg:block'>
              {upcoming.slice(4, 5).map((eachupcoming: any, key: number) => (
                <UpcomingBigCard
                  key={key}
                  link={`${eachupcoming.link}`}
                  year={eachupcoming.year}
                  dept={titleCase(eachupcoming.dept)}
                  name={eachupcoming.name}
                  alt={eachupcoming.alt ? eachupcoming.alt : eachupcoming.name}
                  image=''
                  document=''
                />
              ))}



            </div>
          </div>



          <div className='rounded-lg  md:hidden'>
            {upcoming.slice(0, 6).map((eachupcoming: any, key: number) => (
              <LineCard
                key={key}
                link={`${eachupcoming.pre === false ? '' : '/upcoming/'}${eachupcoming.link
                  }`}
                year={eachupcoming.year}
                dept={titleCase(eachupcoming.dept)}
                name={eachupcoming.name}
              />
            ))}
          </div>

          <div className='flex flex-row'>
            <Link href='/upcoming'>
              <div className={`${kirbybutton}`}>
                All Upcoming Audits & Reports
              </div>
            </Link>
          </div>
        </div>

        <div className='container mx-auto px-4  '>
          <h2 className='pb-4 pt-8 dark:text-white'>Financial Reports</h2>

          <div className='hidden grid-cols-3 gap-x-4 gap-y-4 md:grid  md:grid-cols-4 lg:grid-cols-5'>
            {finance.slice(0, 4).map((eachaudit: any, key: number) => (
              <BigCard
                key={key}
                link={`${eachaudit.pre === false ? '' : '/reports/'}${eachaudit.link
                  }`}
                image={eachaudit.image}
                year={eachaudit.year}
                dept={titleCase(eachaudit.dept)}
                name={eachaudit.name}
                alt={eachaudit.alt ? eachaudit.alt : eachaudit.name}
                document=''
              />
            ))}

            <div className='hidden lg:block'>
              {finance.slice(4, 5).map((eachaudit: any, key: number) => (
                <BigCard
                  key={key}
                  link={`${eachaudit.pre === false ? '' : '/reports/'}${eachaudit.link
                    }`}
                  image={eachaudit.image}
                  year={eachaudit.year}
                  dept={titleCase(eachaudit.dept)}
                  name={eachaudit.name}
                  alt={eachaudit.alt ? eachaudit.alt : eachaudit.name}
                  document=''
                />
              ))}
            </div>
          </div>

          <div className='rounded-lg  md:hidden'>
            {finance.slice(0, 6).map((eachaudit: any, key: number) => (
              <LineCard
                key={key}
                link={`${eachaudit.pre === false ? '' : '/reports/'}${eachaudit.link
                  }`}
                image={eachaudit.image}
                year={eachaudit.year}
                dept={titleCase(eachaudit.dept)}
                name={eachaudit.name}
              />
            ))}
          </div>

          <div className='flex flex-row'>
            <Link href='/reports'>
              <div className={`${kirbybutton}`}>All Financial Reports</div>
            </Link>
          </div>
        </div>

        <div className='container mx-auto px-4 pt-2 lg:pt-6'>
          <h2 className=''>
            <span className='frontpageh2section'>Budgets</span>
          </h2>

          <div className='flex flex-row flex-wrap gap-x-3 gap-y-3 pt-4 lg:hidden'>
            {budget.slice(0, 6).map((eachbudget: any, key: number) => (
              <Link href={`${eachbudget.link}`} key={key}>
                <div className='rounded-full bg-[#41ffca] px-4 py-2 font-semibold text-black dark:text-black'>
                  {eachbudget.name}
                </div>
              </Link>
            ))}
          </div>

          <div className='hidden flex-row flex-wrap gap-x-3 gap-y-3 pt-4 lg:flex'>
            {budget.slice(0, 9).map((eachbudget: any, key: number) => (
              <Link href={`${eachbudget.link}`} key={key}>
                <div className='rounded-full bg-[#41ffca] px-4 py-2 font-semibold text-black dark:text-black'>
                  {eachbudget.name}
                </div>
              </Link>
            ))}
          </div>

          <div className='flex flex-row pb-8 pt-4'>
            <Link href='/budgets' target='_blank' rel='noreferrer'>
              <div className={`${kirbybutton}`}>All Budgets</div>
            </Link>
          </div>
        </div>

        <div className='container mx-auto px-4 '>
          <h2 className=''>
            <span className='frontpageh2section'>Data Sites</span>
          </h2>

          <div className=' hidden grid-cols-3 gap-x-4 gap-y-4 sm:grid md:grid-cols-4 lg:grid-cols-5'>
            {data.slice(0, 4).map((eachaudit: any, key: number) => (
              <BigCard
                key={key}
                link={`${eachaudit.link}`}
                image={eachaudit.image}
                year={eachaudit.year}
                dept={titleCase(eachaudit.dept)}
                name={eachaudit.name}
                alt={eachaudit.alt ? eachaudit.alt : eachaudit.name}
                document=''
              />
            ))}

            <div className='hidden lg:block'>
              {data.slice(4, 5).map((eachaudit: any, key: number) => (
                <BigCard
                  key={key}
                  link={`${eachaudit.link}`}
                  image={eachaudit.image}
                  year={eachaudit.year}
                  dept={titleCase(eachaudit.dept)}
                  name={eachaudit.name}
                  alt={eachaudit.alt ? eachaudit.alt : eachaudit.name}
                  document=''
                />
              ))}
            </div>
          </div>

          <div className='rounded-lg  sm:hidden'>
            {data.slice(0, 5).map((eachaudit: any, key: number) => (
              <LineCard
                key={key}
                link={`${eachaudit.link}`}
                image={eachaudit.image}
                year={eachaudit.year}
                dept={titleCase(eachaudit.dept)}
                name={eachaudit.name}
              />
            ))}
          </div>

          <div className='flex flex-row'>
            <Link href='/data' target='_blank' rel='noreferrer'>
              <div className={`${kirbybutton}`}>All Data Sites</div>
            </Link>
          </div>

          <div className=' container mx-auto mt-4 bg-zinc-50 px-4 py-4 dark:bg-zinc-800'>
            <ImportantLinksSection />
          </div>
        </div>
      </Layout >
    </>
  );
}

export async function getStaticProps() {
  const newaudits = audits.slice(0, 7);

  return {
    props: {
      newaudits,
    },
  };
}