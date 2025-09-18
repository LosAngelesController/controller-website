'use client';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

export default function NoticesByMonth() {
  const [monthNotices, setMonthNotices] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/evictionNoticesAnalysisMonthly/noticesByMonth'
      )
      .then((response) => {
        const data = response.data.noticesByMonth;
        // console.log("by month", data);
        setMonthNotices(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  // console.log('month notices', monthNotices);

  var data = {
    labels: monthNotices.map((x) => x.month),
    datasets: [
      {
        data: monthNotices.map((x) => x.number),
        backgroundColor: ['#41ffca'],
        borderColor: ['#41ffca'],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    responsive: true,
    // maintainAspectRatio: false,
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
    monthNotices.length > 0
      ? `Bar chart of eviction notices per month from ${monthNotices[0].month} to ${monthNotices[monthNotices.length - 1].month
      }.`
      : 'Bar chart of eviction notices per month.';

  return (
    <div className='mt-4 bg-zinc-900 px-5 py-4'>
      {data && data.datasets.length > 0 ? (
        <>
          <Bar
            data={data}
            height={150}
            width={200}
            options={options}
            aria-label={accessibleLabel}
            aria-describedby='eviction-chart-desc'
          />
          <p id='eviction-chart-desc' className='sr-only'>
            Eviction notices peaked in mid-2023 at over 11,000 per month, then gradually declined to around 5,000–6,000 per month by early 2025.
          </p>
        </>
      ) : (
        <p>Loading chart…</p>
      )}

      {/* <Bar data={data} height={150} width={200} options={options} /> */}
    </div>
  );
}
