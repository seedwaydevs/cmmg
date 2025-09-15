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

// Mock data for latest tracks
const latestTracks = [
  {
    id: 1,
    title: "Njalo",
    artist: "Yandi Sibi",
    duration: "3:24",
    genre: "Amapiano",
    image: yandi,
  },
  {
    id: 2,
    title: "Midnight Drive",
    artist: "The Velvet Collective",
    duration: "4:12",
    genre: "Indie Rock",
    image: image8,
  },
  {
    id: 3,
    title: "Golden Hour",
    artist: "Luna Sol",
    duration: "3:56",
    genre: "Pop",
    image: image9,
  },
  {
    id: 4,
    title: "Urban Jungle",
    artist: "Street Symphony",
    duration: "2:48",
    genre: "Hip Hop",
    image: image10,
  },
  {
    id: 5,
    title: "Ocean Waves",
    artist: "Coastal Breeze",
    duration: "5:32",
    genre: "Ambient",
    image: image11,
  },
];

// Featured album data
const featuredAlbum = {
  title: "Njalo",
  artist: "YandiSibi",
  image: njalo,
  releaseDate: "2024",
  description:
    "Yandi finally drops her highly anticipated single, Njalo! With an electrifying performance that’s guaranteed to get you on your feet, she’s bringing pure energy and vibes.",
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
};

// Genres/Moods data
const genresMoods = [
  {
    name: "Chill Vibes",
    image: bg,
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "Electronic",
    image: bg,
    color: "from-black to-gray-800",
  },
  {
    name: "Indie Rock",
    image: bg,
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Hip Hop",
    image: bg,
    color: "from-gray-900 to-black",
  },
  {
    name: "Jazz Fusion",
    image: bg,
    color: "from-orange-300 to-yellow-500",
  },
  {
    name: "Ambient",
    image: bg,
    color: "from-gray-600 to-gray-900",
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

      {/* Latest Tracks Section */}
      {/* <section className="py-16 bg-white">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black">Latest Tracks</h2>
          </div>

          <div className="space-y-4">
            {latestTracks.map((track, index) => (
              <div
                key={track.id}
                className="flex flex-row items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-lg border flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={track.image}
                    alt={track.title}
                    width={64}
                    height={64}
                    className="w-full h-full border object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-black">{track.title}</h3>
                  <p className="text-gray-600 text-sm">{track.artist}</p>
                </div>

                <div className="text-sm text-gray-500">{track.genre}</div>

                <div className="text-sm text-gray-500 w-12 text-right">
                  {track.duration}
                </div>
                
                <div className="hidden md:flex gap-2 ">
                  <Button
                    size="sm"
                    className="bg-transparent text-neutral-500 hover:text-orange-500 p-1"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-transparent text-gray-600 hover:text-orange-500 p-1"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-transparent text-gray-600 hover:text-orange-500 p-1"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Album Section */}
      <section className="py-16 bg-black text-white">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Album Art and Info */}
            <div className="space-y-6">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <Image
                  src={featuredAlbum.image}
                  alt={featuredAlbum.title}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-2">
                  {featuredAlbum.title}
                </h2>
                <p className="text-xl text-orange-400 mb-2">
                  {featuredAlbum.artist}
                </p>
                <p className="text-gray-300 mb-6">
                  {featuredAlbum.description}
                </p>

                <div className="flex gap-4 justify-center lg:justify-start">
                  <Button
                    variant="link"
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Stream Album
                  </Button>
                </div>
              </div>
            </div>

            {/* Track List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">Track List</h3>
              <div className="space-y-2">
                {featuredAlbum.tracks.map((track, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded hover:bg-gray-800 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 text-sm w-6">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium">{track.title}</p>
                      </div>
                    </div>
                    <div className="flex justify-end items-center">
                      <div
                        className={`${sted.className}  text-white font-medium group-hover:text-gray-300 transition-colors text-sm`}
                      >
                        <ul className="flex flex-row justify-between space-x-5">
                          {featuredAlbum.links.map((plat) => (
                            <li key={plat.id}>
                              <Link href={plat.link}>{plat.icon}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genres/Moods Carousel */}
      {/* <section className="py-16 bg-gray-50">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black">Browse by Genre</h2>
          </div>

          <Carousel>
            <CarouselContent className="-ml-4">
              {genresMoods.map((genre, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden cursor-pointer group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${genre.color}`}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-lg">
                        {genre.name}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden lg:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section> */}

      {/* Latest Albums Carousel */}
      {/* <section className="py-16 bg-white">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black">Latest Albums</h2>
            <Button className="bg-transparent text-orange-500 hover:bg-orange-50 border border-orange-500">
              <Link href="/albums" className="uppercase">
                Show all
              </Link>
            </Button>
          </div>

          <Carousel>
            <CarouselContent className="-ml-1">
              {latestAlbums.map((album, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="space-y-3 group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={album.image}
                        alt={album.title}
                        width={300}
                        height={300}
                        className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Play className="text-white w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div>
                      <p className="uppercase font-semibold text-black group-hover:text-orange-500 transition-colors">
                        {album.title}
                      </p>
                      <p className="text-xs font-light uppercase text-gray-600">
                        {album.artist}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden lg:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section> */}
    </div>
  );
};

export default CommercialContent;
