'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import Navbar from '@/components/Navbar';

export default function Analysis() {
  const [careData, setCareData] = useState({});
  const [carePlusData, setCarePlusData] = useState({});
  const [expandedRows, setExpandedRows] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/updatedCarePlusGeocodedNew/updatedCarePlusGeocodedNewCsv');
      const data = await response.json();
      const careOperations = {};
      const carePlusOperations = {};
      const allDistricts = Array.from({ length: 15 }, (_, i) => i + 1); // Array of 1 to 15 for council districts

      // Initialize all districts with 0 count
      allDistricts.forEach(district => {
        careOperations[district] = 0;
        carePlusOperations[district] = 0;
      });

      data.updatedCarePlusGeocodedNewCsv.forEach(entry => {
        const cd = entry.councilDistrict;
        const operationType = entry.operationType;

        if (cd && cd >= 1 && cd <= 15) { // Ensure cd is within valid range
          if (operationType === 'CARE') {
            careOperations[cd] += 1;
          } else if (operationType === 'CARE+') {
            carePlusOperations[cd] += 1;
          }
        }
      });

      setCareData(careOperations);
      setCarePlusData(carePlusOperations);
    }

    fetchData();
  }, []);

  const fixedCareData = {
    1: 603,
    2: 756,
    3: 278,
    4: 417,
    5: 352,
    6: 496,
    7: 360,
    8: 538,
    9: 269,
    10: 448,
    11: 471,
    12: 434,
    13: 508,
    14: 746,
    15: 425,
  };

  const fixedCarePlusData = {
    1: 339,
    2: 1107,
    3: 363,
    4: 291,
    5: 302,
    6: 458,
    7: 357,
    8: 357,
    9: 738,
    10: 482,
    11: 473,
    12: 436,
    13: 632,
    14: 629,
    15: 433,
  };
  // Calculate the total count for CARE operations
  const totalCareOperations = Object.values(fixedCareData).reduce((acc, curr) => acc + curr, 0).toLocaleString();

  // Calculate the total count for CARE+ operations
  const totalCarePlusOperations = Object.values(fixedCarePlusData).reduce((acc, curr) => acc + curr, 0).toLocaleString();


  // Total budget already provided in the code: $70,338,280
  const totalBudget = '$70,338,280';

  const careChartData = {
    labels: Object.keys(fixedCareData),
    datasets: [
      {
        label: 'CARE Operations by CD',
        data: Object.values(fixedCareData),
        backgroundColor: '#41ffca',
        borderColor: '#41ffca',
        borderWidth: 1,
      },
    ],
  };

  const carePlusChartData = {
    labels: Object.keys(fixedCarePlusData),
    datasets: [
      {
        label: 'CARE+ Operations by CD',
        data: Object.values(fixedCarePlusData),
        backgroundColor: '#41ffca',
        borderColor: '#41ffca',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  const handleToggle = (index) => {
    setExpandedRows(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const departments = [
    { department: 'CAO', description: 'Outreach – Funding is provided to establish contracts with qualified providers to conduct direct homeless outreach and engagement in conjunction with CARE and CARE + teams.', budget: '$9,283,507' },
    { department: 'LASAN', description: 'Funding is provided for 303 positions to staff 22 CARE+ and five CARE teams, including 56 base budget positions. These positions consist of two Chief Environmental Compliance Inspector IIs, three Chief Environmental Compliance Inspector Is, one Sanitation Solid Resources Manager II, two Sanitation Solid Resources Manager I, one Sanitation Wastewater Manager I, four Solid Resources Superintendents, 14 Refuse Collection Supervisors, one Senior Management Analyst II, one Senior Management Analyst I, one Management Analyst, two Administrative Clerks, 14 Senior Environmental Compliance Inspectors, 76 Environmental Compliance Inspectors, 80 Refuse Collection Truck Operator IIs, 99 Maintenance Laborers, one Waste Water Collection Supervisor, and one Public Relations Specialist II. These positions for the CARE teams are responsible for keeping the Citys sidewalks and other public areas safe, clean, sanitary, and accessible for public use by all individuals in accordance with the provisions of Los Angeles Municipal Code Section 56.11. The CARE teams are deployed to the A Bridge Home sites and the Illegal Dumping teams provide service Citywide. The CARE teams were previously known as Homeless Outreach Proactive Engagement Teams (HOPE). These positions for the CARE+ teams are responsible for removing abandoned waste from the public right of way and cleaning homeless encampments. These teams are deployed to the highest need areas of the City. The CARE+ teams were previously known as Clean Street Los Angeles Teams. The proposed increase reflects anticipated salary expenditures.', budget: '$44,785,820' },
    { department: 'LASAN', description: 'Administrative Program Support – Funding is provided for two positions consisting of one Management Analyst and one Administrative Clerk. Funding and resolution authority is continued for 19 positions consisting of one Senior Management Analyst II, one Senior Management Analyst I, seven Management Analysts, one Senior Communications Operator I, three Senior Administrative Clerks, five Administrative Clerks, and one Accounting Clerk to provide administrative and program support for the CARE/CARE+ teams. One-time funding is continued for office and administrative expenses ($1,735). The proposed increase reflects anticipated salary expenditures. ', budget: '$1,776,189' },
    { department: 'LASAN', description: 'Program Support – Funding is provided for three positions ($340,902) consisting of one Senior Management Analyst I, one Service Coordinator, and one Management Analyst to support the CARE/CARE+ teams. One-time funding is increased for hazardous waste removal services ($7,949,000), vehicle rentals ($2,106,000), and disposal fees ($685,000) as part of the Citys comprehensive cleaning program through the CARE/CARE+ Teams. The proposed increase reflects anticipated salary expenditures ', budget: '$11,080,902' },
    { department: 'LASAN', description: 'Information Services Oversight – Nine-months funding and resolution authority is provided for one Geographic Information Systems Supervisor I to oversee the CARE Programs digital data collection, service tracking, and reporting and other Livability Services data programs.', budget: '$89,609' },
    { department: 'LASAN', description: 'CARE+ Expansion Second Shift Team – Funding is provided for 11 positions consisting of one Refuse Collection Supervisor, one Senior Environmental Compliance Inspector, two Environmental Compliance Inspectors, three Refuse Collection Operator IIs, and four Maintenance Laborers to form an additional CARE+ team on a second shift. The proposed increase reflects full-year funding and anticipated salary expenditures.', budget: '$882,194' },
    { department: 'LASAN', description: 'Hollywood CARE+ – Funding and resolution authority is continued for 11 positions consisting of one Refuse Collection Supervisor, one Senior Environmental Compliance Inspector, two Environmental Compliance Inspectors, three Refuse Truck Collection Operator IIs, and four Maintenance Laborers for one CARE+ Team to service three Council Districts in the Hollywood area. One-time funding is continued in the Contractual Services ($189,500), Field Equipment Expense ($27,000), Uniforms ($1,300), Office and Administrative ($600), and Operating Supplies ($20,100) accounts. The proposed increase reflects full-year funding and anticipated salary expenditures. In 2022-23, this program was entitled Additional Comprehensive Cleaning and Rapid Engagement Plus (CARE+) Team. ', budget: '$1,120,694' },
    { department: 'LASAN', description: 'Livability Services Safety Training – Funding and resolution authority is continued for six positions consisting of one Safety Engineer, three Refuse Crew Field Instructors, and two Safety Engineering Associate Is, subject to pay grade determination by the Office of the City Administrative Officer, Employee Relations Division, to establish safety procedures and practices for CARE/CARE+ teams. The proposed increase reflects full-year funding and anticipated salary expenditures. This program was previously entitled CARE/CARE+ Safety Procedures. The services will remain the same.', budget: '$546,537' },
    { department: 'LASAN', description: 'Budget, Finance and Innovation Report No. 68 - The Council modified the Mayors Proposed Budget by adding nine-months funding and resolution authority for nine positions consisting of two Environmental Compliance Inspectors, three Refuse Truck Collection Operator IIs, and four Maintenance Laborers for one CARE+ Team to service the coastal area, including Venice, Pacific Palisades, Playa del Rey, and Playa Vista. One-time funding is provided in the Contractual Services ($54,758), Field Equipment Expense ($6,645), Uniforms ($173), Office and Administrative ($855), and Operating Supplies ($13,200) accounts.', budget: '$772,828' },
  ];

  return (
    <>
      <Head>
        <title>CARE & CARE+ Operations by Council District | LA Controller</title>
        <meta
          name='description'
          content='Interactive view of CARE and CARE+ operations counts, totals, and budget information by Los Angeles City Council District.'
        />
      </Head>
      <Navbar />
      <div className="mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl">
        <div className="py-4">
          <h1 className="pt-8 pb-4 text-center text-3xl font-bold dark:text-white">
            Analysis
          </h1>
        </div>

        <center>
          <div className="py-4">
            <p className="pt-8 pb-4 text-center text-xl font-bold dark:text-white">
              2023 CARE Operations by Council District
            </p>
            <p className="text-center text-lg dark:text-white">
              Total CARE Operations: {totalCareOperations}
            </p>
            <Bar data={careChartData} options={chartOptions} />
          </div>

          <div className="py-4">
            <p className="pt-8 pb-4 text-center text-xl font-bold dark:text-white">
              2023 CARE+ Operations by Council District
            </p>
            <p className="text-center text-lg dark:text-white">
              Total CARE+ Operations: {totalCarePlusOperations}
            </p>
            <Bar data={carePlusChartData} options={chartOptions} />
          </div>

          <div className="py-4">
            <p className="pt-8 pb-4 text-center text-xl font-bold dark:text-white">
              Total CARE & CARE+ Budget FY2023-24: {totalBudget}
            </p>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#41ffca]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Budget</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {departments.map((dept, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{dept.department}</td>
                    <td className="px-6 py-4 max-w-xs break-words whitespace-normal">
                      <div className="relative group">
                        <span className={`${expandedRows[index] ? 'block' : 'line-clamp-3'} break-words`}>{dept.description}</span>
                        {dept.description.length > 100 && (
                          <button
                            className="text-blue-600 hover:text-blue-900 ml-2"
                            onClick={() => handleToggle(index)}
                          >
                            {expandedRows[index] ? 'See less' : 'See more'}
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{dept.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    </>
  );
}
