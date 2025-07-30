import FwaCaseExample from '@/components/fwa/FwaCaseExample';
import FwaHero from '@/components/fwa/FwaHero';
import FwaHighlights from '@/components/fwa/FwaHighlights';
import FwaReportInfo from '@/components/fwa/FwaReportInfo';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#1a1a1a] font-['Inter'] text-white">
        <FwaHero />
        <FwaHighlights />
        <FwaCaseExample />
        <FwaReportInfo />
      </div>
    </>
  );
};

export default Index;
