"use client";

import { useState, useEffect } from "react";
import ContactCTA from "@/components/home/ContactCTA";
import Explore from "@/components/home/Explore";
import Hero from "@/components/home/Hero";
import Latest from "@/components/home/Latest";
import MusicServices from "@/components/home/MusicServices";
import TrustCarousel from "@/components/home/TrustCarousel";
import WhatWeDo from "@/components/home/WhatWeDo";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

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
