"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; 

export default function Physics() {
  const staff = [
    { id: 1, name: "Dr. ---", designation: "Head of Department", photo: "/images/1.jpg" },
    { id: 2, name: "Prof. ---", designation: "Associate Professor", photo: "/images/2.jpg" },
    { id: 3, name: "Mr. ---", designation: "Assistant Professor", photo: "/images/3.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl flex flex-col items-center"
      >
        <Navbar />

        {/* College Logo + Name */}
        <div className="text-center mb-10">
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-gray-300 shadow-lg"
          />
          <p className="text-gray-600">Rayat Shikshan Sanstha's</p>
          <h1 className="text-3xl font-bold text-black mt-2">
            Yashavantrao Chavan Institute of Science, Satara <br /> (Junior College)
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-yellow-600 mb-6 border-b-4 border-yellow-600 pb-2">
          Department of Physics 
        </h2>
        
        {/* Table */}
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead className="bg-black text-white">
              <tr>
                {["Sr. No", "Name", "Designation", "Photo"].map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {staff.map((t, i) => (
                <tr
                  key={t.id}
                  className="hover:bg-gray-300 hover:text-black transition-colors duration-300"
                >
                  <td className="px-4 py-3 border border-gray-300">{i + 1}</td>
                  <td className="px-4 py-3 border border-gray-300">{t.name}</td>
                  <td className="px-4 py-3 border border-gray-300">{t.designation}</td>
                  <td className="px-4 py-3 border border-gray-300">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-16 h-16 object-cover rounded-md border border-gray-400 shadow-md"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
