//import d3 from 'd3';
import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import Head from 'next/head';
import * as React from 'react';
import { useEffect, useRef } from 'react';

import { insertDarkModed3 } from '@/components/darkmodethesvg';
//import { Plot } from '../tooltipsPlot/tooltips';
import { addTooltips } from '@/components/tooltipsPlot/newtooltipsattempt';
import { processEachValueIntoTextMore } from '@/components/utils';

// import { insertDarkModed3 } from '../darkmodethesvg';

function responsivefy(svg: any) {
  // container will be the DOM element
  // that the svg is appended to
  // we then measure the container
  // and find its aspect ratio
  const container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style('width'), 10),
    height = parseInt(svg.style('height'), 10),
    aspect = width / height;

  // set viewBox attribute to the initial size
  // control scaling with preserveAspectRatio
  // resize svg on inital page load
  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMinYMid')
    .call(resize);

  // add a listener so the chart will be resized
  // when the window resizes
  // multiple listeners for the same event type
  // requires a namespace, i.e., 'click.foo'
  // api docs: https://goo.gl/F3ZCFr
  d3.select(window).on('resize.' + container.attr('id'), resize);

  // this is the code that resizes the chart
  // it will be called on load
  // and in response to window resizes
  // gets the width of the container
  // and resizes the svg to fill it
  // while maintaining a consistent aspect ratio
  function resize() {
    const w = parseInt(container.style('width'));
    svg.attr('width', w);
    svg.attr('height', Math.round(w / aspect));
  }
}

interface CityRevenueProps {
  withSeo?: boolean;
}

export default function CityRevenue({ withSeo = true }: CityRevenueProps = {}) {
  //import the csv table from /csvsforpafr22/1totalcityrevenue.csv

  const rev2 = useRef<any>();
  const rev1 = useRef<any>();

  useEffect(() => {
    d3.csv('/csvsforpafr22/1totalcityrevenue.csv').then((data: any) => {
      console.log(data);

      const totalcityrevenue1 = data.map((d: any) => {
        return {
          ...d,
          Revenue: parseInt(d['Revenue']),
        };
      });

      const plotthen = Plot.plot({
        color: {
          legend: true,
        },
        height: 600,
        y: {
          tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
          label: 'Revenue',
          grid: true,
        },
        x: {
          label: 'Fiscal Year',
        },
        facet: {
          data: totalcityrevenue1,
          y: 'Activity Type',
        },
        marks: [
          Plot.barY(totalcityrevenue1, {
            x: 'Year',
            y: 'Revenue',
            fill: 'Activity',
            title: (elem: any) =>
              `${elem.Activity} ${processEachValueIntoTextMore({
                value: elem.Revenue,
                digits: 2,
              })}`,
          }),
          Plot.ruleY([0]),
        ],
      });

      const revenuesplitbyactivity = addTooltips(plotthen, {
        fill: '#ffffff',
        opacity: 0.5,
        'stroke-width': '4px',
        stroke: '#41ffca',
      });

      if (rev1.current) {
        rev1.current.append(revenuesplitbyactivity);
      }
    });

    d3.csv('/csvsforpafr22/city-revenue-summed-by-activity-type.csv').then(
      (data: any) => {
        const asdf = data.map((d: any) => {
          return {
            ...d,
            'Sum of Revenue': parseInt(d['Sum of Revenue']),
          };
        });

        const facetedRev = addTooltips(
          Plot.plot({
            color: {
              legend: true,
              background: '#212121',
              color: 'white',
            },
            height: 500,
            y: {
              tickFormat: (tick: any) =>
                d3.format('~s')(tick).replace('G', 'B'),
              label: 'Revenue',
            },
            x: { label: 'Fiscal Year' },
            marks: [
              Plot.barY(asdf, {
                x: 'Year',
                y: 'Sum of Revenue',
                title: (elems: any) =>
                  `${elems['Activity Type']} ${(
                    parseInt(elems['Sum of Revenue']) / 10e8
                  ).toFixed(2)}B`,
                fill: 'Activity Type',
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

        if (rev2.current) {
          rev2.current.append(facetedRev);
          //darkModeTheSvg(rev2.current);

          rev2.current.append(insertDarkModed3());
        }
      }
    );
  }, []);

  return (
    <>
      {withSeo && (
        <Head>
          <title>PAFR City Revenue Dashboard</title>
          <meta
            name='description'
            content='PAFR city revenue visualization illustrating activity-type revenues and totals with interactive Observable Plot charts.'
          />
        </Head>
      )}
      <div className='city-revenue'>
        <h1 className='pb-4 text-3xl font-semibold dark:text-white'>
          City Revenue by Activity Type
        </h1>
        <h2 className='pb-2 text-2xl font-semibold dark:text-white'>
          Revenues Stacked
        </h2>
        <div id='rev-2' ref={rev2}></div>
      </div>
    </>
  );
}
