import React from "react";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Landing = () => {
  return (
    <div className="relative z-10">
      <div className="w-[90%] md:w-[90%] mx-auto h-[90vh]">
        <div className="flex flex-col justify-between h-full">
          {/* Top Badge */}
          <div className="flex justify-end mt-24 sm:mt-34 xl:mt-32">
            <div className="backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <p
                className={`${hanken.className} text-[14px] uppercase font-bold tracking-widest text-white/90`}
              >
                [ Content and Music ]
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className={`${sted.className} space-y-8`}>
            <p
              className={`${hanken.className} text-lg md:text-xl font-light max-w-xs md:max-w-lg text-white/80 leading-relaxed`}
            >
              Crafting original music libraries and immersive content for film,
              television, and digital storytelling.
            </p>

            {/* Main Logo/Title */}
            <div className="relative">
              <h1
                className={`${hanken.className} text-8xl md:text-9xl 2xl:text-[10rem] font-black text-white tracking-tight leading-none`}
              >
                CMMG
                <span className="text-orange-500">.</span>
              </h1>

              {/* Subtle glow effect behind title */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent blur-xl -z-10 scale-110" />
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="flex items-center gap-3 pt-2">
            <div className="backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-orange-400/20">
              <p
                className={`${hanken.className} text-[14px] uppercase font-bold tracking-widest text-orange-100`}
              >
                [ Media Group ]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
