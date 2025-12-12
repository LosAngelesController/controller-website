import { Brain, Briefcase, Home, MessageCircle, Users } from 'lucide-react';

const factors = [
  { icon: Users, title: 'Consistent Case Management' },
  { icon: MessageCircle, title: 'Communicative Case Management' },
  { icon: Home, title: 'Housing Navigation' },
  { icon: Brain, title: 'Mental Health Services' },
  { icon: Briefcase, title: 'Job Training' },
];

const SuccessFactorsSection = () => {
  return (
    <section className='bg-background dark:bg-secondary px-6 py-20'>
      <div className='container mx-auto max-w-6xl'>
        {/* Header */}
        <div className='mb-14 max-w-3xl'>
          <h2
            className='text-foreground mb-4 text-4xl font-extrabold leading-tight
            dark:text-white md:text-5xl'
          >
            HOW WERE PEOPLE{' '}
            <span style={{ color: '#41ffca' }}>SUCCESSFULLY HOUSED?</span>
          </h2>

          <p className='text-muted-foreground text-lg dark:text-white/70'>
            People who were successfully housed were most impacted by high
            quality service and resources that bring stability.
          </p>
        </div>

        {/* Cards */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-5'>
          {factors.map((factor, index) => (
            <div
              key={index}
              className='
                bg-muted border-border hover:border-border/70 rounded-xl border
                p-8 text-center
                transition-all duration-300 dark:border-white/10
                dark:bg-[#0f1416] dark:hover:border-white/20
              '
            >
              {/* Icon */}
              <div
                className='mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full'
                style={{ backgroundColor: 'rgba(65, 255, 202, 0.12)' }}
              >
                <factor.icon className='h-7 w-7' style={{ color: '#41ffca' }} />
              </div>

              {/* Title */}
              <h3
                className='text-foreground text-lg font-semibold
                leading-snug dark:text-white'
              >
                {factor.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessFactorsSection;
