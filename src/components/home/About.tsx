import { Anton, Hanken_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import image from "../../../public/prodco.jpg";
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
      <div className="w-[90%] mx-auto flex">
        <div className="py-10 flex flex-col lg:flex-row items-center gap-3">
          <div className="text-[#f2ece5] lg:flex-1">
            <div className=" flex items-center space-x-2 pb-3">
              <GoDotFill className="h-6 w-6" />
              <p className={`${hanken.className} text-lg font-semibold`}>
                About CMMG
              </p>
            </div>
            <div className="space-y-8">
              <p
                className={`${antonFont.className} text-4xl lg:text-5xl uppercase leading-12 lg:leading-14`}
              >
                We specialize in brand design, digital design, and development,
                <span className="font-serif lowercase italic">
                  {" "}
                  seamlessly
                </span>{" "}
                integrating various{" "}
                <span className="font-serif lowercase italic">
                  disciplines
                </span>{" "}
                to achieve powerful and effective outcomes.
              </p>
              <Link
                href={"/about"}
                className={`${hanken.className} border rounded-3xl text-lg py-1 px-6 inline-flex items-center gap-3 hover:bg-[#f2ece5] hover:text-[#0e0e0e]`}
              >
                More About Us
                <GoArrowUpRight className="h-6 w-6" />
              </Link>
              <p className={`${hanken.className} text-xl tracking-normal`}>
                What sets Lumin apart is our unique approach to digital design.
                We combine artistic flair with technical expertise, strategic
                thinking with bold creativity, to deliver solutions that not
                only meet but exceed our clients' expectations.
              </p>
            </div>
          </div>
          <div className="my-10 h-[60vh] w-full lg:flex-1 lg:h-full">
            <Image
              src={image}
              alt="image"
              className="rounded-xl w-full object-cover h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
