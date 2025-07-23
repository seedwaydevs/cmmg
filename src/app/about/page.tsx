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
        <div className="bg-gray-100 py-10 rounded-md p-2 shadow-xl">
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-600 h-7 w-7 lg:h-10 lg:w-10" />
            <p className="text-xs uppercase lg:text-lg">[ Why choose us ]</p>
          </div>
          <div className="space-y-6 flex flex-col md:items-center ">
            <h2
              className={`${inter.className} text-3xl md:text-5xl p-2 md:p-10 font-extrabold `}
            >
              Why Choose CMMG<span className="text-orange-600">.</span>
            </h2>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 ">
              {/* Video Production */}
              <div className="flex items-start space-x-5 border-b lg:border-b-0 lg:border-r border-gray-300 p-4">
                <p className="text-orange-600">01</p>
                <div className="space-y-5">
                  <h3
                    className={`${hanken.className} leading-5 text-2xl font-bold`}
                  >
                    Video & Audio Production
                  </h3>
                  <p className={`${inter.className} md:text-lg text-gray-700`}>
                    Industry-leading video and audio production services
                    tailored for modern media needs.
                  </p>
                </div>
              </div>

              {/* Music Library */}
              <div className="flex items-start space-x-5 border-b lg:border-b-0 lg:border-r border-gray-300 p-4">
                <p className="text-orange-600">02</p>
                <div className="space-y-5 ">
                  <h3
                    className={`${hanken.className}  leading-5 text-2xl font-bold`}
                  >
                    Music Library Licensing
                  </h3>
                  <p className={`${inter.className} md:text-lg text-gray-700`}>
                    Access our in-house music library with flexible licensing
                    for film, ads, and social content.
                  </p>
                </div>
              </div>

              {/* Creative Team */}
              <div className="flex items-start space-x-5 border-b lg:border-b-0 lg:border-r border-gray-300 p-4">
                <p className="text-orange-600">03</p>
                <div className="space-y-5">
                  <h3
                    className={`${hanken.className} leading-6 text-2xl font-bold`}
                  >
                    Creative Sound Design
                  </h3>
                  <p className={`${inter.className} md:text-lg text-gray-700`}>
                    Work with our experienced creatives in storytelling, sound
                    design, and audio branding.
                  </p>
                </div>
              </div>

              {/* End-to-End Content */}
              <div className="flex items-start space-x-5 p-4">
                <p className="text-orange-600">04</p>
                <div className="space-y-5">
                  <h3
                    className={`${hanken.className} leading-6 text-2xl font-bold`}
                  >
                    End-to-End Solutions
                  </h3>
                  <p className={`${inter.className} md:text-lg text-gray-700`}>
                    From ideation to final delivery, we offer full content
                    production services that bring your vision to life.
                  </p>
                </div>
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
