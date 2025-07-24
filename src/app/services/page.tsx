import Companies from "@/components/services/Companies";
import Hero from "@/components/services/Hero";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Companies />
      <WhatWeOffer />
    </div>
  );
};

export default page;
