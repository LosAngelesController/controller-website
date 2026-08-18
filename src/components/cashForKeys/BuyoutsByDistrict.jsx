'use client';

import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { useEffect, useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

const API_URL =
  'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/tenantBuyoutsAnalysis/tenantBuyoutsByCd';

const AXIS_TEXT = 'rgb(255, 255, 255)';
const GRID_LINE = 'rgba(212, 212, 216, 0.7)';
const BAR_FILL = '#41ffca';

export default function BuyoutsByDistrict() {
  const [buyoutCD, setBuyoutCD] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'

  useEffect(() => {
    let cancelled = false;

    axios
      .get(API_URL)
      .then((response) => {
        if (cancelled) return;
        setBuyoutCD(response.data?.tenantBuyoutsByCd ?? []);
        setStatus('ready');
      })
      .catch((error) => {
        if (cancelled) return;
        console.error('Error:', error);
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const data = useMemo(
    () => ({
      labels: buyoutCD.map((x) => x.councilDistrict),
      datasets: [
        {
          label: 'Buyouts',
          data: buyoutCD.map((x) => Number(x.number)),
          backgroundColor: BAR_FILL,
          borderColor: BAR_FILL,
          borderWidth: 1,
        },
      ],
    }),
    [buyoutCD]
  );

  // Screen-reader summary of what the chart shows. Rebuilt whenever the data changes.
  const summary = useMemo(() => {
    if (!buyoutCD.length) return '';

    const total = buyoutCD.reduce((sum, x) => sum + Number(x.number), 0);
    const ranked = [...buyoutCD].sort(
      (a, b) => Number(b.number) - Number(a.number)
    );
    const most = ranked[0];
    const fewest = ranked[ranked.length - 1];

    return (
      `Bar chart of tenant buyouts by council district. ` +
      `${total} buyouts across ${buyoutCD.length} districts. ` +
      `District ${most.councilDistrict} has the most, with ${most.number}. ` +
      `District ${fewest.councilDistrict} has the fewest, with ${fewest.number}. ` +
      `Full figures follow in a table.`
    );
  }, [buyoutCD]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: AXIS_TEXT,
          font: {
            weight: 'bold',
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          title: (items) => `District ${items[0].label}`,
          label: (item) => `${item.formattedValue} buyouts`,
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: true,
          color: GRID_LINE,
        },
        ticks: {
          color: AXIS_TEXT,
        },
        title: {
          display: true,
          text: '# of Buyouts',
          color: AXIS_TEXT,
        },
      },
      x: {
        grid: {
          display: true,
          color: GRID_LINE,
        },
        ticks: {
          color: AXIS_TEXT,
        },
        title: {
          display: true,
          text: 'Council District',
          color: AXIS_TEXT,
        },
      },
    },
  };

  const hasData = status === 'ready' && buyoutCD.length > 0;

  return (
    <div className='relative mt-4 h-96 w-full bg-zinc-900 px-1 py-4 text-zinc-50 sm:px-5 md:px-9 lg:px-20 xl:px-24'>
      {status === 'loading' && <p role='status'>Loading buyout data…</p>}

      {status === 'error' && (
        <p role='alert'>
          Buyout data didn’t load. Refresh the page to try again.
        </p>
      )}

      {status === 'ready' && buyoutCD.length === 0 && (
        <p role='status'>No buyouts have been recorded for these districts.</p>
      )}

      {hasData && (
        <>
          <Bar
            data={data}
            options={options}
            role='img'
            aria-label={summary}
            fallbackContent={<p>{summary}</p>}
          />

          {/* Same numbers as the chart, reachable by screen readers and keyboard. */}
          <table className='sr-only'>
            <caption>Tenant buyouts by council district</caption>
            <thead>
              <tr>
                <th scope='col'>Council district</th>
                <th scope='col'>Number of buyouts</th>
              </tr>
            </thead>
            <tbody>
              {buyoutCD.map((x) => (
                <tr key={x.councilDistrict}>
                  <th scope='row'>{x.councilDistrict}</th>
                  <td>{x.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
