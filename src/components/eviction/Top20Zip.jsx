"use client";

import axios from "axios";
import React from 'react';
import { useEffect, useState } from "react";




export default function Top20Zip() {
    const [zipNotices, setZipNotices] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/evictionNoticesAnalysisMonthly/topTwenty')
        .then((response) => {
            const data = response.data.topTwenty;
            // console.log("zip", data);
            setZipNotices(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        })
      }, []);

    return (
      <div>
        <div className="bg-white p-2">
          <table className="table-auto w-full">
            <caption
              className="p-2 text-center text-3xl font-bold text-black"
              style={{ border: '1px solid black', backgroundColor: '#41ffca', borderBottom: 'none' }}
            >
              Top 20 Zip Codes with Highest Number of Eviction Notices
            </caption>
            <thead className="text-black" style={{border: '1px solid black', backgroundColor: '#41ffca'}}>
              <tr>
                <th className="text-black p-2 text-left" style={{border: '1px solid black'}} scope="col">Zip Code</th>
                <th className="text-black p-2 text-left" style={{border: '1px solid black'}} scope="col">Communities</th>
                <th className="text-black p-2" style={{border: '1px solid black'}} scope="col"># of Eviction Notices</th>
              </tr>
            </thead>
            <tbody className="text-black" style={{border: '1px solid black'}}>
              {zipNotices.map((row) => (
                <tr key={row.id}>
                  <th className="text-black p-2 font-bold" style={{border: '1px solid black'}} scope="row">{row.zipCode}</th>
                  <td className="text-black p-2" style={{border: '1px solid black'}}>{row.communities}</td>
                  <td className="text-black p-2 text-right" style={{border: '1px solid black'}}>{row.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};
