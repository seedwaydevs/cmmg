"use client";

import React, { useEffect, useRef } from "react";
import { Syne, Manrope } from "next/font/google";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

const navigationOptions = [
  { title: "Music Library", href: "https://www.library.cmmg.co.za" },
  { title: "Artists", href: "/commercial" },
  { title: "Book Studio", href: "https://studios.cmmg.co.za/" },
  { title: "Content", href: "/gallery" },
];

const Landing = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Subtle entrance animation
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
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

        .landing-root {
          width: 100%;
          height: 100%;
          background: #F1F0EC;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* Single soft glow bloom behind the wordmark — faint warm tint,
           not full brand-orange, to keep it quiet */
        .landing-root::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60vw;
          height: 60vw;
          max-width: 900px;
          max-height: 900px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle,
            rgba(255,107,53,0.16) 30%,
            rgba(255,107,53,0.38) 25%,
            rgba(241,240,236,0) 28%);
          filter: blur(10px);
          pointer-events: none;
          z-index: 0;
        }

        .landing-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2.5rem;
          padding: 0 1.5rem;
        }

        /* ── Wordmark ── */
        .landing-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(4rem, 11vw, 8.5rem);
          letter-spacing: -0.02em;
          line-height: 1;
          text-transform: uppercase;
          color: #17151A;
          margin: 0;
        }
        .landing-title em {
          font-style: normal;
          color: #FF4B1F;
        }

        .landing-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          line-height: 1.6;
          color: rgba(23,21,26,0.45);
          max-width: 380px;
          margin: -1.25rem 0 0;
        }

        /* ── Minimal pill nav ── */
        .landing-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .landing-nav-item {
          font-family: 'Manrope', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(23,21,26,0.6);
          text-decoration: none;
          padding: 0.6rem 1.1rem;
          border-radius: 0px;
          border: 1px solid rgba(23,21,26,0.1);
          background: rgba(255,255,255,0.5);
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .landing-nav-item:hover {
          color: #17151A;
          border-color: rgba(255,75,31,0.4);
          background: #ffffff;
        }

        @media (max-width: 768px) {
          .landing-nav-item { font-size: 0.68rem; padding: 0.55rem 1rem; }
        }
      `}</style>

      <div className="landing-root">
        <div className="landing-inner">
          <h1 className="landing-title" ref={titleRef}>
            CMMG<em>.</em>
          </h1>

          <p className="landing-subtitle">
            A South African record label and media group, crafting original
            music and licensing production libraries since 2015.
          </p>

          <nav className="landing-nav">
            {navigationOptions.map((opt, i) => (
              <Link key={i} href={opt.href} className="landing-nav-item">
                {opt.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Landing;
