"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Nav = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Fixed top nav bar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-900 ${
          isOpen ? "bg-white" : "bg-[#181818]"
        }`}
      >
        <div className="w-[90%] mx-auto py-6 flex justify-between items-center">
          <h1
            className={`font-bold text-2xl transition-colors duration-900 ${
              isOpen ? "text-black" : "text-white"
            }`}
          >
            CMMG
          </h1>
          <button
            onClick={toggleMenu}
            className={`transition-colors duration-900 ${
              isOpen ? "text-black" : "text-white"
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>
      </div>

      {/* Fullscreen dropdown menu overlay */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-40 transition-all duration-900 ease-in-out transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-[90%] mx-auto pt-28 pb-10">
          <ul className="flex flex-col space-y-3 text-left text-lg font-medium text-black">
            <li>
              <Link
                href="#home"
                onClick={closeMenu}
                className="text-sm hover:text-gray-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={closeMenu}
                className="text-sm hover:text-gray-600"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="text-sm hover:text-gray-600"
              >
                Services
              </a>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="text-sm hover:text-gray-600"
              >
                Contact
              </Link>
            </li>
          </ul>

          <button className="border border-black w-full mt-10 py-2 rounded-3xl">
            Music Library
          </button>
        </div>
      </div>

      {/* Spacer to keep hero visible beneath fixed nav */}
      <div className="h-[76px]" />
    </>
  );
};

export default Nav;
