"use client";
import React, { useEffect, useState } from "react";
import { Anton, Hanken_Grotesk } from "next/font/google";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";
const antonFont = Anton({
  subsets: ["latin"],
  weight: "400",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["About", "Services", "Artists", "Contact"];

  return (
    <>
      {/* Navigation */}
      {/* Navigation */}
      <div className="w-full fixed top-0 left-0 z-50">
        {/* Glass background */}
        <div className="absolute w-full h-full backdrop-blur-md bg-white/10 z-0 py-2"></div>

        {/* Black nav content */}
        <div className="relative z-50 w-[95%] mx-auto bg-black p-4 my-2 flex justify-between items-center shadow-md">
          <h1 className="text-white text-2xl tracking-tighter font-extrabold">
            <Link className={`${hanken.className}`} href={"/"}>
              CMMG
            </Link>
          </h1>
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(true)}
              className={`${hanken.className} text-white font-medium`}
            >
              <TbMenu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0e0e0e] z-[999] flex flex-col p-10 space-y-10 text-[#f2ece5] transition-all duration-300">
          <div className="flex justify-between items-start">
            <h1 className={`${antonFont.className} text-5xl`}>CMMG.</h1>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full flex justify-end cursor-pointer text-xl font-bold"
            >
              Close
            </button>
          </div>
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`${hanken.className} text-6xl py-2 hover:text-orange-700 transition duration-200`}
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="flex space-x-3">
            <Link href={"/"}>
              <FaInstagram className="h-8 w-8" />
            </Link>
            <Link href={"/"}>
              <FaSquareFacebook className="h-8 w-8" />
            </Link>
            <Link href={"/"}>
              <FaYoutube className="h-8 w-8" />
            </Link>
            <Link href={"/"}>
              <FaLinkedin className="h-8 w-8" />
            </Link>
          </div>
          <button className="w-full border font-semibold rounded-3xl py-3 cursor-pointer hover:bg-[#f2ece5] hover:text-[#0e0e0e]">
            Music Library
          </button>
        </div>
      )}
    </>
  );
};

export default Nav;
