import { csvParse } from 'd3';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

// Define the data structure for your data
interface Data {
  year: string;
  category: string;
  desc: string;
  businessType: string;
  governmental: number;
  total: number;
}

// Define the structure for your table columns
interface TableColumn<T> {
  name: string;
  selector?: (row: T) => string | number;
  sortable?: boolean;
  cell?: (row: T) => React.ReactNode;
}

const NetPosition: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(2023); // Starting year, change as needed
  const [yearRange, setYearRange] = useState<{ min: number; max: number }>({ min: 2023, max: 2024 }); // Change as needed

  // Currency formatting function
  function formatCurrency(number: number) {
    const billion = 1e9;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(number / billion) + 'B';
  }

  // Fetch and process data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/csvsforpafr23/6condensedstatementofnetposition1.csv');
      const csvData = await response.text();
      const sanitizedCsvData = csvData.replace(/"(.*?)"/g, (_, g) => g.replace(/,/g, ''));
      const dataArray: Data[] = csvParse(sanitizedCsvData, (d) => ({
        year: d.Year || '',
        category: d.Category || '',
        desc: d.Description || '',
        businessType: d['Business-Type'] || '',
        governmental: d.Governmental ? +d.Governmental.replace(/,/g, '') : 0,
        total: d.Total ? +d.Total.replace(/,/g, '').replace(/\(|\)/g, '') * (d.Total.includes('(') ? -1 : 1) : 0,
      }));

      const years = dataArray.map(item => parseInt(item.year, 10));
      setYearRange({ min: Math.min(...years), max: Math.max(...years) });
      setData(dataArray);
    };

    fetchData();
  }, []);

  // Define the columns for the DataTable
  const columns: TableColumn<Data>[] = [
    {
      name: 'Category',
      selector: row => row.category,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.desc,
      sortable: true,
    },
    {
      name: 'Business-Type',
      cell: (row) => formatCurrency(parseFloat(row.businessType)),
      sortable: true,
    },
    {
      name: 'Governmental',
      cell: (row) => formatCurrency(row.governmental),
      sortable: true,
    },
    {
      name: 'Total',
      cell: (row) => formatCurrency(row.total),
      sortable: true,
    },
  ];

  // Custom styles for the DataTable
  const customStyles = {
    rows: {
      style: {
        minHeight: '50px',
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
        backgroundColor: '#f9f7f7',
        fontWeight: 700,
        fontSize: '16px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
      },
    },
  };

  // Render the component
  return (
    <div style={{ width: '100%' }}>
      <div style={{ margin: '20px 0' }}>
        <label for='fiscalYearRange'>Select Fiscal Year: </label>
        <input
          type="range"
          min={yearRange.min}
          max={yearRange.max}
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          id='fiscalYearRange'
        />
        <p>Selected Year: {selectedYear}</p>
      </div>
      <div style={{ height: '500px', overflowX: 'auto' }}>
        <DataTable
          columns={columns}
          data={data.filter((item) => parseInt(item.year, 10) === selectedYear)}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default NetPosition;