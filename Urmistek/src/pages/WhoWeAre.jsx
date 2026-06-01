import React from "react";
import "../styles/whoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="spectrum-section">

      {/* BACKGROUND SYSTEM */}
      <div className="spectrum-grid"></div>

      <div className="spectrum-radial spectrum-radial-one"></div>
      <div className="spectrum-radial spectrum-radial-two"></div>

      {/* MASSIVE FLOATING WORD */}
      <div className="spectrum-floating-word">
        URMISTEK
      </div>

      <div className="spectrum-container">

        {/* HERO */}
        <div className="spectrum-hero">

            {/* <div className="spectrum-topbar">

                <span className="spectrum-line"></span>

                <p>
                WHO WE ARE • DIGITAL TRANSFORMATION COMPANY
                </p>

            </div>
    */}
          <div className="spectrum-hero-grid">

            <div className="spectrum-left">

              <h1>
                DIGITAL
                <span>EVOLUTION</span>
                PARTNERS
              </h1>

            </div>

            <div className="spectrum-right">

              {/* <div className="spectrum-pulse"></div> */}

              {/* <p>
                As frontrunners of technology advancement, Urmistek empowers
                leading enterprises across 23 countries to accelerate digital
                transformation journeys, expand digital horizons, and engineer
                future-ready business ecosystems through innovation-driven
                thinking.
              </p> */}

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
                Engineering intelligent digital ecosystems for globally
                connected enterprises.
              </h2>

              <p>
                We collaborate with digitally mature organizations to create
                scalable infrastructures, accelerate transformation cycles,
                modernize enterprise experiences, and unlock innovation-driven
                growth across evolving global markets.
              </p>

            </div>

            <div className="spectrum-big-text">
              FUTURE
            </div>

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