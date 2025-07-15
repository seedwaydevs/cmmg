"use client";

import React from "react";
import HeroTextAnimation from "./HeroTextAnimation";
import { Hanken_Grotesk } from "next/font/google";

type Props = {};

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Hero = (props: Props) => {
  return (
    <div className="w-full py-5">
      <div className="mx-auto">
        <div className="">
          <div className="w-[90%] mx-auto pt-5 text-[#0e0e0e]">
            <p className={`${hanken.className} font-medium text-4xl`}>
              Bringing ideas to life with creativity and a fresh perspective...
            </p>
          </div>

          {/* Image Container - must be relative and have defined height */}
          <div className="flex items-center h-[400px] relative  w-full overflow-hidden   my-5">
            <HeroTextAnimation />
          </div>
          <div className="w-[90%] mx-auto mb-4 text-[#0e0e0e]">
            <p className={`${hanken.className} font-medium text-4xl`}>
              ...making sure every project looks and sounds just right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
