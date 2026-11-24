import { motion } from 'framer-motion';

import { Button } from '../taho/ui/button';

const Hero = () => {
  return (
    <div className='relative mb-12 flex min-h-screen items-center overflow-hidden bg-[#1a1a1a]'>
      <div className='container mx-auto flex max-w-7xl flex-col items-start gap-20 px-4 lg:flex-row'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='z-10 flex-1 pt-20 text-left'
        >
          <h1 className='mb-2 text-[2rem] font-bold uppercase leading-none tracking-tight text-[#41ffca]'>
            <span>PERFORMANCE AUDIT OF CITYWIDE RISK MANAGEMENT</span>
            <br />
            <span>&</span>
            <br />
            <span>RISK FINANCING OPTIONS FOR THE CITY OF LOS ANGELES</span>
          </h1>

          <div className='mb-8 flex space-x-4'>
            <Button
              asChild
              size='lg'
              className='flex items-center gap-2 bg-[#41ffca] px-6 text-base font-bold text-black hover:bg-[#41ffca]/90'
            >
              <a
                href='https://d22tgksh1zpp6f.cloudfront.net/OnlineDocs/managed/4310b574-e091-4a31-894e-e07230f09b61/1.pdf'
                target='_blank'
                rel='noopener noreferrer'
                download
              >
                Audit Report
              </a>
            </Button>
            <Button
              asChild
              size='lg'
              className='flex items-center gap-2 bg-[#41ffca] px-6 text-base font-bold text-black hover:bg-[#41ffca]/90'
            >
              <a
                href='https://d22tgksh1zpp6f.cloudfront.net/OnlineDocs/managed/87396ffb-d975-4755-b98a-be7ef98e438e/1.pdf'
                target='_blank'
                rel='noopener noreferrer'
                download
              >
                White Paper
              </a>
            </Button>
          </div>
          <div className='text-gray-30 space-y-4'>
            <p>
              The City Controller’s Office conducted a performance audit of the
              City of Los Angeles’ Citywide risk management practices to prevent
              harm and liabilities. The City’s failure to establish an effective
              citywide risk management system has left taxpayers paying $1.03
              billion in liability compensation between FY 2020 - FY 2025. The
              Los Angeles Police Department (LAPD) and the Bureau of Street
              Services (StreetsLA) account for more than 56% of the $1.03
              Billion of liability payouts.
            </p>
            <p>
              The audit covers fiscal years 2020-2025: July 1, 2019 - June 30,
              2025.
            </p>
            <p>
              Additionally, the Office also released a supplemental white paper
              that provides information on alternative risk financing methods
              that the City could consider.{' '}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='relative hidden flex-1 items-center justify-center pt-20 lg:flex'
        >
          {/* Extra padding on the right and bottom leaves room for the overlapping image */}
          <div className='relative w-[420px] pb-20 pr-20'>
            {/* Main cover: full image, no cropping */}
            <img
              src='/images/riskmanagement7.jpg'
              alt='Performance Audit of Citywide Risk Management report cover'
              className='h-auto w-full shadow-2xl'
            />

            {/* Smaller cover layered on top, bottom-right */}
            <img
              src='/images/riskfinance-cover.jpg'
              alt='Risk Financing Options white paper cover'
              className='absolute bottom-0 right-0 h-auto w-[48%] shadow-2xl ring-1 ring-gray-900'
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
