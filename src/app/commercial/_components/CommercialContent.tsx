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
import LabelHero from "./Hero";
import Artists from "@/components/home/Artists";
import LabelStory from "./LabelStoy";
import ContactCTA from "@/components/home/ContactCTA";

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
      <LabelHero image={njalo} />

      <LabelStory />
      <Artists />
      {/* Featured Albums Section - Enhanced Layout */}
      <FeaturedTracks tracks={tracks} />
      <ContactCTA />
    </div>
  );
};

export default CommercialContent;
