"use client";

import React from "react";
import Link from "next/link";

const NewReleases = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .releases-root {
          width: 100%;
          height: 100%;
          background-image: url('/njalo.jpg');
          background-size: cover;
          background-position: top;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        /* Dark overlay — replaces the original blur glass effect for cleaner readability */
        .releases-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.72);
          pointer-events: none;
          z-index: 0;
        }
        /* Orange left stripe */
        .releases-root::after {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
          z-index: 1;
        }

        .releases-inner {
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
          padding: 0 3rem;
          padding-top: 9rem;
          padding-bottom: 5rem;
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
        }

        .releases-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .releases-eyebrow-line { width: 28px; height: 1px; background: #f05a1a; }
        .releases-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }
        .releases-badge {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #1a8cff;
          border: 1px solid rgba(26,140,255,0.4);
          padding: 0.25rem 0.6rem;
          margin-left: 0.5rem;
        }

        .releases-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 7vw, 6.5rem);
          letter-spacing: -0.04em;
          line-height: 0.92;
          text-transform: uppercase;
          color: #ffffff;
        }
        .releases-title em { font-style: normal; color: #f05a1a; }

        .releases-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.65;
          color: rgba(255,255,255,0.5);
          max-width: 480px;
        }

        .releases-cta-row {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .releases-cta-primary {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          background: #f05a1a;
          border: none;
          padding: 0.85rem 2rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .releases-cta-primary:hover { background: #d44c10; transform: translateY(-1px); }

        .releases-cta-secondary {
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding-bottom: 2px;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .releases-cta-secondary:hover { color: #ffffff; border-color: #f05a1a; }

        @media (max-width: 768px) {
          .releases-inner { padding: 0 1.5rem; padding-top: 7rem; padding-bottom: 4rem; }
        }
      `}</style>

      <div className="releases-root">
        <div className="releases-inner">
          <div className="releases-eyebrow">
            <span className="releases-eyebrow-line" />
            <span className="releases-eyebrow-text">Latest Drops</span>
            <span className="releases-badge">New</span>
          </div>
          <h2 className="releases-title">
            New
            <br />
            <em>Releases</em>
          </h2>
          <p className="releases-desc">
            Fresh music from our roster. Stream the latest singles, albums, and
            EPs from CMMG artists — straight from the studio.
          </p>
          <div className="releases-cta-row">
            <Link href="/commercial" className="releases-cta-primary">
              Listen Now →
            </Link>
            <Link href="/about" className="releases-cta-secondary">
              Meet the Artists
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewReleases;
