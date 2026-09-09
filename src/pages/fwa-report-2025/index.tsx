import Head from 'next/head';

import FwaReportInfo from '@/components/fwa/FwaReportInfo';
import FwaCaseExample from '@/components/fwaReport2025/FwaCaseExample';
import FwaHero from '@/components/fwaReport2025/FwaHero';
import FwaHighlights from '@/components/fwaReport2025/FwaHighlights';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <>
      <Head>
        <title>FWA 2025 AnnualReport – City of Los Angeles</title>
        <meta
          name='description'
          content='Explore the Fraud, Waste, and Abuse (FWA) 2025 annualreport from the City of Los Angeles Controller’s Office, highlighting key findings, case examples, and reporting tools.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content="City of Los Angeles Controller's Office" />
        <meta
          name='keywords'
          content='FWA, Los Angeles, Fraud Waste Abuse, city audit, controller report'
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property='og:title'
          content='FWA 2025 Annual Report – City of Los Angeles'
        />
        <meta
          property='og:description'
          content="Highlights from the Fraud, Waste, and Abuse 2025 annual report by the LA Controller's Office."
        />
        <meta
          property='og:image'
          content='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Data%20Thumbnails%2Ffwa-annualreport2025.jpg?alt=media&token=4d0d3aef-adea-4f7d-a820-62a97b8528e6'
        />
        <meta
          property='og:url'
          content='https://controller.lacity.gov/fwa-report-2025'
        />
        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='FWA Annual 2025 Report – City of Los Angeles'
        />
        <meta
          name='twitter:description'
          content="Explore highlights from the Fraud, Waste, and Abuse 2025 annualreport by the LA Controller's Office."
        />
        <meta
          name='twitter:image'
          content='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Data%20Thumbnails%2Ffwa-annualreport2025.jpg?alt=media&token=4d0d3aef-adea-4f7d-a820-62a97b8528e6'
        />
        <meta name='twitter:site' content='@lacontroller' />
      </Head>
      <Navbar />
      <main
        id='main-content'
        tabIndex={-1}
        className="min-h-screen bg-[#1a1a1a] font-['Inter'] text-white"
      >
        <FwaHero />
        <FwaHighlights />
        <FwaCaseExample />
        <FwaReportInfo />
      </main>
    </>
  );
};

export default Index;
