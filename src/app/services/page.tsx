import { Anton, Hanken_Grotesk } from "next/font/google";
import React from "react";
import { GoDotFill } from "react-icons/go";

const antonFont = Anton({ subsets: ["latin"], weight: "400" });
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const services = [
  {
    title: "Video Production",
    description:
      "From commercials to documentaries, we produce high-quality video content with cinematic precision and storytelling excellence.",
  },
  {
    title: "Music Composition & Scoring",
    description:
      "Our award-winning composers create custom scores and soundtracks tailored to elevate your story and captivate your audience.",
  },
  {
    title: "Production Music Library",
    description:
      "Browse our extensive library of original tracks, ready for licensing across TV, film, online content, and commercial campaigns.",
  },
  {
    title: "Content Strategy & Development",
    description:
      "We help brands plan, produce, and distribute content that connects — from social media reels to full-scale campaigns.",
  },
  {
    title: "Audio Post-Production",
    description:
      "Complete sound solutions including mixing, mastering, VO, ADR, and more — for a polished and immersive audio experience.",
  },
  {
    title: "Creative Direction",
    description:
      "We collaborate with clients to define the creative vision and direction of every project, ensuring clarity, style, and impact.",
  },
];

const Services = () => {
  return (
    <div className="text-[#0e0e0e] w-full py-16 ">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center gap-2 pb-4">
          <GoDotFill className="h-6 w-6" />
          <p className={`${hanken.className} text-lg font-semibold`}>
            What We Offer
          </p>
        </div>
        <h1
          className={`${antonFont.className} text-4xl lg:text-5xl uppercase mb-12`}
        >
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-[#f2ece5] rounded-xl p-6 hover:bg-[#f2ece5] hover:text-[#0e0e0e] transition-colors duration-300"
            >
              <h3 className={`${antonFont.className} text-2xl mb-2 uppercase`}>
                {service.title}
              </h3>
              <p className={`${hanken.className} text-base`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
