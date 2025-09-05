'use client';

import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';


export default function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/2022PayrollEmployeeAnalysis/2Top20Cities'
      )
      .then((response) => {
        const data = response.data['2Top20Cities'];
        // console.log("cities", data);
        setCities(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <div>
      <div className='overflow-x-auto bg-white p-2'>
        <table className='w-full table-auto'>
          <caption
            className='p-2 text-center text-xs font-bold text-black sm:text-sm md:text-base lg:text-lg'
            style={{ border: '1px solid black', borderBottom: 'none', backgroundColor: '#41ffca', captionSide: 'top' }}
          >
            Top 20 Outside Cities
          </caption>
          <thead
            className='text-xs text-black sm:text-xs md:text-sm lg:text-base'
            style={{ border: '1px solid black', backgroundColor: '#41ffca' }}
          >
            <tr>
              <th
                scope="col"
                className='sm:p1 text-left text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                City
              </th>
              <th
                scole="col"
                className='sm:p1 text-left text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                # of Employees
              </th>
              <th
                scope="col"
                className='sm:p1 text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                Payroll Amount
              </th>
            </tr>
          </thead>
          <tbody
            className='text-xs text-black sm:text-xs md:text-sm lg:text-base'
            style={{ border: '1px solid black' }}
          >
            {cities.map((row) => (
              <tr key={row.id}>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {row.city}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {row['#OfEmployees'].toLocaleString()}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  ${row.payrollAmt.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}