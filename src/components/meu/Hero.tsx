import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

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
          <h1 className='mb-4 flex-wrap text-[2rem] font-bold uppercase leading-none tracking-tight text-[#41ffca] sm:text-[2rem]'>
            On the Sideline: Assessing LAPD's Mental Health Response
          </h1>

          <div className='mb-8 flex space-x-4'>
            <a href='' target='_blank' rel='noopener noreferrer' download>
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
            Our Office conducted an assessment of the LAPD’s MEU to evaluate the
            efficiency and effectiveness of the department’s response to mental
            health-related calls. We covered MEU operations and incident data
            from 2020-2022 and MEU use of force incidents from 2021-2024; we
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
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='relative hidden flex-1 items-center justify-center pt-20 lg:flex'
        >
          <div className='relative h-[600px] w-[500px]'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Report%20Images%2Fmeu%2FLAPD-MEU-cover.png?alt=media&token=064a9093-6bef-4071-9050-b2d81763a319'
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
