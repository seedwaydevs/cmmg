"use client";
import {
  Hanken_Grotesk,
  Inter_Tight,
  Schibsted_Grotesk,
} from "next/font/google";
import Image from "next/image";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { MoveRight, Headphones, Play, ExternalLink } from "lucide-react";
import Link from "next/link";

// Import your images
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
  image13,
  njalo,
  landj,
} from "@/data";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const MusicServices = () => {
  // Sample artist/album data - replace with your actual data
  const albums = [
    {
      image: njalo,
      artist: "YandiSibi",
      album: "Njalo",
      genre: "Amapiano",
    },
    {
      image: landj,
      artist: "L & J Cstaz",
      album: "Jesu Msindisi",
      genre: "Gospel",
    },
    {
      image: image2,
      artist: "Abe Sibiya",
      album: "Live Culture",
      genre: "Jazz",
    },

    // {
    //   image: image4,
    //   artist: "Artist Name",
    //   album: "Album Title",
    //   genre: "Rock",
    // },
    // {
    //   image: image5,
    //   artist: "Artist Name",
    //   album: "Album Title",
    //   genre: "Pop",
    // },
    // {
    //   image: image6,
    //   artist: "Artist Name",
    //   album: "Album Title",
    //   genre: "Ambient",
    // },
    // {
    //   image: image7,
    //   artist: "Artist Name",
    //   album: "Album Title",
    //   genre: "R&B",
    // },
    // {
    //   image: image8,
    //   artist: "Artist Name",
    //   album: "Album Title",
    //   genre: "Alternative",
    // },
    // {
    //   image: image9,
    //   artist: "Artist Name",
    //   album: "Album Title",
    //   genre: "Classical",
    // },
    // {
    //   image: image13,
    //   artist: "Artist Name",
    //   album: "Album Title",
    //   genre: "World",
    // },
  ];

  return (
    <div className="w-full py-5 text-neutral-800">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col space-y-4">
          {/* Header */}
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-500 h-7 w-7 lg:h-10 lg:w-10" />
            <div className="backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10 ml-2">
              <p
                className={`${sted.className} text-xs uppercase lg:text-sm font-bold tracking-widest `}
              >
                [ Our Philosophy ]
              </p>
            </div>
          </div>
          {/* Main heading and intro */}
          {/* <div className="space-y-6 mb-8">
            <h1
              className={`${hanken.className} font-black text-5xl lg:text-7xl  tracking-tight leading-none`}
            >
              Commercial Music Releases
              <span className="text-orange-500">.</span>
            </h1>
            <p
              className={`${hanken.className} text-xl lg:text-2xl  font-light leading-relaxed max-w-4xl`}
            >
              Discover exceptional talent and groundbreaking releases from our
              curated roster of artists.
            </p>
          </div> */}
          {/* Scrollable carousel */}
          <div className="mb-1">
            {/* <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Headphones className="text-white w-6 h-6" />
              </div>
              <div className="backdrop-blur-sm bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-400/20">
                <span
                  className={`${hanken.className} text-neutral-900 font-semibold uppercase tracking-wide text-sm`}
                >
                  Latest Releases
                </span>
              </div>
            </div> */}

            {/* <div className="relative">
              <div
                className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <style jsx>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {albums.map((album, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:scale-105">
                      <div className="aspect-square relative">
                        <Image
                          src={album.image}
                          alt={`${album.artist} - ${album.album}`}
                          className="w-full h-full object-cover"
                        />
                        
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                            <Play
                              className="text-white w-8 h-8 ml-1"
                              fill="currentColor"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <h3
                          className={`${hanken.className}  font-bold text-lg truncate`}
                        >
                          {album.album}
                        </h3>
                        <p className="text-neutral-900 text-sm truncate">
                          {album.artist}
                        </p>
                        <span className="inline-block px-2 py-1 bg-orange-500/20 text-neutral-800 text-xs rounded-full">
                          {album.genre}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

             
              <div className="absolute top-0 left-0 w-16 h-full  pointer-events-none" />

              <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-orange-300 to-transparent pointer-events-none" />
            </div> */}

            {/* <div className="flex gap-4 items-center group mt-6">
              <Link
                href="/releases"
                className={`${hanken.className} backdrop-blur-sm bg-orange-500/10 hover:bg-orange-500/20 border border-orange-400/20 px-6 py-3 rounded-lg text-neutral-800 text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105`}
              >
                View All Releases
              </Link>
              <MoveRight className="text-orange-500 group-hover:translate-x-1 transition-transform duration-300" />
            </div> */}
          </div>
          {/* <hr className="border-black/10 my-8" /> */}
          {/* Label Philosophy Section */}
          <div className="space-y-8">
            <h2
              className={`${sted.className} font-black text-4xl lg:text-6xl  tracking-tight leading-none`}
            >
              Our Label Philosophy
              <span className="text-orange-500">.</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <p
                  className={`${sted.className} text-lg lg:text-xl text-neutral-900 font-light leading-relaxed`}
                >
                  At CMMG, we believe music is more than entertainment — it's a
                  catalyst for connection, emotion, and cultural evolution. We
                  don't just sign artists; we partner with visionaries who
                  challenge conventions and redefine what's possible.
                </p>
                <p
                  className={`${sted.className} text-lg lg:text-xl text-neutral-900 font-light leading-relaxed`}
                >
                  Our approach is artist-first, always. We provide the creative
                  freedom, resources, and strategic support needed to transform
                  raw talent into lasting artistic legacies.
                </p>
              </div>

              <div className="space-y-6">
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3
                    className={`${sted.className} text-neutral-600 font-bold text-3xl mb-3`}
                  >
                    What Sets Us Apart
                  </h3>
                  <ul className="space-y-2 text-neutral-900">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>
                        Genre-agnostic approach to exceptional artistry
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Full creative control for our artists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Transparent, artist-friendly contracts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Integrated media production capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-white/10 my-8" />
          {/* CTA Section */}
          <div className="p-10 lg:p-16 lg:py-10 bg-orange-600 space-y-6 rounded-lg relative overflow-hidden">
            <p
              className={`${sted.className} text-4xl md:text-5xl lg:text-6xl tracking-tight font-black leading-tight relative z-10`}
            >
              <span className="text-blue-900">More than a record label.</span>{" "}
              <span className="text-gray-100">
                We are a creative collective dedicated to developing artists,
                producing groundbreaking releases, and shaping the future of
                music with integrity and innovation.
              </span>
            </p>

            <div className="flex gap-4 flex-wrap relative z-10">
              <Link
                href="/about"
                className={`${sted.className} inline-block bg-[#0e0e0e] hover:bg-black text-gray-100 py-3 px-6 font-bold lg:text-lg tracking-wide rounded-lg transition-all duration-300 hover:scale-105 border border-gray-800/50`}
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className={`${sted.className} inline-block bg-transparent border-2 border-[#0e0e0e] text-[#0e0e0e] py-3 px-6 font-bold lg:text-lg hover:bg-[#0e0e0e] hover:text-gray-100 transition-all duration-300 rounded-lg`}
              >
                Get In Touch
              </Link>
            </div>
          </div>
          <hr className="border-white/10" />
        </div>
      </div>
    </div>
  );
};

export default MusicServices;
