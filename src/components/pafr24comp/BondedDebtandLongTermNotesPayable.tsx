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
  Total: number;
  Value: number;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/csvsforpafr24/4bondeddebtandlongtermnotespayable.csv"
        );
        const csvData = await response.text();

        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          Year: String(d["Fiscal Year"]).trim(),
          "Activity Type": String(d["Activity Type"]).trim(),
          Total: parseFloat(String(d["Total"]).replace(/,/g, "").trim()) || 0,
          Value: parseFloat(String(d["Value"]).replace(/,/g, "").trim()) || 0,
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

  // Aggregate data
  const aggregatedData: { [activityType: string]: { [year: string]: number } } = {};
  const activitiesSum: { [year: string]: number } = {};

  chartData.forEach((data) => {
    const activityType = data["Activity Type"];
    const year = data.Year;

    if (!aggregatedData[activityType]) {
      aggregatedData[activityType] = {};
    }

    if (aggregatedData[activityType][year]) {
      aggregatedData[activityType][year] += data.Value;
    } else {
      aggregatedData[activityType][year] = data.Value;
    }

    if (activitiesSum[year]) {
      activitiesSum[year] += data.Value;
    } else {
      activitiesSum[year] = data.Value;
    }
  });

  // Generate labels (years)
  const labels = Object.keys(aggregatedData[Object.keys(aggregatedData)[0]]);

  // Create datasets
  const datasets = Object.entries(aggregatedData).map(([activityType, data]) => ({
    label: activityType,
    data: labels.map((year) => data[year] || 0),
    backgroundColor: getColor(activityType),
    borderColor: "black",
    borderWidth: 0.5,
    stack: "stack",
  }));

  // Add line dataset for the yearly sum
  const lineDataset = {
    label: "Yearly Sum",
    data: labels.map((year) => activitiesSum[year] || 0),
    fill: false,
    borderColor: "gray",
    backgroundColor: "gray",
    type: "line",
  };

  const allDatasets = [...datasets, lineDataset];

  function getColor(activityType: string) {
    return activityType === "Governmental" ? "#41ffca" : "#ffca41";
  }

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

  const tableId = "pafr24-bonded-debt-summary";

  const formatValue = (value: number | undefined) => {
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

  const activityLabels = datasets.map((dataset) => dataset.label);
  const totalByActivity = activityLabels.map((_, index) =>
    datasets[index].data.reduce((acc, value) => acc + value, 0)
  );
  const grandTotal = labels.reduce(
    (acc, year) => acc + (activitiesSum[year] || 0),
    0
  );

  return (
    <>
      <div className="sr-only" id={tableId}>
        <table>
          <caption>
            Bonded debt and long-term notes payable by activity type for fiscal years 2019-2024.
          </caption>
          <thead>
            <tr>
              <th scope="col">Fiscal Year</th>
              {activityLabels.map((activity) => (
                <th scope="col" key={activity}>
                  {activity}
                </th>
              ))}
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {labels.map((year, index) => (
              <tr key={year}>
                <th scope="row">{year}</th>
                {datasets.map((dataset) => (
                  <td key={`${year}-${dataset.label}`}>
                    {formatValue(dataset.data[index])}
                  </td>
                ))}
                <td>{formatValue(activitiesSum[year])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{ width: "100%", height: "500px", overflowX: "auto" }}
        aria-hidden="true"
      >
        <Bar data={{ labels, datasets: allDatasets } as any} options={options} />
      </div>
    </>
  );
};

export default BarChart;
