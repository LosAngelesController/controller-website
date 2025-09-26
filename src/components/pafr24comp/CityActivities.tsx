"use client";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  ScatterController,
  Title,
  Tooltip,
} from "chart.js";
import { csvParse } from "d3";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ScatterController,
  LineController,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Legend
);
// ... (existing imports)

interface ChartData {
  Department: string;
  Asset: string;
  [year: string]: number | string;
}

const LineChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );

  const { theme, setTheme } = useTheme()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/csvsforpafr24/9City_activities.csv");
        const csvData = await response.text();

        const dataArray: ChartData[] = csvParse(csvData, (d) => {
          const chartDataItem: ChartData = {
            Department: String(d["DEPARTMENT"]),
            Asset: String(d["OPERATING INDICATOR / ASSET"]),
          };

          for (const key in d) {
            if (key !== "DEPARTMENT" && key !== "OPERATING INDICATOR / ASSET") {
              chartDataItem[key] = parseFloat(String(d[key]).replace(/,/g, "")) || 0;
            }
          }

          return chartDataItem;
        });


        setChartData(dataArray);
        // Select the first department by default
        setSelectedDepartment(dataArray[0]?.Department || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const departments = [
    ...new Set(chartData?.map((data) => data?.Department)),
  ].filter((department) => department !== "");
  const assets = [...new Set(chartData?.map((data) => data?.Asset))].filter(
    (asset) => asset !== "");

  const handleDepartmentClick = (department: string) => {
    setSelectedDepartment(department);
  };

  if (!chartData) {
    return null;
  }

  // Filter data for the selected department
  const filteredData = chartData.filter(
    (data) => data.Department === selectedDepartment
  );

  // Filter assets related to the selected department
  const departmentAssets = assets.filter(
    (asset) => filteredData.some((data) => data.Asset === asset)
  );

  const charts = departmentAssets.map((asset) => {
    const dataForAsset = filteredData.filter((data) => data.Asset === asset);

    // const labels = Object.keys(chartData[0]).filter(
    //   (key) => key !== "Department" && key !== "Asset"
    // );
    const labels = Object.keys(chartData[0])
      .filter((key) => /^\d{4}$/.test(key)); // Only include keys that are 4-digit years


    const datasets = dataForAsset.map((data) => ({
      label: `${data.Department} - ${data.Asset}`,
      data: labels.map((year) => data[year]),
      borderColor: getRandomColor(),
      fill: false,
    }));

    function getRandomColor() {
      return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255
        }, 0.7)`;
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
            text: "Year",
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
      <div key={asset} style={{ marginBottom: "20px" }}>
        <h3>{asset}</h3>
        <div style={{ width: "100%", height: "300px" }}>
          <Line data={{ labels, datasets }} options={options} />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="!flex flex-wrap " >
        {departments.map((item) => (
          <button
            key={item}
            onClick={() => handleDepartmentClick(item)}
            style={{
              margin: "2px 4px",
              padding: "4px 8px",
              backgroundColor:
                selectedDepartment === item ? "#0f910f" : "grey",
              cursor: "pointer",
              border:
                selectedDepartment === item
                  ? "2px solid green"
                  : "2px solid black",
              borderRadius: "10px",
              // fontWeight: "600",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div >{charts}</div>
    </div>
  );
};

export default LineChart;
