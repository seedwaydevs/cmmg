import { Anton, Hanken_Grotesk } from "next/font/google";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import mrS from "../../../public/asib.jpg";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TeamCard from "./TeamCard";

type Props = {};

const antonFont = Anton({ subsets: ["latin"], weight: "400" });
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Team = (props: Props) => {
  return (
    <div className="w-full py-10">
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <GoDotFill className="h-6 w-6" />
          <p className={`${hanken.className} text-lg font-semibold`}>
            Our Team
          </p>
        </div>
        <div className="py-5">
          <h1
            className={`${antonFont.className} text-7xl md:text-8xl md:max-w-xl uppercase`}
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
