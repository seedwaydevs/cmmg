"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  barloworld,
  brownsense,
  capasso,
  samro,
  trace,
  ccli,
  orcheezy,
} from "@/data";

const logos = [
  { src: orcheezy, alt: "Orchard", height: "h-[50px]" },
  { src: brownsense, alt: "Brownsense", height: "h-[45px]" },
  { src: trace, alt: "Trace", height: "h-[50px]" },
  { src: capasso, alt: "Capasso", height: "h-[55px] bg-blue-900 px-2" },
  { src: samro, alt: "SAMRO", height: "h-[40px]" },
  { src: barloworld, alt: "Barloworld", height: "h-[65px]" },
  { src: ccli, alt: "CCLI", height: "h-[70px]" },
];

const TrustCarousel = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let x = 0;

    const animate = () => {
      if (!wrapper) return;

      x -= 1; // scroll speed
      wrapper.style.transform = `translateX(${x}px)`;

      if (Math.abs(x) >= wrapper.scrollWidth / 2) {
        x = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full relative h-[10vh] md:h-[15vh] bg-white flex items-center justify-center overflow-hidden">
      {/* Blur left and right edges */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Scrolling content */}
      <div className="overflow-hidden w-full">
        <div
          ref={wrapperRef}
          className="flex gap-10 py-10 w-max"
          style={{ willChange: "transform" }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center min-w-[150px] "
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className={`${logo.height} object-contain w-auto`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustCarousel;
