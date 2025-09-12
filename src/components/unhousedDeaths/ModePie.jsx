"use client";
import axios from "axios";
import { Chart, registerables } from "chart.js";
import React, {useEffect, useState} from 'react';
import { Pie } from "react-chartjs-2";

Chart.register(...registerables);

function ModePie() {
  const [mode, setMode] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/2023UnhousedDeathsIngest/mode')
    .then((response) => {
        const data = response.data.mode;
        console.log("data", data);
        setMode(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
  }, []);

  const data = {
    labels: mode.map((x) => x.mode),
    datasets: [
      {
        label: "Percent of Total Deaths",
        data: mode.map((x) => x.percentOfTotalDeaths),
        backgroundColor: [
          "#41ffca",
          "#2563eb",
          "#7dd3fc",
          "#fde047",
          "#f87171",
        ],
        borderColor: [
          "#232323",
          "#232323",
          "#232323",
          "#232323",
          "#232323",
        ],
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "rgb(255, 255, 255)",
          font: {
            weight: "bold",
            size: 12
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => {
            // console.log('no data', tooltipItem);
            const percentValue = (tooltipItem.parsed * 100).toFixed(0);
            return `Percent of Total Deaths: ${percentValue}%`
          }
        }
      }
    }
  };
  
  

  return (
    <div className="my-6 mx-12 sm:mx-16 md:mx-20 lg:mx-28 xl:mx-32">
      <Pie data={data} height={100} options={options} />
    </div>
  );
}

export default ModePie;