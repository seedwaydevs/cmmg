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
      <div className="mx-auto md:w-[90%]">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-[90%] lg:w-full mx-auto md:p-5 pt-5 text-[#0e0e0e] md:flex-1">
            <p className={`${hanken.className} font-medium text-4xl`}>
              Bringing ideas to life with creativity and a fresh perspective
              making sure every project looks and sounds just right.
            </p>
          </div>

          {/* Image Container - must be relative and have defined height */}
          <div className="flex items-center  h-[400px] lg:h-[500px] md:flex-1  relative w-full overflow-hidden my-5">
            <HeroTextAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
