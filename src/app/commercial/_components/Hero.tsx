"use client";

import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const stats = [
  { value: "4+", label: "Artists" },
  { value: "10+", label: "Releases" },
  { value: "1M+", label: "Streams" },
];

export default function LabelHero({
  image,
}: {
  image: string | StaticImageData;
}) {
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

        .label-hero-root {
          width: 100%;
          min-height: 80vh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #0a0a0a;
        }

        /* BG image */
        .label-hero-bg {
          position: absolute; inset: 0; z-index: 0;
        }
        .label-hero-bg::after {
          content: '';
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.70);
        }

        /* Orange left stripe */
        .label-hero-root::before {
          content: '';
          position: absolute; left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none; z-index: 3;
        }

        .label-hero-inner {
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
          padding: 9rem 3rem 5rem;
          position: relative; z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        /* ── Left ── */
        .label-hero-left {
          display: flex; flex-direction: column;
          gap: 2rem;
        }

        .label-hero-eyebrow {
          display: flex; align-items: center; gap: 0.75rem;
        }
        .label-hero-eyebrow-line {
          width: 28px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }
        .label-hero-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }
        .label-hero-eyebrow-dot {
          width: 5px; height: 5px;
          background: #1a8cff; border-radius: 50%;
          animation: pulse-blue 2s ease-in-out infinite;
        }
        @keyframes pulse-blue {
          0%,100% { opacity:1; box-shadow: 0 0 0 0 rgba(26,140,255,0.4); }
          50%      { opacity:0.6; box-shadow: 0 0 0 6px rgba(26,140,255,0); }
        }

        .label-hero-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(3.5rem, 8vw, 7rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #ffffff;
        }
        .label-hero-title em { font-style: normal; color: #f05a1a; }

        .label-hero-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(255,255,255,0.5);
          max-width: 440px;
        }

        .label-hero-ctas {
          display: flex; gap: 1rem; flex-wrap: wrap;
        }
        .label-hero-cta-primary {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #ffffff; background: #f05a1a; border: none;
          padding: 0.85rem 2rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .label-hero-cta-primary:hover { background: #d44c10; transform: translateY(-1px); }
        .label-hero-cta-secondary {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.55); background: none;
          border: 1px solid rgba(255,255,255,0.12);
          padding: 0.85rem 2rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .label-hero-cta-secondary:hover { border-color: #f05a1a; color: #f05a1a; }

        /* Stats */
        .label-hero-stats {
          display: grid; grid-template-columns: repeat(3, 1fr);
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          gap: 0;
        }
        .label-hero-stat {
          padding-right: 1.5rem;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .label-hero-stat:last-child { border-right: none; padding-left: 1.5rem; padding-right: 0; }
        .label-hero-stat:nth-child(2) { padding-left: 1.5rem; }
        .label-hero-stat-value {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 3vw, 2rem);
          letter-spacing: -0.02em; color: #ffffff; line-height: 1;
        }
        .label-hero-stat-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.3); margin-top: 0.25rem;
        }

        /* ── Right — featured release card ── */
        .label-hero-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .label-hero-card {
          width: 100%;
          max-width: 420px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(10,10,10,0.6);
          backdrop-filter: blur(12px);
          display: flex; flex-direction: column;
          overflow: hidden;
          position: relative;
        }
        /* Orange top stripe */
        .label-hero-card::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 100%; height: 3px;
          background: #f05a1a; z-index: 2;
        }

        .label-hero-card-image {
          width: 100%;
          aspect-ratio: 1;
          position: relative;
          overflow: hidden;
        }
        .label-hero-card-image img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.5s ease;
          filter: grayscale(15%);
        }
        .label-hero-card:hover .label-hero-card-image img {
          transform: scale(1.04); filter: grayscale(0%);
        }

        /* Play button overlay */
        .label-hero-card-play {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.3);
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 1;
        }
        .label-hero-card:hover .label-hero-card-play { opacity: 1; }
        .label-hero-card-play-btn {
          width: 60px; height: 60px;
          background: #f05a1a;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #ffffff;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .label-hero-card-play-btn:hover { background: #d44c10; transform: scale(1.08); }

        .label-hero-card-body {
          padding: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .label-hero-card-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 0.5rem;
          display: flex; align-items: center; gap: 0.6rem;
        }
        .label-hero-card-label::before {
          content: '';
          display: block; width: 16px; height: 1px;
          background: #f05a1a;
        }
        .label-hero-card-title {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1.1rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #ffffff;
        }
        .label-hero-card-artist {
          font-family: 'Manrope', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          color: #f05a1a; margin-top: 0.2rem;
        }
        .label-hero-card-year {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 500;
          color: rgba(255,255,255,0.25);
          margin-top: 0.15rem;
        }

        /* Waveform */
        .label-hero-waveform {
          display: flex; align-items: center;
          gap: 2px; margin-top: 1rem;
          height: 24px;
        }
        .label-hero-waveform-bar {
          width: 3px; background: #f05a1a;
          animation: wave 1.2s ease-in-out infinite;
          opacity: 0.6;
        }
        @keyframes wave {
          0%,100% { transform: scaleY(0.4); }
          50%      { transform: scaleY(1); }
        }

        /* Scroll hint */
        .label-hero-scroll {
          position: absolute;
          bottom: 2rem; left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex; flex-direction: column;
          align-items: center; gap: 0.5rem;
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }
        .label-hero-scroll svg { animation: bounce 2s ease-in-out infinite; }
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(5px); }
        }

        @media (max-width: 1024px) {
          .label-hero-inner { grid-template-columns: 1fr; gap: 3rem; }
          .label-hero-right { justify-content: flex-start; }
          .label-hero-card  { max-width: 100%; }
        }
        @media (max-width: 640px) {
          .label-hero-inner { padding: 7rem 1.5rem 5rem; }
          .label-hero-title { font-size: 3rem; }
          .label-hero-stats { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <section className="label-hero-root">
        {/* BG image */}
        <div className="label-hero-bg">
          <Image
            src={image}
            alt="CMMG Record Label"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        <div className="label-hero-inner">
          {/* Left */}
          <div className="label-hero-left">
            <div className="label-hero-eyebrow">
              <span className="label-hero-eyebrow-line" />
              <span className="label-hero-eyebrow-text">CMMG Records</span>
              <span className="label-hero-eyebrow-dot" />
            </div>

            <h1 className="label-hero-title" ref={titleRef}>
              The <em>Label</em>
              <br />
              & Our
              <br />
              Artists
            </h1>

            <p className="label-hero-desc">
              Premium releases from our signed artists. Discover the latest
              singles, albums, and exclusive tracks — South African stories told
              through world-class sound.
            </p>

            <div className="label-hero-ctas">
              <Link href="#releases" className="label-hero-cta-primary">
                Explore Releases
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://www.library.cmmg.co.za/library"
                target="_blank"
                rel="noopener noreferrer"
                className="label-hero-cta-secondary"
              >
                Production Library
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="label-hero-stats">
              {stats.map((s, i) => (
                <div key={i} className="label-hero-stat">
                  <div className="label-hero-stat-value">{s.value}</div>
                  <div className="label-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — featured card */}
          <div className="label-hero-right">
            <div className="label-hero-card">
              <div className="label-hero-card-image">
                <Image
                  src={image}
                  alt="Latest Release"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="420px"
                />
                <div className="label-hero-card-play">
                  <button
                    className="label-hero-card-play-btn"
                    aria-label="Play"
                  >
                    <Play size={24} fill="#ffffff" style={{ marginLeft: 3 }} />
                  </button>
                </div>
              </div>

              <div className="label-hero-card-body">
                <div className="label-hero-card-label">Latest Release</div>
                <div className="label-hero-card-title">Njalo</div>
                <div className="label-hero-card-artist">YandiSibi</div>
                <div className="label-hero-card-year">2025 · CMMG Records</div>
                <div className="label-hero-waveform">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className="label-hero-waveform-bar"
                      style={{
                        height: `${Math.floor(Math.random() * 16) + 6}px`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="label-hero-scroll">
          <span>Discover More</span>
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
}
