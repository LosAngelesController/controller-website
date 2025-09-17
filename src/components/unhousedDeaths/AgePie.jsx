'use client';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

Chart.register(...registerables);

function AgePie() {
  const [age, setAge] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/2023UnhousedDeathsIngest/age'
      )
      .then((response) => {
        const data = response.data.age;
        console.log('data', data);
        setAge(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const data = {
    labels: age.map((x) => x.ageCategory),
    datasets: [
      {
        label: '2023 Unhoused Deaths in City of LA by Month',
        data: age.map((x) => x.numberOfDeaths),
        backgroundColor: [
          // '#a21caf',
          '#f0fdf4',
          '#0891b2',
          '#16a34a',
          '#fde047',
          '#67e8f9',
          '#3730a3',
          '#41ffca',
          '#f87171',
          '#d6d3d1',
          '#2563eb',
          // '#fb923c',
        ],
        borderColor: [
          // '#a21caf',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          // '#fb923c',
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
          color: 'rgb(255, 255, 255)',
          font: {
            weight: 'bold',
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => {
            // console.log('no data', tooltipItem);
            const filteredDeaths = age.map((x) => x.numberOfDeaths);
            // console.log("total", filteredDeaths);
            const totalDeaths = (deaths) =>
              deaths.reduce((total, num) => total + num, 0);
            const totalUnhousedDeaths = totalDeaths(filteredDeaths);
            const percentValue = (
              (tooltipItem.parsed / totalUnhousedDeaths) *
              100
            ).toFixed(1);
            return `Number of Deaths: ${tooltipItem.parsed} (${percentValue}%)`;
          },
        },
      },
    },
  };

  return (
    <div className='my-6 mx-12 sm:mx-16 md:mx-20 lg:mx-28 xl:mx-32'>
      <Pie data={data} height={100} options={options} />
    </div>
  );
}

export default AgePie;