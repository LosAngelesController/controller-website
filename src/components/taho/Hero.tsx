import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

import { Button } from './ui/button';

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
          <h1 className='mb-2 text-[4rem] font-bold leading-none tracking-tight text-[#41ffca] sm:text-[5rem]'>
            TAHO AUDIT
          </h1>
          <p className='mb-8 max-w-2xl text-xl text-gray-300'>
            Audit of the City's Implementation of the
            <br />
            Tenant Anti-Harassment Ordinance
          </p>

          <div className='mb-8 flex space-x-4'>
            <a
              href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/audits%2FImplementation%20of%20TAHO_FINAL_4.3.25.pdf?alt=media&token=3f7910e9-afe4-423a-818a-609690e97897'
              target='_blank'
              rel='noopener noreferrer'
              download
            >
              <Button
                size='lg'
                className='flex items-center gap-2 bg-[#41ffca] px-6 text-base font-medium text-black hover:bg-[#41ffca]/90'
              >
                <Download className='h-4 w-4' />
                Download Report
              </Button>
            </a>
          </div>

          <p className='mb-8 text-gray-300'>
            TAHO applies to all rental properties in the City and prohibits
            landlords from engaging in harassing actions directed towards
            tenants.
          </p>

          <div className='mb-8'>
            <p className='mb-4 text-lg font-semibold text-[#41ffca]'>
              Examples of Tenant Harassment
            </p>
            <ul className='list-none space-y-2 text-gray-300'>
              <li className='flex items-start gap-2'>
                <span className='text-[#41ffca]'>•</span>
                <span>Threatening physical harm</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-[#41ffca]'>•</span>
                <span>Reducing housing services</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-[#41ffca]'>•</span>
                <span>Withholding repairs</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-[#41ffca]'>•</span>
                <span>Evicting based on false reasons</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-[#41ffca]'>•</span>
                <span>Interfering with habitability</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-[#41ffca]'>•</span>
                <span>Abusing right to access unit</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-[#41ffca]'>•</span>
                <span>Asking a tenant's immigration/citizenship status</span>
              </li>
            </ul>
          </div>

          <p className='text-sm text-gray-400'>
            Learn more at:{' '}
            <a
              href='https://housing.lacity.gov/residents/tenant-anti-harassment'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#41ffca] underline hover:text-[#41ffca]/80'
            >
              housing.lacity.gov/residents/tenant-anti-harassment
            </a>
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
              src='/taho-cover.png'
              alt='TAHO Report Cover'
              className='h-full w-full rounded-lg object-cover'
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
