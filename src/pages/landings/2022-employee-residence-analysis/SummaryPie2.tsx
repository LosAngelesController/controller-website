import { Chart,registerables } from 'chart.js';
import React, { useEffect, useRef } from 'react';

Chart.register(...registerables);

type CustomChartType = 'pie' | 'doughnut';

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
  }
}

updateChartLabelColor();

if (typeof window !== 'undefined') {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', updateChartLabelColor);
}

function SummaryPie2() {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<CustomChartType, any, any> | null>(null);

  useEffect(() => {
    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      if (!ctx) {
        console.error('Could not get 2D context for canvas.');
        return;
      }

      // Destroy any existing chart on the canvas
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const LAEmployees = [
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
      ];

      const data = {
        labels: LAEmployees.map((x) => x.cityOfLA),
        datasets: [
          {
            label: 'Total Payroll',
            data: LAEmployees.map((x) => x.totalPayroll),
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
          },
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const label = context.dataset.label || '';
                const value = context.parsed.toLocaleString(); // Format number with commas
            const percentOfPayroll = LAEmployees[context.dataIndex].percentOfTotalPayroll;

                return `${label}: $${value} (${percentOfPayroll * 100}%)`;
              },
            },
          },
        },
      };

      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options,
      });
    }
  }, []);

  return (
    <div className='mx-2 mb-6'>
      <h4 className='mb-2 w-64 rounded-md bg-zinc-900 text-white'>
      City of LA<br></br>Employee Resident Payroll $
      </h4>
      <canvas ref={chartContainer} height={150}></canvas>
      <p className='mt-3 w-64 rounded-md bg-zinc-900 text-white'>
        Total Payroll: <b>$4,826,820,876</b>
      </p>
    </div>
  );
}

export default SummaryPie2;
