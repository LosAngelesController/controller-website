'use client';

import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

export default function Bargaining() {
  const [bargaining, setBargaining] = useState([]);

  const [showYesRows, setShowYesRows] = useState(true);
  const [showNoRows, setShowNoRows] = useState(true);
  const [selectedBargaining, setSelectedBargaining] = useState('');

  const toggleFilter = () => {
    if (showYesRows && showNoRows) {
      setShowYesRows(false);
      setShowNoRows(true);
    } else if (!showYesRows && showNoRows) {
      setShowYesRows(true);
      setShowNoRows(false);
    } else {
      setShowYesRows(true);
      setShowNoRows(true);
    }
  };

  const handleMOUChange = (e) => {
    setSelectedBargaining(e.target.value);
  };

  const filteredRows = bargaining.filter(row => {
    if (showYesRows && showNoRows) {
      return selectedBargaining === '' || row.mou === selectedBargaining;
    } else if (showYesRows) {
      return row.cityOfLa === 'YES' && (selectedBargaining === '' || row.mou === selectedBargaining);
    } else if (showNoRows) {
      return row.cityOfLa === 'NO' && (selectedBargaining === '' || row.mou === selectedBargaining);
    }
    return true;
  });

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/2022PayrollEmployeeAnalysis/8BargainingGroup'
      )
      .then((response) => {
        const data = response.data['8BargainingGroup'];
        // console.log("bargaining", data);
        setBargaining(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const uniqueMOU = Array.from(new Set(bargaining.map(row => row.mou)));

  return (
    <div>
      <div className='overflow-x-auto overflow-auto max-h-[600px] bg-white p-2'>
        <table className='w-full table-auto'>
          <caption
            className='p-2 text-center text-xs font-bold text-black sm:text-sm md:text-base lg:text-lg'
            style={{
              border: '1px solid black',
              borderBottom: 'none',
              backgroundColor: '#41ffca',
              captionSide: 'top'
            }}
          >
            City Employee Residence Analysis by Bargaining Unit
          </caption>

          <thead
            className='sticky top-0 text-xs text-black sm:text-xs md:text-sm lg:text-base'
            style={{ border: '1px solid black', backgroundColor: '#41ffca' }}
          >
            <tr>
              <th
                className='sm:p1 text-left text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
                scope="col"
              >
                MOU
                <label htmlFor="mou-select" className="sr-only">
                  Filter by MOU
                </label>
                <select
                  id="mou-select"
                  className="w-12 rounded p-1 text-xs"
                  onChange={handleMOUChange}
                  value={selectedBargaining}
                >
                <option value="">All</option>
                {uniqueMOU.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              </th>
              <th
                className='sm:p1 text-left text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
                scope="col"
              >
                Bargaining Unit
              </th>
              <th
                className='sm:p1 flex items-center text-left text-black md:p-2 lg:p-2'
                // style={{ border: '1px solid black' }}
                scope="col"
              >
                Lived in City of LA
                <div
                  className='dropdown-arrow'
                  onClick={toggleFilter}
                  style={{ cursor: 'pointer' }}
                >
                  &#9662;
                </div>
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
                % of MOU
              </th>
              <th
                className='sm:p1 text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
                scope="col"
              >
                Payroll Amount
              </th>
              <th
                className='sm:p1 text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
                scope="col"
              >
                % of MOU Payroll
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
            {filteredRows.map((row) => (
              <tr key={row.id}>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {row.mou}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {row.bargainingUnit}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {row.cityOfLa}
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
                  {(row['%OfMou'] * 100).toFixed(2)}%
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  ${Math.round(row.payrollAmt).toLocaleString()}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {(row['%OfMouPayroll'] * 100).toFixed(2)}%
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {(row['%OfTotalPayroll'] * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
