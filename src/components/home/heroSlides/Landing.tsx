import React from "react";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";
import { Music, Mic2, Calendar, Camera } from "lucide-react";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Landing = () => {
  const navigationOptions = [
    {
      icon: Music,
      title: "Library Music",
      description: "Browse our collection",
      href: "#library",
    },
    {
      icon: Mic2,
      title: "Commercial Music",
      description: "Custom tracks",
      href: "#commercial",
    },
    {
      icon: Calendar,
      title: "Book Studio",
      description: "Reserve your session",
      href: "#booking",
    },
    {
      icon: Camera,
      title: "Content",
      description: "Social media & gallery",
      href: "#content",
    },
  ];

  return (
    <div className="relative z-10 backdrop-blur-xl bg-white/1 h-full">
      <div className="w-[90%] md:w-[90%] mx-auto h-[90vh]">
        <div className="flex flex-col justify-between h-full">
          {/* Top Badge */}
          <div className="flex justify-end mt-24 sm:mt-34 xl:mt-32">
            <div className="backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-orange-500">
              <p
                className={`text-[14px] uppercase font-bold tracking-widest text-neutral-100 ${hanken.className}`}
              >
                [ Content and Music ]
              </p>
            </div>
          </div>

          {/* Main Content - Split on Desktop */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-12">
            {/* Left Side - Text Content */}
            <div className="space-y-8 lg:flex-1">
              <p
                className={`text-lg md:text-xl font-light max-w-xs md:max-w-lg text-white/80 leading-relaxed ${hanken.className}`}
              >
                Crafting original music libraries and immersive content for
                film, television, and digital storytelling.
              </p>

              {/* Main Logo/Title */}
              <div className="relative">
                <h1
                  className={`text-8xl md:text-9xl 2xl:text-[10rem] font-black text-white tracking-tight leading-none ${sted.className}`}
                >
                  CMMG
                  <span className="text-orange-500">.</span>
                </h1>

                {/* Subtle glow effect behind title */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent blur-xl -z-10 scale-110" />
              </div>
            </div>

            {/* Mobile - Compact Buttons */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              {navigationOptions.map((option, idx) => (
                <a
                  key={idx}
                  href={option.href}
                  className="group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 active:scale-95"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-md bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors duration-300 flex-shrink-0">
                      <option.icon size={18} className="text-orange-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-sm font-bold text-white truncate ${sted.className}`}
                      >
                        {option.title}
                      </h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {/* Right Side - Navigation Buttons (Below text on mobile) */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:max-w-md lg:flex-shrink-0">
              {navigationOptions.map((option, idx) => (
                <a
                  key={idx}
                  href={option.href}
                  className="group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-start gap-3">
                    <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors duration-300">
                      <option.icon size={24} className="text-orange-400" />
                    </div>

                    <div>
                      <h3
                        className={`text-lg font-bold text-white mb-1 ${sted.className}`}
                      >
                        {option.title}
                      </h3>
                      <p
                        className={`text-sm text-white/60 ${hanken.className}`}
                      >
                        {option.description}
                      </p>
                    </div>

                    <div
                      className={`mt-2 text-xs font-semibold text-orange-400 group-hover:translate-x-1 transition-transform duration-300 ${hanken.className}`}
                    >
                      Explore →
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="flex items-center gap-3 pt-2">
            <div className="backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-orange-400/20">
              <p
                className={`text-[14px] uppercase font-bold tracking-widest text-orange-100 ${hanken.className}`}
              >
                [ Media Group ]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
