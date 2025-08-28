import byteSize from 'byte-size';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import checkbookIcon from '@/components/icons/checkbook.png';
import cityFundsIcon from '@/components/icons/funding.png';
import payrollIcon from '@/components/icons/payroll.png';
import revenueIcon from '@/components/icons/revenue.png';

const ranges = [
  { divider: 1e18, suffix: 'E' },
  { divider: 1e15, suffix: 'P' },
  { divider: 1e12, suffix: 'T' },
  { divider: 1e9, suffix: 'G' },
  { divider: 1e6, suffix: 'M' },
  { divider: 1e3, suffix: 'k' },
];

function formatNumber(n: number) {
  for (let i = 0; i < ranges.length; i++) {
    if (n >= ranges[i].divider) {
      const numbersOfDigitsToShow = n / ranges[i].divider > 99 ? 0 : 1;

      return (
        (n / ranges[i].divider).toFixed(numbersOfDigitsToShow).toString() +
        ranges[i].suffix
      );
    }
  }
  return n.toString();
}

interface EachDataButtonProps {
  name: string;
  link: string;
  lastupdated?: string;
  since?: string;
  tags?: string[];
  size?: string;
  rowcount?: number;
  icon?: string;
}

const kirbybutton =
  'w-content rounded-full bg-black px-4 py-2 font-bold text-white dark:bg-white dark:text-black';

function EachDataButton(props: any) {
  const byteSizeObj = byteSize(props.size);

  return (
    <div>
      <Link href={props.link}>
        <div className='w-full'>
          <a href={props.link} target='_blank' rel='noopener noreferrer'>
            <div className='newBgColor   rounded-lg px-2 py-0.5 text-white dark:bg-zinc-700 dark:text-white '>
              {props.icon && (
                <div className='relative mb-4 h-16 w-16'>
                  {/* <div
                    className='relative mb-4 h-16 w-16'
                    style={{
                      backgroundColor: props.darkModeEnabled
                        ? 'bg-gray-700'
                        : 'bg-gray-100',
                    }}
                  ></div> */}

                  <Image
                    src={props.icon}
                    alt={props.name}
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              )}

              <h3 className='font-heavy text-lg'>{props.name}</h3>
              {/* <br></br> */}
              <div className='flex w-full flex-row gap-x-1'>
                {props.tags.includes('socrata') && (
                  <div className='rounded-full bg-gray-100 px-2 py-0.5 text-black dark:bg-zinc-700 dark:text-white'>
                    Socrata
                  </div>
                )}
                {props.tags.includes('buggy') && (
                  <div className='rounded-full bg-red-900 px-2 py-0.5 text-red-200 dark:bg-amber-900 dark:text-amber-300'>
                    ⚠️ Contains Bugs
                  </div>
                )}
              </div>
              <br></br>
            </div>
          </a>
        </div>
      </Link>
    </div>
  );
}

export default function OpenDataSeries() {
  const datalinks = [
    {
      name: 'Payroll',

      link: 'https://lacity-2.payroll.socrata.com/',
      tags: ['socrata'],
      // lastupdated: datainfo.payroll.lastUpdatedAt,
      //  since: '2013',
      // size: datainfo.payroll.csvsize,
      //   rowcount: datainfo.payroll.rowCount,
      icon: payrollIcon,
    },
    {
      name: 'Checkbook',
      link: 'https://lacity.spending.socrata.com/',
      tags: ['socrata'],
      // lastupdated: datainfo.checkbook.lastUpdatedAt,
      //  size: checkbookinfo.checkbooklastupdated[0].filesize,
      //  rowcount: datainfo.checkbook.rowCount,
      //  since: '2012',
      icon: checkbookIcon,
    },
    {
      name: 'All City Funds',
      link: 'https://controllerdata.lacity.org/Audits-and-Reports/All-City-Funds/ej7u-di9z/data_preview',
      tags: ['socrata'],
      // lastupdated: datainfo.cityfunds.lastUpdatedAt,
      //  since: '2014',
      // size: datainfo.cityfunds.csvsize,
      // rowcount: datainfo.cityfunds.rowCount,
      icon: cityFundsIcon,
    },
    {
      name: 'Revenue',
      link: 'https://controllerdata.lacity.org/browse?category=Revenue',
      tags: ['socrata'],
      // lastupdated: datainfo.revenue.lastUpdatedAt,
      //  rowcount: datainfo.revenue.rowCount,
      // size: datainfo.revenue.csvsize,
      //  since: '2012',
      icon: revenueIcon,
    },
  ];

  return (
    <div className='##27272a #sm:grid-cols-2 grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-4'>
      {datalinks.map((eachlink: any, eachlinknum: number) => (
        <EachDataButton
          key={eachlinknum}
          name={eachlink.name}
          link={eachlink.link}
          lastupdated={eachlink.lastupdated}
          since={eachlink.since}
          tags={eachlink.tags}
          size={eachlink.size}
          rowcount={eachlink.rowcount}
          icon={eachlink.icon}
        />
      ))}
    </div>
  );
}
