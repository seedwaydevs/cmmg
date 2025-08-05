import ContactCTA from "@/components/home/ContactCTA";

import Explore from "@/components/home/Explore";
import Hero from "@/components/home/Hero";
import Latest from "@/components/home/Latest";
import TrustCarousel from "@/components/home/TrustCarousel";
import WhatWeDo from "@/components/home/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustCarousel />
      <Latest />
      <Explore />
      <WhatWeDo />
      <ContactCTA />
    </div>
  );
}
