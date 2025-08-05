import { Hanken_Grotesk, Inter_Tight } from "next/font/google";
import React from "react";
import Image from "next/image";
import { TiArrowSortedUp } from "react-icons/ti";
import Link from "next/link";
import { image2 } from "@/data";

type Props = {};

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Dummy album data - replace with your actual data
const albumData = {
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
};

const Latest = (props: Props) => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={albumData.coverImage}
          alt={`${albumData.title} background`}
          fill
          className="object-cover blur-3xl scale-110 opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center py-8">
        <div className="w-[90%] max-w-6xl mx-auto h-full">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-center h-full">
            {/* Album Cover Section */}
            <div className="flex-shrink-0 lg:w-1/3 w-full flex justify-center">
              <div className="relative group">
                <Image
                  src={albumData.coverImage}
                  alt={albumData.title}
                  width={350}
                  height={350}
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Album Info and Tracklist */}
            <div className="flex-1 text-white w-full flex flex-col justify-center min-h-0">
              {/* Album Info */}
              <div className="mb-6">
                <h1
                  className={`${hanken.className} text-3xl lg:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300`}
                >
                  {albumData.title}
                </h1>
                <h2
                  className={`${inter.className} text-lg lg:text-xl font-medium text-gray-300 mb-2`}
                >
                  by {albumData.artist}
                </h2>
                <p className={`${inter.className} text-gray-400 text-base`}>
                  Released {albumData.releaseDate}
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
                  {albumData.tracks.map((track, index) => (
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
                    {albumData.tracks.length} tracks
                  </span>
                  <span className={inter.className}>
                    Total duration:{" "}
                    {Math.floor(
                      albumData.tracks.reduce((acc, track) => {
                        const [minutes, seconds] = track.duration
                          .split(":")
                          .map(Number);
                        return acc + minutes * 60 + seconds;
                      }, 0) / 60
                    )}
                    :
                    {String(
                      albumData.tracks.reduce((acc, track) => {
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
