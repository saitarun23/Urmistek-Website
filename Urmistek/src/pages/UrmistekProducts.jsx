import React, { useEffect, useRef } from 'react';
import '../styles/urmistekProducts.css';

// Custom Minimalist SVG Icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-svg">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="16.5" y1="16.5" x2="22" y2="22" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" fill="none" />
    <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-svg">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const AutomationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const HealthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-svg">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
  </svg>
);

const UrmistekProducts = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;
    if (!container || !logo) return;

    // Initial positioning coordinates and velocity vectors
    let posX = Math.random() * (container.clientWidth - logo.clientWidth);
    let posY = Math.random() * (container.clientHeight - logo.clientHeight);
    let speedX = 1.5; 
    let speedY = 1.5;

    let animationFrameId;

    const updateFrame = () => {
      const maxW = container.clientWidth - logo.clientWidth;
      const maxH = container.clientHeight - logo.clientHeight;

      // Increment positions
      posX += speedX;
      posY += speedY;

      // Boundary collision checks (Horizontal)
      if (posX >= maxW) {
        posX = maxW;
        speedX = -speedX;
        logo.style.color = '#38bdf8'; // Subtle color shifting highlight on bounce
      } else if (posX <= 0) {
        posX = 0;
        speedX = -speedX;
        logo.style.color = '#60a5fa';
      }

      // Boundary collision checks (Vertical)
      if (posY >= maxH) {
        posY = maxH;
        speedY = -speedY;
        logo.style.color = '#2563eb';
      } else if (posY <= 0) {
        posY = 0;
        speedY = -speedY;
        logo.style.color = '#ffffff';
      }

      // Apply transforms via translate3d for GPU acceleration
      logo.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;

      animationFrameId = requestAnimationFrame(updateFrame);
    };

    animationFrameId = requestAnimationFrame(updateFrame);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="ub-container">
      {/* Navigation Sub-Header */}
      <div className="ub-subheader">
        <span className="subheader-title">Urmistek Systems</span>
        <div className="subheader-links">
          <a href="#solutions">Our Solutions</a>
          <a href="#platforms">Core Platforms</a>
          <a href="#compliance">Governance</a>
        </div>
      </div>

      {/* Section 1: Hero Banner */}
      <section className="ub-hero-section">
        <div className="ub-hero-content">
          <div className="ub-hero-graphic">
            <div className="graphic-canvas" ref={containerRef}>
              
              {/* Bouncing Company Brand Engine Section */}
              <div className="bouncing-logo" ref={logoRef}>
                URMISTEK AI
              </div>

              {/* Floating Layout Accents */}
              {/* <div className="accent-box">
                <span className="pulse-indicator"></span>
              </div> */}
              {/* <div className="pulse-glow"></div> */}
            </div>
          </div>
          
          <div className="ub-hero-text">
            <h1>AI Recruitment Automation Platform</h1>
            <p>
              Technology opens doors to unprecedented efficiency. Discover how Urmistek deploys 
              enterprise-grade, ethical AI frameworks designed to accelerate workforce optimization 
              and power next-generation specialized industry applications.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Deep Dive Core Platforms */}
      <section className="ub-info-section platforms-extended">
        <h2 className="section-main-heading">Enterprise AI Portfolio</h2>
        <p className="section-subtext">Engineered for high-scale enterprise deployment, security, and precision.</p>
        
        <div className="extended-portfolio-grid">
          {/* Platform 1 */}
          <div className="portfolio-showcase-card">
            <div className="showcase-header">
              <AutomationIcon />
              <h3>AI Recruitment Automation Platform</h3>
            </div>
            <p className="showcase-intro">
              An end-to-end talent intelligence ecosystem that strips bias and friction from enterprise hiring pipelines. 
              Built to manage high-volume candidate evaluation workflows transparently.
            </p>
            <div className="feature-tags">
              <span>Smart Sourcing</span>
              <span>Bias-Mitigation Engine</span>
              <span>Behavioral Analytics</span>
            </div>
            <ul className="showcase-features">
              <li><strong>Contextual Semantic Screening:</strong> Looks past simple keywords to analyze intent, core skill competencies, and deep experience indicators.</li>
              <li><strong>Automated Stack Ranking:</strong> Algorithms automatically highlight optimal operational matches while completely anonymizing sensitive demographic variables.</li>
              <li><strong>Conversational Middleware:</strong> 24/7 intelligent agents coordinate, screen, and schedule candidates dynamically based on live calendar availability.</li>
            </ul>
          </div>

          {/* Platform 2 */}
          <div className="portfolio-showcase-card">
            <div className="showcase-header">
              <HealthIcon />
              <h3>Healthcare AI Platform</h3>
            </div>
            <p className="showcase-intro">
              Advanced predictive intelligence modules custom-tailored for clinical data optimization, hospital administration efficiency, and diagnostics infrastructure acceleration.
            </p>
            <div className="feature-tags">
              <span>HL7/FHIR Compliant</span>
              <span>Predictive Care</span>
              <span>Secure Telemetry</span>
            </div>
            <ul className="showcase-features">
              <li><strong>Clinical Workflow Automation:</strong> Uses secure language frameworks to process doctor-patient logs into structured electronic health records automatically.</li>
              <li><strong>Resource Allocation Forecasting:</strong> Evaluates ongoing admissions trends to model precisely when and where critical medical assets will face peak demand.</li>
              <li><strong>Diagnostic Decision Support:</strong> Computer vision layers run real-time checks across medical imagery to surface minor structural anomalies instantly for radiologist review.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: How candidates/users can interact with AI */}
      <section className="ub-info-section border-top">
        <h3 className="section-group-title">The right (and permitted) way to use AI within our applications:</h3>
        
        <div className="ub-grid-cards">
          <div className="ub-card">
            <div className="icon-wrapper">
              <SearchIcon />
            </div>
            <h4>Researching Urmistek and our industry</h4>
            <p>Use generative tools to query historical industry dynamics, internal corporate philosophies, and technical role metrics.</p>
          </div>

          <div className="ub-card">
            <div className="icon-wrapper">
              <DocumentIcon />
            </div>
            <h4>Drafting and refining profile assets</h4>
            <p>AI models can confidently refine system schemas, architecture proposals, or structural summaries. Ensure final versions perfectly reflect genuine engineering outcomes.</p>
          </div>

          <div className="ub-card">
            <div className="icon-wrapper">
              <ChatIcon />
            </div>
            <h4>Interactive System Sandboxing</h4>
            <p>Utilize sandbox AI layers to run technical system runs, validate edge test cases, and strengthen overall architecture resilience before human review stages.</p>
          </div>
        </div>
      </section>

      {/* Section 4: AI use that isn't permitted */}
      <section className="ub-restriction-section">
        <h3 className="section-group-title warning-title">System Misuse & Restricted Protocols:</h3>
        
        <div className="restriction-layout">
          <ul className="ub-bullet-list">
            <li>Deploying unverified neural blocks to inject synthetic background credentials or falsified capabilities into secure operational profile logs.</li>
            <li>Utilizing adversarial external models to completely bypass technical screening metrics or live evaluation code challenges.</li>
            <li>Using unauthorized interactive injection scripts during technical system checkouts to artificially generate responses for live evaluations.</li>
            <li>Interfacing with deepfake layers, synthetic voice modulators, or video frame alterations inside verification modules.</li>
          </ul>
          <div className="restriction-image-placeholder">
            <div className="ambient-user-frame"></div>
          </div>
        </div>

        <p className="ub-disclaimer-text">
          These unauthorized activities directly violate Urmistek's fundamental Responsible AI tenets and trigger instant system account termination. 
          Our security arrays continuously run behavioral telemetry checks and detection matrix patterns to guarantee a level playing field.
        </p>
      </section>

      {/* Section 5: Responsible AI Principles */}
      <section className="ub-principles-section">
        <h2 className="section-main-heading">Responsible AI: our principles and promise</h2>
        
        <div className="ub-principles-grid">
          <div className="principle-item">
            <span className="blue-bullet"></span>
            <p><strong>Human by design:</strong> Intelligent infrastructure streamlines but never overrides human architectural authority.</p>
          </div>
          <div className="principle-item">
            <span className="blue-bullet"></span>
            <p><strong>Safety & privacy:</strong> End-to-end compartmentalization shields operational system data and enterprise access vectors.</p>
          </div>
          <div className="principle-item">
            <span className="blue-bullet"></span>
            <p><strong>Fairness:</strong> Mathematical loss adjustments explicitly curb historical data dependencies and systematic biases.</p>
          </div>
          <div className="principle-item">
            <span className="blue-bullet"></span>
            <p><strong>Accountability:</strong> Cryptographically logged governance trails oversee all automated structural processing actions.</p>
          </div>
          <div className="principle-item">
            <span className="blue-bullet"></span>
            <p><strong>Transparency & explainability:</strong> Log outputs provide human-readable logic maps for every major algorithmic calculation.</p>
          </div>
          <div className="principle-item">
            <span className="blue-bullet"></span>
            <p><strong>Sustainability:</strong> Optimized carbon footprints minimize raw computational load requirements across local hardware systems.</p>
          </div>
        </div>

        <a href="#read-more" className="ub-footer-link">Read more about Urmistek's Responsible AI Framework</a>
      </section>
    </div>
  );
};

export default UrmistekProducts;