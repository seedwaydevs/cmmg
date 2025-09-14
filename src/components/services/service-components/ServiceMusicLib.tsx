import Image from "next/image";
import { Schibsted_Grotesk } from "next/font/google";
import {
  CheckCircle,
  ExternalLink,
  Music,
  Globe,
  Shield,
  Headphones,
} from "lucide-react";
import musicLibraryImg2 from "../../../public/pexels-stephendn-63703.jpg";
import musicLibraryImg1 from "../../../../public/new_collage.png";
import Link from "next/link";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-schibsted",
});

const features = [
  {
    icon: Music,
    title: "Thousands of Tracks",
    description: "Instant access to thousands of licensable tracks",
  },
  {
    icon: Shield,
    title: "Pre-Cleared",
    description: "Pre-cleared and ready for commercial use",
  },
  {
    icon: Headphones,
    title: "Music Supervision",
    description: "Guided music supervision support if needed",
  },
  {
    icon: Globe,
    title: "Global Licensing",
    description: "Global licensing via Music House International",
  },
];

const ServiceMusicLibrary = () => {
  return (
    <section
      id="1"
      className={`${schibstedGrotesk.variable} font-sans py-20 bg-gradient-to-br from-white via-orange-50/20 to-white relative overflow-hidden`}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100 to-transparent rounded-full blur-2xl opacity-20"></div>

      <div className="relative w-[90%] lg:w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16">
          {/* Content Block */}
          <div className="flex-1 space-y-8">
            {/* Service Number & Badge */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 text-white text-2xl font-black rounded-2xl shadow-lg">
                01
              </div>
              <div className="inline-flex items-center gap-2 bg-white border border-orange-200 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <Music className="w-4 h-4" />
                Music Library
              </div>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Production Music
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Library
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              We offer direct access to a{" "}
              <span className="text-orange-500 font-semibold">
                global catalog of licensable music
              </span>{" "}
              through our Music House International division. From cinematic
              scores to ambient textures and uptempo commercial tracks, every
              piece is pre-cleared and ready to use — with support from our team
              to help you find the right sound.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 text-orange-600 rounded-lg group-hover:bg-orange-200 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="https://www.library.cmmg.co.za/"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Browse Library
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Tracks Available</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Pre-Cleared</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Access</div>
              </div>
            </div>
          </div>

          {/* Image Block */}
          <div className="flex-1 relative">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={musicLibraryImg1}
                  alt="Music Library Interface"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">
                    Live Music Library
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Real-time access to catalog
                </p>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-15 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMusicLibrary;
