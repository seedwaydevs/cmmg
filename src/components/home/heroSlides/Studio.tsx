"use client";

import React from "react";
import Link from "next/link";

const Studio = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .studio-root {
          width: 100%;
          height: 100%;
          background-image: url('/studio.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        /* Dark overlay — replaces the original blur glass effect */
        .studio-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.70);
          pointer-events: none;
          z-index: 0;
        }
        /* Orange left stripe */
        .studio-root::after {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
          z-index: 1;
        }

        .studio-inner {
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

        .studio-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .studio-eyebrow-line { width: 28px; height: 1px; background: #f05a1a; }
        .studio-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        .studio-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 7vw, 6.5rem);
          letter-spacing: -0.04em;
          line-height: 0.92;
          text-transform: uppercase;
          color: #ffffff;
        }
        .studio-title em { font-style: normal; color: #f05a1a; }

        .studio-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.65;
          color: rgba(255,255,255,0.5);
          max-width: 480px;
        }

        /* Studio specs — small horizontal stat row */
        .studio-specs {
          display: flex;
          gap: 2.5rem;
          padding: 1.25rem 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          flex-wrap: wrap;
        }
        .studio-spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .studio-spec-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
        .studio-spec-value {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .studio-spec-value span { color: #f05a1a; }

        .studio-cta {
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
        .studio-cta:hover { background: #d44c10; transform: translateY(-1px); }

        @media (max-width: 768px) {
          .studio-inner { padding: 0 1.5rem; padding-top: 7rem; padding-bottom: 4rem; }
          .studio-specs { gap: 1.5rem; }
        }
      `}</style>

      <div className="studio-root">
        <div className="studio-inner">
          <div className="studio-eyebrow">
            <span className="studio-eyebrow-line" />
            <span className="studio-eyebrow-text">Recording & Production</span>
          </div>
          <h2 className="studio-title">
            Book The
            <br />
            <em>Studio</em>
          </h2>
          <p className="studio-desc">
            Professional-grade recording facilities in Johannesburg. Available
            for independent artists, labels, and commercial productions.
          </p>

          {/* Studio specs */}
          <div className="studio-specs">
            <div className="studio-spec-item">
              <span className="studio-spec-label">Live Room</span>
              <span className="studio-spec-value">
                <span>A</span> + B
              </span>
            </div>
            <div className="studio-spec-item">
              <span className="studio-spec-label">Format</span>
              <span className="studio-spec-value">24-bit</span>
            </div>
            <div className="studio-spec-item">
              <span className="studio-spec-label">Location</span>
              <span className="studio-spec-value">JHB</span>
            </div>
            <div className="studio-spec-item">
              <span className="studio-spec-label">Availability</span>
              <span
                className="studio-spec-value"
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'Manrope',sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0",
                }}
              >
                By appointment
              </span>
            </div>
          </div>

          <Link href="/contact" className="studio-cta">
            Book a Session →
          </Link>
        </div>
      </div>
    </>
  );
};

export default Studio;
