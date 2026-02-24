"use client";

import React from "react";
import Link from "next/link";

const Catalog = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .catalog-root {
          width: 100%;
          height: 100%;
          background-image: url('/images/speaker.jpg');
          background-size: cover;
          background-position: top;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        /* Dark overlay */
        .catalog-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.65);
          pointer-events: none;
          z-index: 0;
        }
        /* Orange left stripe */
        .catalog-root::after {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
          z-index: 1;
        }

        .catalog-inner {
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

        .catalog-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .catalog-eyebrow-line { width: 28px; height: 1px; background: #f05a1a; }
        .catalog-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        .catalog-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 7vw, 6.5rem);
          letter-spacing: -0.04em;
          line-height: 0.92;
          text-transform: uppercase;
          color: #ffffff;
        }
        .catalog-title em { font-style: normal; color: #f05a1a; }

        .catalog-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.65;
          color: rgba(255,255,255,0.5);
          max-width: 480px;
        }

        .catalog-cta {
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
          align-self: flex-start;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .catalog-cta:hover { background: #d44c10; transform: translateY(-1px); }

        @media (max-width: 768px) {
          .catalog-inner { padding: 0 1.5rem; padding-top: 7rem; padding-bottom: 4rem; }
        }
      `}</style>

      <div className="catalog-root">
        <div className="catalog-inner">
          <div className="catalog-eyebrow">
            <span className="catalog-eyebrow-line" />
            <span className="catalog-eyebrow-text">
              Production Music Library
            </span>
          </div>
          <h2 className="catalog-title">
            The Full
            <br />
            <em>Catalog</em>
          </h2>
          <p className="catalog-desc">
            Thousands of original tracks cleared for film, television,
            advertising, and digital content. Sync-ready and professionally
            produced.
          </p>
          <Link href="https://www.library.cmmg.co.za" className="catalog-cta">
            Browse the Library →
          </Link>
        </div>
      </div>
    </>
  );
};

export default Catalog;
