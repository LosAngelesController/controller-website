import Link from 'next/link';
import * as React from 'react';

const links = [
  {
    name: '🤔 Send Us Your Questions',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSd3rORdW5vums-qtmLVc5BOZpxmPZAkstJViuFfWtbr2JoR7Q/viewform',
  },
  {
    name: '🤝 Sign Up as an Org',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSeokErCNI_hztn8Xrv8TtAfzx0DOwQH1x-RKXRK592cgFiVVQ/viewform',
  },

  {
    name: '📰 Sign up for Newsletters/Texts',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfr1ndu5UaX3IPaxWi30tEpw3J7ZMB5d8HdKC9Uhg9IniIH5w/viewform',
  },
  { name: '📅 Payroll Calendar', url: '/payrollcalendar/' },
  {
    name: '📝 Public Records Request',
    url: 'https://recordsrequest.lacity.org/requests/new?dept_id=1219',
  },
  { name: '🚨 Report Fraud, Waste, or Abuse', url: '/fwa/' },
  {
    name: '💸 Collections Board of Review',
    url: '/collectionsboard/',
  },
];

export default function ImportantLinksSection(props: any) {
  return (
    <div className='grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-3'>
      {links.map((link, key) => (
        <Link href={link.url} key={key} target='_blank' rel='noreferrer'>
          <p className='text-lg font-bold text-black underline dark:text-white'>
            {link.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
