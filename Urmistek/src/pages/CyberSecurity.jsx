import React from "react";
import "../styles/cyberSecurity.css";

const securityData = [
  {
    title: "Fire Walls",
    desc: "Advanced firewall ecosystems engineered to neutralize evolving cyber threats across enterprise infrastructures.",
  },
  {
    title: "Email Protection",
    desc: "Realtime protection systems defending enterprise communication against phishing, spam, and unauthorized intrusion.",
  },
  {
    title: "Wifi Protection",
    desc: "Adaptive wireless security intelligence safeguarding connected environments from malicious access attempts.",
  },
  {
    title: "Security Plans",
    desc: "Strategic cybersecurity frameworks architected to secure digital operations against future-scale vulnerabilities.",
  },
];

const CyberSecurity = () => {
  return (
    <section className="void-security-section">

      {/* BACKGROUND */}
      <div className="void-noise"></div>

      <div className="void-light void-light-one"></div>
      <div className="void-light void-light-two"></div>

      {/* MASSIVE TEXT */}
      <div className="void-bg-text">
        CYBER
      </div>

      <div className="void-container">

        {/* HERO */}
        <div className="void-hero">

          <div className="void-hero-top">

            <span className="void-mini-line"></span>

            <p>
              URMISTEK • CYBER INTELLIGENCE SYSTEMS
            </p>

          </div>

          <h1 className="void-title">
            <span>DEFEND THE</span>
            <span>FUTURE</span>
          </h1>

        </div>

        {/* FLOATING LAYOUT */}
        <div className="void-layout">

          {securityData.map((item, index) => (
            <div
              className={`void-card void-card-${index + 1}`}
              key={index}
            >

              {/* GLASS */}
              <div className="void-card-glass"></div>

              {/* TOP */}
              <div className="void-card-top">

                <span>
                  0{index + 1}
                </span>

                {/* <div className="void-signal"></div> */}

              </div>

              {/* CONTENT */}
              <div className="void-card-content">

                <h2>{item.title}</h2>

                <p>{item.desc}</p>

              </div>

              {/* MASSIVE WORD */}
              {/* <div className="void-word">
                SECURE
              </div> */}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CyberSecurity;