import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const teamMembers = [
  {
    id: 1,
    name: "Abraham Sibiya",
    position: "Founder & CEO",
    image: "/asib.jpg",
    linkedin: "/",
    twitter: "/",
  },
  {
    id: 2,
    name: "Sifiso Mtshali",
    position: "Operations Manager",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    linkedin: "/",
    twitter: "/",
  },
  {
    id: 3,
    name: "Palesa Ramosa",
    position: "Social Media Coordinator",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGupWs9fvHdsA/profile-displayphoto-shrink_800_800/B4DZTHLRzjGkAc-/0/1738508411526?e=1764201600&v=beta&t=fi1fh_wBi7RlaxrmAqFU6TMP4wNU5N8S4I4g-9hkHYY",
    linkedin: "/",
    twitter: "/",
  },
  {
    id: 4,
    name: "Lemogang Ncube",
    position: "Information Technology Intern",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFqpxx9f-CcIQ/profile-displayphoto-shrink_800_800/B4DZeBrA2HGkAg-/0/1750227227403?e=1764201600&v=beta&t=GwNwGrrZZ_F0ajZxHXEGbzfJP4nct4adqFKPdOOOcbU",
    linkedin: "/",
    twitter: "/",
  },
  {
    id: 5,
    name: "Akithi Nzuza",
    position: "Digital Media Support",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHP77LKMwUBMA/profile-displayphoto-crop_800_800/B4DZv7BAKyKUAI-/0/1769442941698?e=1774483200&v=beta&t=ehu_dpE5ngdWDnHevv2icVblPDdwAGlWN0dj3N4-HtA",
    linkedin: "/",
    twitter: "/",
  },
  {
    id: 6,
    name: "Rorisang Putu",
    position: "Information Technology Support",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGX3E1US54ygw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720921174508?e=1764201600&v=beta&t=EciQ5yqDd4c2M3Eqdkesx4fbEQ-Npao7tjzpDFhMq0I",
    linkedin: "/",
    twitter: "/",
  },
];

const Team = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        .team-card {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          background: #ffffff;
        }

        /* Orange top bar on hover */
        .team-card::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 100%; height: 3px;
          background: #f05a1a;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
          z-index: 3;
        }
        .team-card:hover::before { transform: scaleX(1); }

        /* Image */
        .team-card-image {
          width: 100%;
          aspect-ratio: 3/4;
          position: relative;
          overflow: hidden;
          background: #f0f0f0;
        }
        .team-card-image img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top;
          display: block;
          transition: transform 0.5s ease;
          filter: grayscale(15%);
        }
        .team-card:hover .team-card-image img {
          transform: scale(1.04);
          filter: grayscale(0%);
        }

        /* Number badge on image */
        .team-card-num {
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

        /* Card body */
        .team-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        .team-card-name {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #0a0a0a;
          line-height: 1.1;
        }
        /* First name gets the italic serif treatment */
        .team-card-name-first {
          font-family: Georgia, 'Times New Roman', serif;
          font-style: italic;
          font-weight: 400;
          text-transform: lowercase;
          letter-spacing: 0;
        }

        .team-card-position {
          font-family: 'Manrope', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(0,0,0,0.4);
        }

        /* Footer: social links */
        .team-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.5rem;
          border-top: 1px solid rgba(0,0,0,0.06);
          margin-top: auto;
        }

        .team-card-social {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }
        .team-card-social a {
          width: 28px; height: 28px;
          border: 1px solid rgba(0,0,0,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(0,0,0,0.35);
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        }
        .team-card-social a:hover {
          border-color: #f05a1a;
          color: #f05a1a;
          background: rgba(240,90,26,0.05);
        }

        .team-card-view {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(0,0,0,0.2);
          display: flex; align-items: center; gap: 0.35rem;
          transition: color 0.2s ease;
        }
        .team-card:hover .team-card-view { color: #f05a1a; }
        .team-card-view-dot {
          width: 5px; height: 5px;
          background: #1a8cff; border-radius: 50%;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .team-card:hover .team-card-view-dot { opacity: 1; }

        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .team-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="team-grid">
        {teamMembers.map((member, index) => {
          const [first, ...rest] = member.name.split(" ");
          return (
            <div key={member.id} className="team-card">
              {/* Image */}
              <div className="team-card-image">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="team-card-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Body */}
              <div className="team-card-body">
                <div className="team-card-name">
                  <span className="team-card-name-first">{first}</span>{" "}
                  {rest.join(" ")}
                </div>
                <div className="team-card-position">{member.position}</div>
              </div>

              {/* Footer */}
              <div className="team-card-footer">
                <div className="team-card-social">
                  <Link
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <FaLinkedin size={12} />
                  </Link>
                  <Link
                    href={member.twitter}
                    aria-label={`${member.name} Twitter`}
                  >
                    <FaXTwitter size={12} />
                  </Link>
                </div>
                <div className="team-card-view">
                  <span className="team-card-view-dot" />
                  View Profile
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Team;
