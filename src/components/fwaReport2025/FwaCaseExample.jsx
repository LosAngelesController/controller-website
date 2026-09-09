import { motion } from 'framer-motion';

const FwaCaseExample = () => {
  return (
    <section className='bg-[#1a1a1a] py-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-12 text-4xl font-extrabold text-[#41ffca] sm:text-5xl'>
            CASE EXAMPLE
          </h2>

          {/* Case Description */}
          <div className='space-y-6 text-lg font-bold leading-relaxed text-[#41ffca] sm:text-xl md:space-y-8 md:text-2xl'>
            <p>
              In July 2024, we received a hotline tip alleging contractor fraud
              at an Inside Safe interim housing site. Specifically, residents
              alleged that the contractor (Abundant Blessings) was failing to
              meet its contractual obligations to provide meals and other
              services. We quickly inspected the location, interviewed residents
              and staff, and conducted a formal investigation into allegations
              of contractor fraud.{' '}
              <b className='text-white'>
                These efforts culminated in a January 2026 federal indictment of
                the contractor’s CEO, Alexander Soofer, who was charged with
                fraudulently obtaining $23 million in public money intended to
                combat homelessness.
              </b>
            </p>
            <p>
              See January 2026{' '}
              <a
                href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/FWA-Statement.pdf?alt=media&token=a79d44ba-407b-4ca9-846e-ce964a7d2d58'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-blue-300'
              >
                press release
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FwaCaseExample;
