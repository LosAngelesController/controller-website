'use client';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
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
    // console.log('isDark:', isDark);
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

export default function UnitsByYear() {
  const [chartData1, setChartData1] = useState({});
  const isDark = isDarkMode();

  useEffect(() => {
    async function fetchChartData1() {
      const response = await fetch(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsByYear'
      );
      const data = await response.json();
      const labels = data.rsoUnitsByYear.map((item) => item.year);
      const units = data.rsoUnitsByYear.map((item) => item.number);

      setChartData1({
        labels: labels,
        datasets: [
          {
            label: 'RSO Units by Year',
            data: units,
            backgroundColor: '#41ffca',
            borderColor: 'gray',
            borderWidth: 1,
          },
        ],
      });
    }

    fetchChartData1();
  }, []);

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: isDark ? 'white' : 'black',
        },
        grid: {
          display: true,
          color: 'gray',
        },
        title: {
          display: true,
          text: 'Number of RSO Units',
          color: isDark ? 'white' : 'black',
        },
      },
      x: {
        ticks: {
          color: isDark ? 'white' : 'black',
        },
        grid: {
          display: true,
          color: 'gray',
        },
        title: {
          display: true,
          text: 'Year',
          color: isDark ? 'white' : 'black',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className='mb-8 w-full'>
      <h3 id='rso-units-by-year-heading' className='pb-4 pt-8 text-center text-xl font-bold dark:text-white'>
        RSO Units by Year
      </h3>
      <p id='rso-units-by-year-narrative' className='mb-4'>
        The data reveals that as of 2024, there are <b> 661,851</b> RSO
        units. From 2019 to 2024, there was a net increase of{' '}
        <b> 18,345</b> RSO units (a loss of <b>15,754</b> units but a gain
        of <b>34,099</b> units)
      </p>
      {chartData1.labels ? (
        <div role='img' aria-labelledby='rso-units-by-year-heading' aria-describedby='rso-units-by-year-narrative rso-units-by-year-table-caption'>
          <Bar data={chartData1} options={chartOptions} aria-hidden='true' />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
      {chartData1.labels && chartData1.datasets?.[0]?.data ? (
        <div className="sr-only">
          <table>
            <caption id="rso-units-by-year-table-caption">
              RSO units by year — data table
            </caption>
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Units</th>
              </tr>
            </thead>
            <tbody>
              {chartData1.labels.map((year, i) => (
                <tr key={year}>
                  <th scope="row">{year}</th>
                  <td>
                    {new Intl.NumberFormat('en-US').format(
                      Number(chartData1.datasets[0].data[i] ?? 0)
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
