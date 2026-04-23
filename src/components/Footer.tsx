import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cmmg } from "@/data";
import { Syne, Manrope } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "https://studios.cmmg.co.za" },
  { label: "Artists", href: "/commercial" },
  { label: "Gallery", href: "/gallery" },
];

const utilityLinks = [
  { label: "Licenses", href: "/licenses" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const externalLinks = [
  {
    label: "Production Music Library",
    href: "https://www.library.cmmg.co.za/library",
  },
  { label: "Book a Studio", href: "/contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .footer-root {
          width: 100%;
          background: #0a0a0a;
          border-top: 1px solid rgba(255,255,255,0.06);
          position: relative;
          overflow: hidden;
        }

        /* Orange left stripe */
        .footer-root::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, #f05a1a 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        .footer-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 3rem;
          position: relative;
          z-index: 1;
        }

        /* ── Top grid: logo + links ── */
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          border-left: 1px solid rgba(255,255,255,0.06);
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .footer-col {
          border-right: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 3rem 2rem;
        }

        /* Logo col */
        .footer-logo-col {
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
        }
        .footer-logo-wrap {
          height: 48px;
          display: flex;
          align-items: center;
        }
        .footer-logo-wrap img {
          height: 100%;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.85;
        }
        .footer-tagline {
          font-family: 'Manrope', sans-serif;
          font-size: 0.82rem; font-weight: 400;
          line-height: 1.65; color: rgba(255,255,255,0.35);
          max-width: 280px;
        }
        .footer-contact-block {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .footer-contact-item {
          font-family: 'Manrope', sans-serif;
          font-size: 0.78rem; font-weight: 500;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-contact-item::before {
          content: '';
          display: block;
          width: 10px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }
        a.footer-contact-item:hover { color: #f05a1a; }

        /* Link cols */
        .footer-col-heading {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: #ffffff;
          margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: 0.6rem;
        }
        .footer-col-heading::before {
          content: '';
          display: block; width: 20px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }

        .footer-links {
          display: flex; flex-direction: column;
          gap: 0.75rem; list-style: none;
          padding: 0; margin: 0;
        }
        .footer-links a {
          font-family: 'Manrope', sans-serif;
          font-size: 0.82rem; font-weight: 400;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s ease, padding-left 0.2s ease;
          display: block;
        }
        .footer-links a:hover {
          color: rgba(255,255,255,0.9);
          padding-left: 0.5rem;
        }

        /* External links get orange accent */
        .footer-links-external a {
          color: rgba(255,255,255,0.4);
        }
        .footer-links-external a:hover {
          color: #f05a1a;
        }

        /* ── Big CMMG wordmark ── */
        .footer-wordmark {
          border-left: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 2rem 2rem 0;
          overflow: hidden;
        }
        .footer-wordmark-text {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(5rem, 14vw, 13rem);
          letter-spacing: -0.04em; line-height: 0.85;
          text-transform: uppercase;
          color: rgba(255,255,255,0.04);
          user-select: none;
          white-space: nowrap;
        }
        .footer-wordmark-text em {
          font-style: normal;
          color: rgba(240,90,26,0.08);
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          border-left: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-copyright {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }
        .footer-copyright span { color: #f05a1a; }

        .footer-bottom-links {
          display: flex; gap: 1.5rem;
        }
        .footer-bottom-links a {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-bottom-links a:hover { color: rgba(255,255,255,0.6); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
          }
          .footer-logo-col { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .footer-inner { padding: 0 1.5rem; }
          .footer-top { grid-template-columns: 1fr; }
          .footer-logo-col { grid-column: span 1; }
          .footer-col { padding: 2rem 1.5rem; }
          .footer-wordmark { padding: 1.5rem 1.5rem 0; }
          .footer-bottom { padding: 1.25rem 1.5rem; flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">
          {/* Top grid */}
          <div className="footer-top">
            {/* Logo + contact col */}
            <div className="footer-col footer-logo-col">
              <div className="footer-logo-wrap">
                <Image src={cmmg} alt="CMMG Logo" height={48} />
              </div>
              <p className="footer-tagline">
                A South African record label, production music library, and
                studio facility. Built to develop artists and power creative
                projects across film, TV, and digital media.
              </p>
              <div className="footer-contact-block">
                <a href="tel:+27617889902" className="footer-contact-item">
                  +27 (0) 61-788-9902
                </a>
                <a
                  href="mailto:info@cmmg.co.za"
                  className="footer-contact-item"
                >
                  info@cmmg.co.za
                </a>
                <span className="footer-contact-item">
                  1 2nd Rd, Halfway House Estate, Midrand, 1685
                </span>
              </div>
            </div>

            {/* Company links */}
            <div className="footer-col">
              <div className="footer-col-heading">Company</div>
              <ul className="footer-links">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* External / services links */}
            <div className="footer-col">
              <div className="footer-col-heading">Services</div>
              <ul className={`footer-links footer-links-external`}>
                {externalLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utility links */}
            <div className="footer-col">
              <div className="footer-col-heading">Legal</div>
              <ul className="footer-links">
                {utilityLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Big watermark wordmark */}
          <div className="footer-wordmark">
            <div className="footer-wordmark-text">
              CMMG<em>.</em>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; {year} <span>CMMG</span> — All rights reserved
            </p>
            <div className="footer-bottom-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/licenses">Licenses</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
