import { Anton, Hanken_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDotFill, GoArrowUpRight } from "react-icons/go";
import image from "../../../public/prodco.jpg";

const antonFont = Anton({
  subsets: ["latin"],
  weight: "400",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const About = () => {
  return (
    <div className="bg-[#0e0e0e] w-full py-10">
      <div className="w-[90%] mx-auto flex">
        <div className="py-10 flex flex-col lg:flex-row items-center gap-3">
          {/* Text Section */}
          <div className="text-[#f2ece5] lg:flex-[1.5]">
            <div className="flex items-center space-x-2 pb-3">
              <GoDotFill className="h-6 w-6" />
              <p className={`${hanken.className} text-lg font-semibold`}>
                About CMMG
              </p>
            </div>
            <div className="space-y-8">
              <p
                className={`${antonFont.className} text-3xl lg:text-4xl uppercase`}
              >
                We specialize in video, music, and content production,
                <span className="font-serif lowercase italic">
                  {" "}
                  seamlessly{" "}
                </span>
                blending creativity with strategy to produce captivating media.
              </p>
              <Link
                href={"/about"}
                className={`${hanken.className} border rounded-xl text-lg py-1 px-6 inline-flex items-center gap-3 hover:bg-[#f2ece5] hover:text-[#0e0e0e]`}
              >
                More About Us
                <GoArrowUpRight className="h-6 w-6" />
              </Link>
              <p className={`${hanken.className} text-lg tracking-normal`}>
                What sets CMMG apart is our multi-disciplinary team of
                directors, sound designers, editors, and creative strategists.
                We don't just create content — we craft media experiences that
                engage and endure.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="my-10 w-full lg:flex-1 lg:my-0">
            <div className="h-[300px] lg:h-[350px] rounded-xl overflow-hidden">
              <Image
                src={image}
                alt="production team"
                className="w-full h-full object-cover opacity-80 grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
