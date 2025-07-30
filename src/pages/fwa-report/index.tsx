import Head from 'next/head';

import FwaCaseExample from '@/components/fwa/FwaCaseExample';
import FwaHero from '@/components/fwa/FwaHero';
import FwaHighlights from '@/components/fwa/FwaHighlights';
import FwaReportInfo from '@/components/fwa/FwaReportInfo';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <>
      <Head>
        <title>FWA Report – City of Los Angeles</title>
        <meta
          name='description'
          content='Explore the Fraud, Waste, and Abuse (FWA) report from the City of Los Angeles Controller’s Office, highlighting key findings, case examples, and reporting tools.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content="City of Los Angeles Controller's Office" />
        <meta
          name='keywords'
          content='FWA, Los Angeles, Fraud Waste Abuse, city audit, controller report'
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property='og:title' content='FWA Report – City of Los Angeles' />
        <meta
          property='og:description'
          content="Highlights from the Fraud, Waste, and Abuse report by the LA Controller's Office."
        />
        <meta
          property='og:image'
          content='https://controller.lacity.gov/fwa-annualreport2024.png'
        />
        <meta
          property='og:url'
          content='https://controller.lacity.gov/fwa-report'
        />
        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='FWA Report – City of Los Angeles' />
        <meta
          name='twitter:description'
          content="Explore highlights from the Fraud, Waste, and Abuse report by the LA Controller's Office."
        />
        <meta
          name='twitter:image'
          content='https://controller.lacity.org/fwa-annualreport2024.png'
        />
        <meta name='twitter:site' content='@lacontroller' />
      </Head>
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
