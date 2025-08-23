import React from "react";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Studio = () => {
  return (
    <section className="relative min-h-screen z-10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col">
        {/* Header Badge */}
        <div className="flex justify-start mt-28">
          <span
            className={`${hanken.className} text-sm font-bold tracking-widest uppercase text-neutral-200/80 
                       backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10`}
          >
            Studio Sessions
          </span>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center py-8 lg:py-16">
          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section - Left on desktop */}
            <div className="relative group order-1 lg:order-1 flex justify-center">
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl w-[85%] sm:w-[70%] lg:w-full max-w-sm lg:max-w-md xl:max-w-lg 
                             h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[55vh] xl:h-[60vh]"
              >
                {/* Placeholder for studio image - replace with your studio image */}
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    </div>
                    <p
                      className={`${hanken.className} text-neutral-400 text-sm`}
                    >
                      Studio Preview
                    </p>
                  </div>
                </div>

                {/* Image overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating status badge */}
                <div className="absolute top-4 right-4 backdrop-blur-md bg-green-500/20 px-3 py-1 rounded-full border border-green-400/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span
                      className={`${hanken.className} text-xs font-bold text-green-200 tracking-wide`}
                    >
                      AVAILABLE
                    </span>
                  </div>
                </div>

                {/* Equipment highlights */}
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-black/30 p-3 rounded-lg">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p
                        className={`${hanken.className} text-xs text-neutral-300 font-medium`}
                      >
                        48ch
                      </p>
                      <p
                        className={`${hanken.className} text-xs text-neutral-500`}
                      >
                        Mixing
                      </p>
                    </div>
                    <div>
                      <p
                        className={`${hanken.className} text-xs text-neutral-300 font-medium`}
                      >
                        Pro Tools
                      </p>
                      <p
                        className={`${hanken.className} text-xs text-neutral-500`}
                      >
                        DAW
                      </p>
                    </div>
                    <div>
                      <p
                        className={`${hanken.className} text-xs text-neutral-300 font-medium`}
                      >
                        Vocal Booth
                      </p>
                      <p
                        className={`${hanken.className} text-xs text-neutral-500`}
                      >
                        Isolated
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Right on desktop */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-2">
              <div className="space-y-4 lg:space-y-6">
                <div className="space-y-2">
                  <p
                    className={`${hanken.className} text-sm lg:text-base text-blue-300/90 font-medium 
                               tracking-wide uppercase`}
                  >
                    Professional Recording
                  </p>
                  <h1
                    className={`${sted.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                               font-black leading-[0.85] text-white tracking-tighter`}
                  >
                    BOOK
                    <br />
                    STUDIO
                    <span className="text-blue-500">.</span>
                  </h1>
                </div>

                <p
                  className={`${hanken.className} text-base lg:text-lg text-neutral-400 font-light leading-relaxed 
                             max-w-md lg:max-w-lg`}
                >
                  State-of-the-art recording facilities with professional-grade
                  equipment and acoustic treatment for your next project.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span
                    className={`${hanken.className} text-sm text-neutral-300 font-medium`}
                  >
                    Hourly Rates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span
                    className={`${hanken.className} text-sm text-neutral-300 font-medium`}
                  >
                    Engineer Included
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span
                    className={`${hanken.className} text-sm text-neutral-300 font-medium`}
                  >
                    Full Equipment
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span
                    className={`${hanken.className} text-sm text-neutral-300 font-medium`}
                  >
                    Mixing & Mastering
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2">
                <Link
                  href="/booking"
                  className={`${sted.className} group relative inline-flex items-center justify-center gap-2 
                             bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 
                             text-white font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-full transition-all duration-300 
                             shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 
                             border border-blue-400/20 text-sm lg:text-base`}
                >
                  <span>Book Session</span>
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </Link>

                <button
                  className={`${sted.className} group inline-flex items-center justify-center gap-2 
                             bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-3 lg:px-8 lg:py-4 
                             rounded-full border-2 border-white/20 hover:border-white/40 
                             transition-all duration-300 text-sm lg:text-base`}
                >
                  <span>View Rates</span>
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Badge */}
        <div className="flex justify-between items-end pb-8 md:pb-12 lg:pb-16">
          <span
            className={`${hanken.className} text-xs lg:text-sm font-bold tracking-widest uppercase 
                       text-neutral-400/80`}
          >
            Professional Grade
          </span>

          <div className="flex items-center gap-2 text-neutral-500">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span
              className={`${hanken.className} text-xs font-medium tracking-wide`}
            >
              24/7 Booking
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
