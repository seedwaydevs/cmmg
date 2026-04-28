import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const ceo = {
  name: "Abraham Sibiya",
  position: "Founder & CEO",
  image: "/asib.jpg",
  linkedin: "https://www.linkedin.com/in/abe-sibiya-072aa2103/",
  facebook: "https://web.facebook.com/RevAbeSibiya/?_rdc=1&_rdr#",
  quote:
    "We didn't build this label to chase trends or sign what's safe. Every artist we develop, every sound we craft, every record we release is a deliberate bet on authenticity over formula. Johannesburg shaped our ears and our hunger — now we're building the soundtrack the continent deserves.",
};

const AboutTeam = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        /* ─── Root ─── */
        .about-team-root {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.08);
          position: relative;
        }
        .about-team-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
        }

        /* ─── Header ─── */
        .about-team-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .about-team-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 1.25rem;
        }
        .about-team-eyebrow-line { width: 28px; height: 1px; background: #f05a1a; flex-shrink: 0; }
        .about-team-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }
        .about-team-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #0a0a0a;
        }
        .about-team-title em { font-style: normal; color: #f05a1a; }
        .about-team-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(0,0,0,0.5);
          max-width: 420px;
        }

        /* ─── CEO Layout ─── */
        .ceo-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          border: 1px solid rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
        }

        /* ─── CEO Card (left) ─── */
        .ceo-card {
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
          background: #ffffff;
        }
        .ceo-card::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 100%; height: 3px;
          background: #f05a1a;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
          z-index: 3;
        }
        .ceo-card:hover::before { transform: scaleX(1); }

        .ceo-card-image {
          width: 100%;
          aspect-ratio: 3/4;
          position: relative;
          overflow: hidden;
          background: #f0f0f0;
        }
        .ceo-card-image img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top;
          display: block;
          transition: transform 0.5s ease;
          filter: grayscale(15%);
        }
        .ceo-card:hover .ceo-card-image img {
          transform: scale(1.04);
          filter: grayscale(0%);
        }
        .ceo-card-num {
          position: absolute;
          top: 1rem; left: 1rem;
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: 0.65rem; letter-spacing: 0.18em;
          color: #ffffff;
          background: rgba(10,10,10,0.6);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 0.25rem 0.6rem;
          z-index: 2;
        }
        .ceo-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          border-top: 1px solid rgba(0,0,0,0.08);
        }
        .ceo-card-name {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #0a0a0a;
          line-height: 1.1;
        }
        .ceo-card-name-first {
          font-family: Georgia, 'Times New Roman', serif;
          font-style: italic;
          font-weight: 400;
          text-transform: lowercase;
          letter-spacing: 0;
        }
        .ceo-card-position {
          font-family: 'Manrope', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(0,0,0,0.4);
        }
        .ceo-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.5rem;
          border-top: 1px solid rgba(0,0,0,0.06);
          margin-top: auto;
        }
        .ceo-card-social {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }
        .ceo-card-social a {
          width: 28px; height: 28px;
          border: 1px solid rgba(0,0,0,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(0,0,0,0.35);
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        }
        .ceo-card-social a:hover {
          border-color: #f05a1a;
          color: #f05a1a;
          background: rgba(240,90,26,0.05);
        }
        .ceo-card-view {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(0,0,0,0.2);
          display: flex; align-items: center; gap: 0.35rem;
          transition: color 0.2s ease;
        }
        .ceo-card:hover .ceo-card-view { color: #f05a1a; }
        .ceo-card-view-dot {
          width: 5px; height: 5px;
          background: #1a8cff; border-radius: 50%;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .ceo-card:hover .ceo-card-view-dot { opacity: 1; }

        /* ─── Word from CEO (right) ─── */
        .ceo-word {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem;
          background: #fafafa;
          position: relative;
          overflow: hidden;
        }

        /* Subtle decorative large quote mark */
        .ceo-word::before {
          content: '\\201C';
          position: absolute;
          top: -1.5rem; left: 3rem;
          font-family: Georgia, serif;
          font-size: 14rem;
          line-height: 1;
          color: rgba(240,90,26,0.06);
          pointer-events: none;
          user-select: none;
        }

        .ceo-word-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 2rem;
        }
        .ceo-word-eyebrow-line { width: 28px; height: 1px; background: #f05a1a; flex-shrink: 0; }
        .ceo-word-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }

        .ceo-word-quote {
          font-family: Georgia, 'Times New Roman', serif;
          font-style: italic;
          font-size: clamp(1.25rem, 2vw, 1.65rem);
          line-height: 1.65;
          color: #0a0a0a;
          position: relative;
          z-index: 1;
          margin: 0 0 2.5rem 0;
        }

        .ceo-word-quote strong {
          font-style: normal;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          color: #f05a1a;
          font-size: 0.85em;
          letter-spacing: 0.02em;
        }

        .ceo-word-sig {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .ceo-word-sig-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0a0a0a;
        }
        .ceo-word-sig-role {
          font-family: 'Manrope', sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }
        .ceo-word-sig-bar {
          width: 32px; height: 2px;
          background: #f05a1a;
          margin-bottom: 0.6rem;
        }

        /* ─── Responsive ─── */
        @media (max-width: 1024px) {
          .about-team-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .ceo-layout { grid-template-columns: 1fr; }
          .ceo-card { border-right: none; border-bottom: 1px solid rgba(0,0,0,0.08); }
          .ceo-card-image { aspect-ratio: 4/3; }
          .ceo-word { padding: 3rem 2rem; }
        }
        @media (max-width: 640px) {
          .about-team-inner { padding: 3rem 1.5rem; }
          .ceo-word { padding: 2.5rem 1.5rem; }
          .ceo-word::before { font-size: 10rem; }
        }
      `}</style>

      <section className="about-team-root">
        <div className="about-team-inner">
          {/* Header */}
          <div className="about-team-header">
            <div>
              <div className="about-team-eyebrow">
                <span className="about-team-eyebrow-line" />
                <span className="about-team-eyebrow-text">The People</span>
              </div>
              <h2 className="about-team-title">
                Meet The <em>Team</em>
              </h2>
            </div>
            <div>
              <p className="about-team-desc">
                The creative mind and technical expert behind every project — a
                passionate producer, engineer, and storyteller based in
                Johannesburg.
              </p>
            </div>
          </div>

          {/* CEO layout */}
          <div className="ceo-layout">
            {/* Left: CEO card */}
            <div className="ceo-card">
              <div className="ceo-card-image">
                <Image
                  src={ceo.image}
                  alt={ceo.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
                <span className="ceo-card-num">01</span>
              </div>
              <div className="ceo-card-body">
                <div className="ceo-card-name">
                  <span className="ceo-card-name-first">
                    {ceo.name.split(" ")[0]}
                  </span>{" "}
                  {ceo.name.split(" ").slice(1).join(" ")}
                </div>
                <div className="ceo-card-position">{ceo.position}</div>
              </div>
              <div className="ceo-card-footer">
                <div className="ceo-card-social">
                  <Link href={ceo.linkedin} aria-label={`${ceo.name} LinkedIn`}>
                    <FaLinkedin size={12} />
                  </Link>
                  <Link href={ceo.facebook} aria-label={`${ceo.name} Twitter`}>
                    <FaFacebook size={12} />
                  </Link>
                </div>
                <div className="ceo-card-view">
                  <span className="ceo-card-view-dot" />
                  View Profile
                </div>
              </div>
            </div>

            {/* Right: Word from the CEO */}
            <div className="ceo-word">
              <div className="ceo-word-eyebrow">
                <span className="ceo-word-eyebrow-line" />
                <span className="ceo-word-eyebrow-text">
                  A Word from the CEO
                </span>
              </div>
              <blockquote className="ceo-word-quote">
                {ceo.quote.split("Johannesburg").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <React.Fragment key={i}>
                      {part}
                      <strong>Johannesburg</strong>
                    </React.Fragment>
                  ) : (
                    part
                  ),
                )}
              </blockquote>
              <div className="ceo-word-sig">
                <div className="ceo-word-sig-bar" />
                <div className="ceo-word-sig-name">{ceo.name}</div>
                <div className="ceo-word-sig-role">{ceo.position}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
