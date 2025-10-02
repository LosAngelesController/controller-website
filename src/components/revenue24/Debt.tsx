import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';

type LegendItem = {
  label: string;
  color: string;
  variant?: 'solid' | 'dashed' | 'fill';
};

const PRIMARY_LEGEND: LegendItem[] = [
  { label: 'Non-Voter Approved', color: '#2BA784' },
  { label: 'Voter Approved', color: '#D0824A' },
];

const LIMIT_LEGEND: LegendItem[] = [
  { label: 'Non-Voter Approved', color: '#D0824A' },
  { label: 'Limit', color: '#178666', variant: 'dashed' },
];

const AREA_LEGEND: LegendItem[] = [
  { label: 'Non-Voter Approved', color: '#41ffca', variant: 'fill' },
  { label: 'Voter Approved', color: '#ffca41', variant: 'fill' },
];

const TOTAL_LIMIT_LEGEND: LegendItem[] = [
  { label: 'Non-Voter Approved', color: '#41ffca', variant: 'fill' },
  { label: 'Voter Approved', color: '#ffca41', variant: 'fill' },
  { label: 'Limit', color: '#178666', variant: 'dashed' },
];

function Legend({ items }: { items: LegendItem[] }) {
  return (
    <div className='mb-4 flex justify-center gap-4'>
      {items.map((item) => {
        const baseStyle: React.CSSProperties = { borderRadius: '9999px' };

        if (item.variant === 'dashed') {
          return (
            <div className='flex items-center' key={`legend-${item.label}`}>
              <svg
                className='mr-2 h-3 w-8'
                viewBox='0 0 80 10'
                aria-hidden='true'
              >
                <line
                  x1='0'
                  y1='5'
                  x2='80'
                  y2='5'
                  stroke={item.color}
                  strokeWidth='3'
                  strokeDasharray='10'
                />
              </svg>
              <span className='text-sm text-black dark:text-white'>{item.label}</span>
            </div>
          );
        }

        if (item.variant === 'fill') {
          baseStyle.backgroundColor = item.color;
          baseStyle.border = '0.5px solid #000';
        } else {
          baseStyle.backgroundColor = item.color;
          baseStyle.border = '0.5px solid #000';
        }

        return (
          <div className='flex items-center' key={`legend-${item.label}`}>
            <span className='mr-2 h-3 w-8 rounded-full' style={baseStyle}></span>
            <span className='text-sm text-black dark:text-white'>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export function Debt(props: any) {
  const debtbox = React.useRef<any>(null);
  const debtboxlimitsix = React.useRef<any>(null);
  const debtboxlimittotal = React.useRef<any>(null);

  React.useEffect(() => {
    d3.csv('/csvsrevenueforecast24/debt.csv', d3.autoType).then((data: any) => {
      const nonVoterMaxRatio = 0.06;
      const combinedMaxRatio = 0.15;

      const datacleaned = data.map((d: any) => {
        const columnswiththousands = [
          'Debt Service Requirement-Non-Voter Approved',
          'Debt Service Requirement-Voter Approved',
          'Debt Service Requirement-Total',
          'General Fund Receipts',
        ];

        columnswiththousands.forEach((column: any) => {
          d[column] = d[column] * 1000;
        });

        d['NonVoterApprovedLimit'] = 0.06 * d['General Fund Receipts'];

        d['TotalLimit'] = 0.15 * d['General Fund Receipts'];

        return d;
      });

      const stackabledata: Array<any> = [];

      datacleaned.forEach((element: any) => {
        stackabledata.push({
          'Fiscal Year': element['Fiscal Year'],
          Type: 'Debt Service Requirement-Non-Voter Approved',
          Amount: element['Debt Service Requirement-Non-Voter Approved'],
          color: '#41ffca',
        });
        stackabledata.push({
          'Fiscal Year': element['Fiscal Year'],
          Type: 'Debt Service Requirement-Voter Approved',
          Amount: element['Debt Service Requirement-Voter Approved'],
          color: '#ffca41',
        });
      });

      const plot = Plot.plot({
        width: 700,
        height: 400,
        marginTop: 50,
        marginLeft: 80,
        marginRight: 70,
        x: {
          label: 'Fiscal Year',
          tickFormat: d3.format('d'),
        },
        y: {
          label: 'Amount of Debt ($)',
          tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
        },
        marks: [
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Non-Voter Approved',
            stroke: '#2BA784',
          }),
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Voter Approved',
            stroke: '#D0824A',
          }),
          //label each year with numbers in their corrosponding colours
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Non-Voter Approved',
            text: (d: any) =>
              d3
                .format('.4s')(d['Debt Service Requirement-Non-Voter Approved'])
                .replace('G', 'B'),
            dy: 10,
            dx: 5,
            fill: '#178666',
          }),
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Voter Approved',
            text: (d: any) =>
              d3
                .format('.4s')(d['Debt Service Requirement-Voter Approved'])
                .replace('G', 'B'),
            dy: -10,
            dx: 5,
            fill: '#B45214',
          }),
          Plot.ruleY([0], {
            stroke: 'grey',
          }),
        ],
      });

      const plotsix = Plot.plot({
        width: 700,
        height: 400,
        marginTop: 50,
        marginLeft: 80,
        marginRight: 70,
        x: {
          label: 'Fiscal Year',
          tickFormat: d3.format('d'),
        },
        y: {
          label: 'Amount of Debt ($)',
          tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
        },
        marks: [
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Non-Voter Approved',
            stroke: '#D0824A',
          }),
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'NonVoterApprovedLimit',
            stroke: '#178666',
            //dotted line
            strokeDasharray: '5 5',
          }),
          //add text
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Non-Voter Approved',
            text: (d: any) =>
              d3.format('.4s')(
                d['Debt Service Requirement-Non-Voter Approved']
              ),
            dy: 10,
            dx: 0,
            fill: '#B45214',
          }),
          //add limit text
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'NonVoterApprovedLimit',
            text: (d: any) => d3.format('.4s')(d['NonVoterApprovedLimit']),
            dy: 10,
            dx: 0,
            fill: '#178666',
          }),
          Plot.ruleY([0], {
            stroke: 'grey',
          }),
        ],
      });

      const plotlimittotal = Plot.plot({
        width: 700,
        height: 400,
        marginTop: 50,
        marginLeft: 80,
        marginRight: 70,
        x: {
          label: 'Fiscal Year',
          tickFormat: d3.format('d'),
        },
        y: {
          label: 'Amount of Debt ($)',
          tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
        },
        marks: [
          /*
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Total',
            stroke: '#178666',
          }),*/
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'TotalLimit',
            stroke: '#178666',
            //dotted line
            strokeDasharray: '5 5',
          }),
          //add text
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Total',
            text: (d: any) =>
              d3
                .format('.4s')(d['Debt Service Requirement-Total'])
                .replace('G', 'B'),
            dy: -10,
            dx: 0,
            fill: '#000000',
          }),
          //add limit text
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'TotalLimit',
            text: (d: any) =>
              d3.format('.4s')(d['TotalLimit']).replace('G', 'B'),
            dy: 10,
            dx: 0,
            fill: '#178666',
          }),
          //area chart
          Plot.areaY(stackabledata, {
            x: 'Fiscal Year',
            y: 'Amount',
            fill: 'color',
            stroke: '#000000',
            strokeWidth: 0.5,
          }),
          //add ruler at 0
          Plot.ruleY([0], {
            stroke: 'grey',
          }),
        ],
      });

      if (debtbox.current) {
        debtbox.current.innerHTML = '';
        debtbox.current.append(plot);

        debtboxlimitsix.current.innerHTML = '';
        debtboxlimitsix.current.append(plotsix);

        debtboxlimittotal.current.innerHTML = '';
        debtboxlimittotal.current.append(plotlimittotal);
      }
    });
  }, []);

  return (
    <div className='mx-auto max-w-5xl'>
      <h3>Debt over Time</h3>
      {/*Make a legend with 2 items, 
      - Red Dot that say Non-Voter Approved
      - Blue Dot that say Voter Approved
      */}
      <Legend items={PRIMARY_LEGEND} />
      <div className='my-4 flex justify-center overflow-x-auto' ref={debtbox}></div>

      <h3>Limits on Debt</h3>
      <h4>6% Non-Voter Approved Limit</h4>
      <Legend items={LIMIT_LEGEND} />
      <div className='my-4 flex justify-center overflow-x-auto' ref={debtboxlimitsix}></div>

      <h4>15% Total Limit</h4>
      <Legend items={TOTAL_LIMIT_LEGEND} />
      <div className='my-4 flex justify-center overflow-x-auto' ref={debtboxlimittotal}></div>
      <p></p>
    </div>
  );
}
