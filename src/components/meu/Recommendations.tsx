import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const Recommendations = () => {
  return (
    <section className='bg-[#1a1a1a] py-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-12 text-3xl font-bold text-[#41ffca] sm:text-5xl'>
            KEY RECOMMENDATIONS
          </h2>

          <div className='grid grid-cols-1 items-stretch gap-x-20 lg:grid-cols-2'>
            <div className='space-y-6 pr-4 text-[#41ffca]'>
              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-base leading-relaxed'>
                  The LAPD should revise its policies and procedures to allow
                  for SMART teams to take control of certain incidents involving
                  people with mental illness or experiencing a mental health
                  crisis. Specifically,{' '}
                  <strong>
                    SMART teams should lead the LAPD response to mental
                    health-related calls which do not involve weapons
                  </strong>
                  .
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-base leading-relaxed'>
                  The LAPD should{' '}
                  <strong>
                    develop a method to track and measure the impact that MEU
                    has on mental health related incidents
                  </strong>{' '}
                  where SMART is dispatched and on use of force incidents.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-base leading-relaxed'>
                  To ensure that MEU officers are updated on evolving standards
                  and best practices, LAPD should require additional training
                  and refresher courses of all MEU officers.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-base leading-relaxed'>
                  The LAPD should{' '}
                  <strong>
                    revise its Use of Force, De-Escalation, and Mental
                    Health-related policies
                  </strong>{' '}
                  to reflect best practices and ensure LAPD officers are better
                  equipped to handle mental health calls.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-base leading-relaxed'>
                  The LAPD should work with the LA County Department of Mental
                  Health to{' '}
                  <strong>
                    reevaluate the roles that mental health clinicians play in
                    MEU so that they can be deployed with SMART units in more
                    efficient or expanded ways
                  </strong>{' '}
                  to make better use of their clinical skills.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-base leading-relaxed'>
                  The City Council and Mayor should continue to{' '}
                  <strong>
                    support and fund the Unarmed Model of Crisis Response
                  </strong>{' '}
                  pilot through its multi-year plan, and should consider
                  expanding the program if the pilot demonstrates successful
                  alternatives to armed responses for mental health crises.
                </p>
              </div>
            </div>

            <div className='mt-12 flex flex-col items-center justify-center rounded-lg bg-[#212121] md:mx-12 md:gap-12 lg:mt-0'>
              <div className='p-8'>
                <div className='mb-2 text-5xl font-extrabold text-[#41ffca] md:text-6xl'>
                  63%
                </div>
                <div className='text-base font-extrabold uppercase text-[#41ffca] md:text-lg'>
                  of LAPD contacts with people believed to be experiencing a
                  mental health crisis or suffering from mental illness were
                  Black or Hispanic
                </div>
              </div>

              <div className='p-8'>
                <div className='mb-2 text-5xl font-extrabold text-[#41ffca] md:text-6xl'>
                  33%
                </div>
                <div className='text-base font-extrabold uppercase text-[#41ffca] md:text-lg'>
                  of LAPD contacts involving mental health disorders or events
                  also involved people believed to be experiencing homelessness
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
