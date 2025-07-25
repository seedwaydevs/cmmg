import { Hanken_Grotesk, Inter_Tight } from "next/font/google";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

type Props = {};
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const Hero = (props: Props) => {
  return (
    <div className="bg-[#0e0e0e] h-[70vh] md:h-[75vh]">
      <div className="w-[95%] mx-auto">
        <div className="mt-28 flex flex-col justify-center items-center text-white  md:py-5">
          <div className="space-y-3 max-w-md md:max-w-lg lg:max-w-2xl">
            <div className="flex items-center justify-center">
              <p className="text-xs uppercase lg:text-lg">[ services ]</p>
            </div>
            <p
              className={`${hanken.className} text-orange-600 font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl text-center uppercase`}
            >
              built for production-grade impact
              <span className="text-white">.</span>
            </p>
          </div>
          <p
            className={`${inter.className} text-sm text-center py-5 max-w-md md:max-w-lg lg:max-w-2xl md:text-lg`}
          >
            We offer end-to-end audio and visual production services — from
            original compositions and final mix to studio hire, sound design,
            and licensable music. Whether you're building a campaign, scoring a
            film, or launching a podcast, we bring the technical precision and
            creative energy your project needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
