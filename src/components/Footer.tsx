import { cmmg } from "@/data";
import { Schibsted_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};
const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Footer = (props: Props) => {
  return (
    <div className={`bg-[#0e0e0e] py-14 text-[#f2ece5] ${sted.className}`}>
      <div className="w-[90%] lg:w-[80%] mx-auto space-y-5">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-3">
            <h2 className={`${sted.className} text-xl capitalize font-bold`}>
              Company
            </h2>
            <div className="flex flex-col space-y-2">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/work"}>Work</Link>
              <Link href={"/services"}>Services</Link>
              <Link href={"/contact"}>Contact Us</Link>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className={`${sted.className} text-xl capitalize font-bold`}>
              Utility Pages
            </h2>
            <div className="flex flex-col space-y-2">
              <Link href={"/licenses"}>Licenses</Link>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className={`${sted.className} text-xl capitalize font-bold`}>
              Contact
            </h2>
            <div className="flex flex-col space-y-2">
              <p>+27 (0) 61-788-9902</p>
              <p>info@cmmg.co.za</p>
              <p>1 2nd Rd, Halfway House Estate, Midrand, 1685</p>
            </div>
          </div>
        </div>

        <div className={`${sted.className} h-[20vh]`}>
          <Image
            src={cmmg}
            alt="cmmg-logo"
            className="w-fit h-full object-contain"
          />
        </div>

        <div>
          <div className="flex space-x-3 items-center">
            <p className="text-xl">&copy;</p>
            <p className="text-xl">All rights reserved by CMMG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
