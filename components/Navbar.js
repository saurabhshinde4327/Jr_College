"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Departments" },
    { name: "Committee", link: "/Committee" },
    { name: "Ebooks", link: "/Ebooks" },
    // { name: "NAAC", link: "/naac" },
    { name: "Gallery", link: "/gallery" },
    { name: "All Menus" },
  ];

  const Departments = [
    { name: "Physics", link: "/Physics" },
    { name: "Chemistry", link: "/Chemistry" },
    { name: "Biology", link: "/Biology" },
    { name: "Mathematics", link: "/Mathematics" },
    { name: "Electronics", link: "/Electronics" },
    { name: "Computer Science", link: "/CS" },
    { name: "Information Technology", link: "/IT" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="absolute top-0 w-full flex justify-end items-center px-8 py-4 text-white z-10"
    >
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-lg relative">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="relative group cursor-pointer"
            onClick={() => item.name === "All Menus" && setMenuOpen(true)}
          >
            {item.name === "Departments" ? (
              <button className="flex items-center hover:text-gray-300 transition-colors duration-300">
                Departments <span className="ml-1">▼</span>
              </button>
            ) : item.link ? (
              <Link
                href={item.link}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ) : (
              <span className="hover:text-gray-300 transition-colors duration-300">
                {item.name}
              </span>
            )}

            {/* Submenu */}
            {item.name === "Departments" && (
              <ul className="absolute left-0 mt-2 bg-black text-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-52 z-20">
                {Departments.map((dept) => (
                  <li key={dept.name}>
                    <Link
                      href={dept.link}
                      className="block px-4 py-2 hover:bg-gray-300 hover:text-black rounded-md transition-colors duration-300"
                    >
                      {dept.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <FaBars
        size={28}
        className="md:hidden cursor-pointer hover:text-gray-300"
        onClick={() => setMenuOpen(true)}
      />

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 right-0 h-full w-80 bg-[#1a1a1a] text-white z-30 p-6 overflow-y-auto"
            >
              {/* Logo & Close */}
              <div className="flex justify-between mb-6">
                <img
                  src="/images/logo.jpeg"
                  alt="Rayat"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <IoClose
                  size={30}
                  className="cursor-pointer hover:text-gray-300"
                  onClick={() => setMenuOpen(false)}
                />
              </div>

              {/* Menu List */}
              <ul className="space-y-4 text-lg">
                {menuItems.map((item) => (
                  <li key={item.name} className="cursor-pointer">
                    {item.name === "Departments" ? (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="hover:text-gray-300 transition-colors duration-300">
                            Departments
                          </span>
                          <button
                            className="ml-2 text-sm text-gray-400 hover:text-gray-300"
                            onClick={() => setDeptOpen(!deptOpen)}
                          >
                            {deptOpen ? "▲" : "▼"}
                          </button>
                        </div>
                        <AnimatePresence>
                          {deptOpen && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 ml-4 space-y-2 text-base text-gray-300 overflow-hidden"
                            >
                              {Departments.map((dept) => (
                                <li key={dept.name}>
                                  <Link
                                    href={dept.link}
                                    className="block px-3 py-1 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-300"
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {dept.name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : item.link ? (
                      <Link
                        href={item.link}
                        className="hover:text-gray-300 transition-colors duration-300"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="hover:text-gray-300 transition-colors duration-300">
                        {item.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
