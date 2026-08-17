"use client";

import React, { useState, useEffect } from "react";
import { Syne, Manrope } from "next/font/google";
import Landing from "./heroSlides/Landing";
import Catalog from "./heroSlides/Catalog";
import NewReleases from "./heroSlides/NewReleases";
import Studio from "./heroSlides/Studio";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

// Background images are handled inside each slide component directly.
// The Hero wrapper only manages transitions and controls.
// `theme` tells the wrapper's own UI (arrows, dots, counter, labels)
// whether to render light-on-dark or dark-on-light for that slide.
const slides = [
  { id: 1, Component: Landing, theme: "light" as const },
  { id: 2, Component: Catalog, theme: "dark" as const },
  { id: 3, Component: NewReleases, theme: "dark" as const },
  { id: 4, Component: Studio, theme: "dark" as const },
];

const slideLabels = ["Home", "Catalog", "New Releases", "Studio"];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (indexOrUpdater: number | ((prev: number) => number)) => {
    if (animating) return;
    setAnimating(true);
    setCurrentSlide(indexOrUpdater);
    setTimeout(() => setAnimating(false), 700);
  };

  const next = () => goToSlide((p) => (p + 1) % slides.length);
  const prev = () => goToSlide((p) => (p - 1 + slides.length) % slides.length);

  const theme = slides[currentSlide].theme;

  return (
    <>
      <style>{`
        .hero-root {
          position: relative;
          width: 100%;
          min-height: 100svh;
          overflow: hidden;
          background: #0a0a0a;
        }

        /* ── Slides ── */
        .hero-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.76, 0, 0.24, 1),
                      opacity 0.7s ease;
          will-change: transform, opacity;
        }
        .hero-slide.active   { transform: translateX(0);      opacity: 1; z-index: 2; }
        .hero-slide.before   { transform: translateX(-100%);   opacity: 0; z-index: 1; }
        .hero-slide.after    { transform: translateX(100%);    opacity: 0; z-index: 1; }

        /* ── Arrow buttons ── */
        .hero-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          color: #fff;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .hero-arrow:hover {
          background: #f05a1a;
          border-color: #f05a1a;
          color: #fff;
        }
        .hero-arrow.left  { left: 2rem; }
        .hero-arrow.right { right: 2rem; }

        /* ── Dot indicators ── */
        .hero-dots {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .hero-dot {
          width: 24px;
          height: 2px;
          background: rgba(255,255,255,0.25);
          border: none;
          cursor: pointer;
          transition: background 0.25s ease, width 0.25s ease;
          padding: 0;
        }
        .hero-dot.active {
          background: #f05a1a;
          width: 40px;
        }

        /* ── Slide counter ── */
        .hero-counter {
          position: absolute;
          top: 6rem;
          left: 7rem;
          z-index: 20;
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: color 0.3s ease;
        }
        .hero-counter-current {
          color: #f05a1a;
          font-weight: 700;
        }

        /* ── Slide label strip (right side) ── */
        .hero-labels {
          position: absolute;
          right: 6rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-items: flex-end;
        }
        .hero-label-item {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          background: none;
          padding: 0;
        }
        .hero-label-item.active {
          color: rgba(255,255,255,0.85);
        }
        .hero-label-item.active::after {
          content: '';
          display: block;
          width: 16px;
          height: 1px;
          background: #f05a1a;
        }
        .hero-label-item:hover { color: rgba(255,255,255,0.6); }

        /* ── Light-theme overrides (active slide is light-background) ── */
        .hero-root.theme-light .hero-arrow {
          background: rgba(23,21,26,0.05);
          border-color: rgba(23,21,26,0.12);
          color: #17151A;
        }
        .hero-root.theme-light .hero-arrow:hover {
          background: #f05a1a;
          border-color: #f05a1a;
          color: #fff;
        }
        .hero-root.theme-light .hero-dot {
          background: rgba(23,21,26,0.18);
        }
        .hero-root.theme-light .hero-dot.active {
          background: #f05a1a;
        }
        .hero-root.theme-light .hero-counter {
          color: rgba(23,21,26,0.35);
        }
        .hero-root.theme-light .hero-counter span:nth-child(2) {
          color: rgba(23,21,26,0.15);
        }
        .hero-root.theme-light .hero-label-item {
          color: rgba(23,21,26,0.25);
        }
        .hero-root.theme-light .hero-label-item.active {
          color: rgba(23,21,26,0.85);
        }
        .hero-root.theme-light .hero-label-item:hover {
          color: rgba(23,21,26,0.6);
        }

        @media (max-width: 768px) {
          .hero-arrow { display: none; }
          .hero-labels { display: none; }
          .hero-counter { left: 1.5rem; }
        }
      `}</style>

      <div className={`hero-root ${theme === "light" ? "theme-light" : ""}`}>
        {/* Slides */}
        {slides.map((slide, index) => {
          const state =
            index === currentSlide
              ? "active"
              : index < currentSlide
                ? "before"
                : "after";
          return (
            <div key={slide.id} className={`hero-slide ${state}`}>
              <slide.Component />
            </div>
          );
        })}

        {/* Counter */}
        <div className="hero-counter">
          <span className="hero-counter-current">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <span>/</span>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>

        {/* Side label nav */}
        <div className="hero-labels">
          {slideLabels.map((label, i) => (
            <button
              key={i}
              className={`hero-label-item ${i === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Arrows */}
        <button
          className="hero-arrow left"
          onClick={prev}
          aria-label="Previous"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="hero-arrow right" onClick={next} aria-label="Next">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
