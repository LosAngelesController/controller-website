import { Poppins } from 'next/font/google';
import Head from 'next/head';

import Navbar from '../../../components/Navbar';
import Hero from '../../../components/riskManagement/Hero';
import KeyFindings from '../../../components/riskManagement/KeyFindings';
import Recommendations from '../../../components/riskManagement/Recommendations';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const Index = () => {
  return (
    <>
      <Head>
        <title>Citywide Risk Management Audit | LA City Controller</title>
        <meta
          name='description'
          content='Performance audit of the City of Los Angeles’ citywide risk management practices, highlighting $1.03 billion in liability payouts from FY 2020-2025.'
        />
      </Head>
      <Navbar />
      <div
        id='main-content'
        tabIndex={-1}
        className={`${poppins.className} min-h-screen bg-[#1a1a1a] text-white`}
      >
        <Hero />
        <KeyFindings />
        <Recommendations />
      </div>
    </>
  );
};

export default Index;
