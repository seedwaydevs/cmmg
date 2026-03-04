"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mic,
  Video,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ── Replace these with actual studio image imports from @/data ──
const recordingGallery = [
  {
    src: "https://placehold.co/800x600/0a0a0a/f05a1a?text=Recording+Studio+1",
    alt: "Recording Studio — Live Room",
  },
  {
    src: "https://placehold.co/800x600/0d1b2a/ffffff?text=Recording+Studio+2",
    alt: "Recording Studio — Control Room",
  },
  {
    src: "https://placehold.co/800x600/111110/f05a1a?text=Recording+Studio+3",
    alt: "Recording Studio — Booth",
  },
];

const filmGallery = [
  {
    src: "https://placehold.co/800x600/0a0a0a/1a8cff?text=Film+Studio+1",
    alt: "Film Studio — Green Screen",
  },
  {
    src: "https://placehold.co/800x600/0d1b2a/ffffff?text=Film+Studio+2",
    alt: "Film Studio — Lighting Rig",
  },
  {
    src: "https://placehold.co/800x600/111110/1a8cff?text=Film+Studio+3",
    alt: "Film Studio — Set",
  },
];

const studios = [
  {
    id: "recording",
    label: "Recording Studio",
    icon: Mic,
    badge: "Music Production",
    title: "Recording &\nProduction Studio",
    description:
      "A professional music recording and production studio equipped for every stage of the process — from tracking and overdubs to mixing and mastering. Available for hire with or without an engineer.",
    specs: [
      { key: "Live Room", val: "Acoustically treated" },
      { key: "Control Room", val: "Pro-grade console" },
      { key: "Booth", val: "Isolation booth" },
      { key: "Format", val: "Digital & Analogue" },
      { key: "Location", val: "Midrand, JHB" },
      { key: "Availability", val: "By appointment" },
    ],
    gallery: recordingGallery,
    cta: { label: "Book Recording Studio", href: "https://studios.cmmg.co.za" },
  },
  {
    id: "film",
    label: "Film Studio",
    icon: Video,
    badge: "Visual Production",
    title: "Film & Green\nScreen Studio",
    description:
      "A fully equipped film and green screen studio for video shoots, content creation, corporate productions, and creative campaigns. Professional lighting rigs and camera support available.",
    specs: [
      { key: "Green Screen", val: "Full chroma key wall" },
      { key: "Lighting", val: "Professional rig" },
      { key: "Camera", val: "Available on request" },
      { key: "Format", val: "4K ready" },
      { key: "Location", val: "Midrand, JHB" },
      { key: "Availability", val: "By appointment" },
    ],
    gallery: filmGallery,
    cta: { label: "Book Film Studio", href: "https://studios.cmmg.co.za" },
  },
];

const GallerySlider = ({ images }: { images: typeof recordingGallery }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="studio-gallery">
      <div className="studio-gallery-main">
        <img src={images[current].src} alt={images[current].alt} />
        {/* Controls */}
        <button
          className="studio-gallery-btn studio-gallery-btn--prev"
          onClick={prev}
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          className="studio-gallery-btn studio-gallery-btn--next"
          onClick={next}
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
        {/* Counter */}
        <div className="studio-gallery-counter">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>
      </div>
      {/* Thumbnails */}
      <div className="studio-gallery-thumbs">
        {images.map((img, i) => (
          <button
            key={i}
            className={`studio-gallery-thumb${current === i ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`View ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} />
          </button>
        ))}
      </div>
    </div>
  );
};

const ServicesStudios = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .studios-root {
          width: 100%;
          background: #0a0a0a;
          border-top: 1px solid rgba(255,255,255,0.06);
          position: relative;
          overflow: hidden;
        }
        .studios-root::before {
          content: '';
          position: absolute; left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none; z-index: 2;
        }

        .studios-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
          position: relative; z-index: 1;
        }

        /* ── Header ── */
        .studios-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .studios-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 1.25rem;
        }
        .studios-eyebrow-line { width: 28px; height: 1px; background: #f05a1a; flex-shrink: 0; }
        .studios-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .studios-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #ffffff;
        }
        .studios-title em { font-style: normal; color: #f05a1a; }
        .studios-header-right {
          display: flex; flex-direction: column;
          justify-content: flex-end; gap: 1.5rem;
        }
        .studios-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(255,255,255,0.45);
          max-width: 420px;
        }
        .studios-header-cta {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #ffffff; background: #f05a1a; border: none;
          padding: 0.85rem 2rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          align-self: flex-start;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .studios-header-cta:hover { background: #d44c10; transform: translateY(-1px); }

        /* ── Studio panels — stacked ── */
        .studios-panels {
          display: flex; flex-direction: column;
          border-left: 1px solid rgba(255,255,255,0.08);
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .studio-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        /* Alternate: even panels flip */
        .studio-panel:nth-child(even) { direction: rtl; }
        .studio-panel:nth-child(even) > * { direction: ltr; }

        /* Info side */
        .studio-info {
          border-right: 1px solid rgba(255,255,255,0.08);
          padding: 3rem;
          display: flex; flex-direction: column;
          gap: 1.5rem;
        }
        .studio-info-top {
          display: flex; align-items: flex-start;
          justify-content: space-between;
        }
        .studio-info-icon {
          width: 44px; height: 44px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #f05a1a;
        }
        .studio-info-badge {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #1a8cff; border: 1px solid rgba(26,140,255,0.3);
          padding: 0.2rem 0.55rem;
        }
        .studio-info-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.5vw, 2.25rem);
          letter-spacing: -0.02em; line-height: 1;
          text-transform: uppercase; color: #ffffff;
          white-space: pre-line;
        }
        .studio-info-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem; font-weight: 400;
          line-height: 1.7; color: rgba(255,255,255,0.4);
        }

        /* Specs grid */
        .studio-specs {
          display: grid; grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 1.5rem;
          gap: 0.75rem 1.5rem;
        }
        .studio-spec {
          display: flex; flex-direction: column; gap: 0.15rem;
        }
        .studio-spec-key {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
        .studio-spec-val {
          font-family: 'Manrope', sans-serif;
          font-size: 0.78rem; font-weight: 600;
          color: rgba(255,255,255,0.65);
        }

        .studio-info-cta {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 0.75rem 1.5rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          align-self: flex-start; margin-top: auto;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .studio-info-cta:hover { border-color: #f05a1a; color: #f05a1a; }

        /* Gallery side */
        .studio-gallery-cell {
          border-right: 1px solid rgba(255,255,255,0.08);
          display: flex; flex-direction: column;
          background: #050505;
        }

        /* Gallery widget */
        .studio-gallery { display: flex; flex-direction: column; height: 100%; }

        .studio-gallery-main {
          position: relative;
          flex: 1;
          min-height: 320px;
          overflow: hidden;
        }
        .studio-gallery-main img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: opacity 0.3s ease;
        }

        .studio-gallery-btn {
          position: absolute; top: 50%;
          transform: translateY(-50%);
          width: 36px; height: 36px;
          background: rgba(10,10,10,0.75);
          border: 1px solid rgba(255,255,255,0.12);
          color: #ffffff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s ease, border-color 0.2s ease;
          z-index: 2;
        }
        .studio-gallery-btn:hover { background: #f05a1a; border-color: #f05a1a; }
        .studio-gallery-btn--prev { left: 1rem; }
        .studio-gallery-btn--next { right: 1rem; }

        .studio-gallery-counter {
          position: absolute; bottom: 1rem; right: 1rem;
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          background: rgba(0,0,0,0.6);
          padding: 0.25rem 0.6rem;
          z-index: 2;
        }

        .studio-gallery-thumbs {
          display: grid; grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .studio-gallery-thumb {
          aspect-ratio: 16/10;
          overflow: hidden;
          border: none; padding: 0; cursor: pointer;
          border-right: 1px solid rgba(255,255,255,0.06);
          position: relative;
          transition: opacity 0.2s ease;
          opacity: 0.45;
        }
        .studio-gallery-thumb:last-child { border-right: none; }
        .studio-gallery-thumb.active { opacity: 1; }
        .studio-gallery-thumb:hover { opacity: 0.8; }
        .studio-gallery-thumb.active::after {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 100%; height: 2px;
          background: #f05a1a;
        }
        .studio-gallery-thumb img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .studios-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .studio-panel { grid-template-columns: 1fr; direction: ltr; }
          .studio-panel:nth-child(even) { direction: ltr; }
          .studio-info { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
        }
        @media (max-width: 640px) {
          .studios-inner { padding: 3rem 1.5rem; }
          .studio-info   { padding: 2rem 1.5rem; }
          .studio-specs  { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="studios-root" id="studios">
        <div className="studios-inner">
          {/* Header */}
          <div className="studios-header">
            <div>
              <div className="studios-eyebrow">
                <span className="studios-eyebrow-line" />
                <span className="studios-eyebrow-text">Facilities</span>
              </div>
              <h2 className="studios-title">
                Our <em>Studios</em>
              </h2>
            </div>
            <div className="studios-header-right">
              <p className="studios-desc">
                Two world-class studio facilities in Midrand, Johannesburg — a
                professional music recording studio and a fully equipped film
                and green screen studio. Both available for hire.
              </p>
              <Link href="/contact" className="studios-header-cta">
                Book a Studio
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Studio panels */}
          <div className="studios-panels">
            {studios.map((studio) => (
              <div key={studio.id} className="studio-panel">
                {/* Info */}
                <div className="studio-info">
                  <div className="studio-info-top">
                    <div className="studio-info-icon">
                      <studio.icon size={20} />
                    </div>
                    <span className="studio-info-badge">{studio.badge}</span>
                  </div>
                  <div className="studio-info-title">{studio.title}</div>
                  <p className="studio-info-desc">{studio.description}</p>
                  <div className="studio-specs">
                    {studio.specs.map((s, i) => (
                      <div key={i} className="studio-spec">
                        <span className="studio-spec-key">{s.key}</span>
                        <span className="studio-spec-val">{s.val}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={studio.cta.href} className="studio-info-cta">
                    {studio.cta.label}
                    <ArrowRight size={12} />
                  </Link>
                </div>

                {/* Gallery */}
                <div className="studio-gallery-cell">
                  <GallerySlider images={studio.gallery} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesStudios;
