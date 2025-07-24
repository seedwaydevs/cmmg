import Hero from "@/components/services/Hero";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col">
      <Hero />
    </div>
  );
};

export default page;
