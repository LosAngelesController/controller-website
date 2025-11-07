import Head from 'next/head';

import Navbar from '../../components/Navbar';
import Hero from '../../components/taho/Hero';
import KeyFindings from '../../components/taho/KeyFindings';
import Recommendations from '../../components/taho/Recommendations';

const Index = () => {
  return (
    <>
      <Head>
        <title>Tenant Anti-Harassment Ordinance Audit | LA City Controller</title>
        <meta
          name='description'
          content='Tenant Anti-Harassment Ordinance audit site highlighting findings, data visualizations, and recommendations to protect Los Angeles renters.'
        />
      </Head>
      <Navbar />
      <div
        id='main-content'
        tabIndex={-1}
        className="min-h-screen bg-[#1a1a1a] font-['Inter'] text-white"
      >
        <Hero />
        <KeyFindings />
        <Recommendations />
      </div>
    </>
  );
};

export default Index;
