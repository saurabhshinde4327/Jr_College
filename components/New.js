"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar"; 

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false); // mobile submenu

  return (
    <div className="w-screen overflow-x-hidden">
      {/* PAGE 1 - Hero */}
      <section className="relative h-screen bg-[url('/images/2.jpg')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/50"></div>

        <Navbar />

        {/* Hero Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-12 -translate-y-1/2 text-white z-30"
        >
          <img
            src="/images/logo.jpeg"
            alt="Rayat Logo"
            className="w-20 h-20 mb-4 rounded-full border-4 border-white object-cover"
          />
          <p className="text-lg md:text-xl font-semibold">
            Rayat Shikshan Sanstha's
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2">
            Yashavantrao Chavan Institute of Science, Satara <br /> (Junior
            College)
          </h1>
          <p className="text-base md:text-lg mt-2">
            An Autonomous College with Potential of Excellence
          </p>
        </motion.div>
      </section>

      {/* Principal Section */}
      <section className="relative h-screen bg-[url('/images/2.jpg')] bg-cover bg-center bg-fixed flex justify-center items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-10 max-w-6xl px-6 relative z-10"
        >
          {/* Principal Image */}
          <div className="flex flex-col items-center">
            <div className="w-60 h-72 rounded-2xl shadow-lg overflow-hidden border-4 border-white bg-white">
              <img
                src="/images/principal.png"
                alt="Principal"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">
              Dr. B. T. Jadhav
            </h2>
            <p className="text-gray-200 text-sm">Principal</p>
          </div>

          {/* Principal Text */}
          <div className="bg-white/90 p-8 rounded-2xl shadow-xl border border-gray-200 max-w-2xl">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
              Principal’s Desk
            </h1>
            <p className="text-gray-700 mb-4">
              It gives me immense pleasure to welcome you all to the beautiful,
              well-structured campus of{" "}
              <strong>
                Rayat Shikshan Sanstha's Yashavantrao Chavan Institute of
                Science, Satara
              </strong>
              , one of the most prestigious Autonomous Colleges in Satara
              District, affiliated to KBP University.
            </p>
            <p className="text-gray-700 mb-4">
              Our institute nurtures scientists, IAS/IPS officers, visionary
              thinkers, and responsible citizens who will make a positive impact
              on society and contribute to nation-building.
            </p>
            <p className="text-gray-700">
              We focus on academic excellence, moral values, and holistic
              development to prepare our students for the global stage with
              confidence and integrity.
            </p>
          </div>
        </motion.div>
      </section>

      {/* PAGE 3 - Footer */}
      <section className="relative h-screen bg-[url('/images/2.jpg')] bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="font-bold lg-5">
            Rayat Shikshan Sanstha's Yashavantrao Chavan Institute of Science,
            Satara{" "}
          </p>
          <br />
          <p className="mb-8">Phone: +91-0000000000</p>
          <p className=" font-bold mb-8">Email: jr.ycis.ac.in</p>
          <p className="text-gray-400 text-lg">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.div>
      </section>
    </div>
  );
}
