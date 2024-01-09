import {
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { csvParse } from 'd3';
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

// Define the shape of the data
interface ChartDataItem {
  year: string;
  category: string;
  businessType: string;
  governmental: number;
  total: number;
}

// Register the components with ChartJS
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

// Utility function to generate random colors
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const NetPositionChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartDataItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/csvsforpafr22/6condensedstatementofnetposition.csv');
        const csvData = await response.text();
        const dataArray: ChartDataItem[] = csvParse(csvData, (d: any) => ({
          year: d.Year ?? '',
          category: d.Category ?? '',
          businessType: d['Business-Type'] ?? '',
          governmental: d.Governmental ? +d.Governmental.replace(/,/g, '') : 0,
          total: d.Total ? +d.Total.replace(/,/g, '') : 0,
        }));
        
        setChartData(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading chart data...</div>;
  }

  // Create a set of unique years
  const uniqueYears = Array.from(new Set(chartData.map((data) => data.year)));

  const categories = Array.from(new Set(chartData.map((data) => data.category)));
  const colorMap: Record<string, string> = categories.reduce((acc, category) => {
    acc[category] = getRandomColor();
    return acc;
  }, {} as Record<string, string>);

  const datasets = categories.map((category) => {
    const filteredData = chartData.filter((item) => item.category === category);
    return {
      label: category,
      data: filteredData.map((item) => item.governmental),
      backgroundColor: colorMap[category],
    };
  });

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Year',
          color: 'white'
        },
        ticks: {
          color: 'white'
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount',
          color: 'white'
        },
        ticks: {
          color: 'white'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    }
  };

  return (
    <div style={{ width: '100%', height: '500px', overflowX: 'auto' }}>
      <Bar data={{ labels: uniqueYears, datasets }} options={options} />
    </div>
  );
};

export default NetPositionChart;
