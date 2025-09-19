import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

function EachDataButton(props: any) {
  return (
    <div>
      <Link href={props.link} target='_blank' rel='noopener noreferrer'>
        <div className='w-full'>
          <div className='newBgColor rounded-lg px-4 py-2 text-white dark:bg-zinc-700 dark:text-white'>
            {props.icon && (
              <div className='relative mb-4 h-16 w-16'>
                <Image
                  src={props.icon} // <-- string path
                  alt={props.name}
                  fill // replaces layout="fill"
                  style={{ objectFit: 'contain' }} // replaces objectFit
                  sizes='64px'
                  priority={false}
                />
              </div>
            )}
            <h3 className='font-heavy text-lg'>{props.name}</h3>
            <div className='flex w-full flex-row gap-x-1 pb-6'>
              {props.tags?.includes('socrata') && (
                <div className='rounded-full bg-gray-100 px-2 py-0.5 text-black dark:bg-zinc-700 dark:text-white'>
                  Socrata
                </div>
              )}
              {props.tags?.includes('buggy') && (
                <div className='rounded-full bg-red-900 px-2 py-0.5 text-red-200 dark:bg-amber-900 dark:text-amber-300'>
                  ⚠️ Contains Bugs
                </div>
              )}
            </div>
          </div>
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
      icon: '/icons/payroll.png', // <-- string path from /public
    },
    {
      name: 'Checkbook',
      link: 'https://lacity.spending.socrata.com/',
      tags: ['socrata'],
      icon: '/icons/checkbook.png',
    },
    {
      name: 'All City Funds',
      link: 'https://controllerdata.lacity.org/Audits-and-Reports/All-City-Funds/ej7u-di9z/data_preview',
      tags: ['socrata'],
      icon: '/icons/funding.png',
    },
    {
      name: 'Revenue',
      link: 'https://controllerdata.lacity.org/browse?category=Revenue',
      tags: ['socrata'],
      icon: '/icons/revenue.png',
    },
  ];

  return (
    <div className='grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-4'>
      {datalinks.map((eachlink, i) => (
        <EachDataButton key={i} {...eachlink} />
      ))}
    </div>
  );
}
