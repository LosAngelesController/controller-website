import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
interface RevenueSource {
  fiscalYear: number;
  category: string;
  department: string;
  finalBudget: number;
  salaries: number;
  others: number;
  totalExpenditures: number;
  id: number;
}

interface TotalExpenditure {
  fiscalYear: number;
  amount: number;
  budgetActual: string;
  id: number;
  budgetActuals: string;
  fiscalYears: number;
  amounts: number;
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

function Expenditures() {
  const [category, setCategory] = useState('Budgetary Department');
  const [fiscalYear, setFiscalYear] = useState(2023);
  const [revenueSourcesData, setRevenueSourcesData] = useState<RevenueSource[]>(
    []
  );
  const [totalExpendituresData, setTotalExpendituresData] = useState<
    TotalExpenditure[]
  >([]);

  const isDark = isDarkMode();

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/pfr/expCategory'
      )
      .then((response) => {
        setRevenueSourcesData(response.data.expCategory);
      })
      .catch((error) => {
        console.error('Error fetching revenue sources data:', error);
      });

    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/pfr/totalExpenditures'
      )
      .then((response) => {
        setTotalExpendituresData(response.data.totalExpenditures);
      })
      .catch((error) => {
        console.error('Error fetching total expenditures data:', error);
      });
  }, []);

  const getFilteredRevenueData = () => {
    return revenueSourcesData.filter(
      (item) => item.category === category && item.fiscalYear === fiscalYear
    );
  };

  const getFilteredTotalExpendituresData = () => {
    return totalExpendituresData.filter(
      (item) => item.budgetActual === 'Total Expenditures'
    );
  };

  const revenueSourcesChartOptions = {
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          // color: 'white',
          color: isDark ? 'white' : 'black',
        },
        title: {
          display: true,
          text: 'Amount',
          // color: 'white',
          color: isDark ? 'white' : 'black',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          // color: 'white',
          color: isDark ? 'white' : 'black',
        },
        title: {
          display: true,
          text: 'Department',
          // color: 'white',
          color: isDark ? 'white' : 'black',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          // color: 'white',
          color: isDark ? 'white' : 'black',
        },
      },
    },
  };

  const totalExpendituresChartOptions = {
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          // color: 'white',
          color: isDark ? 'white' : 'black',
        },
        title: {
          display: true,
          text: 'Amount',
          // color: 'white',
          color: isDark ? 'white' : 'black',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          // color: 'white',
          color: isDark ? 'white' : 'black',
        },
        title: {
          display: true,
          text: 'Fiscal Year',
          // color: 'white',
          color: isDark ? 'white' : 'black',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          // color: 'white',
          color: isDark ? 'white' : 'black',
        },
      },
    },
  };

  return (
    <div>
      <br></br>
      <div>
        <center>
          <label style={{ marginRight: '10px' }}>Budgetary Department:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ color: 'black', marginRight: '10px' }}
          >
            <option value='Budgetary Department'>Budgetary Department</option>
            <option value='Non_Departmental'>Non-Departmental</option>
          </select>
          <label style={{ marginRight: '10px' }}>Fiscal Year:</label>
          <select
            value={fiscalYear}
            onChange={(e) => setFiscalYear(parseInt(e.target.value, 10))}
            style={{ color: 'black', marginRight: '10px' }}
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
          </select>
        </center>

        <br></br>
        <br></br>
        <div className='chart-container'>
          <div>
            <h2>Total Expenditures by Department</h2>
            <Bar
              data={{
                labels: getFilteredRevenueData()
                  .sort((a, b) => b.totalExpenditures - a.totalExpenditures) // Sort the data in descending order
                  .map((item) => item.department),
                datasets: [
                  {
                    label: 'Total Expenditures',
                    data: getFilteredRevenueData()
                      .sort((a, b) => b.totalExpenditures - a.totalExpenditures) // Sort the data in descending order
                      .map((item) => item.totalExpenditures),
                    backgroundColor: '#41ffca',
                    borderColor: '#000000',
                    borderWidth: 0.5,
                  },
                ],
              }}
              options={{
                scales: {
                  x: {
                    beginAtZero: true,
                    grid: {
                      color: isDark ? '#44403c' : 'rgb(211, 211, 211)', // Set grid color to white in dark mode
                    },
                    ticks: {
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
                  },
                },
                indexAxis: 'y', // Set the chart to have horizontal bars
                plugins: {
                  legend: {
                    labels: {
                      color: isDark ? 'white' : 'black', // Set legend text color to white in dark mode
                    },
                  },
                },
              }}
            />
          </div>
          <br></br>
          <br></br>
          <div>
            <h2>Total Expenditures Over Time</h2>
            <Bar
              data={{
                labels: totalExpendituresData
                  .map((item) => `${item.fiscalYears}`)
                  .filter(
                    (value, index, self) => self.indexOf(value) === index
                  ), // Filter out repeated years
                datasets: [
                  {
                    label: 'Total Expenditures',
                    data: totalExpendituresData.map((item) => item.amounts),
                    backgroundColor: '#41ffca',
                    borderColor: '#000000',
                    borderWidth: 0.5,
                  },
                ],
              }}
              options={{
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
                      text: 'Fiscal Year',
                      color: isDark ? 'white' : 'black',
                    },
                  },
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: isDark ? '#44403c' : 'rgb(211, 211, 211)',
                    },
                    ticks: {
                      color: isDark ? 'white' : 'black',
                    },
                    title: {
                      display: true,
                      text: 'Total Expenditures',
                      color: isDark ? 'white' : 'black',
                    },
                  },
                },
                indexAxis: 'y',
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

export default Expenditures;
