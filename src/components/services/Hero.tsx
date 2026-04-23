"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicebg1 } from "@/data";
import { Volume2, Play, Music, ArrowRight } from "lucide-react";

const serviceLinks = [
  { label: "Audio Production", icon: Volume2, href: "#audio" },
  { label: "Video Production", icon: Play, href: "#video" },
  { label: "Music Library", icon: Music, href: "#library" },
];

const ServicesHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .svc-hero-root {
          width: 100%;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* BG image */
        .svc-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .svc-hero-bg img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }

        /* Dark overlay */
        .svc-hero-bg::after {
          content: '';
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.72);
        }

        /* Orange left stripe */
        .svc-hero-root::before {
          content: '';
          position: absolute; left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none; z-index: 3;
        }

        .svc-hero-inner {
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
          padding: 9rem 3rem 5rem;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        /* Eyebrow */
        .svc-hero-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem;
        }
        .svc-hero-eyebrow-line {
          width: 28px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }
        .svc-hero-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }
        .svc-hero-eyebrow-dot {
          width: 5px; height: 5px;
          background: #1a8cff; border-radius: 50%;
          animation: pulse-blue 2s ease-in-out infinite;
          margin-left: 0.25rem;
        }
        @keyframes pulse-blue {
          0%,100% { opacity:1; box-shadow: 0 0 0 0 rgba(26,140,255,0.4); }
          50%      { opacity:0.6; box-shadow: 0 0 0 6px rgba(26,140,255,0); }
        }

        /* Title */
        .svc-hero-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(3.5rem, 9vw, 8rem);
          letter-spacing: -0.02em;
          line-height: 0.95;
          text-transform: uppercase;
          color: #ffffff;
          max-width: 900px;
        }
        .svc-hero-title em { font-style: normal; color: #f05a1a; }

        /* Desc + CTAs row */
        .svc-hero-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .svc-hero-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(255,255,255,0.5);
          max-width: 480px;
        }

        .svc-hero-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: flex-start;
        }

        /* Service quick-link pills */
        .svc-hero-links {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .svc-hero-link {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 0.45rem 0.85rem;
          text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.4rem;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .svc-hero-link:hover { border-color: #f05a1a; color: #f05a1a; }
        .svc-hero-link svg { color: #f05a1a; }

        .svc-hero-cta {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #ffffff; background: #f05a1a; border: none;
          padding: 0.85rem 2rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .svc-hero-cta:hover { background: #d44c10; transform: translateY(-1px); }

        /* Scroll hint */
        .svc-hero-scroll {
          position: absolute;
          bottom: 2rem; left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex; flex-direction: column;
          align-items: center; gap: 0.5rem;
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
        .svc-hero-scroll svg {
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(5px); }
        }

        @media (max-width: 1024px) {
          .svc-hero-bottom { grid-template-columns: 1fr; gap: 1.5rem; }
        }
        @media (max-width: 640px) {
          .svc-hero-inner { padding: 7rem 1.5rem 5rem; }
          .svc-hero-title { font-size: 3rem; }
        }
      `}</style>

      <section className="svc-hero-root">
        {/* Background image */}
        <div className="svc-hero-bg">
          <Image
            src={servicebg1}
            alt="CMMG Services"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="svc-hero-inner">
          {/* Eyebrow */}
          <div className="svc-hero-eyebrow">
            <span className="svc-hero-eyebrow-line" />
            <span className="svc-hero-eyebrow-text">Services</span>
            <span className="svc-hero-eyebrow-dot" />
          </div>

          {/* Title */}
          <h1 className="svc-hero-title" ref={titleRef}>
            Built For
            <br />
            Production-Grade
            <br />
            <em>Impact</em>
          </h1>

          {/* Bottom row */}
          <div className="svc-hero-bottom">
            <p className="svc-hero-desc">
              End-to-end audio and visual production services — from original
              compositions and final mix to studio hire, sound design, and
              licensable music. We bring the technical precision and creative
              energy your project needs.
            </p>

            <div className="svc-hero-right">
              <div className="svc-hero-links">
                {serviceLinks.map((s, i) => (
                  <a key={i} href={s.href} className="svc-hero-link">
                    <s.icon size={11} />
                    {s.label}
                  </a>
                ))}
              </div>
              <Link href="https://studios.cmmg.co.za/" className="svc-hero-cta">
                Book a Session
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="svc-hero-scroll">
          <span>Explore Services</span>
          <svg
            width="16"
            height="16"
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
      </section>
    </>
  );
};

export default ServicesHero;
