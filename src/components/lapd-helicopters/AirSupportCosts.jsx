const defaultRowHeaderClassName = 'p-1 text-left font-normal text-gray-900';
const totalRowHeaderClassName = 'p-1 text-left font-bold';
const groupHeaderClassName = 'p-1 text-left font-bold border-y';
const defaultCellClassName = 'p-1 text-right text-gray-900';
const boldCellClassName = 'p-1 text-right font-bold';
const boldGrayCellClassName = 'p-1 text-right text-gray-900 font-bold';
const centeredCellClassName = 'p-1 text-center text-gray-900';

const fiscalYears = [
  { id: 'header-fy-2018', label: 'FY 2018' },
  { id: 'header-fy-2019', label: 'FY 2019' },
  { id: 'header-fy-2020', label: 'FY 2020' },
  { id: 'header-fy-2021', label: 'FY 2021' },
  { id: 'header-fy-2022', label: 'FY 2022' },
];

const costTableSections = [
  {
    id: 'group-lapd-labor-sworn',
    label: 'LAPD LABOR SWORN',
    groupRowClassName: 'bg-[#dbe1f3]',
    rows: [
      {
        id: 'row-lapd-labor-sworn-gross-pay',
        label: 'Gross Pay (Pay and Compensated Time Off)',
        headerClassName: defaultRowHeaderClassName,
        cells: [
          '$11,211,938.12',
          '$10,946,128.13',
          '$12,807,085.98',
          '$12,116,558.46',
          '$11,681,559.45',
        ],
      },
      {
        id: 'row-lapd-labor-sworn-overhead',
        label: 'Overhead (Fringe Benefits, Central Services, and Admin Support)',
        headerClassName: defaultRowHeaderClassName,
        cells: [
          '$18,371,881.80',
          '$18,601,850.15',
          '$19,503,911.24',
          '$19,483,426.01',
          '$17,625,136.90',
        ],
      },
      {
        id: 'row-lapd-labor-sworn-overtime',
        label: 'Overtime',
        headerClassName: defaultRowHeaderClassName,
        cells: [
          '$1,359,746.26',
          '$1,345,034.55',
          '$1,352,711.20',
          '$704,349.46',
          '$1,104,933.26',
        ],
      },
      {
        id: 'row-lapd-labor-sworn-total',
        label: 'Total',
        headerClassName: totalRowHeaderClassName,
        defaultCellClassName: boldCellClassName,
        cells: [
          '$30,943,566.18',
          '$30,893,012.83',
          '$33,663,708.42',
          '$32,304,333.94',
          '$30,411,629.61',
        ],
      },
    ],
  },
  {
    id: 'group-lapd-labor-civilian',
    label: 'LAPD LABOR CIVILIAN',
    groupRowClassName: 'bg-[#dce1ef]',
    rows: [
      {
        id: 'row-lapd-labor-civilian-gross-pay',
        label: 'Gross Pay (Pay and Compensated Time Off)',
        headerClassName: defaultRowHeaderClassName,
        cells: [
          '$653,406.58',
          '$648,226.44',
          '$666,668.81',
          '$525,200.25',
          '$323,613.97',
        ],
      },
      {
        id: 'row-lapd-labor-civilian-overhead',
        label: 'Overhead (Fringe Benefits, Central Services, and Admin Support)',
        headerClassName: defaultRowHeaderClassName,
        cells: [
          '$1,158,097.82',
          '$1,177,568.16',
          '$908,802.92',
          '$723,358.31',
          '$303,258.65',
        ],
      },
      {
        id: 'row-lapd-labor-civilian-overtime',
        label: 'Overtime',
        headerClassName: defaultRowHeaderClassName,
        cells: [
          '$52.45',
          '$2,383.65',
          '$260.94',
          '$22.52',
          '$2,947.46',
        ],
      },
      {
        id: 'row-lapd-labor-civilian-total',
        label: 'Total',
        headerClassName: totalRowHeaderClassName,
        defaultCellClassName: boldCellClassName,
        cells: [
          '$1,811,556.85',
          '$1,828,178.25',
          '$1,575,732.67',
          '$1,248,581.08',
          '$629,820.08',
        ],
      },
    ],
  },
  {
    id: 'group-lapd-contracts-maintenance',
    label: 'LAPD CONTRACTS (Maintenance)',
    groupRowClassName: 'bg-[#dce1ef]',
    rows: [
      {
        id: 'row-lapd-contracts-total',
        label: 'Total',
        headerClassName: totalRowHeaderClassName,
        defaultCellClassName: boldGrayCellClassName,
        cells: [
          { value: '—', className: centeredCellClassName },
          { value: '—', className: centeredCellClassName },
          '$2,717.20',
          '$2,600.00',
          '$3,200.00',
        ],
      },
    ],
  },
  {
    id: 'group-gsd-labor-maintenance',
    label: 'GSD LABOR (Maintenance)',
    groupRowClassName: 'bg-[#e2eed9]',
    rows: [
      {
        id: 'row-gsd-labor-gross-pay',
        label: 'Gross Pay (Pay and Compensated Time Off)',
        headerClassName: defaultRowHeaderClassName,
        cells: [
          '$2,405,728.59',
          '$2,450,317.57',
          '$2,306,887.18',
          '$2,191,728.50',
          '$2,313,021.01',
        ],
      },
      {
        id: 'row-gsd-labor-overhead',
        label: 'Overhead (Fringe Benefits, Central Services, and Admin Support)',
        headerClassName: defaultRowHeaderClassName,
        cells: [
          '$2,304,687.99',
          '$2,405,721.79',
          '$2,338,491.54',
          '$2,123,346.57',
          '$2,316,259.24',
        ],
      },
      {
        id: 'row-gsd-labor-overtime',
        label: 'Overtime',
        headerClassName: defaultRowHeaderClassName,
        cells: [
          '$58,346.00',
          '$48,781.00',
          '$91,752.00',
          '$60,748.00',
          '$54,780.00',
        ],
      },
      {
        id: 'row-gsd-labor-total',
        label: 'Total',
        headerClassName: totalRowHeaderClassName,
        defaultCellClassName: boldCellClassName,
        cells: [
          '$4,768,762.59',
          '$4,904,820.36',
          '$4,737,130.72',
          '$4,375,823.07',
          '$4,684,060.25',
        ],
      },
    ],
  },
  {
    id: 'group-gsd-parts-materials',
    label: 'GSD PARTS MATERIALS (Maintenance)',
    groupRowClassName: 'bg-[#e2eed9]',
    rows: [
      {
        id: 'row-gsd-parts-materials-total',
        label: 'Total',
        headerClassName: totalRowHeaderClassName,
        defaultCellClassName: boldGrayCellClassName,
        cells: [
          '$3,238,163.00',
          '$3,430,088.00',
          '$4,026,081.00',
          '$4,269,712.00',
          '$5,002,103.00',
        ],
      },
    ],
  },
  {
    id: 'group-ita-labor-maintenance',
    label: 'ITA LABOR (Maintenance)',
    groupRowClassName: 'bg-[#fff4cc]',
    rows: [
      {
        id: 'row-ita-labor-gross-pay',
        label: 'Gross Pay (Pay and Compensated Time Off)',
        headerClassName: defaultRowHeaderClassName,
        cells: [
          '$135,142.13',
          '$93,321.66',
          '$158,167.27',
          '$177,851.96',
          '$214,384.52',
        ],
      },
      {
        id: 'row-ita-labor-overhead',
        label: 'Overhead (Fringe Benefits, Central Services, and Admin Support)',
        headerClassName: defaultRowHeaderClassName,
        cells: [
          '$124,776.73',
          '$98,799.65',
          '$336,089.62',
          '$402,621.26',
          '$475,526.30',
        ],
      },
      {
        id: 'row-ita-labor-overtime',
        label: 'Overtime',
        headerClassName: defaultRowHeaderClassName,
        cells: [
          '$14.81',
          '$2,184.40',
          '$5,155.05',
          '$1,291.95',
          '$1,173.06',
        ],
      },
      {
        id: 'row-ita-labor-total',
        label: 'Total',
        headerClassName: totalRowHeaderClassName,
        defaultCellClassName: boldCellClassName,
        cells: [
          '$259,933.66',
          '$194,305.71',
          '$499,411.94',
          '$581,765.16',
          '$691,083.89',
        ],
      },
    ],
  },
  {
    id: 'group-ita-parts-materials',
    label: 'ITA PARTS MATERIALS (Maintenance)',
    groupRowClassName: 'bg-[#fff4cc]',
    rows: [
      {
        id: 'row-ita-parts-materials-total',
        label: 'Total',
        headerClassName: totalRowHeaderClassName,
        defaultCellClassName: boldGrayCellClassName,
        cells: [
          '$86,791.36',
          '$61,959.69',
          '$141,437.37',
          '$268,445.67',
          '$41,422.90',
        ],
      },
    ],
  },
  {
    id: 'group-fuel',
    label: 'FUEL',
    groupRowClassName: 'bg-gray-200',
    rows: [
      {
        id: 'row-fuel-total',
        label: 'Total',
        headerClassName: totalRowHeaderClassName,
        defaultCellClassName: boldGrayCellClassName,
        cells: [
          '$1,815,146.67',
          '$2,028,394.67',
          '$1,592,378.67',
          '$1,391,189.33',
          '$2,509,472.00',
        ],
      },
    ],
  },
  {
    id: 'group-helicopter-financing',
    label: 'HELICOPTER FINANCING (MICLA)',
    groupRowClassName: 'bg-gray-200',
    rows: [
      {
        id: 'row-helicopter-financing-total',
        label: 'Total',
        headerClassName: totalRowHeaderClassName,
        defaultCellClassName: boldGrayCellClassName,
        cells: [
          '$1,628,437.99',
          '$1,772,284.00',
          '$1,937,718.08',
          '$2,496,974.82',
          '$4,490,059.60',
        ],
      },
    ],
  },
];

const overallTotals = [
  '$44,552,358.29',
  '$45,113,043.51',
  '$48,176,316.05',
  '$46,939,425.07',
  '$48,462,851.33',
];

export default function AirSupportCosts() {
  return (
    <div className="overflow-x-auto bg-white p-2">
      <table
        className="
          w-full border-collapse border border-black
          [&_th]:border [&_td]:border
          [&_th]:border-black [&_td]:border-black
        "
      >
        <caption className="text-xl font-bold p-2 text-center">
          LAPD Air Support Costs by Category and Fiscal Year
        </caption>

        <thead>
          <tr className="bg-gray-100">
            <th
              id="header-category"
              scope="col"
              className="p-1 text-left font-normal"
            >
              Category
            </th>
            {fiscalYears.map((year) => (
              <th
                key={year.id}
                id={year.id}
                scope="col"
                className="p-1 text-center font-normal"
              >
                {year.label}
              </th>
            ))}
          </tr>
        </thead>

        {costTableSections.map((section) => (
          <tbody key={section.id}>
            <tr className={section.groupRowClassName}>
              <th
                id={section.id}
                scope="colgroup"
                colSpan={fiscalYears.length + 1}
                className={groupHeaderClassName}
              >
                {section.label}
              </th>
            </tr>
            {section.rows.map((row) => (
              <tr key={row.id}>
                <th
                  id={row.id}
                  scope="row"
                  className={row.headerClassName ?? defaultRowHeaderClassName}
                >
                  {row.label}
                </th>
                {fiscalYears.map((year, index) => {
                  const cell = row.cells[index];
                  const cellValue = typeof cell === 'string' ? cell : cell.value;
                  const cellClassName =
                    typeof cell === 'string'
                      ? row.defaultCellClassName ?? defaultCellClassName
                      : cell.className ?? row.defaultCellClassName ?? defaultCellClassName;

                  return (
                    <td
                      key={`${row.id}-${year.id}`}
                      className={cellClassName}
                      headers={`${section.id} ${row.id} ${year.id}`}
                    >
                      {cellValue}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        ))}

        <tfoot>
          <tr>
            <th
              id="row-overall-total"
              scope="row"
              className="p-1 text-left font-bold italic"
            >
              Overall Total
            </th>
            {fiscalYears.map((year, index) => (
              <td
                key={`overall-${year.id}`}
                className="p-1 text-right font-bold -2"
                headers={`row-overall-total ${year.id}`}
              >
                {overallTotals[index]}
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
