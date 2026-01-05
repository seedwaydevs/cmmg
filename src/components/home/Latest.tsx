"use client";
import { Schibsted_Grotesk } from "next/font/google";
import React, { useState } from "react";
import Image from "next/image";
import { TiArrowSortedUp } from "react-icons/ti";

import { image2, njalo, cstaz, tms, tms2, nkanyamba } from "@/data";
import Link from "next/link";

type Props = {};

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Album gallery data - replace with your actual albums
const albumsData = [
  {
    id: 1,
    title: "Njalo",
    artist: "YandiSibi",
    releaseDate: "September 12, 2025",
    coverImage: njalo, // Replace with third album cover
    link: "https://open.spotify.com/embed/track/7DtN0ksb5UH0TSl0aFfdVB?utm_source=generator",
  },
  {
    id: 2,
    title: "Jesu Msindisi",
    artist: "L & J CSTAZ",
    releaseDate: "Coming Soon",
    coverImage: cstaz, // Replace with fourth album cover
    link: "https://open.spotify.com/embed/album/3HeSTciM2xJ9omxiyrijOc?utm_source=generator",
  },

  /*
   *<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7DtN0ksb5UH0TSl0aFfdVB?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
   */
  {
    id: 3,
    title: "Live Culture",
    artist: "Abe Sibiya",
    releaseDate: "Coming Soon",
    coverImage: image2, // Replace with your album cover path
    link: "https://open.spotify.com/embed/album/7ET7RwAOI658wECgo2gq3o?utm_source=generator",
  },
  {
    id: 4,
    title: "The Morning Service",
    artist: "Abe Sibiya",
    releaseDate: "Coming Soon",
    coverImage: tms2, // Replace with your album cover path
    link: "https://open.spotify.com/embed/album/7ycsy7jxkODp286ZmGACnC?utm_source=generator",
  },
  {
    id: 5,
    title: "Imfihlo Kamakoti",
    artist: "Nkanyamba",
    releaseDate: "Coming Soon",
    coverImage: nkanyamba, // Replace with your album cover path
    link: "https://open.spotify.com/embed/album/6zmGMomhs1gfMgA9gHkxdO?utm_source=generator",
  },
];

const Latest = (props: Props) => {
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState<number | null>(
    null
  );
  const selectedAlbum =
    selectedAlbumIndex !== null ? albumsData[selectedAlbumIndex] : null;

  return (
    <div className="w-full relative overflow-hidden py-5">
      {/* Blurred Background */}
      <div className="absolute inset-0 z-0">
        {selectedAlbum && (
          <>
            <Image
              src={selectedAlbum.coverImage}
              alt={`${selectedAlbum.title} background`}
              fill
              className="object-cover blur-xl scale-110 opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </>
        )}
        {!selectedAlbum && (
          <>
            <div className="absolute inset-0  bg-[#828180]"></div>
            <div className="absolute inset-0 bg-white/30"></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full ">
        <div className="w-[90%] lg:w-[80%] mx-auto h-full py-5">
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-500 h-7 w-7 lg:h-10 lg:w-10" />
            <div className="backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10 ml-2">
              <p
                className={`${sted.className} text-xs uppercase lg:text-sm font-bold tracking-widest text-white/90`}
              >
                [ Record Label ]
              </p>
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col xl:flex-row items-center justify-between gap-10 mb-8">
            {/* Header */}
            <div className="text-neutral-200 py-10 flex flex-col md:items-center md:text-center xl:items-start xl:text-start justify-center space-y-5">
              <h1
                className={`text-4xl lg:text-7xl lg:max-w-2xl font-extrabold  text-neutral-100 text-shadow-lg ${
                  selectedAlbum
                    ? "text-shadow-neutral-600/20"
                    : "text-shadow-neutral-400"
                } `}
              >
                Latest Commercial Albums
              </h1>
              <div className="max-w-2xl md:text-center xl:text-start">
                <p
                  className={`text-md lg:text-lg lg:max-w-xl text-neutral-100 leading-relaxed mb-4`}
                >
                  Discover our most recent commercial releases, featuring our
                  exceptional artists and captivating soundscapes that define
                  contemporary music.
                </p>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2">
                <button
                  onClick={() => setSelectedAlbumIndex(1)}
                  className={`${sted.className} group relative inline-flex items-center justify-center gap-2 
                             bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 
                             text-white font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-md transition-all duration-300 
                             shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-0.5 
                             border border-orange-400/20 text-sm lg:text-base`}
                >
                  <span>Pick An Album</span>
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12v3m3-6v9m3-12v15m3-12v9m3-6v3"
                    />
                  </svg>
                </button>

                <Link
                  href={"/commercial"}
                  className={`${sted.className} group inline-flex items-center justify-center gap-2 
                             bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-3 lg:px-8 lg:py-4 
                             rounded-md border-2 border-white/20 hover:border-white/40 
                             transition-all duration-300 text-sm lg:text-base`}
                >
                  <span>Learn More</span>

                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Album Grid */}
            <div className="flex justify-center">
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-3 gap-4 md:gap-5 w-full max-w-7xl">
                {albumsData.map((album, index) => (
                  <button
                    key={album.id}
                    onClick={() =>
                      setSelectedAlbumIndex(
                        selectedAlbumIndex === index ? null : index
                      )
                    }
                    className={`relative group transition-all duration-300 ${
                      selectedAlbumIndex === index
                        ? "scale-105 ring-2 ring-orange-500/70 rounded-2xl"
                        : "hover:scale-102 hover:shadow-2xl"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-2xl aspect-square">
                      <Image
                        src={album.coverImage}
                        alt={album.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                      {/* Overlay Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white font-bold text-sm md:text-base lg:text-lg mb-1">
                          {album.title}
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm">
                          {album.artist}
                        </p>
                      </div>

                      {/* Selected Indicator */}
                      {selectedAlbumIndex === index && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-orange-600 rounded-full p-2">
                            <TiArrowSortedUp className="text-white w-4 h-4 rotate-180" />
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Album Details */}
          {selectedAlbum && (
            <div className=" mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8 animate-in slide-in-from-bottom duration-300">
              {/* Album Header */}
              {selectedAlbum?.link === "" ? (
                <div className="flex flex-col items-center justify-center py-16 px-6">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-blue-orange/10 to-orange-500/10 p-6 rounded-full border border-orange-400/20">
                      <svg
                        className="w-12 h-12 text-orange-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Text */}
                  <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent mb-3">
                    Coming Soon
                  </h2>
                  <p className="text-gray-300 text-center max-w-md">
                    This album is currently in production. Check back soon to
                    listen!
                  </p>

                  {/* Optional: Animated dots */}
                  <div className="flex gap-2 mt-6">
                    <span className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-75"></span>
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-150"></span>
                  </div>
                </div>
              ) : (
                <iframe
                  data-testid="embed-iframe"
                  className="border-radius:12px"
                  src={selectedAlbum.link}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  // allowfullscreen="false"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Latest;
