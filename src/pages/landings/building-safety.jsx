'use client';
import Head from 'next/head';

import Navbar from '@/components/Navbar';

import BSArea from '../../components/buildingSafety/BSArea';
import BSType from '../../components/buildingSafety/BSType';
import BSYear from '../../components/buildingSafety/BSYear';

export default function Employees() {
  return (
    <>
      <Head>
        <title>Building and Safety Cases Analysis</title>
        <meta
          name='description'
          content='Building and safety cases from 2018 to 2023 in the city of Los Angeles.'
        />
        <meta
          name='keywords'
          content='City of LA, Building, Safety, Analysis, Community Engagement'
        />
        <meta name='author' content='Executive Office of the Controller' />
        <meta
          property='og:title'
          content='Building and Safety Cases Analysis'
        />
        <meta
          property='og:description'
          content='A visual analysis of building and safety cases from 2018 - 2023 in the city of Los Angeles.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://controller.lacity.gov/landings/building-safety'
        />
        {/* <meta
          property='og:image'
          content='https://controller.lacity.gov/landings/building-safety/image.jpg'
        /> */}
      </Head>
      <center>
        <Navbar />
      </center>
      <main id="main-content" tabIndex={-1} className='md:max-w container mx-auto px-4 sm:container lg:max-w-3xl xl:max-w-4xl'>
        <center>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h1
              className='pt-8 pb-4 text-xl font-bold dark:text-white lg:text-3xl'
              style={{ fontFamily: 'Helvetica' }}
            >
              Building and Safety Cases Analysis
            </h1>
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            <h2 className='m-2 text-2xl dark:text-white'>Cases By Year</h2>
            <BSYear />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            <h2 className='m-2 text-2xl dark:text-white'>
              Cases By Area Planning Commission
            </h2>
            <BSArea />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            <h2 className='m-2 text-2xl dark:text-white'>Cases By Case Type</h2>
            <BSType />
            <div className='dark:text-white text-left mt-7'>
              <h3 className='text-xl dark:text-white mb-2'>Case Types</h3>
              <ul>
                <li className='mb-2'><b>Billboards</b>: Off-site Sign Periodic Inspection Division (OSSPID) conducts 2-year periodic inspection of all billboard signs</li>
                <li className='mb-2'><b>Citations</b>: Issuing of citations on transient types of violations such as open air vending, zoning regulations, noise violations, and nuisance lighting violations</li>
                <li className='mb-2'><b>CNAP (Contract Nuisance Abatement Program)</b>: Abates open, vacant, abandoned, and vandalized buildings, under a process known as Vacant Building Abatement (VBA). The VBA process includes declaring these properties a “Nuisance” and/or “Hazard” after a public hearing. When property owners fail to comply with orders requiring them to clean, secure, rehabilitate or demolish these buildings, VBA steps in and performs the physical abatement work of cleaning, securing, and if necessary, demolishing a building by way of an annually awarded contract to various private contractors.</li>
                <li className='mb-2'><b>FRP (Foreclosure Registry Program)</b>: VBA unit conducts inspection on sites that are registered through LAHD as foreclosed.</li>
                <li className='mb-2'><b>General</b>: Investigation of code violations in existing commercial buildings, hotels, motels, and single-family residential buildings</li>
                <li className='mb-2'><b>PACE (Pro-Active Code Enforcement)</b>: LADBS' PACE program is focused on specific code enforcement problems in limited geographic regions in the City. Currently, LADBS is working to enforce City regulations related to seismic retrofits to ensure earthquake readiness in soft-story residential structures throughout the City.</li>
              </ul>
            </div>
          </div>
        </center>
      </main>
    </>
  );
}