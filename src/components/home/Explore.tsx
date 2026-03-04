import React from "react";
import Image from "next/image";
import Link from "next/link";
import collage from "../../../public/new_collage.png";

const Explore = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        /* ── Root — white section ── */
        .explore-root {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.08);
          position: relative;
        }

        .explore-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
        }

        /* ── Section header: two-col ── */
        .explore-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .explore-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .explore-eyebrow-line {
          width: 28px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }
        .explore-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }

        .explore-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em;
          line-height: 0.95;
          text-transform: uppercase;
          color: #0a0a0a;
        }
        .explore-title em {
          font-style: normal;
          color: #f05a1a;
        }

        .explore-header-right {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1.5rem;
        }
        .explore-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7;
          color: rgba(0,0,0,0.5);
          max-width: 420px;
        }

        .explore-cta {
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
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          align-self: flex-start;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .explore-cta:hover { background: #d44c10; transform: translateY(-1px); }
        .explore-cta svg { transition: transform 0.2s ease; }
        .explore-cta:hover svg { transform: translateX(3px); }

        /* ── Body: image left, quote right ── */
        .explore-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        /* Image cell */
        .explore-image-cell {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
          min-height: 520px;
        }
        .explore-image-cell img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .explore-image-cell:hover img { transform: scale(1.03); }

        /* Quote / CTA cell */
        .explore-quote-cell {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        /* Orange left stripe on dark cell */
        .explore-quote-cell::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
        }

        /* Dot grid artifact on dark cell */
        .explore-quote-cell::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }

        .explore-quote-top { position: relative; z-index: 1; }

        .explore-quote-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .explore-quote-label::before {
          content: '';
          display: block;
          width: 28px; height: 1px;
          background: #f05a1a;
        }

        .explore-quote-text {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.5vw, 2.25rem);
          letter-spacing: -0.02em;
          line-height: 1.1;
          text-transform: uppercase;
          color: #ffffff;
        }
        .explore-quote-text em {
          font-style: normal;
          color: #f05a1a;
        }

        .explore-quote-bottom {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .explore-quote-sub {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem; font-weight: 400;
          line-height: 1.65;
          color: rgba(255,255,255,0.4);
        }

        .explore-about-cta {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.12);
          padding: 0.8rem 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          align-self: flex-start;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .explore-about-cta:hover {
          border-color: #f05a1a;
          color: #f05a1a;
        }
        .explore-about-cta svg { transition: transform 0.2s ease; }
        .explore-about-cta:hover svg { transform: translateX(3px); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .explore-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .explore-body   { grid-template-columns: 1fr; }
          .explore-image-cell { min-height: 360px; }
        }
        @media (max-width: 640px) {
          .explore-inner { padding: 3rem 1.5rem; }
          .explore-title { font-size: 2.25rem; }
          .explore-quote-cell { padding: 2rem 1.5rem; }
        }
      `}</style>

      <div className="explore-root">
        <div className="explore-inner">
          {/* Section header */}
          <div className="explore-header">
            <div>
              <div className="explore-eyebrow">
                <span className="explore-eyebrow-line" />
                <span className="explore-eyebrow-text">Explore</span>
              </div>
              <h2 className="explore-title">
                CMMG Production
                <br />
                Music <em>Library</em>
              </h2>
            </div>

            <div className="explore-header-right">
              <p className="explore-desc">
                Explore a curated library of high-impact production music —
                designed to bring your film, TV, or digital project to life with
                unforgettable sound.
              </p>
              <Link
                href="https://www.library.cmmg.co.za/library"
                className="explore-cta"
              >
                Browse Library
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

          {/* Body: collage image + dark quote panel */}
          <div className="explore-body">
            {/* Image */}
            <div className="explore-image-cell">
              <Image
                src={collage}
                alt="CMMG Collage"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Quote / brand statement */}
            <div className="explore-quote-cell">
              <div className="explore-quote-top">
                <div className="explore-quote-label">Our Philosophy</div>
                <p className="explore-quote-text">
                  We don't follow
                  <br />
                  <em>trends</em> — we
                  <br />
                  set the <em>tone</em>.
                </p>
              </div>

              <div className="explore-quote-bottom">
                <p className="explore-quote-sub">
                  A content and music powerhouse built for impact. Engineered to
                  resonate — from the studio to the screen.
                </p>
                <Link href="/about" className="explore-about-cta">
                  About the Label
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
        </div>
      </div>
    </>
  );
};

export default Explore;
