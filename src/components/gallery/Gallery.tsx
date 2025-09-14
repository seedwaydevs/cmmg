"use client";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera, Eye } from "lucide-react";
import { Schibsted_Grotesk } from "next/font/google";
import { stu1, stu2, stu3, stu4, stu5, stu6, stu7, stu8 } from "@/data";
import Image, { StaticImageData } from "next/image";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-schibsted",
});

// Define type for gallery item
type GalleryItem = {
  id: number;
  url: string | StaticImageData;
  caption: string;
  category: string;
};

// Enhanced gallery data with categories
const galleryData = [
  {
    id: 1,
    url: stu4,
    caption: "Listening session with Orchard Music Group",
    category: "Sessions",
  },
  {
    id: 2,
    url: stu5,
    caption: "Listening session with Orchard Music Group",
    category: "Sessions",
  },
  {
    id: 3,
    url: stu3,
    caption: "CMMG and The Orchard Team picture.",
    category: "Events",
  },
  {
    id: 4,
    url: stu1,
    caption: "L&J Cstaz session in our studio.",
    category: "Recording",
  },
  {
    id: 5,
    url: stu2,
    caption: "L&J Cstaz session in our studio.",
    category: "Recording",
  },
  {
    id: 6,
    url: stu6,
    caption: "Mixing and Mastering tracks in studio",
    category: "Production",
  },
  {
    id: 7,
    url: stu7,
    caption: "Studio kits",
    category: "Equipment",
  },
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(galleryData.map((item) => item.category))),
  ];

  const filteredData =
    filter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  const openModal = (image: GalleryItem, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredData.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredData[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + filteredData.length) % filteredData.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredData[prevIndex]);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeModal();
  };

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, currentIndex]);

  return (
    <section
      className={`${schibstedGrotesk.variable} font-sans w-full py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50/20 relative overflow-hidden`}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-2xl opacity-20"></div>

      <div className="relative w-[90%] lg:w-[85%] mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 my-10">
            <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
              <Camera className="text-white h-5 w-5" />
            </div>
            <span className="text-sm  font-medium uppercase tracking-wider text-gray-600 bg-white px-4 py-2 rounded-full border">
              Our Work
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Studio{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6"></div>

          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Behind the scenes moments,{" "}
            <span className="text-orange-500 font-semibold">
              recording sessions
            </span>
            , and memorable events from our journey in music
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                filter === category
                  ? "bg-orange-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-orange-200 hover:text-orange-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredData.map((image, index) => (
            <div
              key={image.id}
              className={`break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white ${
                index % 4 === 0
                  ? "mt-0"
                  : index % 4 === 1
                  ? "mt-8"
                  : index % 4 === 2
                  ? "mt-16"
                  : "mt-4"
              }`}
              onClick={() => openModal(image, index)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  {image.category}
                </div>

                {/* View Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-white text-sm font-medium line-clamp-2">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="flex items-center justify-center gap-8 mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">
              {galleryData.length}
            </div>
            <div className="text-sm text-gray-600">Photos</div>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">
              {categories.length - 1}
            </div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">100+</div>
            <div className="text-sm text-gray-600">Sessions</div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 bg-black/50 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">
                  Gallery View
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">
                  {currentIndex + 1} of {filteredData.length}
                </span>
                <button
                  onClick={closeModal}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div
              className="flex-1 flex items-center justify-center p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Enhanced Caption */}
            <div className="bg-black/80 backdrop-blur text-white p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {selectedImage.category}
                    </span>
                  </div>
                  <p className="text-xl lg:text-2xl font-semibold mb-2">
                    {selectedImage.caption}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Image {currentIndex + 1} of {filteredData.length} in{" "}
                    {filter === "All" ? "gallery" : filter}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
