import { Hanken_Grotesk, Inter_Tight } from "next/font/google";
import Link from "next/link";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

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
            <p className="text-xs uppercase lg:text-lg">[ What we do ]</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.map((service, index) => (
              <div
                key={index}
                className="relative group overflow-hidden border border-gray-300 p-6 h-[40vh] transition flex flex-col justify-between text-black hover:text-white"
              >
                {/* Hover background image */}
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>

                {/* Blur overlay */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-0"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3
                      className={`${inter.className} text-xl font-light mb-2`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`${inter.className} text-sm font-medium leading-relaxed`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <Link href={"/"} className="underline">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
    image: "/images/library-music.jpg",
  },
  {
    title: "Sound Design",
    icon: "🔊",
    description:
      "Crafted sonic textures and effects to bring your visuals or experiences to life. From subtle atmospheres to bold audio signatures.",
    image: "/images/sound-design.jpg",
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
    image: "/images/music-studio.jpg",
  },
  {
    title: "Production Studio Hire",
    icon: "🎥",
    description:
      "Hire our versatile production space for shoots, live sessions, podcasting, or creative direction. Designed for creators who need a dynamic, controlled environment.",
    image: "/images/production-studio.jpg",
  },
];
