import React from "react";
import { Hanken_Grotesk, Inter_Tight } from "next/font/google";
import mail from "../../../public/icons/Emails-amico (1).png";
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

const ContactCTA = () => {
  return (
    <section className="bg-orange-600 w-full text-white py-5">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col space-y-5">
          <div className="flex text-white items-center">
            <div className="h-[16vh] ">
              <Image src={mail} alt="image" className="w-full h-full" />
            </div>
            <div className="flex-1 p-2">
              <h5 className="text-lg">Have questions?</h5>
              <p className="text-sm">send us an email.</p>
              <div className="bg-white p-2 my-3"></div>
            </div>
          </div>
          <div className="border"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
