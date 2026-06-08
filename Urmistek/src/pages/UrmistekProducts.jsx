import React, { useEffect, useRef } from 'react';
import '../styles/UrmistekProducts.css';

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
              Improving patient care at emergency rooms through intelligent systems that accelerate clinical decision-making, optimize triage workflows, and enhance emergency department efficiency and patient outcomes.
            </p>
            <div className="feature-tags">
              <span>Standardized Triage</span>
              <span>Chief Complaint Identification</span>
              <span>Evidence Based Carepathway</span>
              <span>Streamlined Discharge</span>
              <span>Population level analytics</span>
              <span>Remote ER</span>
            </div>
            <ul className="showcase-features">
              <li><strong>Standardized Triage:</strong> Systematizes patient intake protocols to ensure consistent, rapid assessment of severity levels and clinical urgency indicators across all patients.</li>
              <li><strong>Chief Complaint Identification:</strong> Automatically identifies and categorizes chief complaints using natural language processing to route patients to appropriate care pathways and specialist teams.</li>
              <li><strong>Evidence Based Carepathway:</strong> Guides clinical teams through evidence-based treatment protocols optimized for emergency settings, reducing variation and improving adherence to best practices.</li>
              <li><strong>Streamlined Discharge:</strong> Automates discharge planning and follow-up scheduling to accelerate patient flow, reduce length of stay, and ensure continuity of post-emergency care.</li>
              <li><strong>Population level analytics:</strong> Tracks aggregate patient outcomes, epidemiological trends, and resource utilization patterns to identify improvement opportunities and predict demand surges.</li>
              <li><strong>Remote ER:</strong> Enables telemedicine consultation, remote monitoring, and distributed clinical collaboration to extend expert care beyond physical emergency department boundaries.</li>
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
    </div>
  );
};

export default UrmistekProducts;