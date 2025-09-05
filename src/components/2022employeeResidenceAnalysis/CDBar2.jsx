'use client';

import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import React, { useEffect,useState } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

function isDarkMode() {
  if (typeof window !== 'undefined') {
    const userPreference = localStorage.getItem('theme');
    if (
      userPreference === 'dark' ||
      (userPreference === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return true;
    }
  }
  return false;
}

function updateChartLabelColor() {
  if (typeof window !== 'undefined') {
    const isDark = isDarkMode();
    document.documentElement.style.setProperty(
      '--chart-label-color',
      isDark
        ? 'var(--chart-label-color-dark)'
        : 'var(--chart-label-color-light)'
    );
  }
}

updateChartLabelColor();

if (typeof window !== 'undefined') {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', updateChartLabelColor);
}

function CDBar2() {
  const [councilDistrict, setCouncilDistrict] = useState([]);
  const [category, setCategory] = useState('# of Employees');

  const isDark = isDarkMode();

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/2022PayrollEmployeeAnalysis/6Cd'
      )
      .then((response) => {
        const data = response.data['6Cd'];
        setCouncilDistrict(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const filteredData = councilDistrict.filter(
    (data) => data['cd#'] !== 'Grand Total'
  );

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
    // console.log('target', e.target.value);
  };

  const data = {
    labels: filteredData.map((x) => x['cd#']),
    datasets: [
      {
        label: category,
        data:
          category === '# of Employees'
            ? filteredData.map((x) => x['#OfEmployees'])
            : filteredData.map((x) => Math.round(x.totalPayroll)),
        backgroundColor: ['#41ffca'],
        borderColor: ['#41ffca'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          labels: {
            color: isDark ? 'white' : 'black',
          },
          font: {
            weight: 'bold',
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y.toLocaleString(); // Format number with commas

            if (category === 'Total Payroll') {
              return `${label}: $${value}`;
            } else {
              return `${label}: ${value}`;
            }
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: true,
          color: isDark ? '#44403c' : 'black',
        },
        ticks: {
          color: isDark ? 'white' : 'black',
          callback: function (value) {
            if (category === 'Total Payroll') {
              return '$' + value.toLocaleString();
            } else {
              return value;
            }
          },
        },
        title: {
          display: true,
          text:
            category === '# of Employees' ? '# of Employees' : 'Total Payroll',
          color: isDark ? 'white' : 'black',
        },
      },
      x: {
        grid: {
          display: true,
          color: isDark ? '#44403c' : 'black',
        },
        ticks: {
          color: isDark ? 'white' : 'black',
        },
        title: {
          display: true,
          text: 'Council District',
          color: isDark ? 'white' : 'black',
        },
      },
    },
  };

  return (
    <>
      <div>
        <center>
          <label htmlFor='cd-category' className='mx-2' style={{ color: isDark ? 'white' : 'black' }}>
            Category:
          </label>{' '}
          <select
            id='cd-category'
            className='text-xs text-black sm:text-xs md:text-sm lg:text-base'
            value={category}
            onChange={onCategoryChange}
            style={{ color: 'black', marginRight: '10px' }}
          >
            <option
              value='# of Employees'
              className='text-xs text-black sm:text-xs md:text-sm lg:text-base'
            >
              # of Employees
            </option>
            <option
              value='Total Payroll'
              className='text-xs text-black sm:text-xs md:text-sm lg:text-base'
            >
              Total Payroll
            </option>
          </select>
        </center>
        <p id='cdbar2-desc' className='sr-only'>
          Visual summary of Council District values for {category}. Refer to the data table above for exact numbers.
        </p>
      </div>
      <div className='mt-4'>
        <Bar data={data} height={200} options={options} aria-hidden='true' />
      </div>
    </>
  );
}

export default CDBar2;
