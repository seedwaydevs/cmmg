import Companies from "@/components/services/Companies";
import Hero from "@/components/services/Hero";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import { Schibsted_Grotesk } from "next/font/google";
import React from "react";

type Props = {};
const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const page = (props: Props) => {
  return (
    <div className={`${sted.className} flex flex-col`}>
      <Hero />
      <Companies />
      <WhatWeOffer />
    </div>
  );
};

export default page;
