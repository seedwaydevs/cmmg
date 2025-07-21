import { Anton, Hanken_Grotesk } from "next/font/google";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import image from "../../../public/film.jpg";
import content from "../../../public/content-dev.jpg";
import music from "../../../public/music-prod.jpg";
import LibraryImageGrid from "@/components/home/components/LibraryImageGrid";
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
      <div className="w-[90%] mx-auto h-[30vh] lg:h-[45vh] flex flex-col justify-center">
        <div className="flex items-center gap-2 ">
          <GoDotFill className="h-6 w-6" />
          <p className={`${hanken.className} text-lg font-semibold`}>
            Our services
          </p>
        </div>
        <div>
          <h1
            className={`${antonFont.className} text-5xl lg:text-9xl uppercase py-2`}
          >
            Services
          </h1>
          <p className="md:text-xl md:max-w-lg">
            Our tailor made solutions ensure each project is unique and caters
            exactly to the brief.{" "}
          </p>
        </div>
      </div>
      <div className="py-10">
        {/* Video */}
        <div className="bg-[#0e0e0e] py-10 text-white">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col lg:flex-row space-y-10">
              <div className="flex flex-col justify-center flex-1 space-y-5">
                <h1
                  className={`${antonFont.className} text-7xl uppercase tracking-wider max-w-md leading-20`}
                >
                  Video Production
                </h1>
                <p className="max-w-md text-xl">
                  From commercials to documentaries, we produce high-quality
                  video content with cinematic precision and storytelling
                  excellence.
                </p>
                <p className="py-2 px-3 rounded-xl border border-white lg:w-[10vw] text-center">
                  Contact Us
                </p>
              </div>
              <div className="w-full h-[70vh] flex-1">
                <Image
                  src={image}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Music Lib */}
        <div className="py-10 text-[#0e0e0e]">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col lg:justify-center lg:items-center lg:flex-row space-y-10">
              <div className="flex flex-col lg:justify-center flex-1 space-y-5">
                <h1
                  className={`${antonFont.className} text-7xl uppercase tracking-wider max-w-md leading-20`}
                >
                  Production Music Library
                </h1>
                <p className="max-w-md text-xl">
                  Browse our extensive library of original tracks, ready for
                  licensing across TV, film, online content, and commercial
                  campaigns.
                </p>
              </div>
              <div className="w-full h-[95vh] flex-1">
                <LibraryImageGrid />
              </div>
            </div>
          </div>
        </div>
        {/* Content Strategy & Development */}
        <div className="bg-[#0e0e0e] py-10 text-white">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col lg:flex-row space-y-10">
              <div className="flex flex-col justify-center flex-1 space-y-5">
                <h1
                  className={`${antonFont.className} text-7xl uppercase tracking-wider max-w-md leading-20`}
                >
                  Content Strategy & Development
                </h1>
                <p className="max-w-md text-xl">
                  We help brands plan, produce, and distribute content that
                  connects — from social media reels to full-scale campaigns.
                </p>
                <p className="py-2 px-3 rounded-xl border border-white text-white lg:w-[7vw] text-center">
                  Contact
                </p>
              </div>
              <div className="w-full h-[70vh] flex-1">
                <Image
                  src={content}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Music Composition & Scoring */}
        <div className="py-10 text-[#0e0e0e]">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col lg:justify-center lg:items-center lg:flex-row space-y-10">
              <div className="flex flex-col lg:justify-center flex-1 space-y-5">
                <h1
                  className={`${antonFont.className} text-7xl uppercase tracking-wider max-w-md leading-20`}
                >
                  Studio
                </h1>
                <p className="max-w-md text-xl">
                  Our award-winning composers create custom scores and
                  soundtracks tailored to elevate your story and captivate your
                  audience.
                </p>

                <p className="py-2 px-3 rounded-xl border border-black lg:w-[7vw] text-center">
                  Book
                </p>
              </div>
              <div className="w-full h-[70vh] flex-1">
                <Image
                  src={music}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
