'use client';

import React from 'react';
import { useState } from 'react';

export default function Summary() {
  const [LAEmployees] = useState([
    {
      id: 1,
      cityOfLA: 'NO',
      noOfEmployees: 32066,
      percentOfEmployees: 0.6373,
      totalPayroll: 3635090608,
      percentOfTotalPayroll: 0.7531,
    },
    {
      id: 2,
      cityOfLA: 'YES',
      noOfEmployees: 18243,
      percentOfEmployees: 0.3627,
      totalPayroll: 1191730268,
      percentOfTotalPayroll: 0.2469,
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
                borderBottom: 'none',           // avoid double border with thead
                backgroundColor: '#41ffca',
                captionSide: 'top'
              }}
            >
              Summary
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
                # of Employees
              </th>
              <th
                className='sm:p1 text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
                scope="col"
              >
                % of Employees
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
                % of Total Payroll
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
                  {row.noOfEmployees.toLocaleString()}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {(row.percentOfEmployees * 100).toFixed(2)}%
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
              >
                50,312
              </td>
              <td
                className='sm:p1 font-bold text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                100.00%
              </td>
              <td
                className='sm:p1 font-bold text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                $4,826,820,876
              </td>
              <td
                className='sm:p1 font-bold text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                100.00%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
