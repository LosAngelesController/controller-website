'use client';

import React from 'react';
import { useState } from 'react';

export default function FiftyK() {
  const [LAEmployees] = useState([
    {
      id: 1,
      cityOfLA: 'NO',
      payGreater50K: 'YES',
      noOfEmployees: 25716,
      percentOfGroup: 0.802,
      totalPayroll: 3513156405,
      percentOfTotalPayroll: 0.9665,
    },
    {
      id: 2,
      cityOfLA: 'NO',
      payGreater50K: 'NO',
      noOfEmployees: 6350,
      percentOfGroup: 0.198,
      totalPayroll: 121934203,
      percentOfTotalPayroll: 0.0335,
    },
    {
      id: 3,
      cityOfLA: 'YES',
      payGreater50K: 'YES',
      noOfEmployees: 9238,
      percentOfGroup: 0.5063,
      totalPayroll: 1052846656,
      percentOfTotalPayroll: 0.8835,
    },
    {
      id: 4,
      cityOfLA: 'YES',
      payGreater50K: 'NO',
      noOfEmployees: 9008,
      percentOfGroup: 0.4937,
      totalPayroll: 138883612,
      percentOfTotalPayroll: 0.1165,
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
              borderBottom: 'none',           // avoid double line with thead
              backgroundColor: '#41ffca',
              captionSide: 'top'
            }}
          >
            City Employees Making More Than $50K
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
                Paid More Than $50K
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
                  {row.payGreater50K}
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
