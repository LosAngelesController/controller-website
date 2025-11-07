import Head from 'next/head';
import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useRef } from 'react';

import { addTooltips } from '@/components/tooltipsPlot/newtooltipsattempt';
import { processEachValueIntoTextMore } from '@/components/utils';
interface ExpenProps {
  withSeo?: boolean;
}

export function Expenditures({ withSeo = true }: ExpenProps = {}) {
  const expenrefbis = useRef<any>(null);
  const expenrefgov = useRef<any>(null);

  const stacked = useRef<any>(null);

  React.useEffect(() => {
    d3.csv('/csvsforpafr22/2expend-sum.csv').then((sumexpend: any) => {
      const expenelementstacked = addTooltips(
        Plot.plot({
          height: 500,
          color: {
            legend: true,
          },
          y: {
            tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
            grid: true,
          },
          x: { label: 'Fiscal Year', type: 'band' },
          marks: [
            Plot.barY(sumexpend, {
              x: 'Year',
              y: 'Sum of Value',
              fill: 'Activity Type',
              title: (elem: any) =>
                `${elem['Activity Type']} ${processEachValueIntoTextMore({
                  value: elem['Sum of Value'],
                  digits: 3,
                })}`,
            }),
            Plot.ruleY([0]),
          ],
        }),
        {
          fill: '#ffffff',
          opacity: 0.5,
          'stroke-width': '4px',
          stroke: '#41ffca',
        }
      );

      if (stacked.current) {
        console.log('current ref', stacked.current);
        stacked.current.append(expenelementstacked);
      }
    });

    d3.csv('/csvsforpafr22/2totalcityexpenditures.csv').then(
      (totalcityexpenditures1: any) => {
        const totalcityexpenditures1clean = totalcityexpenditures1.filter(
          (e: any) => e.Value != null
        );

        const businessexpen = totalcityexpenditures1clean.filter(
          (bruhh: any) => bruhh['Activity Type'] === 'Business-Type'
        );

        const govexpen = totalcityexpenditures1clean.filter(
          (bruhh: any) => bruhh['Activity Type'] === 'Governmental'
        );

        const expenelementbis = addTooltips(
          Plot.plot({
            height: 650,
            color: {
              legend: true,
            },
            y: {
              tickFormat: (tick: any) =>
                d3.format('0.1s')(tick).replace('G', 'B'),
              grid: true,
            },
            x: { label: 'Fiscal Year', type: 'band' },
            marks: [
              Plot.barY(businessexpen, {
                x: 'Year',
                y: 'Value',
                fill: 'Activity',
                title: (elem: any) =>
                  `${elem.Activity} ${processEachValueIntoTextMore({
                    value: elem.Value,
                    digits: 3,
                  })}`,
              }),
              Plot.ruleY([0]),
            ],
          }),
          {
            fill: '#ffffff',
            opacity: 0.5,
            'stroke-width': '4px',
            stroke: '#41ffca',
          }
        );

        const expenelementgov = addTooltips(
          Plot.plot({
            height: 650,
            color: {
              legend: true,
            },
            y: {
              tickFormat: (tick: any) =>
                d3.format('0.1s')(tick).replace('G', 'B'),
              grid: true,
            },
            x: { label: 'Fiscal Year', type: 'band' },
            marks: [
              Plot.barY(govexpen, {
                x: 'Year',
                y: 'Value',
                fill: 'Activity',
                title: (elem: any) =>
                  `${elem.Activity} ${processEachValueIntoTextMore({
                    value: elem.Value,
                    digits: 3,
                  })}`,
              }),
              Plot.ruleY([0]),
            ],
          }),
          {
            fill: '#ffffff',
            opacity: 0.5,
            'stroke-width': '4px',
            stroke: '#41ffca',
          }
        );

        if (expenrefbis.current) {
          console.log('current ref', expenrefbis.current);
          expenrefbis.current.append(expenelementbis);
        }

        if (expenelementgov) {
          console.log('current ref', expenrefgov.current);
          expenrefgov.current.append(expenelementgov);
        }
      }
    );
  }, []);

  return (
    <>
      {withSeo && (
        <Head>
          <title>PAFR City Expenditures Dashboard</title>
          <meta
            name='description'
            content='PAFR expenditures visualization presenting stacked activity-type spending plus separate business-type and governmental charts with tooltips.'
          />
        </Head>
      )}
      <div>
        <h1 className='pb-4 text-3xl font-semibold dark:text-white'>
          City Expenditures by Activity Type
        </h1>
        <h2 className='pb-2 text-2xl font-semibold dark:text-white'>
          Expenses Stacked
        </h2>
        <div ref={stacked}></div>
      </div>
    </>
  );
}
export default Expenditures;
