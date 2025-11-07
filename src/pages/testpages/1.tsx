import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

export default function test(props: any) {
  return (
    <>
      <Navbar />
      <Seo
        title='Popular Annual Financial Report FY22'
        description='Report & Visualizations of Expenditures, Revenues, and Debt for the City of Los Angeles'
      />
      <Layout>
        <h1 className='pt-8 pb-4 text-2xl font-semibold dark:text-white'>
          Popular Annual Financial Report FY22
        </h1>
        <p>oh</p>
      </Layout>
    </>
  );
}
