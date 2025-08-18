import React from "react";
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

type Props = {};

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Companies = (props: Props) => {
  return (
    <div className="w-full py-10">
      <div className="w-[95%] mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-600 h-7 w-7 lg:h-10 lg:w-10" />
            <p className="text-xs uppercase lg:text-lg">[ Clients ]</p>
          </div>
          <div className="flex flex-col md:items-center">
            <div className="pb-10 flex flex-col md:items-center">
              <h1
                className={`${hanken.className} text-6xl lg:text-7xl font-bold md:text-center tracking-tighter`}
              >
                Our Trusted Clients<span className="text-orange-600">.</span>
              </h1>
              <p
                className={`${inter.className} mt-4 text-base md:text-lg md:text-center  lg:text-xl text-gray-700 max-w-xl lg:max-w-2xl`}
              >
                We’ve had the privilege of collaborating with industry-leading
                brands. Our flexible media solutions are crafted to amplify
                stories, elevate experiences, and drive results — from concept
                to final cut.
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
              {logos.map((logo, i) => (
                <div key={i} className={`${logo.height}`}>
                  <Image src={logo.src} alt="image" className="w-fit h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
