"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Committees() {
  // Committees Data
  const committees = {
    "Steering Committee": [
      {
        col1: "Vice Principal",
        col2: "Mrs. Salunkhe Nandini Suresh",
        col3: "Administration, Gurukul, Academic Improvement",
      },
      {
        col1: "Supervisor",
        col2: "Mr. Nikam Nanasaheb Tukaram",
        col3: "Admission, ZP/Sanstha/DY Correspondence/Dispute Redressal",
      },
      {
        col1: "Asst. Supervisor",
        col2: "Mrs. Walvekar V.M.",
        col3: "—",
      },
      {
        col1: "Asst. Supervisor",
        col2: "Mrs. Patil N.A.",
        col3: "—",
      },
      {
        col1: "Note",
        col2: "Includes all Heads and Chairmen of Committees",
        col3: "—",
      },
    ],
    "XI & XII Admission & Prospects Committee": [
      {
        col1: "Chairman",
        col2: "Nikam N.T. (Geography)",
        col3: "—",
      },
      { col1: "Member", col2: "Walvekar V.M. (Language)", col3: "—" },
      { col1: "Member", col2: "Patil N.A. (Physics)", col3: "—" },
      { col1: "Member", col2: "Pawar M.N. (Maths)", col3: "—" },
      { col1: "Member", col2: "Gaikwad G.N. (Chemistry)", col3: "—" },
      { col1: "Member", col2: "Kulkarni A.P. (Chemistry)", col3: "—" },
      { col1: "Member", col2: "Jadhav R.S. (Biology)", col3: "—" },
      { col1: "Member", col2: "Gadhave A.B. (Chemistry)", col3: "—" },
      { col1: "Member", col2: "Sonawane S.P. (Electronics)", col3: "—" },
      { col1: "Member", col2: "Babar G.R. (IT)", col3: "—" },
    ],
    "Time Table Committee": [
      {
        col1: "Chairman",
        col2: "Pawar Vivek R. (Chemistry)",
        col3: "—",
      },
      { col1: "Member", col2: "Bhapkar P.R. (Physics)", col3: "—" },
      { col1: "Member", col2: "Patil R.U. (Biology)", col3: "—" },
      { col1: "Member", col2: "Panaskar A.H. (Maths)", col3: "—" },
      { col1: "Member", col2: "Kale S.S. (English)", col3: "—" },
      { col1: "Member", col2: "Kadam R.S. (Chemistry)", col3: "—" },
      { col1: "Member", col2: "Mandake S.S. (Language)", col3: "—" },
    ],
    "Study Material Committee": [
      {
        col1: "Chairman",
        col2: "Kulkarni A.P. (Chemistry)",
        col3: "—",
      },
      { col1: "Member", col2: "Salunkhe A.S. (Physics)", col3: "—" },
      { col1: "Member", col2: "Satpute S.R. (Chemistry)", col3: "—" },
      { col1: "Member", col2: "Ligade V.S. (Biology)", col3: "—" },
      { col1: "Member", col2: "Choudhari S.N. (Maths)", col3: "—" },
    ],
    
     " ALL HEAD OF DEPARTMENTS (ISO / SHALA SIDDHI / STAFF)": [
    { col1: "CHAIRMAN", col2: "DESHMUKH S.S.", col3: "ELECTRONICS" },
    { col1: "MEMBER", col2: "DHERE S.B.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "SONAWANE K.R.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "SHINDE A.P.", col3: "" },
    { col1: "MEMBER", col2: "BHANDARE S.S.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "NIGHUTE P.B.", col3: "MATHS" },
    { col1: "MEMBER", col2: "MANDAKE S.S.", col3: "MARATHI" },
  ],
  " गुणवत्तावाढ प्रकल्प (QUALITY IMPROVEMENT CELL)": [
    { col1: "CHAIRMAN", col2: "DURE D.P.", col3: "BIOLOGY" },
    {
      col1: "MEMBER",
      col2: "TAMBOLI A.R. (JEE/NEET/MHT-CET Online Exam)",
      col3: "CHEMISTRY",
    },
    {
      col1: "MEMBER",
      col2: "DHERE S.B. (Advance Batch)",
      col3: "PHYSICS",
    },
    {
      col1: "MEMBER",
      col2: "LIGADE V.S. (Progressive Batch)",
      col3: "BIOLOGY",
    },
    {
      col1: "MEMBER",
      col2: "KADAM R.S. (NDA,NATA Exam)",
      col3: "CHEMISTRY",
    },
    {
      col1: "MEMBER",
      col2: "BHAPKAR P.R. (Olympiad)",
      col3: "PHYSICS",
    },
    {
      col1: "MEMBER",
      col2: "NAMJOSHI B.O. (IISER)",
      col3: "MATHS",
    },
    {
      col1: "MEMBER",
      col2: "NIGHUTE P.B. (JEE,CET-PCM)",
      col3: "MATHS",
    },
    {
      col1: "MEMBER",
      col2: "GURAV S.B. (NEET,CET-PCB)",
      col3: "BIOLOGY",
    },
    {
      col1: "MEMBER",
      col2: "MACHALE A.R. (INSPIRE)",
      col3: "PHYSICS",
    },
    {
      col1: "MEMBER",
      col2: "GORE S.A. (Deeper Exam)",
      col3: "CHEMISTRY",
    },
],
  " COLLEGE & BOARD EXAM, RESULT & RESULT ANALYSIS": [
    { col1: "CHAIRMAN", col2: "GORE S.A.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "PAWAR M.N.", col3: "MATHS" },
    { col1: "MEMBER", col2: "GADHAVE A.B.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "SONAWANE S.P.", col3: "ENGLISH" },
    { col1: "MEMBER", col2: "BABAR G.R.", col3: "I.T" },
    { col1: "MEMBER", col2: "MOHITE R.B.", col3: "GEOGRAPHY" },
    { col1: "MEMBER", col2: "KHATMODE H.A.", col3: "MARATHI" },
    { col1: "MEMBER", col2: "DOKE D.G.", col3: "GURUKUL" },
    { col1: "MEMBER", col2: "DURE D.P.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "BHAPKAR P.R.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "LANKE M.M.", col3: "MCVC" },
    { col1: "MEMBER", col2: "", col3: "" },
  ],
  " XI ROLL CALL / SARAL / SUBJECT WISE STUDENT DATA / SARAL UPDATION / PROMOTION / UDISE": [
    { col1: "CHAIRMAN", col2: "KHATMODE H.A.", col3: "MARATHI" },
    { col1: "MEMBER", col2: "", col3: "" },
    { col1: "A", col2: "DEVKATE V.B.", col3: "CHEMISTRY" },
    { col1: "B", col2: "DHERE", col3: "PHYSICS" },
    { col1: "C", col2: "GHORPADE A.D.", col3: "MATHS" },
    { col1: "D", col2: "MANDAKE S.S.", col3: "MARATHI" },
    { col1: "E", col2: "GURAV S.B.", col3: "BIOLOGY" },
    { col1: "F", col2: "LIGADE", col3: "BIOLOGY" },
    { col1: "G", col2: "MACHALE A.R.", col3: "PHYSICS" },
    { col1: "H", col2: "NANDE S.V.", col3: "EVS" },
    { col1: "I", col2: "TUWAR P.R.", col3: "CHEMISTRY" },
    { col1: "J", col2: "MAHADIK J.D.", col3: "MATHS" },
    { col1: "K", col2: "GORE S.D.", col3: "CHEMISTRY" },
    { col1: "L", col2: "YADAV H.G.", col3: "C.S." },
    { col1: "M", col2: "", col3: "" },
    { col1: "N", col2: "", col3: "" },
    { col1: "O", col2: "", col3: "" },
  ],
  " RAYAT GURUKUL": [
    { col1: "INCHARGE", col2: "DHEBE A.L.", col3: "" },
  ],
  " EQUAL OPPORTUNITY CENTER (COMMITTEE)": [
    { col1: "CO ORDINATOR", col2: "KHILARE S.B.", col3: "ENGLISH" },
    { col1: "NODAL OFFICER", col2: "WALVEKAR V.M.", col3: "LANGUAGE" },
    { col1: "NODAL OFFICER", col2: "PATIL N.A.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "GORE S.D.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "TILEKAR P.A.", col3: "MATHS" },
    { col1: "MEMBER", col2: "PATIL S.A.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "JAKATE J.S.", col3: "LANGUAGE" },
    { col1: "MEMBER", col2: "", col3: "" },
    { col1: "MEMBER", col2: "ALL XI AND XII CLASS TEACHERS", col3: "" },
  ],
  " DISCIPLINE & DISPUTE / UNIFORM / SEXUAL HARASSMENT & REDRESSAL": [
    { col1: "CHAIRMAN", col2: "JAMDADE A.R.", col3: "SPORTS" },
    { col1: "MEMBER", col2: "JADHAV K.P.", col3: "GURUKUL" },
    { col1: "MEMBER", col2: "JADHAV A.D.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "PAWAR V.R.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "BABAR M.", col3: "MATHS" },
    { col1: "MEMBER", col2: "MANDAKE S.S.", col3: "LANGUAGE" },
    { col1: "MEMBER", col2: "LANKE M.M.", col3: "MCVC" },
    { col1: "MEMBER", col2: "LIGADE V.S.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "", col3: "" },
    { col1: "MEMBER", col2: "", col3: "" },
  ],
  " XII ROLL CALL / SARAL / SUBJECT WISE STUDENT DATA / SARAL UPDATION / UDISE": [
    { col1: "CHAIRMAN", col2: "KHILARE S.B.", col3: "ENGLISH" },
    { col1: "A", col2: "TILEKAR P.A.", col3: "MATHS" },
    { col1: "B", col2: "DHANE N.", col3: "ENGLISH" },
    { col1: "C", col2: "SHINDE A.P.", col3: "CHEMISTRY" },
    { col1: "D", col2: "NIGHUTE P.B.", col3: "MATHS" },
    { col1: "E", col2: "SALUNKHE", col3: "" },
    { col1: "F", col2: "NIRWAN D.H.", col3: "LANGUAGE" },
    { col1: "G", col2: "DURE D.P.", col3: "BIOLOGY" },
    { col1: "H", col2: "DESHMUKH A.L.", col3: "BIOLOGY" },
    { col1: "I", col2: "KHOT A.R.", col3: "CHEMISTRY" },
    { col1: "J", col2: "PAWAR V.R.", col3: "CHEMISTRY" },
    { col1: "K", col2: "JAGTAP S.A.", col3: "PHYSICS" },
    { col1: "L", col2: "SATPUTE S.R.", col3: "CHEMISTRY" },
    { col1: "M", col2: "CHAPHEKAR M.P.", col3: "PHYSICS" },
    { col1: "N", col2: "JAGTAP S.A.", col3: "BIOLOGY" },
    { col1: "O", col2: "GAIKWAD G.N.", col3: "CHEMISTRY" },
  ],
 " STUDENT WELFARE COMMITTEE ( S.A. FUND , COUNCELLING )": [
    { col1: "CHAIRMAN", col2: "BHOSALE P.U.", col3: "PHYSICS" },
    { col1: "Student aid fund", col2: "PATIL S.A.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "RANADE B.P.", col3: "MATHS" },
    { col1: "MEMBER", col2: "DHANE N.A.", col3: "LANGUAGE" },
    { col1: "MEMBER", col2: "SATPUTE S.R.", col3: "CHEMISTRY" },
  ],
  " STAFF WELFARE / WORKSHOP/ STAFF ACADEMY": [
    { col1: "CHAIRMAN", col2: "KHOT R.R.", col3: "LANGUAGE" },
    { col1: "MEMBER", col2: "HEGADE", col3: "GURUKUL" },
  ],
  " NEET REPEATER": [
    { col1: "CHAIRMAN", col2: "JAGTAP S.A.", col3: "GURUKUL" },
    { col1: "MEMBER", col2: "SALKAR L.P.", col3: "CHEMISTRY" },
    { col1: "", col2: "PATIL V.S.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "PATIL S.A.", col3: "BIOLOGY" },
  ],
  " SMDC AND PARENT TEACHER ASSOCIATION": [
    { col1: "CHAIRMAN", col2: "PAWAR M.N.", col3: "MATHS" },
    { col1: "CHAIRMAN", col2: "PAWAR M.N.", col3: "" },
    { col1: "MEMBER", col2: "PALAV L.S.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "XI & XII CLASS TEACHERS", col3: "" },
  ],
  " DATTAK PALAK STUDENT AND TEACHER YOJANA": [
    { col1: "CHAIRMAN", col2: "SHINDE S.B.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "GORE S.D.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "PATIL R.U.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "PANASKAR A.H.", col3: "MATHS" },
    { col1: "MEMBER", col2: "JAKATE J.S.", col3: "LANGUAGE" },
    { col1: "MEMBER", col2: "BAGAL R.B.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "", col3: "" },
  ],
  " ONLINE TEACHING / GUIDANCE / FUNCTIONS/WEBSITE UPDATION": [
    { col1: "CHAIRMAN", col2: "BABAR G.R.", col3: "IT" },
    { col1: "MEMBER", col2: "RAUT V.R.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "PANDHARPATTE", col3: "CS" },
    { col1: "MEMBER", col2: "MACHALE A.R.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "", col3: "" },
    { col1: "MEMBER", col2: "", col3: "" },
  ],
  " SUMMER VACATION COURSE/CRASH COURSE/ BRIDGE COURSE": [
    { col1: "CHAIRMAN", col2: "PATIL V.A.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "DHERE S.B.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "SHINDE R.H.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "ALTEKAR V.B.", col3: "MATHS" },
    { col1: "MEMBER", col2: "KANASE V.V.", col3: "LANGUAGE" },
    { col1: "MEMBER", col2: "DESHMUKH A.L.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "", col3: "" },
  ],
  " STUDENT ACTIVITY / STUDENT DEVELOPMENT": [
    { col1: "CHAIRMAN", col2: "SHINDE S.B.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "KULKARNI Y.H.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "PATIL V.P.", col3: "MCVC" },
    { col1: "MEMBER", col2: "CHAVAN", col3: "HINDI" },
    { col1: "MEMBER", col2: "KANSE VISHAKHA", col3: "ENGLISH" },
    { col1: "MEMBER", col2: "JADHAV B.B.", col3: "MARATHI" },
    { col1: "MEMBER", col2: "PATIL S.S.", col3: "LANGUAGE" },
  ],
  " STAFF ACADEMY": [
    { col1: "CHAIRMAN", col2: "BABAR S.R.", col3: "IT" },
    { col1: "MEMBER", col2: "JAKATE J.S.", col3: "LANGUAGE" },
    { col1: "MEMBER", col2: "JADHAV A.S.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "NIKAM S.M.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "PAWAR V.R.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "GHORPADE A.D.", col3: "MATHS" },
  ],
  " OTHER EXAM KARMAVEER VIDYA PRABODHINI & GANDHI VICHAR EXAM/ JEE/NEET/CET/NDA/OLYMPIAD": [
    { col1: "CHAIRMAN", col2: "GHORPADE A.D.", col3: "MATHS" },
    { col1: "MEMBER", col2: "LANKE M.M.", col3: "MCVC" },
    { col1: "", col2: "ALL XI CLASS TEACHERS", col3: "" },
  ],
  " Ex Ycian's ASSOCIATION / SCIENCE EXIBITION": [
    { col1: "CHAIRMAN", col2: "JADHAV K.P.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "PATIL V.S.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "KADAM R.S.", col3: "CHEMISTRY" },
  ],
  "STANDARD CLUB": [
    { col1: "CHAIRMAN", col2: "NANDE S.V.", col3: "EVS" },
    { col1: "MEMBER", col2: "PATIL K.P.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "KADAM R.S.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "KADAM S.S.", col3: "PHYSICS" },
  ],
  " PUBLICITY, FLEX & INFRASTRUCTURE / STATIONARY/ MAINTENANCE": [
    { col1: "CHAIRMAN", col2: "KHOT A.R.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "CHAPHEKAR M.P.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "JADHAV R.S.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "RAUT V.S.", col3: "GURUKUL" },
    { col1: "", col2: "NIGHUTE P.B.", col3: "MATHS" },
  ],
  " FIELD VISIT & EDUCATIONAL TOURS / S.T. PASS": [
    { col1: "CHAIRMAN", col2: "PATIL V.P.", col3: "MCVC" },
    { col1: "MEMBER", col2: "SHINDE R.H.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "LANKE M.M.", col3: "MCVC" },
    { col1: "", col2: "ALL HEAD OF DEPARTMENTS", col3: "" },
  ],
  " LADIES HOSTEL COMMITTEE": [
    { col1: "CHAIRMAN", col2: "NIRWAN D.H.", col3: "LANGUAGE" },
    { col1: "MEMBER", col2: "JADHAV A.D.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "BHANDARE S.S.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "PATIL V.A.", col3: "MCVC" },
  ],
  " STAFF APPROVAL": [
    { col1: "CHAIRMAN", col2: "KULKARNI D.S.", col3: "" },
    { col1: "MEMBER", col2: "SONAWANE S.P.", col3: "" },
    { col1: "MEMBER", col2: "", col3: "" },
    { col1: "MEMBER", col2: "", col3: "" },
  ],
  " STUDYROOM/LIBRARY COMMITTEE/EARN & LEARN SCHEME/ BOYS HOSTEL": [
    { col1: "CHAIRMAN", col2: "DESHMUKH A.L.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "KOLEKAR N.B.", col3: "MATHS" },
    { col1: "MEMBER", col2: "EVARE SHARAD", col3: "" },
    { col1: "MEMBER", col2: "", col3: "" },
  ],
  " YC TIMES & PARIJATAK/ PUBLICATION शब्दसौरभ": [
    { col1: "CHAIRMAN", col2: "KALE S.S.", col3: "" },
    { col1: "MEMBER", col2: "SONAWANE S.P.", col3: "" },
    { col1: "MEMBER", col2: "PATIL SHIVAPPA", col3: "" },
    { col1: "MEMBER", col2: "KOLEKAR N.B.", col3: "" },
    { col1: "MEMBER", col2: "KHATMODE H.K.", col3: "" },
    { col1: "MEMBER", col2: "JADHAV B.B.", col3: "" },
  ],
  " ARTS AND CULTURAL COMMITTEE": [
    { col1: "CHAIRMAN", col2: "PATIL SHIVAPPA S.", col3: "" },
    { col1: "MEMBER", col2: "DHANE NISHA", col3: "" },
    { col1: "MEMBER", col2: "KANSE VISHAKHA", col3: "" },
    { col1: "MEMBER", col2: "NIRWAN D.H.", col3: "" },
    { col1: "MEMBER", col2: "MANDAKE S.S.", col3: "" },
    { col1: "MEMBER", col2: "JAKATE J.S.", col3: "" },
    { col1: "MEMBER", col2: "KHATMODE H.K.", col3: "" },
    { col1: "MEMBER", col2: "JADHAV B.B.", col3: "" },
    { col1: "MEMBER", col2: "", col3: "" },
  ],
  "TEACHERS SCIENCE EXHIBITION COMMITTEE": [
    { col1: "CHAIRMAN", col2: "KULKARNI Y.H.", col3: "BIOLOGY" },
    { col1: "MEMBER", col2: "PATIL V.S.", col3: "PHYSICS" },
    { col1: "MEMBER", col2: "SATPUTE S.R.", col3: "CHEMISTRY" },
    { col1: "MEMBER", col2: "BABAR G.R.", col3: "IT" },
    { col1: "MEMBER", col2: "BABAR M.H.", col3: "MATHS" },
  ],
  "ARTIFICIAL INTELLIGENCE (AI)": [
    { col1: "CHAIRMAN", col2: "TILEKAR P.A.", col3: "MATHS" },
    { col1: "MEMBER", col2: "PAWAR M.N.", col3: "MATHS" },
    { col1: "MEMBER", col2: "BABAR M.H.", col3: "MATHS" },
    { col1: "MEMBER", col2: "BABAR G.R.", col3: "IT" },
  ],
  };

  const [selectedCommittee, setSelectedCommittee] = useState(
    Object.keys(committees)[0]
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 flex">
      {/* Sidebar */}
      <div className="w-72 bg-gray-100 border-r border-gray-300 flex flex-col">
        <div className="p-6 flex flex-col items-center border-b border-gray-300">
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="w-16 h-16 mb-2 rounded-full border-4 border-gray-300 shadow-lg"
          />
          <p className="text-center text-sm text-gray-600 font-semibold">
            Committees 2025–26
          </p>
        </div>
        <div className="flex-1 overflow-y-auto">
          {Object.keys(committees).map((name) => (
            <button
              key={name}
              onClick={() => setSelectedCommittee(name)}
              className={`w-full text-left px-6 py-3 border-b border-gray-200 text-yellow-600 hover:bg-gray-200 transition-colors ${
                selectedCommittee === name
                  ? "bg-gray-400 text-gray-800 font-semibold"
                  : ""
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex flex-col items-center p-6"
      >
        <Navbar />
        <div className="text-center mb-10">
          <p className="text-gray-600">Rayat Shikshan Sanstha's</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">
            Yashavantrao Chavan Institute of Science, Satara <br /> (Junior
            College)
          </h1>
        </div>

        <h2 className="text-2xl font-bold text-yellow-600 mb-6 border-b-4 border-yellow-600 pb-2">
          {selectedCommittee}
        </h2>

        {/* Table */}
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead className="bg-gray-100 text-gray-900">
              <tr>
                {["Role", "Name", "Responsibilities / Department"].map(
                  (h, i) => (
                    <th key={i} className="px-4 py-3 text-left">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {committees[selectedCommittee].map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50 transition-colors duration-300"
                >
                  <td className="px-4 py-3 border border-gray-300">{row.col1}</td>
                  <td className="px-4 py-3 border border-gray-300">{row.col2}</td>
                  <td className="px-4 py-3 border border-gray-300">{row.col3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
