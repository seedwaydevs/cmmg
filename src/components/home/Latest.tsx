"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { njalo, cstaz, tms, tms2, nkanyamba } from "@/data";

const albumsData = [
  {
    id: 1,
    title: "Njalo",
    artist: "YandiSibi",
    releaseDate: "September 12, 2025",
    coverImage: njalo,
    link: "https://open.spotify.com/embed/track/7DtN0ksb5UH0TSl0aFfdVB?utm_source=generator",
  },
  {
    id: 2,
    title: "Jesu Msindisi",
    artist: "L & J CSTAZ",
    releaseDate: "Coming Soon",
    coverImage: cstaz,
    link: "https://open.spotify.com/embed/album/3HeSTciM2xJ9omxiyrijOc?utm_source=generator",
  },
  {
    id: 3,
    title: "Live Culture",
    artist: "Abe Sibiya",
    releaseDate: "Coming Soon",
    coverImage: cstaz,
    link: "https://open.spotify.com/embed/album/7ET7RwAOI658wECgo2gq3o?utm_source=generator",
  },
  {
    id: 4,
    title: "The Morning Service",
    artist: "Abe Sibiya",
    releaseDate: "Coming Soon",
    coverImage: tms2,
    link: "https://open.spotify.com/embed/album/7ycsy7jxkODp286ZmGACnC?utm_source=generator",
  },
  {
    id: 5,
    title: "Imfihlo Kamakoti",
    artist: "Nkanyamba",
    releaseDate: "Coming Soon",
    coverImage: nkanyamba,
    link: "https://open.spotify.com/embed/album/6zmGMomhs1gfMgA9gHkxdO?utm_source=generator",
  },
];

const Latest = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex !== null ? albumsData[selectedIndex] : null;

  const toggle = (i: number) =>
    setSelectedIndex(selectedIndex === i ? null : i);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        /* ── Root ── */
        .latest-root {
          width: 100%;
          background: #111110;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        /* Dot grid — always visible */
        .latest-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 1;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 60%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 60%, transparent 100%);
        }

        /* Orange left stripe */
        .latest-stripe {
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
          z-index: 4;
        }

        /* Ambient colour glows */
        .latest-glow-orange {
          position: absolute;
          bottom: -10%; left: -5%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(240,90,26,0.18) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }
        .latest-glow-blue {
          position: absolute;
          top: -10%; right: -5%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(26,140,255,0.12) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        /* Blurred album art bg when selected */
        .latest-bg-art {
          position: absolute;
          inset: 0;
          z-index: 0;
          transition: opacity 0.6s ease;
        }
        .latest-bg-art-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10,10,10,0.6);
          z-index: 1;
        }

        /* ── Inner ── */
        .latest-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
          position: relative;
          z-index: 2;
        }

        /* ── Section header: two-col ── */
        .latest-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .latest-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .latest-eyebrow-line {
          width: 28px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }
        .latest-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        .latest-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em;
          line-height: 0.95;
          text-transform: uppercase;
          color: #ffffff;
        }
        .latest-title em { font-style: normal; color: #f05a1a; }

        .latest-header-right {
          display: flex; flex-direction: column;
          justify-content: flex-end; gap: 1.25rem;
        }
        .latest-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem; font-weight: 400;
          line-height: 1.7; color: rgba(255,255,255,0.45);
          max-width: 400px;
        }

        .latest-cta-row { display: flex; gap: 1rem; flex-wrap: wrap; }

        .latest-cta-primary {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #ffffff; background: #f05a1a; border: none;
          padding: 0.8rem 1.75rem; cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .latest-cta-primary:hover { background: #d44c10; transform: translateY(-1px); }

        .latest-cta-secondary {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); background: none;
          border: 1px solid rgba(255,255,255,0.12);
          padding: 0.8rem 1.75rem; cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .latest-cta-secondary:hover { border-color: #f05a1a; color: #f05a1a; }

        /* ── Album grid ── */
        .latest-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border-left: 1px solid rgba(255,255,255,0.08);
          border-top: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 2px;
        }

        .latest-album-btn {
          border-right: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: none; border-top: none; border-left: none;
          cursor: pointer; padding: 0; position: relative;
          overflow: hidden; aspect-ratio: 1; display: block; width: 100%;
          transition: opacity 0.25s ease;
        }
        .latest-album-btn:not(.active) { opacity: 0.7; }
        .latest-album-btn:hover { opacity: 1; }
        .latest-album-btn.active { opacity: 1; }
        .latest-album-btn.active::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 100%; height: 3px;
          background: #f05a1a; z-index: 3;
        }

        .latest-album-img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.4s ease;
        }
        .latest-album-btn:hover .latest-album-img { transform: scale(1.04); }

        .latest-album-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%);
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 1rem; z-index: 2;
        }
        .latest-album-title {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.85rem; letter-spacing: -0.01em;
          color: #ffffff; line-height: 1.1;
        }
        .latest-album-artist {
          font-family: 'Manrope', sans-serif; font-size: 0.65rem;
          font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(255,255,255,0.45); margin-top: 0.2rem;
        }

        .latest-album-badge {
          position: absolute; top: 0.75rem; right: 0.75rem; z-index: 3;
          background: #f05a1a; width: 20px; height: 20px;
          display: flex; align-items: center; justify-content: center;
        }

        /* ── Player panel ── */
        .latest-player {
          border: 1px solid rgba(255,255,255,0.08);
          border-top: none; background: rgba(255,255,255,0.02);
          overflow: hidden;
          animation: player-drop 0.35s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes player-drop {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .latest-coming-soon {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 4rem 2rem; gap: 1rem;
        }
        .latest-cs-icon {
          width: 48px; height: 48px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.3); margin-bottom: 0.5rem;
        }
        .latest-cs-title {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: 1.5rem; letter-spacing: -0.02em;
          text-transform: uppercase; color: rgba(255,255,255,0.5);
        }
        .latest-cs-title span { color: #f05a1a; }
        .latest-cs-desc {
          font-family: 'Manrope', sans-serif; font-size: 0.8rem;
          font-weight: 400; color: rgba(255,255,255,0.25);
        }
        .latest-cs-dots { display: flex; gap: 0.4rem; margin-top: 0.5rem; }
        .latest-cs-dot {
          width: 4px; height: 4px; background: #f05a1a;
          animation: cs-dot 1.2s ease-in-out infinite;
        }
        .latest-cs-dot:nth-child(2) { animation-delay: 0.2s; }
        .latest-cs-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes cs-dot {
          0%,100% { opacity: 0.2; }
          50%      { opacity: 1; }
        }

        .latest-spotify { width: 100%; }
        .latest-spotify iframe { display: block; border: none; }

        @media (max-width: 1024px) {
          .latest-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .latest-grid   { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .latest-inner { padding: 3rem 1.5rem; }
          .latest-grid  { grid-template-columns: repeat(2, 1fr); }
          .latest-title { font-size: 2.25rem; }
        }
      `}</style>

      <div className="latest-root">
        {/* Background layers */}
        <div className="latest-dots" />
        <div className="latest-glow-orange" />
        <div className="latest-glow-blue" />
        <div className="latest-stripe" />

        {/* Album art blur — only when selected */}
        {selected && (
          <div className="latest-bg-art">
            <Image
              src={selected.coverImage}
              alt=""
              fill
              aria-hidden="true"
              style={{
                objectFit: "cover",
                filter: "blur(60px)",
                opacity: 0.15,
              }}
            />
            <div className="latest-bg-art-overlay" />
          </div>
        )}

        <div className="latest-inner">
          {/* Section header */}
          <div className="latest-header">
            <div>
              <div className="latest-eyebrow">
                <span className="latest-eyebrow-line" />
                <span className="latest-eyebrow-text">Record Label</span>
              </div>
              <h2 className="latest-title">
                Latest
                <br />
                Commercial <em>Albums</em>
              </h2>
            </div>
            <div className="latest-header-right">
              <p className="latest-desc">
                Discover our most recent commercial releases, featuring our
                artists and the soundscapes that define contemporary South
                African music.
              </p>
              <div className="latest-cta-row">
                <button
                  className="latest-cta-primary"
                  onClick={() =>
                    setSelectedIndex(selectedIndex === null ? 0 : null)
                  }
                >
                  {selectedIndex !== null ? "Close Player" : "Pick an Album"}
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12v3m3-6v9m3-12v15m3-12v9m3-6v3"
                    />
                  </svg>
                </button>
                <Link href="/commercial" className="latest-cta-secondary">
                  All Releases
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Album grid */}
          <div className="latest-grid">
            {albumsData.map((album, i) => (
              <button
                key={album.id}
                className={`latest-album-btn${selectedIndex === i ? " active" : ""}`}
                onClick={() => toggle(i)}
                aria-label={`Select ${album.title}`}
              >
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  fill
                  className="latest-album-img"
                  style={{ objectFit: "cover" }}
                />
                <div className="latest-album-overlay">
                  <div className="latest-album-title">{album.title}</div>
                  <div className="latest-album-artist">{album.artist}</div>
                </div>
                {selectedIndex === i && (
                  <div className="latest-album-badge">
                    <svg
                      width="10"
                      height="10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Player panel */}
          {selected && (
            <div className="latest-player">
              {selected.link === "" ? (
                <div className="latest-coming-soon">
                  <div className="latest-cs-icon">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <div className="latest-cs-title">
                    Coming <span>Soon</span>
                  </div>
                  <div className="latest-cs-desc">
                    This album is currently in production.
                  </div>
                  <div className="latest-cs-dots">
                    <span className="latest-cs-dot" />
                    <span className="latest-cs-dot" />
                    <span className="latest-cs-dot" />
                  </div>
                </div>
              ) : (
                <div className="latest-spotify">
                  <iframe
                    src={selected.link}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Latest;
