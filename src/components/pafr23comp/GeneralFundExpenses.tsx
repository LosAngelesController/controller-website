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

import getAccessibleRandomColor from "../getAccessibleRandomColor";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface ChartData {
  Expenditure: string;
  Value: number;
  "Fiscal Year": string;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/csvsforpafr23/8fygeneralfundtotalexpenditures.csv");
        const csvData = await response.text();

        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          Expenditure: String(d["Expenditure"]),
          Value: parseFloat(String(d["Value"]).replace(/,/g, "").trim()) || 0,
          "Fiscal Year": String(d["Fiscal Year"]).trim(),
        }));

        const filteredData = dataArray.filter((data) => data["Fiscal Year"] >= "2019" && data["Fiscal Year"] <= "2024");
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

  const aggregatedData: { [revenue: string]: { [year: string]: number } } = {};
  chartData.forEach((data) => {
    const expenditure = data.Expenditure;
    const year = data["Fiscal Year"];
    if (!aggregatedData[expenditure]) {
      aggregatedData[expenditure] = {};
    }
    if (aggregatedData[expenditure][year]) {
      aggregatedData[expenditure][year] += data.Value;
    } else {
      aggregatedData[expenditure][year] = data.Value;
    }
  });

  const labels = Object.keys(aggregatedData[Object.keys(aggregatedData)[0]]);

  const toTransparent = (color: string, alpha: number) =>
    color.replace("rgb(", "rgba(").replace(")", `, ${alpha})`);

  const datasets = Object.entries(aggregatedData).map(([expenditure, data]) => ({
    label: expenditure,
    data: Object.values(data),
    backgroundColor: toTransparent(getAccessibleRandomColor(), 0.7),
    borderColor: "black",
    borderWidth: "0.25",
    stack: "stack",
  }));

  const formatNumber = (value: number) =>
    Number.isFinite(value) ? value.toLocaleString(undefined, { maximumFractionDigits: 0 }) : "0";

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
    <div>
      <div style={{ width: "100%", height: "500px", overflowX: "auto" }}>
        <Bar data={{ labels, datasets }} options={options} />
      </div>
      <table className="sr-only">
        <caption>General Fund expenses by fiscal year</caption>
        <thead>
          <tr>
            <th scope="col">Expenditure</th>
            {labels.map((year) => (
              <th scope="col" key={year}>
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(aggregatedData).map(([expenditure, data]) => (
            <tr key={expenditure}>
              <th scope="row">{expenditure}</th>
              {labels.map((year) => (
                <td key={year}>{formatNumber(data[year] ?? 0)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BarChart;
