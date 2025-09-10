'use client';

import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

export default function FairMarketRent() {
  const [fairMarket, setFairMarket] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/evictionNoticesAnalysisMonthly/fmr'
      )
      .then((response) => {
        const data = response.data.fmr;
        // console.log("rent owed", data);
        setFairMarket(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const fairMarketSum = () => {
    const notices = fairMarket.map((x) => x['#OfNotices']);
    // console.log("notices", notices);
    const total = notices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return total;
  };

  fairMarketSum();

  return (
    <div className='w-full overflow-x-auto'>
      <div className='min-w-5xl inline-block bg-white p-2'>
        <table className='w-full table-auto'>
          <caption
            className='text-3xl font-bold text-black p-2 text-center'
            style={{ border: '1px solid black', borderBottom: 'none', backgroundColor: '#41ffca' }}
          >
            Number of Eviction Notices – Rent Owed
            <br />
            Under the Fair Market Rent Limit
          </caption>
          <thead
            className='text-black'
            style={{ border: '1px solid black', backgroundColor: '#41ffca' }}
          >
            <tr>
              <th
                className='p-2 text-xl text-black'
                style={{ border: '1px solid black' }}
              >
                Bedroom Size
              </th>
              <th
                className='p-2 text-xl text-black'
                style={{ border: '1px solid black' }}
              >
                FY 2023
              </th>
              <th
                className='p-2 text-xl text-black'
                style={{ border: '1px solid black' }}
              >
                #≤FMR
              </th>
              <th
                className='p-2 text-xl text-black'
                style={{ border: '1px solid black' }}
              >
                FY 2024
              </th>
              <th
                className='p-2 text-xl text-black'
                style={{ border: '1px solid black' }}
              >
                #≤FMR
              </th>
              <th
                className='p-2 text-xl text-black'
                style={{ border: '1px solid black' }}
              >
                FY 2025
              </th>
              <th
                className='p-2 text-xl text-black'
                style={{ border: '1px solid black' }}
              >
                #≤FMR
              </th>
              <th
                className='p-2 text-xl text-black'
                style={{ border: '1px solid black' }}
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody className='text-black' style={{ border: '1px solid black' }}>
            {fairMarket.map((row) => (
              <tr key={row.id}>
                <td
                  className='p-2 text-xl font-bold text-black'
                  style={{ border: '1px solid black' }}
                >
                  {row.bedroomSize}
                </td>
                <td
                  className='p-2 text-center text-xl text-black'
                  style={{
                    border: '1px solid black',
                    backgroundColor: row.fy2023 ? 'transparent' : '#41ffca',
                  }}
                >
                  {row.fy2023 ? `$${Number(row.fy2023).toLocaleString()}` : ''}
                </td>

                <td
                  className='p-2 text-center text-xl text-black'
                  style={{ border: '1px solid black' }}
                >
                  {row['#fmr2023'].toLocaleString()}
                </td>
                <td
                  className='p-2 text-center text-xl text-black'
                  style={{
                    border: '1px solid black',
                    backgroundColor: row.fy2023 ? 'transparent' : '#41ffca',
                  }}
                >
                  {row.fy2024 ? `$${Number(row.fy2024).toLocaleString()}` : ''}
                </td>
                <td
                  className='p-2 text-center text-xl text-black'
                  style={{ border: '1px solid black' }}
                >
                  {row['#fmr2024'].toLocaleString()}
                </td>
                <td
                  className='p-2 text-center text-xl text-black'
                  style={{
                    border: '1px solid black',
                    backgroundColor: row.fy2023 ? 'transparent' : '#41ffca',
                  }}
                >
                  {row.fy2025 ? `$${Number(row.fy2025).toLocaleString()}` : ''}
                </td>
                <td
                  className='p-2 text-center text-xl text-black'
                  style={{ border: '1px solid black' }}
                >
                  {row['#fmr2025'].toLocaleString()}
                </td>
                <td
                  className='p-2 text-center text-xl text-black'
                  style={{ border: '1px solid black' }}
                >
                  {row.total?.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
          {/* <tbody className='text-black' style={{ border: '1px solid black' }}>
            <tr>
              <td className='p-2 text-xl font-bold text-black' colSpan={2}>
                Total
              </td>
              <td className='p-2 text-right text-xl font-bold'>
                {fairMarketSum().toLocaleString()}
              </td>
            </tr>
          </tbody> */}
        </table>
      </div>
    </div>
  );
}
