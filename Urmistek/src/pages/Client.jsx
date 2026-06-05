import React, { useState } from "react";
import "../styles/client.css";

import transforma from "../assets/images/TransfFormat.jpg";
import apexcovantage from "../assets/images/apexcovantage.jpg";
import mariapps from "../assets/images/MariApps.jpg";
import codemantra from "../assets/images/codemantra.png";
import LuminaDatamatics from "../assets/images/LuminaDatamatics.png";
import vr from "../assets/images/vr.png";
import peacock from "../assets/images/peacock.png";
import carenest from "../assets/images/carenest.png";

const clients = [
  {
    logo: transforma,
    name: "Transforma",
    tag: "Transformation Systems",
    color: "#0e7490",
    desc: "Driving enterprise-scale transformation ecosystems through intelligent modernisation, scalable automation, and next-generation digital operations.",
    pills: ["Digital Modernisation", "Process Automation", "Cloud Migration"],
  },
  {
    logo: apexcovantage,
    name: "ApexCovantage",
    tag: "Enterprise Infrastructure",
    color: "#b45309",
    desc: "Accelerating enterprise engineering with advanced cloud ecosystems, connected infrastructure platforms, and future-ready transformation architectures.",
    pills: ["Cloud Architecture", "DevOps Engineering", "Infrastructure Scale"],
  },
  {
    logo: mariapps,
    name: "MariApps",
    tag: "Digital Maritime",
    color: "#065f46",
    desc: "Building intelligent maritime technology ecosystems focused on operational efficiency, connected logistics, and digital-first shipping innovation.",
    pills: ["Fleet Management", "Port Logistics", "Maritime IoT"],
  },
  {
    logo: codemantra,
    name: "CodeMantra",
    tag: "Content Intelligence",
    color: "#5b21b6",
    desc: "Empowering content-driven enterprises with intelligent management, scalable digital-asset ecosystems, and next-generation content transformation.",
    pills: ["Content Transformation", "Digital Publishing", "Asset Management"],
  },
  {
    logo: LuminaDatamatics,
    name: "Lumina Datamatics",
    tag: "Data-Driven Solutions",
    color: "#92400e",
    desc: "Enabling data-centric enterprises with intelligent data management, scalable analytics ecosystems, and next-generation transformation solutions.",
    pills: ["Data Analytics", "Content Services", "EdTech Solutions"],
  },
  {
    logo: vr,
    name: "VR",
    tag: "Immersive Experiences",
    color: "#9d174d",
    desc: "Creating immersive digital experiences through intelligent VR solutions, scalable virtual ecosystems, and next-generation experiential transformation.",
    pills: ["VR Development", "AR Integration", "Spatial Computing"],
  },
  {
    logo: peacock,
    name: "Peacock",
    tag: "Innovation Partners",
    color: "#14532d",
    desc: "Fostering innovation-driven partnerships with enterprises to create cutting-edge solutions and accelerate digital transformation at scale.",
    pills: ["Innovation Labs", "R&D Partnership", "Product Strategy"],
  },
  {
    logo: carenest,
    name: "Carenest",
    tag: "Healthcare Solutions",
    color: "#1e3a8a",
    desc: "Transforming healthcare delivery with intelligent solutions, scalable digital platforms, and next-generation medical innovation ecosystems.",
    pills: ["Health Tech", "Patient Platforms", "Clinical Automation"],
  },
];

function ClientCard({ client, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="cnc-card"
      style={{ backgroundColor: client.color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* watermark index */}
      <span className="cnc-card__watermark">0{index + 1}</span>

      {/* diagonal pattern overlay */}
      <div className="cnc-card__pattern" />

      {/* logo zone */}
      <div className="cnc-card__logo-zone">
        <div className="cnc-card__logo-wrap">
          <img src={client.logo} alt={client.name} className="cnc-card__logo" />
        </div>
      </div>

      {/* content */}
      <div className="cnc-card__content">
        <p className="cnc-card__tag">{client.tag}</p>
        <h3 className="cnc-card__name">{client.name}</h3>

        <p
          className="cnc-card__desc"
          style={{
            maxHeight: hovered ? "120px" : "0",
            opacity: hovered ? 1 : 0,
          }}
        >
          {client.desc}
        </p>

        {/* <div className="cnc-card__pills">
          {client.pills.map((p, i) => (
            <span key={i} className="cnc-card__pill">
              {p}
            </span>
          ))}
        </div> */}
      </div>

      {/* arrow */}
      <div
        className="cnc-card__arrow"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translate(0,0)" : "translate(8px,-8px)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
          <path
            d="M5 11h12M11 5l6 6-6 6"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function Ticker() {
  return (
    <div className="cnc-ticker-outer">
      <div className="cnc-ticker">
        {[...clients, ...clients].map((c, i) => (
          <span key={i} className="cnc-tick">
            <span
              className="cnc-tick__dot"
              style={{ background: c.color }}
            />
            {c.name}
          </span>
        ))}
      </div>
    </div>
  );
}

const Client = () => {
  return (
    <section className="cnc-section">
      <div className="cnc-grid-bg" aria-hidden="true" />
      <div className="cnc-ghost" aria-hidden="true">CLIENTS</div>

      <div className="cnc-wrap">

        {/* Hero */}
        <header className="cnc-hero">
          <div className="cnc-hero__eyebrow">
            <span className="cnc-badge">URMISTEK</span>
            <span className="cnc-rule" />
            <span className="cnc-eyebrow-txt">Global Client Network</span>
          </div>

          <h1 className="cnc-hero__h1">
            <span className="cnc-h1--ghost">TRUSTED</span>
            <span className="cnc-h1--solid">BY THE</span>
            <span className="cnc-h1--ghost">WORLD'S</span>
            <span className="cnc-h1--grad">FINEST.</span>
          </h1>

          <p className="cnc-hero__sub">
            Eight industry-defining partnerships powering the planet's most ambitious
            digital transformations — built on trust, precision, and relentless innovation.
          </p>
        </header>

        {/* Ticker */}
        <Ticker />

        {/* Card Grid */}
        <div className="cnc-grid">
          {clients.map((c, i) => (
            <ClientCard key={c.name} client={c} index={i} />
          ))}
        </div>

        {/* Footer */}
        <footer className="cnc-footer">
          <span>URMISTEK</span>
          <span className="cnc-rule cnc-rule--flex" />
          <span>Global Digital Engineering</span>
          <span className="cnc-rule cnc-rule--flex" />
          <span>2025</span>
        </footer>

      </div>
    </section>
  );
};

export default Client;