import React from "react";
import Link from "next/link";
import { Play, Users, Trophy, Calendar, ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Video & Audio Production",
    icon: Play,
    description:
      "Industry-leading video and audio production services tailored for modern media needs — from concept to final delivery.",
  },
  {
    number: "02",
    title: "Music Library Licensing",
    icon: Users,
    description:
      "Access our in-house music library with flexible sync licensing for film, advertising, and digital content.",
  },
  {
    number: "03",
    title: "Creative Sound Design",
    icon: Trophy,
    description:
      "Work with our experienced creatives in storytelling, sound design, and audio branding that resonates.",
  },
  {
    number: "04",
    title: "End-to-End Solutions",
    icon: Calendar,
    description:
      "From ideation to final delivery, we offer full content production services that bring your vision to life.",
  },
];

const AboutWhyUs = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .about-why-root {
          width: 100%;
          background: #0a0a0a;
          border-top: 1px solid rgba(255,255,255,0.06);
          position: relative;
          overflow: hidden;
        }

        /* Orange left stripe */
        .about-why-root::before {
          content: '';
          position: absolute; left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none; z-index: 2;
        }

        .about-why-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
          position: relative; z-index: 1;
        }

        /* Header */
        .about-why-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .about-why-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 1.25rem;
        }
        .about-why-eyebrow-line { width: 28px; height: 1px; background: #f05a1a; flex-shrink: 0; }
        .about-why-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .about-why-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #ffffff;
        }
        .about-why-title em { font-style: normal; color: #f05a1a; }

        .about-why-header-right {
          display: flex; flex-direction: column;
          justify-content: flex-end; gap: 1.5rem;
        }
        .about-why-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(255,255,255,0.45);
          max-width: 420px;
        }
        .about-why-cta {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #ffffff; background: #f05a1a; border: none;
          padding: 0.85rem 2rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          align-self: flex-start;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .about-why-cta:hover { background: #d44c10; transform: translateY(-1px); }

        /* Services grid */
        .about-why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 1px solid rgba(255,255,255,0.08);
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .about-why-card {
          border-right: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 2.5rem 2rem;
          display: flex; flex-direction: column;
          gap: 1rem; position: relative;
          overflow: hidden;
          transition: background 0.25s ease;
        }
        .about-why-card:hover { background: rgba(255,255,255,0.02); }

        .about-why-card::before {
          content: '';
          position: absolute; left: 0; top: 0;
          width: 2px; height: 100%;
          background: #f05a1a;
          transform: scaleY(0); transform-origin: top;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .about-why-card:hover::before { transform: scaleY(1); }

        .about-why-card-top {
          display: flex; align-items: flex-start;
          justify-content: space-between;
        }
        .about-why-card-num {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: 0.65rem; letter-spacing: 0.18em;
          color: rgba(255,255,255,0.2);
        }
        .about-why-card-icon {
          width: 38px; height: 38px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #f05a1a;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .about-why-card:hover .about-why-card-icon {
          border-color: #f05a1a;
          background: rgba(240,90,26,0.08);
        }

        .about-why-card-title {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #ffffff;
          transition: color 0.2s ease;
        }
        .about-why-card:hover .about-why-card-title { color: #f05a1a; }

        .about-why-card-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem; font-weight: 400;
          line-height: 1.65; color: rgba(255,255,255,0.35);
          flex: 1;
        }

        .about-why-card-arrow {
          color: rgba(255,255,255,0.15);
          transition: color 0.2s ease, transform 0.2s ease;
          align-self: flex-start;
          margin-top: auto;
        }
        .about-why-card:hover .about-why-card-arrow {
          color: #f05a1a;
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .about-why-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .about-why-grid   { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .about-why-inner { padding: 3rem 1.5rem; }
          .about-why-grid  { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="about-why-root">
        <div className="about-why-inner">
          <div className="about-why-header">
            <div>
              <div className="about-why-eyebrow">
                <span className="about-why-eyebrow-line" />
                <span className="about-why-eyebrow-text">Why Choose Us</span>
              </div>
              <h2 className="about-why-title">
                Production-Level
                <br />
                <em>Polish</em>
              </h2>
            </div>
            <div className="about-why-header-right">
              <p className="about-why-desc">
                We combine creative vision with technical precision to deliver
                high-impact audio and visual content — bringing a sharp,
                professional edge to every project without losing the soul of
                your story.
              </p>
              <Link href="/services" className="about-why-cta">
                All Services
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="about-why-grid">
            {services.map((service, i) => (
              <div key={i} className="about-why-card">
                <div className="about-why-card-top">
                  <span className="about-why-card-num">{service.number}</span>
                  <div className="about-why-card-icon">
                    <service.icon size={16} />
                  </div>
                </div>
                <div className="about-why-card-title">{service.title}</div>
                <p className="about-why-card-desc">{service.description}</p>
                <ArrowRight size={16} className="about-why-card-arrow" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutWhyUs;
