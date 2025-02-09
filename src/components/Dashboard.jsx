import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]); // store the data

  useEffect(() => {
    // Fetch data 
    axios
      .get("http://localhost:3001/message")
      .then((response) => setData(response.data)) 
  }, []); 

  return (
    <div className="max-w-screen-xl mx-auto p-6 bg-black text-white">
      <h1 className="text-3xl text-[#CCAC86] font-bold mb-6">Admin Dashboard</h1>
      <div className="bg-[#181818] shadow-md rounded-lg ">
        <table className="min-w-full table-auto border-separate border-spacing-0.5">
          <thead className="bg-[#181818] border-b border-white">
            <tr>
            <th className="px-6 py-3 text-left text-lg font-bold text-[#CCAC86]  border-r border border-white">
                Email
              </th>
              <th className="px-6 py-3 text-left text-lg font-bold text-[#CCAC86] border-r border border-white">
                Nom
              </th>
              <th className="px-6 py-3 text-left text-lg font-bold text-[#CCAC86] border-r border border-white">
                Prenom
              </th>
              <th className="px-6 py-3 text-left text-lg font-bold border border-white text-[#CCAC86] ">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t border-b border-gray-100">
                <td className="px-6 py-3 text-md text-gray-200 border-r border border-white">
                  {item.email}
                </td>
                <td className="px-6 py-3 text-md text-gray-200 border-r border border-white uppercase">
                  {item.nom}
                </td>
                <td className="px-6 py-3 text-md text-gray-200 border-r border border-white">
                  {item.prenom}
                </td>
                <td className="px-6 py-3 text-md text-gray-200 border border-white ">
                  {item.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
