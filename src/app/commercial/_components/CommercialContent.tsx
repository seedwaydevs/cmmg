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
const featuredTracks = [
  {
    title: "Njalo",
    artist: "YandiSibi",
    image: njalo,
    releaseDate: "2025",
    description:
      "Yandi finally drops her highly anticipated single, Njalo! With an electrifying performance that's guaranteed to get you on your feet, she's bringing pure energy and vibes.",
    tracks: [{ id: 1, title: "Njalo", duration: "4:21" }],
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
];
// ============================================
// LABEL ARTISTS - Add all artists under your label here
// ============================================
const labelArtists = [
  {
    name: "Yandi Sibi",
    image: yandi,
    genre: "Afro Pop / House",
    bio: "Rising star bringing infectious energy to the South African music scene.",
    socialLinks: {
      instagram: "#",
      spotify: "#",
      twitter: "#",
    },
  },
  // Add more artists here
];

// ============================================
// LATEST ALBUMS - Full albums with track lists
// ============================================
const latestAlbums = [
  {
    title: "Album Title Here",
    artist: "Artist Name",
    image: image1,
    releaseDate: "2025",
    genre: "Afro House",
    description:
      "Album description goes here. Tell the story behind this project...",
    tracks: [
      { title: "Track Name 1", duration: "3:45" },
      { title: "Track Name 2", duration: "4:12" },
      { title: "Track Name 3", duration: "3:58" },
    ],
    streamingLinks: [
      {
        id: 1,
        name: "Spotify",
        icon: <BsSpotify className="w-5 h-5 text-neutral-100" />,
        link: "#",
      },
      {
        id: 2,
        name: "Apple Music",
        icon: <SiApplemusic className="w-5 h-5 text-neutral-100" />,
        link: "#",
      },
      {
        id: 3,
        name: "Deezer",
        icon: <FaDeezer className="w-5 h-5 text-neutral-100" />,
        link: "#",
      },
      {
        id: 4,
        name: "YouTube Music",
        icon: <SiYoutubemusic className="w-5 h-5 text-neutral-100" />,
        link: "#",
      },
    ],
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
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
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
              Latest Tracks
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our newest releases from talented artists
            </p>
          </div>

          {/* Albums Grid */}
          <div className="space-y-24">
            {featuredTracks.map((album, index) => (
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
                      Stream Tracks
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
      <div className="bg-stone-400">
        {featuredTracks.map((tracks, i) => (
          <div className="lg:w-[90%] mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8 animate-in slide-in-from-bottom duration-300">
            {/* Album Header */}
            <div className="mb-6 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:space-x-4 items-center lg:items-end">
                <h1
                  className={` text-2xl lg:text-3xl font-bold mb-2 lg:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300`}
                >
                  {tracks.title}
                </h1>
                <h2
                  className={` text-lg lg:text-xl font-medium text-gray-300 mb-2 lg:mb-0`}
                >
                  by {tracks.artist}
                </h2>
              </div>
              <p className={` text-gray-400 text-base`}>
                Released {tracks.releaseDate}
              </p>
            </div>

            {/* Tracklist */}
            <div>
              <h3 className={`text-xl font-semibold mb-4 text-white`}>
                Tracklist
              </h3>

              <div className="space-y-1 max-h-80 overflow-y-auto">
                {tracks.tracks.map((track, index) => (
                  <div
                    key={index}
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
                        {tracks.links?.map((plat) => (
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
                <span>{tracks.tracks.length} tracks</span>
                <span>
                  Total duration:{" "}
                  {Math.floor(
                    tracks.tracks.reduce((acc, track) => {
                      const [minutes, seconds] = track.duration
                        .split(":")
                        .map(Number);
                      return acc + minutes * 60 + seconds;
                    }, 0) / 60
                  )}
                  :
                  {String(
                    tracks.tracks.reduce((acc, track) => {
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
        ))}
      </div>
      {/* Label Story Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                <span className="text-sm font-medium tracking-wide">
                  WHO WE ARE
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Crafting Sound, Building Legacies
              </h2>
            </div>

            {/* UPDATE THIS CONTENT WITH YOUR LABEL'S STORY */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white/90">
                We're not just a record label—we're a creative collective
                dedicated to amplifying authentic voices and pushing sonic
                boundaries. From the first note to the final mix, we partner
                with artists who dare to be different.
              </p>

              <p className="text-white/90">
                Our approach is simple: great music deserves great support. We
                provide our artists with world-class production facilities,
                strategic marketing, and the creative freedom to explore their
                sound without compromise. Whether it's Afro-house, hip-hop, or
                something entirely new, we're here to make it resonate.
              </p>

              <p className="text-white/90 font-semibold">
                Every release tells a story. Every artist leaves a mark. That's
                the music we make.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Artist-First</div>
                <p className="text-white/80">Creative freedom guaranteed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Quality</div>
                <p className="text-white/80">Premium production standards</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Global Reach</div>
                <p className="text-white/80">Worldwide distribution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Label Artists Section */}
      <section className="py-24 bg-gray-50">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 backdrop-blur-sm rounded-full border border-orange-500/20 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium tracking-wide text-orange-500">
                OUR ROSTER
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
              Label Artists
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the talented artists shaping our sound
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labelArtists.map((artist, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {artist.name}
                    </h3>
                    <p className="text-orange-400 font-semibold text-sm">
                      {artist.genre}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {artist.bio}
                  </p>

                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    {artist.socialLinks.instagram && (
                      <Link
                        href={artist.socialLinks.instagram}
                        className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-orange-500 rounded-lg transition-colors group/social"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-5 h-5 text-gray-600 group-hover/social:text-white transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </Link>
                    )}
                    {artist.socialLinks.spotify && (
                      <Link
                        href={artist.socialLinks.spotify}
                        className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-orange-500 rounded-lg transition-colors group/social"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsSpotify className="w-5 h-5 text-gray-600 group-hover/social:text-white transition-colors" />
                      </Link>
                    )}
                    {artist.socialLinks.twitter && (
                      <Link
                        href={artist.socialLinks.twitter}
                        className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-orange-500 rounded-lg transition-colors group/social"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-5 h-5 text-gray-600 group-hover/social:text-white transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </Link>
                    )}
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
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Play } from "lucide-react";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";

// import {
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
//   image7,
//   image8,
//   image9,
//   image10,
//   image11,
//   yandi,
//   njalo,
// } from "@/data";

// import bg from "../../../../public/servicebg.jpeg";
// import { BsSpotify } from "react-icons/bs";
// import { SiApplemusic, SiYoutubemusic } from "react-icons/si";
// import { FaDeezer } from "react-icons/fa6";
// import { Schibsted_Grotesk } from "next/font/google";

// type Props = {};

// // ============================================
// // LATEST MUSIC - Update this section with your latest releases
// // ============================================
// const latestMusic = [
//   {
//     title: "Njalo",
//     artist: "YandiSibi",
//     image: njalo,
//     releaseDate: "2025",
//     type: "Single", // Options: "Single", "EP", "Album"
//     description:
//       "Yandi finally drops her highly anticipated single, Njalo! With an electrifying performance that's guaranteed to get you on your feet, she's bringing pure energy and vibes.",
//     streamingLinks: [
//       {
//         id: 1,
//         name: "Spotify",
//         icon: <BsSpotify className="w-5 h-5 text-neutral-100" />,
//         link: "https://open.spotify.com/album/5h2VjDhjhrJMHkZFvAf8QM?si=rSxSoLsbQXOH3jaE7PWp_w",
//       },
//       {
//         id: 2,
//         name: "Apple Music",
//         icon: <SiApplemusic className="w-5 h-5 text-neutral-100" />,
//         link: "https://music.apple.com/za/album/njalo/1837463602?i=1837463617",
//       },
//       {
//         id: 3,
//         name: "Deezer",
//         icon: <FaDeezer className="w-5 h-5 text-neutral-100" />,
//         link: "https://link.deezer.com/s/312O7qMbJFBNYJWDTRZtD",
//       },
//       {
//         id: 4,
//         name: "YouTube Music",
//         icon: <SiYoutubemusic className="w-5 h-5 text-neutral-100" />,
//         link: "https://music.youtube.com/watch?v=VbaR7iUSnVg&si=kd8KAW6WabhEfqiq",
//       },
//     ],
//   },
//   // Add more latest releases here
// ];

// // ============================================
// // LABEL ARTISTS - Add all artists under your label here
// // ============================================
// const labelArtists = [
//   {
//     name: "Yandi Sibi",
//     image: yandi,
//     genre: "Afro Pop / House",
//     bio: "Rising star bringing infectious energy to the South African music scene.",
//     socialLinks: {
//       instagram: "#",
//       spotify: "#",
//       twitter: "#",
//     },
//   },
//   // Add more artists here
// ];

// // ============================================
// // LATEST ALBUMS - Full albums with track lists
// // ============================================
// const latestAlbums = [
//   {
//     title: "Album Title Here",
//     artist: "Artist Name",
//     image: image1,
//     releaseDate: "2025",
//     genre: "Afro House",
//     description:
//       "Album description goes here. Tell the story behind this project...",
//     tracks: [
//       { title: "Track Name 1", duration: "3:45" },
//       { title: "Track Name 2", duration: "4:12" },
//       { title: "Track Name 3", duration: "3:58" },
//     ],
//     streamingLinks: [
//       {
//         id: 1,
//         name: "Spotify",
//         icon: <BsSpotify className="w-5 h-5 text-neutral-100" />,
//         link: "#",
//       },
//       {
//         id: 2,
//         name: "Apple Music",
//         icon: <SiApplemusic className="w-5 h-5 text-neutral-100" />,
//         link: "#",
//       },
//       {
//         id: 3,
//         name: "Deezer",
//         icon: <FaDeezer className="w-5 h-5 text-neutral-100" />,
//         link: "#",
//       },
//       {
//         id: 4,
//         name: "YouTube Music",
//         icon: <SiYoutubemusic className="w-5 h-5 text-neutral-100" />,
//         link: "#",
//       },
//     ],
//   },
// ];

// const sted = Schibsted_Grotesk({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
// });

// const CommercialContent = (props: Props) => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative h-screen bg-black text-white overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src={njalo}
//             alt="Recording artist in professional studio"
//             fill
//             className="object-cover object-center"
//             priority
//             sizes="100vw"
//           />
//         </div>

//         <div className="absolute inset-0">
//           <Image
//             src={njalo}
//             alt="Recording artist in professional studio"
//             fill
//             className="object-cover object-center"
//             priority
//             sizes="100vw"
//           />
//         </div>

//         <div className="absolute inset-0 backdrop-blur-2xl bg-white/20 z-10" />

//         <div className="relative z-20 h-full flex items-center">
//           <div className="w-[90%] lg:w-[80%] mx-auto">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-8">
//                 <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
//                   <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
//                   <span className="text-sm font-medium tracking-wide">
//                     COMMERCIAL RELEASES
//                   </span>
//                 </div>

//                 <div className="space-y-6">
//                   <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
//                     Commercial
//                     <span className="text-orange-500 block">Music</span>
//                   </h1>

//                   <p className="text-lg lg:text-lg text-gray-200 md:leading-snug max-w-lg font-light">
//                     Premium commercial releases from our signed artists and
//                     established musicians. Discover the latest singles, albums,
//                     and exclusive tracks ready for streaming and purchase.
//                   </p>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                   <Link
//                     href="#latest"
//                     className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5"
//                   >
//                     Explore Releases
//                     <svg
//                       className="w-5 h-5 transition-transform group-hover:translate-x-1"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </Link>

//                   <Link
//                     href="www.library.cmmg.co.za"
//                     className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
//                   >
//                     Production Library
//                     <svg
//                       className="w-5 h-5 transition-transform group-hover:scale-110"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
//                       />
//                     </svg>
//                   </Link>
//                 </div>

//                 <div className="hidden md:grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
//                   <div>
//                     <div className="text-2xl font-bold text-white">50+</div>
//                     <div className="text-sm text-gray-400 uppercase tracking-wide">
//                       Artists
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-white">200+</div>
//                     <div className="text-sm text-gray-400 uppercase tracking-wide">
//                       Releases
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-white">1M+</div>
//                     <div className="text-sm text-gray-400 uppercase tracking-wide">
//                       Streams
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="hidden lg:flex justify-end">
//                 <div className="relative group">
//                   <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
//                     <Image
//                       src={njalo}
//                       alt="Featured album cover"
//                       fill
//                       className="object-cover"
//                       sizes="320px"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-400 transition-colors">
//                         <svg
//                           className="w-8 h-8 text-white ml-1"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M8 5v14l11-7z" />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>

//                   <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 min-w-64">
//                     <h3 className="text-lg font-bold text-white mb-1">
//                       Latest Release
//                     </h3>
//                     <p className="text-orange-400 font-medium mb-2">
//                       Yandi Sibi
//                     </p>
//                     <p className="text-gray-300 text-sm">"NJALO" • 2025</p>

//                     <div className="flex items-center gap-1 mt-4">
//                       {[...Array(20)].map((_, i) => (
//                         <div
//                           key={i}
//                           className="w-1 bg-orange-500 rounded-full animate-pulse"
//                           style={{
//                             height: `${Math.random() * 20 + 10}px`,
//                             animationDelay: `${i * 0.1}s`,
//                           }}
//                         />
//                       ))}
//                     </div>
//                   </div>

//                   <div className="absolute -top-4 -right-4 w-8 h-8 text-orange-400 animate-bounce opacity-60">
//                     <svg fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
//                     </svg>
//                   </div>

//                   <div
//                     className="absolute -bottom-16 -right-8 w-6 h-6 text-orange-300 animate-bounce opacity-40"
//                     style={{ animationDelay: "1s" }}
//                   >
//                     <svg fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//           <div className="flex flex-col items-center gap-2 text-white/60">
//             <span className="text-sm font-medium tracking-wide">
//               DISCOVER MORE
//             </span>
//             <svg
//               className="w-6 h-6 animate-bounce"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               />
//             </svg>
//           </div>
//         </div>
//       </section>

//       {/* Latest Music Section */}
//       <section id="latest" className="py-24 bg-white">
//         <div className="w-[90%] lg:w-[80%] mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 backdrop-blur-sm rounded-full border border-orange-500/20 mb-6">
//               <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
//               <span className="text-sm font-medium tracking-wide text-orange-500">
//                 NEW RELEASES
//               </span>
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
//               Latest Music
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Fresh tracks and singles from our artists
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {latestMusic.map((release, index) => (
//               <div
//                 key={index}
//                 className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
//               >
//                 <div className="relative aspect-square overflow-hidden">
//                   <Image
//                     src={release.image}
//                     alt={release.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-orange-400 transition-all transform hover:scale-110">
//                       <Play className="w-8 h-8 text-white ml-1" fill="white" />
//                     </button>
//                   </div>

//                   <div className="absolute top-4 right-4">
//                     <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
//                       {release.type}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-6 space-y-4">
//                   <div>
//                     <h3 className="text-2xl font-bold text-black mb-1 group-hover:text-orange-500 transition-colors">
//                       {release.title}
//                     </h3>
//                     <p className="text-orange-500 font-semibold">
//                       {release.artist}
//                     </p>
//                     <p className="text-sm text-gray-500 mt-1">
//                       {release.releaseDate}
//                     </p>
//                   </div>

//                   <p className="text-gray-600 text-sm line-clamp-3">
//                     {release.description}
//                   </p>

//                   <div className="pt-4 border-t border-gray-200">
//                     <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">
//                       Stream on
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {release.streamingLinks.map((platform) => (
//                         <Link
//                           key={platform.id}
//                           href={platform.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 bg-gray-100 hover:bg-orange-500 rounded-lg transition-all duration-300 group/icon"
//                         >
//                           <span className="group-hover/icon:scale-110 transition-transform inline-block">
//                             {platform.icon}
//                           </span>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Label Story Section */}
//       <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
//                 <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
//                 <span className="text-sm font-medium tracking-wide">
//                   WHO WE ARE
//                 </span>
//               </div>
//               <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//                 Crafting Sound, Building Legacies
//               </h2>
//             </div>

//             {/* UPDATE THIS CONTENT WITH YOUR LABEL'S STORY */}
//             <div className="space-y-6 text-lg leading-relaxed">
//               <p className="text-white/90">
//                 We're not just a record label—we're a creative collective
//                 dedicated to amplifying authentic voices and pushing sonic
//                 boundaries. From the first note to the final mix, we partner
//                 with artists who dare to be different.
//               </p>

//               <p className="text-white/90">
//                 Our approach is simple: great music deserves great support. We
//                 provide our artists with world-class production facilities,
//                 strategic marketing, and the creative freedom to explore their
//                 sound without compromise. Whether it's Afro-house, hip-hop, or
//                 something entirely new, we're here to make it resonate.
//               </p>

//               <p className="text-white/90 font-semibold">
//                 Every release tells a story. Every artist leaves a mark. That's
//                 the music we make.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
//               <div className="text-center">
//                 <div className="text-4xl font-bold mb-2">Artist-First</div>
//                 <p className="text-white/80">Creative freedom guaranteed</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-bold mb-2">Quality</div>
//                 <p className="text-white/80">Premium production standards</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-bold mb-2">Global Reach</div>
//                 <p className="text-white/80">Worldwide distribution</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Label Artists Section */}
//       <section className="py-24 bg-gray-50">
//         <div className="w-[90%] lg:w-[80%] mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 backdrop-blur-sm rounded-full border border-orange-500/20 mb-6">
//               <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
//               <span className="text-sm font-medium tracking-wide text-orange-500">
//                 OUR ROSTER
//               </span>
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
//               Label Artists
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Meet the talented artists shaping our sound
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {labelArtists.map((artist, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//               >
//                 <div className="relative aspect-square overflow-hidden">
//                   <Image
//                     src={artist.image}
//                     alt={artist.name}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

//                   <div className="absolute bottom-0 left-0 right-0 p-6">
//                     <h3 className="text-2xl font-bold text-white mb-1">
//                       {artist.name}
//                     </h3>
//                     <p className="text-orange-400 font-semibold text-sm">
//                       {artist.genre}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="p-6 space-y-4">
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {artist.bio}
//                   </p>

//                   <div className="flex gap-3 pt-4 border-t border-gray-200">
//                     {artist.socialLinks.instagram && (
//                       <Link
//                         href={artist.socialLinks.instagram}
//                         className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-orange-500 rounded-lg transition-colors group/social"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <svg
//                           className="w-5 h-5 text-gray-600 group-hover/social:text-white transition-colors"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                         </svg>
//                       </Link>
//                     )}
//                     {artist.socialLinks.spotify && (
//                       <Link
//                         href={artist.socialLinks.spotify}
//                         className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-orange-500 rounded-lg transition-colors group/social"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <BsSpotify className="w-5 h-5 text-gray-600 group-hover/social:text-white transition-colors" />
//                       </Link>
//                     )}
//                     {artist.socialLinks.twitter && (
//                       <Link
//                         href={artist.socialLinks.twitter}
//                         className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-orange-500 rounded-lg transition-colors group/social"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <svg
//                           className="w-5 h-5 text-gray-600 group-hover/social:text-white transition-colors"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                         </svg>
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default CommercialContent;
