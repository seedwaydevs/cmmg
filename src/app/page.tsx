import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WhatWeDo />
    </div>
  );
}
