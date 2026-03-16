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

const emailSubject = `Support for the Controller's budget and independence`;

// ✅ CRLF line breaks for mail-client compatibility
const emailBody =
  `Commissioners,\r\n\r\n` +
  `Thank you for voting to protect the Controller’s budget. As the City’s chief accountant and auditor, it’s essential that the Controller be empowered and independent.\r\n\r\n` +
  `After years of cuts, the Controller is currently underfunded with just 0.29% of the General Fund. This only allows for 7 auditors and 5 fraud, waste and abuse investigators for the second largest City in the County. Despite these restrictions, the Controller's FWA unit was able to expose a $23 million fraud case related to a homeless provider not meeting contractual obligations and providing fake invoices. Adequate resources would allow the Controller to provide robust oversight, helping to restore trust in government.\r\n\r\n` +
  `To empower the Controller to carry out the office’s charter-mandated duties, we ask the Commission to support the Controller’s recommendation for a budget of no less than 0.42% of the General Fund. Less than one half of one percent of the General Fund is a small price to pay for transparency and accountability.\r\n\r\n` +
  `Thank You.\r\n`;

function buildMailtoHrefFull() {
  const subject = encodeURIComponent(emailSubject);
  const body = encodeURIComponent(emailBody);
  return `mailto:${CHARTER_EMAIL}?subject=${subject}&body=${body}`;
}

function buildMailtoHrefToOnly() {
  return `mailto:${CHARTER_EMAIL}`;
}

function buildMailtoHrefSubjectOnly() {
  const subject = encodeURIComponent(emailSubject);
  return `mailto:${CHARTER_EMAIL}?subject=${subject}`;
}

async function copyToClipboard(text: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // ignore, fallback below
  }

  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', 'true');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.style.top = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/* ✅ keep mailto short enough for desktop handlers */
const MAX_MAILTO_LEN = 1800;

function buildMailtoHrefSafe() {
  const full = buildMailtoHrefFull();
  return full.length <= MAX_MAILTO_LEN ? full : buildMailtoHrefSubjectOnly();
}

function CharterReformModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = React.useState(false);

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

  React.useEffect(() => {
    if (!isOpen) return;
    setCopied(false);
  }, [isOpen]);

  const handleEmailClick = React.useCallback(
    async (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const fullText = `Subject: ${emailSubject}\r\n\r\n${emailBody}`;
      const ok = await copyToClipboard(fullText);
      setCopied(ok);

      const href = buildMailtoHrefSafe();

      try {
        let didNavigate = false;

        const go = () => {
          if (didNavigate) return;
          didNavigate = true;
          window.location.href = href;
        };

        (window as any).gtag?.('event', 'charter_email_click', {
          event_category: 'engagement',
          event_label: 'charter reform email',
          transport_type: 'beacon',
          event_callback: go,
          event_timeout: 1000,
        });

        setTimeout(go, 1100);
      } catch {
        window.location.href = href;
      }
    },
    []
  );

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-[60] flex items-end justify-center sm:items-center'
      role='dialog'
      aria-modal='true'
      aria-label='Take Action for Charter Reform'
    >
      <button
        aria-label='Close modal'
        className='absolute inset-0 cursor-default bg-black/70'
        onClick={onClose}
        type='button'
      />

      <div
        className='
          relative z-[61] max-h-[85dvh]
          w-full overflow-y-auto rounded-t-3xl bg-zinc-950
          px-5 pb-6 pt-5
          text-white shadow-2xl
          [padding-bottom:calc(env(safe-area-inset-bottom,0px)+1.5rem)] sm:mx-4 sm:max-w-2xl sm:rounded-2xl
          sm:p-8
        '
      >
        <div className='mx-auto mb-3 h-1.5 w-12 rounded-full bg-white/20 sm:hidden' />

        <button
          type='button'
          aria-label='Close'
          onClick={onClose}
          className='absolute right-3 top-3 rounded-full p-3 text-white/80 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-4 focus:ring-white/20 sm:right-4 sm:top-4'
        >
          <span className='text-2xl leading-none'>×</span>
        </button>

        <h2 className='text-2xl font-extrabold tracking-wide sm:text-3xl md:text-4xl'>
          TAKE ACTION
        </h2>

        <div className='mt-4 space-y-3 text-[15px] leading-relaxed text-white/90 sm:text-base'>
          <p>
            The City of Los Angeles is currently rewriting the City Charter.
          </p>
          <p>
            In other words, <span className='font-extrabold'>YOU</span> can help
            strengthen transparency, accountability, and oversight.
          </p>
          <p className='pt-1'>
            <span className='italic'>Email </span>
            <a
              href={buildMailtoHrefToOnly()}
              className='font-semibold text-[#41ffca] underline underline-offset-2 hover:opacity-90'
            >
              {CHARTER_EMAIL}
            </a>{' '}
            <span className='italic'>and tell them:</span>
          </p>

          {copied && (
            <div className='hidden md:block'>
              <div className='rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90'>
                <p className='mb-3'>
                  ✅ Email text copied. In your email app, tap in the body and
                  paste.
                </p>
                <p className='mb-1'>Subject line suggestion:</p>
                <ul className='mt-2 list-disc pl-5 italic text-[#41ffca]'>
                  <li className='mb-2'>
                    Support for the Controller&apos;s budget and independence
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className='mt-5 rounded-2xl border border-white/10 bg-zinc-900/70 p-4 text-white/90 shadow-inner sm:mt-6 sm:p-6'>
          <div className='space-y-3 text-[13px] leading-6 sm:space-y-4 sm:text-base'>
            <p>Commissioners,</p>

            <p>
              Thank you for voting to protect the Controller’s budget. As the
              City’s chief accountant and auditor, it’s essential that the
              Controller be empowered and independent.
            </p>

            <p>
              After years of cuts, the Controller is currently underfunded with
              just 0.29% of the General Fund. This only allows for 7 auditors
              and 5 fraud, waste and abuse investigators for the second largest
              City in the County. Despite these restrictions, the Controller's
              FWA unit was able to expose a $23 million fraud case related to a
              homeless provider not meeting contractual obligations and
              providing fake invoices. Adequate resources would allow the
              Controller to provide robust oversight, helping to restore trust
              in government.
            </p>

            <p>
              To empower the Controller to carry out the office’s
              charter-mandated duties, we ask the Commission to support the
              Controller’s recommendation for a budget of no less than 0.42% of
              the General Fund. Less than one half of one percent of the General
              Fund is a small price to pay for transparency and accountability.
            </p>

            <p>Thank You.</p>

            <hr className='border-white/10' />

            <div>
              <p className='mb-3 font-bold text-[#41ffca]'>
                Additional Talking Points:
              </p>
              <ul className='list-disc space-y-2 pl-5'>
                <li>
                  Thank the Commission for recognizing the importance of
                  protecting the Controller’s budget.
                </li>
                <li>
                  Controller’s budget has been systematically cut for years. In
                  1991, the Controller had 205 positions. Now it has 159.
                </li>
                <li>
                  The budget, amount of spending, and number of programs and
                  departments have increased tremendously since 1991, which
                  calls for proportionate increases for transparency,
                  accountability, and oversight.
                </li>
                <li>
                  0.29% only allows the Controller to have 7 audits and 5 fraud,
                  waste and abuse investigators for the entire City. Despite
                  these constraints, they were able to expose a $23 million
                  fraudulent charity that was mistreating unhoused people in
                  South LA.
                </li>
                <li>
                  To empower the Controller to carry out the office’s
                  charter-mandated duties, the budget needs to be at least 0.42%
                  of the General Fund.
                </li>
                <li>
                  This will allow the Controller to provide more transparency
                  and accountability to the people of LA.
                </li>
                <li>
                  This will protect the integrity of the City’s programs by
                  strengthening the office’s investigations function.
                </li>
                <li>
                  This will reduce the City’s exposure to lawsuits and
                  liability.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between'>
          <a
            href={buildMailtoHrefSubjectOnly()}
            onClick={handleEmailClick}
            className='inline-flex items-center justify-center rounded-xl bg-[#41ffca] px-6 py-4 text-center text-sm font-extrabold uppercase text-black shadow-lg hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-[#41ffca]/40 sm:text-base'
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

  React.useEffect(() => {
    try {
      const KEY = 'charter_reform_popup_shown_count';
      const raw = window.localStorage.getItem(KEY);
      const count = Number(raw ?? '0');

      if (count < 20) {
        setIsCharterModalOpen(true);
        window.localStorage.setItem(KEY, String(count + 1));
      }
    } catch {
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
                    <p className='text-xl font-bold md:text-3xl'>
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

        <div className='container mx-auto px-4 pt-2'>
          <a
            href={CHARTER_SITE_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-base font-semibold text-teal-700 underline underline-offset-4 transition-colors hover:text-teal-900 dark:!text-[#41ffca] dark:hover:!text-[#41ffca] md:text-lg'
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
                link={`${eachupcoming.pre === false ? '' : '/upcoming/'}${
                  eachupcoming.link
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

        <CharterReformModal isOpen={isCharterModalOpen} onClose={closeModal} />
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
