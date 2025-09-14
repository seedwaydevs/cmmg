"use client";
import { useState } from "react";
import Image from "next/image";
import { Schibsted_Grotesk } from "next/font/google";
import {
  Play,
  Clock,
  Zap,
  Headphones,
  Wifi,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

// Dummy image imports - replace these with your actual images
import { hire1, hire2, hire3, hire4, hire5, hire6, hire7, hire8 } from "@/data";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-schibsted",
});

const features = [
  {
    icon: Headphones,
    title: "Acoustic Treatment",
    description: "Acoustically treated recording booths",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "24/7 access with solar backup",
  },
  {
    icon: Play,
    title: "Pro Software",
    description: "Pro Tools, Logic, Cubase, FL Studio, and more",
  },
  {
    icon: Users,
    title: "Client Lounge",
    description: "Private office space and client lounge",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "High-speed fibre internet",
  },
  {
    icon: Zap,
    title: "Engineer Support",
    description: "Engineer available on request",
  },
];

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

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % studioImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + studioImages.length) % studioImages.length
    );
  };

  return (
    <section
      id="3"
      className={`${schibstedGrotesk.variable} font-sans py-20 bg-gradient-to-br from-green-50/30 via-white to-emerald-50/20 relative overflow-hidden`}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-100 to-transparent rounded-full blur-2xl opacity-20"></div>

      <div className="relative w-[90%] lg:w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16">
          {/* Content Block */}
          <div className="flex-1 space-y-8">
            {/* Service Number & Badge */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 text-white text-2xl font-black rounded-2xl shadow-lg">
                03
              </div>
              <div className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-600 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <Play className="w-4 h-4" />
                Studio Rental
              </div>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Studio
                <br />
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  Hire
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Need a space to record, mix, create, or collaborate? Our{" "}
              <span className="text-green-500 font-semibold">
                professional-grade studios
              </span>{" "}
              are soundproofed, solar-backed, and built for all types of
              production — from songwriting and voiceover to{" "}
              <span className="text-emerald-500 font-semibold">
                live sessions and late-night edits
              </span>
              .
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 text-green-600 rounded-lg group-hover:from-green-200 group-hover:to-emerald-200 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book a Studio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Studio Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Access</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Solar</div>
                <div className="text-sm text-gray-600">Powered</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Pro</div>
                <div className="text-sm text-gray-600">Equipment</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Gallery */}
          <div className="flex-1 space-y-6">
            {/* Main Image Container */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
                <Image
                  src={studioImages[selectedImageIndex].src}
                  alt={studioImages[selectedImageIndex].alt}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Image overlay with controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedImageIndex + 1} / {studioImages.length}
                </div>
              </div>

              {/* Studio Status Badge */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Thumbnail Gallery */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-gray-900">
                  Studio Gallery
                </h4>
                <div className="text-sm text-gray-500">
                  {selectedImageIndex + 1} of {studioImages.length}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {studioImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative overflow-hidden rounded-lg transition-all duration-300 group ${
                      selectedImageIndex === index
                        ? "ring-2 ring-green-500 ring-offset-2 opacity-100 scale-105"
                        : "opacity-70 hover:opacity-100 hover:scale-102"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-16 object-cover"
                    />

                    {/* Thumbnail overlay */}
                    <div
                      className={`absolute inset-0 transition-all duration-200 ${
                        selectedImageIndex === index
                          ? "bg-green-500/20"
                          : "bg-transparent group-hover:bg-white/20"
                      }`}
                    ></div>

                    {/* Selected indicator */}
                    {selectedImageIndex === index && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Play className="w-3 h-3 text-white fill-current" />
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceStudioHire;
