'use client';
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { csvParse } from 'd3';
import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  fiscalYear: number;
  estimatedPopulation: number;
  personalIncome: number;
  personalIncomePerCapita: number;
  unemploymentRate: number;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/csvsforpafr24/demographics.csv');
        const csvData = await response.text();
        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          fiscalYear: d['Fiscal Year'] ? +d['Fiscal Year'] : 0,
          estimatedPopulation: d['Estimated Population']
            ? parseInt(d['Estimated Population'].replace(/,/g, ''), 10)
            : 0,
          personalIncome: d['Personal Income (in thousands)']
            ? parseInt(
                d['Personal Income (in thousands)'].replace(/,/g, ''),
                10
              )
            : 0,
          personalIncomePerCapita: d['Personal Income Per Capita']
            ? parseInt(d['Personal Income Per Capita'].replace(/,/g, ''), 10)
            : 0,
          unemploymentRate: d['Unemployment Rate']
            ? parseFloat(d['Unemployment Rate'].replace(/%/, ''))
            : 0,
        }));
        const filteredData = dataArray.filter(
          (data) => data.fiscalYear >= 2019 && data.fiscalYear <= 2024
        );
        const sortedData = filteredData.sort(
          (a, b) => a.fiscalYear - b.fiscalYear
        );
        setChartData(sortedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return null;
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
  const axisColor = isDark ? 'white' : 'black';
  const gridColor = isDark
    ? 'rgba(148, 163, 184, 0.2)'
    : 'rgba(15, 23, 42, 0.1)';

  const labels = chartData.map((data) => data.fiscalYear.toString());
  const populationData = chartData.map((data) => data.estimatedPopulation);
  const incomeData = chartData.map((data) => data.personalIncomePerCapita);
  const unemploymentData = chartData.map((data) => data.unemploymentRate);
  const tableId = 'pafr24-demographics-summary';

  const createOptions = (
    yTitle: string,
    tickFormatter: (value: number | string) => string,
    tooltipFormatter: (value: number) => string,
    { legendDisplay = true }: { legendDisplay?: boolean } = {}
  ) => ({
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Fiscal Year',
          color: axisColor,
        },
        ticks: {
          color: axisColor,
        },
        grid: {
          color: gridColor,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: yTitle,
          color: axisColor,
        },
        ticks: {
          color: axisColor,
          callback: (value: number | string) => tickFormatter(value),
        },
        grid: {
          color: gridColor,
        },
      },
    },
    plugins: {
      legend: {
        display: legendDisplay,
        labels: {
          color: axisColor,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const datasetLabel = context.dataset.label || '';
            const rawValue = context.parsed.y as number;
            const formattedValue = tooltipFormatter(rawValue);

            return datasetLabel
              ? `${datasetLabel}: ${formattedValue}`
              : formattedValue;
          },
        },
      },
    },
  });

  const populationOptions = createOptions(
    'Estimated Population',
    (value) => Number(value).toLocaleString(),
    (value) => Math.round(value).toLocaleString()
  );

  const incomeOptions = createOptions(
    'Personal Income Per Capita (USD)',
    (value) => `$${Number(value).toLocaleString()}`,
    (value) => `$${Math.round(value).toLocaleString()}`
  );

  const unemploymentOptions = {
    ...createOptions(
      'Unemployment Rate (%)',
      (value) => `${Number(value).toFixed(1)}%`,
      (value) => `${value.toFixed(1)}%`
    ),
    elements: {
      line: {
        tension: 0.3,
      },
      point: {
        radius: 4,
        hoverRadius: 5,
      },
    },
  };

  const populationChartData = {
    labels,
    datasets: [
      {
        label: 'Estimated Population',
        data: populationData,
        backgroundColor: '#41ffca',
        borderColor: 'black',
        borderWidth: 0.5,
      },
    ],
  };

  const incomeChartData = {
    labels,
    datasets: [
      {
        label: 'Personal Income Per Capita',
        data: incomeData,
        backgroundColor: '#60a5fa',
        borderColor: 'black',
        borderWidth: 0.5,
      },
    ],
  };

  const unemploymentChartData = {
    labels,
    datasets: [
      {
        label: 'Unemployment Rate (%)',
        data: unemploymentData,
        borderColor: '#7c3aed',
        backgroundColor: 'rgba(124, 58, 237, 0.2)',
        pointBackgroundColor: '#7c3aed',
        pointBorderColor: isDark ? '#f8fafc' : '#1f2937',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <>
      <div className='sr-only' id={tableId}>
        <table>
          <caption>
            Fiscal Year overview of Estimated Population, Personal Income Per
            Capita, and Unemployment Rate.
          </caption>
          <thead>
            <tr>
              <th scope='col'>Fiscal Year</th>
              <th scope='col'>Estimated Population</th>
              <th scope='col'>Personal Income Per Capita (USD)</th>
              <th scope='col'>Unemployment Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((data) => (
              <tr key={data.fiscalYear}>
                <th scope='row'>{data.fiscalYear}</th>
                <td>{data.estimatedPopulation.toLocaleString()}</td>
                <td>
                  {Number.isFinite(data.personalIncomePerCapita)
                    ? `$${Math.round(data.personalIncomePerCapita).toLocaleString()}`
                    : '-'}
                </td>
                <td>{data.unemploymentRate.toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className='mt-3 flex flex-col gap-y-8 lg:flex-row lg:gap-x-6'
        aria-hidden='true'
      >
        <div className='w-full lg:w-1/3'>
          <div style={{ width: '100%', height: '400px', overflowX: 'auto' }}>
            <Bar data={populationChartData as any} options={populationOptions} />
          </div>
        </div>
        <div className='w-full lg:w-1/3'>
          <div style={{ width: '100%', height: '400px', overflowX: 'auto' }}>
            <Bar data={incomeChartData as any} options={incomeOptions} />
          </div>
        </div>
        <div className='w-full lg:w-1/3'>
          <div style={{ width: '100%', height: '400px', overflowX: 'auto' }}>
            <Line
              data={unemploymentChartData as any}
              options={unemploymentOptions}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
