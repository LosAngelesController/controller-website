const findings = [
  {
    stat: '1 in 4',
    label: 'BEDS UNUSED',
    description:
      'costing taxpayers an estimated $218 million between FY 2019–FY 2023.',
    boldStart: '1 in 4 City-funded interim housing beds went unused',
  },
  {
    stat: '1 in 3',
    label: "COULDN'T SECURE A BED",
    description:
      'during FY22 and FY23. (16,000 people were removed from the shelter bed waiting list after an average of six months.)',
    boldStart:
      'Nearly 1 in 3 people who expressed interest in a shelter bed were unable to secure one',
  },
  {
    stat: '50%+',
    label: 'RETURNED TO HOMELESSNESS',
    description: 'or unknown destinations.',
    boldStart:
      'More than 50% of people exiting City-funded interim housing returned to homelessness',
  },
  {
    stat: '<20%',
    label: 'SECURED PERMANENT HOUSING',
    description: '',
    boldStart:
      'Less than 1 in 5 people in City-funded interim housing secured permanent housing.',
  },
];

const KeyFindingsSection = () => {
  return (
    <section className='bg-background bg-[#d6d6d6] px-6 py-20 dark:bg-[#212121]'>
      <div className='container mx-auto max-w-6xl'>
        {/* Title */}
        <h2 className='text-foreground mb-14 text-5xl font-extrabold dark:text-white'>
          KEY FINDINGS
        </h2>

        <div className='space-y-12'>
          {findings.map((finding, index) => (
            <div
              key={index}
              className='flex flex-col gap-6 lg:flex-row lg:items-start'
            >
              {/* Left content */}
              <div className='flex flex-1 items-start gap-4'>
                {/* Teal bullet */}
                <div
                  className='mt-2 h-2 w-2 flex-shrink-0 rounded-full'
                  style={{ backgroundColor: '#41ffca' }}
                />

                <p className='text-foreground leading-relaxed dark:text-white'>
                  <span className='font-semibold'>{finding.boldStart}</span>
                  {finding.description && (
                    <span className='text-foreground/80 dark:text-white'>
                      {' '}
                      {finding.description}
                    </span>
                  )}
                </p>
              </div>

              {/* Stat card */}
              <div className='flex-shrink-0 lg:w-48'>
                <div
                  className='bg-muted border-border rounded-xl
                  border p-6
                  text-center dark:border-white/10 dark:bg-[#0f1416]'
                >
                  <p
                    className='text-4xl font-extrabold leading-none'
                    style={{ color: '#41ffca' }}
                  >
                    {finding.stat}
                  </p>
                  <p
                    className='text-muted-foreground mt-3 text-xs uppercase
                    tracking-wider dark:text-white/60'
                  >
                    {finding.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFindingsSection;
