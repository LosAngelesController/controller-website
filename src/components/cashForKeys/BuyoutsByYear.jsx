'use client';

import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { useEffect, useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

const API_URL =
  'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/tenantBuyoutsAnalysis/tenantBuyoutsByYear';

const AXIS_TEXT = 'rgb(255, 255, 255)';
const GRID_LINE = 'rgba(212, 212, 216, 0.7)';
const BAR_FILL = '#41ffca';

export default function BuyoutsByYear() {
  const [buyoutYears, setBuyoutYears] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'

  useEffect(() => {
    let cancelled = false;

    axios
      .get(API_URL)
      .then((response) => {
        if (cancelled) return;
        const rows = response.data?.tenantBuyoutsByYear ?? [];
        // Sort ascending so "first year" and "last year" are reliable downstream.
        setBuyoutYears(
          [...rows].sort((a, b) => Number(a.year) - Number(b.year))
        );
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
      labels: buyoutYears.map((x) => x.year),
      datasets: [
        {
          label: 'Buyouts',
          data: buyoutYears.map((x) => Number(x.number)),
          backgroundColor: BAR_FILL,
          borderColor: BAR_FILL,
          borderWidth: 1,
        },
      ],
    }),
    [buyoutYears]
  );

  // Screen-reader summary of what the chart shows. Rebuilt whenever the data changes.
  const summary = useMemo(() => {
    if (!buyoutYears.length) return '';

    const total = buyoutYears.reduce((sum, x) => sum + Number(x.number), 0);
    const first = buyoutYears[0];
    const last = buyoutYears[buyoutYears.length - 1];

    const ranked = [...buyoutYears].sort(
      (a, b) => Number(b.number) - Number(a.number)
    );
    const peak = ranked[0];
    const trough = ranked[ranked.length - 1];

    const change = Number(last.number) - Number(first.number);
    const direction =
      change < 0
        ? 'a decrease of'
        : change > 0
        ? 'an increase of'
        : 'no change, at';
    const trend = `From ${first.year} to ${last.year}, ${direction} ${Math.abs(
      change
    )} buyouts.`;

    return (
      `Bar chart of tenant buyouts by year, ${first.year} to ${last.year}. ` +
      `${total} buyouts in total. ` +
      `${peak.year} was highest with ${peak.number}. ` +
      `${trough.year} was lowest with ${trough.number}. ` +
      `${trend} ` +
      `Full figures follow in a table.`
    );
  }, [buyoutYears]);

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
          text: 'Year',
          color: AXIS_TEXT,
        },
      },
    },
  };

  const hasData = status === 'ready' && buyoutYears.length > 0;

  return (
    <div className='relative mt-4 h-96 w-full bg-zinc-900 px-1 py-4 text-zinc-50 sm:px-5 md:px-9 lg:px-20 xl:px-24'>
      {status === 'loading' && <p role='status'>Loading buyout data…</p>}

      {status === 'error' && (
        <p role='alert'>
          Buyout data didn’t load. Refresh the page to try again.
        </p>
      )}

      {status === 'ready' && buyoutYears.length === 0 && (
        <p role='status'>No buyouts have been recorded for these years.</p>
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
            <caption>Tenant buyouts by year</caption>
            <thead>
              <tr>
                <th scope='col'>Year</th>
                <th scope='col'>Number of buyouts</th>
              </tr>
            </thead>
            <tbody>
              {buyoutYears.map((x) => (
                <tr key={x.year}>
                  <th scope='row'>{x.year}</th>
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
