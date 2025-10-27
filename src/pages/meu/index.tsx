import Head from 'next/head';

import Hero from '../../components/meu/Hero';
import KeyFindings from '../../components/meu/KeyFindings';
import Recommendations from '../../components/meu/Recommendations';
import Navbar from '../../components/Navbar';

const META = {
  title:
    "On The Sideline: Assessing LAPD's Mental Evaluation Unit & Smart Co-Response Model",
  description:
    'Assessment of LAPD’s Mental Evaluation Unit (MEU) covering operations, data (2020–2024), legal frameworks, policies, and training.',
  url: 'https://controller.lacity.gov/meu',
  image:
    'https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Report%20Images%2Fmeu%2FLAPD-MEU-cover.jpg?alt=media&token=d439b22f-0f6b-4a59-ae63-37dc3c02fe46',
  twitter: '@lacontroller',
  siteName: 'Los Angeles City Controller',
  themeColor: '#1a1a1a',
  published: '2025-10-27',
};

const Index = () => {
  return (
    <>
      <Head>
        <title>{META.title}</title>
        <meta name='description' content={META.description} />
        <link rel='canonical' href={META.url} />
        <meta name='robots' content='index,follow' />
        <meta name='theme-color' content={META.themeColor} />

        {/* Open Graph */}
        <meta property='og:type' content='article' />
        <meta property='og:site_name' content={META.siteName} />
        <meta property='og:title' content={META.title} />
        <meta property='og:description' content={META.description} />
        <meta property='og:url' content={META.url} />
        <meta property='og:image' content={META.image} />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={META.twitter} />
        <meta name='twitter:creator' content={META.twitter} />
        <meta name='twitter:title' content={META.title} />
        <meta name='twitter:description' content={META.description} />
        <meta name='twitter:image' content={META.image} />
      </Head>

      <Navbar />
      <div className="min-h-screen bg-[#1a1a1a] font-['Inter'] text-white">
        <Hero />
        <KeyFindings />
        <Recommendations />
      </div>
    </>
  );
};

export default Index;
