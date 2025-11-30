import React from "react";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { njalo } from "@/data";
import HeroBadge from "@/components/HeroBadge";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const NewReleases = () => {
  return (
    <section className="relative min-h-screen z-10">
      <div className="w-[90%] lg:w-[80%] mx-auto h-[90vh] space-y-6">
        {/* Header Badge */}
        <HeroBadge content="New Releases" color="orange" />

        {/* Main Content */}
        <div className="flex-1 flex items-start ">
          <div className="w-full grid lg:grid-cols-2 gap-7 lg:gap-12 items-center">
            {/* Content Section - Left on desktop */}
            <div className="space-y-5 lg:space-y-8 order-2 lg:order-2">
              <div className="space-y-2 lg:space-y-6">
                <div className="space-y-2">
                  <p
                    className={`${hanken.className} text-sm lg:text-base text-neutral-300/90 font-medium 
                               tracking-wide uppercase`}
                  >
                    New release
                  </p>
                  <h1
                    className={` capitalize text-3xl sm:text-4xl lg:text-7xl xl:text-8xl 
                               font-black leading-[0.85] text-white tracking-tighter`}
                  >
                    brand new music
                    <span className="text-orange-500">.</span>
                  </h1>
                </div>

                <p
                  className={`${sted.className} text-sm lg:text-lg text-neutral-100 font-light  
                             max-w-md`}
                >
                  Explore our record labels latest music offerings from our in
                  house artists.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 ">
                <Link
                  href="/commercial"
                  className={`${sted.className} group relative inline-flex items-center justify-center gap-2 
                             bg-gradient-to-r from-orange-700 to-orange-400 hover:from-orange-400 hover:to-orange-700 
                             text-white font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-md transition-all duration-300 
                             shadow-xl hover:shadow-white/10 transform hover:-translate-y-0.5 
                              text-sm lg:text-base`}
                >
                  <span>Stream Now</span>
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <button
                  className={`${sted.className} hidden group md:inline-flex items-center justify-center gap-2 
                             bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-3 lg:px-8 lg:py-4 
                             rounded-md border-2 border-white/20 hover:border-white/40 
                             transition-all duration-300 text-sm lg:text-base`}
                >
                  <span>Learn More</span>
                </button>
              </div>
            </div>

            {/* Image Section - Right on desktop */}
            <div className="relative group order-1 lg:order-1 flex justify-center lg:justify-center ">
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl w-[55%] md:w-[50%]  lg:w-[85%] 
                             h-[30vh] md:h-[30vh] lg:h-[60vh]"
              >
                <Image
                  src={njalo}
                  alt="NJALO Production Music - Professional audio content"
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  fill
                  priority
                />
                {/* Image overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating badge on image */}
                <div className="absolute top-4 left-4 backdrop-blur-md bg-black/20 px-3 py-1 rounded-full border border-white/20">
                  <span
                    className={`${hanken.className} text-xs font-bold text-white tracking-wide`}
                  >
                    NEW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Badge */}
        <HeroBadge position="bottom" content="Out now" color="orange" />
      </div>
    </section>
  );
};

export default NewReleases;
