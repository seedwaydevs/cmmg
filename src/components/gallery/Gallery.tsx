"use client";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Hanken_Grotesk } from "next/font/google";
import { stu1, stu2, stu3, stu4, stu5, stu6, stu7, stu8 } from "@/data";
import Image, { StaticImageData } from "next/image";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Define type for gallery item
type GalleryItem = {
  id: number;
  url: string | StaticImageData;
  caption: string;
};

// Test data for gallery images
const galleryData = [
  {
    id: 1,
    url: stu4,
    caption: "Listening session with Orchard Music Group",
  },
  {
    id: 2,
    url: stu5,
    caption: "Listening session with Orchard Music Group",
  },
  {
    id: 3,
    url: stu3,
    caption: "CMMG and The Orchard Team picture.",
  },
  {
    id: 4,
    url: stu1,
    caption: "L&J Cstaz session in our studio.",
  },
  {
    id: 5,
    url: stu2,
    caption: "L&J Cstaz session in our studio.",
  },
  {
    id: 6,
    url: stu6,
    caption: "Mixing and Mastering tracks in studio",
  },
  {
    id: 7,
    url: stu7,
    caption: "Studio kits",
  },
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (image: GalleryItem, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryData.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryData[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + galleryData.length) % galleryData.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryData[prevIndex]);
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
    <div className="w-full py-20 bg-white">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center mb-20 mt-32 ">
          <h2
            className={`${hanken.className} text-4xl lg:text-6xl font-bold text-black mb-4`}
          >
            Studio Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Behind the scenes moments, recording sessions, and memorable events
            from our journey in music
          </p>
        </div>

        {/* Gallery Grid with Offset Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryData.map((image, index) => (
            <div
              key={image.id}
              className={`break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg ${
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
              <Image
                src={image.url}
                alt={image.caption}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm line-clamp-2">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-full w-full h-full flex flex-col">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div
              className="flex-1 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>

            {/* Caption */}
            <div className="bg-black/80 text-white p-6 text-center">
              <p
                className={`${hanken.className} text-lg lg:text-xl font-medium`}
              >
                {selectedImage.caption}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {currentIndex + 1} of {galleryData.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
