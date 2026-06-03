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

import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutWhyUs from "@/components/about/AboutWhyUs";
import AboutTeam from "@/components/about/AboutTeam";

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
      { threshold: 0.1 },
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
    <>
      <AboutHero />
      <AboutMission />
      <AboutWhyUs />
      <AboutTeam />
    </>
  );
};

export default AboutContent;
