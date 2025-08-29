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
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col space-y-4">
          {/* Top Badge - matching Landing style */}
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-500 h-7 w-7 lg:h-10 lg:w-10" />
            <div className="backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10 ml-2">
              <p
                className={`${sted.className} text-xs uppercase lg:text-sm font-bold tracking-widest text-black/90`}
              >
                [ Explore ]
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:items-center lg:justify-between lg:flex-row space-y-7 pb-5 lg:space-x-10">
            <div className="space-y-7">
              {/* Main heading with Landing component styling */}
              <h1
                className={`${sted.className} font-black text-5xl lg:text-7xl lg:max-w-lg flex-1 text-neutral-800 tracking-tight leading-none`}
              >
                CMMG Production Music Library
                <span className="text-orange-500">.</span>
              </h1>

              {/* Description with improved styling */}
              <p
                className={`${sted.className} lg:text-xl lg:max-w-2xl text-neutral-800 font-light leading-relaxed`}
              >
                Explore a curated library of high-impact production music —
                designed to bring your film, TV, or digital project to life with
                unforgettable sound.
              </p>

              {/* Enhanced CTA button */}
              <div className="flex gap-4 items-center group">
                <Link
                  href="https://www.library.cmmg.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${sted.className} backdrop-blur-sm bg-orange-500/10 hover:bg-orange-500/20 border border-orange-400/20 px-6 py-3 rounded-lg text-neutral-600 text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105`}
                >
                  Browse our library
                </Link>
                <MoveRight className="text-orange-500 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Image with subtle glow effect */}
            <div className="h-[40vh] lg:h-[70vh] bg-black relative">
              <Image
                src={collage}
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Subtle glow around image */}
              <div className="absolute inset-0 bg-gradient-to-l from-orange-400 via-transparent to-transparent blur-xl -z-10 scale-110 rounded-lg" />
            </div>
          </div>

          <hr className="border-white/10" />

          {/* Bottom section with enhanced styling */}
          <div className="p-10 lg:p-16 lg:py-10 bg-orange-600 space-y-6 rounded-lg relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-700/20" />

            <p
              className={`${sted.className} text-3xl md:text-5xl lg:text-6xl tracking-tight font-black leading-tight relative z-10 max-w-7xl`}
            >
              <span className="text-blue-900">
                We don't follow trends — we set the tone.{" "}
              </span>{" "}
              <span className="text-white">
                We're a content and music powerhouse. Built for impact.
                Engineered to resonate.
              </span>
            </p>

            {/* Enhanced About button */}
            <div className="relative z-10">
              <Link
                href={"/about"}
                className={`${hanken.className} backdrop-blur-sm bg-black/90 hover:bg-black/70 border border-black px-6 py-3 rounded-lg text-neutral-100 text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105`}
              >
                About
              </Link>
            </div>
          </div>

          <hr className="border-white/10" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
