import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Music, FileText, UserPlus, LogIn, Download } from "lucide-react";

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

// Production music albums data
const productionAlbums = [
  {
    title: "Corporate Essentials",
    image: image1,
    artist: "Various Artists",
    trackCount: 15,
    genre: "Corporate",
  },
  {
    title: "Cinematic Orchestral",
    image: image2,
    artist: "Symphony Collective",
    trackCount: 12,
    genre: "Orchestral",
  },
  {
    title: "Modern Hip Hop",
    image: image3,
    artist: "Urban Beats",
    trackCount: 20,
    genre: "Hip Hop",
  },
  {
    title: "Acoustic Folk",
    image: image4,
    artist: "Country Roads",
    trackCount: 18,
    genre: "Folk",
  },
  {
    title: "Electronic Ambient",
    image: image5,
    artist: "Digital Soundscapes",
    trackCount: 14,
    genre: "Electronic",
  },
  {
    title: "Jazz Standards",
    image: image6,
    artist: "Jazz Ensemble",
    trackCount: 16,
    genre: "Jazz",
  },
  {
    title: "Rock Anthems",
    image: image7,
    artist: "Power Drive",
    trackCount: 13,
    genre: "Rock",
  },
  {
    title: "World Music",
    image: image8,
    artist: "Global Sounds",
    trackCount: 22,
    genre: "World",
  },
];

const ProductionMusicPage = () => {
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
            <div className="max-w-3xl space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Production
                <span className="text-orange-500 block">Music Library</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Professional music for film, TV, advertising, and digital
                content. High-quality tracks ready for licensing with simple
                clearance processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={"https://cmmg-library.vercel.app/"}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
                >
                  Browse Library
                </Link>
                <Link
                  href={"commercial"}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
                >
                  Commercial Music
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-black mb-6">
              What is Production Music?
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Production music, also known as library music or stock music, is
                pre-recorded music created specifically for use in media
                productions. Unlike commercial music, production music is
                designed to enhance visual content without drawing attention
                away from the main message.
              </p>
              <p>
                Our extensive library features thousands of high-quality tracks
                across every genre and mood, professionally composed and
                recorded for use in films, television shows, commercials,
                corporate videos, podcasts, and digital content.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Professional Quality
                </h3>
                <p className="text-gray-600">
                  Studio-grade recordings from professional composers and
                  musicians
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Easy Licensing
                </h3>
                <p className="text-gray-600">
                  Simple clearance process with transparent pricing and usage
                  rights
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black">
                  Instant Access
                </h3>
                <p className="text-gray-600">
                  Download high-quality files immediately after licensing
                  approval
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Albums Carousel */}
      <section className="py-20 bg-white">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-black mb-2">
                Featured Albums
              </h2>
              <p className="text-gray-600">
                Curated collections for every production need
              </p>
            </div>
            <Button className="bg-transparent text-orange-500 hover:bg-orange-50 border border-orange-500">
              View All Albums
            </Button>
          </div>

          <Carousel>
            <CarouselContent className="-ml-1">
              {productionAlbums.map((album, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="space-y-4 group cursor-pointer">
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
                      <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        {album.trackCount} TRACKS
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-black group-hover:text-orange-500 transition-colors">
                        {album.title}
                      </p>
                      <p className="text-sm text-gray-600">{album.artist}</p>
                      <p className="text-xs uppercase text-orange-500 font-medium">
                        {album.genre}
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

      {/* How to Get Music Section */}
      <section className="py-20 bg-black text-white">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How to License Our Music
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Follow these simple steps to license and download production music
              for your projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto relative">
                <UserPlus className="w-10 h-10 text-white" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-orange-500 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold">Sign Up</h3>
              <p className="text-gray-300 text-sm">
                Create your account on our platform to access the full music
                library
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto relative">
                <LogIn className="w-10 h-10 text-white" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-orange-500 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold">Login</h3>
              <p className="text-gray-300 text-sm">
                Access your account and browse our extensive production music
                catalog
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto relative">
                <Music className="w-10 h-10 text-white" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-orange-500 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold">Choose Song</h3>
              <p className="text-gray-300 text-sm">
                Preview and select the perfect track for your production needs
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto relative">
                <FileText className="w-10 h-10 text-white" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-orange-500 rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold">Fill Cue Sheet</h3>
              <p className="text-gray-300 text-sm">
                Complete the licensing form with your project details and usage
                information
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto relative">
                <Download className="w-10 h-10 text-white" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-orange-500 rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </div>
              </div>
              <h3 className="text-xl font-semibold">Submit to CAPASSO</h3>
              <p className="text-gray-300 text-sm">
                We handle the submission to CAPASSO for performance rights
                clearance
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="w-[90%] lg:w-[80%] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Finding the Right Music?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our music supervisors are here to help you find the perfect
            soundtrack for your project. Contact us for personalized
            recommendations and bulk licensing options.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href={"#"} className="bg-black text-white px-6 py-2">
              Contact Music Supervisor
            </Link>
            <Link
              href={"#"}
              className="bg-white border-white text-black px-6 py-2"
            >
              Browse Full Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductionMusicPage;
