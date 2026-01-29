import HeroSection from '@/components/homelessPathway/HeroSection';
import KeyFindingsSection from '@/components/homelessPathway/KeyFindingsSection';
import RecommendationsSection from '@/components/homelessPathway/RecommendationsSection';
import SuccessFactorsSection from '@/components/homelessPathway/SuccessFactorsSection';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

const Index = () => {
  return (
    <main className='bg-background min-h-screen'>
      <Head>
        <meta
          name='description'
          content='LA Controller’s Homeless Pathway Audit summarizes findings, data, and recommendations to improve homelessness response and outcomes in Los Angeles.'
        />
      </Head>
      <Navbar />
      <HeroSection />
      <KeyFindingsSection />
      <SuccessFactorsSection />
      <RecommendationsSection />
    </main>
  );
};

export default Index;
