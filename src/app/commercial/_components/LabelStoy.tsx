import React from "react";

const pillars = [
  { heading: "Artist-First", sub: "Creative freedom guaranteed" },
  { heading: "Quality", sub: "Premium production standards" },
  { heading: "Global Reach", sub: "Worldwide distribution" },
];

const LabelStory = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .ls-root {
          width: 100%;
          background: #f04a1c;
          border-top: 1px solid rgba(0,0,0,0.09);
          position: relative;
          overflow: hidden;
        }

        /* Dot grid artifact */
        .ls-root::after {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none; z-index: 0;
        }

        /* White left stripe */
        .ls-root::before {
          content: '';
          position: absolute; left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 75%, transparent);
          pointer-events: none; z-index: 2;
        }

        .ls-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
          position: relative; z-index: 1;
        }

        /* ── Header ── */
        .ls-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.2);
        }

        .ls-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 1.25rem;
        }
        .ls-eyebrow-line {
          width: 28px; height: 1px;
          background: #ffffff; flex-shrink: 0;
        }
        .ls-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.65);
        }

        .ls-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #ffffff;
        }

        .ls-desc-col {
          display: flex; flex-direction: column;
          justify-content: flex-end; gap: 1rem;
        }
        .ls-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(255,255,255,0.75);
          max-width: 440px;
        }

        /* ── Body: two paragraphs ── */
        .ls-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-left: 1px solid rgba(255,255,255,0.15);
          border-top: 1px solid rgba(255,255,255,0.15);
          margin-bottom: 0;
        }

        .ls-body-cell {
          border-right: 1px solid rgba(255,255,255,0.15);
          border-bottom: 1px solid rgba(255,255,255,0.15);
          padding: 2.5rem;
        }

        .ls-body-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.75; color: rgba(255,255,255,0.8);
        }
        .ls-body-text strong {
          color: #ffffff; font-weight: 700;
        }

        /* ── Pillars row ── */
        .ls-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-left: 1px solid rgba(255,255,255,0.15);
          border-top: none;
        }

        .ls-pillar {
          border-right: 1px solid rgba(255,255,255,0.15);
          border-bottom: 1px solid rgba(255,255,255,0.15);
          padding: 2rem 2.5rem;
          display: flex; flex-direction: column;
          gap: 0.4rem;
          position: relative; overflow: hidden;
          transition: background 0.25s ease;
        }
        .ls-pillar:hover { background: rgba(255,255,255,0.08); }

        /* White top bar on hover */
        .ls-pillar::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 100%; height: 3px;
          background: #ffffff;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .ls-pillar:hover::before { transform: scaleX(1); }

        .ls-pillar-heading {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          letter-spacing: -0.02em; line-height: 1;
          text-transform: uppercase; color: #ffffff;
        }
        .ls-pillar-sub {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem; font-weight: 500;
          color: rgba(255,255,255,0.6);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ls-header  { grid-template-columns: 1fr; gap: 1.5rem; }
          .ls-body    { grid-template-columns: 1fr; }
          .ls-pillars { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .ls-inner   { padding: 3rem 1.5rem; }
          .ls-pillars { grid-template-columns: 1fr; }
          .ls-body-cell { padding: 2rem 1.5rem; }
        }
      `}</style>

      <section className="ls-root">
        <div className="ls-inner">
          {/* Header */}
          <div className="ls-header">
            <div>
              <div className="ls-eyebrow">
                <span className="ls-eyebrow-line" />
                <span className="ls-eyebrow-text">Who We Are</span>
              </div>
              <h2 className="ls-title">
                Crafting Sound,
                <br />
                Building Legacies
              </h2>
            </div>
            <div className="ls-desc-col">
              <p className="ls-desc">
                We're not just a record label — we're a creative collective
                dedicated to amplifying authentic voices and pushing sonic
                boundaries.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="ls-body">
            <div className="ls-body-cell">
              <p className="ls-body-text">
                From the first note to the final mix, we partner with artists
                who dare to be different. Our approach is simple:{" "}
                <strong>great music deserves great support.</strong> We provide
                our artists with world-class production facilities, strategic
                marketing, and the creative freedom to explore their sound
                without compromise.
              </p>
            </div>
            <div className="ls-body-cell">
              <p className="ls-body-text">
                Whether it's Gospel, Afro Soul, contemporary sound, or something
                entirely new — we're here to make it resonate.{" "}
                <strong>
                  Every release tells a story. Every artist leaves a mark.
                </strong>{" "}
                That's the music we make, and the legacy we're building — rooted
                in South Africa, reaching the world.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="ls-pillars">
            {pillars.map((p, i) => (
              <div key={i} className="ls-pillar">
                <div className="ls-pillar-heading">{p.heading}</div>
                <div className="ls-pillar-sub">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LabelStory;
