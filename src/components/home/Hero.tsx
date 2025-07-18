"use client";

import React from "react";
import HeroTextAnimation from "./HeroTextAnimation";
import { Hanken_Grotesk } from "next/font/google";
import Link from "next/link";

type Props = {};

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Hero = (props: Props) => {
  return (
    <div className="w-full border">
      <div className="mx-auto md:w-[90%]">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-[90%] lg:w-full mx-auto py-16 text-[#0e0e0e] md:flex-1 space-y-8">
            <p
              className={`${hanken.className} font-medium text-4xl tracking-tighter max-w-lg`}
            >
              Bringing{" "}
              <span className=" p-2 font-serif italic text-4xl">ideas</span> to
              life with{" "}
              <span className="py-2 font-serif italic text-4xl">
                creativity
              </span>{" "}
              and a fresh{" "}
              <span className="py-2 font-serif italic text-4xl">
                perspective
              </span>{" "}
            </p>
            <div className="flex">
              <Link
                href={"/"}
                className="bg-black text-white py-2 px-3 rounded-2xl cursor-pointer"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Container - must be relative and have defined height */}
          <div className="flex items-center  h-[400px] lg:h-[500px] md:flex-1  relative w-full overflow-hidden">
            <HeroTextAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
