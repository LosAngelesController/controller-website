"use client";
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { csvParse } from 'd3';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartData {
  Year: string;
  "Activity Type": string;
  Activity: string;
  "Revenue Type": string;
  Revenue: number;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/csvsforpafr23/1totalcityrevenue.csv');
        const csvData = await response.text();


        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          Year: String(d['Year']).trim(),
          'Activity Type': String(d['Activity Type']).trim(),
          Activity: String(d['Activity']).trim(),
          'Revenue Type': String(d['Revenue Type']).trim(),
          Revenue:
            parseFloat(String(d[' Revenue ']).replace(/,/g, '').trim()) || 0,
        }));
        const filteredData = dataArray.filter(
          (data) => data?.Year >= '2019' && data?.Year <= '2023'
        );
        setChartData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return null;
  }
  const aggregatedData: { [activityType: string]: { [year: string]: number } } = {};
  const yearlySum: { [year: string]: number } = {};
  chartData.forEach((data) => {
    const activityType = data["Activity Type"];
    const year = data.Year;
    if (!aggregatedData[activityType]) {
      aggregatedData[activityType] = {};
    }
    if (aggregatedData[activityType][year]) {
      aggregatedData[activityType][year] += data.Revenue;
    } else {
      aggregatedData[activityType][year] = data.Revenue;
    }
    if (yearlySum[year]) {
      yearlySum[year] += data.Revenue;
    } else {
      yearlySum[year] = data.Revenue;
    }
  });

  const activityTypes = Object.keys(aggregatedData);
  const labels = Array.from(new Set(chartData.map((entry) => entry.Year))).sort();
  const datasets = activityTypes.map((activityType) => ({
    label: activityType,
    data: labels.map((year) => aggregatedData[activityType][year] ?? 0),
    backgroundColor: getColor(activityType),
    borderColor: 'black',
    borderWidth: 0.5,
    stack: 'stack',
  }));
  function getColor(activityType: string) {
    return activityType === 'Governmental' ? '#41ffca' : '#ffca41';
  }
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
      document.documentElement.style.setProperty(
        '--chart-label-color',
        isDark
          ? 'var(--chart-label-color-dark)'
          : 'var(--chart-label-color-light)'
      );
    }
  }

  updateChartLabelColor();

  const isDark = isDarkMode();

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Fiscal Year',
          color: isDark ? 'white' : 'black',
        },
        ticks: {
          color: isDark ? 'white' : 'black',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Values',
          color: isDark ? 'white' : 'black',
        },
        ticks: {
          color: isDark ? 'white' : 'black',
        },
        labels: {
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
  };

  return (
    <>
      <div className='sr-only'>
        <table>
          <caption>
            Total City Revenues by activity type and fiscal year (FY 2019-2023).
          </caption>
          <thead>
            <tr>
              <th scope='col'>Fiscal Year</th>
              {activityTypes.map((activity) => (
                <th scope='col' key={activity}>
                  {activity} Revenues (USD)
                </th>
              ))}
              <th scope='col'>Overall Revenues (USD)</th>
            </tr>
          </thead>
          <tbody>
            {labels.map((year) => (
              <tr key={year}>
                <th scope='row'>{year}</th>
                {activityTypes.map((activity) => (
                  <td key={`${year}-${activity}`}>
                    {(aggregatedData[activity][year] ?? 0).toLocaleString()}
                  </td>
                ))}
                <td>{(yearlySum[year] ?? 0).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{ width: '100%', height: '500px', overflowX: 'auto' }}
        aria-hidden='true'
      >
        <Bar data={{ labels, datasets }} options={options} />
      </div>
    </>
  );
};

export default BarChart;
