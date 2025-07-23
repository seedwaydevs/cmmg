import { Anton, Hanken_Grotesk, Inter_Tight } from "next/font/google";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import mrS from "../../../public/asib.jpg";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TeamCard from "./TeamCard";
import { TiArrowSortedUp } from "react-icons/ti";

type Props = {};

const antonFont = Anton({ subsets: ["latin"], weight: "400" });
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Team = (props: Props) => {
  return (
    <div className="w-full py-10">
      <div className="flex flex-col">
        <div className="flex items-center">
          <TiArrowSortedUp className="text-orange-600 h-7 w-7 lg:h-10 lg:w-10" />
          <p className="text-xs uppercase lg:text-lg">[ Our Team ]</p>
        </div>
        <div className="py-5">
          <h1
            className={`${hanken.className} text-5xl sm:text-6xl md:text-7xl sm:max-w-lg md:max-w-xl uppercase font-extrabold`}
          >
            Meet our talented team.
          </h1>
          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
            <TeamCard
              image={mrS}
              name="Abraham Sibiya"
              position="Founder, CEO"
              font={antonFont}
            />
            <TeamCard
              image={mrS}
              name="Abraham Sibiya"
              position="Founder, CEO"
              font={antonFont}
            />
            <TeamCard
              image={mrS}
              name="Abraham Sibiya"
              position="Founder, CEO"
              font={antonFont}
            />
            <TeamCard
              image={mrS}
              name="Abraham Sibiya"
              position="Founder, CEO"
              font={antonFont}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
