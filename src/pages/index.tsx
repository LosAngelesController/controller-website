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

/* ===================== Constants ===================== */

const CHARTER_SITE_URL = 'https://charterreform.lacontroller.app/';
const CHARTER_EMAIL = 'ReformLAcharter@lacity.org';

const kirbybutton =
  'w-content rounded-full bg-black px-4 py-2 font-bold text-white dark:bg-white dark:text-black';

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

/* ===================== Modal ===================== */

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

      {/* Modal */}
      <div className='relative mx-4 w-full max-w-2xl rounded-2xl bg-zinc-950 p-6 text-white shadow-2xl md:p-8'>
        {/* Close button */}
        <button
          type='button'
          aria-label='Close'
          onClick={onClose}
          className='absolute right-4 top-4 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-4 focus:ring-white/20'
        >
          <span className='text-xl leading-none'>×</span>
        </button>

        <h2 className='text-3xl font-extrabold tracking-wide md:text-4xl'>
          TAKE ACTION
        </h2>

        <div className='mt-4 space-y-3 text-base leading-relaxed text-white/90'>
          <p>The City of Los Angeles is currently rewriting the City Charter.</p>
          <p>
            In other words, <span className='font-extrabold'>YOU</span> can
            change the City's Constitution!
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
              to ensure that the Controller can fulfill their role as the City's
              independent watchdog:
            </p>
            <ol className='list-decimal space-y-2 pl-5'>
              <li>Give the Controller an independent budget</li>
              <li>Designate the Controller as the City's Chief Financial Officer</li>
              <li>Require minimum qualifications for the Controller</li>
              <li>
                Clarify that the Controller&apos;s audit authority includes performance
                audits of <span className='font-bold'>ALL</span> City programs that are
                sourced from or use City tax dollars (including those under elected offices)
              </li>
              <li>Allow the Controller to hire outside counsel</li>
              <li>Enshrine the Controller&apos;s Fraud, Waste, and Abuse function</li>
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

/* ===================== Page ===================== */

export default function HomePage() {
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

        {/* ================= HERO ================= */}
        <div className='bgColorHeader pt-4 text-sm md:pt-12 md:text-white'>
          <div className='background-1'>
            <div className='pl-2-0 z-10 mx-auto md:px-4 lg:max-w-6xl lg:px-16 xl:max-w-7xl'>
              <div className='flex'>
                <div className='w-full flex-col pt-2 md:pt-0'>
                  <div>
                    <p className='text-xl font-bold md:text-3xl'>
                      Kenneth Mejia, CPA
                    </p>
                    <h1 className='text-xl md:text-3xl'>
                      City Controller of Los Angeles
                    </h1>
                  </div>

                  <SocialPageSeries />

                  <div className='ml-auto mt-10 items-end'>
                    <Image
                      src='/images/killa-website2.png'
                      alt='Portrait of Killa'
                      className='w-full md:w-96 lg:w-[500px]'
                      sizes='(max-width: 1023px) 100vw, 500px'
                      priority
                      unoptimized
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
                      priority
                      unoptimized
                      height={900}
                      width={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================= END HERO ================= */}

        {/* ✅ ACCESSIBLE CTA ABOVE FINANCIAL DATA */}
        <div className='container mx-auto px-4 pt-6'>
          <a
            href={CHARTER_SITE_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-base font-semibold underline underline-offset-4 transition-colors text-teal-700 hover:text-teal-900 dark:!text-[#41ffca] dark:hover:!text-[#41ffca] md:text-lg'
          >
            Take Action! Send this email to the Charter Reform Commission now!
          </a>
        </div>

        {/* ================= FINANCIAL DATA ================= */}
        <div className='container mx-auto px-4 pt-4'>
          <h2 className='frontpageh2section'>Financial Data</h2>

          <OpenDataSeries />

          <div className='flex flex-row pt-2'>
            <Link href='https://controllerdata.lacity.org/browse?limitTo=datasets'>
              <div className={kirbybutton}>All Datasets</div>
            </Link>
          </div>
        </div>

        <div className='container mx-auto px-4'>
          <div className='mt-4 bg-zinc-50 px-4 py-4 dark:bg-zinc-800'>
            <ImportantLinksSection />
          </div>
        </div>

        {/* ✅ Popup */}
        <CharterReformModal
          isOpen={isCharterModalOpen}
          onClose={closeModal}
        />
      </Layout>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  return {
    props: {
      newaudits: audits.slice(0, 7),
    },
  };
}