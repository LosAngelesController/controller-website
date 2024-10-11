'use client';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

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

export default function UnitsByCD() {
  const [chartData2, setChartData2] = useState({});
  const isDark = isDarkMode();

  useEffect(() => {
    async function fetchChartData2() {
      const response = await fetch(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsByCd2024'
      );
      const data = await response.json();
      const labels = data.rsoUnitsByCd2024.map((item) => `CD ${item.cd}`);
      const units = data.rsoUnitsByCd2024.map((item) => item.number);

      setChartData2({
        labels: labels,
        datasets: [
          {
            label: 'Number of RSO Units',
            data: units,
            backgroundColor: '#41ffca',
            borderColor: '#41ffca',
            borderWidth: 1,
          },
        ],
      });
    }

    fetchChartData2();
  }, []);

  return (
    <div className='mb-8 w-full'>
      <p className='pb-4 pt-8 text-center text-xl font-bold dark:text-white'>
        Number of RSO Units by Council District (2024)
      </p>
      <div
        className='text-left dark:text-white'
        style={{ fontFamily: 'Helvetica' }}
      >
        <p className='mb-4'>
          <b> Council District 13</b> has the highest number of RSO units with{' '}
          <b>78,958</b>, followed by <b>Council District 10</b> with{' '}
          <b>78,370 RSO </b> units.
        </p>
      </div>
      {chartData2.labels ? (
        <Bar
          data={chartData2}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: isDark ? 'white' : 'black',
                },
                grid: {
                  display: true, // Enable grid lines
                  color: 'gray',
                },
                title: {
                  display: true,
                  text: 'Number of RSO Units', // Add title to the y-axis
                  color: isDark ? 'white' : 'black',
                },
              },
              x: {
                ticks: {
                  color: isDark ? 'white' : 'black',
                },
                grid: {
                  display: true, // Enable grid lines
                  color: 'gray',
                },
                title: {
                  display: true,
                  text: 'Council District', // Add title to the x-axis
                  color: isDark ? 'white' : 'black',
                },
              },
            },
            plugins: {
              legend: {
                display: false, // Remove legend
              },
            },
          }}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
