"use client";
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

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface ChartData {
  employer: string;
  employees22: number;
  rank22: number;
  percent22: number;
  employees13: number;
  rank13: number;
  percent13: number;
}

const TopEmployeeChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/csvsforpafr23/employers-1.csv');
        const csvData = await response.text();

        const dataArray = csvParse(csvData, (d) => ({
          employer: d.Employer,
          employees22: +d["22 Employees"]?.replace(/,/g, '') || 0,
          rank22: +d["22 Rank"] || 0,
          percent22: +(d["22 % of Total"]?.replace('%', '') || 0),
          employees13: +d["13 Employees"]?.replace(/,/g, '') || 0,
          rank13: +d["13 Rank"] || 0,
          percent13: +(d["13 % of Total"]?.replace('%', '') || 0),
        }));


        // const dataArray = csvParse(csvData, (d) => ({
        //   employer: d.Employer,
        //   employees22: +d["Employees"].replace(/,/g, ''),
        //   rank22: +d["Rank"],
        //   percent22: +d["% of Total"].replace('%', ''),
        //   employees13: +d["15 Employees"].replace(/,/g, ''),
        //   rank13: +d["15 Rank"],
        //   percent13: +d["15 % of Total"].replace('%', ''),
        // }));

        const filteredData = dataArray.filter(
          (data) => data.employer !== 'All Others' && data.employer !== 'TOTAL'
        );
        const sortedData = filteredData.sort((a, b) => a.rank22 - b.rank22);
        const top10Data = sortedData.slice(0, 10);
        setChartData(top10Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return null;
  }

  const labels = chartData.map((data) => data.employer);

  const datasets = [
    {
      label: '2023 Employees',
      data: chartData.map((data) => data.employees22),
      backgroundColor: '#41ffca',
      borderColor: 'black',
      borderWidth: '0.5',
      stack: 'stack',
    },
  ];

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
    responsive: true,
    layout: {
      padding: {
        left: 0, // Remove extra left padding
        right: 20, // Keep some right padding
        top: 10,
        bottom: 10,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Employer",
          color: isDark ? "white" : "black",
        },
        ticks: {
          color: isDark ? "white" : "black",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Employees",
          color: isDark ? "white" : "black",
        },
        ticks: {
          color: isDark ? "white" : "black",
          padding: 5, // Ensures spacing is minimal
        },
        grid: {
          drawTicks: false,
          drawBorder: false, // Removes extra border space
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: isDark ? "white" : "black",
        },
      },
    },
  };





  return (
    <div style={{ width: '100%', height: '500px', overflowX: 'auto' }}>
      <Bar data={{ labels, datasets }} options={options} />
    </div>
  );
};

export default TopEmployeeChart;
