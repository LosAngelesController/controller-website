import * as d3 from 'd3';
import * as React from 'react';

export function CurrentRevListSources(props: any) {
  const tableRef = React.useRef<any>(null);

  const columns = ['category', 'actual', 'estimated', 'projected'];
  const headcolumns = [
    'Name',
    'Actual FY23',
    'Estimate FY24',
    'Projected FY25',
  ];

  React.useEffect(() => {
    d3.csv('/csvsrevenueforecast25/gf-current-new.csv').then((data: any) => {
      console.log(data);

      const container = d3.select(tableRef.current);
      container.selectAll('*').remove();

      const table = container
        .append('table')
        .attr(
          'class',
          'mx-auto w-full max-w-4xl divide-y divide-gray-200 overflow-hidden rounded-lg dark:divide-gray-500'
        );

      const thead = table
        .append('thead')
        .attr('class', 'bg-gray-50 dark:bg-gray-800');
      const tbody = table
        .append('tbody')
        .attr(
          'class',
          'divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900'
        );

      thead
        .append('tr')
        .selectAll('th')
        .data(headcolumns)
        .enter()
        .append('th')
        .attr('class', 'px-2 text-wrap max-w-xs ')
        .text((d: any) => {
          return d;
        });

      const rows = tbody
        .selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .attr('info', (d: any) => JSON.stringify(d))
        .attr(
          'class',
          (d: any) => `${d.category.match(/Total/i) ? 'font-bold' : ''}`
        );

      const cells = rows
        .selectAll('td')
        .data(function (row: any) {
          return columns.map(function (column) {
            if (
              (column === 'actual' ||
                column === 'estimated' ||
                column === 'projected') &&
              parseInt(row[column])
            ) {
              return {
                column: column,
                value: parseInt(row[column]).toLocaleString('default'),
              };
            } else {
              return { column: column, value: row[column] };
            }
          });
        })
        .enter()
        .append('td')
        .attr('info', (d: any) => JSON.stringify(d))
        .attr(
          'class',
          (d: any) =>
            `text-sm sm:text-base px-1 md:px-2  ${
              !Number.isNaN(d.value)
                ? 'tabular-nums align-right text-right'
                : ''
            } `
        )
        .text(function (d: any) {
          return d.value;
        });
    });
  }, []);

  return (
    <>
      <div
        ref={tableRef}
        id='tableofrevenues'
        className='flex w-full justify-center overflow-x-auto'
      ></div>
    </>
  );
}
