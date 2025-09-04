import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const FwaBarChart = () => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/fwa2024/sheet1'
        );
        const json = await res.json();
        setDataPoints(json.sheet1 || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const chartData = {
    labels: dataPoints.map((d) => d.year),
    datasets: [
      {
        label: 'FWA Cases',
        data: dataPoints.map((d) => d.total),
        backgroundColor: '#41ffca',
        borderRadius: 4,
        datalabels: {
          anchor: 'end',
          align: 'start',
          color: '#41ffca',
          font: {
            weight: 'bold',
            size: 12,
          },
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: 0 },
    },
    plugins: {
      legend: { display: false },
      datalabels: {
        display: true,
        formatter: (value) => value,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff',
          font: { size: 12 },
        },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff',
          font: { size: 12 },
        },
        grid: {
          color: 'rgba(255,255,255,0.1)',
        },
      },
    },
  };

  return (
    <figure
      role='group'
      aria-labelledby='fwa-bar-title'
      className='h-[475px] w-full rounded-lg bg-[#1a1a1a] p-4'
    >
      <figcaption id='fwa-bar-title' className='sr-only'>
        Bar chart showing FWA cases received from 2014 to 2024.
      </figcaption>
      <h3 className='mb-6 text-left text-2xl font-bold leading-snug text-[#41ffca] md:text-3xl'>
        <div>CASES RECEIVED BY</div>
        <div className='text-white'>FRAUD, WASTE, ABUSE UNIT</div>
        <div className='text-[#41ffca]'>(2014–2024)</div>
      </h3>

      <div className='h-[300px]'>
        <Bar data={chartData} options={options} aria-hidden="true" />
      </div>

      <ul className='sr-only'>
        {dataPoints.map((d) => (
          <li key={d.year}>{`Year ${d.year}: ${d.total} cases received`}</li>
        ))}
      </ul>
    </figure>
  );
};

export default FwaBarChart;
