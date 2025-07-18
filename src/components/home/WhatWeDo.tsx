import { Anton, Hanken_Grotesk } from "next/font/google";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import image from "../../../public/prodco.jpg";
import WhatWeDoCarousel from "./components/WhatWeDoCarousel";
import { ArrowRight } from "lucide-react";

type Props = {};
const antonFont = Anton({
  subsets: ["latin"],
  weight: "400",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const WhatWeDo = (props: Props) => {
  return (
    <div className="w-full py-10">
      <div className="w-[90%] mx-auto flex flex-col">
        <div>
          <div className=" flex items-center space-x-1 pt-5">
            <GoDotFill className="h-7 w-7" />
            <p className={`${hanken.className} text-lg font-medium `}>
              Things we do
            </p>
          </div>
          <div className="py-5">
            <h1
              className={`${antonFont.className} text-7xl uppercase leading-22`}
            >
              What can we do for you?
            </h1>
          </div>
          {/* Carousel Wrapper */}
          <div className="h-[125vh] lg:h-auto bg-[#0e0e0e] text-[#f2ece5] rounded-xl">
            {/* Carousel Content */}
            <WhatWeDoCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
