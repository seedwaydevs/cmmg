"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Play,
  Users,
  Trophy,
  Calendar,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
import prod from "../../../../public/prodco.jpg";
import MissionVisionTiles from "./MissionVisionTiles";
import { title } from "process";
import Team from "@/components/about/Team";

type Props = {};

const AboutContent = (props: Props) => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    mission: false,
    services: false,
    team: false,
  });
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: "01",
      title: "Video & Audio Production",
      description:
        "Industry-leading video and audio production services tailored for modern media needs.",
      icon: <Play className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Music Library Licensing",
      description:
        "Access our in-house music library with flexible licensing for film, ads, and social content.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Creative Sound Design",
      description:
        "Work with our experienced creatives in storytelling, sound design, and audio branding.",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "End-to-End Solutions",
      description:
        "From ideation to final delivery, we offer full content production services that bring your vision to life.",
      icon: <Calendar className="w-6 h-6" />,
    },
  ];

  const stats = [
    { number: "20+", label: "Employees" },
    { number: "120+", label: "Projects" },
    { number: "5+", label: "Years Experience" },
  ];

  const missionvision = [
    {
      id: 1,
      heading1: "Our",
      heading2: "Vision",
      paragraph:
        "Our vision is to redefine media production by empowering brands, creators, and storytellers through immersive visual and audio experiences — where innovation meets authenticity, and every story leaves a lasting impact.",
    },
    {
      id: 2,
      heading1: "Our",
      heading2: "Mission",
      paragraph:
        "We exist to empower brands, creators, and storytellers by delivering compelling visual and audio content. Our goal is to set a new standard in media production by merging innovation with authenticity.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen overflow-hidden">
        {/* Background Image - Using placeholder gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500  to-orange-600"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Frosted Glass Overlay */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-white/10 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="w-[90%] lg:w-[80%] mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Left Content */}
              <div
                className={`space-y-8 transform transition-all duration-1000 ${
                  isVisible.hero
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                {/* Badge */}

                <div className="space-y-6">
                  <h1 className="text-6xl md:text-5xl  font-black leading-[1] tracking-tight">
                    Amplifying voices around the
                    <span className="text-blue-700 "> world</span>
                  </h1>

                  <p className="text-lg lg:text-xl text-white leading-relaxed max-w-lg font-light">
                    At CMMG, we craft sound that speaks. From artist development
                    to production and distribution, our mission is to bring
                    powerful music and authentic stories to audiences
                    everywhere.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl lg:text-3xl font-bold text-white">
                        {stat.number}
                      </div>
                      <div className="text-sm text-neutral-100 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="hidden lg:flex justify-end">
                <div className="relative group">
                  <div className="relative w-90 h-90 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
                      <Image
                        src={prod}
                        alt="image"
                        fill
                        className="object-cover"
                        sizes="400px"
                      />
                    </div>
                  </div>

                  {/* Info Card */}
                  <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 min-w-64">
                    <h3 className="text-lg font-bold text-white mb-1">
                      World-class Production
                    </h3>
                    <p className="text-orange-400 font-medium mb-2">
                      CMMG Studio
                    </p>
                    <p className="text-gray-300 text-sm">
                      Professional • Creative • Innovative
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Hint */}
        <div className="absolute bottom-8 md:bottom-2 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm font-medium tracking-wide">
              DISCOVER MORE
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

      {/* Mission & Vision */}
      <section id="mission" className="relative py-32">
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative z-10 w-[90%] lg:w-[80%] mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.mission
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="flex items-center mb-16">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
              <span className="text-sm uppercase tracking-widest text-neutral-900 font-semibold">
                Mission / Vision
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {missionvision.map((tile) => (
                <MissionVisionTiles
                  key={tile.id}
                  heading1={tile.heading1}
                  heading2={tile.heading2}
                  paragraph={tile.paragraph}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="services" className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800 via-blue-900 to-black"></div>
        <div className="relative z-10 w-[90%] lg:w-[80%] mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.services
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="flex items-center mb-16">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
              <span className="text-sm uppercase tracking-widest text-gray-200 font-semibold">
                Why choose us
              </span>
            </div>

            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                Production-level <span className="text-orange-500">polish</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We combine creative vision with technical precision to deliver
                high-impact audio and visual content. Whether you're launching a
                campaign, scoring a film, or recording in our studio, we bring a
                sharp, professional edge to every project—without losing the
                soul of your story.
              </p>
            </div>

            {/* Interactive Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105"
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="absolute inset-0 backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-all duration-300"></div>
                  <div className="relative p-8 h-full">
                    <div className="flex items-center mb-6">
                      <span className="text-orange-500 text-2xl font-black mr-4">
                        {service.number}
                      </span>
                      <div className="text-orange-500">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-snug">
                      {service.description}
                    </p>
                    <ChevronRight className="w-6 h-6 text-orange-500 mt-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="relative z-10 w-[90%] lg:w-[80%] mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.team
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-16">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                <span className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
                  Meet the team
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black mb-8">
                Meet the <span className="text-orange-500">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
                The creative minds and technical experts behind every project
              </p>

              {/* Team component placeholder with matching design */}
              <div className="relative">
                {/* <div className="absolute inset-0 backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/10"></div> */}
                <Team />
                {/* <div className="relative p-16">
                  <Users className="w-24 h-24 mx-auto text-orange-500/60 mb-8" />
                  <p className="text-gray-400 text-lg">
                    Team component will be integrated here
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
