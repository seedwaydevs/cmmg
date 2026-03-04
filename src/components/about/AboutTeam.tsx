import React from "react";
import Team from "./Team";

const AboutTeam = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

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

        /* Header */
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

        /* Team component container */
        .about-team-content {
          border: 1px solid rgba(0,0,0,0.08);
          border-top: none;
        }

        @media (max-width: 1024px) {
          .about-team-header { grid-template-columns: 1fr; gap: 1.5rem; }
        }
        @media (max-width: 640px) {
          .about-team-inner { padding: 3rem 1.5rem; }
        }
      `}</style>

      <section className="about-team-root">
        <div className="about-team-inner">
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
                The creative minds and technical experts behind every project —
                a passionate team of producers, engineers, and storytellers
                based in Johannesburg.
              </p>
            </div>
          </div>

          <div className="about-team-content">
            <Team />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
