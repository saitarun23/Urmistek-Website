import React from "react";
import "../styles/digitalTransformation.css";

const systems = [
  {
    title: "Cloud Adoption",
    text: "Enterprise cloud ecosystems designed for scalable operational transformation.",
  },
  {
    title: "Architecture Advisory",
    text: "Future-ready cloud-first infrastructure intelligence and strategic engineering.",
  },
  {
    title: "Migration Services",
    text: "Secure workload modernization with adaptive migration orchestration systems.",
  },
  {
    title: "Operations Security",
    text: "Realtime governance, HA/DR resilience, monitoring, and cloud assurance.",
  },
];

const DigitalTransformation = () => {
  return (
    <section className="quantum-section">

      {/* BACKGROUND */}
      <div className="quantum-noise"></div>

      <div className="quantum-orb quantum-orb-one"></div>
      <div className="quantum-orb quantum-orb-two"></div>

      {/* HUGE BACKGROUND TEXT */}
      <div className="quantum-bg-text">
        DIGITAL
      </div>

      <div className="quantum-container">

        {/* HERO */}
        <div className="quantum-hero">

          {/* <span className="quantum-mini">
            URMISTEK • FUTURE CLOUD SYSTEMS
          </span> */}

          <h1>
            <span>Beyond</span>
            <span>INFRASTRUCTURE</span>
          </h1>

        </div>

        {/* HORIZONTAL EXPERIENCE */}
        <div className="quantum-horizontal">

          {systems.map((item, index) => (
            <div className="quantum-panel" key={index}>

              {/* TOP */}
              <div className="quantum-top">

                <span>
                  0{index + 1}
                </span>

                <div className="quantum-dot"></div>

              </div>

              {/* CENTER */}
              <div className="quantum-center">

                <h2>{item.title}</h2>

                <p>{item.text}</p>

              </div>

              {/* MASSIVE WORD */}
              <div className="quantum-word">
                CLOUD
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default DigitalTransformation;