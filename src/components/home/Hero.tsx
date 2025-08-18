"use client";

import React, { useState, useEffect } from "react";
import hero from "./hero.module.css";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {};

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Hero = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide data - customize these for your content
  const slides = [
    {
      id: 1,
      tag: "[ Content and Music ]",
      description:
        "Crafting original music libraries and immersive content for film, television, and digital storytelling.",
      title: "CMMG",
      subtitle: "[ Media Group ]",
      backgroundClass: hero.heroBackground, // Your existing background
    },
    {
      id: 2,
      tag: "[ Upcoming Music ]",
      description: "NJALO by Yandii, our most anticipated release.",
      title: "NJALO",
      subtitle: "[ Coming Soon ]",
      backgroundClass: hero.secondBackground, // Add a second background class or use the same
    },
    {
      id: 3,
      tag: "[ Creative Solutions ]",
      description:
        "From concept to completion, we bring your creative vision to life with cutting-edge technology.",
      title: "CREATE",
      subtitle: "[ Innovation ]",
      backgroundClass: hero.heroBackground, // Add a third background class or use the same
    },
  ];

  //Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Carousel Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-screen text-white transition-transform duration-700 ease-in-out ${
              slide.backgroundClass
            } ${
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <div className="w-[90%] md:w-[90%] mx-auto h-full py-16">
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-end mt-16">
                  <p className="text-[16px] uppercase font-bold tracking-tighter">
                    {slide.tag}
                  </p>
                </div>
                <div className={`${sted.className}`}>
                  <p className="text-lg font-medium max-w-xs md:max-w-sm">
                    {slide.description}
                  </p>
                  <h1
                    className={`${hanken.className} text-8xl font-extrabold py-7`}
                  >
                    {slide.title}
                    <span className="text-orange-600">.</span>
                  </h1>
                  <p className="text-[16px] uppercase font-bold tracking-tighter">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide
                  ? "bg-orange-600"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 left-8 z-10 text-white/70 text-sm font-medium">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>
      </div>
    </>
  );
};

export default Hero;
