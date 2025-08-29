import { Hanken_Grotesk, Inter_Tight } from "next/font/google";
import Image from "next/image";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { MoveRight, Music, Headphones } from "lucide-react";
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
} from "@/data";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const MusicServices = () => {
  return (
    <div className="w-full py-5">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col space-y-4">
          {/* Header */}
          <div className="flex items-center">
            <TiArrowSortedUp className="text-orange-600 h-7 w-7 lg:h-10 lg:w-10" />
            <p className="text-xs uppercase lg:text-lg">[ Our Music ]</p>
          </div>

          {/* Production Music Section */}
          <div className="flex flex-col lg:items-center lg:justify-between lg:flex-row space-y-7 pb-5">
            <div className="space-y-7 lg:flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Music className="text-white w-6 h-6" />
                </div>
                <span className="text-orange-600 font-semibold uppercase tracking-wide">
                  Production Library
                </span>
              </div>
              <h1
                className={`${hanken.className} font-bold text-4xl lg:text-6xl lg:max-w-lg`}
              >
                Professional Music for Media
              </h1>
              <p className="lg:text-xl lg:max-w-2xl text-gray-700">
                High-quality production music for film, TV, advertising, and
                digital content. Easy licensing with transparent pricing and
                instant access to professional-grade tracks.
              </p>
              <div className="flex gap-4 items-center">
                <Link
                  href="https://www.library.cmmg.co.za/"
                  className="text-orange-600 py-2 text-xl font-semibold hover:underline"
                >
                  Browse Production Library
                </Link>
                <MoveRight className="text-orange-600" />
              </div>
            </div>
            <div className="lg:flex-1 lg:ml-8">
              <div className="grid grid-cols-2 gap-2 h-[40vh] lg:h-[50vh]">
                <div className="space-y-2">
                  <Image
                    src={image1}
                    alt="Production music"
                    className="w-full h-32 lg:h-32 object-cover rounded"
                  />
                  <Image
                    src={image13}
                    alt="Production music"
                    className="w-full h-32 lg:h-32 object-cover rounded"
                  />
                </div>
                <div className="space-y-2 pt-4">
                  <Image
                    src={image3}
                    alt="Production music"
                    className="w-full h-32 lg:h-32 object-cover rounded"
                  />
                  <Image
                    src={image4}
                    alt="Production music"
                    className="w-full h-32 lg:h-32 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* Commercial Music Section */}
          <div className="flex flex-col lg:items-center lg:justify-between lg:flex-row-reverse space-y-7 pb-5">
            <div className="space-y-7 lg:flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Headphones className="text-white w-6 h-6" />
                </div>
                <span className="text-orange-600 font-semibold uppercase tracking-wide">
                  Commercial Releases
                </span>
              </div>
              <h1
                className={`${hanken.className} font-bold text-4xl lg:text-6xl lg:max-w-lg`}
              >
                Discover New Artists & Releases
              </h1>
              <p className="lg:text-xl lg:max-w-2xl text-gray-700">
                Premium commercial releases from our signed artists and
                established musicians. Stream, purchase, and discover your next
                favorite tracks across all genres.
              </p>
              <div className="flex gap-4 items-center">
                <Link
                  href="/commercial"
                  className="text-orange-600 py-2 text-xl font-semibold hover:underline"
                >
                  Explore Commercial Music
                </Link>
                <MoveRight className="text-orange-600" />
              </div>
            </div>
            <div className="lg:flex-1 lg:mr-8">
              <div className="grid grid-cols-2 gap-2 h-[40vh] lg:h-[50vh]">
                <div className="space-y-2 pt-4">
                  <Image
                    src={image5}
                    alt="Commercial music"
                    className="w-full h-24 lg:h-32 object-cover rounded"
                  />
                  <Image
                    src={image6}
                    alt="Commercial music"
                    className="w-full h-24 lg:h-32 object-cover rounded"
                  />
                </div>
                <div className="space-y-2">
                  <Image
                    src={image7}
                    alt="Commercial music"
                    className="w-full h-24 lg:h-32 object-cover rounded"
                  />
                  <Image
                    src={image8}
                    alt="Commercial music"
                    className="w-full h-24 lg:h-32 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* CTA Section */}
          <div className="p-10 lg:p-16 lg:py-10 bg-orange-600 space-y-4">
            <p
              className={`${hanken.className} text-4xl md:text-5xl lg:text-6xl tracking-tight text-gray-100 font-bold`}
            >
              <span className="text-blue-900">
                From production to commercial —
              </span>{" "}
              <span>
                we deliver the sound that moves your audience. Professional
                quality, every single time.
              </span>
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/about"
                className={`${inter.className} bg-[#0e0e0e] text-gray-100 py-2 px-3 font-bold lg:text-lg hover:bg-gray-800 transition-colors`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`${inter.className} bg-transparent border-2 border-[#0e0e0e] text-[#0e0e0e] py-2 px-3 font-bold lg:text-lg hover:bg-[#0e0e0e] hover:text-gray-100 transition-colors`}
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <hr className="" />
        </div>
      </div>
    </div>
  );
};

export default MusicServices;
