import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Client-only imports (prevents hydration crashes from window/localStorage/Chart libs/etc.)
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const HeroSection = dynamic(
  () => import("@/components/homeless/components/HeroSection"),
  { ssr: false }
);
const KeyFindingsSection = dynamic(
  () => import("@/components/homeless/components/KeyFindingsSection"),
  { ssr: false }
);
const SuccessFactorsSection = dynamic(
  () => import("@/components/homeless/components/SuccessFactorsSection"),
  { ssr: false }
);
const RecommendationsSection = dynamic(
  () => import("@/components/homeless/components/RecommendationsSection"),
  { ssr: false }
);
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const Index = () => {
  return (
    <>
      <Head>
        <title>Homelessness Audit & Findings | LA City</title>
        <meta
          name="description"
          content="Audit findings, key data insights, success factors, and recommendations addressing homelessness outcomes and system performance in Los Angeles."
        />
      </Head>

      {/* Server-rendered stable shell */}
      <div
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-background font-['Inter']"
        suppressHydrationWarning
      >
        {/* If a hydration error happens, it stays contained here */}
        <Suspense fallback={null}>
          <Navbar />
          <HeroSection />
          <KeyFindingsSection />
          <SuccessFactorsSection />
          <RecommendationsSection />
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
