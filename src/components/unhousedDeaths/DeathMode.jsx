"use client";
import axios from "axios";
import {Chart, registerables} from "chart.js";
import { useEffect, useState } from "react";
import {Bar} from "react-chartjs-2";


Chart.register(...registerables);

function isDarkMode() {
  if (typeof window !== 'undefined') {
    // Check local storage for user preference
    const userPreference = localStorage.getItem('theme');
    if (
      userPreference === 'dark' ||
      (userPreference === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return true;
    }
  }
  // Default to light mode on the server or when no preference is set
  return false;
}

function updateChartLabelColor() {
  if (typeof window !== 'undefined') {
    const isDark = isDarkMode();
    console.log('isDark:', isDark);
    document.documentElement.style.setProperty(
      '--chart-label-color',
      isDark
        ? 'var(--chart-label-color-dark)'
        : 'var(--chart-label-color-light)'
    );
  }
}

updateChartLabelColor();

if (typeof window !== 'undefined') {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', updateChartLabelColor);
}

export default function DeathMode() {
  const [mode, setMode] = useState([]);
  const isDark = isDarkMode();

  useEffect(() => {
    axios
    .get('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/2023UnhousedDeathsIngest/mode')
    .then((response) => {
        const data = response.data.mode;
        // console.log("mode", data);
        setMode(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
  }, []);

    var data = {
        labels: mode.map((x) => x.mode),
        datasets: [
          {
            data: mode.map((x) => x['numberOfDeaths']),
            backgroundColor: [
              "#41ffca",
            ],
            borderColor: [
              "#232323",
            ],
            borderWidth: 0.5,
          },
        ],
      };
    
      var options = {
        plugins: {
          legend: {
            display: false,
            labels: {
              color: isDark ? 'white' : 'black',
              font: {
                weight: "bold",
                size: 12,
              },
            },
          },
        },
        scales: {
          y: {
            grid: {
              display: true,
              color: isDark ? 'rgba(198, 198, 198, .5)' : 'rgb(211, 211, 211)',
            },
            ticks: {
              color: isDark ? 'white' : 'black',
            },
            title: {
                display: true,
                text: '# of Deaths',
                color: isDark ? 'white' : 'black',
            }
          },
          x: {
            grid: {
              display: true,
              color: isDark ? 'rgba(198, 198, 198, .5)' : 'rgb(211, 211, 211)',
            },
            ticks: {
              color: isDark ? 'white' : 'black',
            },
          },
        },
      };
    
      return (
        <div className="mt-6 py-4 px-1 sm:px-5 md:px-9 lg:px-20 xl:px-24 border border-zinc-900">
          <Bar data={data} height={100} width={150} options={options} />
        </div>
      );
}