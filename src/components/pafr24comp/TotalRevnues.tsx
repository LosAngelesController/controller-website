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
import { ChartData, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface ChartDataType {
  Year: string;
  "Activity Type": string;
  Activity: string;
  "Revenue Type": string;
  Revenue: number;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData<"bar", number[], string> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/csvsforpafr24/1totalcityrevenue.csv");
        const csvData = await response.text();

        const dataArray: ChartDataType[] = csvParse(csvData, (d) => ({
          Year: String(d["Year"]),
          "Activity Type": String(d["Activity Type"]),
          Activity: String(d["Activity"]),
          "Revenue Type": String(d["Revenue Type"]),
          Revenue: parseFloat(String(d["Revenue"]).replace(/,/g, "").trim()) || 0,
        }));

        const filteredData = dataArray.filter(
          (data) => parseInt(data.Year, 10) >= 2019 && parseInt(data.Year, 10) <= 2024
        );

        const aggregatedData: { [activityType: string]: { [year: string]: number } } = {};
        const yearlySum: { [year: string]: number } = {};

        filteredData.forEach((data) => {
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
          data: labels.map((year) => data[year] || 0),
          backgroundColor: activityType === "Governmental" ? "#41ffca" : "#ffca41",
          stack: "stack",
        }));

        const lineDataset = {
          label: "Yearly Sum",
          data: labels.map((year) => yearlySum[year] || 0),
          fill: false,
          borderColor: "gray",
          type: "line",
        };

        setChartData({
          labels,
          datasets: [...datasets, lineDataset] as any, // Ensures mixed types (bar + line) are accepted
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return null;
  }

  const isDarkMode = () => {
    if (typeof window !== "undefined") {
      const userPreference = localStorage.getItem("theme");
      return (
        userPreference === "dark" ||
        (userPreference === null &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  };

  const isDark = isDarkMode();

  const options: ChartOptions<"bar"> = {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Fiscal Year",
          color: isDark ? "white" : "black",
        },
        ticks: {
          color: isDark ? "white" : "black",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Values",
          color: isDark ? "white" : "black",
        },
        ticks: {
          color: isDark ? "white" : "black",
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
    <div style={{ width: "100%", height: "500px", overflowX: "auto" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
