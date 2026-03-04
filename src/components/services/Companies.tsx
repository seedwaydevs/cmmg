import React from "react";
import Image from "next/image";
import {
  barloworld,
  brownsense,
  capasso,
  ccli,
  orchard,
  samro,
  trace,
} from "@/data";

const logos = [
  { src: orchard, alt: "Orchard" },
  { src: brownsense, alt: "Brownsense" },
  { src: trace, alt: "Trace" },
  { src: capasso, alt: "Capasso" },
  { src: samro, alt: "SAMRO" },
  { src: barloworld, alt: "Barloworld" },
  { src: ccli, alt: "CCLI" },
];

const stats = [
  {
    number: "50+",
    label: "Global Clients",
    desc: "Trusted partnerships worldwide",
  },
  {
    number: "200+",
    label: "Projects Delivered",
    desc: "Successful campaigns and productions",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    desc: "Consistently exceeding expectations",
  },
];

const ServicesCompanies = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .svc-co-root {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.08);
          position: relative;
        }

        .svc-co-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
        }

        /* ── Header ── */
        .svc-co-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .svc-co-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 1.25rem;
        }
        .svc-co-eyebrow-line { width: 28px; height: 1px; background: #f05a1a; flex-shrink: 0; }
        .svc-co-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }
        .svc-co-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #0a0a0a;
        }
        .svc-co-title em { font-style: normal; color: #f05a1a; }
        .svc-co-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(0,0,0,0.5);
          max-width: 420px;
        }

        /* ── Logo grid ── */
        .svc-co-logos {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
          margin-bottom: 0;
        }

        .svc-co-logo-cell {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 2rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .svc-co-logo-cell:hover { background: #fafafa; }

        /* Orange top bar on hover */
        .svc-co-logo-cell::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 100%; height: 2px;
          background: #f05a1a;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .svc-co-logo-cell:hover::before { transform: scaleX(1); }

        .svc-co-logo-cell img {
          height: 36px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%) opacity(40%);
          transition: filter 0.3s ease;
          display: block;
        }
        /* Capasso needs a bg */
        .svc-co-logo-cell.has-bg img {
          background: #1e3a5f;
          padding: 4px 8px;
        }
        .svc-co-logo-cell:hover img {
          filter: grayscale(0%) opacity(100%);
        }

        /* ── Stats row ── */
        .svc-co-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: none;
        }
        .svc-co-stat {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 2.5rem 2rem;
          display: flex; flex-direction: column;
          gap: 0.35rem;
          transition: background 0.2s ease;
        }
        .svc-co-stat:hover { background: #fafafa; }

        .svc-co-stat-value {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3rem);
          letter-spacing: -0.02em; line-height: 1;
          color: #f05a1a;
        }
        .svc-co-stat-label {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.78rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #0a0a0a;
        }
        .svc-co-stat-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem; font-weight: 400;
          color: rgba(0,0,0,0.4); line-height: 1.5;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .svc-co-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .svc-co-logos  { grid-template-columns: repeat(4, 1fr); }
          .svc-co-stats  { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .svc-co-inner { padding: 3rem 1.5rem; }
          .svc-co-logos { grid-template-columns: repeat(3, 1fr); }
          .svc-co-stats { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="svc-co-root">
        <div className="svc-co-inner">
          {/* Header */}
          <div className="svc-co-header">
            <div>
              <div className="svc-co-eyebrow">
                <span className="svc-co-eyebrow-line" />
                <span className="svc-co-eyebrow-text">
                  Trusted & Licensed By
                </span>
              </div>
              <h2 className="svc-co-title">
                Our Trusted <em>Clients</em>
              </h2>
            </div>
            <div>
              <p className="svc-co-desc">
                We've had the privilege of collaborating with industry-leading
                brands. Our flexible media solutions are crafted to amplify
                stories, elevate experiences, and drive results — from concept
                to final cut.
              </p>
            </div>
          </div>

          {/* Logo grid */}
          <div className="svc-co-logos">
            {logos.map((logo, i) => (
              <div
                key={i}
                className={`svc-co-logo-cell${logo.alt === "Capasso" ? " has-bg" : ""}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  height={36}
                  style={{ width: "auto", height: 36, objectFit: "contain" }}
                />
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="svc-co-stats">
            {stats.map((stat, i) => (
              <div key={i} className="svc-co-stat">
                <div className="svc-co-stat-value">{stat.number}</div>
                <div className="svc-co-stat-label">{stat.label}</div>
                <div className="svc-co-stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCompanies;
