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
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Instrument+Serif:ital@1&family=Manrope:wght@400;500;600&display=swap');

        .label-hero-root {
          width: 100%;
          min-height: 80vh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #F1F0EC;
        }

        /* Soft glow bloom, upper-left — same language as the homepage hero */
        .label-hero-root::before {
          content: '';
          position: absolute;
          top: -10%;
          left: -8%;
          width: 42vw;
          height: 42vw;
          max-width: 620px;
          max-height: 620px;
          background: radial-gradient(circle,
            rgba(255,107,53,0.16) 0%,
            rgba(255,107,53,0.07) 40%,
            rgba(241,240,236,0) 70%);
          pointer-events: none;
          z-index: 0;
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
          background: #FF4B1F; flex-shrink: 0;
        }
        .label-hero-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(23,21,26,0.45);
        }

        .label-hero-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(3.5rem, 8vw, 6.5rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #17151A;
        }
        .label-hero-title em {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-weight: 400;
          text-transform: none;
          color: #FF4B1F;
        }

        .label-hero-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(23,21,26,0.5);
          max-width: 440px;
        }

        .label-hero-cta-primary {
          font-family: 'Manrope', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #ffffff; background: #FF4B1F; border: none;
          padding: 0.9rem 2rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          width: fit-content;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .label-hero-cta-primary:hover { background: #D93B14; transform: translateY(-1px); }

        /* Stats — plain, no dividers */
        .label-hero-stats {
          display: flex; gap: 2.5rem;
          padding-top: 1.5rem;
        }
        .label-hero-stat-value {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(1.4rem, 2.6vw, 1.85rem);
          letter-spacing: -0.02em; color: #17151A; line-height: 1;
        }
        .label-hero-stat-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(23,21,26,0.35); margin-top: 0.3rem;
        }

        /* ── Right — featured release card ── */
        .label-hero-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .label-hero-card {
          width: 100%;
          max-width: 400px;
          background: #ffffff;
          box-shadow: 0 24px 60px -20px rgba(23,21,26,0.18);
          display: flex; flex-direction: column;
          overflow: hidden;
          position: relative;
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
        }
        .label-hero-card:hover .label-hero-card-image img {
          transform: scale(1.04);
        }

        /* Play button overlay */
        .label-hero-card-play {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(23,21,26,0.25);
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 1;
        }
        .label-hero-card:hover .label-hero-card-play { opacity: 1; }
        .label-hero-card-play-btn {
          width: 56px; height: 56px;
          background: #FF4B1F;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #ffffff;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .label-hero-card-play-btn:hover { background: #D93B14; transform: scale(1.08); }

        .label-hero-card-body {
          padding: 1.5rem;
        }
        .label-hero-card-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(23,21,26,0.35);
          margin-bottom: 0.5rem;
        }
        .label-hero-card-title {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: 1.15rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #17151A;
        }
        .label-hero-card-artist {
          font-family: 'Manrope', sans-serif;
          font-size: 0.72rem; font-weight: 600;
          color: #FF4B1F; margin-top: 0.2rem;
        }
        .label-hero-card-year {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 500;
          color: rgba(23,21,26,0.3);
          margin-top: 0.15rem;
        }

        @media (max-width: 1024px) {
          .label-hero-inner { grid-template-columns: 1fr; gap: 3rem; }
          .label-hero-right { justify-content: flex-start; }
          .label-hero-card  { max-width: 100%; }
        }
        @media (max-width: 640px) {
          .label-hero-inner { padding: 7rem 1.5rem 5rem; }
          .label-hero-title { font-size: 3rem; }
        }
      `}</style>

      <section className="label-hero-root">
        <div className="label-hero-inner">
          {/* Left */}
          <div className="label-hero-left">
            <div className="label-hero-eyebrow">
              <span className="label-hero-eyebrow-line" />
              <span className="label-hero-eyebrow-text">CMMG Records</span>
            </div>

            <h1 className="label-hero-title" ref={titleRef}>
              The <em>Label</em>
              <br />& Our Artists
            </h1>

            <p className="label-hero-desc">
              Premium releases from our signed artists. Discover the latest
              singles, albums, and exclusive tracks — South African stories told
              through world-class sound.
            </p>

            <Link href="#releases" className="label-hero-cta-primary">
              Explore Releases
              <ArrowRight size={14} />
            </Link>

            <div className="label-hero-stats">
              {stats.map((s, i) => (
                <div key={i}>
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
                  sizes="400px"
                />
                <div className="label-hero-card-play">
                  <button
                    className="label-hero-card-play-btn"
                    aria-label="Play"
                  >
                    <Play size={22} fill="#ffffff" style={{ marginLeft: 3 }} />
                  </button>
                </div>
              </div>

              <div className="label-hero-card-body">
                <div className="label-hero-card-label">Latest Release</div>
                <div className="label-hero-card-title">Njalo</div>
                <div className="label-hero-card-artist">YandiSibi</div>
                <div className="label-hero-card-year">2025 · CMMG Records</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
