import { Schibsted_Grotesk } from "next/font/google";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

import Link from "next/link";
import { Music, Video, Mic, ArrowRight } from "lucide-react";

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

type Props = {};

const WhatWeDo = (props: Props) => {
  return (
    <div className="py-10 w-full text-neutral-200 bg-blue-800">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col space-y-4">
          {/* Header - matching Landing style */}
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-500 h-7 w-7 lg:h-10 lg:w-10" />
            <div className="backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10 ml-2">
              <p
                className={`${sted.className} text-xs uppercase lg:text-sm font-bold tracking-widest `}
              >
                [ Services ]
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Main heading */}
            <div className="space-y-6">
              <h1
                className={`${sted.className} font-black text-6xl lg:text-7xl  tracking-tight leading-none`}
              >
                What We Do
                <span className="text-orange-500">.</span>
              </h1>
              <p
                className={`${sted.className} text-lg md:text-xl lg:text-2xl  font-light leading-relaxed max-w-4xl`}
              >
                With years of experience across the music and media landscape,
                our team specializes in original music production and licensable
                tracks, content development for visual media, and
                professional-grade studio hire for creators and collaborators.
              </p>

              {/* Enhanced CTA button */}
              <div className="flex gap-4 items-center group">
                <Link
                  href={"/services"}
                  className={`${sted.className} backdrop-blur-sm bg-orange-500/10 hover:bg-orange-500/20 border border-orange-400/20 px-6 py-3 rounded-lg  text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105`}
                >
                  Our Services
                </Link>
                <ArrowRight className="text-orange-500 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Services grid */}
            <div className="grid lg:grid-cols-3 gap-8 pt-10">
              {/* Music Production */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 hover:scale-105 transition-all duration-300 hover:border-orange-400/30 group">
                <div className="space-y-5">
                  {/* Icon and badge */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <Music className="text-white w-8 h-8" />
                    </div>
                    <div className="backdrop-blur-sm bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-400/20">
                      <span
                        className={`${sted.className}  font-semibold uppercase tracking-wide text-xs`}
                      >
                        Production
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`${sted.className} text-3xl lg:text-4xl font-bold  tracking-tight`}
                  >
                    Music Production
                  </h3>

                  <p
                    className={`${sted.className} text-lg  font-light leading-relaxed`}
                  >
                    From custom compositions to licensable tracks, we craft
                    soundscapes that bring stories to life. Our catalog is
                    tailored for film, TV, ads, games, and more.
                  </p>

                  {/* Feature list */}
                  <div className="space-y-2 text-md">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">•</span>
                      Original compositions
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">•</span>
                      Licensable track library
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">•</span>
                      Multi-genre expertise
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Development */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 hover:scale-105 transition-all duration-300 hover:border-orange-400/30 group">
                <div className="space-y-5">
                  {/* Icon and badge */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <Video className="text-white w-8 h-8" />
                    </div>
                    <div className="backdrop-blur-sm bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-400/20">
                      <span
                        className={`${sted.className}  font-semibold uppercase tracking-wide text-xs`}
                      >
                        Development
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`${sted.className} text-3xl lg:text-4xl font-bold  tracking-tight`}
                  >
                    Content Development
                  </h3>

                  <p
                    className={`${sted.className} text-lg  font-light leading-relaxed`}
                  >
                    We help develop powerful visual narratives through music
                    supervision, licensing strategy, and creative
                    consulting—bridging audio with vision.
                  </p>

                  {/* Feature list */}
                  <div className="space-y-2 text-md">
                    <div className="flex items-center ">
                      <span className="text-orange-500 mr-2">•</span>
                      Music supervision
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">•</span>
                      Licensing strategy
                    </div>
                    <div className="flex items-center  ">
                      <span className="text-orange-500 mr-2">•</span>
                      Creative consulting
                    </div>
                  </div>
                </div>
              </div>

              {/* Studio Hire */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 hover:scale-105 transition-all duration-300 hover:border-orange-400/30 group">
                <div className="space-y-5">
                  {/* Icon and badge */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <Mic className="text-white w-8 h-8" />
                    </div>
                    <div className="backdrop-blur-sm bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-400/20">
                      <span
                        className={`${sted.className}  font-semibold uppercase tracking-wide text-xs`}
                      >
                        Studio
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`${sted.className} text-3xl lg:text-4xl font-bold  tracking-tight`}
                  >
                    Studio Hire
                  </h3>

                  <p
                    className={`${sted.className} text-lg  font-light leading-relaxed`}
                  >
                    Rent our professional-grade studios for music production,
                    content creation, live sessions, podcasting, or video
                    shoots—fully equipped and ready for your next project.
                  </p>

                  {/* Feature list */}
                  <div className="space-y-2 text-md">
                    <div className="flex items-center  ">
                      <span className="text-orange-500 mr-2">•</span>
                      Professional equipment
                    </div>
                    <div className="flex items-center  ">
                      <span className="text-orange-500 mr-2">•</span>
                      Multi-purpose spaces
                    </div>
                    <div className="flex items-center ">
                      <span className="text-orange-500 mr-2">•</span>
                      Technical support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom stats/highlights section */}
            <div className="grid md:grid-cols-3 gap-6 py-10  text-white rounded-xl">
              <div className="text-center space-y-2">
                <div
                  className={`${sted.className} text-4xl lg:text-5xl font-black text-orange-500`}
                >
                  500+
                </div>
                <p className=" text-sm uppercase tracking-wide">
                  Tracks Produced
                </p>
              </div>

              <div className="text-center space-y-2">
                <div
                  className={`${sted.className} text-4xl lg:text-5xl font-black text-orange-500`}
                >
                  50+
                </div>
                <p className=" text-sm uppercase tracking-wide">
                  Projects Completed
                </p>
              </div>

              <div className="text-center space-y-2">
                <div
                  className={`${sted.className} text-4xl lg:text-5xl font-black text-orange-500`}
                >
                  360&deg;
                </div>
                <p className=" text-sm uppercase tracking-wide">
                  Studio Solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
