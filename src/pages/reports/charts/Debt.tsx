'use client';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

//Define data types and interfaces
interface DebtDataItem {
  capMoney: any;
  fiscalYear: string;
  voterApproved: number;
  debtServiceRequirementsNonVoterApproved: number;
  debtCapsNonVoterApproved: number;
  ratioOfDebtServiceRequirementsToGeneralFundReceiptsNonVoterApproved: number;
  totalAmount: number;
  totalPercent: number;
  nonVoterApproved: number;
  voterApproveds: number;
  voterXApproved: number;
}

// Define state types
type SelectedOption = 'debt' | 'debtPercentage';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

const BarChart: React.FC = () => {
  const [debtData, setDebtData] = useState<DebtDataItem[] | undefined>();
  const [selectedOption, setSelectedOption] = useState<SelectedOption>('debt'); // Default selection

  const isDark = isDarkMode();

  const formatAbbreviatedCurrency = (value: number) => {
    const absValue = Math.abs(value);

    if (absValue >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toFixed(value % 1_000_000_000 === 0 ? 0 : 1)}B`;
    }

    if (absValue >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1)}M`;
    }

    if (absValue >= 1_000) {
      return `$${(value / 1_000).toFixed(value % 1_000 === 0 ? 0 : 1)}K`;
    }

    return `$${value.toLocaleString()}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await fetch(
          'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/debt/debtCsv'
        );
        const data2: { debtCsv: DebtDataItem[] } = await response2.json();
        console.log(data2.debtCsv);
        setDebtData(data2.debtCsv);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const labels = debtData?.map((item) => item.fiscalYear);

  // Create a new dataset for the 'totalPercent' line chart

  const selectedData =
    selectedOption === 'debt'
      ? {
          labels,
          datasets: [
            {
              label: '$ Total Debt Cap',
              type: 'line',
              data: debtData?.map((item) => item.capMoney),
              borderColor: 'rgb(38, 157, 187)',
              backgroundColor: 'rgb(38, 157, 187)',
            },

            {
              label: selectedOption === 'debt' ? 'Voter Approved Debt' : '',
              data: debtData?.map((item) => item.voterApproveds),
              backgroundColor: 'green',
              type: 'bar',
              borderColor: '#000000',
              borderWidth: 0.5,
            },
            {
              label: 'Non Voter Approved',
              type: 'bar',
              data: debtData?.map((item) => item.nonVoterApproved),
              backgroundColor: '#bb0000',
              borderColor: '#000000',
              borderWidth: 0.5,
            },
          ],
        }
      : {
          labels,
          datasets: [
            {
              label: '% Total Debt Cap',
              type: 'line',
              data: debtData?.map((item) => item.totalPercent * 100),
              borderColor: 'rgb(38, 157, 187)',
              backgroundColor: 'rgb(38, 157, 187)',
            },

            {
              label: 'Voter Approved',
              data: debtData?.map((item) => item.voterXApproved * 100),
              backgroundColor: '#ffca41',
              borderColor: '#000000',
              borderWidth: 0.5,
            },
            {
              label: 'Non-Voter Approved',
              data: debtData?.map(
                (item) =>
                  item.ratioOfDebtServiceRequirementsToGeneralFundReceiptsNonVoterApproved *
                  100
              ),
              backgroundColor: '#41ffca',
              borderColor: '#000000',
              borderWidth: 0.5,
            },
          ],
        };

  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: isDark ? 'white' : 'black',
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const { dataset, dataIndex } = context;
            const value = dataset.data ? dataset.data[dataIndex] : null;

            if (selectedOption === 'debt') {
              return value !== null ? '$' + value.toLocaleString() : 'N/A';
            } else {
              const formattedValue =
                value !== null ? Number(value).toFixed(2) : 'N/A';
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
          color: isDark ? '#44403c' : 'rgb(211, 211, 211)', // Set grid color to white in dark mode
        },
        title: {
          display: false,
          text: selectedOption === 'debt' ? 'Amount' : 'Percentage',
          color: isDark ? 'white' : 'black',
        },
        ticks: {
          color: isDark ? 'white' : 'black',
          callback: function (value) {
            if (selectedOption === 'debt') {
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
          display: false,
          color: isDark ? 'white' : 'black',
        },
        ticks: {
          color: isDark ? 'white' : 'black',
          autoSkip: false,
        },
      },
    },
  };

  // console.log('debt', debtData);
  return (
    <>
      <div className='p-10 text-center'>
        <br></br>
        <label style={{ marginRight: '10px' }}>Scale by % or $</label>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value as SelectedOption)}
          className='w-30 border-2 '
          style={{ color: 'black' }}
        >
          <option value='debt'>Debt - $</option>
          <option value='debtPercentage'>Debt - %</option>
        </select>
      </div>
      <div className='text-center font-bold'>
        {selectedOption === 'debt'
          ? 'Debt Service Requirements'
          : 'Ratio of Debt Service Requirements to General Funds Receipts'}
      </div>
      <div
        className='px-10'
        style={{ width: '100%', height: '500px', overflowX: 'auto' }}
      >
        <Bar
          options={options as ChartOptions}
          data={selectedData as ChartData<'bar'>}
        />
      </div>
    </>
  );
};

export default BarChart;
