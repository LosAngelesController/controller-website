'use client';

import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

export default function NoticesByCd(props) {
  const [cdNotices, setCdNotices] = useState([]);

  useEffect(() => {
    let url =
      'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/evictionNoticesAnalysisMonthly/noticesByCd';
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        // console.log("cd", json.noticesByCd);
        let notices = json.noticesByCd;
        setCdNotices(notices);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  var data = {
    labels: cdNotices.map((x) => x.councilDistrict),
    datasets: [
      {
        data: cdNotices.map((x) => x.number),
        backgroundColor: ['#41ffca'],
        borderColor: ['#41ffca'],
        borderWidth: 1,
      },
    ],
  };

  var options = {
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
    },
    scales: {
      y: {
        grid: {
          display: true,
          color: 'rgba(198, 198, 198, .5)',
        },
        ticks: {
          color: 'rgb(255, 255, 255)',
        },
        title: {
          display: true,
          text: '# of Eviction Notices',
          color: 'rgb(255, 255, 255)',
        },
      },
      x: {
        grid: {
          display: true,
          color: 'rgba(198, 198, 198, .5)',
        },
        ticks: {
          color: 'rgb(255, 255, 255)',
        },
      },
    },
  };
  const accessibleLabel =
    'Bar chart showing the number of eviction notices by Los Angeles council district.';


  return (
    <div className='relative mt-4 w-full bg-zinc-900 px-5 py-4'>
      {/* <Bar data={data} height={150} width={200} options={options} />*/}
      {data && data.datasets.length > 0 ? (
        <Bar data={data} height={150} width={200} options={options} aria-label={accessibleLabel} />
      ) : (
        <p>Loading chart…</p>
      )}
    </div>
  );
}
