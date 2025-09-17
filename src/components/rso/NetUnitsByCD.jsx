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

export default function NetUnitsByCD() {
  const [netChangeData, setNetChangeData] = useState({});
  const isDark = isDarkMode();

  useEffect(() => {
    async function fetchNetChangeData() {
      const response = await fetch(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsNetChgByCd'
      );
      const data = await response.json();
      const labels = data.rsoUnitsNetChgByCd.map((item) => `CD ${item.cd}`);
      const units = data.rsoUnitsNetChgByCd.map((item) => item.number);

      setNetChangeData({
        labels: labels,
        datasets: [
          {
            label: 'Net Change in RSO Units',
            data: units,
            backgroundColor: '#41ffca',
            borderColor: 'gray',
            borderWidth: 1,
          },
        ],
      });
    }
    fetchNetChangeData();
  }, []);

  return (
    <div className='mb-8 w-full'>
      <h2 id='net-change-by-cd-heading' className='pb-4 pt-8 text-center text-2xl font-bold dark:text-white'>
        Net Change in RSO Units by Council District (CD)
      </h2>
      <div
        id='net-change-by-cd-narrative'
        className='text-left dark:text-white'
        style={{ fontFamily: 'Helvetica' }}
      >
        <p className='mb-4'>
          Most Council Districts saw net increases in the number of RSO units
          over the past 6 years. Council District <b>12</b> saw the highest
          increase with <b>2,877</b> units followed by Council District <b>2</b>{' '}
          with <b>2,859</b>.
        </p>
        <p className='mb-4'>
          Of the three Council Districts with net losses in RSO units, Council
          District <b>14</b> saw the most with a net loss of <b>868</b> RSO
          units followed by Council District <b>15</b> with a net loss of{' '}
          <b>490</b> units.
        </p>
      </div>
      {netChangeData.labels ? (
        <>
          <div
            role="img"
            aria-labelledby="net-change-by-cd-heading"
            aria-describedby="net-change-by-cd-narrative net-change-by-cd-table-caption"
          >
            <Bar
              data={netChangeData}
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
                      text: 'Net Change in RSO Units',
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
                      text: 'Council District',
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

          {netChangeData.labels && netChangeData.datasets?.[0]?.data ? (
            <div className="sr-only">
              <table>
                <caption id="net-change-by-cd-table-caption">
                  Net change in RSO units by council district (2019–2024) — data table
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Council District</th>
                    <th scope="col">Net Change in Units</th>
                  </tr>
                </thead>
                <tbody>
                  {netChangeData.labels.map((label, i) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{new Intl.NumberFormat('en-US').format(Number(netChangeData.datasets[0].data[i] ?? 0))}</td>
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
