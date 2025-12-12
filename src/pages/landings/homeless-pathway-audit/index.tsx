import HeroSection from '@/components/homelessPathway/HeroSection';
import KeyFindingsSection from '@/components/homelessPathway/KeyFindingsSection';
import RecommendationsSection from '@/components/homelessPathway/RecommendationsSection';
import SuccessFactorsSection from '@/components/homelessPathway/SuccessFactorsSection';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <main className='bg-background min-h-screen'>
      <Navbar />
      <HeroSection />
      <KeyFindingsSection />
      <SuccessFactorsSection />
      <RecommendationsSection />
    </main>
  );
};

export default Index;
