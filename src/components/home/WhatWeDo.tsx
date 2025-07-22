import { Hanken_Grotesk, Inter_Tight } from "next/font/google";
import Link from "next/link";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

import film from "../../../public/prodco.jpg";
import library from "../../../public/pexels-tima-miroshnichenko-6827245.jpg";
import sounddesign from "../../../public/sound-design.webp";
import Image from "next/image";
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type Props = {};

const WhatWeDo = (props: Props) => {
  return (
    <div className="py-5 w-full">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-600 h-7 w-7 lg:h-10 lg:w-10" />
            <p className="text-xs uppercase lg:text-lg">[ Services ]</p>
          </div>
          <div>
            <h1
              className={`${hanken.className} text-6xl lg:text-7xl font-bold tracking-tighter`}
            >
              What We do<span className="text-orange-600">.</span>
            </h1>
            <p
              className={`${inter.className} mt-4 text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl`}
            >
              With years of experience across the music and media landscape, our
              team specializes in original music production and licensable
              tracks, content development for visual media, and
              professional-grade studio hire for creators and collaborators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

const service = [
  {
    title: "Original Composition",
    icon: "🎼",
    description:
      "Custom music tailored to your narrative — from cinematic scores to branded soundtracks. We create from scratch to match your vision.",
    image: "/images/composition.jpg",
  },
  {
    title: "Library Music Licensing",
    icon: "🎵",
    description:
      "Instant access to our curated music catalogue — ready-made tracks for film, TV, ads, games, and beyond. Fast clearance, high impact.",
    image: library,
  },

  {
    title: "Sound Design",
    icon: "🔊",
    description:
      "Crafted sonic textures and effects to bring your visuals or experiences to life. From subtle atmospheres to bold audio signatures.",
    image: sounddesign,
  },
  {
    title: "Creative Consulting",
    icon: "🎧",
    description:
      "We offer music supervision, track curation, licensing strategy, and creative direction to elevate your project.",
    image: "/images/consulting.jpg",
  },
  {
    title: "Music Studio Hire",
    icon: "🎚️",
    description:
      "Rent our fully equipped music studio for writing, recording, mixing, and mastering. Ideal for artists, producers, and composers who need a professional space with top-tier gear.",
    image: film,
  },
  {
    title: "Production Studio Hire",
    icon: "🎥",
    description:
      "Hire our versatile production space for shoots, live sessions, podcasting, or creative direction. Designed for creators who need a dynamic, controlled environment.",
    image: "/images/production-studio.jpg",
  },
];
