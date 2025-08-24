"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import {
  barloworld,
  brownsense,
  capasso,
  ccli,
  orchard,
  samro,
  trace,
} from "@/data";
import { TiArrowSortedUp } from "react-icons/ti";
import { Hanken_Grotesk, Inter_Tight } from "next/font/google";
import Image from "next/image";

const logos = [
  { src: orchard, alt: "Orchard", height: "h-[40px]" },
  { src: brownsense, alt: "Brownsense", height: "h-[45px]" },
  { src: trace, alt: "Trace", height: "h-[50px]" },
  { src: capasso, alt: "Capasso", height: "h-[55px] bg-blue-900 px-2 w-fit" },
  { src: samro, alt: "SAMRO", height: "h-[40px]" },
  { src: barloworld, alt: "Barloworld", height: "h-[65px]" },
  { src: ccli, alt: "CCLI", height: "h-[70px]" },
];

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Companies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("companies");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="companies"
      className="w-full py-20 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      <div className="w-[95%] mx-auto">
        <div
          className={`flex flex-col transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {/* Section Header */}
          <div className="flex items-center mb-12">
            <ArrowUp className="text-orange-600 h-7 w-7 lg:h-10 lg:w-10 rotate-90 mr-4" />
            <span className="text-xs uppercase lg:text-lg tracking-widest text-gray-600 font-semibold">
              Clients
            </span>
          </div>

          <div className="flex flex-col md:items-center">
            {/* Title and Description */}
            <div className="pb-16 flex flex-col md:items-center space-y-6">
              <h2 className="text-5xl lg:text-7xl font-black md:text-center tracking-tight leading-none">
                Our Trusted
                <span className="text-orange-600 block md:inline md:ml-4">
                  Clients
                </span>
              </h2>

              <p className="text-lg md:text-xl md:text-center lg:text-2xl text-gray-600 max-w-xl lg:max-w-4xl leading-relaxed font-light">
                We've had the privilege of collaborating with industry-leading
                brands. Our flexible media solutions are crafted to amplify
                stories, elevate experiences, and drive results — from concept
                to final cut.
              </p>
            </div>

            {/* Enhanced Logo Grid */}
            <div className="w-full">
              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-12 items-center justify-items-center">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className={`group relative ${logo.height} transition-all duration-300 hover:scale-110 cursor-pointer`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Mock logo placeholder */}
                    <div className="w-full h-full  flex items-center justify-center ">
                      <Image
                        src={logo.src}
                        alt="image"
                        className="w-fit h-full"
                      />
                    </div>

                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 bg-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm scale-110"></div>
                  </div>
                ))}
              </div>

              {/* Mobile Grid */}
              <div className="md:hidden grid grid-cols-3 gap-6 items-center justify-items-center">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className={`group relative ${logo.height} transition-all duration-300 hover:scale-105`}
                  >
                    <div className="w-full h-full flex items-center justify-center ">
                      <Image
                        src={logo.src}
                        alt="image"
                        className="w-fit h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats or Additional Info */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              {[
                {
                  number: "50+",
                  label: "Global Clients",
                  description: "Trusted partnerships worldwide",
                },
                {
                  number: "200+",
                  label: "Projects Delivered",
                  description: "Successful campaigns and productions",
                },
                {
                  number: "98%",
                  label: "Client Satisfaction",
                  description: "Consistently exceeding expectations",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center md:text-left space-y-2">
                  <div className="text-3xl lg:text-4xl font-black text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-orange-600">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 font-light">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
