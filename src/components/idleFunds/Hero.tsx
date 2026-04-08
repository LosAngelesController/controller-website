import { motion, useReducedMotion } from 'framer-motion';
import { Download } from 'lucide-react';

import { Button } from '../taho/ui/button';

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby='hero-heading'
      className='relative mb-12 flex min-h-screen items-center overflow-hidden bg-[#1a1a1a]'
    >
      <div className='container mx-auto flex max-w-7xl flex-col items-start gap-20 px-4 lg:flex-row'>
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={reduceMotion ? undefined : { duration: 0.7 }}
          className='z-10 flex-1 pt-20 text-left'
        >
          <h1
            id='hero-heading'
            className='mb-4 flex-wrap text-[2rem] font-bold uppercase leading-none tracking-tight text-[#41ffca] sm:text-[2rem] md:text-[3rem]'
          >
            Leveraging Idle Special Funds 2026
          </h1>

          <div className='mb-8 flex space-x-4'>
            <Button
              asChild
              size='lg'
              className='flex items-center gap-2 bg-[#41ffca] px-6 text-base font-medium text-black hover:bg-[#41ffca]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#41ffca] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]'
            >
              <a
                href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/reports%2FSpecial%20Funds%20Report%204-8-26%20FINAL%20clean%20PRINT.pdf?alt=media&token=bd269ea8-f1c9-4878-a496-1c3ea9be1420'
                target='_blank'
                rel='noopener noreferrer'
                download
                type='application/pdf'
                aria-label='Download report (PDF, opens in a new tab)'
              >
                <Download className='h-4 w-4' aria-hidden='true' />
                <span>Download Report (PDF)</span>
                <span className='sr-only'>, opens in a new tab</span>
              </a>
            </Button>
          </div>

          <p className='mb-8 text-gray-300 md:text-xl'>
            The Controller’s Office identified{' '}
            <strong className='text-[#41ffca]'>
              $80.4 million sitting idle
            </strong>{' '}
            in 177 special funds, out of the City’s total 612 special funds.{' '}
            <strong className='text-[#41ffca]'>
              Idle funds are funds with no activity for at least two years.
            </strong>{' '}
            This report analyzes special funds as of June 30, 2025.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={reduceMotion ? undefined : { duration: 0.7 }}
          className='relative hidden flex-1 items-center justify-center pt-20 lg:flex'
        >
          <div className='relative h-[600px] w-[500px]'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Report%20Images%2Fidlefunds2026.jpg?alt=media&token=18a9cab7-6194-4107-89c6-797178461163'
              alt='Cover of Leveraging Idle Special Funds 2026 report'
              width={500}
              height={600}
              loading='lazy'
              decoding='async'
              className='h-full w-full rounded-lg object-cover'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
