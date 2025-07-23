import { Anton, Hanken_Grotesk, Inter_Tight } from "next/font/google";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdOutlineLibraryMusic, MdOutlineVideoLibrary } from "react-icons/md";

import image from "../../../public/prodco.jpg";
import { TbFileDescription } from "react-icons/tb";
import { GiStorkDelivery } from "react-icons/gi";
import Team from "@/components/about/Team";
import { TiArrowSortedUp } from "react-icons/ti";

const antonFont = Anton({ subsets: ["latin"], weight: "400" });
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const About = () => {
  return (
    <div className="text-[#0e0e0e] w-full py-10 mt-20">
      <div className="w-[95%] mx-auto flex flex-col gap-10">
        {/* Section 1: Introduction */}
        <div className="flex flex-col  items-center py-10 px-5 gap-3 bg-gray-100 rounded-md">
          <div className="flex flex-col justify-center w-full ">
            <div className="space-y-8 md:items-center md:max-w-3xl md:mx-auto ">
              <p
                className={`${inter.className} font-bold text-3xl md:text-5xl lg:text-6xl text-center uppercase pt-5 leading-9 lg:leading-12`}
              >
                Bringing stories to life through{" "}
                <span className="font-extrabold text-orange-600">
                  world-class
                </span>{" "}
                music and content production.
              </p>

              <p
                className={`${inter.className} text-xl text-center md:max-w-2xl lg:mx-auto py-5 leading-7`}
              >
                At CMMG, we fuse creative storytelling with technical precision.
                From branded content to original productions and music scoring,
                our work is crafted to inspire and captivate across platforms.
              </p>
              <div className="flex justify-between md:max-w-2xl md:mx-auto">
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
          <div className=" h-[40vh] lg:w-[65vw] lg:h-[60vh]">
            <Image
              src={image}
              alt="Production team at work"
              className="w-full object-contain h-full"
            />
          </div>
        </div>

        {/* Section 2: Our Mission */}
        <div className="space-y-6">
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-600 h-7 w-7 lg:h-10 lg:w-10" />
            <p className="text-xs uppercase lg:text-lg">[ Mission/Vision ]</p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-end space-y-5 md:space-x-5 ">
            <div className="space-y-4 md:max-w-lg p-2">
              <h2
                className={`${antonFont.className} text-6xl lg:text-7xl uppercase max-w-3xs`}
              >
                Our <span className="text-orange-600">Vision</span>.
              </h2>
              <p className={`${inter.className} text-lg max-w-4xl`}>
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
                Our <span className="text-orange-600">Mission</span>.
              </h2>
              <p className={`${inter.className} text-lg max-w-4xl`}>
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

        {/* Section 4: Meet the team */}
        <div>
          <Team />
        </div>
      </div>
    </div>
  );
};

export default About;
