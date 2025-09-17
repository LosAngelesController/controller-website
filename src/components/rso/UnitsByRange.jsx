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

export default function UnitsByRange() {
  const [unitRangeData, setUnitRangeData] = useState({});
  const isDark = isDarkMode();

  useEffect(() => {
    async function fetchUnitRangeData() {
      const response = await fetch(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsByUnitRange2024'
      );
      const data = await response.json();
      const labels = data.rsoUnitsByUnitRange2024.map((item) => item.unitRange);
      const units = data.rsoUnitsByUnitRange2024.map((item) => item.number);

      setUnitRangeData({
        labels: labels,
        datasets: [
          {
            label: 'Number of RSO Units',
            data: units,
            backgroundColor: '#41ffca',
            borderColor: 'gray',
            borderWidth: 1,
          },
        ],
      });
    }
    fetchUnitRangeData();
  }, []);

  return (
    <div className='mb-8 w-full'>
      <h2 id='units-by-range-heading' className='pb-4 pt-8 text-center text-2xl font-bold dark:text-white'>
        Number of RSO Units by Unit Range
      </h2>
      <div
        id='units-by-range-narrative'
        className='text-left dark:text-white'
        style={{ fontFamily: 'Helvetica' }}
      >
        <p className='mb-4'>
          Unit Range is based on the number of RSO units located within a
          particular property.
        </p>
        <p className='mb-4'>
          In 2024, <b>195,926</b> RSO units were located in properties that
          contained 11-49 units followed by <b>127,240</b> RSO units in
          properties that contained 5-10 units.
        </p>
      </div>
      {unitRangeData.labels ? (
        <>
          <div
            role="img"
            aria-labelledby="units-by-range-heading"
            aria-describedby="units-by-range-narrative units-by-range-table-caption"
          >
            <Bar
              data={unitRangeData}
              options={{
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
                      text: 'Unit Range',
                      color: isDark ? 'white' : 'black',
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
              aria-hidden='true'
            />
          </div>

          {unitRangeData.labels && unitRangeData.datasets?.[0]?.data ? (
            <div className="sr-only">
              <table>
                <caption id="units-by-range-table-caption">
                  Number of RSO units by unit range (2024) — data table
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Unit Range</th>
                    <th scope="col">Units</th>
                  </tr>
                </thead>
                <tbody>
                  {unitRangeData.labels.map((range, i) => (
                    <tr key={range}>
                      <th scope="row">{range}</th>
                      <td>{new Intl.NumberFormat('en-US').format(Number(unitRangeData.datasets[0].data[i] ?? 0))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </>
      ) : (
        <p className="dark:text-white">Loading data...</p>
      )}
    </div>
  );
}
