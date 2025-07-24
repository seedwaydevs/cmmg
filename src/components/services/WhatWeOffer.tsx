import { Anton, Hanken_Grotesk, Inter_Tight } from "next/font/google";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import ServicesGrid from "./ServicesGrid";
import ServiceMusicLibrary from "./service-components/ServiceMusicLib";
import ServiceSoundProduction from "./service-components/ServiceSoundProd";
import ServiceStudioHire from "./service-components/ServiceStudioHire";
import ServiceVideoProduction from "./service-components/ServiceVideoProduction";
import ServiceEventEntertainment from "./service-components/ServiceEvent";

type Props = {};

// Text Fonts

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

const WhatWeOffer = (props: Props) => {
  return (
    <div className="w-full py-10">
      <div className="w-[95%] mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-600 h-7 w-7 lg:h-10 lg:w-10" />
            <p className="text-xs uppercase lg:text-lg">[ What we offer ]</p>
          </div>
          <div>
            <div className="pb-10">
              <h1
                className={`${hanken.className} text-6xl lg:text-7xl font-bold tracking-tighter`}
              >
                What We Offer<span className="text-orange-600">.</span>
              </h1>
              <p
                className={`${inter.className} mt-4 text-base md:text-lg lg:text-xl text-gray-700 max-w-xl`}
              >
                Every project is different. That’s why we offer a modular set of
                services — from sound and story to delivery and distribution.
              </p>
            </div>
            <hr />
            <ServicesGrid />
            <div>
              <div className="py-5">
                <h1
                  className={`${hanken.className} text-6xl lg:text-7xl font-bold tracking-tighter`}
                >
                  Services<span className="text-orange-600">.</span>
                </h1>
              </div>
              <ServiceMusicLibrary />
              <ServiceSoundProduction />
              <ServiceStudioHire />
              <ServiceVideoProduction />
              <ServiceEventEntertainment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
