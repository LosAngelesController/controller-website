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
            RECOMMENDATIONS
          </h2>

          <div className='text-[#41ffca]'>
            <ul className='space-y-7 sm:text-xl'>
              <div className='flex items-center gap-4'>
                <Circle className='h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <li>
                  Short-Term: Use funds or transfer to Reserve Fund as soon as
                  possible
                </li>
              </div>
              <ul className='ml-12 list-[circle] space-y-2 text-gray-300'>
                <li>
                  Explore the feasibility of tapping the idle funds under the
                  control of each department, as a one-time source of funding
                  for the upcoming FY 2026-27 budget season
                </li>
                <li>
                  Repay Reserve Fund loans owed by idle funds with adequate
                  available balances to cover their loans
                </li>
                <li>
                  Initiate the escheatment process for old, dormant, and
                  inactive funds, to enable transfers to the Reserve Fund
                </li>
                <li>
                  Develop spending plans to program or reallocate available
                  balances in idle funds determined not eligible for transfer to
                  the Reserve Fund
                </li>
              </ul>
              <div className='flex items-center gap-4'>
                <Circle className='h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <li>
                  Long-term: Reduce the number of Idle Special Funds through
                  policy change
                </li>
              </div>
              <ul className='ml-12 list-[circle] space-y-2 text-gray-300'>
                <li>
                  Develop a policy for automatically disencumbering Idle Fund
                  encumbrances three years or older
                </li>
                <li>
                  Consider a policy for incorporating a sunset clause for new
                  Special Funds, after which any remaining funds could be
                  transferred to the Reserve Fund or be returned to originating
                  sources
                </li>
                <li>
                  Create a new Departmental Special Fund Creation Form to be
                  completed by Departments to summarize the intent and nature of
                  a new Special Fund being requested
                </li>
                <li>
                  Develop a policy to closeout expired and obsolete grant Idle
                  Funds, transfer any leftover funds to the Reserve Fund,
                  especially when insufficient documentation is available to
                  keep them open
                </li>
              </ul>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
