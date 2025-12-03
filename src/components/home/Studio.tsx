import React, { useState, useEffect } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { MoveRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Link from "next/link";

// Font configurations (using system fonts as fallback)
const stedClassName = "font-sans";
const interClassName = "font-sans";
import { hire1, hire2, hire3, hire4, hire5, hire6, hire7, hire8 } from "@/data";
import Image from "next/image";
import LinkButton from "../LinkButton";

const Studio = () => {
  const studioImages = [
    {
      id: 1,
      src: hire3,
      alt: "Studio interior overview",
    },
    {
      id: 2,
      src: hire1,
      alt: "Profession Mixing Desk",
    },
    {
      id: 3,
      src: hire2,
      alt: "Acoustically treated recording booth",
    },

    {
      id: 4,
      src: hire4,
      alt: "Client lounge area",
    },
    {
      id: 5,
      src: hire5,
      alt: "Live recording session",
    },
    {
      id: 6,
      src: hire6,
      alt: "Live recording session",
    },
    {
      id: 7,
      src: hire7,
      alt: "Live recording session",
    },
    {
      id: 8,
      src: hire8,
      alt: "Live recording session",
    },
  ];

  // State to track the currently selected main image
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % studioImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + studioImages.length) % studioImages.length
    );
  };

  return (
    <div className="w-full py-5">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col space-y-4 py-7">
          {/* Top Badge */}
          <div className="flex items-center">
            <TiArrowSortedUp className="text-blue-500 h-7 w-7 lg:h-10 lg:w-10" />
            <div className="backdrop-blur-sm bg-blue-600/5 px-4 py-2 rounded-lg border border-blue-600/20 ml-2">
              <p
                className={`${stedClassName} text-xs uppercase lg:text-sm font-bold tracking-widest text-neutral-400`}
              >
                [ Studio ]
              </p>
            </div>
          </div>

          {/* Main Content - Stacked on mobile, side by side on desktop */}
          <div className="flex flex-col lg:flex-row py-5 gap-10 lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="flex-1 space-y-6 lg:max-w-xl">
              <h1
                className={`${stedClassName} font-black text-5xl lg:text-6xl text-neutral-800 tracking-tight leading-none`}
              >
                World-Class Studio Hire
                <span className="text-blue-500">.</span>
              </h1>

              <p
                className={`${stedClassName} text-lg text-neutral-800 font-light leading-normal max-w-2xl`}
              >
                Step into a professional-grade recording environment equipped
                with cutting-edge technology and acoustic excellence. From music
                production to podcast recording, our studio delivers the quality
                your project deserves.
              </p>

              <div className="flex flex-wrap gap-4 items-center pt-2">
                <LinkButton
                  color="orange"
                  text="Book Studio"
                  url="https://www.library.cmmg.co.za/library"
                  svg="M9 5l7 7-7 7"
                />
              </div>

              {/* Studio Features - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:grid grid-cols-2 gap-4 pt-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-neutral-700">
                      Premium Equipment
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 pl-4">
                    Industry-standard gear
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-neutral-700">
                      Flexible Hours
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 pl-4">
                    Book by hour or day
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-neutral-700">
                      Expert Support
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 pl-4">
                    Optional engineering
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-neutral-700">
                      Available Now
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 pl-4">Ready to book</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image Gallery */}
            <div className="flex-1 space-y-4">
              {/* Main Image Display */}
              <div className="relative group aspect-[4/3] w-full bg-neutral-100 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={studioImages[selectedImageIndex].src}
                  alt={studioImages[selectedImageIndex].alt}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-neutral-700" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-neutral-700" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  {selectedImageIndex + 1} / {studioImages.length}
                </div>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2">
                {studioImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-300 ${
                      selectedImageIndex === index
                        ? "ring-2 ring-orange-500 ring-offset-2 scale-105"
                        : "opacity-60 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />

                    {/* Selected Indicator */}
                    {selectedImageIndex === index && (
                      <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Image Info */}
              <div className="flex items-center justify-between text-sm text-neutral-600">
                <span>{studioImages[selectedImageIndex].alt}</span>
                <span className="text-neutral-400">
                  {selectedImageIndex + 1} of {studioImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="relative overflow-hidden py-12 mt-10">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="absolute inset-0"></div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-blue-700 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-blue-700 transition-colors">
                <div className="text-blue-200 mb-3">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Premium Equipment
                </h3>
                <p className="text-white/80 text-sm">
                  Industry-standard gear and acoustic treatment for pristine
                  recordings.
                </p>
              </div>

              <div className="bg-blue-700 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-blue-700  transition-colors">
                <div className="text-blue-200 mb-3">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Flexible Booking
                </h3>
                <p className="text-white/80 text-sm">
                  Hourly, daily, or project-based rates to fit your schedule and
                  budget.
                </p>
              </div>

              <div className="bg-blue-700 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-blue-700  transition-colors">
                <div className="text-blue-200 mb-3">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Expert Support
                </h3>
                <p className="text-white/80 text-sm">
                  Optional engineering support to help bring your vision to
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
