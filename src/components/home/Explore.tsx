import { Hanken_Grotesk } from "next/font/google";
import Image from "next/image";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import collage from "../../../public/CoverCollage.png";
import Link from "next/link";
type Props = {};
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Explore = (props: Props) => {
  return (
    <div className="w-full py-5">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-600 h-7 w-7 lg:h-10 lg:w-10" />
            <p className="text-xs uppercase lg:text-lg">[ Explore ]</p>
          </div>
          <div className="flex flex-col lg:items-center lg:justify-between lg:flex-row space-y-7 pb-5">
            <div className="space-y-7">
              <h1
                className={`${hanken.className} font-bold text-5xl lg:text-7xl lg:max-w-lg flex-1`}
              >
                CMMG Production Music Library
              </h1>
              <p className="lg:text-xl lg:max-w-2xl">
                Explore a curated library of high-impact production music —
                designed to bring your film, TV, or digital project to life with
                unforgettable sound.
              </p>
              <Link href={"/"} className="bg-orange-600 py-2 px-3 text-white">
                Explore
              </Link>
            </div>
            <div className="h-[30vh] lg:h-[30vh] bg-black">
              <Image
                src={collage}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <hr className="" />
          <div className="py-5 lg:py-10">
            <p
              className={`${hanken.className} text-4xl md:text-5xl lg:text-6xl tracking-tight text-gray-500 font-bold `}
            >
              <span className="text-black">
                We don’t follow trends — we set the tone.{" "}
              </span>{" "}
              <span>
                We’re a content and music powerhouse. Built for impact.
                Engineered to resonate.
              </span>
            </p>
          </div>
          <hr className="" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
