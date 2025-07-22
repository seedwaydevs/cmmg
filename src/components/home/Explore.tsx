import { Hanken_Grotesk } from "next/font/google";
import Image from "next/image";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import collage from "../../../public/CoverCollage.png";
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
          <div className="flex flex-col lg:items-center lg:flex-row space-y-7">
            <h1
              className={`${hanken.className} font-bold text-5xl lg:text-8xl flex-1`}
            >
              CMMG Production Music Library
            </h1>
            <div className="h-[30vh] lg:h-[30vh] bg-black">
              <Image
                src={collage}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
