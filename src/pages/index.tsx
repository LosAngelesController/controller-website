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

        {/* POPUP */}

        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-zinc-700 bg-[#0f1720] p-8 text-white shadow-2xl">

              {/* Close X */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              {/* Title */}
              <h2 className="text-center text-2xl font-bold tracking-wide">
                TAKE ACTION! EMAIL THE CHARTER REFORM COMMISSION AT
              </h2>

              <p className="mt-2 text-center text-2xl font-bold text-[#41ffca] underline">
                reformlacharter@lacity.org
              </p>

              {/* Subject line */}
              <p className="mt-6 text-center font-semibold text-[#41ffca]">
                SUBJECT LINE: Give the Controller .42% of the General Fund
              </p>

              <hr className="my-6 border-zinc-700" />

              {/* Email text */}
              <div id="email-text" className="space-y-4 text-gray-200 leading-relaxed">

                <p>Commissioners,</p>

                <p>
                  Thank you for voting to protect the Controller's budget. As the City's chief accountant
                  and auditor, it's essential that the Controller be empowered and independent.
                </p>

                <p>
                  After years of cuts, the Controller is currently underfunded with just <b>0.29% of the
                    General Fund</b>. This only allows for 7 auditors and 5 fraud, waste and abuse investigators
                  for the second largest City in the country.
                </p>

                <p>
                  Despite these restrictions, the Controller's FWA unit was able to expose a
                  <b> $23 million fraud case</b> related to a homeless provider not meeting contractual
                  obligations and providing fake invoices.
                </p>

                <p>
                  Adequate resources would allow the Controller to provide robust oversight,
                  helping to restore trust in government.
                </p>

                <p>
                  To empower the Controller to carry out the office's charter-mandated duties,
                  we ask the Commission to support the Controller's recommendation for a budget
                  of no less than <b>0.42% of the General Fund</b>.
                </p>

                <p className="font-semibold">
                  Less than one half of one percent of the General Fund is a small price to pay
                  for transparency and accountability.
                </p>

                <p>Thank You.</p>

              </div>

              {/* Buttons */}
              <div className="mt-8 flex justify-end gap-3">

                <button
                  onClick={() => {
                    const text = document.getElementById("email-text")?.innerText;
                    if (text) navigator.clipboard.writeText(text);
                  }}
                  className="flex items-center gap-2 rounded-md border border-zinc-600 px-4 py-2 text-gray-200 hover:bg-zinc-800"
                >
                  ⧉ Copy text
                </button>

                <button
                  onClick={() => setShowPopup(false)}
                  className="rounded-md bg-[#41ffca] px-5 py-2 font-semibold text-black hover:bg-[#35e0b0]"
                >
                  Close
                </button>

              </div>

            </div>
          </div>
        )}


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
      </Layout>
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