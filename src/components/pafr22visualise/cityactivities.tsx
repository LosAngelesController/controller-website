import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';

import {
  getHeightPlot,
  getWidthPlot,
} from '@/components/pafr22visualise/processwidthandheight';
import { processEachValueIntoTextMore } from '@/components/utils';

import { processcsvcityactivities } from './cityactivitiescsvprocess';
function isvalidnumber(value: string) {
  if (value === '' || value === null || value === undefined) {
    return false;
  } else {
    return !isNaN(Number(value));
  }
}

export function CityActivities() {
  const [cleaneddataset, setCleaneddataset] = React.useState<any>(null);
  const [constantlist, setConstantlist] = React.useState<any>([]);
  const puttheplotsinhere = React.useRef<any>(null);

  const [selectedDepartment, setSelectedDepartment] =
    React.useState<string>('Aging');

  const [innerwidth, setinnerwidth] = React.useState<number>(
    typeof window != 'undefined' ? window.innerWidth : 1000
  );

  const [listofdepartments, setlistofdepartments] = React.useState<string[]>(
    []
  );

  const yearsallowed = Array.from(new Array(19), (x, i) => i + 2004).map(
    (bruh) => String(bruh)
  );

  React.useEffect(() => {
    const onResize = () => setinnerwidth(window.innerWidth);
    window.addEventListener('resize', onResize);

    d3
      .csv('/csvsforpafr22/9cityactivities.csv')
      .then((data: any) => {
        setCleaneddataset(processcsvcityactivities(data));
      })
      .catch((err) => {
        console.error('CityActivities: failed to load CSV', err);
      });

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  React.useEffect(() => {
    return () => {
      if (puttheplotsinhere.current) {
        puttheplotsinhere.current.innerHTML = '';
      }
    };
  }, []);

  const renderAllChartsForDepartment = () => {
    //render all charts for department

    if (puttheplotsinhere.current) {
      if (cleaneddataset) {
        const selecteddepartmentsdata: any = cleaneddataset[selectedDepartment];

        if (typeof selecteddepartmentsdata != 'undefined') {
          console.log('selecteddepartmentsdata', selecteddepartmentsdata);
        }

        setConstantlist(
          Object.values(selecteddepartmentsdata).filter(
            (eachmetric: any) => eachmetric.constant === true
          )
        );

        //create div
        const divforplots = document.createElement('div');

        const sizes = [
          {
            screen: 350,
            width: 340,
            height: 250,
            fullscreen: true,
          },
          {
            screen: 380,
            width: 375,
            height: 270,
            fullscreen: true,
          },
          {
            screen: 400,
            width: 390,
            height: 270,
            fullscreen: true,
          },
          {
            screen: 500,
            width: 400,
            height: 270,
            fullscreen: true,
          },
          {
            screen: 600,
            width: 500,
            height: 300,
            fullscreen: true,
          },
          {
            screen: 750,
            width: 650,
            height: 300,
            fullscreen: true,
          },
          {
            screen: 800,
            width: 750,
            height: 300,
          },
          {
            screen: 1000,
            width: 700,
            height: 400,
          },
          {
            screen: 1200,
            width: 1000,
            height: 400,
          },
        ];

        let colourfilltouse = '#22d3ee';

        const selectbody = document.querySelector('body');

        if (selectbody) {
          if (selectbody.classList.contains('dark')) {
            colourfilltouse = '#22d3ee';
          } else {
            colourfilltouse = '#164e63';
          }
        }

        const listofplots = Object.values(selecteddepartmentsdata)
          .filter((eachmetric: any) => eachmetric.constant === false)
          .map((eachMetric: any, idx: number) => {
            const arrayofmetric: Array<any> = [];

            //transform into array
            yearsallowed.forEach((eachYear: string) => {
              if (isvalidnumber(eachMetric[eachYear]))
                arrayofmetric.push({
                  year: eachYear,
                  value: parseInt(eachMetric[eachYear]),
                });
            });

            const metricTitle = String(
              eachMetric['OPERATING INDICATOR / ASSET'] || 'City activity'
            );
            const yLabel = String(
              eachMetric['UOM DESCRIPTION'] || 'value'
            );

            const formatValue = (val: number) =>
              Number.isInteger(val)
                ? val.toLocaleString('en-US')
                : val.toLocaleString('en-US', {
                    maximumFractionDigits: 1,
                  });

            let descriptiveSummary = `${metricTitle} by fiscal year. Values represent ${yLabel}.`;

            if (arrayofmetric.length > 0) {
              const firstPoint = arrayofmetric[0];
              const lastPoint = arrayofmetric[arrayofmetric.length - 1];
              const minPoint = arrayofmetric.reduce((acc, cur) =>
                cur.value < acc.value ? cur : acc
              , arrayofmetric[0]);
              const maxPoint = arrayofmetric.reduce((acc, cur) =>
                cur.value > acc.value ? cur : acc
              , arrayofmetric[0]);

              if (arrayofmetric.length === 1) {
                descriptiveSummary = `${metricTitle} only reports ${formatValue(
                  firstPoint.value
                )} in fiscal year ${firstPoint.year}.`;
              } else {
                let trendSentence = '';
                const difference = lastPoint.value - firstPoint.value;
                if (Math.abs(difference) < 0.01) {
                  trendSentence = `Values stayed nearly the same, at ${formatValue(
                    firstPoint.value
                  )} in ${firstPoint.year} and ${formatValue(
                    lastPoint.value
                  )} in ${lastPoint.year}.`;
                } else if (difference > 0) {
                  trendSentence = `Values increased from ${formatValue(
                    firstPoint.value
                  )} in ${firstPoint.year} to ${formatValue(
                    lastPoint.value
                  )} in ${lastPoint.year}.`;
                } else {
                  trendSentence = `Values decreased from ${formatValue(
                    firstPoint.value
                  )} in ${firstPoint.year} to ${formatValue(
                    lastPoint.value
                  )} in ${lastPoint.year}.`;
                }

                const rangeSentence =
                  minPoint.year === maxPoint.year
                    ? `Peak and low both occur in ${maxPoint.year} at ${formatValue(
                        maxPoint.value
                      )}.`
                    : `Highest value was ${formatValue(maxPoint.value)} in ${
                        maxPoint.year
                      }, while the lowest was ${formatValue(
                        minPoint.value
                      )} in ${minPoint.year}.`;

                descriptiveSummary = `${metricTitle} covers fiscal years ${firstPoint.year} to ${lastPoint.year}. ${trendSentence} ${rangeSentence}`;
              }
            }

            const theplotforthischart = Plot.plot({
              width: getWidthPlot(sizes),
              height: getHeightPlot(sizes),
              x: {
                tickFormat: (tick: any) =>
                  innerWidth < 640 ? `'` + tick.slice(-2) : tick,
                type: 'band',
              },

              marks: [
                Plot.line(arrayofmetric, {
                  x: 'year',
                  y: 'value',
                  strokeWidth: 2,
                }),
                Plot.ruleY([0]),
                Plot.dot(arrayofmetric, {
                  x: 'year',
                  y: 'value',
                }),

                Plot.text(
                  arrayofmetric.filter((eachItem) => {
                    if (innerwidth > 640) {
                      return true;
                    } else {
                      return Number(eachItem.year) % 2 === 0;
                    }
                  }),
                  {
                    x: 'year',
                    y: 'value',
                    text: (d: any) =>
                      processEachValueIntoTextMore({
                        value: d.value,
                        digits: 1,
                        dollarsign: false,
                      }),
                    dy: -15,
                  }
                ),
                Plot.text(
                  arrayofmetric.filter((eachItem) => {
                    if (innerwidth > 640) {
                      return false;
                    } else {
                      return Number(eachItem.year) % 2 === 1;
                    }
                  }),
                  {
                    x: 'year',
                    y: 'value',
                    fill: (d: any) => {
                      return colourfilltouse;
                    },
                    text: (d: any) =>
                      processEachValueIntoTextMore({
                        value: d.value,
                        digits: 1,
                        dollarsign: false,
                      }),
                    dy: 15,
                  }
                ),
              ],
              y: {
                tickFormat: (tick: any) => {
                  if (Math.abs(Number(tick)) < 1) {
                    return tick;
                  } else {
                    return d3.format('~s')(tick).replace('G', 'B');
                  }
                },

                label: `${eachMetric['UOM'] ? `${eachMetric['UOM']} ` : ''} ${
                  eachMetric['UOM DESCRIPTION']
                }`,
                grid: true,
              },
            });

            // Observable Plot returns an <svg> element (no nested <svg>)
            const svgEl = (theplotforthischart as any).tagName?.toLowerCase() === 'svg'
              ? (theplotforthischart as SVGSVGElement)
              : (theplotforthischart.querySelector('svg') as SVGSVGElement | null);

            // Create a wrapper <figure> so we can place an sr-only HTML description next to the SVG
            const fig = document.createElement('figure');
            fig.style.margin = '0';

            if (svgEl) {
              const descId = `city-activity-desc-${String(selectedDepartment).replace(/\W+/g, '-').toLowerCase()}-${metricTitle.replace(/\W+/g, '-').toLowerCase()}-${idx}`;
              svgEl.setAttribute('role', 'img');
              svgEl.setAttribute('aria-label', `${metricTitle} over time`);
              svgEl.setAttribute('aria-describedby', descId);

              // Always create a fresh hidden textual description as a sibling to the SVG.
              // Using document.getElementById here can fail during rebuilds because old charts are still in the DOM
              // until we clear the container; then the new figure would be missing the <p>. Creating it unconditionally fixes that.
              const p = document.createElement('p');
              p.id = descId;
              p.className = 'sr-only';
              p.textContent = descriptiveSummary;
              
              fig.appendChild(svgEl);
              fig.appendChild(p);

            } else {
              // Fallback: if Plot ever returns a container, append it to the figure
              fig.appendChild(theplotforthischart);
            }

            //create p tag
            const ptag = document.createElement('p');
            ptag.innerHTML = eachMetric['OPERATING INDICATOR / ASSET'];

            //set class
            ptag.className =
              'text-lg font-semibold dark:text-white px-4 sm:px-0';
            divforplots.append(ptag);
            divforplots.append(fig);

            return true;
          });

        puttheplotsinhere.current.innerHTML = '';
        puttheplotsinhere.current.append(divforplots);
      }
    }
  };

  React.useEffect(() => {
    console.log(cleaneddataset, 'cleaneddataset');

    if (cleaneddataset) {
      setlistofdepartments(Object.keys(cleaneddataset));
    }

    renderAllChartsForDepartment();
  }, [cleaneddataset]);

  React.useEffect(() => {
    console.log('list of depts updated to', listofdepartments);
  }, [listofdepartments]);

  React.useEffect(() => {
    renderAllChartsForDepartment();
  }, [selectedDepartment]);

  React.useEffect(() => {
    renderAllChartsForDepartment();
  }, [innerwidth]);

  return (
    <>
      <div className='flex flex-wrap gap-x-2 gap-y-1'>
        {listofdepartments.sort().map((eachdept: string) => (
          <button
            key={eachdept}
            onClick={() => {
              setSelectedDepartment(eachdept);
            }}
            className={`rounded-lg border-2 px-2 py-1  text-sm font-semibold dark:text-white md:text-base ${
              eachdept === selectedDepartment
                ? 'border-green-800 bg-green-500 dark:bg-green-600'
                : ' border-slate-300 bg-gray-100 dark:border-slate-600 dark:bg-gray-900'
            }`}
          >
            {eachdept}
          </button>
        ))}
      </div>
      {constantlist.length > 0 && (
        <>
          <p className='mt-4 text-lg font-semibold dark:text-white'>
            Constants (2004-2022)
          </p>
          <div className='mt-2 grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-3 md:grid-cols-5'>
            {constantlist.map((eachconstant: any) => (
              <div
                className='rounded-lg bg-gray-100 p-2 text-center dark:bg-zinc-700'
                key={eachconstant['OPERATING INDICATOR / ASSET']}
              >
                <h6 className='dark:text-white'>
                  {eachconstant['OPERATING INDICATOR / ASSET']}
                </h6>
                <p className='dark:text-white sm:text-lg md:text-xl'>
                  {eachconstant['2022']}
                </p>
                <p className='dark:text-white'>
                  {eachconstant['UOM DESCRIPTION']}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      <div id='city-activities-plots' ref={puttheplotsinhere} className='mt-2'></div>
    </>
  );
}
