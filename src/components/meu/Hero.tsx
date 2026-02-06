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
            className='mb-4 flex-wrap text-[2rem] font-bold uppercase leading-none tracking-tight dark:text-[#41ffca] sm:text-[2rem]'
          >
            On The Sideline: Assessing LAPD's Mental Evaluation Unit & Smart
            Co-Response Model
          </h1>

          <div className='mb-8 flex space-x-4'>
            <Button
              asChild
              size='lg'
              className='flex items-center gap-2 bg-[#41ffca] px-6 text-base font-medium text-black hover:bg-[#41ffca]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#41ffca] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]'
            >
              <a
                href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/LAPD%20MEU%20Assessment_2025-10-24_FINAL.pdf?alt=media&token=a7028b5d-2cca-4a43-84c9-0abf6bedbd53'
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

          <p className='mb-8 text-gray-300'>
            Our Office conducted an assessment of the LAPD’s MEU to evaluate the
            efficiency and effectiveness of the department’s response to mental
            health-related calls. We covered MEU operations and incident data
            from 2020–2022 and MEU use of force incidents from 2021–2024; we
            reviewed applicable legal frameworks, policies, and training
            protocols; we observed mental health training sessions; and we rode
            along with MEU units.
          </p>
          <p className='text-gray-300'>
            We focused our review on the MEU’s Systemwide Mental Assessment
            Response Team (SMART) program, which dispatches with patrol to
            mental health calls involving people who may be violent, armed,
            high-risk, or otherwise involved in a critical incident.
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
              src='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Report%20Images%2Fmeu%2FLAPD-MEU-cover.jpg?alt=media&token=d439b22f-0f6b-4a59-ae63-37dc3c02fe46'
              alt='Cover of the LAPD Mental Evaluation Unit (MEU) assessment report'
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
