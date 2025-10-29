import { csvParse } from 'd3';
import React, { useEffect, useMemo, useState } from 'react';

interface NetPositionRow {
  category: string;
  description: string;
  businessType: number;
  governmental: number;
  total: number;
}

interface YearlyData {
  year: number;
  rows: NetPositionRow[];
}

const NetPosition: React.FC = () => {
  const [dataByYear, setDataByYear] = useState<Record<number, NetPositionRow[]>>({});
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          '/csvsforpafr23/6condensedstatementofnetposition1.csv'
        );
        const csvData = await response.text();

        const rows = csvParse(csvData, (d) => {
          const year = Number(d.Year);
          if (!Number.isFinite(year)) {
            return null;
          }

          const parseNumeric = (value?: string | null) => {
            if (!value) return 0;
            const cleaned = value.replace(/,/g, '').trim();
            if (cleaned === '') return 0;
            const isNegative = cleaned.startsWith('(') && cleaned.endsWith(')');
            const numeric = Number(cleaned.replace(/[()]/g, ''));
            if (!Number.isFinite(numeric)) {
              return 0;
            }
            return isNegative ? -numeric : numeric;
          };

          return {
            year,
            category: String(d.Category || '').trim(),
            description: String(d.Description || '').trim(),
            businessType: parseNumeric(d['Business-Type']),
            governmental: parseNumeric(d.Governmental),
            total: parseNumeric(d.Total),
          } as YearlyData & NetPositionRow;
        }).filter((row): row is YearlyData & NetPositionRow => row !== null);

        const grouped: Record<number, NetPositionRow[]> = {};
        rows.forEach((row) => {
          if (!grouped[row.year]) {
            grouped[row.year] = [];
          }
          grouped[row.year].push({
            category: row.category,
            description: row.description,
            businessType: row.businessType,
            governmental: row.governmental,
            total: row.total,
          });
        });

        const validYears = Object.keys(grouped)
          .map((yearString) => Number(yearString))
          .filter((year) => Number.isFinite(year))
          .sort((a, b) => a - b);

        setDataByYear(grouped);
        setSelectedYear((prev) => prev ?? validYears[validYears.length - 1]);
      } catch (error) {
        console.error('Error fetching net position data:', error);
      }
    };

    fetchData();
  }, []);

  const availableYears = useMemo(() => {
    return Object.keys(dataByYear)
      .map((yearString) => Number(yearString))
      .filter((year) => Number.isFinite(year))
      .sort((a, b) => a - b);
  }, [dataByYear]);

  const formatCurrency = (value: number) => {
    const billion = 1e9;
    return (
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }).format(value / billion) + 'B'
    );
  };

  if (!selectedYear || !dataByYear[selectedYear]) {
    return null;
  }

  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center gap-2'>
        <label className='font-semibold dark:text-white' htmlFor='net-position-year'>
          Select Fiscal Year:
        </label>
        <select
          id='net-position-year'
          className='rounded border border-gray-300 px-3 py-1 pr-8 dark:border-gray-500 dark:bg-zinc-900 dark:text-white'
          value={selectedYear}
          onChange={(event) => setSelectedYear(Number(event.target.value))}
        >
          {availableYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full border border-gray-300 text-sm dark:border-gray-500 dark:text-white'>
          <caption className='sr-only'>{`Condensed statement of net position for fiscal year ${selectedYear}`}</caption>
          <thead>
            <tr className='bg-gray-100 text-left dark:bg-zinc-800'>
              <th scope='col' className='border border-gray-300 px-3 py-2 text-center dark:border-gray-500'>
                Category
              </th>
              <th scope='col' className='border border-gray-300 px-3 py-2 dark:border-gray-500'>
                Description
              </th>
              <th scope='col' className='border border-gray-300 px-3 py-2 text-center dark:border-gray-500'>
                Business-Type
              </th>
              <th scope='col' className='border border-gray-300 px-3 py-2 text-center dark:border-gray-500'>
                Governmental
              </th>
              <th scope='col' className='border border-gray-300 px-3 py-2 text-center dark:border-gray-500'>
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {dataByYear[selectedYear]?.map((row, index) => (
              <tr
                key={`${selectedYear}-${row.category}-${row.description}-${index}`}
                className='odd:bg-white even:bg-gray-50 dark:odd:bg-zinc-900 dark:even:bg-zinc-800'
              >
                <th
                  scope='row'
                  className='border border-gray-300 px-3 py-2 text-center font-semibold dark:border-gray-500'
                >
                  {row.category}
                </th>
                <td className='border border-gray-300 px-3 py-2 text-left dark:border-gray-500'>
                  {row.description}
                </td>
                <td className='border border-gray-300 px-3 py-2 text-center dark:border-gray-500'>
                  {formatCurrency(row.businessType)}
                </td>
                <td className='border border-gray-300 px-3 py-2 text-center dark:border-gray-500'>
                  {formatCurrency(row.governmental)}
                </td>
                <td className='border border-gray-300 px-3 py-2 text-center dark:border-gray-500'>
                  {formatCurrency(row.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NetPosition;
