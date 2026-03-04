import ContactCTA from "@/components/home/ContactCTA";
import ServicesCompanies from "@/components/services/Companies";
import ServicesHero from "@/components/services/Hero";

import WhatWeOffer from "@/components/services/WhatWeOffer";
import { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import React from "react";

type Props = {};
const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `Services`,
  description:
    "We offer an array of music services and solutions catered to your needs",
};
const page = (props: Props) => {
  return (
    <div className={`${sted.className} flex flex-col`}>
      <ServicesHero />
      <ServicesCompanies />
      <WhatWeOffer />
      <ContactCTA />
    </div>
  );
};

export default page;
