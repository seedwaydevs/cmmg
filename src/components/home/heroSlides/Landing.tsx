"use client";

import React, { useEffect, useRef } from "react";
import { Syne, Manrope } from "next/font/google";
import { Music, Mic2, Calendar, Camera } from "lucide-react";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

const navigationOptions = [
  {
    icon: Music,
    title: "Music Library",
    description: "Browse our production catalog",
    href: "https://www.library.cmmg.co.za",
  },
  {
    icon: Mic2,
    title: "Artists",
    description: "Records from our roster",
    href: "/commercial",
  },
  {
    icon: Calendar,
    title: "Book Studio",
    description: "Reserve a session",
    href: "https://studios.cmmg.co.za/",
  },
  {
    icon: Camera,
    title: "Content",
    description: "Gallery & social media",
    href: "/gallery",
  },
];

const Landing = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Subtle entrance animation
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        /* Slide uses a dark bg — keeps the hero cinematic */
        .landing-root {
          width: 100%;
          height: 100%;
          background-image: url('/image_ref.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* Dark overlay so text stays legible */
        .landing-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.68);
          pointer-events: none;
          z-index: 0;
        }

        /* Orange left stripe */
        .landing-root::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
          z-index: 1;
        }

        .landing-inner {
          max-width: 1440px;
          width: 90%;
          margin: 0 auto;
          padding: 0 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding-top: 9rem;
          padding-bottom: 5rem;
          position: relative;
          z-index: 2;
        }

        /* ── Eyebrow ── */
        .landing-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }
        .landing-eyebrow-line {
          width: 28px;
          height: 1px;
          background: #f05a1a;
          flex-shrink: 0;
        }
        .landing-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }
        .landing-eyebrow-dot {
          width: 5px;
          height: 5px;
          background: #1a8cff;
          border-radius: 50%;
          animation: pulse-blue 2s ease-in-out infinite;
          margin-left: 0.25rem;
        }
        @keyframes pulse-blue {
          0%,100% { opacity:1; box-shadow: 0 0 0 0 rgba(26,140,255,0.4); }
          50%      { opacity:0.6; box-shadow: 0 0 0 6px rgba(26,140,255,0); }
        }

        /* ── Hero body: title left, cards right ── */
        .landing-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 4rem;
          flex: 1;
        }

        /* ── Title ── */
        .landing-title-block {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .landing-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(5rem, 10vw, 9rem);
          letter-spacing: -0.02em;
          line-height: 0.95;
          text-transform: uppercase;
          color: #ffffff;
        }
        .landing-title em {
          font-style: normal;
          color: #f05a1a;
        }
        .landing-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.65;
          color: rgba(255,255,255,0.5);
          max-width: 400px;
        }
        .landing-cta-row {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-top: 0.5rem;
        }
        .landing-cta-primary {
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
        .landing-cta-primary:hover {
          background: #d44c10;
          transform: translateY(-1px);
        }
        .landing-cta-secondary {
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
        .landing-cta-secondary:hover {
          color: #ffffff;
          border-color: #f05a1a;
        }

        /* ── Nav cards grid ── */
        .landing-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-left: 1px solid rgba(255,255,255,0.08);
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .landing-card {
          border-right: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 1.75rem 1.5rem;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: transparent;
          position: relative;
          overflow: hidden;
          transition: background 0.25s ease;
        }
        .landing-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background: #f05a1a;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .landing-card:hover { background: rgba(255,255,255,0.03); }
        .landing-card:hover::before { transform: scaleY(1); }

        .landing-card-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.1);
          color: #f05a1a;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .landing-card:hover .landing-card-icon {
          border-color: #f05a1a;
          background: rgba(240,90,26,0.08);
        }
        .landing-card-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #ffffff;
        }
        .landing-card-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(255,255,255,0.35);
          line-height: 1.5;
        }
        .landing-card-arrow {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-top: auto;
          transition: color 0.2s ease, letter-spacing 0.2s ease;
        }
        .landing-card:hover .landing-card-arrow {
          color: #f05a1a;
          letter-spacing: 0.15em;
        }

        /* ── Bottom meta bar ── */
        .landing-meta {
          display: flex;
          gap: 3rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: 2rem;
        }
        .landing-meta-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .landing-meta-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
        .landing-meta-value {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
        }

        @media (max-width: 1024px) {
          .landing-body {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .landing-title {
            font-size: clamp(4rem, 14vw, 6rem);
          }
        }
        @media (max-width: 768px) {
          .landing-inner {
            padding: 0 1.5rem;
            padding-top: 7rem;
            padding-bottom: 5rem;
          }
          .landing-meta { flex-wrap: wrap; gap: 1.5rem; }
          .landing-cta-row { flex-wrap: wrap; }
        }
      `}</style>

      <div className="landing-root">
        <div className="landing-inner">
          {/* Eyebrow */}
          <div className="landing-eyebrow">
            <span className="landing-eyebrow-line" />
            <span className="landing-eyebrow-text">
              Music & Content Production
            </span>
            <span className="landing-eyebrow-dot" />
          </div>

          {/* Body: title + cards */}
          <div className="landing-body">
            {/* Left — title */}
            <div className="landing-title-block">
              <h1 className="landing-title" ref={titleRef}>
                CMMG<em>.</em>
              </h1>
              <p className="landing-subtitle">
                A South African record label and media group — crafting original
                music, licensing production libraries, and building artist
                careers since 2015.
              </p>
              <div className="landing-cta-row">
                <Link
                  href="https://www.library.cmmg.co.za/library"
                  className="landing-cta-primary"
                >
                  Production Music Library
                </Link>
                <Link href="/about" className="landing-cta-secondary">
                  About the Label
                </Link>
              </div>
            </div>

            {/* Right — nav cards */}
            <div className="landing-cards">
              {navigationOptions.map((opt, i) => (
                <Link key={i} href={opt.href} className="landing-card">
                  <div className="landing-card-icon">
                    <opt.icon size={16} />
                  </div>
                  <span className="landing-card-title">{opt.title}</span>
                  <span className="landing-card-desc">{opt.description}</span>
                  <span className="landing-card-arrow">Explore →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom meta bar */}
          <div className="landing-meta">
            <div className="landing-meta-item">
              <span className="landing-meta-label">Location</span>
              <span className="landing-meta-value">
                Johannesburg, South Africa
              </span>
            </div>
            <div className="landing-meta-item">
              <span className="landing-meta-label">Established</span>
              <span className="landing-meta-value">2015</span>
            </div>
            <div className="landing-meta-item">
              <span className="landing-meta-label">Status</span>
              <span
                className="landing-meta-value"
                style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "#1a8cff",
                    borderRadius: "50%",
                    display: "inline-block",
                    animation: "pulse-blue 2s ease-in-out infinite",
                  }}
                />
                Accepting Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
