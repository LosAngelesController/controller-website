import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useEffect, useRef } from 'react';

import { processEachValueIntoTextMore } from '@/components/utils';

import { getHeightPlot, getWidthPlot } from './processwidthandheight';
export function BondsOverTime() {
  const bondsovertimeref = useRef<any>(null);

  const [innerwidth, setinnerwidth] = React.useState<number>(
    typeof window != 'undefined' ? window.innerWidth : 1000
  );

  const [data, setData] = React.useState<any>(null);

  const sizes = [
    {
      screen: 350,
      width: 300,
      height: 250,

      fullscreen: true,
    },
    {
      screen: 500,
      width: 400,
      height: 300,

      fullscreen: true,
    },
    {
      screen: 750,
      width: 750,
      height: 400,
    },
    {
      screen: 1000,
      width: 800,
      height: 500,
    },
    {
      screen: 1200,
      width: 1000,
      height: 550,
    },
  ];

  const renderChart = () => {
    if (data) {
      const bondeddebtandlongtermnotespayable = data;

      const bondeddebtandlongtermnotespayablecleaned =
        bondeddebtandlongtermnotespayable
          .filter((eachItem: any) => eachItem.Total != null)
          .map((eachItem: any) => {
            return {
              ...eachItem,
              Total: parseInt(eachItem.Total),
              Value: parseInt(eachItem.Value),
            };
          });

      const bondeddebtandlongtermnotespayablecleanedtotals =
        bondeddebtandlongtermnotespayablecleaned.filter(
          (eachItem: any) => eachItem['Activity Type'] === 'Governmental'
        );

      const plotforbondsovertimeelem = Plot.plot({
        width: getWidthPlot(sizes),
        height: getHeightPlot(sizes),
        color: {
          legend: true,
        },
        x: {
          type: 'band',
        },
        y: {
          tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
          grid: true,
        },
        marks: [
          Plot.lineY(bondeddebtandlongtermnotespayablecleanedtotals, {
            x: 'Fiscal Year',
            y: 'Total',
          }),
          Plot.textY(bondeddebtandlongtermnotespayablecleanedtotals, {
            x: 'Fiscal Year',
            y: 'Total',
            text: (bruh: any) => (bruh['Total'] / 10e8).toFixed(2),
            dy: -10,
          }),
          Plot.barY(bondeddebtandlongtermnotespayablecleaned, {
            x: 'Fiscal Year',
            fill: 'Activity Type',
            y: 'Value',
            title: (elem: any) =>
              `${elem['Activity Type']} ${processEachValueIntoTextMore({
                value: elem.Value,
                digits: 2,
              })}`,
            stroke: 'black',
            strokeWidth: 0.5
          }),
          Plot.ruleY([0]),
        ],
      });

      if (bondsovertimeref.current) {
        console.log('current ref', bondsovertimeref.current);
        bondsovertimeref.current.innerHTML = '';
        bondsovertimeref.current.append(plotforbondsovertimeelem);

        bondsovertimeref.current
          .querySelectorAll('.plot-d6a7b5-swatch')
          .forEach((el: Element) => {
            (el as HTMLElement).setAttribute('aria-hidden', 'true');
            (el as HTMLElement).setAttribute('role', 'presentation');
          });

        const svg = bondsovertimeref.current?.querySelector('svg');
        if (svg) {
          const descId = 'bondschart4pafr-desc';
          svg.setAttribute('role', 'img');
          svg.setAttribute(
            'aria-label',
            'Bonded debt over time, stacked by activity type with a totals line'
          );
          svg.setAttribute('aria-describedby', descId);

          let desc = document.getElementById(descId);
          if (!desc) {
            desc = document.createElement('p');
            desc.id = descId;
            desc.className = 'sr-only';
            desc.textContent = `Stacked bar chart showing bonded debt and long-term notes payable
                                from fiscal year 2010 to 2022. Bars are divided into governmental
                                debt, which stays relatively flat at around 3 to 4 billion each year,
                                and business-type debt, which grows steadily from about 15 billion in
                                2010 to over 34 billion in 2022. The total debt increases overall, with
                                a line overlay showing totals rising from 19.37 billion in 2010 to 37.32
                                billion in 2022, nearly doubling over the period.`;
            bondsovertimeref.current.append(desc);
          }
        }
      }
    }
  };

  React.useEffect(() => {
    renderChart();
  }, [innerwidth]);

  React.useEffect(() => {
    renderChart();
  }, [data]);

  useEffect(() => {
    d3.csv('/csvsforpafr22/4bondeddebtandlongtermnotespayable.csv').then(
      (bondeddebtandlongtermnotespayable: any) => {
        setData(bondeddebtandlongtermnotespayable);
      }
    );

    if (typeof window !== 'undefined') {
      addEventListener('resize', () => {
        setinnerwidth(window.innerWidth);
        return true;
      });
    }
  }, []);

  return <>
    <div ref={bondsovertimeref} id='bondschart4pafr'></div>;
  </>
}
