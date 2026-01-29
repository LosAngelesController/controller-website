// import * as React from 'react';
// import { titleCase } from 'true-case';

// import '@/styles/aboutstyles.module.css';

// import Layout from '@/components/layout/Layout';
// import LineItem from '@/components/LineItem';
// import Navbar from '@/components/Navbar';
// import Seo from '@/components/Seo';

// import { audits } from '@/auditsindex.json';

// /**
//  * SVGR Support
//  * Caveat: No React Props Type.
//  *
//  * You can override the next-env if the type is important to you
//  * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
//  */

// // !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// // Before you begin editing, follow all comments with `STARTERCONF`,
// // to customize the default configuration.

// export default function Audits(props: any) {
//   return (
//     <>
//       <Navbar />

//       <Layout>
//         {/* <Seo templateTitle='Home' /> */}

//         <Seo
//           title='Audits'
//           description='Audits performed by the Controller since 2016.'
//         />

//         <div className=' flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <h1 className='dark:text-white' style={{ marginRight: '20px' }}>
//               Oversight
//             </h1>
//             <button
//               className='rounded-full bg-black px-4 py-2 font-bold text-white dark:bg-white dark:text-black'
//               style={{ marginRight: '20px' }} // Added margin to create space
//               onClick={() => {
//                 // Use your preferred navigation method to go to the "/upcoming/" URL
//                 window.location.href = '/upcoming/'; // Redirect to the "/upcoming/" URL
//               }}
//             >
//               Upcoming Audits & Reports
//             </button>
//             <button className='rounded-full bg-black px-2 py-2 font-bold text-white dark:bg-white dark:text-black'>
//               <a
//                 href='https://docs.google.com/spreadsheets/d/1oYBlBXCcSyUxx7YKovNXqt15oPD5rqOdqe5tXXgylPA/edit?usp=sharing'
//                 target='_blank'
//                 rel='noopener noreferrer'
//               >
//                 Old Audits and Reports
//               </a>
//             </button>
//           </div>

//           <br></br>
//           <div className='md:hidden'>
//             {props.audits.map((eachaudit: any, eachauditnum: number) => (
//               <LineItem
//                 key={eachauditnum}
//                 dept={eachaudit.dept}
//                 link={`${eachaudit.pre === false ? '' : '/audits/'}${eachaudit.link
//                   }`}
//                 name={eachaudit.name}
//                 year={eachaudit.year}
//               />
//             ))}
//           </div>

//           <div className='hidden md:block'>
//             <div className='grid grid-cols-3 gap-x-6 gap-y-4 lg:grid-cols-3'>
//               {props.audits.map((eachaudit: any, eachauditnum: number) => (
//                 <div
//                   key={eachauditnum}
//                   className='mb-2 w-full max-w-xs rounded-lg bg-gray-200 dark:bg-zinc-800 dark:text-white'
//                 >
//                   <a
//                     href={`${eachaudit.pre === false ? '' : '/audits/'}${eachaudit.link
//                       }`}
//                   >
//                     <img
//                       src={eachaudit.image}
//                       className='w-full'
//                       alt='Card images'
//                     ></img>
//                     <div className=' px-2 py-2'>
//                       <p className='dark:text-white'>
//                         {eachaudit.year} |{' '}
//                         <span>
//                           {titleCase(eachaudit.dept).replace(
//                             /( )?department( of)?/gi,
//                             ''
//                           )}
//                         </span>
//                       </p>
//                       <p className='font-bold dark:text-white'>
//                         {eachaudit.name}
//                       </p>
//                     </div>
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// }

// // This function gets called at build time
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   return {
//     props: {
//       audits,
//     },
//   };
// }
import Link from 'next/link';
import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import Layout from '@/components/layout/Layout';
import LineItem from '@/components/LineItem';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import { audits } from '@/auditsindex.json';

export default function Audits(props: any) {
  return (
    <>
      <Navbar />
      <Layout>
        <Seo
          title='Audits'
          description='Browse Los Angeles Controller audits and oversight reports, with recent findings, departments, and links to upcoming audits.'
        />

        <div className='flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 className='dark:text-white' style={{ marginRight: '20px' }}>
              Oversight
            </h1>
            <Link
              href='/upcoming/'
              className='rounded-full bg-black px-4 py-2 font-bold text-white dark:bg-white dark:text-black text-center'
              style={{ marginRight: '20px' }}
            >
              Upcoming Audits & Reports
            </Link>
            <a
              href='https://docs.google.com/spreadsheets/d/1oYBlBXCcSyUxx7YKovNXqt15oPD5rqOdqe5tXXgylPA/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full bg-black px-2 py-2 font-bold text-white dark:bg-white dark:text-black text-center'
            >
              Old Audits and Reports
            </a>
          </div>

          <div className='md:hidden mt-6'>
            {props.audits.map((audit: any, index: number) => (
              <LineItem
                key={index}
                dept={audit.city_category}
                link={`${audit.pre === false ? '' : ''}${audit.link}`}
                name={audit.name}
                year={audit.year}
                document_type={audit.document_type}
              />
            ))}
          </div>

          <div className='hidden md:block mt-6'>
            <div className='grid grid-cols-3 gap-x-6 gap-y-4 lg:grid-cols-3'>
              {props.audits.map((audit: any, index: number) => (
                <div
                  key={index}
                  className='mb-2 w-full max-w-xs rounded-lg bg-gray-200 dark:bg-zinc-800 dark:text-white'
                >
                  <a
                    href={`${audit.pre === false ? '' : ''}${audit.link}`}
                    className='block rounded-lg focus:outline-none'
                  >
                    <img
                      src={audit.image}
                      className='w-full'
                      alt=''
                    />
                    <div className='px-2 py-2'>
                      <p className='dark:text-white'>
                        {audit.Year} | {audit.document} | {audit.category} |
                      </p>
                      <p className='font-bold dark:text-white'>{audit.name}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  return {
    props: {
      audits,
    },
  };
}
