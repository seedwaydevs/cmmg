"use client";
import { Hanken_Grotesk, Inter_Tight } from "next/font/google";
import React, { useState } from "react";
import Image from "next/image";
import { TiArrowSortedUp } from "react-icons/ti";
import Link from "next/link";
import { image2, yandi, landj, njalo } from "@/data";

type Props = {};

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Album gallery data - replace with your actual albums
const albumsData = [
  {
    id: 1,
    title: "Live Culture",
    artist: "Abe Sibiya",
    releaseDate: "March 15, 2024",
    coverImage: image2, // Replace with your album cover path
    tracks: [
      { id: 1, title: "Celestial Nights", duration: "3:42" },
      { id: 2, title: "Whispers in the Dark", duration: "4:15" },
      { id: 3, title: "Neon Dreams", duration: "3:28" },
      { id: 4, title: "Starlight Serenade", duration: "4:52" },
      { id: 5, title: "Electric Hearts", duration: "3:36" },
      { id: 6, title: "Moonbeam Dance", duration: "4:08" },
    ],
  },
  {
    id: 2,
    title: "Expressions of HER",
    artist: "Yandii",
    releaseDate: "October 24, 2025",
    coverImage: yandi, // Replace with second album cover
    tracks: [
      { id: 1, title: "City Pulse", duration: "4:23" },
      { id: 2, title: "Concrete Dreams", duration: "3:56" },
      { id: 3, title: "Midnight Streets", duration: "4:12" },
      { id: 4, title: "Neon Reflections", duration: "3:45" },
      { id: 5, title: "Underground Flow", duration: "4:01" },
      { id: 6, title: "Rooftop Sunrise", duration: "5:18" },
      { id: 7, title: "Metro Rhythms", duration: "3:33" },
    ],
  },
  {
    id: 3,
    title: "Njalo",
    artist: "Yandii",
    releaseDate: "September 25, 2025",
    coverImage: njalo, // Replace with third album cover
    tracks: [{ id: 1, title: "Njalo", duration: "4:45" }],
  },
  {
    id: 4,
    title: "Jesu Msindisi",
    artist: "L & J CSTAZ",
    releaseDate: "September 9, 2025",
    coverImage: landj, // Replace with fourth album cover
    tracks: [
      { id: 1, title: "Heavenly Hour", duration: "5:12" },
      { id: 2, title: "Sacred Praise", duration: "4:38" },
      { id: 3, title: "In His Presence", duration: "4:55" },
      { id: 4, title: "Spirit Wind", duration: "3:47" },
      { id: 5, title: "Glory Train", duration: "4:22" },
      { id: 6, title: "Morning Mercy", duration: "4:03" },
    ],
  },
];

const Latest = (props: Props) => {
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState<number | null>(
    null
  );
  const selectedAlbum =
    selectedAlbumIndex !== null ? albumsData[selectedAlbumIndex] : null;

  return (
    <div className="w-full relative overflow-hidden ">
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
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-white to-gray-400"></div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        <div className="w-[90%] mx-auto h-full py-10 pb-10">
          {/* Header */}
          <div className="text-white py-10">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Latest Commercial Albums
            </h1>
            <p>Indulge in our latest commercial releases.</p>
          </div>

          {/* Album Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
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
                    ? "scale-105 ring-2 ring-orange-600 rounded-2xl"
                    : "hover:scale-102 hover:shadow-2xl"
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    width={300}
                    height={300}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3
                      className={`${hanken.className} text-white font-bold text-lg lg:text-xl mb-1`}
                    >
                      {album.title}
                    </h3>
                    <p
                      className={`${inter.className} text-gray-300 text-sm lg:text-base`}
                    >
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

          {/* Selected Album Details */}
          {selectedAlbum && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8 animate-in slide-in-from-bottom duration-300">
              {/* Album Header */}
              <div className="mb-6 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:space-x-4 items-center lg:items-end">
                  <h1
                    className={`${hanken.className} text-2xl lg:text-3xl font-bold mb-2 lg:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300`}
                  >
                    {selectedAlbum.title}
                  </h1>
                  <h2
                    className={`${inter.className} text-lg lg:text-xl font-medium text-gray-300 mb-2 lg:mb-0`}
                  >
                    by {selectedAlbum.artist}
                  </h2>
                </div>
                <p className={`${inter.className} text-gray-400 text-base`}>
                  Released {selectedAlbum.releaseDate}
                </p>
              </div>

              {/* Tracklist */}
              <div>
                <h3
                  className={`${hanken.className} text-xl font-semibold mb-4 text-white`}
                >
                  Tracklist
                </h3>

                <div className="space-y-1 max-h-80 overflow-y-auto">
                  {selectedAlbum.tracks.map((track, index) => (
                    <div
                      key={track.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`${inter.className} text-gray-400 font-medium w-8 text-center group-hover:text-white transition-colors text-sm`}
                        >
                          {track.id.toString().padStart(2, "0")}
                        </span>
                        <span
                          className={`${inter.className} text-white font-medium group-hover:text-gray-100 text-sm lg:text-base`}
                        >
                          {track.title}
                        </span>
                      </div>
                      <span
                        className={`${inter.className} text-gray-400 font-medium group-hover:text-gray-300 transition-colors text-sm`}
                      >
                        {track.duration}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Album Stats */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-6 text-sm text-gray-400">
                  <span className={inter.className}>
                    {selectedAlbum.tracks.length} tracks
                  </span>
                  <span className={inter.className}>
                    Total duration:{" "}
                    {Math.floor(
                      selectedAlbum.tracks.reduce((acc, track) => {
                        const [minutes, seconds] = track.duration
                          .split(":")
                          .map(Number);
                        return acc + minutes * 60 + seconds;
                      }, 0) / 60
                    )}
                    :
                    {String(
                      selectedAlbum.tracks.reduce((acc, track) => {
                        const [minutes, seconds] = track.duration
                          .split(":")
                          .map(Number);
                        return acc + minutes * 60 + seconds;
                      }, 0) % 60
                    ).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Latest;
