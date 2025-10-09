import Image from "next/image";
import { Schibsted_Grotesk } from "next/font/google";
import {
  Video,
  Film,
  Camera,
  Edit,
  Palette,
  Play,
  ArrowRight,
  Clapperboard,
} from "lucide-react";
import videoProdImg1 from "../../../../public/prodco.jpg";
import Link from "next/link";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-schibsted",
});

const services = [
  {
    icon: Edit,
    title: "Creative Development",
    description: "Creative development and scripting",
  },
  {
    icon: Camera,
    title: "Coporate Videos",
    description: "Training and Induction Videos",
  },
  {
    icon: Video,
    title: "Music Videos & Promos",
    description: "Music video, promo, and branded content",
  },
  {
    icon: Film,
    title: "TV Commercials",
    description: "Full commercial crew with sound and score produciton",
  },
  {
    icon: Palette,
    title: "Post Production",
    description: "Editing, color grading, and post",
  },
  {
    icon: Play,
    title: "Final Delivery",
    description: "Final delivery for web, TV, or cinema",
  },
];

const ServiceVideoProduction = () => {
  return (
    <section
      id="4"
      className={`${schibstedGrotesk.variable} font-sans py-20 bg-gradient-to-br from-red-50/30 via-white to-orange-50/20 relative overflow-hidden`}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-orange-100 to-transparent rounded-full blur-2xl opacity-20"></div>

      <div className="relative w-[90%] lg:w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16">
          {/* Image Block - Left side */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={videoProdImg1}
                  alt="On set with camera crew filming"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Recording Status Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-gray-700">
                    Recording
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clapperboard className="w-4 h-4 text-red-500" />
                  <span className="text-xs text-gray-600">
                    Scene 1 - Take 3
                  </span>
                </div>
              </div>

              {/* Equipment Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      4K Production
                    </p>
                    <p className="text-xs text-gray-500">Cinema Quality</p>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-red-200 to-orange-200 rounded-2xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-15 -z-10"></div>
            </div>
          </div>

          {/* Content Block - Right side */}
          <div className="flex-1 space-y-8 order-1 lg:order-2">
            {/* Service Number & Badge */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 text-white text-2xl font-black rounded-2xl shadow-lg">
                04
              </div>
              <div className="inline-flex items-center gap-2 bg-white border border-red-200 text-red-600 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <Video className="w-4 h-4" />
                Video Production
              </div>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Video
                <br />
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Production
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              From branded content and music videos to short films and social
              campaigns, we bring your vision to life with{" "}
              <span className="text-red-500 font-semibold">
                full-service video production
              </span>{" "}
              — concept to delivery. Our team handles{" "}
              <span className="text-orange-500 font-semibold">
                creative direction, filming, editing
              </span>
              , and everything in between.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-red-100 to-orange-100 text-red-600 rounded-lg group-hover:from-red-200 group-hover:to-orange-200 transition-colors">
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
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceVideoProduction;
