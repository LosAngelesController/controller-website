'use client';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// Define data types and interfaces
interface DebtDataItem {
  fiscalYear: string;
  budgetStabilizationFund: number;
  reserveFund: number;
  budgetStabilizationFundPercentage: number;
  reserveFundPercentage: number;
}

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

// Define state types
type SelectedOption = 'reserveFund' | 'reserveFundPercentage';
const BarChartForDebt = () => {
  const [reserveData, setReserveData] = useState<DebtDataItem[] | undefined>();
  const [selectedOption, setSelectedOption] =
    useState<SelectedOption>('reserveFund'); // Default selection

  const isDark = isDarkMode();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/reserves/reservesCsv'
        );
        const data = await response.json();
        // console.log(data.reservesCsv);
        setReserveData(data.reservesCsv);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const labels = reserveData?.map((item) => item.fiscalYear);

  const selectedData =
    selectedOption === 'reserveFund'
      ? {
          labels,
          datasets: [
            {
              label: 'Reserve Fund',
              data: reserveData?.map((item) => item.reserveFund),
              backgroundColor: '#ffca41',
              borderColor: '#000000',
              borderWidth: 0.5,
            },
            {
              label: 'Budget Stabilization Fund',
              data: reserveData?.map((item) => item.budgetStabilizationFund),
              backgroundColor: '#41ffca',
              borderColor: '#000000',
              borderWidth: 0.5,
            },
          ],
        }
      : {
          labels,
          datasets: [
            {
              label: 'Reserve Fund Percentage',
              data: reserveData?.map(
                (item) => item.reserveFundPercentage * 100
              ),
              backgroundColor: '#ffca41',
              borderColor: '#000000',
              borderWidth: 0.5,
            },
            {
              label: 'Budget Stabilization Fund Percentage',
              data: reserveData?.map(
                (item) => item.budgetStabilizationFundPercentage * 100
              ),
              backgroundColor: '#41ffca',
              borderColor: '#000000',
              borderWidth: 0.5,
            },
          ],
        };

  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: isDark ? 'white' : 'black',
        },
      },
      title: {
        display: false,
        color: isDark ? 'white' : 'black',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const { dataset, dataIndex } = context;
            const value = dataset.data ? dataset.data[dataIndex] : null;
      
            if (selectedOption === 'reserveFund') {
              return value !== null ? '$' + value.toLocaleString() : 'N/A';
            } else {
              const formattedValue = value !== null ? Number(value).toFixed(2) : 'N/A';
              return formattedValue + '%';
            }
          },
        },
      },
    },
    scales: {
      y: {
        stacked: true,
        grid: {
          color: isDark ? '#44403c' : 'rgb(211, 211, 211)',
        },
        title: {
          display: true,
          text: selectedOption === 'reserveFund' ? 'Amount' : 'Percentage',
          color: isDark ? 'white' : 'black',
        },
        ticks: {
          color: isDark ? 'white' : 'black',
          callback: function (value) {
            if (selectedOption === 'reserveFund') {
              return '$' + value.toLocaleString();
            } else {
              return value + '%';
            }
          },
        },
      },

      x: {
        stacked: true,
        grid: {
          display: false,
        },
        title: {
          display: true,
          color: isDark ? 'white' : 'black',
        },
        ticks: {
          color: isDark ? 'white' : 'black',
        },
      },
    },
  };

  return (
    <div className='p-10 text-center'>
      <br></br>
      <label style={{ marginRight: '10px' }}> Scale by % or $</label>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value as SelectedOption)}
        className='w-38 border-2'
        style={{ color: 'black' }}
      >
        <option value='reserveFund'>Reserve Fund - $</option>
        <option value='reserveFundPercentage'>
          Reserve Fund Percentage - %
        </option>
      </select>

      <div
        className='px-10'
        style={{ width: '100%', height: '500px', overflowX: 'auto' }}
      >
        <Bar options={options} data={selectedData} />
      </div>
    </div>
  );
};
export default BarChartForDebt;
