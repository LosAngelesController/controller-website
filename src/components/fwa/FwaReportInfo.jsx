import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const FwaReportInfo = () => {
  return (
    <section className={`${poppins.className} bg-[#41ffca] py-20`}>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
            {/* Info Section */}
            <div className='space-y-6 text-lg leading-relaxed text-black'>
              <h2 className='text-4xl font-extrabold sm:text-5xl'>REPORT:</h2>
              <ul className='list-inside list-disc py-6 pl-2 text-3xl font-extrabold text-black sm:text-4xl'>
                <li>Waste</li>
                <li>Theft</li>
                <li>Fraud</li>
              </ul>
              <div>
                <h3 className='mb-2 text-xl font-extrabold text-black sm:text-2xl'>
                  LA City Controller's Fraud Hotline:
                </h3>

                <ul className='list-inside list-disc pl-2 font-extrabold text-black sm:text-xl md:text-2xl'>
                  <li>
                    <a href='tel:8664281514'>(866) 428-1514</a>
                  </li>
                  <li>
                    <a
                      href='https://controller.lacity.gov/fwa'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-blue-600 hover:underline'
                    >
                      bit.ly/controllerfwa
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Mascot Image */}
            <div className='flex justify-center'>
              <Image
                src='/sherlockcorgi.png'
                alt='FWA corgi mascot'
                width={500}
                height={380}
                className='object-contain'
              />
            </div>
          </div>
          <div className='mt-10 text-lg font-extrabold text-black sm:text-xl md:text-2xl'>
            <p>
              Available 24 hours a day, 365 days a year. Reports may be made
              discretely and anonymously.
            </p>
            <p></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FwaReportInfo;
