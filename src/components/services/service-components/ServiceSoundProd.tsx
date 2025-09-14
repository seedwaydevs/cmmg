import Image from "next/image";
import { Schibsted_Grotesk } from "next/font/google";
import {
  Mic,
  Radio,
  Podcast,
  Film,
  Volume2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import soundProdImg1 from "../../../../public/pexels-clam-lo-1782448-3469712.jpg";
import Link from "next/link";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-schibsted",
});

const services = [
  {
    icon: Mic,
    title: "Original Composition",
    description: "Original music composition and arrangement",
  },
  {
    icon: Film,
    title: "Mixing & Mastering",
    description: "Final mix and mastering for film, TV, and ads",
  },
  {
    icon: Radio,
    title: "Jingle Production",
    description: "Radio jingle writing, VO recording, and post",
  },
  {
    icon: Podcast,
    title: "Podcast Production",
    description: "Recording, editing, and sound design",
  },
  {
    icon: Volume2,
    title: "Voiceover Sessions",
    description: "Voiceover sessions and dubbing",
  },
  {
    icon: Sparkles,
    title: "Audio Restoration",
    description: "Audio clean-up and restoration",
  },
];

const ServiceSoundProduction = () => {
  return (
    <section
      id="2"
      className={`${schibstedGrotesk.variable} font-sans py-20 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20 relative overflow-hidden`}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-purple-100 to-transparent rounded-full blur-2xl opacity-20"></div>

      <div className="relative w-[90%] lg:w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16">
          {/* Image Block - Now on the left */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={soundProdImg1}
                  alt="Recording session in professional studio"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Audio Waveform Visualization */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-gray-700">
                    Recording
                  </span>
                </div>
                <div className="flex items-end gap-1 h-8">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-blue-500 to-purple-500 w-1 rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 100 + 20}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Studio Equipment Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Pro Studio
                    </p>
                    <p className="text-xs text-gray-500">Broadcast Ready</p>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-15 -z-10"></div>
            </div>
          </div>

          {/* Content Block - Now on the right */}
          <div className="flex-1 space-y-8 order-1 lg:order-2">
            {/* Service Number & Badge */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl font-black rounded-2xl shadow-lg">
                02
              </div>
              <div className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <Volume2 className="w-4 h-4" />
                Audio Production
              </div>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Sound
                <br />
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Production
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              From concept to final master, our sound department handles the{" "}
              <span className="text-blue-500 font-semibold">
                full spectrum of audio creation
              </span>
              . Whether you're recording a jingle, producing a podcast, or
              mixing for film, our in-house engineers deliver crisp,{" "}
              <span className="text-purple-500 font-semibold">
                broadcast-ready sound
              </span>{" "}
              that meets the highest creative and technical standards.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 rounded-lg group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {service.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quality Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Pro</div>
                <div className="text-sm text-gray-600">Equipment</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24bit</div>
                <div className="text-sm text-gray-600">Recording</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Expert</div>
                <div className="text-sm text-gray-600">Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSoundProduction;
