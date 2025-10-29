import { motion } from 'framer-motion';
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
            RECOMMENDATIONS
          </h2>

          <div className='grid grid-cols-1 items-stretch gap-x-20 lg:grid-cols-2'>
            <ul className='space-y-6 pr-4 text-[#41ffca] list-none'>
              <li className='relative pl-8 text-xl leading-relaxed before:absolute before:left-0 before:top-2.5 before:h-3 before:w-3 before:rounded-full before:bg-[#41ffca]'>
                The City should assess the feasibility of revising TAHO to provide
                LAHD with the authority to independently issue administrative
                citations and fines.
              </li>

              <li className='relative pl-8 text-xl leading-relaxed before:absolute before:left-0 before:top-2.5 before:h-3 before:w-3 before:rounded-full before:bg-[#41ffca]'>
                The City should assess the feasibility of increasing citation fine
                amounts for TAHO violations.
              </li>

              <li className='relative pl-8 text-xl leading-relaxed before:absolute before:left-0 before:top-2.5 before:h-3 before:w-3 before:rounded-full before:bg-[#41ffca]'>
                City Council should consider increasing the maximum civil penalty
                amount for TAHO violations.
              </li>

              <li className='relative pl-8 text-xl leading-relaxed before:absolute before:left-0 before:top-2.5 before:h-3 before:w-3 before:rounded-full before:bg-[#41ffca]'>
                City Council should consider amending TAHO language to guarantee the
                awarding of additional civil penalties to prevailing tenants that are
                older than 65 or that have disabilities.
              </li>

              <li className='relative pl-8 text-xl leading-relaxed before:absolute before:left-0 before:top-2.5 before:h-3 before:w-3 before:rounded-full before:bg-[#41ffca]'>
                LAHD should establish formal policies and procedures for managing
                TAHO cases.
              </li>

              <li className='relative pl-8 text-xl leading-relaxed before:absolute before:left-0 before:top-2.5 before:h-3 before:w-3 before:rounded-full before:bg-[#41ffca]'>
                LAHD should provide formal training on TAHO for housing
                investigators.
              </li>

              <li className='relative pl-8 text-xl leading-relaxed before:absolute before:left-0 before:top-2.5 before:h-3 before:w-3 before:rounded-full before:bg-[#41ffca]'>
                LAHD should hire additional housing investigators.
              </li>

              <li className='relative pl-8 text-xl leading-relaxed before:absolute before:left-0 before:top-2.5 before:h-3 before:w-3 before:rounded-full before:bg-[#41ffca]'>
                LAHD should develop a tracking and enforcement protocol that will
                allow the department to identify and track rental units which become
                vacant due to confirmed violations of TAHO.
              </li>
            </ul>

            <div className='mt-12 lg:mt-[-90px]'>
              <div className='sticky top-4 rounded-lg bg-[#2a2a2a] p-8'>
                <h3 className='mb-2 text-2xl font-bold text-[#41ffca]'>
                  TAHO COMPLAINT SUBMISSIONS
                </h3>
                <p className='mb-1 text-[#41ffca]'>BY COUNCIL DISTRICT</p>
                <p className='mb-8 text-gray-400'>FEB 2022 - DEC 2023</p>

                <img
                  src='/taho-cd-map.png'
                  alt='Color-shaded map of Los Angeles City Council districts showing the share of TAHO complaints (Feb 2022–Dec 2023). Dark red marks CD 10 and 13 at 12 percent. Medium red marks CD 1, 8, 9, and 14 at 8–9 percent. Medium pink marks CD 2, 3, 4, 5, 6, 11, and 15 at 4–7 percent. Light pink marks CD 7 and 12 at 2 percent.'
                  className='h-auto w-full rounded-md'
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
