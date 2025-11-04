import React from "react";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";
import Link from "next/link";
import HeroBadge from "@/components/HeroBadge";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Catalog = () => {
  return (
    <div className="relative z-10">
      <div className="w-[90%] md:w-[90%] mx-auto h-[90vh]">
        <div className="flex flex-col justify-between h-full">
          {/* Top Badge */}
          <HeroBadge content="Production Music" color="green" />

          {/* Main Content */}
          <div className={`space-y-6`}>
            <p
              className={`${hanken.className} text-lg lg:text-xl font-light max-w-xs md:max-w-sm text-white/80 leading-relaxed`}
            >
              Curated, high-quality tracks for film, TV, and digital projects.
            </p>

            <h1
              className={`${sted.className} text-6xl md:text-8xl 2xl:text-9xl font-black md:max-w-[100%] lg:max-w-[75%] xl:max-w-[65%] leading-[0.85] text-white tracking-tight`}
            >
              Production Music Library
              <span className="text-orange-500">.</span>
            </h1>

            <div className="pt-2">
              <Link
                className={`group relative inline-flex items-center justify-center gap-2 
                             bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-600 
                             text-white font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-md transition-all duration-300 
                             shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-0.5 
                             border border-orange-400/20 text-sm lg:text-base`}
                href={"https://www.library.cmmg.co.za/"}
              >
                Browse
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom Badge */}
          <HeroBadge
            position="bottom"
            content="ready to license"
            color="green"
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
