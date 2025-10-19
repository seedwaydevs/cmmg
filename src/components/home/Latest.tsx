"use client";
import { Schibsted_Grotesk } from "next/font/google";
import React, { useState } from "react";
import Image from "next/image";
import { TiArrowSortedUp } from "react-icons/ti";
import Link from "next/link";
import { image2, yandi, landj, njalo, cstaz, tms } from "@/data";
import { GrAppleMusic } from "react-icons/gr";
import { BsApple, BsSpotify } from "react-icons/bs";
import { SiApplemusic, SiYoutubemusic } from "react-icons/si";
import { FaDeezer } from "react-icons/fa6";

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
    tracks: [
      {
        id: 1,
        title: "Njalo",
        duration: "4:45",
      },
    ],
    links: [
      {
        id: 1,
        name: "Spotify",
        icon: <BsSpotify className="w-5 h-5 text-neutral-100" />,
        link: "https://open.spotify.com/album/5h2VjDhjhrJMHkZFvAf8QM?si=rSxSoLsbQXOH3jaE7PWp_w",
      },
      {
        id: 2,
        name: "Apple Music",
        icon: <SiApplemusic className="w-5 h-5 text-neutral-100" />,
        link: "https://music.apple.com/za/album/njalo/1837463602?i=1837463617",
      },
      {
        id: 3,
        name: "Deezer",
        icon: <FaDeezer className="w-5 h-5 text-neutral-100" />,
        link: "https://link.deezer.com/s/312O7qMbJFBNYJWDTRZtD",
      },
      {
        id: 4,
        name: "YouTube Music",
        icon: <SiYoutubemusic className="w-5 h-5 text-neutral-100" />,
        link: "https://music.youtube.com/watch?v=VbaR7iUSnVg&si=kd8KAW6WabhEfqiq",
      },
    ],
  },
  {
    id: 2,
    title: "Jesu Msindisi",
    artist: "L & J CSTAZ",
    releaseDate: "Coming Soon",
    coverImage: cstaz, // Replace with fourth album cover
    tracks: [
      { id: 1, title: "Bless The Lord", duration: "03:46" },
      { id: 2, title: "Jesu Msindisi", duration: "04:10" },
      { id: 3, title: "Kungokwami Ukuthula", duration: "02:34" },
      { id: 4, title: "Ngitsheliwe", duration: "03:54" },
      { id: 5, title: "Uyalalelwa Umoya", duration: "03:00" },
    ],
  },
  {
    id: 3,
    title: "Live Culture",
    artist: "Abe Sibiya",
    releaseDate: "Coming Soon",
    coverImage: image2, // Replace with your album cover path
    tracks: [
      { id: 1, title: "Celestial Nights", duration: "3:42" },
      { id: 2, title: "Whispers in the Dark", duration: "4:15" },
      { id: 3, title: "Neon Dreams", duration: "3:28" },
      { id: 4, title: "Starlight Serenade", duration: "4:52" },
      { id: 5, title: "Electric Hearts", duration: "3:36" },
      { id: 6, title: "Moonbeam Dance", duration: "4:08" },
    ],
    links: [],
  },
  {
    id: 4,
    title: "The Morning Service",
    artist: "Abe Sibiya",
    releaseDate: "Coming Soon",
    coverImage: tms, // Replace with your album cover path
    tracks: [{ id: 1, title: "The Morning Service", duration: "3:42" }],
    links: [],
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
          <>
            <div className="absolute inset-0 blur-md bg-[#bdb4a5]"></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        <div className="w-[90%] mx-auto h-full py-14">
          <div className="flex flex-col xl:flex-row items-center justify-center gap-5 mb-8 px-10">
            {/* Header */}
            <div className=" text-neutral-200 py-10 flex flex-col md:items-center md:text-center xl:items-start xl:text-start justify-center space-y-5">
              <h1
                className={`text-4xl lg:text-6xl lg:max-w-2xl font-bold  text-neutral-100 `}
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
              <div>
                <p className="capitalize font-semibold text-neutral-100 hover:text-white hover:bg-neutral-800 px-3 py-2 rounded-xl cursor-pointer">
                  [ choose a cover ]
                </p>
              </div>
            </div>

            {/* Album Grid */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2  gap-6">
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
                        width={200}
                        height={400}
                        className="w-full h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                      {/* Overlay Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3
                          className={` text-white font-bold text-lg lg:text-xl mb-1`}
                        >
                          {album.title}
                        </h3>
                        <p className={` text-gray-300 text-sm lg:text-base`}>
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
            <div className="lg:w-[80%] mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8 animate-in slide-in-from-bottom duration-300">
              {/* Album Header */}
              <div className="mb-6 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:space-x-4 items-center lg:items-end">
                  <h1
                    className={` text-2xl lg:text-3xl font-bold mb-2 lg:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300`}
                  >
                    {selectedAlbum.title}
                  </h1>
                  <h2
                    className={` text-lg lg:text-xl font-medium text-gray-300 mb-2 lg:mb-0`}
                  >
                    by {selectedAlbum.artist}
                  </h2>
                </div>
                <p className={` text-gray-400 text-base`}>
                  Released {selectedAlbum.releaseDate}
                </p>
              </div>

              {/* Tracklist */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 text-white`}>
                  Tracklist
                </h3>

                <div className="space-y-1 max-h-80 overflow-y-auto">
                  {selectedAlbum.tracks.map((track, index) => (
                    <div
                      key={track.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group cursor-posted"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-gray-400 font-medium w-8 text-center group-hover:text-white transition-colors text-sm`}
                        >
                          {track.id.toString().padStart(2, "0")}
                        </span>
                        <span
                          className={`text-white font-medium group-hover:text-gray-100 text-sm lg:text-base`}
                        >
                          {track.title}
                        </span>
                      </div>
                      <div
                        className={`text-white font-medium group-hover:text-gray-300 transition-colors text-sm`}
                      >
                        <ul className="flex space-x-5">
                          {selectedAlbum.links?.map((plat) => (
                            <li key={plat.id}>
                              <Link href={plat.link}>{plat.icon}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Album Stats */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-6 text-sm text-gray-400">
                  <span>{selectedAlbum.tracks.length} tracks</span>
                  <span>
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
