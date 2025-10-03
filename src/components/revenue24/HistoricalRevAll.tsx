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
    d3.csv('/csvsrevenueforecast24/remove-individal-funds-lol.csv').then(
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

        console.log('fetched data', removeIndividalFundsLol1);

        
        // const generateSubPlot = (input: string) => {
        //   return Plot.plot({
        //     y: {
        //       tickFormat: (tick: any) =>
        //         d3.format('~s')(tick).replace('G', 'B'),
        //       label: 'Revenue',
        //     },
        //     marks: [
        //       Plot.lineY(
        //         removeIndividalFundsLol1.filter(
        //           (item: any) =>
        //             item.Type === 'Budget' && item.Category === input
        //         ),
        //         { x: 'Fiscal Year', y: 'Sum of Amount', stroke: 'Type' }
        //       ),
        //       Plot.lineY(
        //         removeIndividalFundsLol1.filter(
        //           (item: any) =>
        //             item.Type === 'Receipts' &&
        //             item.Category === input &&
        //             item['Fiscal Year'] >= 2022
        //         ),
        //         {
        //           x: 'Fiscal Year',
        //           y: 'Sum of Amount',
        //           stroke: 'Type',
        //           strokeWidth: 2,
        //           strokeDasharray: '2,6',
        //           defined: (item: any) =>
        //             item['Fiscal Year'] > 2022 && item['Type'] === 'Receipts',
        //         }
        //       ),
        //       Plot.lineY(
        //         removeIndividalFundsLol1.filter(
        //           (item: any) =>
        //             item.Type === 'Receipts' &&
        //             item.Category === input &&
        //             item['Fiscal Year'] <= 2022
        //         ),
        //         { x: 'Fiscal Year', y: 'Sum of Amount', stroke: 'Type' }
        //       ),
        //       //add text
        //       Plot.text(
        //         removeIndividalFundsLol1.filter(
        //           (item: any) =>
        //             item.Type === 'Receipts' &&
        //             item.Category === input &&
        //             item['Fiscal Year'] <= 2022
        //         ),
        //         {
        //           x: 'Fiscal Year',
        //           y: 'Sum of Amount',
        //           dx: 5,
        //           dy: 30,
        //           fill: 'Type',
        //           text: (elem: any) =>
        //             `${processEachValueIntoTextMore({
        //               value: elem['Sum of Amount'],
        //               digits: 2,
        //             })}`,
        //         }
        //       ),
        //       Plot.text(
        //         removeIndividalFundsLol1.filter(
        //           (item: any) =>
        //             item.Type === 'Budget' && item.Category === input
        //         ),
        //         {
        //           x: 'Fiscal Year',
        //           y: 'Sum of Amount',
        //           dx: 5,
        //           dy: -20,
        //           fill: 'Type',
        //           text: (elem: any) =>
        //             `${processEachValueIntoTextMore({
        //               value: elem['Sum of Amount'],
        //               digits: 2,
        //             })}`,
        //         }
        //       ),
        //     ],
        //     color: { scheme: 'set1', type: 'categorical', legend: true },
        //   });
        // };

        const generateSubPlot = (input: string) => {
          const isGeneralFund = input === 'General Fund';

          return Plot.plot({
            marginRight: 80,
            marginTop: isGeneralFund ? 40 : 70,
            marginBottom: isGeneralFund ? 80 : 50,
            y: {
              tickFormat: (tick: any) =>
                d3.format('~s')(tick).replace('G', 'B'),
              label: 'Revenue',
            },
            marks: [
              Plot.lineY(
                removeIndividalFundsLol1.filter(
                  (item: any) =>
                    item.Type === 'Budget' && item.Category === input
                ),
                { x: 'Fiscal Year', y: 'Sum of Amount', stroke: '#D0824A' }
              ),
              Plot.lineY(
                removeIndividalFundsLol1.filter(
                  (item: any) =>
                    item.Type === 'Receipts' &&
                    item.Category === input &&
                    item['Fiscal Year'] >= 2022
                ),
                {
                  x: 'Fiscal Year',
                  y: 'Sum of Amount',
                  stroke: '#2BA784',
                  strokeWidth: 2,
                  strokeDasharray: '2,6',
                  defined: (item: any) =>
                    item['Fiscal Year'] > 2022 && item['Type'] === 'Receipts',
                }
              ),
              Plot.lineY(
                removeIndividalFundsLol1.filter(
                  (item: any) =>
                    item.Type === 'Receipts' &&
                    item.Category === input &&
                    item['Fiscal Year'] <= 2022
                ),
                { x: 'Fiscal Year', y: 'Sum of Amount', stroke: '#2BA784' }
              ),
              Plot.text(
                removeIndividalFundsLol1.filter(
                  (item: any) =>
                    item.Type === 'Receipts' &&
                    item.Category === input &&
                    item['Fiscal Year'] <= 2022
                ),
                {
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
                }
              ),
              Plot.text(
                removeIndividalFundsLol1.filter(
                  (item: any) =>
                    item.Type === 'Budget' && item.Category === input
                ),
                {
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
                }
              ),
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
            'Line chart showing Los Angeles General Fund revenue: actual budget and receipts rise from about $4.3B in FY2007 to roughly $7.0B in FY2022, with projected values extending to just over $7.5B by FY2024.'
          );
        }

        const specialSvg = specialboxplot.querySelector('svg');
        if (specialSvg) {
          specialSvg.setAttribute(
            'aria-label',
            'Line chart showing Los Angeles Special Funds revenues: budget and receipts rise from about $1.9B in FY2007 to almost $4.7B actual/$5.0B budgeted in FY2022, with projected receipts settling near $3.4B for FY2023–FY2024.'
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
