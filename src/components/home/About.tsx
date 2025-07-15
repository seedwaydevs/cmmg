import { Anton, Hanken_Grotesk } from "next/font/google";
import React from "react";
import { GoDotFill } from "react-icons/go";
type Props = {};

const antonFont = Anton({
  subsets: ["latin"],
  weight: "400",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const About = (props: Props) => {
  return (
    <div className="bg-[#0e0e0e] w-full py-10">
      <div className="w-[90%] mx-auto flex flex-col">
        <div>
          <div className="text-white flex items-center space-x-2">
            <GoDotFill className="h-6 w-6" />
            <p className={`${hanken.className} font-semibold`}>About CMMG</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
