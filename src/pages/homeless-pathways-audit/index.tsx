import HeroSection from "@/components/homelesspathway/HeroSection";
import KeyFindingsSection from "@/components/homelesspathway/KeyFindingsSection";
import SuccessFactorsSection from "@/components/homelesspathway/SuccessFactorsSection";
import RecommendationsSection from "@/components/homelesspathway/RecommendationsSection";
import Navbar from "@/components/Navbar";


const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <KeyFindingsSection />
      <SuccessFactorsSection />
      <RecommendationsSection />

    </main>
  );
};

export default Index;
