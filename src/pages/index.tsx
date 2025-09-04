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

function LineCard(props: any) {
  return (
    <div
      key={props.key}
      className='mb-2 w-full  max-w-sm rounded-lg border border-gray-500 bg-gray-100 dark:border-gray-300 dark:bg-zinc-800 dark:text-gray-100'
    >
      <a href={`${props.link}`} className=' dark:text-gray-50'>
        <div className=' px-2 py-2  dark:text-gray-50'>
          <p>
            {props.year} <span>{props.dept}</span>
          </p>
          <p className='font-semibold'>{props.name}</p>
        </div>
      </a>
    </div>
  );
}

function BigCard(props: bigcardprops) {
  return (
    <div
      key={props.key}
      className={`mb-2 w-full max-w-xs rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-gray-100
    ${props.key === 4 ? ' hidden md:block ' : ''}
    ${props.key === 5 ? ' hidden lg:block ' : ''}`}
    >
      <a href={`${props.link}`}>
        <img src={props.image} className='w-full' alt={props.alt}></img>
        <div className=' px-2 py-2  dark:text-gray-100'>
          <p>
            {props.year} <span>{props.dept}</span>
          </p>
          <p className='font-semibold'>{props.name}</p>
        </div>
      </a>
    </div>
  );
}

function UpcomingBigCard(props: bigcardprops) {
  return (
    <div
      key={props.key}
      className={`mb-2 w-full max-w-xs rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-gray-100
    ${props.key === 4 ? ' hidden md:block ' : ''}
    ${props.key === 5 ? ' hidden lg:block ' : ''}`}
    >
      <a href={`${props.link}`}>
        {/* <img src={props.image} className='w-full' alt={props.alt}></img> */}
        <div className=' px-2 py-2  dark:text-gray-100'>
          <p>
            {props.year} | <span>{props.dept}</span>
          </p>
          <p className='font-semibold'>{props.name}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomePage(props: any) {
  return (
    <>
      <Navbar />
      {/* <Translate /> */}
      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo />

        <div className='bgColorHeader relative pt-4 text-base text-sm md:pt-12 md:text-white'>
          <div className='background-1'>
            <div className='pl-2-0 z-10 mx-auto text-white md:px-4 lg:max-w-6xl lg:px-16 xl:max-w-7xl'>
              <div className='flex'>
                <div className='w-full flex-col pt-2 md:pt-0'>
                  <div>
                    <p className="text-xl md:text-3xl font-bold">Kenneth Mejia, CPA</p>
                    <h1 className="text-xl md:text-3xl">City Controller of Los Angeles</h1>
                  </div>
                  <SocialPageSeries />
                  <div className='ml-auto mt-10 items-end '>
                    <Image
                      src='/images/killa-website2.png'
                      alt='Portrait of Killa'
                      className='w-full md:w-96 lg:w-[500px]'
                      sizes='(max-width: 1023px) 100vw, 500px'
                      priority={true}
                      unoptimized={true}
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
                      className='md:w-100 w-full lg:w-[500px]'
                      sizes='(max-width: 1023px) 100vw, 500px'
                      priority={true}
                      unoptimized={true}
                      height={900}
                      width={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className='container mx-auto px-4 '>
          <h2 className='frontpageh2section'>Financial Data</h2>

          <OpenDataSeries />

          <div className='flex flex-row pt-2'>
            <Link href='https://controllerdata.lacity.org/browse?limitTo=datasets'>
              <div>
                <div className={`${kirbybutton}`}>All Datasets</div>
              </div>
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
                // year={eachaudit.Year}
                // document={eachaudit.document}
                // dept={eachaudit.category}
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
                  // year={eachaudit.Year}
                  // document={eachaudit.document}
                  // dept={eachaudit.category}
                  name={`${eachaudit.Year} | ${eachaudit.document} | ${eachaudit.category} | ${eachaudit.name}`}
                  alt={eachaudit.alt ? eachaudit.alt : eachaudit.name}
                  year=''
                  document=''
                />
              ))}
            </div>
          </div>
          <div>
            <div className='rounded-lg md:hidden'>
              {audits.slice(0, 6).map((eachaudit: any, key: number) => (
                <LineCard
                  key={key}
                  link={`${eachaudit.pre === false ? '' : ''}${eachaudit.link}`}
                  image={eachaudit.image}
                  // year={eachaudit.Year}
                  // document={eachaudit.document}
                  // dept={eachaudit.category}
                  name={`${eachaudit.Year} | ${eachaudit.document} | ${eachaudit.category} | ${eachaudit.name}`}
                  // Updated text format
                  alt={eachaudit.alt ? eachaudit.alt : eachaudit.name}
                />
              ))}
            </div>
          </div>
          <div>
            <div className='flex flex-row'>
              <Link href='/audits'>
                <div className={`${kirbybutton}`}>All Oversight</div>
              </Link>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4  '>
          <h2 className='frontpageh2section'> Upcoming Audits & Reports</h2>

          <div className='hidden grid-cols-3 gap-x-4 gap-y-4 md:grid md:grid-cols-4 lg:grid-cols-5'>
            {upcoming.slice(0, 4).map((eachupcoming: any, key) => (
              <UpcomingBigCard
                key={key}
                link={`${eachupcoming.link}`}
                // image={eachupcoming.image}
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
                  // image={eachupcoming.image}
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
          <div>
            <div className='rounded-lg  md:hidden'>
              {upcoming.slice(0, 6).map((eachupcoming: any, key: number) => (
                <LineCard
                  key={key}
                  link={`${eachupcoming.pre === false ? '' : '/upcoming/'}${
                    eachupcoming.link
                  }`}
                  // image={eachupcoming.image}
                  year={eachupcoming.year}
                  dept={titleCase(eachupcoming.dept)}
                  name={eachupcoming.name}
                />
              ))}
            </div>
          </div>
          <div>
            <div className='flex flex-row'>
              <Link href='/upcoming'>
                <div className={`${kirbybutton}`}>
                  All Upcoming Audits & Reports
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4  '>
          <h2 className='pb-4 pt-8 dark:text-white'>Financial Reports</h2>

          <div className='hidden grid-cols-3 gap-x-4 gap-y-4 md:grid  md:grid-cols-4 lg:grid-cols-5'>
            {finance.slice(0, 4).map((eachaudit: any, key: number) => (
              <BigCard
                key={key}
                link={`${eachaudit.pre === false ? '' : '/reports/'}${
                  eachaudit.link
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
                  link={`${eachaudit.pre === false ? '' : '/reports/'}${
                    eachaudit.link
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
          <div>
            <div className='rounded-lg  md:hidden'>
              {finance.slice(0, 6).map((eachaudit: any, key: number) => (
                <LineCard
                  key={key}
                  link={`${eachaudit.pre === false ? '' : '/reports/'}${
                    eachaudit.link
                  }`}
                  image={eachaudit.image}
                  year={eachaudit.year}
                  dept={titleCase(eachaudit.dept)}
                  name={eachaudit.name}
                />
              ))}
            </div>
          </div>
          <div>
            <div className='flex flex-row'>
              <Link href='/reports'>
                <div className={`${kirbybutton}`}>All Financial Reports</div>
              </Link>
            </div>
          </div>
        </div>
        {/* Budgets */}
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

          <div>
            <div className='flex flex-row pb-8 pt-4'>
              <Link href='/budgets' target='_blank' rel='noreferrer'>
                <div className={`${kirbybutton}`}>All Budgets</div>
              </Link>
            </div>
          </div>
        </div>

        {/* Data stories list below */}
        <div className='container mx-auto px-4 '>
          <h2 className=''>
            <span className='frontpageh2section'>Data Sites</span>
          </h2>
          <div className=' hidden grid-cols-3 gap-x-4 gap-y-4 sm:grid md:grid-cols-4 lg:grid-cols-5'>
            {data.slice(0, 4).map((eachaudit: any, key) => (
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

          <div>
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
          </div>
          <div>
            <div className='flex flex-row'>
              <Link href='/data' target='_blank' rel='noreferrer'>
                <div className={`${kirbybutton}`}>All Data Sites</div>
              </Link>
            </div>
          </div>

          <div className=' container mx-auto mt-4 bg-zinc-50 px-4 py-4 dark:bg-zinc-800'>
            <ImportantLinksSection />
          </div>
        </div>
      </Layout>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const newaudits = audits.slice(0, 7);
  // By returning {props: {posts} }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      newaudits,
    },
  };
}
