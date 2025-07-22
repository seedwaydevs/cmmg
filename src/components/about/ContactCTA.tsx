import React from "react";
import { Anton, Hanken_Grotesk, Inter_Tight } from "next/font/google";
import mail from "../../../public/icons/Emails-amico (1).png";
import bolt from "../../../public/icons/light-bolt.png";
import mail2 from "../../../public/icons/icons8-send-message-53.png";
import { HiOutlineArrowSmRight } from "react-icons/hi";

import Image from "next/image";
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});
const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const antonFont = Anton({
  subsets: ["latin"],
  weight: "400",
});

const ContactCTA = () => {
  return (
    <section className="bg-gray-50 w-full text-white py-5">
      <div className=" py-2 lg:py-5 flex justify-between items-center md:justify-center px-10 space-x-5">
        <p
          className={`${antonFont.className} text-6xl lg:text-7xl text-black uppercase tracking-wide`}
        >
          Let's work together.
        </p>
        <div className="">
          <Image src={mail2} alt="image" className="w-full h-full" />
        </div>
      </div>
      <div className="w-[90%] mx-auto py-5">
        <div className="flex flex-col space-y-5 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex text-black items-center">
            <div className="h-[16vh] ">
              <Image src={mail} alt="image" className="w-full h-full" />
            </div>
            <div className="flex-1 p-2">
              <h5 className={`${hanken.className} text-lg font-semibold`}>
                Contact Us.
              </h5>
              <p className="text-sm font-light text-black">send us an email.</p>
              <div className="bg-[#0e0e0e] rounded-sm p-3 mt-3 flex space-x-2 w-fit">
                <HiOutlineArrowSmRight className="bg-white text-black h-6 w-6 p-1 rounded-xs" />
                <p className="text-gray-50">info@cmmg.co.za</p>
              </div>
            </div>
          </div>
          <div className="border border-dotted border-black flex flex-col p-4 space-y-2 rounded-md lg:h-fit">
            <div className="flex items-center space-x-2">
              <Image src={bolt} alt="image" width={25} height={10} />
              <p className="text-black">Quick Responses</p>
            </div>
            <p className="text-sm text-gray-700 lg:max-w-xs">
              We're always ready to listen to your ideas and how we can fulfil
              your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
