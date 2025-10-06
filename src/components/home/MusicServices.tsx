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
