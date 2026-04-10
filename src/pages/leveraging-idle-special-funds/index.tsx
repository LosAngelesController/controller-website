import Head from 'next/head';

import Navbar from '../../components/Navbar';
import Hero from '../../components/idleFunds/Hero';
import Highlights from '../../components/idleFunds/Highlights';
import Recommendations from '../../components/idleFunds/Recommendations';

const Index = () => {
  return (
    <>
      <Head>
        <title>Leveraging Idle Special Funds 2026 | LA City Controller</title>
        <meta
          name='description'
          content='The Controller’s Office identified $80.4 million sitting idle in 177 special funds, out of the City’s total 612 special funds. This report analyzes special funds as of June 30, 2025.'
        />
      </Head>
      <Navbar />
      <div
        id='main-content'
        tabIndex={-1}
        className="min-h-screen bg-[#1a1a1a] font-['Inter'] text-white"
      >
        <Hero />
        <Highlights />
        <Recommendations />
      </div>
    </>
  );
};

export default Index;
