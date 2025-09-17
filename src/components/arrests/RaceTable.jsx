import * as React from 'react';

// Accessible reusable table for arrests by race
const RaceTable = ({ year, rows = [], grandTotal, labels }) => {
  const {
    caption,
    source,
    raceColumn,
    countColumn,
    percentColumn,
    grandTotal: grandTotalLabel,
  } = {
    caption: `LAPD Arrests by Race, ${year}`,
    source: 'Source of Data: Los Angeles Police Dept.',
    raceColumn: 'Race',
    countColumn: '# of Arrests',
    percentColumn: '% of Arrests',
    grandTotal: 'Grand Total',
    ...(labels ?? {}),
  };

  return (
    <figure className='w-full max-w-[400px] mx-auto md:mx-0'>
      <figcaption className='sr-only'>{caption}</figcaption>
      <table className='w-full border-collapse border border-black text-xs sm:text-sm md:text-base dark:border-white'>
        <caption className='mb-2 text-left font-bold dark:text-white'>
          {caption}
          <br />
          <span className='italic font-normal'>{source}</span>
        </caption>
        <thead>
          <tr>
            <th
              scope='col'
              className='bg-mejito border border-black px-2 py-1 text-left dark:border-[#2FA786] dark:ring-1 dark:ring-white'
            >
              {raceColumn}
            </th>
            <th
              scope='col'
              className='bg-mejito border border-black px-2 py-1 text-right dark:border-[#2FA786] dark:ring-1 dark:ring-white'
            >
              {countColumn}
            </th>
            <th
              scope='col'
              className='bg-mejito border border-black px-2 py-1 text-right dark:border-[#2FA786] dark:ring-1 dark:ring-white'
            >
              {percentColumn}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <th scope='row' className='border border-black px-2 py-1 text-left font-medium dark:border-white dark:text-white'>
                {r.label}
              </th>
              <td className='border border-black px-2 py-1 text-right dark:border-white dark:text-white'>
                {r.count ?? '—'}
              </td>
              <td className='border border-black px-2 py-1 text-right dark:border-white dark:text-white'>
                {r.pct ?? '—'}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th
              scope='row'
              className='bg-mejito border border-black px-2 py-1 text-left font-semibold text-black dark:border-[#2FA786] dark:text-black dark:ring-1 dark:ring-white'
            >
              {grandTotalLabel}
            </th>
            <td className='bg-mejito border border-black px-2 py-1 text-right font-semibold text-black dark:border-[#2FA786] dark:text-black dark:ring-1 dark:ring-white'>
              {grandTotal ?? '—'}
            </td>
            <td className='bg-mejito border border-black px-2 py-1 text-right font-semibold text-black dark:border-[#2FA786] dark:text-black dark:ring-1 dark:ring-white'>
              100%
            </td>
          </tr>
        </tfoot>
      </table>
    </figure>
  );
};

export default RaceTable;
