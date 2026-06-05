import React from "react";
import "../styles/futureCareer.css";

const FutureCareer = () => {
  return (
    <section className="future-career-section">

      {/* Background Layers */}
      <div className="future-grid"></div>
      <div className="future-glow future-glow-one"></div>
      <div className="future-glow future-glow-two"></div>

      <div className="future-career-container">

        {/* Left Vertical Text */}
        <div className="future-side-text">
          CAREERS
        </div>

        {/* Main Content */}
        <div className="future-content">

          <span className="future-mini-title">
            URMISTEK • DIGITAL EVOLUTION
          </span>

          <h1 className="future-title">
            WE DON'T
            <span>FOLLOW</span>
            INDUSTRY.
          </h1>

          <p className="future-description">
            We engineer intelligent digital ecosystems where
            design, systems, and innovation converge into the future.
          </p>

          {/* <button className="future-btn">
            <span>EXPLORE NOW</span>

            <div className="future-btn-hover"></div>
          </button> */}

        </div>

        {/* Floating Glass Card */}
        <div className="future-floating-card">

          <span>GLOBAL NETWORK</span>

          <h3>
            Building next-generation
            enterprise systems for
            tomorrow's infrastructure.
          </h3>

        </div>

      </div>

    </section>
  );
};

export default FutureCareer;