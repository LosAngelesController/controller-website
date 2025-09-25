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
  Total: number;
  Value: number;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/csvsforpafr23/4bondeddebtandlongtermnotespayable.csv');
        const csvData = await response.text();

        const dataArray: ChartData[] = csvParse(csvData, (d, i) => {
          try {
            return {
              Year: String(d['Fiscal Year']).trim(),
              'Activity Type': String(d['Activity Type']).trim(),
              Total:
                parseFloat(String(d['Total']).replace(/,/g, '').trim()) || 0,
              Value:
                parseFloat(String(d['Value ']).replace(/,/g, '').trim()) || 0,
            } as ChartData;
          } catch (error) {
            console.error(`Error parsing row ${i + 1}:`, error);
            console.log("Row content:", d);
            return null;
          }
        }).filter((d) => d !== null);

        const filteredData = dataArray.filter(
          (data) => data['Year'] >= '2019' && data['Year'] <= '2023'
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
  const activitiesSum: { [year: string]: number } = {};
  chartData.forEach((data) => {
    const activityType = data['Activity Type'];
    const year = data.Year;
    if (!aggregatedData[activityType]) {
      aggregatedData[activityType] = {};
    }
    if (aggregatedData[activityType][year]) {
      aggregatedData[activityType][year] += data.Value;
    } else {
      aggregatedData[activityType][year] = data.Value;
    }
    if (activitiesSum[year]) {
      activitiesSum[year] += data.Value;
    } else {
      activitiesSum[year] = data.Value;
    }
  });

  const labels = Object.keys(aggregatedData[Object.keys(aggregatedData)[0]]);
  const datasets = Object.entries(aggregatedData).map(([activityType, data]) => ({
    label: activityType,
    data: labels.map((year) => data[year] ?? 0),
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
            Bonded debt and long-term notes payable by activity type and fiscal
            year (FY 2019-2023).
          </caption>
          <thead>
            <tr>
              <th scope='col'>Fiscal Year</th>
              {Object.keys(aggregatedData).map((activity) => (
                <th scope='col' key={activity}>
                  {activity} Balance (USD)
                </th>
              ))}
              <th scope='col'>Overall Balance (USD)</th>
            </tr>
          </thead>
          <tbody>
            {labels.map((year) => (
              <tr key={year}>
                <th scope='row'>{year}</th>
                {Object.keys(aggregatedData).map((activity) => (
                  <td key={`${year}-${activity}`}>
                    {(aggregatedData[activity][year] ?? 0).toLocaleString()}
                  </td>
                ))}
                <td>{(activitiesSum[year] ?? 0).toLocaleString()}</td>
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
