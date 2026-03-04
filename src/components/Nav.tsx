"use client";
import React, { useState, useEffect } from "react";
import { Syne, Manrope } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { cmmg } from "@/data";
import SocialMediaLinks from "./Nav/SocialMediaLinks";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(
        now.toLocaleTimeString("en-ZA", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Music", link: "/commercial" },
    { title: "Gallery", link: "/gallery" },
    { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          transition: background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease;
          border-bottom: 1px solid transparent;
        }
        .nav-root.scrolled {
          background: rgba(5, 5, 5, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom-color: rgba(255,255,255,0.06);
        }

        .nav-inner {
          max-width: 1440px;
          width: 90%
          margin: 0 auto;
          padding: 0 3rem;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          height: 44px;
          display: flex;
          align-items: center;
        }
        .nav-logo img {
          height: 100%;
          width: auto;
          object-fit: contain;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-clock {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-clock-dot {
          width: 6px;
          height: 6px;
          background: #1a8cff;
          border-radius: 50%;
          animation: pulse-blue 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-blue {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(26,140,255,0.4); }
          50% { opacity: 0.7; transform: scale(1.2); box-shadow: 0 0 0 5px rgba(26,140,255,0); }
        }

        .nav-library-btn {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          background: #f05a1a;
          border: none;
          padding: 0.6rem 1.25rem;
          cursor: pointer;
          text-decoration: none;
          display: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .nav-library-btn:hover {
          background: #d44c10;
          transform: translateY(-1px);
        }
        @media (min-width: 768px) {
          .nav-library-btn { display: inline-block; }
        }

        .nav-hamburger {
          background: none;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 0.5rem 0.75rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s ease;
        }
        .nav-hamburger:hover {
          border-color: #f05a1a;
        }
        .nav-hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #ffffff;
          transition: background 0.2s ease;
        }
        .nav-hamburger:hover span {
          background: #f05a1a;
        }

        /* ── OVERLAY ── */
        .overlay {
          position: fixed;
          inset: 0;
          background: #050505;
          z-index: 999;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          animation: overlay-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes overlay-in {
          from { clip-path: inset(0 0 100% 0); }
          to   { clip-path: inset(0 0 0% 0); }
        }

        .overlay-left {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid rgba(255,255,255,0.06);
          position: relative;
        }
        /* Orange vertical stripe */
        .overlay-left::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
        }

        .overlay-right {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .overlay-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .overlay-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.75rem;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #ffffff;
        }
        .overlay-logo span {
          color: #f05a1a;
        }

        .overlay-close {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          background: none;
          border: 1px solid rgba(255,255,255,0.12);
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .overlay-close:hover {
          color: #f05a1a;
          border-color: #f05a1a;
        }

        .overlay-nav {
          display: flex;
          flex-direction: column;
          margin-top: 3rem;
        }

        .overlay-num {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem;
          font-weight: 500;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.1em;
          margin-right: 1rem;
          flex-shrink: 0;
          align-self: flex-end;
          padding-bottom: 0.3rem;
        }

        .overlay-link {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 3.5rem);
          letter-spacing: -0.04em;
          text-transform: uppercase;
          line-height: 0.92;
          color: #ffffff;
          text-decoration: none;
          display: flex;
          align-items: flex-end;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          position: relative;
          overflow: hidden;
          transition: color 0.25s ease, padding-left 0.25s ease;
        }
        .overlay-link::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #f05a1a;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .overlay-link:hover {
          color: #f05a1a;
          padding-left: 1rem;
        }
        .overlay-link:hover::before {
          transform: scaleX(1);
        }

        /* Right panel info */
        .overlay-eyebrow {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .overlay-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #f05a1a;
          flex-shrink: 0;
        }

        .overlay-info-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.5vw, 2.25rem);
          letter-spacing: -0.04em;
          text-transform: uppercase;
          line-height: 0.92;
          color: #ffffff;
          margin-bottom: 1.25rem;
        }
        .overlay-info-title em {
          font-style: normal;
          color: #f05a1a;
        }

        .overlay-info-body {
          font-family: 'Manrope', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255,255,255,0.5);
          max-width: 320px;
          margin-bottom: 2rem;
        }

        .overlay-cta {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          background: #f05a1a;
          border: none;
          padding: 0.9rem 2rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s ease, transform 0.2s ease;
          align-self: flex-start;
        }
        .overlay-cta:hover {
          background: #d44c10;
          transform: translateY(-1px);
        }

        .overlay-meta {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-top: auto;
          padding-top: 2rem;
        }
        .overlay-meta-row {
          display: flex;
          gap: 2rem;
        }

        /* Mobile overlay stacked */
        @media (max-width: 768px) {
          .nav-inner { padding: 0 1.5rem; }
          .nav-clock { display: none; }
          .overlay { grid-template-columns: 1fr; }
          .overlay-right { display: none; }
          .overlay-left { padding: 2rem 1.5rem; }
          .overlay-link { font-size: clamp(1.75rem, 8vw, 2.5rem); }
        }
      `}</style>

      {/* ── NAVIGATION ── */}
      <nav className={`nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <Image src={cmmg} alt="CMMG Logo" height={44} />
          </Link>

          {/* Right Controls */}
          <div className="nav-right">
            {/* Live clock with blue pulse */}
            <div className="nav-clock">
              <span className="nav-clock-dot" />
              {clock}
            </div>

            {/* Library CTA */}
            <Link
              href="https://www.library.cmmg.co.za/library"
              className="nav-library-btn"
            >
              Production Music Library
            </Link>

            {/* Hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* ── FULLSCREEN OVERLAY ── */}
      {menuOpen && (
        <div className="overlay" role="dialog" aria-modal="true">
          {/* LEFT PANEL — Navigation */}
          <div className="overlay-left">
            <div>
              <div className="overlay-top">
                <span className="overlay-logo">
                  CMMG<em style={{ color: "#f05a1a" }}>.</em>
                </span>
                <button
                  className="overlay-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  Close
                </button>
              </div>

              <nav className="overlay-nav">
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.link}
                    className="overlay-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="overlay-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social links at the bottom of left panel */}
            <div>
              <div className="overlay-eyebrow">Follow Us</div>
              <SocialMediaLinks />
            </div>
          </div>

          {/* RIGHT PANEL — Info + CTA */}
          <div className="overlay-right">
            <div style={{ paddingTop: "4.5rem" }}>
              <div className="overlay-eyebrow">What We Do</div>
              <h2 className="overlay-info-title">
                Sound That
                <br />
                Moves <em>Worlds</em>
              </h2>
              <p className="overlay-info-body">
                CMMG is a South African creative studio crafting original
                production music, bespoke compositions, and sonic identities for
                film, broadcast, and brand.
              </p>
              <Link
                href="https://www.library.cmmg.co.za/library"
                className="overlay-cta"
                onClick={() => setMenuOpen(false)}
              >
                Production Music Library →
              </Link>
            </div>

            {/* Meta info bottom-right */}
            <div className="overlay-meta">
              <div className="overlay-meta-row">
                <span>Johannesburg, ZA</span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      background: "#1a8cff",
                      borderRadius: "50%",
                      display: "inline-block",
                      animation: "pulse-blue 2s ease-in-out infinite",
                    }}
                  />
                  Available for Projects
                </span>
              </div>
              <div className="overlay-meta-row">
                <span>Est. 2015</span>
                <span style={{ color: "rgba(255,255,255,0.15)" }}>{clock}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
