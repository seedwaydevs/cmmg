"use client";
import React, { useEffect, useState } from "react";
import { Anton, Schibsted_Grotesk } from "next/font/google";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import Image from "next/image";
import { cmmg } from "@/data";
const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Music",
      link: "/commercial",
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <>
      {/* Navigation */}
      <div className="w-full fixed top-0 left-0 z-50">
        {/* Glass background */}
        <div className="absolute w-full h-full backdrop-blur-md bg-white/10 z-0 py-2"></div>

        {/* Black nav content */}
        <div className="relative z-50 w-[90%] mx-auto bg-black p-4 my-2 flex flex-row justify-between items-center shadow-md">
          <div className="h-[10vh] -my-5">
            <Link className={`${sted.className}`} href={"/"}>
              <Image
                src={cmmg}
                alt="cmmg-logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <div className="flex flex-row items-center space-x-5">
            <div>
              <Link
                href={"https://www.library.cmmg.co.za/library"}
                className="hidden md:block text-white font-semibold text-lg rounded-md hover:text-blue-700 bg-orange-600 py-2 px-3"
              >
                Production Music Library
              </Link>
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              className={`${sted.className} text-white font-medium`}
            >
              <GiHamburgerMenu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0e0e0e] z-[999] flex flex-col p-10 space-y-10 text-[#f2ece5] transition-all duration-300">
          <div className="flex justify-between items-start">
            <h1
              className={`${sted.className} flex flex-row text-5xl tracking-tighter font-extrabold`}
            >
              CMMG <span className="text-orange-600">.</span>
            </h1>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full flex justify-end cursor-pointer text-xl font-bold"
            >
              Close
            </button>
          </div>
          <div className="flex flex-col">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.link}
                onClick={() => setMenuOpen(false)}
                className={`${sted.className} text-4xl font-semibold py-2 hover:text-orange-700 transition duration-200`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex space-x-3">
            <Link href={"/https://www.instagram.com/cmmg_records/"}>
              <FaInstagram className="h-10 w-10 p-2 hover:bg-gradient-to-b from-pink-600 to-purple-600" />
            </Link>
            <Link
              href={"/https://www.facebook.com/profile.php?id=61582923471298"}
            >
              <FaSquareFacebook className="h-10 w-10 p-2  hover:bg-blue-500" />
            </Link>
            <Link href={"/"}>
              <FaYoutube className="h-10 w-10 p-2 hover:bg-red-600" />
            </Link>
            <Link href={"/"}>
              <FaLinkedin className="h-10 w-10 p-2 hover:bg-blue-600" />
            </Link>
          </div>
          <Link
            href={"https://www.library.cmmg.co.za/library"}
            className={`${sted.className} text-center w-full bg-orange-700  font-semibold  py-3 cursor-pointer hover:bg-orange-800  hover:text-neutral-100`}
          >
            Production Music Library
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
