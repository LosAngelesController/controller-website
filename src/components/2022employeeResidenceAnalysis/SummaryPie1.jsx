import { Chart, registerables } from 'chart.js';
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

Chart.register(...registerables);

function isDarkMode() {
  if (typeof window !== 'undefined') {
    // Check local storage for user preference
    const userPreference = localStorage.getItem('theme');
    if (
      userPreference === 'dark' ||
      (userPreference === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return true;
    }
  }
  // Default to light mode on the server or when no preference is set
  return false;
}

function updateChartLabelColor() {
  if (typeof window !== 'undefined') {
    const isDark = isDarkMode();
    console.log('isDark:', isDark);
    document.documentElement.style.setProperty(
      '--chart-label-color',
      isDark
        ? 'var(--chart-label-color-dark)'
        : 'var(--chart-label-color-light)'
    );
    // const root = document.documentElement;
    // root.style.setProperty('--chart-label-color', isDark ? 'white' : 'black');
  }
}

updateChartLabelColor();

if (typeof window !== 'undefined') {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', updateChartLabelColor);
}

function SummaryPie1() {
  const [LAEmployees] = useState([
    {
      id: 1,
      cityOfLA: 'Outside of City of LA',
      noOfEmployees: 32066,
      percentOfEmployees: 0.6373,
      totalPayroll: 3635090608,
      percentOfTotalPayroll: 0.7531,
    },
    {
      id: 2,
      cityOfLA: 'Inside of City of LA',
      noOfEmployees: 18243,
      percentOfEmployees: 0.3627,
      totalPayroll: 1191730268,
      percentOfTotalPayroll: 0.2469,
    },
  ]);

  const isDark = isDarkMode();

  const data = {
    labels: LAEmployees.map((x) => x.cityOfLA),
    datasets: [
      {
        label: '# of Employees',
        data: LAEmployees.map((x) => x.noOfEmployees),
        backgroundColor: [
          '#41ffca',
          "#ffc021",
        ],
        borderColor: [
          '#41ffca',
          "#ffc021",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        // color: 'rgba(0, 0, 0, 1)',
        labels: {
          font: {
            weight: 'bold',
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.parsed.toLocaleString();
            const percentOfEmployees = LAEmployees[context.dataIndex].percentOfEmployees;

            return `${label}: ${value} (${percentOfEmployees * 100}%)`;
          },
        },
      },
    },
  };

  return (
    <div className='mx-2 mb-6'>
      <h2 className='mb-2 w-64 rounded-md bg-zinc-900 text-white text-base md:text-lg'>
        City of LA<br />Employee Resident #
      </h2>
      <Pie data={data} height={150} options={options} aria-hidden="true"/>
      <ul className="sr-only">
        <li>Outside of City of LA: 32,066 employees (63.73%)</li>
        <li>Inside of City of LA: 18,243 employees (36.27%)</li>
      </ul>
      <p className='mt-3 bg-zinc-900 text-white rounded-md w-64'>
        Total # of Employees: <b>50,312</b>
      </p>
    </div>
  );
}

export default SummaryPie1;