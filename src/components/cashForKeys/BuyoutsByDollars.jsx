'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL =
  'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/tenantBuyoutsAnalysis/tenantBuyoutAmtRange';

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

export default function BuyoutsByDollars() {
  const [dollarBuyout, setDollarBuyout] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'

  useEffect(() => {
    let cancelled = false;

    axios
      .get(API_URL)
      .then((response) => {
        if (cancelled) return;
        setDollarBuyout(response.data?.tenantBuyoutAmtRange ?? []);
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

  const headerClass =
    'p-2 text-left text-base text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl';
  const cellClass =
    'p-2 text-base text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl';

  // The API puts the totals in the final row.
  const bodyRows = dollarBuyout.slice(0, -1);
  const totalRow =
    dollarBuyout.length > 1 ? dollarBuyout[dollarBuyout.length - 1] : null;

  const renderCells = (row) => {
    const buyouts = toNumber(row['#OfBuyouts']);
    const amount = toNumber(row.amount);

    return (
      <>
        <td className={`${cellClass} text-right`} style={CELL_BORDER}>
          {buyouts !== null ? buyouts.toLocaleString() : <NoData />}
        </td>
        <td className={`${cellClass} text-right`} style={CELL_BORDER}>
          {amount !== null ? `$${amount.toLocaleString()}` : <NoData />}
        </td>
      </>
    );
  };

  if (status === 'loading') {
    return (
      <div className='mt-4 px-1 sm:px-5 md:px-9 lg:px-20 xl:px-24'>
        <p role='status' className='bg-white p-2 text-black'>
          Loading buyout amounts…
        </p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className='mt-4 px-1 sm:px-5 md:px-9 lg:px-20 xl:px-24'>
        <p role='alert' className='bg-white p-2 text-black'>
          Buyout amounts didn’t load. Refresh the page to try again.
        </p>
      </div>
    );
  }

  if (dollarBuyout.length === 0) {
    return (
      <div className='mt-4 px-1 sm:px-5 md:px-9 lg:px-20 xl:px-24'>
        <p role='status' className='bg-white p-2 text-black'>
          No buyout amounts have been recorded.
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
          aria-labelledby='buyout-amount-caption'
          tabIndex={0}
          className='overflow-x-auto'
        >
          <table className='w-full table-auto border-collapse'>
            <caption
              id='buyout-amount-caption'
              className='p-2 text-left text-base italic text-black'
            >
              Tenant buyouts by dollar range
            </caption>

            <thead
              className='text-black'
              style={{ ...CELL_BORDER, backgroundColor: ACCENT }}
            >
              <tr>
                <th scope='col' className={headerClass} style={CELL_BORDER}>
                  Buyout Range
                </th>
                <th
                  scope='col'
                  className={`${headerClass} text-right`}
                  style={CELL_BORDER}
                >
                  # of Buyouts
                </th>
                <th
                  scope='col'
                  className={`${headerClass} text-right`}
                  style={CELL_BORDER}
                >
                  Amount
                </th>
              </tr>
            </thead>

            <tbody className='text-black' style={CELL_BORDER}>
              {bodyRows.map((row) => (
                <tr key={row.id} style={CELL_BORDER}>
                  <th
                    scope='row'
                    className={`${cellClass} text-left font-bold`}
                    style={CELL_BORDER}
                  >
                    {row.buyoutRange}
                  </th>
                  {renderCells(row)}
                </tr>
              ))}
            </tbody>

            {totalRow && (
              <tfoot className='text-black'>
                <tr
                  key={totalRow.id}
                  style={{ ...CELL_BORDER, backgroundColor: ACCENT }}
                >
                  <th
                    scope='row'
                    className={`${cellClass} text-left font-bold`}
                    style={CELL_BORDER}
                  >
                    {totalRow.buyoutRange?.trim() || 'Total'}
                  </th>
                  {renderCells(totalRow)}
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
