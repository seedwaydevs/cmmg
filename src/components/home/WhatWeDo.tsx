import { Schibsted_Grotesk } from "next/font/google";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

import Link from "next/link";
import { Music, Video, Mic, ArrowRight } from "lucide-react";
import { AccordionDemo } from "../Accordian";
import LinkButton from "../LinkButton";

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

type Props = {};

const WhatWeDo = (props: Props) => {
  return (
    <div className="py-5 w-full text-neutral-200 bg-blue-800">
      <div className="w-[90%] lg:w-[80%] mx-auto pb-5">
        <div className="flex flex-col ">
          {/* Header - matching Landing style */}
          <div className="flex items-center py-5 ">
            <TiArrowSortedUp className="text-orange-500 h-7 w-7 lg:h-10 lg:w-10" />
            <div className="backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10 ml-2">
              <p
                className={`${sted.className} text-xs uppercase lg:text-sm font-bold tracking-widest `}
              >
                [ Services ]
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 space-y-5 lg:py-5 ">
            {/* Main heading */}
            <div className="flex flex-col justify-center py-10 space-y-8">
              <h1
                className={`font-black text-6xl   tracking-tight leading-none`}
              >
                What We Do
                <span className="text-orange-500">.</span>
              </h1>
              <p className={`text-lg  font-light leading-relaxed max-w-xl `}>
                With years of experience across the music and media landscape,
                our team specializes in original music production and licensable
                tracks, content development for visual media, and
                professional-grade studio hire for creators and collaborators.
              </p>

              {/* Enhanced CTA button */}
              <div className="flex gap-4 items-center group">
                <LinkButton
                  url={"/services"}
                  text="Our Services"
                  color="blue"
                  svg="M9 5l7 7-7 7"
                />
              </div>
            </div>

            <div className="flex flex-col items-center z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl ">
              <AccordionDemo services={services} />
              {/* Bottom stats/highlights section */}
              <div className="grid grid-cols-3 md:grid-cols-3 gap-6 py-5  text-white rounded-xl">
                <div className="text-center space-y-2">
                  <div
                    className={`${sted.className} text-3xl lg:text-4xl font-black relative`}
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-300 to-blue-500 bg-clip-text text-transparent blur-sm">
                      4500+
                    </span>
                    <span className="relative bg-gradient-to-br from-white/90 via-blue-100/80 to-white/70 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      4500+
                    </span>
                  </div>
                  <p className=" text-sm capitalize font-semibold tracking-wide">
                    Tracks Produced
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <div
                    className={`${sted.className} text-3xl lg:text-4xl font-black relative`}
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-300 to-blue-500 bg-clip-text text-transparent blur-sm">
                      50+
                    </span>
                    <span className="relative bg-gradient-to-br from-white/90 via-blue-100/80 to-white/70 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      50+
                    </span>
                  </div>
                  <p className=" text-sm capitalize font-semibold tracking-wide">
                    Projects Completed
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <div
                    className={`${sted.className} text-3xl lg:text-4xl font-black relative`}
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-300 to-blue-500 bg-clip-text text-transparent blur-sm">
                      360&deg;
                    </span>
                    <span className="relative bg-gradient-to-br from-white/90 via-blue-100/80 to-white/70 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      360&deg;
                    </span>
                  </div>
                  <p className=" text-sm capitalize font-semibold tracking-wide">
                    Studio Solution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

const services = [
  {
    id: 1,
    title: "Music Production",
    icon: "Music",
    badge: "Production",
    content:
      "From recording to final mix, we produce music that captures emotion and purpose. Whether it's for artists, commercials, films, or digital campaigns, our team delivers professional sound with creative precision.",
    bullets: [
      "Songwriting and composition",
      "Mixing and mastering",
      "Sound design and scoring",
      "Production Music Library",
    ],
  },
  {
    id: 2,
    title: "Content Development",
    icon: "Video",
    badge: "Development",
    content:
      "We create compelling visual and audio content that connects with audiences across industries. From corporate communication to brand storytelling, our team manages every stage of production—from concept to final edit.",
    bullets: [
      "Training & induction videos",
      "Corporate and promotional videos",
      "Radio & TV commercials",
      "Voice-over production",
    ],
  },
  {
    id: 3,
    title: "Studio Hire",
    icon: "Mic",
    badge: "Studio",
    content:
      "Our state-of-the-art studios are available for hire, offering an ideal space for music recording, voice-overs, podcast production, or video shoots. Each room is acoustically treated and supported by professional engineers on request.",
    bullets: [
      "Professional equipment",
      "Multi-purpose spaces",
      "On-site technical assistance",
    ],
  },
];
