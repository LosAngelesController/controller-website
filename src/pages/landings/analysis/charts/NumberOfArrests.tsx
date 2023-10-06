import { Chart, registerables } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

interface ArrestData {
  id: number;
  year: number;
  arrests: number;
}

const Hbfs = () => {
  const [chartData, setChartData] = useState<ArrestData[]>([]);
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currTheme = localStorage.getItem('theme');
    if (currTheme !== null) setTheme(currTheme);
  }, [theme]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/4118Ingest/numberOfArrestsPerYear'
        );
        const data: { numberOfArrestsPerYear: ArrestData[] } =
          await response.json();

        // Set the chart data
        setChartData(data.numberOfArrestsPerYear);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const chartLabels = chartData.map((item) => item.year);
  const chartValues = chartData.map((item) => item.arrests);

  const chartOptions = {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
          color: 'white', // X-axis label color
        },
        ticks: {
          color: 'white', // X-axis tick color
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: theme === 'dark' ? '#555' : '#ddd',
        },

        title: {
          text: '# of Arrests',
          display: true,
          color: 'white', // Y-axis label color
        },
        ticks: {
          color: 'white', // Y-axis tick color
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Legend label color
        },
      },
    },
  };

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Arrests',
        data: chartValues,
        backgroundColor: '#41ffca', // Bar color

        borderColor: 'rgba(65, 255, 202, 0.8)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='chart-container'>
      <Bar data={data} options={chartOptions} />
    </div>
  );
};

export default Hbfs;
