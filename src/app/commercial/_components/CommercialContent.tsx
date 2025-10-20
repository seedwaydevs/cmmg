import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  yandi,
  njalo,
} from "@/data";

import bg from "../../../../public/servicebg.jpeg";
import { BsSpotify } from "react-icons/bs";
import { SiApplemusic, SiYoutubemusic } from "react-icons/si";
import { FaDeezer } from "react-icons/fa6";
import { Schibsted_Grotesk } from "next/font/google";

type Props = {};

// Featured albums array - ready for 3 more entries
const featuredAlbums = [
  {
    title: "Njalo",
    artist: "YandiSibi",
    image: njalo,
    releaseDate: "2025",
    description:
      "Yandi finally drops her highly anticipated single, Njalo! With an electrifying performance that's guaranteed to get you on your feet, she's bringing pure energy and vibes.",
    tracks: [{ title: "Njalo", duration: "4:21" }],
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
  // Add 3 more albums here tomorrow with the same structure
  // {
  //   title: "Album Title 2",
  //   artist: "Artist Name",
  //   image: imageVariable,
  //   releaseDate: "2025",
  //   description: "Album description...",
  //   tracks: [{ title: "Track name", duration: "3:45" }],
  //   links: [...],
  // },
];

// Mock data for albums
const latestAlbums = [
  {
    title: "Free",
    image: image1,
    artist: "Leighton Lucas",
  },
  {
    title: "Nocturne Ballads",
    image: image2,
    artist: "Crystal Lake",
  },
  {
    title: "BandOf4",
    image: image3,
    artist: "Gilbert Winter",
  },
  {
    title: "In My Head",
    image: image4,
    artist: "max.exe",
  },
  {
    title: "Mid East",
    image: image5,
    artist: "Kyle Wright",
  },
  {
    title: "Lost Highway",
    image: image6,
    artist: "Amanda Brown",
  },
];

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const CommercialContent = (props: Props) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-black text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={njalo}
            alt="Recording artist in professional studio"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0">
          <Image
            src={njalo}
            alt="Recording artist in professional studio"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Frosted Glass Overlay */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-white/20 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="w-[90%] lg:w-[80%] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium tracking-wide">
                    COMMERCIAL RELEASES
                  </span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                    Commercial
                    <span className="text-orange-500 block">Music</span>
                  </h1>

                  <p className="text-lg lg:text-lg text-gray-200 md:leading-snug max-w-lg font-light">
                    Premium commercial releases from our signed artists and
                    established musicians. Discover the latest singles, albums,
                    and exclusive tracks ready for streaming and purchase.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="#"
                    className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5"
                  >
                    Explore Releases
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="www.library.cmmg.co.za"
                    className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    Production Library
                    <svg
                      className="w-5 h-5 transition-transform group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Stats */}
                <div className="hidden md:grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                  <div>
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">
                      Artists
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">200+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">
                      Releases
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">1M+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">
                      Streams
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Featured Album/Artist */}
              <div className="hidden lg:flex justify-end">
                <div className="relative group">
                  {/* Album Cover */}
                  <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={njalo}
                      alt="Featured album cover"
                      fill
                      className="object-cover"
                      sizes="320px"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-400 transition-colors">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Album Info Card */}
                  <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 min-w-64">
                    <h3 className="text-lg font-bold text-white mb-1">
                      Latest Release
                    </h3>
                    <p className="text-orange-400 font-medium mb-2">
                      Yandi Sibi
                    </p>
                    <p className="text-gray-300 text-sm">"NJALO" • 2025</p>

                    {/* Waveform Visualization */}
                    <div className="flex items-center gap-1 mt-4">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-orange-500 rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 20 + 10}px`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Floating Music Notes */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 text-orange-400 animate-bounce opacity-60">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  </div>

                  <div
                    className="absolute -bottom-16 -right-8 w-6 h-6 text-orange-300 animate-bounce opacity-40"
                    style={{ animationDelay: "1s" }}
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm font-medium tracking-wide">
              DISCOVER MORE
            </span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Albums Section - Enhanced Layout */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 backdrop-blur-sm rounded-full border border-orange-500/20 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium tracking-wide text-orange-400">
                FEATURED RELEASES
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Latest Albums
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our newest releases from talented artists
            </p>
          </div>

          {/* Albums Grid */}
          <div className="space-y-24">
            {featuredAlbums.map((album, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Album Art */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="relative w-full max-w-md mx-auto lg:mx-0 group">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={album.image}
                        alt={album.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-orange-400 transition-all transform hover:scale-110">
                          <Play
                            className="w-10 h-10 text-white ml-1"
                            fill="white"
                          />
                        </button>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl blur-2xl" />
                  </div>
                </div>

                {/* Album Info and Tracks */}
                <div
                  className={`space-y-8 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  {/* Album Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <span className="uppercase tracking-wider">
                        {album.releaseDate}
                      </span>
                      <span>•</span>
                      <span>
                        {album.tracks.length} Track
                        {album.tracks.length > 1 ? "s" : ""}
                      </span>
                    </div>

                    <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                      {album.title}
                    </h3>

                    <p className="text-2xl text-orange-400 font-semibold">
                      {album.artist}
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {album.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5">
                      <Play className="w-5 h-5 mr-2" />
                      Stream Album
                    </Button>
                  </div>

                  {/* Track List */}
                  <div className="space-y-4 pt-4">
                    <h4 className="text-xl font-semibold text-gray-300 uppercase tracking-wide">
                      Track List
                    </h4>

                    <div className="space-y-3">
                      {album.tracks.map((track, trackIndex) => (
                        <div
                          key={trackIndex}
                          className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/10"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-gray-500 font-medium w-8 text-center group-hover:text-orange-400 transition-colors">
                              {trackIndex + 1}
                            </span>
                            <div>
                              <p className="font-semibold text-lg group-hover:text-orange-400 transition-colors">
                                {track.title}
                              </p>
                              <p className="text-sm text-gray-500">
                                {track.duration}
                              </p>
                            </div>
                          </div>

                          {/* Platform Links */}
                          <div className={`${sted.className}`}>
                            <ul className="flex items-center gap-4">
                              {album.links.map((platform) => (
                                <li key={platform.id}>
                                  <Link
                                    href={platform.link}
                                    className="opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 transform inline-block"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {platform.icon}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Platform Links Section */}
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400 mb-4 uppercase tracking-wide">
                      Available on
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {album.links.map((platform) => (
                        <Link
                          key={platform.id}
                          href={platform.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:border-orange-500/50 group"
                        >
                          <span className="group-hover:scale-110 transition-transform">
                            {platform.icon}
                          </span>
                          <span className="text-sm font-medium">
                            {platform.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialContent;
