import ContactCTA from "@/components/about/ContactCTA";

import Explore from "@/components/home/Explore";
import Hero from "@/components/home/Hero";
import TrustCarousel from "@/components/home/TrustCarousel";
import WhatWeDo from "@/components/home/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustCarousel />
      <Explore />
      <WhatWeDo />
      <ContactCTA />
    </div>
  );
}
