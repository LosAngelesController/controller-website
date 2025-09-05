import { Chart, registerables } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

const Hbfs = () => {
  const [chartDatas, setChartData] = useState<{
    race: { year: number; race: string; arrests: number }[];
  } | null>(null);
  const [theme, setTheme] = useState<string>('light');
  const [selectedYear, setSelectedYear] = useState<string>('2023'); // Initialize with the year 2021

  useEffect(() => {
    const currTheme: string | null = localStorage.getItem('theme');
    console.log('currTheme', currTheme);
    if (currTheme != null) setTheme(currTheme);
  }, [theme]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/4118Ingest/race'
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
    new Set(chartDatas.race.map((item) => item.year))
  ).filter((year) => year >= 2021); // Filter years starting from 2021

  const fundingSources = chartDatas.race
    .filter(
      (item) =>
        selectedYear === 'All Years' || item.year === parseInt(selectedYear)
    )
    .map((item) => item.race);

  const amounts = chartDatas.race
    .filter(
      (item) =>
        selectedYear === 'All Years' || item.year === parseInt(selectedYear)
    )
    .map((item) => item.arrests);

  const chartData = {
    labels: fundingSources,
    datasets: [
      {
        label: '# of Arrests',
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
          text: 'Race',
          color: 'white',
        },
        ticks: {
          color: 'white',
          maxRotation: 45, // Adjust this value to an angle that works for your labels
          minRotation: 0,
          maxTicksLimit: window.innerWidth <= 768 ? 10 : 20, // Adjust this value as needed
        },
      },
      y: {
        grid: {
          color: theme === 'dark' ? '#555' : '#ddd',
        },
        title: {
          display: true,
          text: '# of Arrests',
          color: 'white',
          font: {
            size: 16,
          },
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          // stepSize: 40,
          min: 0,
          max: Math.max(...amounts) + 5,
          color: 'white',
          font: {
            size: 14,
          },
          // callback: function (value: string | number) {
          //   let maxWidth = 120;
          //   if (window.innerWidth <= 768) {
          //     maxWidth = 20;
          //   }
          //   return typeof value === 'number' ? ` ${value || ''}`.toString() : '';
          // },
        },
      },
    },
  };

  // === A11y: name & description for the canvas ===
  const titleId = 'raceChartTitle';
  const descId = 'raceChartDesc';

  // Visible dataset label already used in the chart
  const datasetLabel = '# of Arrests';

  // Example: "# of Arrests by Race, 2023"
  const titleText = `${datasetLabel} by Race${selectedYear ? `, ${selectedYear}` : ''}`;

  // Example: "Black: 1,234 arrests. White: 567 arrests. …"
  const descText =
    fundingSources.length
      ? fundingSources
          .map((race, i) => `${race}: ${Number(amounts[i]).toLocaleString()} arrests`)
          .join('. ') + '.'
      : 'No data available.';

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <label htmlFor='yearDropdown'>Select Year: </label>
      <select
        id='yearDropdown'
        onChange={(e) => setSelectedYear(e.target.value)}
        value={selectedYear} // Use the selectedYear state directly
        style={{ color: 'black', overflow: 'hidden' }}
      >
        {uniqueYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
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
