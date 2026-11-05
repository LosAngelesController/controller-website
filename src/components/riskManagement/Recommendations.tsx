import { motion } from 'framer-motion';

const recommendations = [
  'An updated Citywide risk management policy that clearly defines Citywide risk management roles and responsibilities to propose to the Mayor and City Council;',
  'Proper oversight of departments’ risk management;',
  'Access to the claim and litigation data it needs for risk assessment and reporting purposes',
  'Better practices for mitigating harm, reporting on risk management, and holding departments accountable for losses',
  'Better budgeting to fund liability claim payouts.',
  "Reassess the City's plan for funding large liability payouts and explore new financing strategies",
];

const payouts = [
  { year: '20', amount: 131821692.46 },
  { year: '21', amount: 89207632.13 },
  { year: '22', amount: 91516749.54 },
  { year: '23', amount: 175183901.31 },
  { year: '24', amount: 255790282.43 },
  { year: '25', amount: 282537732.55 },
];

const AXIS_MAX = 300_000_000;
const ticks = [300, 200, 100, 0]; // in millions

const formatDollars = (n: number) =>
  n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

const PayoutsChart = () => (
  <div className='rounded-xl bg-[#2a2a2a] p-6 sm:p-8'>
    <h3 className='mb-8 text-center text-2xl font-extrabold leading-tight text-[#41ffca] sm:text-3xl'>
      City of LA Liability Payouts by Fiscal Year
    </h3>

    {/* Visual chart (hidden from screen readers; the table below carries the data) */}
    <div className='flex gap-3' aria-hidden='true'>
      {/* Y-axis labels */}
      <div className='relative h-72 w-16 shrink-0 sm:w-24'>
        {ticks.map((t) => (
          <span
            key={t}
            className='absolute right-0 -translate-y-1/2 whitespace-nowrap text-sm font-bold text-[#41ffca] sm:text-lg'
            style={{ top: `${100 - (t / 300) * 100}%` }}
          >
            {t === 0 ? '$0' : `$${t} mil`}
          </span>
        ))}
      </div>

      <div className='flex-1'>
        {/* Plot area */}
        <div className='relative flex h-72 items-end gap-2 sm:gap-3'>
          {/* Faint gridlines */}
          {ticks
            .filter((t) => t > 0)
            .map((t) => (
              <div
                key={t}
                className='absolute inset-x-0 border-t border-white/10'
                style={{ top: `${100 - (t / 300) * 100}%` }}
              />
            ))}

          {payouts.map((p) => {
            const pct = (p.amount / AXIS_MAX) * 100;
            return (
              <div
                key={p.year}
                className='group relative flex h-full flex-1 items-end'
              >
                <div
                  className='w-full rounded-t bg-[#41ffca] transition-opacity group-hover:opacity-80'
                  style={{ height: `${pct}%` }}
                />
                {/* Hover tooltip */}
                <div
                  className='pointer-events-none absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-1.5 text-sm font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100'
                  style={{ bottom: `calc(${pct}% + 8px)` }}
                >
                  FY 20{p.year}: {formatDollars(p.amount)}
                </div>
              </div>
            );
          })}
        </div>

        {/* X-axis labels */}
        <div className='mt-2 flex gap-2 sm:gap-3'>
          {payouts.map((p) => (
            <div
              key={p.year}
              className='flex-1 text-center text-xs font-bold leading-tight text-[#41ffca] sm:text-sm'
            >
              FY
              <br />
              {p.year}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Accessible data table */}
    <table className='sr-only'>
      <caption>City of LA liability payouts by fiscal year</caption>
      <thead>
        <tr>
          <th scope='col'>Fiscal Year</th>
          <th scope='col'>Amount</th>
        </tr>
      </thead>
      <tbody>
        {payouts.map((p) => (
          <tr key={p.year}>
            <td>20{p.year}</td>
            <td>{formatDollars(p.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

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
          <h2 className='mb-6 text-3xl font-extrabold text-[#41ffca] sm:text-5xl'>
            KEY RECOMMENDATIONS
          </h2>

          <div className='grid grid-cols-1 items-start gap-x-12 gap-y-12 font-bold text-[#41ffca] lg:grid-cols-2'>
            <div>
              <p className='mb-6 text-lg leading-snug'>
                Our audit provides a number of recommendations to strengthen the
                City's risk management efforts and decrease liability costs,
                including:
              </p>

              <ul className='list-disc space-y-4 pl-6 text-lg leading-snug marker:text-[#41ffca]'>
                {recommendations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <PayoutsChart />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
