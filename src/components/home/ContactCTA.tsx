import React from "react";
import { Send, Mail, Zap, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        /* ── Root — white section ── */
        .cta-root {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
        }

        .cta-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
        }

        /* ── Section header ── */
        .cta-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .cta-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .cta-eyebrow-line {
          width: 28px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }
        .cta-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }

        .cta-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em;
          line-height: 0.95;
          text-transform: uppercase;
          color: #0a0a0a;
        }
        .cta-title em { font-style: normal; color: #f05a1a; }

        .cta-header-right {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1.5rem;
        }
        .cta-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(0,0,0,0.5);
          max-width: 420px;
        }

        /* ── Two-panel grid ── */
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        /* ── Left — orange CTA panel ── */
        .cta-left {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          background: #f05a1a;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2.5rem;
          position: relative;
          overflow: hidden;
        }

        /* Subtle dot grid on orange panel */
        .cta-left::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        .cta-left-top { position: relative; z-index: 1; }

        .cta-left-icon {
          width: 44px; height: 44px;
          border: 1px solid rgba(255,255,255,0.25);
          display: flex; align-items: center; justify-content: center;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .cta-left-heading {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          letter-spacing: -0.02em;
          line-height: 1;
          text-transform: uppercase;
          color: #ffffff;
        }

        .cta-left-body {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem; font-weight: 400;
          line-height: 1.7;
          color: rgba(255,255,255,0.75);
          margin-top: 1rem;
        }

        .cta-left-btn {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #f05a1a; background: #ffffff; border: none;
          padding: 0.9rem 2rem; cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          align-self: flex-start; position: relative; z-index: 1;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .cta-left-btn:hover {
          background: rgba(255,255,255,0.9);
          transform: translateY(-1px);
        }
        .cta-left-btn svg { transition: transform 0.2s ease; }
        .cta-left-btn:hover svg { transform: translateX(3px); }

        /* ── Right — contact details panel ── */
        .cta-right {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Orange left stripe */
        .cta-right::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
          z-index: 2;
        }

        .cta-right-top {
          padding: 3rem 3rem 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          position: relative; z-index: 1;
        }

        .cta-right-icon {
          width: 44px; height: 44px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #f05a1a; margin-bottom: 1.5rem;
        }

        .cta-right-heading {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1.5rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .cta-right-sub {
          font-family: 'Manrope', sans-serif;
          font-size: 0.82rem; font-weight: 400;
          color: rgba(255,255,255,0.35); line-height: 1.6;
        }

        /* Contact action buttons — bordered grid */
        .cta-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(255,255,255,0.06);
          flex: 1;
        }

        .cta-action-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          padding: 2rem;
          text-decoration: none;
          border-right: 1px solid rgba(255,255,255,0.06);
          background: transparent;
          position: relative;
          transition: background 0.2s ease;
          gap: 2rem;
        }
        .cta-action-btn:last-child { border-right: none; }
        .cta-action-btn:hover { background: rgba(255,255,255,0.03); }

        /* Orange accent bar */
        .cta-action-btn::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 2px; height: 100%;
          background: #f05a1a;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .cta-action-btn:hover::before { transform: scaleY(1); }

        .cta-action-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        .cta-action-value {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem; font-weight: 600;
          color: rgba(255,255,255,0.75);
          word-break: break-all;
          line-height: 1.4;
        }

        .cta-action-arrow {
          width: 28px; height: 28px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.3);
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .cta-action-btn:hover .cta-action-arrow {
          border-color: #f05a1a;
          color: #f05a1a;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .cta-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .cta-grid   { grid-template-columns: 1fr; }
          .cta-right::before { display: none; }
        }
        @media (max-width: 640px) {
          .cta-inner    { padding: 3rem 1.5rem; }
          .cta-title    { font-size: 2.25rem; }
          .cta-left     { padding: 2rem 1.5rem; }
          .cta-right-top { padding: 2rem 1.5rem; }
          .cta-actions  { grid-template-columns: 1fr; }
          .cta-action-btn { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>

      <section className="cta-root">
        <div className="cta-inner">
          {/* Section header */}
          <div className="cta-header">
            <div>
              <div className="cta-eyebrow">
                <span className="cta-eyebrow-line" />
                <span className="cta-eyebrow-text">Contact</span>
              </div>
              <h2 className="cta-title">
                Let's Work
                <br />
                <em>Together</em>
              </h2>
            </div>
            <div className="cta-header-right">
              <p className="cta-desc">
                Ready to create something extraordinary? Whether it's a custom
                score, brand anthem, or full production suite — we're here to
                make it happen.
              </p>
            </div>
          </div>

          {/* Two-panel grid */}
          <div className="cta-grid">
            {/* Left — orange panel */}
            <div className="cta-left">
              <div className="cta-left-top">
                <div className="cta-left-icon">
                  <Send size={18} />
                </div>
                <div className="cta-left-heading">
                  Start Your
                  <br />
                  Project
                </div>
                <p className="cta-left-body">
                  From recording sessions to full score commissions — tell us
                  what you're building and we'll tell you how we can elevate it.
                </p>
              </div>
              <a href="mailto:info@cmmg.co.za" className="cta-left-btn">
                Get in Touch
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Right — dark contact panel */}
            <div className="cta-right">
              <div className="cta-right-top">
                <div className="cta-right-icon">
                  <Mail size={18} />
                </div>
                <div className="cta-right-heading">Get In Touch</div>
                <p className="cta-right-sub">
                  Send us an email or give us a call to discuss your project.
                </p>
              </div>

              <div className="cta-actions">
                <a href="mailto:info@cmmg.co.za" className="cta-action-btn">
                  <span className="cta-action-label">Email</span>
                  <span className="cta-action-value">info@cmmg.co.za</span>
                  <div className="cta-action-arrow">
                    <ArrowRight size={12} />
                  </div>
                </a>
                <a href="tel:+27617889902" className="cta-action-btn">
                  <span className="cta-action-label">Phone</span>
                  <span className="cta-action-value">+27 61 788 9902</span>
                  <div className="cta-action-arrow">
                    <Zap size={12} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCTA;
