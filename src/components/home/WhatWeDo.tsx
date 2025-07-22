import { Anton, Hanken_Grotesk, Inter_Tight } from "next/font/google";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import star from "../../../public/icons/star.png";
import asterisks from "../../../public/icons/asterisks.png";
import lines from "../../../public/icons/lines.png";
import Image from "next/image";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const antonFont = Anton({
  subsets: ["latin"],
  weight: "400",
});

type Props = {};

const WhatWeDo = (props: Props) => {
  return (
    <div className="py-5 w-full">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-600 h-7 w-7 lg:h-10 lg:w-10" />
            <p className="text-xs uppercase lg:text-lg">[ Services ]</p>
          </div>
          <div>
            <h1
              className={`${hanken.className} text-6xl lg:text-7xl font-bold tracking-tighter`}
            >
              What We do<span className="text-orange-600">.</span>
            </h1>
            <p
              className={`${inter.className} mt-4 text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl`}
            >
              With years of experience across the music and media landscape, our
              team specializes in original music production and licensable
              tracks, content development for visual media, and
              professional-grade studio hire for creators and collaborators.
            </p>
            <div className="flex flex-col lg:flex-row space-y-5 py-10">
              <div className="flex items-start space-x-5 border-b lg:border-b-0 lg:border-r border-gray-300 p-4 ">
                <Image src={star} alt="star-image" width={30} height={30} />

                <div className="space-y-5 ">
                  <h3 className={`${hanken.className} text-3xl font-bold`}>
                    Music Production
                  </h3>
                  <p className={`${inter.className} md:text-lg text-gray-700 `}>
                    From custom compositions to licensable tracks, we craft
                    soundscapes that bring stories to life. Our catalog is
                    tailored for film, TV, ads, games, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5 border-b lg:border-b-0 lg:border-r border-gray-300 p-4">
                <Image
                  src={asterisks}
                  alt="star-image"
                  width={30}
                  height={30}
                />
                <div className="space-y-5">
                  <h3 className={`${hanken.className} text-3xl font-bold`}>
                    Content Development
                  </h3>
                  <p className={`${inter.className} md:text-lg text-gray-700`}>
                    We help develop powerful visual narratives through music
                    supervision, licensing strategy, and creative
                    consulting—bridging audio with vision.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5 p-4">
                <Image src={lines} alt="star-image" width={30} height={30} />
                <div className="space-y-5">
                  <h3 className={`${hanken.className} text-3xl font-bold`}>
                    Studio Hire
                  </h3>
                  <p className={`${inter.className}  md:text-lg text-gray-700`}>
                    Rent our professional-grade studios for music production,
                    content creation, live sessions, podcasting, or video
                    shoots—fully equipped and ready for your next project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
