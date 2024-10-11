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

export default function NetUnitsByRange() {
  const [netChangeByUnitRangeData, setNetChangeByUnitRangeData] = useState({});
  const isDark = isDarkMode();

  useEffect(() => {
    async function fetchUnitRangeData() {
      const response = await fetch(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsNetChgByUnitRange'
      );
      const data = await response.json();
      const labels = data.rsoUnitsNetChgByUnitRange.map(
        (item) => item.unitRange
      );
      const units = data.rsoUnitsNetChgByUnitRange.map((item) => item.number);

      setNetChangeByUnitRangeData({
        labels: labels,
        datasets: [
          {
            label: 'Net Change in RSO Units by Unit Range',
            data: units,
            backgroundColor: '#41ffca',
            borderColor: 'gray',
            borderWidth: 1,
          },
        ],
      });
    }
    // Call the function to fetch data
    fetchUnitRangeData();
  }, []);

  return (
    <div className='mb-8 w-full'>
      <h2 className='pb-4 pt-8 text-center text-2xl font-bold dark:text-white'>
        Net Change in RSO Units by Unit Range
      </h2>
      <div
        className='text-left dark:text-white'
        style={{ fontFamily: 'Helvetica' }}
      >
        <p className='mb-4'>
          Properties with <strong>2 units</strong> had the highest net increase
          in RSO units with <strong>6,680 units</strong> followed by properties
          with <strong>1 unit</strong> with an additional <strong>1,751</strong>{' '}
          RSO units.
          <br></br>
          <br></br>
          Properties with <strong>100+ units</strong> saw the highest decrease
          with a loss of <strong>1,716</strong> RSO units, followed by
          properties with <strong>3-4 units</strong> with a loss of{' '}
          <strong>380</strong> units.
        </p>
      </div>
      {netChangeByUnitRangeData.labels ? (
        <Bar
          data={netChangeByUnitRangeData}
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
                  text: 'Net Change in RSO Units',
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
                  text: 'Unit Range',
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
          plugins={[
            {
              id: 'zeroLine',
              afterDraw: (chart) => {
                const {
                  ctx,
                  scales: { y },
                } = chart;
                const yZero = y.getPixelForValue(0); // Get pixel position for y=0

                ctx.save();
                ctx.beginPath();
                ctx.moveTo(chart.scales.x.left, yZero);
                ctx.lineTo(chart.scales.x.right, yZero);
                ctx.lineWidth = 6;
                ctx.strokeStyle = 'grey'; // Same color as gridline
                ctx.stroke();
                ctx.restore();
              },
            },
          ]}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
