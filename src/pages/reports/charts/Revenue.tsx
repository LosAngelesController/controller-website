import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import type { ScriptableContext } from 'chart.js';
interface RevenueSource {
  fiscalYear: number;
  category: string;
  revenueSource: string;
  amount: number;
  budgetActual: string;
  id: number;
}

interface TotalRevenue {
  fiscalYear: number;
  totalRevenues: number;
  budgetActual: string;
  id: number;
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

function Revenue() {
  const [category, setCategory] = useState('General Fund');
  const [fiscalYear, setFiscalYear] = useState(2023);
  const [revenueSourcesData, setRevenueSourcesData] = useState<RevenueSource[]>(
    []
  );
  const [totalRevenuesData, setTotalRevenuesData] = useState<TotalRevenue[]>(
    []
  );
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  const isDark = isDarkMode();

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/pfr/revenueSources'
      )
      .then((response) => {
        setRevenueSourcesData(response.data.revenueSources);
      })
      .catch((error) => {
        console.error('Error fetching revenue sources data:', error);
      });

    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/pfr/totalRevenues'
      )
      .then((response) => {
        setTotalRevenuesData(response.data.totalRevenues);
      })
      .catch((error) => {
        console.error('Error fetching total revenues data:', error);
      });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setIsMobileViewport(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getFilteredRevenueData = () => {
    // return revenueSourcesData.filter(
    //   (item) => item.category === category && item.fiscalYear === fiscalYear
    // );
    const filteredData = revenueSourcesData.filter(
      (item) => item.category === category && item.fiscalYear === fiscalYear
    );
  
    // console.log('Filtered Data:', filteredData);
  
    return filteredData;
  };

  const getFilteredTotalRevenuesData = () => {
    return totalRevenuesData.filter(
      (item) => item.budgetActual === 'Actual Receipts'
    );
  };

  const filteredRevenueData = getFilteredRevenueData();

  const revenueSourceMap = filteredRevenueData.reduce<
    Record<string, { actual?: number; adopted?: number }>
  >((acc, item) => {
    if (!acc[item.revenueSource]) {
      acc[item.revenueSource] = {};
    }

    if (item.budgetActual === 'Actual Receipts') {
      acc[item.revenueSource].actual = item.amount;
    }

    if (item.budgetActual === 'Adopted Budget') {
      acc[item.revenueSource].adopted = item.amount;
    }

    return acc;
  }, {});

  const revenueSources = Object.keys(revenueSourceMap);

  const adoptedBudgetData = revenueSources.map(
    (source) => revenueSourceMap[source].adopted ?? 0
  );

  const actualReceiptsData = revenueSources.map(
    (source) => revenueSourceMap[source].actual ?? 0
  );

  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

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

  // const { theme, setTheme, resolvedTheme } = useTheme();

  // const isDarkMode =
  //   resolvedTheme === 'dark' ||
  //   (resolvedTheme === 'system' &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div>
      <div>
        <center>
          <label style={{ marginRight: '10px' }}>Category:</label>{' '}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ color: 'black', marginRight: '10px' }}
          >
            <option value='General Fund'>General Fund Receipts</option>
            <option value='Special Funds'>Special Fund Receipts</option>
          </select>
          {isMobileViewport && <div style={{ height: '12px' }} />}
          <label style={{ marginRight: '10px' }}>Fiscal Year:</label>{' '}
          <select
            value={fiscalYear}
            onChange={(e) => setFiscalYear(parseInt(e.target.value))}
            style={{ color: 'black' }}
          >
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
            <option value={2019}>2019</option>
            <option value={2018}>2018</option>
            <option value={2017}>2017</option>
            <option value={2016}>2016</option>
            <option value={2015}>2015</option>
            <option value={2014}>2014</option>
            <option value={2013}>2013</option>
            <option value={2012}>2012</option>
          </select>
        </center>

        <div className='chart-container'>
          <div style={{ width: '100%', height: '600px' }}>
            <br></br>
            <h2>Revenue Sources</h2>
            <Bar
              data={{
                labels: revenueSources,
                datasets: [
                  {
                    label: 'Adopted Budget',
                    data: adoptedBudgetData,
                    backgroundColor: '#ffca41',
                    borderColor: '#000000',
                    borderWidth: 0.5,
                    barPercentage: 0.8,
                    categoryPercentage: 1,
                  },
                  {
                    label: 'Actual Receipts',
                    data: actualReceiptsData,
                    backgroundColor: '#41ffca',
                    borderColor: '#000000',
                    borderWidth: 0.5,
                    barPercentage: 0.8,
                    categoryPercentage: 1,
                  },
                ],
              }}
              options={{
                indexAxis: 'y',
                maintainAspectRatio: false,
                scales: {
                  x: {
                    beginAtZero: true,
                    grid: {
                      color: isDark ? '#44403c' : 'rgb(211, 211, 211)',
                    },
                    ticks: {
                      color: isDark ? 'white' : 'black',
                      callback: (value) =>
                        typeof value === 'number'
                          ? formatAbbreviatedCurrency(value)
                          : formatAbbreviatedCurrency(Number(value ?? 0)),
                    },
                    title: {
                      display: true,
                      text: 'Amount',
                      color: isDark ? 'white' : 'black',
                    },
                  },
                  y: {
                    beginAtZero: false,
                    grid: {
                      color: isDark ? '#44403c' : 'rgb(211, 211, 211)',
                    },
                    ticks: {
                      autoSkip: false,
                      color: isDark ? 'white' : 'black',
                      font: () => ({
                        size: isMobileViewport ? 10 : 12,
                      }),
                    },
                    title: {
                      display: true,
                      text: 'Revenue Source',
                      color: isDark ? 'white' : 'black',
                    },
                  },
                },
                plugins: {
                  legend: {
                    labels: {
                      color: isDark ? 'white' : 'black',
                    },
                  },
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        const label = context.dataset.label || '';
                        const rawValue = context.raw as number;
                        return `${label}: ${formatCurrency(rawValue)}`;
                      },
                    },
                  },
                },
              }}
            />
          </div>
          <br></br>
          <br></br>
          <div>
            <h2>Revenues Over Time</h2>

            <div style={{ width: '100%', height: '450px' }}>
              <Bar
                data={{
                  labels: getFilteredTotalRevenuesData()
                    .map((item) => item.fiscalYear)
                    .reverse(), // Reverse the labels to display in descending order
                  datasets: [
                  {
                    label: 'Actual Receipts',
                    data: getFilteredTotalRevenuesData()
                      .map((item) => item.totalRevenues)
                      .sort((a, b) => b - a), // Sort data in descending order
                    backgroundColor: '#41ffca',
                    borderColor: '#000000',
                    borderWidth: 0.5,
                  },
                ],
              }}
                options={{
                  indexAxis: 'y',
                  maintainAspectRatio: false,
                  scales: {
                  x: {
                    beginAtZero: true,
                    grid: {
                      color: isDark ? '#44403c' : 'rgb(211, 211, 211)', // Set grid color to white in dark mode
                    },
                    ticks: {
                      color: isDark ? 'white' : 'black',
                      callback: (value) =>
                        typeof value === 'number'
                          ? formatAbbreviatedCurrency(value)
                          : formatAbbreviatedCurrency(Number(value ?? 0)),
                    },
                    title: {
                      display: true,
                      text: 'Amount',
                      color: isDark ? 'white' : 'black',
                      },
                    },
                    y: {
                      beginAtZero: true,
                      grid: {
                        color: isDark ? '#44403c' : 'rgb(211, 211, 211)', // Set grid color to white in dark mode
                      },
                      ticks: {
                        autoSkip: false,
                        color: isDark ? 'white' : 'black',
                      },
                      title: {
                        display: true,
                        text: 'Fiscal Year',
                        color: isDark ? 'white' : 'black',
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      labels: {
                        color: isDark ? 'white' : 'black',
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
