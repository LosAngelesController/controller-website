'use client';

import React from 'react';
import { useState } from 'react';

export default function CD() {
  const [LAEmployees] = useState([
    {
      id: 1,
      cd: 1,
      noOfEmployees: 1303,
      totalPayroll: 66678213,
    },
    {
      id: 2,
      cd: 2,
      noOfEmployees: 910,
      totalPayroll: 54961671,
    },
    {
      id: 3,
      cd: 3,
      noOfEmployees: 935,
      totalPayroll: 66364079,
    },
    {
      id: 4,
      cd: 4,
      noOfEmployees: 843,
      totalPayroll: 60431772,
    },
    {
      id: 5,
      cd: 5,
      noOfEmployees: 531,
      totalPayroll: 37761477,
    },
    {
      id: 6,
      cd: 6,
      noOfEmployees: 1075,
      totalPayroll: 58384133,
    },
    {
      id: 7,
      cd: 7,
      noOfEmployees: 1838,
      totalPayroll: 129734888,
    },
    {
      id: 8,
      cd: 8,
      noOfEmployees: 1664,
      totalPayroll: 95900964,
    },
    {
      id: 9,
      cd: 9,
      noOfEmployees: 879,
      totalPayroll: 38564640,
    },
    {
      id: 10,
      cd: 10,
      noOfEmployees: 1317,
      totalPayroll: 76359934,
    },
    {
      id: 11,
      cd: 11,
      noOfEmployees: 828,
      totalPayroll: 70629156,
    },
    {
      id: 12,
      cd: 12,
      noOfEmployees: 1607,
      totalPayroll: 149554159,
    },
    {
      id: 13,
      cd: 13,
      noOfEmployees: 1167,
      totalPayroll: 64958330,
    },
    {
      id: 14,
      cd: 14,
      noOfEmployees: 1858,
      totalPayroll: 111557608,
    },
    {
      id: 15,
      cd: 15,
      noOfEmployees: 1491,
      totalPayroll: 109889245,
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
              borderBottom: 'none',        // avoids double border with thead
              backgroundColor: '#41ffca',
              captionSide: 'top'
            }}
          >
            Payroll Employee Analysis by Council District
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
                CD#
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
                Total Payroll
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
                  {row.cd}
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
                  ${row.totalPayroll.toLocaleString()}
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
                18,246
              </td>
              <td
                className='sm:p1 font-bold text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                $1,191,730,268
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
