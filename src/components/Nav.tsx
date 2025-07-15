"use client";
import React, { useEffect, useState } from "react";
import { Anton, Hanken_Grotesk } from "next/font/google";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const antonFont = Anton({
  subsets: ["latin"],
  weight: "400",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["About", "Services", "Artists", "Contact"];

  return (
    <>
      {/* Navigation */}
      <div
        className={`${
          scrolled ? "fixed bg-transparent py-5" : "bg-[#0e0e0e] py-5"
        } w-full transition-all duration-300 z-50`}
      >
        <div
          className={`w-[90%] mx-auto h-full transition-all duration-300 flex ${
            scrolled
              ? "flex-row items-center justify-between"
              : "flex-col justify-center"
          }`}
        >
          <h1
            className={`${antonFont.className} transition-all duration-300 ${
              scrolled
                ? "text-4xl text-[#0e0e0e]"
                : "text-[180px] text-[#f2ece5] -mx-5 sm:-mx-1 text-center -my-5"
            }`}
          >
            CMMG
          </h1>
          <div
            className={`transition-all duration-300 ${
              scrolled ? "" : "flex justify-end w-full mt-4"
            }`}
          >
            <button
              onClick={() => setMenuOpen(true)}
              className={`${
                hanken.className
              } text-xl transition-all duration-300 ${
                scrolled
                  ? "text-[#0e0e0e] cursor-pointer"
                  : "text-[#f2ece5] cursor-pointer"
              }`}
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed nav */}
      {scrolled && <div className="h-[170px]"></div>}

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
