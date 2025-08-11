import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Pause, Heart, Share2, Download } from "lucide-react";

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
} from "@/data";

import bg from "../../../public/servicebg.jpeg";

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
    title: "Electric Dreams",
    artist: "Neon Pulse",
    duration: "3:24",
    genre: "Electronic",
    image: image7,
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
  title: "Cosmic Journey",
  artist: "Stellar Dynamics",
  image: image9,
  releaseDate: "2024",
  description:
    "An epic voyage through sound and space, featuring 12 tracks that blend electronic elements with orchestral arrangements.",
  tracks: [
    { title: "Launchpad", duration: "4:21" },
    { title: "Asteroid Belt", duration: "3:45" },
    { title: "Nebula Dance", duration: "5:12" },
    { title: "Solar Winds", duration: "4:33" },
    { title: "Black Hole", duration: "6:08" },
    { title: "Galactic Highway", duration: "3:57" },
    { title: "Starlight", duration: "4:44" },
    { title: "Cosmic Storm", duration: "5:21" },
    { title: "Planetary Alignment", duration: "4:15" },
    { title: "Interstellar", duration: "7:02" },
    { title: "Return to Earth", duration: "4:38" },
    { title: "Landing", duration: "3:29" },
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

const MusicPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-black/80" />
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="w-[90%] lg:w-[80%] mx-auto">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                CMMG
                <span className="text-orange-500 block">Music</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Premium commercial releases from our signed artists and
                established musicians. Discover the latest singles, albums, and
                exclusive tracks ready for streaming and purchase.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={"#"}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
                >
                  Explore Releases
                </Link>
                <Link
                  href={"/production"}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
                >
                  Production Music Library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Tracks Section */}
      <section className="py-16 bg-white">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black">Latest Tracks</h2>
            <Button className="bg-transparent text-orange-500 hover:bg-orange-50 border border-orange-500">
              View All Tracks
            </Button>
          </div>

          <div className="space-y-4">
            {latestTracks.map((track, index) => (
              <div
                key={track.id}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={track.image}
                    alt={track.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
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

                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    className="bg-transparent text-gray-600 hover:text-orange-500 p-1"
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
      </section>

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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Play Album
                  </Button>
                  <Button className="bg-transparent border border-gray-600 text-white hover:bg-gray-800">
                    Add to Library
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
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400 text-sm">
                        {track.duration}
                      </span>
                      <Play className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genres/Moods Carousel */}
      <section className="py-16 bg-gray-50">
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Latest Albums Carousel */}
      <section className="py-16 bg-white">
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-black text-white">
        <div className="w-[90%] lg:w-[80%] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of music lovers discovering new sounds every day.
            Premium quality, unlimited streaming.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MusicPage;
