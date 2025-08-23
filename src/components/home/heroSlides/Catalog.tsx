import React from "react";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";
import Link from "next/link";

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
      <div className="w-[90%] md:w-[90%] mx-auto h-[80vh]">
        <div className="flex flex-col justify-between h-full">
          {/* Top Badge */}
          <div className="flex justify-end mt-32">
            <div className="backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <p
                className={`${hanken.className} text-[14px] uppercase font-bold tracking-widest text-white/90`}
              >
                [ Production Music ]
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className={`${sted.className} space-y-6`}>
            <p
              className={`${hanken.className} text-lg font-light max-w-xs md:max-w-sm text-white/80 leading-relaxed`}
            >
              Curated, high-quality tracks for film, TV, and digital projects.
            </p>

            <h1
              className={`${sted.className} text-7xl md:text-8xl 2xl:text-9xl font-black md:max-w-[100%] lg:max-w-[75%] xl:max-w-[65%] leading-[0.85] text-white tracking-tight`}
            >
              Production Music Library
              <span className="text-orange-500">.</span>
            </h1>

            <div className="pt-2">
              <Link
                className={`${sted.className} inline-flex items-center gap-2 py-3 px-6 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl`}
                href={"/production"}
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
          <div className="flex justify-start">
            <div className="backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-green-400/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p
                  className={`${hanken.className} text-[14px] uppercase font-bold tracking-widest text-white/90`}
                >
                  [ Ready to License ]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
