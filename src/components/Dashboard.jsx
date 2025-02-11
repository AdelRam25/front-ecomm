import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import MessageModal from "./MessageModal"; 

export default function Dashboard() {
  const [data, setData] = useState([]); 
  const [selectedMessage, setSelectedMessage] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {

    axios
      .get("http://localhost:3001/message")
      .then((response) => setData(response.data));
  }, []);

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6 bg-black text-white">
      <h1 className="text-3xl text-[#CCAC86] font-bold mb-6">
        Admin Dashboard
      </h1>
      <div className="shadow-md rounded-lg">
        <table className="min-w-full bg-[#181818] table-auto border-separate border-spacing-0.5">
          <thead className="bg-[#181818] border-b border-white">
            <tr>
              <th className="px-6 py-3 text-left text-lg font-bold text-[#CCAC86] border-r border border-white">
                Email
              </th>
              <th className="px-6 py-3 text-left text-lg font-bold text-[#CCAC86] border-r border border-white">
                Nom
              </th>
              <th className="px-6 py-3 text-left text-lg font-bold text-[#CCAC86] border-r border border-white">
                Prenom
              </th>
              <th className="px-6 py-3 text-left text-lg font-bold border border-white text-[#CCAC86]">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-t border-b w-full border-gray-100"
              >
                <td className="px-6 py-3 text-md text-gray-200 border-r border border-white">
                  {item.email}
                </td>
                <td className="px-6 py-3 text-md text-gray-200 border-r border border-white uppercase">
                  {item.nom}
                </td>
                <td className="px-6 py-3 text-md text-gray-200 border-r border border-white">
                  {item.prenom}
                </td>
                <td className="px-6 py-3 text-md flex items-center justify-between gap-5 text-gray-200 border border-white">
                  {item.message.length > 20
                    ? item.message.substring(0, 20).concat(" ...")
                    : item.message}
                  <button onClick={() => handleViewMessage(item)}>
                    <FaEye className="cursor-pointer hover:text-[#CCAC86]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render the modal */}
      <MessageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={selectedMessage}
      />
    </div>
  );
}