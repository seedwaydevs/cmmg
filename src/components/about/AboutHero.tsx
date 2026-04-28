"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import prod from "../../../public/prodco.jpg";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "20+", label: "Employees" },
  { number: "120+", label: "Projects Completed" },
  { number: "10+", label: "Years Experience" },
  { number: "4500+", label: "Tracks Produced" },
];

const AboutHero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .about-hero-root {
          width: 100%;
          min-height: 100vh;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Orange left stripe */
        .about-hero-root::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
          z-index: 2;
        }

        /* Dot grid */
        .about-hero-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none; z-index: 0;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 40%, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 40%, black 40%, transparent 100%);
        }

        /* Ambient glow */
        .about-hero-glow {
          position: absolute;
          top: -10%; right: -5%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(240,90,26,0.07) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        .about-hero-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 7rem 3rem 1rem;
          position: relative;
          z-index: 2;
          width: 100%;
          
        }

        /* Eyebrow */
        .about-hero-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 2.5rem;
        }
        .about-hero-eyebrow-line {
          width: 28px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }
        .about-hero-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }

        /* Body grid */
        .about-hero-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          margin-bottom: 5rem;
        }

        /* Title */
        .about-hero-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 7vw, 6.5rem);
          letter-spacing: -0.02em;
          line-height: 0.95;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 1.75rem;
        }
        .about-hero-title em { font-style: normal; color: #f05a1a; }

        .about-hero-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 1rem; font-weight: 400;
          line-height: 1.7; color: rgba(255,255,255,0.5);
          max-width: 480px;
          margin-bottom: 2rem;
        }

        .about-hero-cta-row {
          display: flex; gap: 1rem; flex-wrap: wrap;
        }
        .about-hero-cta-primary {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #ffffff; background: #f05a1a; border: none;
          padding: 0.85rem 2rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .about-hero-cta-primary:hover { background: #d44c10; transform: translateY(-1px); }

        .about-hero-cta-secondary {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.5); background: none;
          border: 1px solid rgba(255,255,255,0.12);
          padding: 0.85rem 2rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .about-hero-cta-secondary:hover { border-color: #f05a1a; color: #f05a1a; }

        /* Right image cell */
        .about-hero-image-wrap {
          position: relative;
        }
        .about-hero-image-cell {
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .about-hero-image-cell img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.6s ease;
          filter: grayscale(20%);
        }
        .about-hero-image-cell:hover img { transform: scale(1.03); filter: grayscale(0%); }

        /* Info tag on image */
        .about-hero-image-tag {
          position: absolute;
          bottom: 1.5rem; left: 1.5rem;
          background: rgba(10,10,10,0.85);
          border: 1px solid rgba(255,255,255,0.1);
          border-left: 3px solid #f05a1a;
          padding: 1rem 1.25rem;
          z-index: 2;
        }
        .about-hero-image-tag-title {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.82rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #ffffff;
          margin-bottom: 0.2rem;
        }
        .about-hero-image-tag-sub {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #f05a1a;
        }

        /* Stats row */
        .about-hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 1px solid rgba(255,255,255,0.08);
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .about-hero-stat {
          border-right: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 2rem;
          display: flex; flex-direction: column;
          gap: 0.3rem;
          transition: background 0.2s ease;
        }
        .about-hero-stat:hover { background: rgba(255,255,255,0.02); }
        .about-hero-stat-value {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          letter-spacing: -0.02em; line-height: 1;
          color: #f05a1a;
        }
        .about-hero-stat-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        @media (max-width: 1024px) {
          .about-hero-body { grid-template-columns: 1fr; gap: 3rem; }
          .about-hero-stats { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .about-hero-inner { padding: 7rem 1.5rem 4rem; }
          .about-hero-title { font-size: 3rem; }
          .about-hero-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <section className="about-hero-root">
        <div className="about-hero-dots" />
        <div className="about-hero-glow" />

        <div className="about-hero-inner">
          {/* Body */}
          <div className="about-hero-body">
            <div>
              <h1 className="about-hero-title">
                Amplifying
                <br />
                Voices <em>Across</em>
                <br />
                The World
              </h1>
              <p className="about-hero-desc">
                At CMMG, we craft sound that speaks. From artist development to
                production and distribution, our mission is to bring powerful
                music and authentic stories to audiences everywhere — rooted in
                South Africa, reaching the world.
              </p>
              {/* <div className="about-hero-cta-row">
                <Link href="/contact" className="about-hero-cta-primary">
                  Work With Us
                  <ArrowRight size={14} />
                </Link>
                <Link href="/services" className="about-hero-cta-secondary">
                  Our Services
                  <ArrowRight size={14} />
                </Link>
              </div> */}
            </div>

            <div className="about-hero-image-wrap">
              <div className="about-hero-image-cell">
                <Image
                  src={prod}
                  alt="CMMG Production Studio"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="about-hero-image-tag">
                <div className="about-hero-image-tag-title">
                  World-class Production
                </div>
                <div className="about-hero-image-tag-sub">
                  CMMG Studio — Midrand, JHB
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
