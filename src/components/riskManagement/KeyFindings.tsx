import { motion } from 'framer-motion';

const findings = [
  "No centralized risk management function in the CAO's Office with the direction or clear authority to oversee liability mitigation for the City",
  'The lack of quarterly reporting by the CAO on risk management activities required by law.',
  'No City department is really held accountable for the liability payouts assigned to them, including the LAPD which has the highest liability payout totals because there is no incentive or accountability for departments to keep liabilities under control when liability payments are budgeted and paid for centrally and not through departmental budgets',
  'No policy or framework exists that clearly defines responsibilities, guides decisions, and coordinates between City entities',
  'Corrective action reports to address the cause of a claim are incomplete and their implementation are not overseen at the Citywide level',
  "Reliability issues affect the usefulness of the City's liability claim data.",
  "Budgeting and planning for the City's liability payouts needs to be revamped.",
  'The City lacks a sound financial strategy to pay for large liability claims.',
];

const stats = [
  {
    value: '$1.03 Billion',
    label: 'in liability payouts, FY 2020-2025',
  },
  {
    value: 'Over 56%',
    label:
      'of FY 2020-2025 liability payouts are attributed to LAPD and StreetsLA',
  },
  {
    value: 'CAO & City Attorney',
    label:
      'The City’s centralized risk management responsibilities officially lie with the Office of the City Administrative Officer (CAO) and the City Attorney’s Office',
  },
];

const KeyFindings = () => {
  return (
    <section className='bg-[#41ffca] py-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-6 text-4xl font-extrabold text-black sm:text-5xl'>
            KEY FINDINGS
          </h2>

          <div className='grid grid-cols-1 gap-x-12 font-bold text-black lg:grid-cols-2'>
            {/* Row 1, left: intro sentence */}
            <p className='mb-6 text-lg'>
              The City has major gaps in its risk management practices,
              including:
            </p>

            {/* Row 2, left: the list */}
            <ul className='list-disc space-y-4 pl-6 text-lg leading-snug marker:text-black lg:row-start-2'>
              {findings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {/* Row 2, right: card stretches to exactly the list's height */}
            <div className='mt-10 flex flex-col justify-evenly gap-8 rounded-xl bg-[#a8f5d8] px-8 py-4 lg:col-start-2 lg:row-start-2 lg:mt-0 lg:py-8'>
              {stats.map((stat) => (
                <div key={stat.value}>
                  <div className='text-4xl font-extrabold leading-tight sm:text-5xl'>
                    {stat.value}
                  </div>
                  <div className='mt-1 text-lg leading-snug'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFindings;
