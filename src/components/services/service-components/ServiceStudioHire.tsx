"use client";
import { useState } from "react";
import Image from "next/image";

// Dummy image imports - replace these with your actual images
import { hire1, hire2, hire3, hire4, hire5, hire6, hire7, hire8 } from "@/data";

const ServiceStudioHire = () => {
  // Image gallery data
  const studioImages = [
    {
      id: 1,
      src: hire1,
      alt: "Studio interior overview",
    },
    {
      id: 2,
      src: hire2,
      alt: "Acoustically treated recording booth",
    },
    {
      id: 3,
      src: hire3,
      alt: "Professional mixing desk",
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

  return (
    <section
      id="3"
      className="flex flex-col lg:flex-row lg:items-center gap-10 py-10"
    >
      {/* Content */}
      <div className="flex-1 space-y-4">
        <p className="text-orange-600 font-semibold text-xl">03</p>
        <h2 className="text-3xl font-bold">Studio Hire</h2>
        <p className="text-lg text-gray-700">
          Need a space to record, mix, create, or collaborate? Our
          professional-grade studios are soundproofed, solar-backed, and built
          for all types of production — from songwriting and voiceover to live
          sessions and late-night edits.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Acoustically treated recording booths</li>
          <li>24/7 access with solar backup</li>
          <li>Pro Tools, Logic, Cubase, FL Studio, and more</li>
          <li>Private office space and client lounge</li>
          <li>High-speed fibre internet</li>
          <li>Engineer available on request</li>
        </ul>
        <a
          href="/book"
          className="inline-block mt-4 bg-orange-600 text-white px-6 py-2 rounded-sm"
        >
          Book a Studio
        </a>
      </div>

      {/* Image Gallery */}
      <div className="flex-1 space-y-4">
        {/* Main Image */}
        <div className="w-full">
          <Image
            src={studioImages[selectedImageIndex].src}
            alt={studioImages[selectedImageIndex].alt}
            className="rounded w-full h-80 object-cover"
          />
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-5 gap-2">
          {studioImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative overflow-hidden rounded transition-all duration-200 ${
                selectedImageIndex === index
                  ? "ring-2 ring-orange-600 opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-16 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStudioHire;
