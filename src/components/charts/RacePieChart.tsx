import { Chart, registerables } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

Chart.register(...registerables);

const Hbfs = () => {
  const [chartData, setChartData] = useState<{
    race: { year: number; race: string; arrests: number }[];
  } | null>(null);
  const [theme, setTheme] = useState<string>('light');
  const [selectedYear, setSelectedYear] = useState<string>('2023');

  useEffect(() => {
    const currTheme: string | null = localStorage.getItem('theme');
    if (currTheme != null) setTheme(currTheme);
  }, [theme]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/4118Ingest/race'
        );
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  const uniqueYears = Array.from(
    new Set(chartData.race.map((item) => item.year))
  ).filter((year) => year >= 2021);

  const selectedData = chartData.race.filter(
    (item) =>
      selectedYear === 'All Years' || item.year === parseInt(selectedYear)
  );

  // Calculate the total number of arrests for the selected data
  const totalArrests = selectedData.reduce(
    (acc, item) => acc + item.arrests,
    0
  );

  // Calculate percentages and use them as data for the Pie chart
  const chartDataForYear = {
    labels: selectedData.map((item) => item.race),
    datasets: [
      {
        data: selectedData.map((item) => (item.arrests / totalArrests) * 100),
        // #00008B
        backgroundColor: [
          '#00008B',
          '#41FFCA',
          '#FFCE56',
          '#FF5733',
          '#C0C0C0',
          '#4BC0C0',
          '#B733FF',
          '#337DFF',
          '#33FF78',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          color: 'white', // Set the legend text color to white
        },
      },
      tooltip: {
        callbacks: {
          label: (context: { label: string; parsed: number }) => {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: ${value.toFixed(2)}%`;
          },
        },
      },
    },
  };

  // === A11y: name & description for the canvas ===
  const titleId = 'racePieTitle';
  const descId = 'racePieDesc';

  // Example: "Share of 41.18 arrests by race, 2023"
  const titleText = `Share of 41.18 arrests by race${selectedYear ? `, ${selectedYear}` : ''}`;

  // Example: "Black: 42.15%. White: 27.03%. …"
  const descText =
    selectedData.length
      ? selectedData
          .map((item) => `${item.race}: ${((item.arrests / totalArrests) * 100).toFixed(2)}%`)
          .join('. ') + '.'
      : 'No data available.';

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <label htmlFor='yearDropdown'>Select Year: </label>
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
      <figure className='chart-container' aria-labelledby={titleId} aria-describedby={descId}>
        <p id={titleId} className='sr-only'>
          {titleText}
        </p>
        <p id={descId} className='sr-only'>
          {descText}
        </p>

        <Pie
          data={chartDataForYear}
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
