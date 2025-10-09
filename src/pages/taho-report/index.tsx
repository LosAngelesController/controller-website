import Navbar from '../../components/Navbar';
import Hero from '../../components/taho/Hero';
import KeyFindings from '../../components/taho/KeyFindings';
import Recommendations from '../../components/taho/Recommendations';

const Index = () => {
  return (
    <>
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
