// ServicesGrid.tsx
"use client";

import { Schibsted_Grotesk } from "next/font/google";
import Link from "next/link";
import {
  ArrowUpRight,
  Music,
  Mic,
  Camera,
  Speaker,
  Lightbulb,
  Play,
} from "lucide-react";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-schibsted",
});

const services = [
  {
    id: "1",
    title: "Production Music Library",
    description:
      "Instant access to a curated collection of licensable tracks for film, TV, digital, and more. Powered by our international music catalog.",
    icon: Music,
    color: "from-purple-500 to-pink-500",
    accent: "bg-purple-100 text-purple-600",
  },
  {
    id: "2",
    title: "Sound Production",
    description:
      "Full-spectrum audio services including original music composition, final mix, radio jingle creation, and podcast production — all handled in-house by experienced engineers.",
    icon: Mic,
    color: "from-blue-500 to-cyan-500",
    accent: "bg-blue-100 text-blue-600",
  },
  {
    id: "3",
    title: "Studio Hire",
    description:
      "Rent our professional-grade, soundproof studios with top-tier gear, solar backup, and 24/7 access — ideal for music, voiceover, and content sessions.",
    icon: Play,
    color: "from-green-500 to-emerald-500",
    accent: "bg-green-100 text-green-600",
  },
  {
    id: "4",
    title: "Video Production",
    description:
      "From scripting to delivery, we create cinematic, brand-aligned video content for social, commercial, and film projects.",
    icon: Camera,
    color: "from-red-500 to-orange-500",
    accent: "bg-red-100 text-red-600",
  },
  {
    id: "5",
    title: "Event Sound & Entertainment",
    description:
      "End-to-end live event support — from professional sound systems and engineers to DJs and camera crews for coverage.",
    icon: Speaker,
    color: "from-indigo-500 to-purple-500",
    accent: "bg-indigo-100 text-indigo-600",
  },
  {
    id: "6",
    title: "Creative Consulting",
    description:
      "Strategic support for music supervision, audio branding, licensing clearance, and content direction across media formats.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    accent: "bg-amber-100 text-amber-600",
  },
];

const ServicesGrid = () => {
  return (
    <div className={`${schibstedGrotesk.variable} font-sans py-16`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;

          return (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              ></div>

              {/* Header */}
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  {/* Service Number */}
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-orange-500 leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/* Icon */}
                    <div
                      className={`p-3 rounded-xl ${service.accent} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 line-clamp-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors group/link"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-sm font-medium uppercase tracking-wider text-gray-600">
            Ready to get started?
          </span>
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          Let's create something amazing together
        </h3>
        <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Get In Touch
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ServicesGrid;
