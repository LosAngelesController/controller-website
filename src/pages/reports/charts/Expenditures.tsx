import axios from 'axios';
import Head from 'next/head';
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

interface ExpendituresProps {
  withSeo?: boolean;
}

function Expenditures({ withSeo = true }: ExpendituresProps = {}) {
  const [category, setCategory] = useState('Budgetary Department');
  const [fiscalYear, setFiscalYear] = useState(2023);
  const [revenueSourcesData, setRevenueSourcesData] = useState<RevenueSource[]>(
    []
  );
  const [totalExpendituresData, setTotalExpendituresData] = useState<
    TotalExpenditure[]
  >([]);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  const isDark = isDarkMode();
  const departmentSelectId = 'expenditures-department-select';
  const expendituresFiscalYearSelectId = 'expenditures-fiscal-year-select';

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
    <>
      {withSeo && (
        <Head>
          <title>City Expenditures Dashboard | LA Controller</title>
          <meta
            name='description'
            content='City expenditures dashboard comparing departments, totals over time, and interactive filters for fiscal year and budget categories.'
          />
        </Head>
      )}
      <div>
        <h1 className='pt-6 text-center text-3xl font-semibold dark:text-white'>
          City Expenditures Dashboard
        </h1>
      <br></br>
      <div>
        <center>
          <label htmlFor={departmentSelectId} style={{ marginRight: '10px' }}>
            Budgetary Department:
          </label>
          <select
            id={departmentSelectId}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ color: 'black', marginRight: '10px' }}
          >
            <option value='Budgetary Department'>Budgetary Department</option>
            <option value='Non_Departmental'>Non-Departmental</option>
          </select>
          {isMobileViewport && <div style={{ height: '12px' }} />}
          <label
            htmlFor={expendituresFiscalYearSelectId}
            style={{ marginRight: '10px' }}
          >
            Fiscal Year:
          </label>
          <select
            id={expendituresFiscalYearSelectId}
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
            <div style={{ width: '100%', height: '600px' }}>
              <table className='sr-only'>
                <caption>
                  Total expenditures by department for {category} in fiscal year {fiscalYear}
                </caption>
                <thead>
                  <tr>
                    <th scope='col'>Department</th>
                    <th scope='col'>Total Expenditures</th>
                  </tr>
                </thead>
                <tbody>
                  {getFilteredRevenueData()
                    .sort((a, b) => b.totalExpenditures - a.totalExpenditures)
                    .map((item) => (
                      <tr key={item.id}>
                        <th scope='row'>{item.department}</th>
                        <td>{formatAbbreviatedCurrency(item.totalExpenditures)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
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
                  indexAxis: 'y', // Set the chart to have horizontal bars
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
                    },
                  },
                  plugins: {
                    legend: {
                      labels: {
                        color: isDark ? 'white' : 'black', // Set legend text color to white in dark mode
                      },
                    },
                  },
                }}
                aria-hidden='true'
              />
            </div>
          </div>
          <br></br>
          <br></br>
          <div>
            <h2>Total Expenditures Over Time</h2>
            <div style={{ width: '100%', height: '450px' }}>
              <table className='sr-only'>
                <caption>Total expenditures over time</caption>
                <thead>
                  <tr>
                    <th scope='col'>Fiscal Year</th>
                    <th scope='col'>Total Expenditures</th>
                  </tr>
                </thead>
                <tbody>
                  {totalExpendituresData.map((item) => (
                    <tr key={item.id}>
                      <th scope='row'>{item.fiscalYears}</th>
                      <td>{formatAbbreviatedCurrency(item.amounts)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                        callback: (value) =>
                          typeof value === 'number'
                            ? formatAbbreviatedCurrency(value)
                            : formatAbbreviatedCurrency(Number(value ?? 0)),
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
                        autoSkip: false,
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
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      labels: {
                        color: isDark ? 'white' : 'black',
                      },
                    },
                  },
                }}
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Expenditures;
