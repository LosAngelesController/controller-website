'use client';

import React from 'react';
import { useState } from 'react';

export default function HundredK() {
  const [LAEmployees] = useState([
    {
      id: 1,
      cityOfLA: 'NO',
      payGreater100K: 'NO',
      noOfEmployees: 13767,
      percentOfGroup: 0.4293,
      totalPayroll: 690709935,
      percentOfTotalPayroll: 0.19,
    },
    {
      id: 2,
      cityOfLA: 'NO',
      payGreater100K: 'YES',
      noOfEmployees: 18299,
      percentOfGroup: 0.5707,
      totalPayroll: 2944380673,
      percentOfTotalPayroll: 0.81,
    },
    {
      id: 3,
      cityOfLA: 'YES',
      payGreater100K: 'NO',
      noOfEmployees: 13335,
      percentOfGroup: 0.7308,
      totalPayroll: 461525658,
      percentOfTotalPayroll: 0.3873,
    },
    {
      id: 4,
      cityOfLA: 'YES',
      payGreater100K: 'YES',
      noOfEmployees: 4911,
      percentOfGroup: 0.2692,
      totalPayroll: 730204610,
      percentOfTotalPayroll: 0.6127,
    },
  ]);

  return (
    <div>
      <div className='overflow-x-auto bg-white p-2'>
        <table className='w-full table-auto'>
          <caption
            className='p-2 text-center text-xs font-bold text-black sm:text-sm md:text-base lg:text-lg'
            style={{
              border: '1px solid black',
              borderBottom: 'none',        // prevents double border with thead
              backgroundColor: '#41ffca',
              captionSide: 'top'
            }}
          >
            City Employees Making More Than $100K
          </caption>
          <thead
            className='text-xs text-black sm:text-xs md:text-sm lg:text-base'
            style={{ border: '1px solid black', backgroundColor: '#41ffca' }}
          >
            <tr>
              <th
                className='sm:p1 text-left text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
                scope="col"
              >
                Lived in City of LA
              </th>
              <th
                className='sm:p1 text-left text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
                scope="col"
              >
                Pay More Than $100K
              </th>
              <th
                className='sm:p1 text-left text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
                scope="col"
              >
                # of Employees
              </th>
              <th
                className='sm:p1 text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
                scope="col"
              >
                % of Group
              </th>
              <th
                className='sm:p1 text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
                scope="col"
              >
                Total Payroll
              </th>
              <th
                className='sm:p1 text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
                scope="col"
              >
                % of Group
              </th>
            </tr>
          </thead>
          <tbody
            className='text-xs text-black sm:text-xs md:text-sm lg:text-base'
            style={{ border: '1px solid black' }}
          >
            {LAEmployees.map((row) => (
              <tr key={row.id}>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {row.cityOfLA}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {row.payGreater100K}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {row.noOfEmployees.toLocaleString()}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {(row.percentOfGroup * 100).toFixed(2)}%
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  ${row.totalPayroll.toLocaleString()}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {(row.percentOfTotalPayroll * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
            <tr>
              <td
                className='sm:p1 font-bold text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                Grand Total
              </td>
              <td
                className='sm:p1 font-bold text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              ></td>
              <td
                className='sm:p1 font-bold text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                50,312
              </td>
              <td
                className='sm:p1 font-bold text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              ></td>
              <td
                className='sm:p1 font-bold text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                $4,826,820,876
              </td>
              <td
                className='sm:p1 font-bold text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
