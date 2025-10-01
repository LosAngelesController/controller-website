import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
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

  const sortedRevenueData = getFilteredRevenueData().sort(
    (a, b) => b.amount - a.amount
  );

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
          <label style={{ marginRight: '10px' }}>Fiscal Year:</label>
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
          <div>
            <br></br>
            <h2>Revenue Sources</h2>
            <Bar
              data={{
                // labels: sortedRevenueData.map((item) => item.revenueSource),
                labels: getFilteredRevenueData().map((item) => item.revenueSource),
                datasets: [
                  {
                    label: 'Amount',
                    // data: sortedRevenueData.map((item) => item.amount),
                    data: getFilteredRevenueData().map((item) => item.amount),
                    backgroundColor: '#41ffca',
                    borderColor: '#000000',
                    borderWidth: 0.5,
                    barPercentage: 0.8,
                    categoryPercentage: 1
                  },
                ],
              }}
              options={{
                indexAxis: 'y',
                scales: {
                  x: {
                    beginAtZero: true,
                    grid: {
                      color: isDark ? '#44403c' : 'rgb(211, 211, 211)',
                    },
                    ticks: {
                      color: isDark ? 'white' : 'black',
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
                      // autoSkip: false,
                      maxTicksLimit: category === 'General Fund' ? undefined : Math.ceil(getFilteredRevenueData().length / 2),
                      color: isDark ? 'white' : 'black',
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
                        const value =
                          getFilteredRevenueData()[context.dataIndex].amount;
                        const budgetActual =
                          getFilteredRevenueData()[context.dataIndex].budgetActual;

                        return `${label}: $${value.toLocaleString()} | ${budgetActual}`;
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
                scales: {
                  x: {
                    beginAtZero: true,
                    grid: {
                      color: isDark ? '#44403c' : 'rgb(211, 211, 211)', // Set grid color to white in dark mode
                    },
                    ticks: {
                      color: isDark ? 'white' : 'black',
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
  );
}

export default Revenue;
