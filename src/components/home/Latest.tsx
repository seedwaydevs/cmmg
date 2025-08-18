"use client";
import { Hanken_Grotesk, Inter_Tight } from "next/font/google";
import React, { useState } from "react";
import Image from "next/image";
import { TiArrowSortedUp } from "react-icons/ti";
import Link from "next/link";
import { image2, yandi, image8, image9 } from "@/data";

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
    title: "Analog Waves",
    artist: "Sound Engineers",
    releaseDate: "November 22, 2023",
    coverImage: image8, // Replace with third album cover
    tracks: [
      { id: 1, title: "Vintage Frequencies", duration: "4:45" },
      { id: 2, title: "Tape Machine Blues", duration: "3:29" },
      { id: 3, title: "Warm Compression", duration: "4:07" },
      { id: 4, title: "Studio Sessions", duration: "3:52" },
      { id: 5, title: "Analog Dreams", duration: "4:28" },
    ],
  },
  {
    id: 4,
    title: "Midnight Jazz",
    artist: "Luna Quartet",
    releaseDate: "September 5, 2023",
    coverImage: image9, // Replace with fourth album cover
    tracks: [
      { id: 1, title: "Blue Hour", duration: "5:12" },
      { id: 2, title: "Smoky Lounge", duration: "4:38" },
      { id: 3, title: "After Hours", duration: "4:55" },
      { id: 4, title: "Cool Breeze", duration: "3:47" },
      { id: 5, title: "Night Train", duration: "4:22" },
      { id: 6, title: "Dawn Breaks", duration: "4:03" },
    ],
  },
];

const Latest = (props: Props) => {
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(0);
  const selectedAlbum = albumsData[selectedAlbumIndex];

  return (
    <div className="w-full relative overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={selectedAlbum.coverImage}
          alt={`${selectedAlbum.title} background`}
          fill
          className="object-cover blur-xl scale-110 opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center py-8">
        <div className="w-[90%] mx-auto h-full">
          <div className="py-10 text-white">
            <h1 className="text-lg lg:text-4xl font-bold">Latest Albums</h1>
            <p>Indulge in our latest commercial releases.</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-center h-full">
            {/* Album Cover Section */}
            <div className="flex-shrink-0 lg:w-1/3 w-full flex flex-col items-center">
              {/* Main Album Cover */}
              <div className="relative group mb-6">
                <Image
                  src={selectedAlbum.coverImage}
                  alt={selectedAlbum.title}
                  width={350}
                  height={350}
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl shadow-2xl"
                  priority
                />
              </div>

              {/* Album Thumbnails Gallery */}
              <div className="grid grid-cols-4 gap-3 w-full max-w-sm">
                {albumsData.map((album, index) => (
                  <button
                    key={album.id}
                    onClick={() => setSelectedAlbumIndex(index)}
                    className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                      selectedAlbumIndex === index
                        ? "ring-2 ring-orange-600 opacity-100 scale-105"
                        : "opacity-60 hover:opacity-90 hover:scale-102"
                    }`}
                  >
                    <Image
                      src={album.coverImage}
                      alt={album.title}
                      width={80}
                      height={80}
                      className="w-full h-20 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Album Info and Tracklist */}
            <div className="flex-1 text-white w-full flex flex-col justify-center min-h-0">
              {/* Album Info */}
              <div className="mb-6">
                <div className="flex flex-col lg:flex-row lg:items-end lg:space-x-2">
                  <h1
                    className={`${hanken.className} text-3xl lg:text-4xl font-bold mb-3 lg:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300`}
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
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 flex-1 min-h-0">
                <h3
                  className={`${hanken.className} text-xl font-semibold mb-4 text-white`}
                >
                  Tracklist
                </h3>

                <div className="space-y-1 overflow-y-auto max-h-64">
                  {selectedAlbum.tracks.map((track, index) => (
                    <div
                      key={track.id}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200 group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`${inter.className} text-gray-400 font-medium w-6 text-center group-hover:text-white transition-colors text-sm`}
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
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-4 text-sm text-gray-400">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
