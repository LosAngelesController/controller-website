const recommendations = [
  'Develop a formal policy for how City offices reserve beds',
  'Establish data quality standards to ensure that beds are reported accurately',
  'Develop performance-based incentives',
  'Develop ways to promptly identify underperformance',
  'Develop a formal corrective action policy to deal with underperformance',
  'More housing navigators',
  'Monitor more types of outcomes for people',
  'Improve group shelters to provide more privacy & comfort',
];

const RecommendationsSection = () => {
  return (
    <section className='bg-background bg-[#d6d6d6] px-6 py-20 dark:bg-[#212121]'>
      <div className='container mx-auto max-w-6xl'>
        {/* Title */}
        <h2 className='text-foreground mb-6 text-5xl font-extrabold dark:text-white'>
          RECOMMENDATIONS
        </h2>

        {/* Intro */}
        <p className='text-muted-foreground mb-12 max-w-3xl text-lg dark:text-white/70'>
          Recommendations are in addition to — not in place of — building more
          permanent housing.
          <span className='font-semibold' style={{ color: '#41ffca' }}>
            {' '}
            The most critical solution for homelessness is more permanent
            housing.
          </span>
        </p>

        {/* List */}
        <div className='max-w-3xl space-y-5'>
          {recommendations.map((rec, index) => (
            <div key={index} className='flex items-start gap-4'>
              {/* Teal bullet */}
              <div
                className='mt-2 h-2 w-2 flex-shrink-0 rounded-full'
                style={{ backgroundColor: '#41ffca' }}
              />

              {/* Text */}
              <p className='text-foreground leading-relaxed dark:text-white'>
                {rec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
