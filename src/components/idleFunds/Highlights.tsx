import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const Highlights = () => {
  return (
    <section className='bg-[#41ffca] py-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-12 text-4xl font-bold text-black sm:text-5xl'>
            REPORT HIGHLIGHTS
          </h2>
          <p className='mb-4 text-black sm:text-xl'>
            Special Funds are different from the General Fund: Special Funds can
            only be used for specific purposes. (The General Fund can be used
            for anything.){' '}
            <strong>
              Special Funds sitting idle means that there are specific purposes
              that the City could have been spending on but wasn’t.
            </strong>
          </p>

          <p className='mb-7 text-black sm:text-xl'>
            The $80.4 million in unspent funds{' '}
            <b>can be spent for the following functions:</b>
          </p>

          <ul className='mb-7 ml-4 space-y-3 pr-4 text-black sm:text-xl'>
            <div className='flex items-center gap-4'>
              <Circle className='h-3 w-3 flex-shrink-0 fill-black' />
              <li>
                $11.9 million for <b>community safety</b>
              </li>
            </div>
            <div className='flex items-center gap-4'>
              <Circle className='h-3 w-3 flex-shrink-0 fill-black' />
              <li>
                $10.9 million for <b>economic development</b>
              </li>
            </div>
            <div className='flex items-center gap-4'>
              <Circle className='h-3 w-3 flex-shrink-0 fill-black' />
              <li>
                $9.7 million for <b>parks</b>
              </li>
            </div>
            <div className='flex items-center gap-4'>
              <Circle className='h-3 w-3 flex-shrink-0 fill-black' />
              <li>
                $9.5 million for <b>arts, culture, or tourism</b>
              </li>
            </div>
            <div className='flex items-center gap-4'>
              <Circle className='h-3 w-3 flex-shrink-0 fill-black' />
              <li>
                $7.8 million for <b>housing and homelessness</b>
              </li>
            </div>
            <div className='flex items-center gap-4'>
              <Circle className='h-3 w-3 flex-shrink-0 fill-black' />
              <li>
                $7.1 million for <b>streets</b>
              </li>
            </div>
            <div className='flex items-center gap-4'>
              <Circle className='h-3 w-3 flex-shrink-0 fill-black' />
              <li>
                $6.6 million for <b>sanitation and environment</b>
              </li>
            </div>
            <div className='flex items-center gap-4'>
              <Circle className='h-3 w-3 flex-shrink-0 fill-black' />
              <li>
                $5.7 million for <b>social services</b>
              </li>
            </div>
            <div className='flex items-center gap-4'>
              <Circle className='h-3 w-3 flex-shrink-0 fill-black' />
              <li>
                $4.3 million for <b>transportation</b>
              </li>
            </div>
            <div className='flex items-center gap-4'>
              <Circle className='h-3 w-3 flex-shrink-0 fill-black' />
              <li>
                $1.5 million for <b>public works</b>
              </li>
            </div>
            <div className='flex items-center gap-4'>
              <Circle className='h-3 w-3 flex-shrink-0 fill-black' />
              <li>
                $5.4 million for <b>"other"</b>
              </li>
            </div>
          </ul>

          <p className='text-xl text-black'>
            Previously, the Controller’s Office reported{' '}
            <a
              href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/financial%20reports%2FFinal_Special_Funds_Report-2023.pdf?alt=media&token=5e628268-7878-4ac4-8990-fe6aedf18abb'
              className='text-blue-700 underline'
            >
              $73 Million in idle funds, in 2023
            </a>
            . The Office was unable to provide an updated report in 2024 and
            2025 due to budget cuts and staffing shortages.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
