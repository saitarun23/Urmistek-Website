import React from "react";
import "../styles/cyberSecurity.css";

const securityData = [
  {
    title: "Fire Walls",
    desc: "Our cutting-edge firewall solutions provide robust protection against cyber threats. We offer tailored configurations for businesses of all sizes.",
    themeColor: "#1e3a8a", // Permanent Premium Deep Blue
    cardLabel: "NETWORK_DEFENSE",
    vectorType: "matrix"
  },
  {
    title: "Email Protection",
    desc: "We provide state-of-the-art email security to prevent phishing, spam, and unauthorized access, ensuring your sensitive data remains protected",
    themeColor: "#4c1d95", // Permanent Premium Deep Purple
    cardLabel: "COMM_INTELLIGENCE",
    vectorType: "nodes"
  },
  {
    title: "Wifi Protection",
    desc: "Our Wi-Fi security solutions safeguard networks from unauthorized access, hacking attempts, and malware threats.",
    themeColor: "#065f46", // Permanent Premium Deep Emerald
    cardLabel: "WIRELESS_SHIELD",
    vectorType: "waves"
  },
  {
    title: "Security Plans",
    desc: "We design customized security plans to protect digital assets against evolving cyber threats and vulnerabilities.",
    themeColor: "#881337", // Permanent Premium Deep Crimson
    cardLabel: "STRATEGIC_MATRIX",
    vectorType: "grid"
  },
];

const CyberSecurity = () => {
  return (
    <section className="void-security-section">
      
      {/* 1. THE FROZEN BACKDROP CANVAS (Pins the text to the screen monitor glass) */}
      <div className="void-fixed-canvas-wrapper">
        <div className="void-bg-text">
          CYBER<br />SECURITY
        </div>
        <div className="void-noise"></div>
      </div>

      {/* 2. THE NATURALLY SCROLLING CONTENT CONTAINER */}
      <div className="void-container">
        
        {/* HERO HEADER */}
        <div className="void-hero">
          <div className="void-hero-top">
            <span className="void-mini-line"></span>
            <p>URMISTEK • CYBER INTELLIGENCE SYSTEMS</p>
          </div>
          <h1 className="void-title">
            <span>SECURE THE</span>
            <span>HORIZON</span>
          </h1>
        </div>

        {/* ASYMMETRIC FLOATING ROW TRACKS */}
        <div className="void-layout">
          {securityData.map((item, index) => (
            <div
              key={index}
              className={`void-card void-card-${index + 1}`}
              style={{ "--card-base-color": item.themeColor }}
            >
              
              {/* EMBEDDED TECHNICAL VECTOR LINEWORK ARCHITECTURES */}
              <div className="void-card-vector-canvas">
                {item.vectorType === "matrix" && (
                  <svg viewBox="0 0 200 200" fill="none" className="vector-svg">
                    <circle cx="150" cy="150" r="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    <circle cx="150" cy="150" r="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="150" y1="50" x2="150" y2="250" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  </svg>
                )}
                {item.vectorType === "nodes" && (
                  <svg viewBox="0 0 200 200" fill="none" className="vector-svg">
                    <path d="M20 40 L100 120 L180 60 M100 120 L120 190" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                    <circle cx="100" cy="120" r="4" fill="rgba(255,255,255,0.15)" />
                  </svg>
                )}
                {item.vectorType === "waves" && (
                  <svg viewBox="0 0 200 200" fill="none" className="vector-svg">
                    <path d="M0 100 Q50 60 100 100 T200 100 M0 120 Q50 80 100 120 T200 120" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  </svg>
                )}
                {item.vectorType === "grid" && (
                  <svg viewBox="0 0 200 200" fill="none" className="vector-svg">
                    <rect x="40" y="40" width="120" height="120" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    <rect x="60" y="60" width="80" height="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                )}
              </div>

              {/* CARD TYPOGRAPHY WRAPPER */}
              <div className="void-card-inner-wrapper">
                <div className="void-card-top">
                  <span className="void-card-index">0{index + 1}</span>
                  {/* <span className="void-card-label-string">// {item.cardLabel}</span> */}
                </div>

                <div className="void-card-content">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
                
                {/* <div className="void-card-footer-trigger">
                  <span>Explore Infrastructure System</span>
                  <span className="footer-trigger-arrow">→</span>
                </div> */}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CyberSecurity;