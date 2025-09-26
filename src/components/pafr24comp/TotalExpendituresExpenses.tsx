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
  Value: number;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/csvsforpafr24/2expend-sum.csv");
        const csvData = await response.text();

        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          Year: String(d["Year"]),
          "Activity Type": String(d["Activity Type"]),
          Value: parseFloat(String(d["Sum of Value"]).replace(/,/g, "").trim()) || 0,
        }));

        const filteredData = dataArray.filter(
          (data) => parseInt(data.Year, 10) >= 2019 && parseInt(data.Year, 10) <= 2024
        );
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

  // Generate unique labels (Years)
  const labels = [...new Set(chartData.map((item) => item.Year))];

  // Prepare datasets for the chart
  const datasets = [
    {
      label: "Governmental",
      data: labels.map(
        (year) =>
          chartData.find(
            (data) =>
              data.Year === year && data["Activity Type"] === "Governmental"
          )?.Value || 0
      ),
      backgroundColor: "#41ffca", // Color for Governmental
      borderColor: "black",
      borderWidth: 0.5,
      stack: "stack", // Grouped stacking
    },
    {
      label: "Business-Type",
      data: labels.map(
        (year) =>
          chartData.find(
            (data) =>
              data.Year === year && data["Activity Type"] === "Business-Type"
          )?.Value || 0
      ),
      backgroundColor: "#ffca41", // Color for Business-Type
      borderColor: "black",
      borderWidth: 0.5,
      stack: "stack", // Grouped stacking
    },
  ];

  // Dark mode handling
  function isDarkMode() {
    if (typeof window !== "undefined") {
      const userPreference = localStorage.getItem("theme");
      return (
        userPreference === "dark" ||
        (userPreference === null &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  }

  const isDark = isDarkMode();

  const options = {
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

  const tableId = "pafr24-total-expenditures-summary";

  const formatValue = (value: number) => {
    if (!Number.isFinite(value) || value === 0) {
      return "-";
    }
    const billions = Number(value) / 1_000_000_000;
    const formatted = billions.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    return `$${formatted}B`;
  };

  return (
    <>
      <div className="sr-only" id={tableId}>
        <table>
          <caption>
            Stacked expenditures by activity type for fiscal years 2019-2024.
          </caption>
          <thead>
            <tr>
              <th scope="col">Fiscal Year</th>
              {datasets.map((dataset) => (
                <th scope="col" key={dataset.label}>
                  {dataset.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {labels.map((year, columnIndex) => (
              <tr key={year}>
                <th scope="row">{year}</th>
                {datasets.map((dataset) => (
                  <td key={`${year}-${dataset.label}`}>
                    {formatValue(dataset.data[columnIndex])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{ width: "100%", height: "500px", overflowX: "auto" }}
        aria-hidden="true"
      >
        <Bar data={{ labels, datasets }} options={options} />
      </div>
    </>
  );
};

export default BarChart;
