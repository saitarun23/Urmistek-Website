import React, { useState } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import "../styles/globalimpact.css";

const impactStories = [
  {
    id: "story-1",
    index: "01",
    cipher: "SYS_PROJECT // GHOST_NET",
    title: "Eradicating phantom eco-threats using advanced sonar neural arrays",
    description: "Deploying deep-learning computer vision models to parse thousands of gigabytes of unstructured maritime telemetry data, pinpointing discarded commercial infrastructure with absolute accuracy.",
    metaMetric: "94% ACCURACY",
    visual: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "story-2",
    index: "02",
    cipher: "SYS_PROJECT // AGENT_COMM",
    title: "Orchestrating multi-region enterprise MLOps architectures",
    description: "Dismantling massive pipeline data fragmentation across 23 national distribution corridors by embedding secure, localized retrieval-augmented generation frameworks directly into live operation nodes.",
    metaMetric: "ZERO DATA LEAK",
    visual: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "story-3",
    index: "03",
    cipher: "SYS_PROJECT // COGNITIVE_LOG",
    title: "Transforming supply chain constraints into real-time operational flows",
    description: "Re-architecting monolithic logistical nodes into highly composable cloud edge streams, reducing legacy processing overhead for digitally mature global enterprises.",
    metaMetric: "-40% FRICTION",
    visual: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1000&q=80"
  }
];

const GlobalImpact = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % impactStories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + impactStories.length) % impactStories.length);
  };

  return (
    <section className="broadcast-section" id="case-studies">
      <div className="broadcast-console-grid">
        
        {/* LEFT CANVAS: FIXED VISUAL MULTIPLEXER */}
        <div className="console-visual-viewport">
          {impactStories.map((story, idx) => (
            <div 
              key={story.id}
              className={`viewport-image-strata ${idx === activeIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${story.visual})` }}
            />
          ))}
          <div className="viewport-glass-tint" />
        </div>

        {/* RIGHT PANEL: OVERLAPPING VERTICAL COMMAND STACK */}
        <div className="console-content-pane">
          <div className="pane-header-context">
            <span className="pane-badge">GLOBAL INITIATIVES</span>
            <div className="pane-serial-tracker">
              <span className="tracker-current">{impactStories[activeIndex].index}</span>
              <span className="tracker-divider">/</span>
              <span className="tracker-total">0{impactStories.length}</span>
            </div>
          </div>

          {/* Dynamic Slideway Compartment */}
          <div className="pane-narrative-window">
            <div className="narrative-track-scroller" style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
              {impactStories.map((story) => (
                <div key={story.id} className="narrative-slide-unit">
                  <div className="unit-cipher-row"></div>
                  <h3 className="unit-main-title">{story.title}</h3>
                  <p className="unit-paragraph-desc">{story.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Console Vertical Navigation Interface */}
          <div className="pane-interface-footer">
            <div className="footer-left-controls">
              {/* Moved navigation arrows directly above the action link */}
              <div className="console-navigation-arrows">
                <button className="nav-arrow-btn" onClick={handlePrev} aria-label="Previous Briefing">
                  <FiArrowUp />
                </button>
                <button className="nav-arrow-btn" onClick={handleNext} aria-label="Next Briefing">
                  <FiArrowDown />
                </button>
              </div>

              <button className="console-action-link">
                <span>Explore Structural Documentation</span>
                <div className="action-link-bar" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GlobalImpact;