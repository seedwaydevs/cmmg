import React from "react";
import Link from "next/link";
import { ArrowRight, Music, CheckCircle } from "lucide-react";

const features = [
  "4500+ original, sync-ready tracks",
  "Cleared for film, TV & advertising",
  "Searchable by mood, genre & tempo",
  "Flexible licensing for any budget",
  "Exclusively produced by CMMG",
  "Instant download on approval",
];

const genres = [
  "Gospel",
  "Afro Soul",
  "Contemporary",
  "Cinematic",
  "Corporate",
  "Ambient",
  "R&B",
  "Traditional",
];

const ServicesMusicLibrary = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .svc-lib-root {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.08);
          position: relative;
        }

        .svc-lib-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
        }

        /* ── Header ── */
        .svc-lib-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .svc-lib-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 1.25rem;
        }
        .svc-lib-eyebrow-line { width: 28px; height: 1px; background: #f05a1a; flex-shrink: 0; }
        .svc-lib-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }
        .svc-lib-eyebrow-badge {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #1a8cff; border: 1px solid rgba(26,140,255,0.35);
          padding: 0.2rem 0.55rem; margin-left: 0.25rem;
        }
        .svc-lib-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #0a0a0a;
        }
        .svc-lib-title em { font-style: normal; color: #f05a1a; }

        .svc-lib-header-right {
          display: flex; flex-direction: column;
          justify-content: flex-end; gap: 1.5rem;
        }
        .svc-lib-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(0,0,0,0.5);
          max-width: 420px;
        }
        .svc-lib-cta-row { display: flex; gap: 1rem; flex-wrap: wrap; }
        .svc-lib-cta-primary {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #ffffff; background: #f05a1a; border: none;
          padding: 0.85rem 2rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .svc-lib-cta-primary:hover { background: #d44c10; transform: translateY(-1px); }
        .svc-lib-cta-secondary {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(0,0,0,0.5); background: none;
          border: 1px solid rgba(0,0,0,0.12);
          padding: 0.85rem 2rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .svc-lib-cta-secondary:hover { border-color: #f05a1a; color: #f05a1a; }

        /* ── Body: two-col ── */
        .svc-lib-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        /* Left — dark panel with stats */
        .svc-lib-left {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          background: #0a0a0a;
          padding: 3rem;
          display: flex; flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
          position: relative; overflow: hidden;
        }
        .svc-lib-left::before {
          content: '';
          position: absolute; left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
        }
        /* Dot grid */
        .svc-lib-left::after {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        .svc-lib-left-top { position: relative; z-index: 1; }
        .svc-lib-left-icon {
          width: 44px; height: 44px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #f05a1a; margin-bottom: 1.5rem;
        }
        .svc-lib-left-stat-value {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 6vw, 5rem);
          letter-spacing: -0.02em; line-height: 1;
          color: #f05a1a;
        }
        .svc-lib-left-stat-label {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.85rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #ffffff;
          margin-top: 0.5rem;
        }
        .svc-lib-left-stat-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.78rem; font-weight: 400;
          line-height: 1.6; color: rgba(255,255,255,0.35);
          margin-top: 0.5rem; max-width: 280px;
        }

        /* Mini stats row */
        .svc-lib-mini-stats {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 0; position: relative; z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .svc-lib-mini-stat {
          padding: 1.25rem 0;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .svc-lib-mini-stat:last-child { border-right: none; padding-left: 1.25rem; }
        .svc-lib-mini-val {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800; font-size: 1.5rem;
          letter-spacing: -0.02em; color: #ffffff; line-height: 1;
        }
        .svc-lib-mini-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.3); margin-top: 0.25rem;
        }

        /* Right — features + genres */
        .svc-lib-right {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          display: flex; flex-direction: column;
        }

        .svc-lib-features {
          padding: 2.5rem;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          flex: 1;
        }
        .svc-lib-feature {
          display: flex; align-items: flex-start; gap: 0.6rem;
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem; font-weight: 500;
          color: rgba(0,0,0,0.6); line-height: 1.4;
        }
        .svc-lib-feature svg { color: #f05a1a; flex-shrink: 0; margin-top: 1px; }

        /* Genre tags */
        .svc-lib-genres {
          padding: 1.5rem 2.5rem;
          display: flex; flex-wrap: wrap; gap: 0.5rem;
          align-items: center;
        }
        .svc-lib-genres-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.25); width: 100%;
          margin-bottom: 0.25rem;
        }
        .svc-lib-genre-tag {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(0,0,0,0.45);
          border: 1px solid rgba(0,0,0,0.1);
          padding: 0.3rem 0.7rem;
          transition: border-color 0.2s ease, color 0.2s ease;
          cursor: default;
        }
        .svc-lib-genre-tag:hover { border-color: #f05a1a; color: #f05a1a; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .svc-lib-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .svc-lib-body   { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .svc-lib-inner    { padding: 3rem 1.5rem; }
          .svc-lib-features { grid-template-columns: 1fr; padding: 2rem 1.5rem; }
          .svc-lib-genres   { padding: 1.25rem 1.5rem; }
          .svc-lib-left     { padding: 2rem 1.5rem; }
        }
      `}</style>

      <section className="svc-lib-root" id="library">
        <div className="svc-lib-inner">
          {/* Header */}
          <div className="svc-lib-header">
            <div>
              <div className="svc-lib-eyebrow">
                <span className="svc-lib-eyebrow-line" />
                <span className="svc-lib-eyebrow-text">Production Music</span>
                <span className="svc-lib-eyebrow-badge">Library</span>
              </div>
              <h2 className="svc-lib-title">
                Music <em>Library</em>
              </h2>
            </div>
            <div className="svc-lib-header-right">
              <p className="svc-lib-desc">
                A curated catalog of thousands of original, sync-ready tracks —
                cleared for film, television, advertising, and digital content.
                Professionally produced. Ready to license.
              </p>
              <div className="svc-lib-cta-row">
                <a
                  href="https://www.library.cmmg.co.za/library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svc-lib-cta-primary"
                >
                  Browse the Library
                  <ArrowRight size={14} />
                </a>
                <Link href="/contact" className="svc-lib-cta-secondary">
                  Licensing Enquiry
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="svc-lib-body">
            {/* Left — dark stat panel */}
            <div className="svc-lib-left">
              <div className="svc-lib-left-top">
                <div className="svc-lib-left-icon">
                  <Music size={20} />
                </div>
                <div className="svc-lib-left-stat-value">4500+</div>
                <div className="svc-lib-left-stat-label">Original Tracks</div>
                <p className="svc-lib-left-stat-desc">
                  Every track in our library is exclusively produced by CMMG —
                  original, cleared, and ready for your project.
                </p>
              </div>
              <div className="svc-lib-mini-stats">
                <div className="svc-lib-mini-stat">
                  <div className="svc-lib-mini-val">8+</div>
                  <div className="svc-lib-mini-label">Genres</div>
                </div>
                <div className="svc-lib-mini-stat">
                  <div className="svc-lib-mini-val">100%</div>
                  <div className="svc-lib-mini-label">Sync Cleared</div>
                </div>
              </div>
            </div>

            {/* Right — features + genres */}
            <div className="svc-lib-right">
              <div className="svc-lib-features">
                {features.map((f, i) => (
                  <div key={i} className="svc-lib-feature">
                    <CheckCircle size={14} />
                    {f}
                  </div>
                ))}
              </div>
              <div className="svc-lib-genres">
                <div className="svc-lib-genres-label">Browse by Genre</div>
                {genres.map((g, i) => (
                  <span key={i} className="svc-lib-genre-tag">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesMusicLibrary;
