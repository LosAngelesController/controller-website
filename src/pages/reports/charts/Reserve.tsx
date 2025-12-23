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
import Head from 'next/head';
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
interface ReserveProps {
  withSeo?: boolean;
}
const BarChartForDebt = ({ withSeo = true }: ReserveProps = {}) => {
  const [reserveData, setReserveData] = useState<DebtDataItem[] | undefined>();
  const [selectedOption, setSelectedOption] =
    useState<SelectedOption>('reserveFund'); // Default selection

  const isDark = isDarkMode();
  const reserveScaleSelectId = 'reserve-scale-select';

  const formatAbbreviatedCurrency = (value: number) => {
    const absValue = Math.abs(value);

    const formatWithSuffix = (divisor: number, suffix: string) => {
      const amount = value / divisor;
      const decimals = Number.isInteger(amount) ? 0 : 2;
      return `$${amount.toFixed(decimals)}${suffix}`;
    };

    if (absValue >= 1_000_000_000) {
      return formatWithSuffix(1_000_000_000, 'B');
    }

    if (absValue >= 1_000_000) {
      return formatWithSuffix(1_000_000, 'M');
    }

    if (absValue >= 1_000) {
      return formatWithSuffix(1_000, 'K');
    }

    const decimals = value % 1 === 0 ? 0 : 2;
    return `$${value.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}`;
  };

  const formatPercentage = (value: number) => {
    const decimals = value % 1 === 0 ? 0 : 2;
    return `${value.toFixed(decimals)}%`;
  };

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
              const numericValue =
                typeof value === 'number' ? value : Number(value ?? 0);
              return formatAbbreviatedCurrency(numericValue);
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
          autoSkip: false,
        },
      },
    },
  };

  return (
    <>
      {withSeo && (
        <Head>
          <title>Reserve & Budget Stabilization Dashboard</title>
          <meta
            name='description'
            content='Reserve and Budget Stabilization dashboard tracking fund balances, percentages, and trends with toggle between dollars and percent.'
          />
        </Head>
      )}
      <div className='text-center px-2 sm:px-4 md:px-10 py-10'>
        <h1 className='pb-4 text-3xl font-semibold dark:text-white'>
          Reserve & Budget Stabilization Funds
        </h1>
      <br></br>
      <label htmlFor={reserveScaleSelectId} style={{ marginRight: '10px' }}>
        Scale by % or $
      </label>
      <select
        id={reserveScaleSelectId}
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

      <table className='sr-only'>
        <caption>
          {selectedOption === 'reserveFund'
            ? 'Reserve Fund and Budget Stabilization Fund balances by fiscal year'
            : 'Reserve Fund and Budget Stabilization Fund percentages by fiscal year'}
        </caption>
        <thead>
          <tr>
            <th scope='col'>Fiscal Year</th>
            {selectedOption === 'reserveFund' ? (
              <>
                <th scope='col'>Reserve Fund</th>
                <th scope='col'>Budget Stabilization Fund</th>
              </>
            ) : (
              <>
                <th scope='col'>Reserve Fund Percentage</th>
                <th scope='col'>Budget Stabilization Fund Percentage</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {reserveData?.map((item) => (
            <tr key={item.fiscalYear}>
              <th scope='row'>{item.fiscalYear}</th>
              {selectedOption === 'reserveFund' ? (
                <>
                  <td>{formatAbbreviatedCurrency(item.reserveFund)}</td>
                  <td>{formatAbbreviatedCurrency(item.budgetStabilizationFund)}</td>
                </>
              ) : (
                <>
                  <td>{formatPercentage(item.reserveFundPercentage * 100)}</td>
                  <td>{formatPercentage(item.budgetStabilizationFundPercentage * 100)}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div aria-hidden='true'>
        <div
          className='px-2 sm:px-4 md:px-10 mt-4'
          style={{ width: '100%', height: '500px', overflowX: 'auto' }}
        >
          <Bar options={options} data={selectedData} aria-hidden='true' />
        </div>
      </div>
    </div>
    </>
  );
};
export default BarChartForDebt;
