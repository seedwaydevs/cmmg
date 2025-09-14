import { Schibsted_Grotesk } from "next/font/google";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { ArrowRight } from "lucide-react";
import ServicesGrid from "./ServicesGrid";
import ServiceMusicLibrary from "./service-components/ServiceMusicLib";
import ServiceSoundProduction from "./service-components/ServiceSoundProd";
import ServiceStudioHire from "./service-components/ServiceStudioHire";
import ServiceVideoProduction from "./service-components/ServiceVideoProduction";
import ServiceEventEntertainment from "./service-components/ServiceEvent";

type Props = {};

// Font configuration with display swap for better performance
const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-schibsted",
});

const WhatWeOffer = (props: Props) => {
  return (
    <div className={`${schibstedGrotesk.variable} font-sans w-full`}>
      {/* Hero Section */}
      <section className="relative py-10 lg:py-10 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200 rounded-full blur-2xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative w-[90%] lg:w-[85%] mx-auto">
          <div className="max-w-5xl">
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                <TiArrowSortedUp className="text-white h-5 w-5" />
              </div>
              <span className="text-sm font-medium uppercase tracking-wider text-gray-600 bg-white px-4 py-2 rounded-full border">
                What we offer
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] text-gray-900">
                What We{" "}
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                  Offer
                </span>
                <span className="text-orange-500">.</span>
              </h1>

              <p className="text-lg lg:text-2xl text-gray-600 max-w-3xl font-medium leading-relaxed">
                Every project is different. That's why we offer a{" "}
                <span className="text-orange-500 font-semibold">
                  modular set of services
                </span>{" "}
                — from sound and story to delivery and distribution.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-white">
        <div className="w-[90%] lg:w-[85%] mx-auto">
          <ServicesGrid />
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-[90%] lg:w-[85%] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium uppercase tracking-wider text-gray-600">
                Our Services
              </span>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter text-gray-900 mb-6">
              Services
              <span className="text-orange-500">.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          {/* Services Components */}
          <div className="space-y-16">
            <ServiceMusicLibrary />
            <ServiceSoundProduction />
            <ServiceStudioHire />
            <ServiceVideoProduction />
            <ServiceEventEntertainment />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOffer;
