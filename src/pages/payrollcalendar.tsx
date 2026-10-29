import c from 'calendar';
import Link from 'next/link';
import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

type Category = 'holiday' | 'excess' | 'nodeduction' | 'endofpay' | 'payday';

const importantdates: Record<string, Record<Category, string[]>> = {
  '2026': {
    holiday: [
      '01-01',
      '01-19',
      '02-16',
      '03-30',
      '05-25',
      '06-19',
      '07-03',
      '09-07',
      '10-12',
      '11-11',
      '11-26',
      '11-27',
      '12-25',
    ],
    excess: ['01-21'],
    nodeduction: ['04-29', '09-30'],
    endofpay: [
      // every other Saturday of 2026
      '01-10',
      '01-24',
      '02-07',
      '02-21',
      '03-07',
      '03-21',
      '04-04',
      '04-18',
      '05-02',
      '05-16',
      '05-30',
      '06-13',
      '06-27',
      '07-11',
      '07-25',
      '08-08',
      '08-22',
      '09-05',
      '09-19',
      '10-03',
      '10-17',
      '10-31',
      '11-14',
      '11-28',
      '12-12',
      '12-26',
    ],
    payday: [
      // every other Wednesday of 2026 except the excess sick pay and no deduction pay days
      // (Nov 10 is a Tuesday because Nov 11 is a holiday)
      '01-07',
      '02-04',
      '02-18',
      '03-04',
      '03-18',
      '04-01',
      '04-15',
      '05-13',
      '05-27',
      '06-10',
      '06-24',
      '07-08',
      '07-22',
      '08-05',
      '08-19',
      '09-02',
      '09-16',
      '10-14',
      '10-28',
      '11-10',
      '11-25',
      '12-09',
      '12-23',
    ],
  },
};

const endofpayperiodsreference: Record<string, Record<string, string>> = {
  '2026': {
    '01-10': '14',
    '01-24': '15',
    '02-07': '16',
    '02-21': '17',
    '03-07': '18',
    '03-21': '19',
    '04-04': '20',
    '04-18': '21',
    '05-02': '22',
    '05-16': '23',
    '05-30': '24',
    '06-13': '25',
    '06-27': '26',
    '07-11': '1',
    '07-25': '2',
    '08-08': '3',
    '08-22': '4',
    '09-05': '5',
    '09-19': '6',
    '10-03': '7',
    '10-17': '8',
    '10-31': '9',
    '11-14': '10',
    '11-28': '11',
    '12-12': '12',
    '12-26': '13',
  },
};

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEKDAYS = [
  { short: 'S', long: 'Sunday' },
  { short: 'M', long: 'Monday' },
  { short: 'T', long: 'Tuesday' },
  { short: 'W', long: 'Wednesday' },
  { short: 'T', long: 'Thursday' },
  { short: 'F', long: 'Friday' },
  { short: 'S', long: 'Saturday' },
];

/**
 * Each category has a different shape/border as well as a different colour,
 * so the meaning is not conveyed by colour alone (WCAG 1.4.1).
 */
const CATEGORY_INFO: Record<Category, { label: string; style: string }> = {
  holiday: {
    label: 'Holiday',
    style: 'rounded-none bg-yellow-500',
  },
  payday: {
    label: 'Pay day',
    style: 'rounded-full bg-green-500',
  },
  nodeduction: {
    label: 'No deduction pay day',
    style: 'rounded-full border-2 border-dashed border-black bg-red-500',
  },
  excess: {
    label: 'Excess sick pay day',
    style: 'rounded-none border-2 border-dashed border-black bg-purple-500',
  },
  endofpay: {
    label: 'End of pay period',
    style: 'rounded-sm border-b-4 border-black bg-blue-500',
  },
};

const LEGEND_ORDER: Category[] = [
  'holiday',
  'payday',
  'nodeduction',
  'excess',
  'endofpay',
];

const CURRENT_PDF =
  'https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/payroll%20calendar%2FPayroll%20Calendar%202026_v2.pdf?alt=media&token=e9691757-77e6-4a40-912a-e817558c27e9';

const OTHER_CALENDARS = [
  {
    year: '2025',
    href: 'https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/payroll%20calendar%2FPayroll%20Calendar%202025.pdf?alt=media&token=f744d2d8-2f76-4257-bde0-3f174fe219a1',
  },
  {
    year: '2027',
    href: 'https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/payroll%20calendar%2FPayroll_Calendar_2027_v2.pdf?alt=media&token=809902b9-ddb0-4d2f-a2d6-950f9bd4022d',
  },
  { year: '2028', href: '/Payroll_Calendar_2028_v2.pdf' },
  { year: '2029', href: '/Payroll_Calendar_2029_v2.pdf' },
  { year: '2030', href: '/Payroll_Calendar_2030_v2.pdf' },
];

const pad = (n: number) => String(n).padStart(2, '0');

export function DatesLegendItem(props: any) {
  return (
    <div className='flex flex-row flex-nowrap items-center'>
      {/* Decorative swatch: the text label next to it carries the meaning */}
      <span
        aria-hidden='true'
        className={`inline-block h-5 w-5 shrink-0 ${props.colorstring} printcolour`}
      ></span>

      <span className='ml-2 print:text-black'>{props.label}</span>
    </div>
  );
}

export default function PayrollCalendar() {
  const [selectedYear] = React.useState<number>(2026);
  const [todaysDate, setTodaysDate] = React.useState<string>('');

  // Today's date (YYYY-MM-DD) in Los Angeles. Checked once a minute, and the
  // interval is cleared when the component unmounts.
  React.useEffect(() => {
    const update = () =>
      setTodaysDate(
        new Date().toLocaleDateString('en-CA', {
          timeZone: 'America/Los_Angeles',
        })
      );
    update();
    const id = window.setInterval(update, 60 * 1000);
    return () => window.clearInterval(id);
  }, []);

  const calendar: number[][][] = React.useMemo(() => {
    const cal = new c.Calendar();
    return MONTH_NAMES.map((_, month) => cal.monthDays(selectedYear, month));
  }, [selectedYear]);

  // 'MM-DD' -> category
  const dateIndex = React.useMemo(() => {
    const index: Record<string, Category> = {};
    const yearData = importantdates[String(selectedYear)];
    if (yearData) {
      (Object.keys(yearData) as Category[]).forEach((category) => {
        yearData[category].forEach((date) => {
          index[date] = category;
        });
      });
    }
    return index;
  }, [selectedYear]);

  const payPeriodEnds = endofpayperiodsreference[String(selectedYear)] ?? {};

  function describe(key: string, category: Category) {
    if (category === 'endofpay' && payPeriodEnds[key]) {
      return `End of pay period ${payPeriodEnds[key]}`;
    }
    return CATEGORY_INFO[category].label;
  }

  function formatDate(month: number, day: number) {
    return new Date(selectedYear, month - 1, day).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <>
      <Navbar />

      <Layout>
        <Seo
          title='Payroll Calendar - Los Angeles Controller'
          description='Los Angeles City Controller payroll calendar with pay periods, paydays, holidays, and important dates for City employees.'
        />

        <div className='mx-2 flex w-full flex-col px-4 py-2 dark:text-white sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl print:text-black'>
          <div className='flex flex-row gap-x-2 pb-2 pt-2 print:text-black'>
            <h1 className='dark:text-white print:text-black'>
              Payroll Calendar {selectedYear}
            </h1>
            <Link
              download={true}
              href={CURRENT_PDF}
              target='_blank'
              rel='noopener noreferrer'
              referrerPolicy='no-referrer'
              aria-label={`Download Payroll Calendar ${selectedYear} (PDF, opens in a new tab)`}
              className='my-auto rounded-full bg-black p-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 dark:bg-white dark:text-black md:p-2 print:hidden'
            >
              <svg
                className='h-4 w-4'
                viewBox='0 0 24 24'
                aria-hidden='true'
                focusable='false'
              >
                <path
                  fill='currentColor'
                  d='M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z'
                />
              </svg>
            </Link>
          </div>

          {/* Plain links instead of a <select> that opened a new window on change (WCAG 3.2.2) */}
          <nav
            aria-labelledby='other-calendars-label'
            className='my-3 print:hidden'
          >
            <p id='other-calendars-label' className='font-semibold'>
              Payroll calendars for other years (PDF)
            </p>
            <ul className='mt-1 flex flex-row flex-wrap gap-x-4 gap-y-1'>
              {OTHER_CALENDARS.map(({ year, href }) => (
                <li key={year}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-green-700 underline underline-offset-2 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 dark:text-mejito'
                  >
                    {year}
                    <span className='sr-only'>
                      {' '}
                      payroll calendar, PDF, opens in a new tab
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul
            aria-label='Calendar legend'
            className='flex flex-row flex-wrap gap-x-4 gap-y-2'
          >
            {LEGEND_ORDER.map((category) => (
              <li key={category}>
                <DatesLegendItem
                  colorstring={CATEGORY_INFO[category].style}
                  label={CATEGORY_INFO[category].label}
                />
              </li>
            ))}
            <li>
              <span className='font-bold print:text-black'>PP</span> Pay period
              number, shown on the week the pay period ends
            </li>
          </ul>

          <div className='mt-2 sm:mx-4 sm:grid sm:grid-cols-2 sm:gap-8 lg:mx-0 lg:grid-cols-3 print:grid-cols-3'>
            {calendar.map((month, monthindex) => {
              const m = monthindex + 1;
              const headingId = `month-heading-${m}`;
              const keyDates = Object.keys(dateIndex)
                .filter((key) => key.startsWith(`${pad(m)}-`))
                .sort();

              return (
                <section key={m} aria-labelledby={headingId}>
                  <h2 id={headingId} className='w-full text-center text-2xl'>
                    {MONTH_NAMES[monthindex]}
                    <span className='sr-only'> {selectedYear}</span>
                  </h2>

                  <table
                    aria-labelledby={headingId}
                    className='mx-auto mt-2 border-separate border-spacing-0'
                  >
                    <thead>
                      <tr>
                        {WEEKDAYS.map((weekday) => (
                          <th
                            key={weekday.long}
                            scope='col'
                            className='h-8 w-8 text-center font-bold print:text-black'
                          >
                            <span aria-hidden='true'>{weekday.short}</span>
                            <span className='sr-only'>{weekday.long}</span>
                          </th>
                        ))}
                        <th
                          scope='col'
                          className='h-8 w-8 text-center font-bold print:text-black'
                        >
                          <span aria-hidden='true'>PP</span>
                          <span className='sr-only'>Pay period</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {month.map((week, weekindex) => {
                        const saturday = week[6];
                        const pp =
                          saturday !== 0
                            ? payPeriodEnds[`${pad(m)}-${pad(saturday)}`]
                            : undefined;

                        return (
                          <tr key={weekindex}>
                            {week.map((day, dayindex) => {
                              if (day === 0) {
                                return (
                                  <td key={dayindex} className='h-8 w-8' />
                                );
                              }

                              const key = `${pad(m)}-${pad(day)}`;
                              const iso = `${selectedYear}-${key}`;
                              const category = dateIndex[key];
                              const isToday = iso === todaysDate;

                              return (
                                <td
                                  key={dayindex}
                                  className='h-8 w-8 p-0.5 text-center'
                                  aria-current={isToday ? 'date' : undefined}
                                >
                                  <div
                                    className={`printcolour mx-auto flex h-7 w-7 items-center justify-center ${
                                      category
                                        ? `${CATEGORY_INFO[category].style} text-black`
                                        : 'print:text-black'
                                    } ${
                                      isToday
                                        ? 'outline outline-2 outline-offset-1 outline-black dark:outline-white'
                                        : ''
                                    }`}
                                  >
                                    <time dateTime={iso}>{day}</time>
                                    {category && (
                                      <span className='sr-only'>
                                        , {describe(key, category)}
                                      </span>
                                    )}
                                    {isToday && (
                                      <span className='sr-only'>, today</span>
                                    )}
                                  </div>
                                </td>
                              );
                            })}

                            <td className='h-8 w-8 text-center font-bold print:text-black'>
                              {pp && (
                                <>
                                  <span aria-hidden='true'>[{pp}]</span>
                                  <span className='sr-only'>{pp}</span>
                                </>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  {/* Same information as the coloured cells, written out as text */}
                  {keyDates.length > 0 && (
                    <ul
                      aria-label={`Key dates in ${MONTH_NAMES[monthindex]}`}
                      className='mx-auto mt-2 max-w-xs text-sm print:text-black'
                    >
                      {keyDates.map((key) => (
                        <li key={key}>
                          <span className='font-semibold'>
                            {formatDate(m, Number(key.slice(3)))}:
                          </span>{' '}
                          {describe(key, dateIndex[key])}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
