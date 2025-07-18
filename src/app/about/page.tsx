import { Anton, Hanken_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDotFill, GoArrowUpRight } from "react-icons/go";
import image from "../../../public/prodco.jpg";

const antonFont = Anton({ subsets: ["latin"], weight: "400" });
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const About = () => {
  return (
    <div className="text-[#0e0e0e] w-full py-10 ">
      <div className="w-[90%] mx-auto flex flex-col gap-16">
        {/* Section 1: Introduction */}
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <div className="lg:flex-1">
            <div className="flex items-center space-x-2 pb-3">
              <GoDotFill className="h-6 w-6" />
              <p className={`${hanken.className} text-lg font-semibold`}>
                About CMMG
              </p>
            </div>
            <div className="space-y-8">
              <p
                className={`${antonFont.className} text-4xl lg:text-5xl uppercase`}
              >
                We bring stories to life through world-class video, music, and
                content production.
              </p>
              <Link
                href="/about"
                className={`${hanken.className} border rounded-3xl text-lg py-1 px-6 inline-flex items-center gap-3 hover:bg-[#f2ece5] hover:text-[#0e0e0e]`}
              >
                More About Us
                <GoArrowUpRight className="h-6 w-6" />
              </Link>
              <p className={`${hanken.className} text-xl`}>
                At CMMG, we fuse creative storytelling with technical precision.
                From branded content to original productions and music scoring,
                our work is crafted to inspire and captivate across platforms.
              </p>
            </div>
          </div>
          <div className="my-10 h-[60vh] w-full lg:flex-1 lg:h-full">
            <Image
              src={image}
              alt="Production team at work"
              className="rounded-xl w-full object-cover h-full"
            />
          </div>
        </div>

        {/* Section 2: Our Mission */}
        <div className="space-y-6">
          <h2
            className={`${antonFont.className} text-3xl lg:text-4xl uppercase`}
          >
            Our Mission
          </h2>
          <p className={`${hanken.className} text-lg max-w-4xl`}>
            We exist to empower brands, creators, and storytellers by delivering
            compelling visual and audio content. Our goal is to set a new
            standard in media production by merging innovation with
            authenticity.
          </p>
        </div>

        {/* Section 3: Why Choose Us */}
        <div className="space-y-6">
          <h2
            className={`${antonFont.className} text-3xl lg:text-4xl uppercase`}
          >
            Why Choose CMMG
          </h2>
          <ul
            className={`${hanken.className} text-lg list-disc list-inside space-y-2`}
          >
            <li>Industry-leading video and audio production services</li>
            <li>
              In-house music library with licensing for film, ads, and social
            </li>
            <li>
              Creative team with deep roots in storytelling and sound design
            </li>
            <li>End-to-end content solutions from concept to delivery</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
