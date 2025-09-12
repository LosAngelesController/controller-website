'use client';
import { Chart, registerables } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';

Chart.register(...registerables);

function PlacePie() {
  const places = [
    {
      category: 'Streets/Areas w/o Proper Utilities',
      percentage: 0.73,
      list: [
        'Abandoned/Vacant Building',
        'Business/Restaurant/Mall/Plaza',
        'Encampment',
        'Garage',
        'Mobilehome/Motorhome/Trailer',
        'Outdoors (Nature)',
        'Park/Recreation Areas',
        'Patio/Yard/Shed',
        'Parking',
        'Public Transit',
        'Restroom/Bathroom',
        'Staircase/Stairwell',
        'Street/Freeway/Tunnel/Sidewalk',
        'Tent',
        'Vehicle',
      ],
    },
    {
      category: 'Healthcare Facilities',
      percentage: 0.15,
      list: [''],
    },
    {
      category: 'Other Sheltered Places',
      percentage: 0.1,
      list: ['Facility/Building', 'Hotel/Motel', 'Jail', 'Residence', 'Shelter'],
    },
    {
      category: 'Other',
      percentage: 0.02,
      list: [''],
    },
  ];

  const data = {
    labels: places.map((x) => x.category),
    datasets: [
      {
        label: 'Percent of Total Deaths',
        data: places.map((x) => x.percentage),
        backgroundColor: [
          '#41ffca',
          '#2563eb',
          '#7dd3fc',
          '#fde047',
          '#f87171',
        ],
        borderColor: ['#232323', '#232323', '#232323', '#232323', '#232323'],
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => {
            const percentValue = (tooltipItem.parsed * 100).toFixed(0);
            return `Percent of Total Deaths: ${percentValue}%`;
          },
          footer: (tooltipItems) => {
            let tooltipItem = tooltipItems[0];
            const label = tooltipItem.label;
            const filteredPlace = places.find((place) => place.category === label);
  
            if (filteredPlace && filteredPlace.list && filteredPlace.list.length) {
              return filteredPlace.list;
            }
            return [];
          },
        },
        footerFont: { size: 11 },
      },
    },
  };
  

  return (
    <div className='my-7 mx-10 sm:mx-10 md:mx-20 lg:mx-28 xl:mx-32'>
      <Pie data={data} height={100} options={options} />
    </div>
  );
}

export default PlacePie;
