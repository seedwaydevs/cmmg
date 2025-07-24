// ServicesGrid.tsx
"use client";

import { Hanken_Grotesk, Inter_Tight } from "next/font/google";
import Link from "next/link";
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const services = [
  {
    title: "Music Library Licensing",
    description:
      "Instant access to a curated collection of licensable tracks for film, TV, digital, and more. Powered by our international music catalog.",
  },
  {
    title: "Sound Production",
    description:
      "Full-spectrum audio services including original music composition, final mix, radio jingle creation, and podcast production — all handled in-house by experienced engineers.",
  },
  {
    title: "Studio Hire",
    description:
      "Rent our professional-grade, soundproof studios with top-tier gear, solar backup, and 24/7 access — ideal for music, voiceover, and content sessions.",
  },
  {
    title: "Video Production",
    description:
      "From scripting to delivery, we create cinematic, brand-aligned video content for social, commercial, and film projects.",
  },
  {
    title: "Event Sound & Entertainment",
    description:
      "End-to-end live event support — from professional sound systems and engineers to DJs and camera crews for coverage.",
  },
  {
    title: "Creative Consulting",
    description:
      "Strategic support for music supervision, audio branding, licensing clearance, and content direction across media formats.",
  },
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-3 lg:gap-0">
      {services.map((s, i) => {
        const isLastInRow = (i + 1) % 3 === 0; // for lg:
        return (
          <div
            key={s.title}
            className={`flex items-start space-x-5 mb-3 p-4 border-b md:border-b lg:border-b-0 lg:border-r border-gray-300 ${
              isLastInRow ? "lg:border-r-0" : ""
            } ${i === services.length - 1 ? "border-b-0" : ""}`}
          >
            <p className="text-orange-600 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </p>
            <div className="space-y-3">
              <h3
                className={`${hanken.className} text-2xl font-bold leading-6`}
              >
                {s.title}
              </h3>
              <p className={`${inter.className} text-base text-gray-700`}>
                {s.description}
              </p>
              <Link
                href={"#"}
                className={`${inter.className} text-orange-600 font-semibold`}
              >
                Learn More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesGrid;
