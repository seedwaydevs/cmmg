"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { stu1, stu2, stu3, stu4, stu5, stu6, stu7 } from "@/data";

type GalleryItem = {
  id: number;
  url: string | StaticImageData;
  caption: string;
  category: string;
};

const galleryData: GalleryItem[] = [
  {
    id: 1,
    url: stu4,
    caption: "Listening session with Orchard Music Group",
    category: "Sessions",
  },
  {
    id: 2,
    url: stu5,
    caption: "Listening session with Orchard Music Group",
    category: "Sessions",
  },
  {
    id: 3,
    url: stu3,
    caption: "CMMG and The Orchard Team",
    category: "Events",
  },
  {
    id: 4,
    url: stu1,
    caption: "L&J Cstaz session in our studio",
    category: "Recording",
  },
  {
    id: 5,
    url: stu2,
    caption: "L&J Cstaz session in our studio",
    category: "Recording",
  },
  {
    id: 6,
    url: stu6,
    caption: "Mixing and mastering tracks in studio",
    category: "Production",
  },
  { id: 7, url: stu7, caption: "Studio kits", category: "Equipment" },
];

const allCategories = [
  "All",
  ...Array.from(new Set(galleryData.map((i) => i.category))),
];

const stats = [
  { value: String(galleryData.length), label: "Photos" },
  { value: String(allCategories.length - 1), label: "Categories" },
  { value: "100+", label: "Sessions" },
];

const PhotoGallery = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered =
    filter === "All"
      ? galleryData
      : galleryData.filter((i) => i.category === filter);

  const openModal = (item: GalleryItem, index: number) => {
    setSelected(item);
    setCurrentIndex(index);
  };
  const closeModal = () => setSelected(null);
  const next = () => {
    const i = (currentIndex + 1) % filtered.length;
    setCurrentIndex(i);
    setSelected(filtered[i]);
  };
  const prev = () => {
    const i = (currentIndex - 1 + filtered.length) % filtered.length;
    setCurrentIndex(i);
    setSelected(filtered[i]);
  };

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, currentIndex]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        /* ── Root ── */
        .pg-root {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.08);
          position: relative;
        }

        .pg-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
        }

        /* ── Header ── */
        .pg-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 3rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .pg-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 1.25rem;
        }
        .pg-eyebrow-line { width: 28px; height: 1px; background: #f05a1a; flex-shrink: 0; }
        .pg-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }
        .pg-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #0a0a0a;
        }
        .pg-title em { font-style: normal; color: #f05a1a; }
        .pg-header-right {
          display: flex; flex-direction: column;
          justify-content: flex-end; gap: 1.5rem;
        }
        .pg-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(0,0,0,0.5);
          max-width: 400px;
        }

        /* ── Filter row ── */
        .pg-filters {
          display: flex; flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 3rem;
        }
        .pg-filter-btn {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(0,0,0,0.45);
          border: 1px solid rgba(0,0,0,0.1);
          background: none; padding: 0.5rem 1.1rem;
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        }
        .pg-filter-btn:hover { border-color: #f05a1a; color: #f05a1a; }
        .pg-filter-btn.active {
          background: #f05a1a; border-color: #f05a1a;
          color: #ffffff;
        }

        /* ── Gallery grid — bordered ── */
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        .pg-cell {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          background: #f5f5f5;
          aspect-ratio: 1;
        }
        /* Span some cells for visual rhythm */
        .pg-cell:nth-child(1) { grid-column: span 2; grid-row: span 2; aspect-ratio: unset; }
        .pg-cell:nth-child(5) { grid-column: span 2; aspect-ratio: unset; min-height: 240px; }

        .pg-cell img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.5s ease;
        }
        .pg-cell:hover img { transform: scale(1.05); }

        /* Overlay */
        .pg-cell-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.5);
          opacity: 0; transition: opacity 0.25s ease;
          display: flex; flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          z-index: 1;
        }
        .pg-cell:hover .pg-cell-overlay { opacity: 1; }

        .pg-cell-badge {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #ffffff;
          background: #f05a1a;
          padding: 0.2rem 0.6rem;
          align-self: flex-start;
        }

        .pg-cell-bottom {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .pg-cell-caption {
          font-family: 'Manrope', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          color: rgba(255,255,255,0.85);
          line-height: 1.4;
          flex: 1;
        }
        .pg-cell-eye {
          width: 32px; height: 32px; flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #ffffff;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .pg-cell:hover .pg-cell-eye { background: #f05a1a; border-color: #f05a1a; }

        /* Orange top bar slides in on hover */
        .pg-cell::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 100%; height: 3px;
          background: #f05a1a;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
          z-index: 2;
        }
        .pg-cell:hover::before { transform: scaleX(1); }

        /* ── Stats row ── */
        .pg-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: none;
          margin-top: 0;
        }
        .pg-stat {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 2rem;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0.3rem; text-align: center;
          transition: background 0.2s ease;
        }
        .pg-stat:hover { background: #fafafa; }
        .pg-stat-value {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          letter-spacing: -0.02em; line-height: 1;
          color: #f05a1a;
        }
        .pg-stat-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.3);
        }

        /* ── Modal ── */
        .pg-modal {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.95);
          z-index: 9999;
          display: flex; flex-direction: column;
        }

        .pg-modal-bar {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .pg-modal-bar-left {
          display: flex; align-items: center; gap: 0.75rem;
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .pg-modal-bar-left::before {
          content: ''; display: block;
          width: 20px; height: 1px; background: #f05a1a;
        }
        .pg-modal-bar-right {
          display: flex; align-items: center; gap: 1.5rem;
        }
        .pg-modal-counter {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.25);
        }
        .pg-modal-close {
          width: 32px; height: 32px;
          border: 1px solid rgba(255,255,255,0.1);
          background: none; color: rgba(255,255,255,0.5);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        }
        .pg-modal-close:hover { border-color: #f05a1a; color: #ffffff; background: #f05a1a; }

        .pg-modal-img-wrap {
          flex: 1; display: flex;
          align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding: 2rem;
        }
        .pg-modal-img-wrap img {
          max-width: 100%; max-height: 100%;
          object-fit: contain; display: block;
        }

        .pg-modal-nav {
          position: absolute; top: 50%;
          transform: translateY(-50%);
          width: 40px; height: 40px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.5);
          color: rgba(255,255,255,0.5); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
          z-index: 2;
        }
        .pg-modal-nav:hover { border-color: #f05a1a; color: #ffffff; background: #f05a1a; }
        .pg-modal-nav--prev { left: 1rem; }
        .pg-modal-nav--next { right: 1rem; }

        .pg-modal-caption {
          padding: 1.5rem 2rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center;
          justify-content: space-between;
          flex-shrink: 0; gap: 1.5rem;
        }
        .pg-modal-caption-badge {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #ffffff; background: #f05a1a;
          padding: 0.25rem 0.65rem;
          flex-shrink: 0;
        }
        .pg-modal-caption-text {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.9rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #ffffff;
          flex: 1;
        }
        .pg-modal-caption-sub {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 500;
          color: rgba(255,255,255,0.25);
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .pg-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .pg-grid   { grid-template-columns: repeat(2, 1fr); }
          .pg-cell:nth-child(1) { grid-column: span 2; }
          .pg-cell:nth-child(5) { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .pg-inner  { padding: 3rem 1.5rem; }
          .pg-grid   { grid-template-columns: 1fr; }
          .pg-cell:nth-child(1),
          .pg-cell:nth-child(5) { grid-column: span 1; grid-row: span 1; }
          .pg-stats  { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <section className="pg-root">
        <div className="pg-inner">
          {/* Header */}
          <div className="pg-header">
            <div>
              <div className="pg-eyebrow">
                <span className="pg-eyebrow-line" />
                <span className="pg-eyebrow-text">Our Work</span>
              </div>
              <h2 className="pg-title">
                Studio <em>Gallery</em>
              </h2>
            </div>
            <div className="pg-header-right">
              <p className="pg-desc">
                Behind-the-scenes moments, recording sessions, and events from
                our journey in music — South African stories in frame.
              </p>

              {/* Filter buttons */}
              <div className="pg-filters">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    className={`pg-filter-btn${filter === cat ? " active" : ""}`}
                    onClick={() => setFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="pg-grid">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                className="pg-cell"
                onClick={() => openModal(item, index)}
              >
                <Image
                  src={item.url}
                  alt={item.caption}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="pg-cell-overlay">
                  <span className="pg-cell-badge">{item.category}</span>
                  <div className="pg-cell-bottom">
                    <p className="pg-cell-caption">{item.caption}</p>
                    <div className="pg-cell-eye">
                      <Eye size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="pg-stats">
            {stats.map((s, i) => (
              <div key={i} className="pg-stat">
                <div className="pg-stat-value">{s.value}</div>
                <div className="pg-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="pg-modal" onClick={closeModal}>
          <div className="pg-modal-bar" onClick={(e) => e.stopPropagation()}>
            <div className="pg-modal-bar-left">Gallery View</div>
            <div className="pg-modal-bar-right">
              <span className="pg-modal-counter">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(filtered.length).padStart(2, "0")}
              </span>
              <button
                className="pg-modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          <div
            className="pg-modal-img-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="pg-modal-nav pg-modal-nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <Image
              src={selected.url}
              alt={selected.caption}
              width={1200}
              height={800}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
            <button
              className="pg-modal-nav pg-modal-nav--next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div
            className="pg-modal-caption"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="pg-modal-caption-badge">{selected.category}</span>
            <span className="pg-modal-caption-text">{selected.caption}</span>
            <span className="pg-modal-caption-sub">
              {filter === "All" ? "All Photos" : filter}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
