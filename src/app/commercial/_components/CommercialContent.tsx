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
  cstaz,
} from "@/data";

import bg from "../../../../public/servicebg.jpeg";
import { BsSpotify } from "react-icons/bs";
import { SiApplemusic, SiYoutubemusic } from "react-icons/si";
import { FaDeezer } from "react-icons/fa6";
import { Schibsted_Grotesk } from "next/font/google";
import CommercialHero from "./Hero";
import FeaturedTracks from "./FeaturedTracks";

type Props = {};

// Featured albums array - ready for 3 more entries
const tracks = [
  {
    id: 1,
    title: "Njalo",
    artist: "YandiSibi",
    image: njalo,
    releaseDate: "2025",
    duration: "4:21",
    audioUrl: "/audio/njalo.mp3", // Your audio file path
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
    artist: "L&J Cstaz",
    image: cstaz,
    releaseDate: "2025",
    duration: "3:45",
    audioUrl: "/audio/jesu-msindisi.mp3",
    links: [
      // ... same links structure
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
      <CommercialHero image={njalo} />

      {/* Featured Albums Section - Enhanced Layout */}
      <FeaturedTracks tracks={tracks} />

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
