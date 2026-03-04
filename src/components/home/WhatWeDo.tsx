import React from "react";
import Link from "next/link";
import { Music, Video, Mic, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Record Label",
    icon: Music,
    badge: "Artists",
    content:
      "CMMG is home to a roster of talented South African artists across gospel, Afro soul, and contemporary music. We develop, produce, and distribute original music that connects with audiences locally and globally.",
    bullets: [
      "Artist development & management",
      "Commercial music releases",
      "Distribution & licensing",
      "Brand partnerships",
    ],
    cta: { label: "Our Artists", href: "/commercial", external: false },
  },
  {
    id: 2,
    title: "Production Music Library",
    icon: Video,
    badge: "Library",
    content:
      "A curated catalog of thousands of original, sync-ready tracks cleared for film, television, advertising, and digital content. Professional quality. Ready to license.",
    bullets: [
      "4500+ original tracks",
      "Cleared for sync licensing",
      "Film, TV & digital ready",
      "Searchable by mood & genre",
    ],
    cta: {
      label: "Browse Library",
      href: "https://www.library.cmmg.co.za/library",
      external: true,
    },
  },
  {
    id: 3,
    title: "Studios",
    icon: Mic,
    badge: "Facilities",
    content:
      "Two world-class studio facilities available for hire in Johannesburg. A professional music recording and production studio, and a fully equipped film and green screen studio — both supported by experienced engineers on request.",
    bullets: [
      "Music recording & production studio",
      "Film & green screen studio",
      "Professional equipment throughout",
      "On-site technical assistance",
    ],
    cta: { label: "Book a Studio", href: "/contact", external: false },
  },
];

const stats = [
  { value: "4500+", label: "Tracks Produced" },
  { value: "50+", label: "Projects Completed" },
  { value: "360°", label: "Studio Solution" },
];

const WhatWeDo = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .wwd-root {
          width: 100%;
          background: #003459;
          border-top: 1px solid rgba(255,255,255,0.06);
          position: relative;
          overflow: hidden;
        }

        .wwd-root::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
          z-index: 2;
        }

        .wwd-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
          position: relative;
          z-index: 1;
        }

        .wwd-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .wwd-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .wwd-eyebrow-line { width: 28px; height: 1px; background: #f05a1a; flex-shrink: 0; }
        .wwd-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }

        .wwd-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #ffffff;
        }
        .wwd-title em { font-style: normal; color: #f05a1a; }

        .wwd-header-right {
          display: flex; flex-direction: column;
          justify-content: flex-end; gap: 1.5rem;
        }
        .wwd-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(255,255,255,0.45);
          max-width: 420px;
        }
        .wwd-cta {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #ffffff; background: #f05a1a; border: none;
          padding: 0.85rem 2rem; cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          align-self: flex-start;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .wwd-cta:hover { background: #d44c10; transform: translateY(-1px); }
        .wwd-cta svg { transition: transform 0.2s ease; }
        .wwd-cta:hover svg { transform: translateX(3px); }

        /* ── Services grid ── */
        .wwd-services {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-left: 1px solid rgba(255,255,255,0.08);
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .wwd-service-card {
          border-right: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 2.5rem 2rem;
          display: flex; flex-direction: column;
          gap: 1.25rem; position: relative;
          overflow: hidden;
          transition: background 0.25s ease;
        }
        .wwd-service-card:hover { background: rgba(255,255,255,0.02); }
        .wwd-service-card::before {
          content: '';
          position: absolute; left: 0; top: 0;
          width: 2px; height: 100%;
          background: #f05a1a;
          transform: scaleY(0); transform-origin: top;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .wwd-service-card:hover::before { transform: scaleY(1); }

        .wwd-card-top {
          display: flex; align-items: flex-start;
          justify-content: space-between;
        }
        .wwd-card-icon {
          width: 40px; height: 40px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #f05a1a; flex-shrink: 0;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .wwd-service-card:hover .wwd-card-icon {
          border-color: #f05a1a;
          background: rgba(240,90,26,0.08);
        }
        .wwd-card-badge {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #1a8cff; border: 1px solid rgba(26,140,255,0.3);
          padding: 0.2rem 0.55rem;
        }

        .wwd-card-title {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1.1rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #ffffff;
        }
        .wwd-card-content {
          font-family: 'Manrope', sans-serif;
          font-size: 0.82rem; font-weight: 400;
          line-height: 1.65; color: rgba(255,255,255,0.8);
        }

        .wwd-card-bullets {
          display: flex; flex-direction: column; gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.2);
          list-style: none; padding-left: 0;
          flex: 1;
        }
        .wwd-card-bullets li {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem; font-weight: 500;
          color: rgba(255,255,255,0.65);
          display: flex; align-items: center; gap: 0.6rem;
        }
        .wwd-card-bullets li::before {
          content: ''; display: block;
          width: 12px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }

        /* Card CTA */
        .wwd-card-cta {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.6rem 1rem;
          align-self: flex-start;
          margin-top: 0.5rem;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .wwd-card-cta:hover { border-color: #f05a1a; color: #f05a1a; }
        .wwd-card-cta svg { transition: transform 0.2s ease; }
        .wwd-card-cta:hover svg { transform: translateX(3px); }

        /* ── Stats row ── */
        .wwd-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-left: 1px solid rgba(255,255,255,0.08);
        }
        .wwd-stat-cell {
          border-right: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 2rem;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0.4rem; text-align: center;
          background: rgba(255,255,255,0.06);
          transition: background 0.2s ease;
        }
        .wwd-stat-cell:hover { background: rgba(255,255,255,0.03); }
        .wwd-stat-value {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3rem);
          letter-spacing: -0.02em; line-height: 1;
          color: #ffffff;
        }
        .wwd-stat-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.7);
        }

        @media (max-width: 1024px) {
          .wwd-header   { grid-template-columns: 1fr; gap: 1.5rem; }
          .wwd-services { grid-template-columns: 1fr; }
          .wwd-stats    { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .wwd-inner { padding: 3rem 1.5rem; }
          .wwd-title { font-size: 2.25rem; }
          .wwd-stats { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="wwd-root">
        <div className="wwd-inner">
          {/* Section header */}
          <div className="wwd-header">
            <div>
              <div className="wwd-eyebrow">
                <span className="wwd-eyebrow-line" />
                <span className="wwd-eyebrow-text">What We Offer</span>
              </div>
              <h2 className="wwd-title">
                Three Ways To
                <br />
                Work With <em>Us</em>
              </h2>
            </div>
            <div className="wwd-header-right">
              <p className="wwd-desc">
                CMMG operates across three core pillars — a record label
                nurturing South African talent, a world-class production music
                library, and fully equipped studio facilities available for
                hire.
              </p>
              <Link href="/services" className="wwd-cta">
                All Services
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Services grid */}
          <div className="wwd-services">
            {services.map((service) => (
              <div key={service.id} className="wwd-service-card">
                <div className="wwd-card-top">
                  <div className="wwd-card-icon">
                    <service.icon size={18} />
                  </div>
                  <span className="wwd-card-badge">{service.badge}</span>
                </div>

                <div className="wwd-card-title">{service.title}</div>
                <p className="wwd-card-content">{service.content}</p>

                <ul className="wwd-card-bullets">
                  {service.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {service.cta.external ? (
                  <a
                    href={service.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wwd-card-cta"
                  >
                    {service.cta.label}
                    <ArrowRight size={12} />
                  </a>
                ) : (
                  <Link href={service.cta.href} className="wwd-card-cta">
                    {service.cta.label}
                    <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="wwd-stats">
            {stats.map((stat, i) => (
              <div key={i} className="wwd-stat-cell">
                <div className="wwd-stat-value">
                  <span style={{ color: "#f05a1a" }}>
                    {stat.value.replace(/[a-zA-Z°]/g, "")}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.6em",
                    }}
                  >
                    {stat.value.replace(/[^a-zA-Z°]/g, "")}
                  </span>
                </div>
                <div className="wwd-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
