"use client";

import React from "react";
import HeroTextAnimation from "./components/HeroTextAnimation";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";
import Link from "next/link";

type Props = {};

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Hero = (props: Props) => {
  return (
    <>
      {/* <div className="h-[80px] border"></div> */}
      <div className="py-16 w-full bg-[#0e0e0e] text-white h-screen">
        <div className="w-[90%] md:w-[90%] mx-auto h-full">
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-end mt-16">
              <p className="text-[16px] uppercase font-bold tracking-tighter">
                [ Content and Music ]
              </p>
            </div>
            <div className={`${sted.className}`}>
              <p className="text-lg font-medium max-w-xs md:max-w-sm">
                Crafting original music libraries and immersive content for
                film, television, and digital storytelling.
              </p>
              <h1
                className={`${hanken.className} text-8xl font-extrabold py-7`}
              >
                CMMG<span className="text-orange-600 text-[50px]">.</span>
              </h1>
              <p className="text-[16px] uppercase font-bold tracking-tighter">
                [ Media Group ]
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
