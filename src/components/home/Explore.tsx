import {
  Hanken_Grotesk,
  Inter_Tight,
  Schibsted_Grotesk,
} from "next/font/google";
import Image from "next/image";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import collage from "../../../public/new_collage.png";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import LinkButton from "../LinkButton";

type Props = {};

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Explore = (props: Props) => {
  return (
    <div className="w-full py-5">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col space-y-4 py-7">
          {/* Top Badge - matching Landing style */}
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-500 h-7 w-7 lg:h-10 lg:w-10" />
            <div className="backdrop-blur-sm bg-orange-600/5 px-4 py-2 rounded-lg border border-orange-600/20 ml-2">
              <p
                className={`${sted.className} text-xs uppercase lg:text-sm font-bold tracking-widest text-neutral-400`}
              >
                [ Explore ]
              </p>
            </div>
          </div>

          <div className="flex flex-col py-5 lg:items-center lg:justify-between lg:flex-row space-y-7 lg:space-x-10">
            <div className="space-y-6">
              {/* Main heading with Landing component styling */}
              <h1
                className={`${sted.className} font-black text-5xl lg:text-7xl lg:max-w-lg flex-1 text-neutral-800 tracking-tight leading-none`}
              >
                CMMG Production Music Library
                <span className="text-orange-500">.</span>
              </h1>

              {/* Description with improved styling */}
              <p
                className={`${sted.className} lg:text-xl lg:max-w-xl text-neutral-800 font-light leading-relaxed`}
              >
                Explore a curated library of high-impact production music —
                designed to bring your film, TV, or digital project to life with
                unforgettable sound.
              </p>

              {/* Enhanced CTA button */}
              <div className="flex gap-4 items-center group">
                <LinkButton
                  color="orange"
                  text="Browse Library"
                  url="https://www.library.cmmg.co.za/library"
                  svg="M9 5l7 7-7 7"
                />
              </div>
            </div>

            {/* Image with subtle glow effect */}
            <div className="h-[40vh] lg:h-[70vh]  relative">
              <Image
                src={collage}
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Subtle glow around image */}
              <div className="absolute inset-0 bg-gradient-to-l from-orange-400 via-transparent to-transparent blur-xl -z-10 scale-110 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom section with enhanced styling */}
      <div className=" bg-orange-600/90 space-y-6 relative overflow-hidden">
        {/* <div className="w-[90%] lg:w-[80%] mx-auto py-10">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/60 via-transparent to-orange-700/70"></div>
          <div className="flex">
            <div className="relative">
              <h1></h1>
            </div>

            
            <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl">
              <p
                className={`text-3xl md:text-5xl lg:text-6xl tracking-tight text-shadow-lg/10 text-shadow-neutral-600 font-black leading-tight mb-6`}
              >
                <span className="text-white bg-clip-text">
                  We don't follow [ trends ] — we set the [tone] .{" "}
                </span>{" "}
                <span className="text-white">
                  We're a content and music powerhouse. Built for{" "}
                  <span className="bg-blue-700 px-3">impact</span>. Engineered
                  to resonate.
                </span>
              </p>

              
              <LinkButton
                svg="M9 5l7 7-7 7"
                url={"/about"}
                text="About"
                color="orange"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Explore;
