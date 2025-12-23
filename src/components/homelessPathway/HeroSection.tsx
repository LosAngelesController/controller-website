import { Download } from 'lucide-react';

import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      className='flex min-h-[80vh] items-center bg-white px-6 
      py-20 dark:bg-[#0f1212]'
    >
      <div className='container mx-auto max-w-6xl'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <div className='animate-slide-up space-y-8'>
            <h1 className='hero-title text-gray-900 dark:text-white'>
              HOMELESSNESS AUDIT:
              <br />
              <span className='text-[#41ffca]'>
                PATHWAYS TO PERMANENT HOUSING
              </span>
            </h1>

            <p
              className='max-w-xl text-lg leading-relaxed
              text-gray-700 dark:text-gray-300'
            >
              Performance audit of LAHSA's and the City of Los Angeles's
              performance transitioning people from interim housing to permanent
              housing. The audit covers City-funded interim housing sites over a
              5-year scope period, Fiscal Years 2019–2023.
            </p>

            <Button
              size='lg'
              className='
                gap-2 bg-[#41ffca] 
                font-semibold text-black 
                shadow-md
                hover:bg-[#35e6b8]
              '
              onClick={() =>
                window.open(
                  'https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/PH%20Pathways_LAHSA%20Final_12.10.2024.pdf?alt=media&token=0f6681b8-a28b-44ed-8bfa-e040fd2a127f',
                  '_blank'
                )
              }
            >
              <Download className='h-5 w-5' />
              Download Report
            </Button>
          </div>

          <img
            src='/pathwayscover.jpg'
            alt='Homelessness Audit: Pathways to Permanent Housing cover'
            className='
              h-auto w-full rounded-lg shadow-2xl
              ring-1 ring-black/5 dark:ring-white/10
            '
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
