'use client';

import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

export default function Department() {
  const [department, setDepartment] = useState([]);

  const [showYesRows, setShowYesRows] = useState(true);
  const [showNoRows, setShowNoRows] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState('');

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

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const filteredRows = department.filter(row => {
    if (showYesRows && showNoRows) {
      return selectedDepartment === '' || row.department === selectedDepartment;
    } else if (showYesRows) {
      return row.cityOfLa === 'YES' && (selectedDepartment === '' || row.department === selectedDepartment);
    } else if (showNoRows) {
      return row.cityOfLa === 'NO' && (selectedDepartment === '' || row.department === selectedDepartment);
    }
    return true;
  });

  const uniqueDepartments = Array.from(new Set(department.map(row => row.department)));

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/2022PayrollEmployeeAnalysis/7Department'
      )
      .then((response) => {
        const data = response.data['7Department'];
        // console.log("department", data);
        setDepartment(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <div className='overflow-x-auto overflow-auto max-h-[600px] bg-white p-2'>
        <table className='w-full table-auto'>
          <caption
            className='p-2 text-center text-xs font-bold text-black sm:text-sm md:text-base lg:text-lg'
            style={{
              border: '1px solid black',
              borderBottom: 'none',          // share border with thead to avoid 2px line
              backgroundColor: '#41ffca',
              captionSide: 'top'
            }}
          >
            City Employee Residence Analysis by Department
          </caption>
          <thead
            className='sticky top-0 text-xs text-black sm:text-xs md:text-sm lg:text-base'
            style={{ border: '1px solid black', backgroundColor: '#41ffca' }}
          >
            <tr>
              <th
                className='sticky top-0 sm:p-1 text-left text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
                scope="col"
              >
                Department
                <label htmlFor="department-select" className="sr-only">
                  Filter by Department
                </label>
                <select
                  id="department-select"
                  className="w-64 rounded p-1 text-xs"
                  onChange={handleDepartmentChange}
                  value={selectedDepartment}
                >
                <option value="">All</option>
                {uniqueDepartments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              </th>
              <th
                className='flex items-center sm:p1 text-left text-black md:p-2 lg:p-2'
                // style={{ border: '1px solid black' }}
                scope="col"
              >
                Lived in City of LA
                <div className="dropdown-arrow" onClick={toggleFilter} style={{ cursor: 'pointer' }}>&#9662;</div>
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
                % of Dept.
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
                % of Dept. Payroll
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
                  {row.department}
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
                  {(row['%OfDept'] * 100).toFixed(2)}%
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
                  {(row['%OfDeptPayroll'] * 100).toFixed(2)}%
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
