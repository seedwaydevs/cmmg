import { Anton, Hanken_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDotFill, GoArrowUpRight } from "react-icons/go";
import { MdOutlineLibraryMusic, MdOutlineVideoLibrary } from "react-icons/md";

import image from "../../../public/prodco.jpg";
import { TbFileDescription } from "react-icons/tb";
import { GiStorkDelivery } from "react-icons/gi";

const antonFont = Anton({ subsets: ["latin"], weight: "400" });
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const About = () => {
  return (
    <div className="text-[#0e0e0e] w-full py-10 ">
      <div className="w-[90%] mx-auto flex flex-col gap-10">
        {/* Section 1: Introduction */}
        <div className="flex flex-col  items-center gap-3">
          <div className="flex flex-col justify-center lg:items-center lg:max-w-3xl">
            <div className="flex items-center space-x-2 pb-3">
              <GoDotFill className="h-6 w-6" />
              <p className={`${hanken.className} text-lg font-semibold`}>
                About CMMG
              </p>
            </div>
            <div className="space-y-8">
              <p
                className={`${antonFont.className} text-4xl lg:text-5xl lg:text-center uppercase pt-5`}
              >
                We bring stories to life through world-class video, music, and
                content production.
              </p>

              <p
                className={`${hanken.className} text-xl lg:text-center lg:max-w-2xl lg:mx-auto py-5`}
              >
                At CMMG, we fuse creative storytelling with technical precision.
                From branded content to original productions and music scoring,
                our work is crafted to inspire and captivate across platforms.
              </p>
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <p className={`${antonFont.className} text-6xl uppercase`}>
                    20+
                  </p>
                  <p className={`${hanken.className} text-md tracking-widest`}>
                    Employees
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className={`${antonFont.className} text-6xl uppercase`}>
                    120+
                  </p>
                  <p className={`${hanken.className} text-md tracking-widest`}>
                    Projects
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className={`${antonFont.className} text-6xl uppercase`}>
                    5+
                  </p>
                  <p className={`${hanken.className} text-md tracking-widest`}>
                    Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 h-[60vh] w-full lg:h-[80vh]">
            <Image
              src={image}
              alt="Production team at work"
              className="rounded-xl w-full object-cover h-full"
            />
          </div>
        </div>

        {/* Section 2: Our Mission */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <GoDotFill className="h-6 w-6" />
            <p className={`${hanken.className} text-lg font-semibold`}>
              Mission/Vision
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-end space-y-5 md:space-x-5 ">
            <div className="space-y-4 md:max-w-lg p-2">
              <h2
                className={`${antonFont.className} text-6xl lg:text-7xl uppercase max-w-3xs`}
              >
                Our Vision.
              </h2>
              <p className={`${hanken.className} text-lg max-w-4xl`}>
                Our vision is to redefine media production by empowering brands,
                creators, and storytellers through immersive visual and audio
                experiences — where innovation meets authenticity, and every
                story leaves a lasting impact.
              </p>
            </div>
            <div className="space-y-4 md:max-w-lg p-2">
              <h2
                className={`${antonFont.className} text-6xl lg:text-7xl uppercase max-w-3xs`}
              >
                Our Mission.
              </h2>
              <p className={`${hanken.className} text-lg max-w-4xl`}>
                We exist to empower brands, creators, and storytellers by
                delivering compelling visual and audio content. Our goal is to
                set a new standard in media production by merging innovation
                with authenticity.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Why Choose Us */}
        <div>
          <div className="flex items-center space-x-2">
            <GoDotFill className="h-6 w-6" />
            <p className={`${hanken.className} text-lg font-semibold`}>
              Why choose us.
            </p>
          </div>
          <div className="space-y-6 flex flex-col md:items-center py-5">
            <h2
              className={`${antonFont.className} text-3xl md:text-5xl md:py-5 uppercase`}
            >
              Why Choose CMMG
            </h2>
            <div
              className={`${hanken.className} space-y-3 md:py-5 text-lg flex flex-col md:flex-row md:items-center lg:max-w-4xl lg:space-x-8`}
            >
              <div className="flex flex-col md:items-center md:text-center space-y-3">
                <MdOutlineVideoLibrary className="hidden md:flex md:h-16 md:w-16 lg:h-26 lg:w-26" />
                <p>Industry-leading video and audio production services</p>
              </div>
              <div className="flex flex-col md:items-center md:text-center space-y-3">
                <MdOutlineLibraryMusic className="hidden md:flex md:h-16 md:w-16 lg:h-26 lg:w-26" />
                <p>
                  In-house music library with licensing for film, ads, and
                  social
                </p>
              </div>
              <div className="flex flex-col md:items-center md:text-center space-y-3">
                <TbFileDescription className="hidden md:flex md:h-16 md:w-16 lg:h-26 lg:w-26" />
                <p>
                  Creative team with deep roots in storytelling and sound design
                </p>
              </div>
              <div className="flex flex-col md:items-center md:text-center space-y-3">
                <GiStorkDelivery className="hidden md:flex md:h-16 md:w-16 lg:h-26 lg:w-26" />
                <p>End-to-end content solutions from concept to delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
