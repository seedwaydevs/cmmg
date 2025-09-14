"use client";
import React, { useState, useEffect } from "react";
import { Volume2, Play, Music } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Frosted Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-white/10 z-10" />

      {/* Floating Audio Visualizer Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 text-orange-400 animate-bounce opacity-30">
        <Volume2 />
      </div>
      <div className="absolute top-40 right-20 w-6 h-6 text-orange-300 animate-pulse opacity-40">
        <Music />
      </div>
      <div
        className="absolute bottom-40 left-20 w-10 h-10 text-orange-500 animate-bounce opacity-20"
        style={{ animationDelay: "1s" }}
      >
        <Play />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-[90%] mx-auto">
          <div className="mt-16 md:mt-20 py-10 flex flex-col justify-center items-center text-white">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              {/* Badge */}
              <div className=" inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium tracking-wide uppercase">
                  Services
                </span>
              </div>

              <div className="space-y-3  md:max-w-lg lg:max-w-6xl">
                <h1 className="font-black tracking-tight text-3xl md:text-5xl lg:text-7xl text-center leading-[0.9]">
                  Built for production-grade
                  <span className="text-orange-500 block">impact</span>
                </h1>

                <p className="text-sm lg:text-xl text-gray-200 text-center py-5 max-w-md md:max-w-lg lg:max-w-3xl mx-auto leading-relaxed font-light">
                  We offer end-to-end audio and visual production services —
                  from original compositions and final mix to studio hire, sound
                  design, and licensable music. Whether you're building a
                  campaign, scoring a film, or launching a podcast, we bring the
                  technical precision and creative energy your project needs.
                </p>
              </div>

              {/* Service Quick Links */}
              <div className="hidden my-3 md:flex flex-wrap justify-center gap-4">
                {[
                  {
                    label: "Audio Production",
                    icon: <Volume2 className="w-4 h-4" />,
                  },
                  {
                    label: "Video Production",
                    icon: <Play className="w-4 h-4" />,
                  },
                  {
                    label: "Music Library",
                    icon: <Music className="w-4 h-4" />,
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-orange-500">{service.icon}</div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {service.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-medium tracking-wide">
            EXPLORE SERVICES
          </span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
