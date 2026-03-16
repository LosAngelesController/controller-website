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
      <a href={`${props.link}`} className='block rounded-lg focus:outline-none'>
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

function BigCard(props: bigcardprops) {
  return (
    <div
      key={props.key}
      className={`mb-2 w-full max-w-xs rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-gray-100`}
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

        {/* POPUP MODAL */}


        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-zinc-900 dark:text-white">

              <h2 className="mb-4 text-2xl font-bold text-center">
                Take action! Email the Charter Reform Commission at reformlacharter@lacity.org
              </h2>

              <p className="mb-4">Commissioners,</p>

              <p className="mb-4">
                Thank you for voting to protect the Controller’s budget. As the City’s chief accountant and auditor,
                it’s essential that the Controller be empowered and independent.
              </p>

              <p className="mb-4">
                After years of cuts, the Controller is currently underfunded with just <b>0.29% of the General Fund</b>.
                This only allows for 7 auditors and 5 fraud, waste and abuse investigators for the second largest City in the County.
              </p>

              <p className="mb-4">
                Despite these restrictions, the Controller's FWA unit was able to expose a
                <b> $23 million fraud case</b> related to a homeless provider not meeting contractual obligations
                and providing fake invoices.
              </p>

              <p className="mb-4">
                Adequate resources would allow the Controller to provide robust oversight,
                helping to restore trust in government.
              </p>

              <p className="mb-4">
                To empower the Controller to carry out the office’s charter-mandated duties,
                we ask the Commission to support the Controller’s recommendation for a budget
                of no less than <b>0.42% of the General Fund</b>.
              </p>

              <p className="mb-6 font-semibold">
                Less than one half of one percent of the General Fund is a small price to pay
                for transparency and accountability.
              </p>

              <p className="mb-6 font-semibold">Thank You.</p>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowPopup(false)}
                  className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

        {/* PAGE CONTENT */}

        <div className='bgColorHeader relative pt-4 text-base text-sm md:pt-12 md:text-white'>
          <div className='background-1'>
            <div className='mx-auto text-white md:px-4 lg:max-w-6xl lg:px-16 xl:max-w-7xl'>
              <div className='flex'>
                <div className='w-full flex-col pt-2'>
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
                      className='w-full md:w-96 lg:w-[500px]'
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
                      className='w-full lg:w-[500px]'
                      height={900}
                      width={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className='container mx-auto px-4 pt-2'>
          <a
            href={CHARTER_SITE_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-base font-semibold text-teal-700 underline'
          >
            Take Action! Send this email to the Charter Reform Commission now!
          </a>
        </div>

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
          <ImportantLinksSection />
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