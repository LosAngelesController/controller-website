import * as Plot from '@observablehq/plot';
import * as React from 'react';

//animalstatisticsschema.json
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { addTooltips } from '@/components/tooltipsPlot/newtooltipsattempt';

import { orderofcharts } from '@/animalcharts.json';
import animalstatisticsschema from '@/animalstatisticsschema.json';

import { insertDarkModed3 } from '../components/darkmodethesvg';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function AnimalStatistics() {
  const [alltables, setAlltables] = React.useState([]);

  React.useEffect(() => {
    fetch('https://apianimalshelters.lacontroller.io/alltables')
      .then((response) => response.json())
      .then((data) =>
        setAlltables(
          data.map((eachTable: any) => {
            return {
              ...eachTable,
              data: eachTable.data.filter((x: any) => {
                if (x.amount) {
                  return true;
                } else {
                  if (x.amount === null) {
                    return false;
                  } else {
                    return true;
                  }
                }
              }),
            };
          })
        )
      );
  }, []);

  React.useEffect(() => {
    console.log(alltables);

    const objectentriesforanimalstatisticsschema = Object.entries(
      animalstatisticsschema.sheets
    );

    console.log(objectentriesforanimalstatisticsschema);

    //create div
    const insertdiv = document.createElement('div');

    //make a chart for each table

    orderofcharts.forEach((eachchart: any) => {
      const nameofchart: string = eachchart.data;

      //find the table we want in the postgres table list
      //this is inefficient! O(n^2) operations! Don't do this newbie programmers!
      //i've been doing this for 10 years and i still am rubbish!
      const datareference: any = alltables.find((x: any) => {
        return x.name === nameofchart;
      });

      if (datareference) {
        const makecharthead = document.createElement('h2');

        makecharthead.innerHTML = eachchart.title;

        makecharthead.className = 'dark:text-white';

        insertdiv?.appendChild(makecharthead);
        if (datareference.data && datareference.data.length > 0) {
          console.log('datareference.data', datareference.data);

          //make d3 chart here
          const chartdom = addTooltips(
            Plot.plot({
              color: {
                legend: true,
                scheme: 'tableau10',
              },
              x: {
                //set to band
                type: 'band',
              },
              marks: [
                Plot.barY(datareference.data, {
                  y: 'amount',
                  x: 'month',
                  fill: eachchart.colourby,
                  title: (elem: any) => {
                    if (elem.animal && elem.shelter) {
                      return `${elem.animal} - ${elem.shelter} - ${elem.amount}`;
                    } else {
                      return elem.amount;
                    }
                  },
                }),
                Plot.ruleY([0]),
              ],
            }),
            {
              fill: '#ffffff',
              opacity: 0.5,
              stroke: '#41ffca',
              'stroke-width': 1,
            }
          );

          insertdiv?.appendChild(chartdom);
        } else {
          console.log('no data');
          //append a paragraph saying no data
          const noData = document.createElement('p');
          noData.innerHTML = 'No Data';
          insertdiv?.appendChild(noData);
        }
      }
    });

    //insert div into theanimalbox
    const theanimalbox = document.getElementById('theanimalbox');
    theanimalbox?.appendChild(insertdiv);

    theanimalbox?.appendChild(insertDarkModed3());
  }, [alltables]);

  return (
    <>
      <Navbar />
      <Layout>
        {/* <Seo templateTitle='Home' /> */}
        <Seo
          title='Animal Statistics'
          description='Interactive Los Angeles animal shelter statistics with charts by month, shelter, and animal type for citywide operations.'
        />

        <div className='z-10 mx-auto max-w-7xl text-white'>
          <div className='mx-auto mt-2 lg:max-w-6xl'>
            <div className='px-4 md:px-8 lg:mx-4'>
              <h1>Animal Statistics</h1>
              <div id='theanimalbox'></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
