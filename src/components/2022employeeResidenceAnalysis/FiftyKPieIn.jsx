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

function FiftyKPieIn() {
  const [LAEmployees] = useState([
    {
      id: 3,
      cityOfLA: 'YES',
      payGreater50K: 'Pay > $50K',
      noOfEmployees: 9238,
      percentOfGroup: 0.5063,
      totalPayroll: 1052846656,
      percentOfTotalPayroll: 0.8835,
    },
    {
      id: 4,
      cityOfLA: 'YES',
      payGreater50K: 'Pay < $50K',
      noOfEmployees: 9008,
      percentOfGroup: 0.4937,
      totalPayroll: 138883612,
      percentOfTotalPayroll: 0.1165,
    },
  ]);

  const isDark = isDarkMode();

  const data = {
    labels: LAEmployees.map((x) => x.payGreater50K),
    datasets: [
      {
        label: '# of Employees',
        data: LAEmployees.map((x) => x.noOfEmployees),
        backgroundColor: ['#41ffca', '#ffc021'],
        borderColor: ['#41ffca', '#ffc021'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        // color: "rgba(0, 0, 0, 1)",
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
            const value = LAEmployees[
              context.dataIndex
            ].noOfEmployees.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            });
            const percentOfEmployees = (
              LAEmployees[context.dataIndex].percentOfGroup * 100
            ).toFixed(2);

            return `${label}: ${value} (${percentOfEmployees}%)`;
          },
        },
      },
    },
  };

  return (
    <div className='mx-2 mb-6'>
      <h2 className='mb-2 w-96 rounded-md bg-zinc-900 text-white text-base md:text-lg sm:w-80 sm:text-sm md:w-80 lg:w-96'>
        City Employees <b>Inside</b> of City of LA<br />Making More Than $50K
      </h2>
      <Pie data={data} height={150} options={options} aria-hidden="true" />
      <ul className="sr-only">
        <li>Employees with Pay &gt; $50K: 9,238 (50.63% of group)</li>
        <li>Employees with Pay &lt; $50K: 9,008 (49.37% of group)</li>
      </ul>
      <p className='mt-3 w-64 rounded-md bg-zinc-900 text-white'>
        Total # of Employees: <b>18,246</b>
      </p>
    </div>
  );
}

export default FiftyKPieIn;
