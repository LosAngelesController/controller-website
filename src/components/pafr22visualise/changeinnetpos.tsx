import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useEffect } from 'react';

import { addTooltips } from '@/components/tooltipsPlot/newtooltipsattempt';
import { processEachValueIntoText } from '@/components/utils';

import { getHeightPlot, getWidthPlot } from './processwidthandheight';
export function Changeinnetpos() {
  const [selectedYear, setSelectedYear] = React.useState(2022);
  const refOfLoadedData = React.useRef<any>(null);

  const refOfBoxToChange = React.useRef<any>(null);

  const [data, setData] = React.useState<any>(null);
  const [dataOriginal, setDataOriginal] = React.useState<any>(null);

  const [tablefiltered, setTablefiltered] = React.useState<any>({});

  const [masterSumTable, setMasterSumTable] = React.useState<any>({});

  const [innerwidth, setinnerwidth] = React.useState<number>(
    typeof window != 'undefined' ? window.innerWidth : 1000
  );

  console.log('plot', Plot);
  console.log('addTooltips', addTooltips);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedYear(parseInt(event.target.value));
    console.log('changed to', parseInt(event.target.value));
  };

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
      height: 200,
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

  useEffect(() => {
    d3.csv('/csvsforpafr22/3changeinnetpositiononly.csv').then(
      (changeinnetpositiononly: any) => {
        console.log('recieved', changeinnetpositiononly);
        refOfLoadedData.current = changeinnetpositiononly.map(
          (eachItem: any) => {
            return {
              ...eachItem,
              Value: parseInt(eachItem.Value) * 1000,
            };
          }
        );
        setData(
          changeinnetpositiononly.map((eachItem: any) => {
            return {
              ...eachItem,
              Value: parseInt(eachItem.Value) * 1000,
            };
          })
        );
      }
    );

    d3.csv('/csvsforpafr22/3changeinnetposition.csv').then(
      (changeinnetposition: any) => {
        setDataOriginal(
          changeinnetposition.map((eachItem: any) => {
            return {
              ...eachItem,
              Value: parseInt(eachItem.Value) * 1000,
            };
          })
        );
      }
    );
  }, []);

  const filterTable = () => {
    if (dataOriginal) {
      const changeinnetposyear = dataOriginal.filter(
        (eachItem: any) => eachItem.Year == String(selectedYear)
      );

      console.log('change in net pos year for table', changeinnetposyear);

      const tables: any = {};

      const presumtable: any = {};

      changeinnetposyear.forEach((eachItem: any) => {
        if (tables[eachItem['Account Activity']] == undefined) {
          tables[eachItem['Account Activity']] = {};
          presumtable[eachItem['Account Activity']] = 0;
        }

        tables[eachItem['Account Activity']][eachItem['Business Type']] =
          processEachValueIntoText(eachItem['Value']);
        presumtable[eachItem['Account Activity']] =
          presumtable[eachItem['Account Activity']] +
          parseInt(eachItem['Value']);
      });

      setMasterSumTable(presumtable);

      setTablefiltered(tables);

      console.log('tables', tables);
    }
  };

  const renderChart = () => {
    console.log('data is ', refOfLoadedData.current);
    console.log('data2 is ', data);
    if (data) {
      const changeinnetposyear = data.filter(
        (eachItem: any) => eachItem.Year == String(selectedYear)
      );
      console.log('filteredData', changeinnetposyear);

      const greenvaluetopick = '#22c55e';

      const querybody = document.querySelector('body');
      /*

      if (querybody) {
        if (querybody.classList.contains('dark')) {
        }
      }
      */

      const finishedPlotElement = Plot.plot({
        width: getWidthPlot(sizes),
        height: getHeightPlot(sizes),
        color: {
          domain: ['loss', 'gain'],
          range: ['#f43f53', greenvaluetopick],
          pivot: 0,
        },
        y: {
          domain: [
            'Airports',
            'Convention Center',
            'Harbor',
            'Power',
            'Water',
            'Sewer',
          ],
          label: '',
        },
        x: {
          label: '$ Change',
          tickFormat: '$s',
          domain: [-200000000, 500000000],
          grid: true,
        },
        marks: [
          Plot.barX(changeinnetposyear, {
            x: 'Value',
            y: 'Business Type',
            fill: (d: any) => (d.Value >= 0 ? 'gain' : 'loss'),
            stroke: 'black',
            strokeWidth: 0.5
          }),
          Plot.textX(
            changeinnetposyear.filter((d: any) => d.Value > 0),
            {
              x: 'Value',
              y: 'Business Type',
              dx: 25,
              text: (d: any) => processEachValueIntoText(d.Value),
            }
          ),
          Plot.textX(
            changeinnetposyear.filter((d: any) => d.Value < 0),
            {
              x: 'Value',
              y: 'Business Type',
              dx: -25,
              text: (d: any) => processEachValueIntoText(d.Value),
            }
          ),
          Plot.ruleX([0]),
        ],
      });
      if (refOfBoxToChange.current) {
        refOfBoxToChange.current.innerHTML = '';
        refOfBoxToChange.current.append(finishedPlotElement);
      }
    }
  };

  useEffect(() => {
    renderChart();
    filterTable();
  }, [data]);

  useEffect(() => {
    filterTable();
  }, [dataOriginal]);

  useEffect(() => {
    renderChart();
  }, [innerwidth]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      addEventListener('resize', () => {
        console.log('resize triggered');
        setinnerwidth(window.innerWidth);
        return true;
      });
    }
  }, []);

  useEffect(() => {
    renderChart();
    filterTable();
  }, [selectedYear]);

  const OrderLederWay = (arrayofentries: any) => {
    const sorted: Array<any> = [];

    const orderspecified = [
      'Operating Revenues',
      'Operating Expenses',
      'Operating Income (Loss)',
      'Net Nonoperating Revenues (Expenses)',
      'Capital Contributions',
      'Transfers Out',
      'Special Item',
      'Extraordinary Item',
      'Change in Net Position',
    ];

    orderspecified.forEach((eachItem: any) => {
      const found = arrayofentries.find(
        (eachItem2: any) => eachItem2[0] == eachItem
      );
      if (found) {
        sorted.push(found);
      }
    });

    return sorted;
  };

  return (
    <div>
      <label htmlFor='default-range' className='font-semibold'>
        Currently selected year: {selectedYear}
      </label>
      <br />
      <input
        id='default-range'
        type='range'
        value={selectedYear}
        onChange={handleRangeChange}
        min={2016}
        max={2022}
        className='h-3 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700 sm:max-w-md'
      ></input>
      <br />
      <div ref={refOfBoxToChange} aria-hidden="true" />
      {tablefiltered && (
        <div className='flex flex-col' key='key'>
          <div className=' overflow-x-auto  border-b border-gray-200 shadow dark:border-gray-700 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-500'>
              <thead className='bg-gray-50 text-sm dark:bg-gray-800 sm:text-base'>
                <th>Type of Transaction</th>
                <th>Airports</th>
                <th>Harbor</th>
                <th>Power</th>
                <th>Water</th>
                <th>Sewer</th>
                <th>Convention Center</th>
                <th>Total</th>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900'>
                {OrderLederWay(Object.entries(tablefiltered))
                  //.sort((a, b) => a[0].localeCompare(b[0]))
                  .map((bruh: Array<any>) => (
                    <tr key={bruh[0]}>
                      <td className='px-1 tabular-nums sm:px-2'>{bruh[0]}</td>
                      <td className='tabular-nums'>{bruh[1]['Airports']}</td>
                      <td className='tabular-nums'>{bruh[1]['Harbor']}</td>
                      <td className='tabular-nums'>{bruh[1]['Power']}</td>
                      <td className='tabular-nums'>{bruh[1]['Water']}</td>
                      <td className='tabular-nums'>{bruh[1]['Sewer']}</td>
                      <td className='tabular-nums'>
                        {bruh[1]['Convention Center']}
                      </td>
                      {/*Total all depts */}
                      <td>
                        {processEachValueIntoText(masterSumTable[bruh[0]])}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
