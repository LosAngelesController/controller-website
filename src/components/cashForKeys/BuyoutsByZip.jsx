"use client";

import axios from "axios";
import React from 'react';
import { useEffect, useState } from "react";




export default function BuyoutsByZip() {
  const [zipBuyouts, setZipBuyouts] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/tenantBuyoutsAnalysis/top20')
      .then((response) => {
        const data = response.data.top20;
        // console.log("zip", data);
        setZipBuyouts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  }, []);

  return (
    <div className="mt-4 px-1 sm:px-5 md:px-9 lg:px-20 xl:px-24">
      <div className="bg-white p-2">
        <table className="table-auto w-full">
          <caption
            className="mb-2 text-left italic dark:text-white"
          >
            Zipcode and communities by number of tenant buyout agreements
          </caption>

          <thead className="text-black" style={{ border: '1px solid black', backgroundColor: '#41ffca' }}>
            <tr>
              <th scope="col" className="text-black p-2 text-left" style={{ border: '1px solid black' }}>#</th>
              <th scope="col" className="text-black p-2 text-left" style={{ border: '1px solid black' }}>Zip Code</th>
              <th scope="col" className="text-black p-2 text-left" style={{ border: '1px solid black' }}>Communities</th>
              <th scope="col" className="text-black p-2" style={{ border: '1px solid black' }}># of Buyouts</th>
            </tr>
          </thead>
          <tbody className="text-black" style={{ border: '1px solid black' }}>
            {zipBuyouts.map((row) => (
              <tr key={row.id}>
                <td className="text-black p-2 font-bold" style={{ border: '1px solid black' }}>{row.id - 1}</td>
                <td className="text-black p-2 font-bold" style={{ border: '1px solid black' }}>{row.zipCode}</td>
                <td className="text-black p-2" style={{ border: '1px solid black' }}>{row.communities}</td>
                <td className="text-black p-2 text-right" style={{ border: '1px solid black' }}>{row.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};