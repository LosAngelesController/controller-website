'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL =
  'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/tenantBuyoutsAnalysis/top20';

const CELL_BORDER = { border: '1px solid black' };
const ACCENT = '#41ffca';

// Sheety returns strings, and blanks come back as '' — which Number() turns into 0.
// Return null for anything genuinely missing so it isn't rendered as a real zero.
function toNumber(value) {
  if (value === null || value === undefined) return null;
  const cleaned = String(value).replace(/[$,\s]/g, '');
  if (cleaned === '') return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function NoData() {
  return (
    <>
      <span aria-hidden='true'>—</span>
      <span className='sr-only'>No data</span>
    </>
  );
}

export default function BuyoutsByZip() {
  const [zipBuyouts, setZipBuyouts] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'

  useEffect(() => {
    let cancelled = false;

    axios
      .get(API_URL)
      .then((response) => {
        if (cancelled) return;
        setZipBuyouts(response.data?.top20 ?? []);
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

  const headerClass = 'p-2 text-left text-black';
  const cellClass = 'p-2 text-black';

  if (status === 'loading') {
    return (
      <div className='mt-4 px-1 sm:px-5 md:px-9 lg:px-20 xl:px-24'>
        <p role='status' className='bg-white p-2 text-black'>
          Loading buyouts by zip code…
        </p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className='mt-4 px-1 sm:px-5 md:px-9 lg:px-20 xl:px-24'>
        <p role='alert' className='bg-white p-2 text-black'>
          Buyouts by zip code didn’t load. Refresh the page to try again.
        </p>
      </div>
    );
  }

  if (zipBuyouts.length === 0) {
    return (
      <div className='mt-4 px-1 sm:px-5 md:px-9 lg:px-20 xl:px-24'>
        <p role='status' className='bg-white p-2 text-black'>
          No buyouts by zip code have been recorded.
        </p>
      </div>
    );
  }

  return (
    <div className='mt-4 px-1 sm:px-5 md:px-9 lg:px-20 xl:px-24'>
      <div className='bg-white p-2'>
        {/* Focusable so keyboard users can scroll the table when it overflows. */}
        <div
          role='region'
          aria-labelledby='buyout-zip-caption'
          tabIndex={0}
          className='overflow-x-auto'
        >
          <table className='w-full table-auto border-collapse'>
            <caption
              id='buyout-zip-caption'
              className='mb-2 text-left italic text-black'
            >
              Top 20 zip codes and communities by number of tenant buyout
              agreements
            </caption>

            <thead
              className='text-black'
              style={{ ...CELL_BORDER, backgroundColor: ACCENT }}
            >
              <tr>
                <th scope='col' className={headerClass} style={CELL_BORDER}>
                  <span aria-hidden='true'>#</span>
                  <span className='sr-only'>Rank</span>
                </th>
                <th scope='col' className={headerClass} style={CELL_BORDER}>
                  Zip Code
                </th>
                <th scope='col' className={headerClass} style={CELL_BORDER}>
                  Communities
                </th>
                <th
                  scope='col'
                  className={`${headerClass} text-right`}
                  style={CELL_BORDER}
                >
                  # of Buyouts
                </th>
              </tr>
            </thead>

            <tbody className='text-black' style={CELL_BORDER}>
              {zipBuyouts.map((row, index) => {
                const buyouts = toNumber(row.number);

                return (
                  <tr key={row.id} style={CELL_BORDER}>
                    <td
                      className={`${cellClass} font-bold`}
                      style={CELL_BORDER}
                    >
                      {index + 1}
                    </td>
                    <th
                      scope='row'
                      className={`${cellClass} text-left font-bold`}
                      style={CELL_BORDER}
                    >
                      {row.zipCode || <NoData />}
                    </th>
                    <td className={cellClass} style={CELL_BORDER}>
                      {row.communities || <NoData />}
                    </td>
                    <td
                      className={`${cellClass} text-right`}
                      style={CELL_BORDER}
                    >
                      {buyouts !== null ? buyouts.toLocaleString() : <NoData />}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
