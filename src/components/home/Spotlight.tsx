"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

// ── Swap this out per release ──────────────────────────────────────────────
const spotlight = {
  artist: "DJ Kwame",
  song: "Izwi Lendoda",
  genre: "Amapiano",
  description: "The latest release from Dj Kwame — a powerful Amapiano track.",
  youtubeId: "YOUR_YOUTUBE_ID_HERE", // Replace with actual YouTube video ID
  thumbnail: "",
  releaseDate: "2026",
  label: "CMMG Records",
  streamUrl:
    "https://open.spotify.com/embed/album/6zmGMomhs1gfMgA9gHkxdO?utm_source=generator",
};
// ──────────────────────────────────────────────────────────────────────────

const Spotlight = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        /* ── Root — white section ── */
        .spotlight-root {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.08);
          position: relative;
        }

        .spotlight-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
        }

        /* ── Section header: two-col ── */
        .spotlight-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .spotlight-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .spotlight-eyebrow-line {
          width: 28px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }
        .spotlight-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }
        .spotlight-eyebrow-badge {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #1a8cff;
          border: 1px solid rgba(26,140,255,0.35);
          padding: 0.2rem 0.55rem;
          margin-left: 0.25rem;
        }

        .spotlight-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase;
          color: #0a0a0a;
        }
        .spotlight-title em { font-style: normal; color: #f05a1a; }

        .spotlight-header-right {
          display: flex; flex-direction: column;
          justify-content: flex-end; gap: 1.25rem;
        }
        .spotlight-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(0,0,0,0.5);
          max-width: 420px;
        }
        .spotlight-meta-row {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .spotlight-meta-item {
          display: flex; flex-direction: column; gap: 0.2rem;
        }
        .spotlight-meta-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.25);
        }
        .spotlight-meta-value {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem; font-weight: 600;
          color: rgba(0,0,0,0.65);
        }

        /* ── Video + sidebar grid ── */
        .spotlight-body {
          display: grid;
          grid-template-columns: 1fr 320px;
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
          gap: 0;
        }

        /* Video cell */
        .spotlight-video-cell {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          position: relative;
          background: #0a0a0a;
          overflow: hidden;
        }

        /* Thumbnail / play state */
        .spotlight-thumbnail {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          cursor: pointer;
          overflow: hidden;
        }
        .spotlight-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease, opacity 0.3s ease;
        }
        .spotlight-thumbnail:hover img {
          transform: scale(1.02);
          opacity: 0.85;
        }

        /* Dark overlay on thumbnail */
        .spotlight-thumbnail::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.35);
          z-index: 1;
          transition: background 0.3s ease;
        }
        .spotlight-thumbnail:hover::before {
          background: rgba(0,0,0,0.5);
        }

        /* Play button */
        .spotlight-play-btn {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          width: 72px; height: 72px;
          background: #f05a1a;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .spotlight-thumbnail:hover .spotlight-play-btn {
          background: #d44c10;
          transform: translate(-50%, -50%) scale(1.08);
        }

        /* Now playing tag */
        .spotlight-now-playing {
          position: absolute;
          top: 1rem; left: 1rem;
          z-index: 2;
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #ffffff;
          background: #f05a1a;
          padding: 0.3rem 0.7rem;
          display: flex; align-items: center; gap: 0.4rem;
        }
        .spotlight-now-playing-dot {
          width: 5px; height: 5px;
          background: #ffffff; border-radius: 50%;
          animation: sp-dot-pulse 1.2s ease-in-out infinite;
        }
        @keyframes sp-dot-pulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }

        /* YouTube iframe */
        .spotlight-iframe-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          background: #000;
        }
        .spotlight-iframe-wrap iframe {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          border: none;
          display: block;
        }

        /* Song info bar below video */
        .spotlight-video-info {
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.06);
          background: #0a0a0a;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .spotlight-song-name {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.9rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #ffffff;
        }
        .spotlight-song-artist {
          font-family: 'Manrope', sans-serif;
          font-size: 0.7rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-top: 0.2rem;
        }
        .spotlight-stream-btn {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #ffffff; background: #f05a1a; border: none;
          padding: 0.6rem 1.25rem; cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.4rem;
          white-space: nowrap; flex-shrink: 0;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .spotlight-stream-btn:hover { background: #d44c10; transform: translateY(-1px); }

        /* ── Sidebar ── */
        .spotlight-sidebar {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          display: flex; flex-direction: column;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        /* Orange left stripe on sidebar */
        .spotlight-sidebar::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
          z-index: 1;
        }

        /* Dot grid on sidebar */
        .spotlight-sidebar::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 22px 22px;
          pointer-events: none;
        }

        .spotlight-sidebar-top {
          padding: 2rem 1.75rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          position: relative; z-index: 1;
          flex: 1;
          display: flex; flex-direction: column;
          justify-content: center;
          gap: 1rem;
        }

        .spotlight-sidebar-eyebrow {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          display: flex; align-items: center; gap: 0.6rem;
        }
        .spotlight-sidebar-eyebrow::before {
          content: '';
          display: block; width: 20px; height: 1px;
          background: #f05a1a;
        }

        .spotlight-sidebar-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          letter-spacing: -0.02em; line-height: 1;
          text-transform: uppercase; color: #ffffff;
        }
        .spotlight-sidebar-title em { font-style: normal; color: #f05a1a; }

        .spotlight-sidebar-body {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem; font-weight: 400;
          line-height: 1.65; color: rgba(255,255,255,0.4);
        }

        /* Sidebar stats */
        .spotlight-sidebar-stats {
          position: relative; z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .spotlight-stat-row {
          display: flex;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 1rem 1.75rem;
          align-items: center;
          justify-content: space-between;
        }
        .spotlight-stat-row:last-child { border-bottom: none; }
        .spotlight-stat-key {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
        .spotlight-stat-val {
          font-family: 'Manrope', sans-serif;
          font-size: 0.78rem; font-weight: 600;
          color: rgba(255,255,255,0.65);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .spotlight-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .spotlight-body   { grid-template-columns: 1fr; }
          .spotlight-sidebar { border-top: 1px solid rgba(0,0,0,0.08); }
        }
        @media (max-width: 640px) {
          .spotlight-inner { padding: 3rem 1.5rem; }
          .spotlight-title { font-size: 2.25rem; }
          .spotlight-play-btn { width: 52px; height: 52px; }
          .spotlight-video-info { padding: 1rem 1.25rem; }
        }
      `}</style>

      <section className="spotlight-root">
        <div className="spotlight-inner">
          {/* Section header */}
          <div className="spotlight-header">
            <div>
              <div className="spotlight-eyebrow">
                <span className="spotlight-eyebrow-line" />
                <span className="spotlight-eyebrow-text">Spotlight</span>
                <span className="spotlight-eyebrow-badge">New Release</span>
              </div>
              <h2 className="spotlight-title">
                Spotlight —<br />
                <em>{spotlight.artist}</em>
              </h2>
            </div>

            <div className="spotlight-header-right">
              <p className="spotlight-desc">{spotlight.description}</p>
              <div className="spotlight-meta-row">
                <div className="spotlight-meta-item">
                  <span className="spotlight-meta-label">Artist</span>
                  <span className="spotlight-meta-value">
                    {spotlight.artist}
                  </span>
                </div>
                <div className="spotlight-meta-item">
                  <span className="spotlight-meta-label">Release</span>
                  <span className="spotlight-meta-value">{spotlight.song}</span>
                </div>
                <div className="spotlight-meta-item">
                  <span className="spotlight-meta-label">Year</span>
                  <span className="spotlight-meta-value">
                    {spotlight.releaseDate}
                  </span>
                </div>
                <div className="spotlight-meta-item">
                  <span className="spotlight-meta-label">Label</span>
                  <span className="spotlight-meta-value">
                    {spotlight.label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Video + sidebar */}
          <div className="spotlight-body">
            {/* Video cell */}
            <div className="spotlight-video-cell">
              {!playing ? (
                <div
                  className="spotlight-thumbnail"
                  onClick={() => setPlaying(true)}
                  role="button"
                  aria-label={`Play ${spotlight.song} by ${spotlight.artist}`}
                >
                  <img
                    src={spotlight.thumbnail}
                    alt={`${spotlight.song} thumbnail`}
                  />
                  <div className="spotlight-now-playing">
                    <span className="spotlight-now-playing-dot" />
                    Now Spotlighted
                  </div>
                  <button
                    className="spotlight-play-btn"
                    aria-label="Play video"
                  >
                    <Play
                      size={28}
                      fill="#ffffff"
                      color="#ffffff"
                      style={{ marginLeft: 3 }}
                    />
                  </button>
                </div>
              ) : (
                <div className="spotlight-iframe-wrap">
                  <iframe
                    src={`https://www.youtube.com/embed/Y_REfRJ3atM?si=t3KkohBzATfcigIL`}
                    title={`${spotlight.song} — ${spotlight.artist}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Song info bar */}
              <div className="spotlight-video-info">
                <div>
                  <div className="spotlight-song-name">{spotlight.song}</div>
                  <div className="spotlight-song-artist">
                    {spotlight.artist}
                  </div>
                </div>
                <a
                  href={spotlight.streamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotlight-stream-btn"
                >
                  Stream Now
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="spotlight-sidebar">
              <div className="spotlight-sidebar-top">
                <div className="spotlight-sidebar-eyebrow">Latest Release</div>
                <div className="spotlight-sidebar-title">
                  {spotlight.song.split(" ").slice(0, -1).join(" ")}
                  <br />
                  <em>{spotlight.song.split(" ").slice(-1)}</em>
                </div>
                <p className="spotlight-sidebar-body">
                  {spotlight.description}
                </p>
              </div>

              <div className="spotlight-sidebar-stats">
                <div className="spotlight-stat-row">
                  <span className="spotlight-stat-key">Artist</span>
                  <span className="spotlight-stat-val">{spotlight.artist}</span>
                </div>
                <div className="spotlight-stat-row">
                  <span className="spotlight-stat-key">Genre</span>
                  <span className="spotlight-stat-val">{spotlight.genre}</span>
                </div>
                <div className="spotlight-stat-row">
                  <span className="spotlight-stat-key">Released</span>
                  <span className="spotlight-stat-val">
                    {spotlight.releaseDate}
                  </span>
                </div>
                <div className="spotlight-stat-row">
                  <span className="spotlight-stat-key">Label</span>
                  <span className="spotlight-stat-val">{spotlight.label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Spotlight;
