import { Chart, registerables } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

const Hbfs = () => {
  const [chartDatas, setChartData] = useState<{
    councilDistrict: {
      homelessCount: any;
      year: number;
      cd: number;
      arrests: number;
    }[];
  } | null>(null);
  const [theme, setTheme] = useState<string>('light');
  const [selectedYear, setSelectedYear] = useState<string>('2023'); // Start from 2023
  const [selectedType, setSelectedType] = useState('arrests'); // Default value: arrests

  useEffect(() => {
    const currTheme: string | null = localStorage.getItem('theme');
    if (currTheme != null) setTheme(currTheme);
  }, [theme]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/4118Ingest/councilDistrict'
        );
        const data = await response.json();

        // Set the chart data
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartDatas) {
    return <div>Loading...</div>;
  }

  const uniqueYears = Array.from(
    new Set(
      chartDatas.councilDistrict
        .map((item) => item.year)
        .filter((year) => year >= 2021) // Filter years from 2021 onwards
    )
  );

  const fundingSources = chartDatas.councilDistrict
    .filter(
      (item) =>
        selectedYear === 'All Years' || item.year === parseInt(selectedYear)
    )
    .map((item) => item.cd);

  const amounts = chartDatas.councilDistrict
    .filter(
      (item) =>
        selectedYear === 'All Years' || item.year === parseInt(selectedYear)
    )
    .map((item) =>
      selectedType === 'arrests' ? item.arrests : item.homelessCount
    );

  const chartData = {
    labels: fundingSources,
    datasets: [
      {
        label: selectedType === 'arrests' ? '# of Arrests' : 'Homeless Count',
        data: amounts,
        backgroundColor: '#40FFCA',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false,

    indexAxis: 'x',
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'CD',
          color: 'white',
          font: {
            size: 16,
          },
        },
        ticks: {
          color: 'white',
        },
      },
      y: {
        grid: {
          color: theme === 'dark' ? '#555' : '#ddd',
        },
        title: {
          display: true,
          text: selectedType === 'arrests' ? '# of Arrests' : 'Homeless Count',
          color: 'white',
          font: {
            size: 16,
          },
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          min: 0,
          max: Math.max(...amounts) + 5,
          color: 'white',
          font: {
            size: 14,
          },
          callback: function (value: any) {
            let maxWidth = 120;
            if (window.innerWidth <= 768) {
              maxWidth = 20;
            }
            return typeof value === 'number'
              ? ` ${value || ''}`.toString()
              : '';
          },
        },
      },
    },
  };

    // === Accessibility: name & description for the canvas ===
  const titleId = 'cdChartTitle';
  const descId = 'cdChartDesc';
  const datasetLabel = selectedType === 'arrests' ? '# of Arrests' : 'Homeless Count';

  const titleText = `${datasetLabel} by Council District${selectedYear ? `, ${selectedYear}` : ''}`;

  const descText =
    fundingSources.length
      ? fundingSources
          .map((cd, i) => `CD ${cd}: ${Number(amounts[i]).toLocaleString()}`)
          .join('. ') + '.'
      : 'No data available.';

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <div style={{ display: 'inline-block', marginRight: '20px' }}>
        <label htmlFor='yearDropdown'>Year: </label>
        <select
          id='yearDropdown'
          onChange={(e) => setSelectedYear(e.target.value)}
          value={selectedYear}
          style={{ color: 'black', overflow: 'hidden' }}
        >
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: 'inline-block' }}>
        <label htmlFor='typeDropdown'>Type: </label>
        <select
          id='typeDropdown'
          onChange={(e) => setSelectedType(e.target.value)}
          value={selectedType}
          style={{ color: 'black', overflow: 'hidden' }}
        >
          <option value='arrests'>Arrests</option>
          <option value='homeless'>Homeless Count</option>
        </select>
      </div>
      <figure className='chart-container' aria-labelledby={titleId} aria-describedby={descId}>
        <p id={titleId} className='sr-only'>
          {titleText}
        </p>
        <p id={descId} className='sr-only'>
          {descText}
        </p>

        <Bar
          data={chartData}
          options={chartOptions as any}
          role='img'
          aria-labelledby={titleId}
          aria-describedby={descId}
          tabIndex={-1}   // not keyboard-interactive
        />
      </figure>
    </div>
  );
};

export default Hbfs;
