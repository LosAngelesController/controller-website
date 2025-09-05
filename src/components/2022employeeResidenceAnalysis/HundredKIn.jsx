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

function HundredKOut() {
  const [LAEmployees] = useState([
    {
      id: 3,
      cityOfLA: 'YES',
      payGreater100K: 'Pay < $100K',
      noOfEmployees: 13335,
      percentOfGroup: 0.7308,
      totalPayroll: 461525658,
      percentOfTotalPayroll: 0.3873,
    },
    {
      id: 4,
      cityOfLA: 'YES',
      payGreater100K: 'Pay > $100K',
      noOfEmployees: 4911,
      percentOfGroup: 0.2692,
      totalPayroll: 730204610,
      percentOfTotalPayroll: 0.6127,
    },
  ]);

  const isDark = isDarkMode();

  const data = {
    labels: LAEmployees.map((x) => x.payGreater100K),
    datasets: [
      {
        label: '# of Employees',
        data: LAEmployees.map((x) => x.noOfEmployees),
        backgroundColor: [
          '#ffc021',
          '#41ffca',
        ],
        borderColor: [
          '#ffc021',
          '#41ffca',
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
            const value = LAEmployees[context.dataIndex].noOfEmployees.toLocaleString(undefined, { maximumFractionDigits: 2 });
            const percentOfEmployees = (LAEmployees[context.dataIndex].percentOfGroup * 100).toFixed(2);

            return `${label}: ${value} (${percentOfEmployees}%)`;
          },
        },
      },
    },
  };

  return (
    <div className='mx-2 mb-6'>
      <h2 className='mb-2 bg-zinc-900 text-white rounded-md w-96 sm:w-80 md:w-80 lg:w-96 text-base md:text-lg'>
        City Employees <b>Inside</b> of City of LA
        <br></br>Making More Than $100K
      </h2>
      <Pie data={data} height={150} options={options} aria-hidden="true" />
      <ul className="sr-only">
        <li>Employees with Pay &lt; $100K: 13,335 (73.08% of group)</li>
        <li>Employees with Pay &gt; $100K: 4,911 (26.92% of group)</li>
      </ul>
      <p className='mt-3 bg-zinc-900 text-white rounded-md w-64'>
        Total # of Employees: <b>18,246</b>
      </p>
    </div>
  );
}

export default HundredKOut;
