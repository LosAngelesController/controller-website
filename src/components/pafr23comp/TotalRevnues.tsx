"use client";
import {
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { csvParse } from "d3";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

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
        const response = await fetch("/csvsforpafr23/1totalcityrevenue.csv");
        const csvData = await response.text();


        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          Year: String(d["Year"]),
          "Activity Type": String(d["Activity Type"]),
          Activity: String(d["Activity"]),
          "Revenue Type": String(d["Revenue Type"]),
          Revenue: parseFloat(String(d[" Revenue "]).replace(/,/g, "").trim()) || 0,
        }));
        const filteredData = dataArray.filter((data) => data?.Year >= "2019" && data?.Year <= "2023");
        setChartData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
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

  const labels = Object.keys(aggregatedData[Object.keys(aggregatedData)[0]]);
  const datasets = Object.entries(aggregatedData).map(([activityType, data]) => ({
    label: activityType,
    data: Object.values(data),
    backgroundColor: getColor(activityType),
    stack: "stack",
  }));
  const lineDataset = {
    label: "Yearly Sum",
    data: labels.map((year) => yearlySum[year]),
    fill: false,
    borderColor: "gray",
    type: 'line',
  };

  const allDatasets = [...datasets, lineDataset];
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
          text: "Fiscal Year",
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
          text: "Values",
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
    <div style={{ width: "100%", height: "500px", overflowX: "auto" }}>
      <Bar data={{ labels, datasets }} options={options} />
    </div>
  );
};

export default BarChart;