import c from 'calendar';
import Link from 'next/link';
import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
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

const importantdates: any = {
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
    excess: ['02-04'],
    nodeduction: ['04-29', '09-30'],
    endofpay: [
      //every other saturday of 2025
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
      //every other wednesday of 2025 except for the excess sick pays and no deduction pays
      '01-07',
      '01-21',
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

const endofpayperiodsreference: any = {
  '2026': {
    '01-10': '14',
    '01-24': '15',
    '02-07': '16',
    '02-21': '17',
    '03-07': '18',
    '03-22': '19',
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

export function DatesLegendItem(props: any) {
  return (
    <div className='flex flex-row flex-nowrap'>
      <div
        className={`h-5 w-5 rounded-full ${props.colorstring} printcolour `}
      ></div>

      <div className='ml-2  print:text-black'>{props.label}</div>
    </div>
  );
}

export default function PayrollCalendar(props: any) {
  const [selectedYear, setSelectedYear] = React.useState<number>(2026);
  const [todaysDate, setTodaysDate] = React.useState<string>('');
  const [calendar, setCalendar] = React.useState<Array<Array<Array<number>>>>(
    []
  );
  const [listofimportantdates, setListofimportantdates] = React.useState<any>(
    {}
  );

  function setCurrentDate() {
    // current datetime string in America/Chicago timezone
    const la_datetime_str = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    });

    // create new Date object
    const date_la = new Date(la_datetime_str);

    // year as (YYYY) format
    const year = date_la.getFullYear();

    // month as (MM) format
    const month = ('0' + (date_la.getMonth() + 1)).slice(-2);

    // date as (DD) format
    const date = ('0' + date_la.getDate()).slice(-2);

    // date time in YYYY-MM-DD format
    const date_time = year + '-' + month + '-' + date;

    // "2021-03-22"
    // console.log(date_time);

    if (todaysDate !== date_time) {
      setTodaysDate(date_time);
    }
  }

  function generateCalendar() {
    const cal = new c.Calendar();

    const monthsarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const arraysofwholecalendar = monthsarray.map((month: number) => {
      return cal.monthDays(selectedYear, month);
    });

    setCalendar(arraysofwholecalendar);
  }

  function getcategoryfromdate(month: number, day: number) {
    const stringmonth = ('0' + month).slice(-2);
    const stringday = ('0' + day).slice(-2);

    // console.log('stringmonth', stringmonth);
    // console.log('stringday', stringday);

    if (listofimportantdates[stringmonth] === undefined) {
      return '';
    }

    if (listofimportantdates[stringmonth][stringday] === undefined) {
      return '';
    }

    const category = listofimportantdates[stringmonth][stringday];

    return category;
  }

  function checkiftodaysdate(month: number, day: number) {
    const stringmonth = ('0' + month).slice(-2);
    const stringday = ('0' + day).slice(-2);

    const todaysdatecheck = `${selectedYear}-${stringmonth}-${stringday}`;

    if (todaysDate === todaysdatecheck) {
      return ' border-2 border-black dark:border-white';
    } else {
      return ' ';
    }
  }

  function endofpayperiodstring(month: number, day: number) {
    const yeartoref = endofpayperiodsreference[String(selectedYear)];

    const stringmonth = ('0' + month).slice(-2);

    const stringday = ('0' + day).slice(-2);

    const refstring = `${stringmonth}-${stringday}`;

    // console.log('ref string', refstring);

    const answer = yeartoref[refstring];

    if (answer) {
      return answer;
    } else {
      return '';
    }
  }

  function getAriaOfDate(month: number, day: number) {
    const category = getcategoryfromdate(month, day);

    const date = new Date(selectedYear, month - 1, day);

    let aria = `${date.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}`;

    if (category) {
      aria =
        aria +
        ` is a ${category} ${
          category.toLowerCase().includes('day') ? '' : 'day'
        }`;
    }

    return aria;
  }

  function givecolourstringfromdate(month: number, day: number) {
    const category = getcategoryfromdate(month, day);

    switch (category) {
      case 'holiday':
        return 'bg-yellow-500 dark:bg-yellow-500 dark:text-black printcolour ';
      case 'excess':
        return 'bg-purple-500 dark:bg-purple-500 dark:text-black printcolour ';
      case 'nodeduction':
        return 'bg-red-500 dark:bg-red-500 dark:text-black printcolour ';
      case 'endofpay':
        return 'bg-blue-500 dark:bg-blue-500 dark:text-black printcolour ';
      case 'payday':
        return 'bg-green-500 dark:bg-green-500 dark:text-black printcolour';
      default:
        return '';
    }
  }

  function indexOfDates() {
    const yearToLook = String(selectedYear);

    const listofdates: any = {};

    const selectedYearObject = importantdates[yearToLook];

    console.log('selectedYearObject', selectedYearObject);

    Object.keys(selectedYearObject).forEach((categoryname) => {
      const category = selectedYearObject[categoryname];

      category.forEach((date: string) => {
        const month = date.split('-')[0];
        const day = date.split('-')[1];

        if (listofdates[month] === undefined) {
          listofdates[month] = {};
        }

        listofdates[month][day] = categoryname;
      });
    });

    console.log(listofdates);

    setListofimportantdates(listofdates);
  }

  React.useEffect(() => {
    indexOfDates();
    generateCalendar();

    setInterval(() => {
      setCurrentDate();
    }, 1000);
  }, []);

  React.useEffect(() => {
    indexOfDates();
    generateCalendar();
  }, [selectedYear]);

  return (
    <>
      <Navbar />

      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo title='Payroll Calendar - Los Angeles Controller' />

        <div className='mx-2 flex w-full flex-col px-4 py-2   dark:text-white sm:mx-4  md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl print:text-black'>
          <div className='flex flex-row gap-x-2 pb-2  pt-2  print:text-black '>
            <h1 className='dark:text-white  print:text-black'>
              Payroll Calendar {selectedYear}
            </h1>
            <Link
              download={true}
              href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Payroll%20Calendar%202026_v2.pdf?alt=media&token=7b520beb-ebbd-4858-9c85-b0576534d5a8'
              target='_blank'
              referrerPolicy='no-referrer'
              aria-label='Download Payroll Calendar 2026 (PDF) in a new tab'
              className='my-auto rounded-full bg-black p-1.5 text-white dark:bg-white dark:text-black md:p-2  print:hidden'
            >
              <svg className='l-4 h-4' viewBox='0 0 24 24' aria-hidden='true'>
                <path
                  fill='currentColor'
                  d='M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z'
                />
              </svg>
            </Link>
          </div>
          <div className='flex'>
            <p className='text-green-900 underline dark:text-mejito '>
              <Link
                href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Payroll%20Calendar%202026_v2.pdf?alt=media&token=7b520beb-ebbd-4858-9c85-b0576534d5a8'
                className='font-semibold text-green-700 dark:text-mejito'
              >
                Print Old Version
              </Link>
            </p>

            {/* Add margin to create space between the links */}
            <div style={{ margin: '0 10px' }}></div>

            <p className='text-green-900 underline dark:text-mejito '>
              <Link
                href='hhttps://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Payroll%20Calendar%202027.pdf?alt=media&token=6f701edc-1c5d-4bce-818d-1785cbcfc3e8'
                className='font-semibold text-green-700 dark:text-mejito'
              >
                Payroll Calendar 2027
              </Link>
            </p>
          </div>

          <div>
            <div className='flex flex-row flex-wrap gap-x-4 gap-y-2'>
              <DatesLegendItem
                colorstring='bg-yellow-500 dark:bg-yellow-500 dark:text-black'
                label='Holiday'
              />
              <DatesLegendItem
                colorstring='bg-green-500 dark:bg-green-500 dark:text-black'
                label='Pay Day'
              />
              <DatesLegendItem
                colorstring='bg-red-500 dark:bg-red-500 dark:text-black'
                label='No Deduction Pay'
              />
              <DatesLegendItem
                colorstring='bg-purple-500 dark:bg-purple-500 dark:text-black'
                label='Excess Sick Pay'
              />
              <DatesLegendItem
                colorstring='bg-blue-500 dark:bg-blue-500 dark:text-black'
                label='End of Pay Period'
              />
              <p>
                <span className='font-bold print:text-black'>[PP]</span> Pay
                Period
              </p>
            </div>
          </div>

          <div
            className={
              `mt-2 sm:mx-4 sm:grid sm:grid-cols-2 sm:gap-8 lg:mx-0 lg:grid-cols-3` +
              '  print:grid-cols-3 '
            }
          >
            {calendar.length != 0 &&
              calendar.map((month, monthindex: number) => (
                <div key={monthindex} className=''>
                  <h2 className='w-full text-center text-2xl'>
                    {new Date(
                      `2022-${String(monthindex + 1).padStart(2, '0')}-15`
                    ).toLocaleDateString('default', {
                      month: 'long',
                    })}
                  </h2>
                  <div className='mx-auto pt-2'>
                    {month.map((weekline, weeklineindex) => (
                      <div
                        key={weeklineindex}
                        className='grid grid-cols-8 content-center'
                      >
                        {weekline.map((day, dayindex) =>
                          day === 0 ? (
                            <div
                              key={dayindex}
                              className={`h-7 w-7
                            
                           
                            `}
                            ></div>
                          ) : (
                            <div
                              key={dayindex}
                              className={`printcolour flex h-7 w-7 items-center justify-center rounded-full ${givecolourstringfromdate(
                                monthindex + 1,
                                day
                              )}  ${checkiftodaysdate(monthindex + 1, day)}`}
                            >
                              <time
                                dateTime={`${selectedYear}-${String(
                                  monthindex + 1
                                ).padStart(2, '0')}-${String(day).padStart(
                                  2,
                                  '0'
                                )}`}
                                aria-label={getAriaOfDate(monthindex + 1, day)}
                              >
                                <span className='m-auto print:text-black'>
                                  {day}
                                </span>
                              </time>
                            </div>
                          )
                        )}

                        <div className='flex h-7 w-7 justify-center font-bold  print:text-black'>
                          {weekline[6] !== 0 &&
                            endofpayperiodstring(
                              monthindex + 1,
                              weekline[6]
                            ) && (
                              <>
                                <span>[</span>
                                <span>
                                  {endofpayperiodstring(
                                    monthindex + 1,
                                    weekline[6]
                                  )}
                                </span>
                                <span>]</span>
                              </>
                            )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
