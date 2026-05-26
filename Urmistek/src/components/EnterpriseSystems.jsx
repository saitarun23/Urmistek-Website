import React from "react";
import "../styles/enterpriseSystems.css";

const systemsData = [
  {
    title: "Adaptive Infrastructure",
    description:
      "Enterprise ecosystems engineered for resilient scaling across modern digital operations.",
    tag: "INFRASTRUCTURE",
  },
  {
    title: "Realtime Intelligence",
    description:
      "Operational data layers accelerating enterprise decisions through connected intelligence.",
    tag: "INTELLIGENCE",
  },
  {
    title: "Composable Architecture",
    description:
      "Flexible system frameworks designed for seamless integrations and future-ready expansion.",
    tag: "ARCHITECTURE",
  },
  {
    title: "Autonomous Operations",
    description:
      "Automation pipelines reducing workflow friction while maximizing operational precision.",
    tag: "AUTOMATION",
  },
];

const EnterpriseSystems = () => {
  return (
    <section className="enterprise-section">

      {/* Background Blur Orbs */}
      <div className="enterprise-blur enterprise-blur-one"></div>
      <div className="enterprise-blur enterprise-blur-two"></div>

      <div className="enterprise-container">

        {/* LEFT SIDE */}
        <div className="enterprise-left">

          <div className="enterprise-top-label">
            <span className="enterprise-line"></span>
            <p>URMISTEK DIGITAL SYSTEMS</p>
          </div>

          <h2 className="enterprise-title">
            DIGITAL
            <span>SYSTEMS</span>
            EVOLVED
          </h2>

          <p className="enterprise-description">
            Building scalable enterprise infrastructures that merge precision,
            intelligence, and modern digital transformation into unified ecosystems.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="enterprise-right">

          {systemsData.map((item, index) => (
            <div className="enterprise-row" key={index}>

              <div className="enterprise-row-number">
                0{index + 1}
              </div>

              <div className="enterprise-row-content">

                <div className="enterprise-row-top">
                  <span>{item.tag}</span>
                  <div className="enterprise-dot"></div>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default EnterpriseSystems;