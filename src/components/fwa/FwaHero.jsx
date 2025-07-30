import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

import { Button } from '../ui/button';

const FwaHero = () => {
  return (
    <div className='relative mb-12 flex min-h-screen items-center overflow-hidden bg-[#1a1a1a]'>
      <div className='container mx-auto flex max-w-7xl flex-col items-start gap-20 px-4 lg:flex-row'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='z-10 flex-1 pt-20 text-left'
        >
          <h1 className='mb-2 text-[3rem] font-bold leading-none tracking-tight text-[#41ffca] sm:text-[5rem]'>
            FWA ANNUAL REPORT
          </h1>
          <p className='mb-8 max-w-2xl text-xl text-gray-100'>
            2024 Annual Report of the City Controller’s Fraud, Waste, & Abuse
            Unit
          </p>

          <div className='mb-8 flex flex-wrap gap-4'>
            <a
              href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/FINAL%20-%20FWA_Annual_Report_2024%20-%2006272025-2.pdf?alt=media&token=f470ed0f-93d5-49f7-933d-40725568a5a1'
              target='_blank'
              rel='noopener noreferrer'
              download
            >
              <Button
                size='lg'
                className='flex items-center gap-2 bg-[#41ffca] px-6 text-base font-medium text-black hover:bg-[#41ffca]/90'
              >
                <Download className='h-4 w-4' />
                Download Report (2.4 MB)
              </Button>
            </a>
          </div>

          <p className='max-w-xl text-base text-gray-100 md:text-lg'>
            The Office of the City Controller’s Fraud, Waste, and Abuse (FWA)
            Unit was established to identify and stop losses of City resources
            and to act as a deterrent to fraud, waste, and abuse in City
            government.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='relative hidden flex-1 items-center justify-center pt-20 lg:flex'
        >
          <div className='relative h-[600px] w-[500px]'>
            <img
              src='/fwa-annualreport2024.png'
              alt='FWA Report Cover'
              className='h-full w-full rounded-lg object-cover'
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FwaHero;
