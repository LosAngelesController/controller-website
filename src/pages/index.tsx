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

/* ===================== Charter Reform Popup ===================== */

const CHARTER_SITE_URL = 'https://charterreform.lacontroller.app/';
const CHARTER_EMAIL = 'ReformLAcharter@lacity.org';

const emailSubject = `Support Charter Reforms to Strengthen the Controller`;

const emailBody = `To the Los Angeles City Charter Reform Commission,

I am writing in support of the following reforms to the Charter, to ensure that the Controller can fulfill their role as the City's independent watchdog:

1. Give the Controller an independent budget
2. Designate the Controller as the City's Chief Financial Officer
3. Require minimum qualifications for the Controller
4. Clarify that the Controller's audit authority includes performance audits of ALL City programs that are sourced from or use City tax dollars (including those under elected offices)
5. Allow the Controller to hire outside counsel
6. Enshrine the Controller's Fraud, Waste, and Abuse function

Sincerely,
`;

function buildMailtoHref() {
  const params = new URLSearchParams({
    subject: emailSubject,
    body: emailBody,
  });
  return `mailto:${CHARTER_EMAIL}?${params.toString()}`;
}

function CharterReformModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  React.useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-[60] flex items-center justify-center'
      role='dialog'
      aria-modal='true'
      aria-label='Take Action for Charter Reform'
    >
      {/* Backdrop */}
      <button
        aria-label='Close modal'
        className='absolute inset-0 cursor-default bg-black/70'
        onClick={onClose}
        type='button'
      />

      {/* Modal (mobile-safe scroll) */}
      <div
        className='
          relative mx-4 w-full max-w-2xl
          rounded-2xl bg-zinc-950 p-6 text-white shadow-2xl md:p-8
          max-h-[85vh] overflow-y-auto
        '
      >
        {/* Close button (bigger on mobile) */}
        <button
          type='button'
          aria-label='Close'
          onClick={onClose}
          className='absolute right-4 top-4 rounded-full p-3 text-white/80 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-4 focus:ring-white/20'
        >
          <span className='text-xl leading-none'>×</span>
        </button>

        <h2 className='text-2xl font-extrabold tracking-wide sm:text-3xl md:text-4xl'>
          TAKE ACTION
        </h2>

        <div className='mt-4 space-y-3 text-base leading-relaxed text-white/90'>
          <p>The City of Los Angeles is currently rewriting the City Charter.</p>
          <p>
            In other words, <span className='font-extrabold'>YOU</span> can
            change the City&apos;s Constitution!
          </p>
          <p className='pt-1'>
            <span className='italic'>Email </span>
            <a
              href={`mailto:${CHARTER_EMAIL}`}
              className='font-semibold text-[#41ffca] underline underline-offset-2 hover:opacity-90'
            >
              {CHARTER_EMAIL}
            </a>{' '}
            <span className='italic'>and tell them:</span>
          </p>
        </div>

        <div className='mt-6 rounded-2xl border border-white/10 bg-zinc-900/70 p-5 text-white/90 shadow-inner md:p-6'>
          <div className='space-y-4 text-sm leading-6 md:text-base'>
            <p>To the Los Angeles City Charter Reform Commission,</p>
            <p>
              I am writing in support of the following reforms to the Charter,
              to ensure that the Controller can fulfill their role as the
              City&apos;s independent watchdog:
            </p>
            <ol className='list-decimal space-y-2 pl-5'>
              <li>Give the Controller an independent budget</li>
              <li>
                Designate the Controller as the City&apos;s Chief Financial
                Officer
              </li>
              <li>Require minimum qualifications for the Controller</li>
              <li>
                Clarify that the Controller&apos;s audit authority includes
                performance audits of <span className='font-bold'>ALL</span> City
                programs that are sourced from or use City tax dollars (including
                those under elected offices)
              </li>
              <li>Allow the Controller to hire outside counsel</li>
              <li>
                Enshrine the Controller&apos;s Fraud, Waste, and Abuse function
              </li>
            </ol>
          </div>
        </div>

        <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <a
            href={buildMailtoHref()}
            className='inline-flex items-center justify-center gap-3 rounded-xl bg-[#41ffca] px-6 py-4 text-center font-extrabold uppercase text-black shadow-lg hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-[#41ffca]/40'
          >
            EMAIL THE CHARTER COMMISSION
          </a>

          <a
            href={CHARTER_SITE_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm font-semibold text-white/80 underline underline-offset-4 hover:text-white'
          >
            Or open the full action page →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ===================== Cards ===================== */

function LineCard(props: any) {
  return (
    <div
      key={props.key}
      className='mb-2 w-full  max-w-sm rounded-lg border border-gray-500 bg-gray-100 dark:border-gray-300 dark:bg-zinc-800 dark:text-gray-100'
    >
      <a
        href={`${props.link}`}
        className='block rounded-lg focus:outline-none dark:text-gray-50'
      >
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
      <a href={`${props.link}`} className='block rounded-lg focus:outline-none'>
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
      <a href={`${props.link}`} className='block rounded-lg focus:outline-none'>
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

/* ===================== Page ===================== */

export default function HomePage(props: any) {
  const [isCharterModalOpen, setIsCharterModalOpen] = React.useState(false);

  // ✅ Show popup a maximum of 5 times per browser
  React.useEffect(() => {
    try {
      const KEY = 'charter_reform_popup_shown_count';
      const raw = window.localStorage.getItem(KEY);
      const count = Number(raw ?? '0');

      if (count < 5) {
        setIsCharterModalOpen(true);
        window.localStorage.setItem(KEY, String(count + 1));
      }
    } catch {
      // If localStorage fails, show popup
      setIsCharterModalOpen(true);
    }
  }, []);

  const closeModal = React.useCallback(() => {
    setIsCharterModalOpen(false);
  }, []);

  return (
    <>
      <Navbar />
      <Layout>
        <Seo />

        <div className='bgColorHeader relative pt-4 text-base text-sm md:pt-12 md:text-white'>
          <div className='background-1'>
            <div className='pl-2-0 z-10 mx-auto text-white md:px-4 lg:max-w-6xl lg:px-16 xl:max-w-7xl'>
              <div className='flex'>
                <div className='w-full flex-col pt-2 md:pt-0'>
                  <div>
                    <p className='text-xl md:text-3xl font-bold'>
                      Kenneth Mejia, CPA
                    </p>
                    <h1 className='text-xl md:text-3xl'>
                      City Controller of Los Angeles
                    </h1>
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

        <br />

        {/* ✅ TEXT ABOVE FINANCIAL DATA (readable light + locked turquoise dark) */}
        <div className='container mx-auto px-4 pt-2'>
          <a
            href={CHARTER_SITE_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-base font-semibold underline underline-offset-4 transition-colors text-teal-700 hover:text-teal-900 dark:!text-[#41ffca] dark:hover:!text-[#41ffca] md:text-lg'
          >
            Take Action! Send this email to the Charter Reform Commission now!
          </a>
        </div>

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

        {/* ================= Oversight ================= */}
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

        {/* ================= Upcoming ================= */}
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

        {/* ================= Financial Reports ================= */}
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

        {/* ================= Budgets ================= */}
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

        {/* ================= Data Sites ================= */}
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



        {/* ================= Popup Render ================= */}
        <CharterReformModal isOpen={isCharterModalOpen} onClose={closeModal} />
      </Layout>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  const newaudits = audits.slice(0, 7);
  return {
    props: {
      newaudits,
    },
  };
}