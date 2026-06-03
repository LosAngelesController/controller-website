'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Top20Zip() {
  const [zipNotices, setZipNotices] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'

  useEffect(() => {
    let cancelled = false;

    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/evictionNoticesAnalysisMonthly/topTwenty'
      )
      .then((response) => {
        if (cancelled) return;
        setZipNotices(response.data.topTwenty ?? []);
        setStatus('ready');
      })
      .catch((error) => {
        if (cancelled) return;
        // eslint-disable-next-line no-console
        console.error('Error loading eviction notices:', error);
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className='bg-white p-2'>
      {/*
        SC 4.1.3 Status Messages — aria-live region announces fetch state
        to screen readers without moving focus. Visually hidden; the table
        and inline messages below provide the sighted equivalent.
      */}
      <div role='status' aria-live='polite' className='sr-only'>
        {status === 'loading' && 'Loading eviction notice data.'}
        {status === 'ready' &&
          `Loaded ${zipNotices.length} zip codes with eviction notices.`}
        {status === 'error' &&
          'Unable to load eviction notice data. Please try again later.'}
      </div>

      {/*
        SC 2.4.6 / 1.3.1 — a real <h2> gives the table a place in the
        document outline. Visually hidden because the <caption> already
        shows the title to sighted users, and we don't want duplication.
      */}
      <h2 id='top20zip-heading' className='sr-only'>
        Top 20 Zip Codes with Highest Number of Eviction Notices
      </h2>

      {/* SC 1.4.10 Reflow — wrapper scrolls horizontally on narrow viewports. */}
      <div className='overflow-x-auto'>
        <table
          id='top20zip-table'
          className='w-full table-auto border border-black'
          aria-labelledby='top20zip-heading'
          aria-describedby='top20zip-status'
        >
          <caption
            id='top20zip-caption'
            className='border border-b-0 border-black bg-[#41ffca] p-2 text-center text-3xl font-bold text-black'
          >
            Top 20 Zip Codes with Highest Number of Eviction Notices
          </caption>

          <thead className='border border-black bg-[#41ffca] text-black'>
            <tr>
              <th
                id='top20zip-zip-code-header'
                scope='col'
                className='border border-black p-2 text-left'
              >
                Zip Code
              </th>
              <th
                id='top20zip-communities-header'
                scope='col'
                className='border border-black p-2 text-left'
              >
                Communities
              </th>
              <th
                id='top20zip-notices-header'
                scope='col'
                className='border border-black p-2 text-right'
              >
                <span aria-hidden='true'># of Eviction Notices</span>
                <span className='sr-only'>Number of eviction notices</span>
              </th>
            </tr>
          </thead>

          <tbody className='text-black'>
            {status === 'loading' && (
              <tr>
                <td
                  colSpan={3}
                  headers='top20zip-zip-code-header top20zip-communities-header top20zip-notices-header'
                  className='border border-black p-4 text-center italic'
                >
                  Loading data…
                </td>
              </tr>
            )}

            {status === 'error' && (
              <tr>
                <td
                  colSpan={3}
                  headers='top20zip-zip-code-header top20zip-communities-header top20zip-notices-header'
                  className='border border-black p-4 text-center text-red-700'
                >
                  Unable to load eviction notice data. Please refresh the page
                  or try again later.
                </td>
              </tr>
            )}

            {status === 'ready' && zipNotices.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  headers='top20zip-zip-code-header top20zip-communities-header top20zip-notices-header'
                  className='border border-black p-4 text-center italic'
                >
                  No eviction notice data available.
                </td>
              </tr>
            )}

            {status === 'ready' &&
              zipNotices.map((row, index) => {
                const rowHeaderId = `top20zip-row-${index}-zip-code`;

                return (
                  <tr key={row.id ?? `${row.zipCode}-${index}`}>
                    <th
                      id={rowHeaderId}
                      scope='row'
                      headers='top20zip-zip-code-header'
                      className='border border-black p-2 text-left font-bold'
                    >
                      {row.zipCode}
                    </th>
                    <td
                      headers={`${rowHeaderId} top20zip-communities-header`}
                      className='border border-black p-2'
                    >
                      {row.communities}
                    </td>
                    <td
                      headers={`${rowHeaderId} top20zip-notices-header`}
                      className='border border-black p-2 text-right'
                    >
                      {typeof row.number === 'number'
                        ? row.number.toLocaleString()
                        : row.number}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* Hidden description associated via aria-describedby, useful for AT users. */}
      <p id='top20zip-status' className='sr-only'>
        Table shows zip codes, associated community names, and the number of
        eviction notices filed in each.
      </p>
    </div>
  );
}
