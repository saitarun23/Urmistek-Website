import React from "react";
import "../styles/whoWeAre.css";

const letters = [
  { letter: "U", phrase: "Unified" },
  { letter: "R", phrase: "Resilient" },
  { letter: "M", phrase: "Modernization" },
  { letter: "I", phrase: "Innovation" },
  { letter: "S", phrase: "Solutions" },
  { letter: "T", phrase: "Transformative" },
  { letter: "E", phrase: "Excellence" },
  { letter: "K", phrase: "Knowledge" },
];

const WhoWeAre = () => {
  return (
    <section className="spectrum-section">

      {/* BACKGROUND SYSTEM */}
      <div className="spectrum-grid"></div>
      <div className="spectrum-radial spectrum-radial-one"></div>
      <div className="spectrum-radial spectrum-radial-two"></div>

      {/* MASSIVE FLOATING WORD */}
      <div className="spectrum-floating-word">URMISTEK</div>

      <div className="spectrum-container">

        {/* HERO — HORIZONTAL BRAND MANIFESTO */}
        <div className="spectrum-hero">
          <div className="brand-manifesto">

            <div className="manifesto-inner">
              {/* <p className="manifesto-eyebrow">Who We Are</p> */}

              {/* Horizontal letters */}
              <div className="brand-letters">
                {letters.map(({ letter, phrase }, i) => (
                  <div
                    className="letter-col"
                    key={letter}
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    <div className="letter-circle">
                      <span className="letter">{letter}</span>
                    </div>
                    <div className="letter-connector" aria-hidden="true" />
                    <p className="letter-phrase">{phrase}</p>
                  </div>
                ))}
              </div>

              {/* Brand name strip */}
              {/* <div className="brand-name-strip" aria-hidden="true">
                {"URMISTEK".split("").map((l, i) => (
                  <span
                    key={i}
                    className="brand-name-char"
                    style={{ animationDelay: `${560 + i * 50}ms` }}
                  >
                    {l}
                  </span>
                ))}
              </div> */}
            </div>

          </div>
        </div>

        {/* EXPERIENCE LAYOUT */}
        <div className="spectrum-experience">

          {/* LEFT PANEL */}
          <div className="spectrum-main-panel">
            <div className="spectrum-panel-glow"></div>

            <div className="spectrum-panel-content">
              <span className="spectrum-label">
                GLOBAL TRANSFORMATION NETWORK
              </span>

              <h2>
                Digital ecosystems for globally
                connected enterprises.
              </h2>

              <p>
                We collaborate with digitally mature organizations to create
                scalable infrastructures, accelerate transformation cycles,
                modernize enterprise experiences, and unlock innovation-driven
                growth across evolving global markets.
              </p>
            </div>

            <div className="spectrum-big-text">FUTURE</div>
          </div>

          {/* RIGHT STACK */}
          <div className="spectrum-side-stack">

            <div className="spectrum-mini-card">
              <div className="spectrum-mini-top">
                <div className="spectrum-mini-dot"></div>
                <span>GLOBAL REACH</span>
              </div>
              <h3>
                23 Countries Connected Through Digital Innovation Ecosystems.
              </h3>
            </div>

            <div className="spectrum-mini-card">
              <div className="spectrum-mini-top">
                <div className="spectrum-mini-dot"></div>
                <span>INNOVATION CULTURE</span>
              </div>
              <h3>
                Accelerating enterprise transformation with intelligent digital thinking.
              </h3>
            </div>

            <div className="spectrum-mini-card">
              <div className="spectrum-mini-top">
                <div className="spectrum-mini-dot"></div>
                <span>ENTERPRISE MODERNIZATION</span>
              </div>
              <h3>
                Future-ready infrastructures designed for scalable digital growth.
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhoWeAre;