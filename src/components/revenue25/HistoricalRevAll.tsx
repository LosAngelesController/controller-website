import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';

import { processEachValueIntoTextMore } from '@/components/utils';

const LEGEND_ITEMS = [
  { label: 'Budget', color: '#D0824A' },
  { label: 'Receipts', color: '#2BA784' },
];

export function HistoricalRevAll(props: any) {
  const generalbox = React.useRef<any>(null);
  const specialbox = React.useRef<any>(null);

  React.useEffect(() => {
    d3.csv('/csvsrevenueforecast25/remove-individal-funds-lol.csv').then(
      (removeIndividalFundsLol: any) => {
        const removeIndividalFundsLol1 = removeIndividalFundsLol.map(
          (e: any) => {
            return {
              ...e,
              'Fiscal Year': parseInt(e['Fiscal Year']),
              'Sum of Amount': parseFloat(e['Sum of Amount']),
            };
          }
        );

        const generalDescription =
          'Budgets climb from about $4.3B in FY2007 to $7.9B in FY2023. Receipts range from roughly $4.3B in FY2011 to $7.6B in FY2023, with projections just under $7.8B through FY2025.';

        const specialDescription =
          'Budgets grow from about $1.9B in FY2007, peak near $3.36B in FY2020, and hold close to $3.33B in FY2023. Receipts cover the full actual range from $1.9B in FY2007 through $3.32B in FY2022, ending FY2023 around $3.28B, before projections rise to $3.76B by FY2025.';

        const generateSubPlot = (input: string) => {
          const isGeneralFund = input === 'General Fund';

          const sortByYear = (arr: any[]) =>
            arr.sort((a: any, b: any) => a['Fiscal Year'] - b['Fiscal Year']);

          const budgetData = sortByYear(
            removeIndividalFundsLol1.filter(
              (item: any) => item.Type === 'Budget' && item.Category === input
            )
          );
          const budgetActual = sortByYear(
            budgetData.filter(
              (item: any) => item['Forecast Type'] === 'Actual'
            )
          );
          const budgetProjected = sortByYear(
            budgetData.filter(
              (item: any) => item['Forecast Type'] !== 'Actual'
            )
          );

          const receiptsData = sortByYear(
            removeIndividalFundsLol1.filter(
              (item: any) => item.Type === 'Receipts' && item.Category === input
            )
          );
          const receiptsActual = sortByYear(
            receiptsData.filter(
              (item: any) => item['Forecast Type'] === 'Actual'
            )
          );
          const receiptsProjected = sortByYear(
            receiptsData.filter(
              (item: any) => item['Forecast Type'] !== 'Actual'
            )
          );

          const withBridge = (series: any[], projected: any[]) => {
            if (!projected.length || !series.length) {
              return projected;
            }

            const bridgeStart = series[series.length - 1];
            if (projected[0]['Fiscal Year'] === bridgeStart['Fiscal Year']) {
              return projected;
            }

            return [bridgeStart, ...projected];
          };

          const budgetProjectedWithBridge = withBridge(budgetActual, budgetProjected);
          const receiptsProjectedWithBridge = withBridge(
            receiptsActual,
            receiptsProjected
          );

          return Plot.plot({
            width: 750,
            marginRight: 80,
            marginTop: isGeneralFund ? 40 : 70,
            marginBottom: isGeneralFund ? 80 : 50,
            x: {
              domain: [
                d3.min(removeIndividalFundsLol1, (d: any) => d['Fiscal Year']),
                d3.max(removeIndividalFundsLol1, (d: any) => d['Fiscal Year']),
              ],
              ticks: removeIndividalFundsLol1.map((d: any) => d['Fiscal Year']),
            },
            y: {
              tickFormat: (tick: any) =>
                d3.format('~s')(tick).replace('G', 'B'),
              label: 'Revenue',
            },
            marks: [
              budgetActual.length
                ? Plot.lineY(budgetActual, {
                    x: 'Fiscal Year',
                    y: 'Sum of Amount',
                    stroke: '#D0824A',
                  })
                : null,
              budgetProjectedWithBridge.length
                ? Plot.lineY(budgetProjectedWithBridge, {
                    x: 'Fiscal Year',
                    y: 'Sum of Amount',
                    stroke: '#D0824A',
                    strokeDasharray: '2,6',
                  })
                : null,
              receiptsActual.length
                ? Plot.lineY(receiptsActual, {
                    x: 'Fiscal Year',
                    y: 'Sum of Amount',
                    stroke: '#2BA784',
                  })
                : null,
              receiptsProjectedWithBridge.length
                ? Plot.lineY(receiptsProjectedWithBridge, {
                    x: 'Fiscal Year',
                    y: 'Sum of Amount',
                    stroke: '#2BA784',
                    strokeWidth: 2,
                    strokeDasharray: '2,6',
                  })
                : null,
              receiptsActual.length
                ? Plot.text(receiptsActual, {
                    x: 'Fiscal Year',
                    y: 'Sum of Amount',
                    dx: 0,
                    dy: isGeneralFund ? 35 : 20,
                    fill: '#178666',
                    text: (elem: any) =>
                      `${processEachValueIntoTextMore({
                        value: elem['Sum of Amount'],
                        digits: 2,
                      })}`,
                  })
                : null,
              budgetActual.length
                ? Plot.text(budgetActual, {
                    x: 'Fiscal Year',
                    y: 'Sum of Amount',
                    dx: 0,
                    dy: isGeneralFund ? -25 : -35,
                    fill: '#B45214',
                    text: (elem: any) =>
                      `${processEachValueIntoTextMore({
                        value: elem['Sum of Amount'],
                        digits: 2,
                      })}`,
                  })
                : null,
            ],
            color: { scheme: 'set1', type: 'categorical', legend: true },
          });
        };

        const generalboxplot = generateSubPlot('General Fund');
        const specialboxplot = generateSubPlot('Special Funds');

        const generalSvg = generalboxplot.querySelector('svg');
        if (generalSvg) {
          generalSvg.setAttribute(
            'aria-label',
            `Line chart showing Los Angeles General Fund revenue. ${generalDescription}`
          );
        }

        const specialSvg = specialboxplot.querySelector('svg');
        if (specialSvg) {
          specialSvg.setAttribute(
            'aria-label',
            `Line chart showing Los Angeles Special Funds revenue. ${specialDescription}`
          );
        }

        if (generalbox.current) {
          console.log('current ref', generalbox.current);

          generalbox.current.innerHTML = '';

          generalbox.current.append(generalboxplot);

          specialbox.current.innerHTML = '';

          specialbox.current.append(specialboxplot);

          const darkstyle = document.createElement('style');
          darkstyle.innerHTML =
            '.dark svg[class^="plot-"] {background-color: transparent; color: white;}';

          generalbox.current.append(darkstyle);
        }
      }
    );
  }, []);

  return (
    <div className='mx-auto max-w-5xl'>
      <h3>General Fund Historical Summary</h3>
      <div
        className='mt-2 mb-4 flex justify-center gap-4'
        aria-hidden='true'
      >
        {LEGEND_ITEMS.map((item) => (
          <div className='flex items-center' key={`gf-${item.label}`}>
            <span
              className='mr-2 h-3 w-8 rounded-full'
              style={{ backgroundColor: item.color, border: '0.5px solid #000' }}
            ></span>
            <span className='text-sm text-black dark:text-white'>{item.label}</span>
          </div>
        ))}
      </div>
      <div className='my-4 flex justify-center overflow-x-auto' ref={generalbox}></div>
      <h3>Special Funds Historical Summary</h3>
      <div
        className='mt-2 mb-4 flex justify-center gap-4'
        aria-hidden='true'
      >
        {LEGEND_ITEMS.map((item) => (
          <div className='flex items-center' key={`sf-${item.label}`}>
            <span
              className='mr-2 h-3 w-8 rounded-full'
              style={{ backgroundColor: item.color, border: '0.5px solid #000' }}
            ></span>
            <span className='text-sm text-black dark:text-white'>{item.label}</span>
          </div>
        ))}
      </div>
      <div className='my-4 flex justify-center overflow-x-auto' ref={specialbox}></div>
      <p></p>
    </div>
  );
}
