import React, { useRef } from "react";
import "../styles/digitalTransformation.css";

const systems = [
  {
    title: "Cloud Adoption",
    text: "Collaborate with our cloud experts to determine cloud readiness, define adoption strategy, and envision governance models with guide rails.",
  },
  {
    title: "Architecture Advisory",
    text: "Work with our Cloud Engineering CoE to define your Cloud-First Architecture that will help propel your future transformation needs.",
  },
  {
    title: "Migration Services",
    text: "Engage our Migration CoE for Workload Rationalization, App Replatforming, Secure Data Movement, and Cloud Operationalization.",
  },
  {
    title: "Operations Security",
    text: "Leverage our 24/7 cost-optimized, SLA-driven Managed Services for cloud operations, HA/DR, service monitoring and security assurance.",
  },
];

const DigitalTransformation = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

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
            <span>Infrastructure</span>
          </h1>

        </div>

        {/* HORIZONTAL EXPERIENCE */}
        <div className="quantum-carousel-wrapper">
          <button className="quantum-arrow quantum-arrow-left" onClick={() => scroll("left")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="quantum-arrow quantum-arrow-right" onClick={() => scroll("right")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <div className="quantum-horizontal" ref={scrollRef}>

            {systems.map((item, index) => (
            <div className="quantum-panel" key={index}>

              {/* TOP */}
              <div className="quantum-top">

                <span>
                  0{index + 1}
                </span>

                {/* <div className="quantum-dot"></div> */}

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

      </div>

    </section>
  );
};

export default DigitalTransformation;