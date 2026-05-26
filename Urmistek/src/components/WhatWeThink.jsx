import React, { useState } from "react";
import { FiArrowRight, FiChevronDown, FiPlus } from "react-icons/fi";
import "../styles/whatwethink.css";

const insightsData = [
  {
    id: "insight-1",
    type: "RESEARCH REPORT",
    title: "Turning global tech talent shortages into distributed strength",
    previewText: "As mature enterprises scramble to find specialized cloud and engineering talent, localized legacy hiring models are failing.",
    expandedText: "By orchestrating elite dedicated agile squads across multi-country technical corridors, forward-thinking organizations are bypassing regional talent bottlenecks and accelerating production timelines by up to 40%.",
    ctaLabel: "Read Report",
    theme: "dark-image",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "insight-2",
    type: "PERSPECTIVE",
    title: "The zero-trust superhighway you need to unlock safe GenAI scale",
    previewText: "Stop limiting innovations to isolated proof-of-concepts.",
    expandedText: "We outline architectural frameworks designed to embed decentralized, continuous threat monitoring directly into your live production pipelines, securing corporate telemetry assets at scale.",
    ctaLabel: "Explore Perspective",
    theme: "light-vector",
    hasGraphic: true,
  },
  {
    id: "insight-3",
    type: "CASE STUDY",
    title: "Leapfrogging legacy frameworks across 23 active countries",
    previewText: "How an institutional giant completely re-architected its digital ecosystem.",
    expandedText: "Through headless engineering structures and edge computing solutions, we dismantled deep infrastructure tech-debt, delivering sub-second application loads globally.",
    ctaLabel: "View Case Study",
    theme: "vibrant-accent",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "insight-4",
    type: "RESEARCH REPORT",
    title: "The age of hyper-composable web architecture ecosystems",
    previewText: "Monolithic software suites are giving way to agile, modular networks.",
    expandedText: "Discover why composability is the definitive strategic engineering paradigm for organizations seeking infinite operations scalability and frictionless third-party migrations.",
    ctaLabel: "Download Report",
    theme: "gradient-overlay",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "insight-5",
    type: "RESEARCH REPORT",
    title: "The agentic vanguard: Orchestrating autonomous decision workflows",
    previewText: "Moving past conversational chatbots to autonomous agents that act, validate, and execute complex operations.",
    expandedText: "We break down how deploying pre-orchestrated Agentic workflows within secure enterprise clusters reduces cross-departmental processing friction and unlocks billions in latent operational efficiency.",
    ctaLabel: "Read Report",
    theme: "gradient-overlay",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "insight-6",
    type: "PERSPECTIVE",
    title: "Architecting enterprise MLOps pipelines that ship past the PoC",
    previewText: "Over 80% of enterprise generative AI models stall inside isolated testing labs.",
    expandedText: "True scale requires robust continuous integration pipelines, automated prompt-telemetry tracking, and aggressive quantization to reliably serve production-grade intelligence models to millions of edge endpoints.",
    ctaLabel: "Explore Perspective",
    theme: "light-vector",
    hasGraphic: true,
  },
  {
    id: "insight-7",
    type: "CASE STUDY",
    title: "Deploying production-grade LLMs within multi-region sovereign boundaries",
    previewText: "How Urmistek engineered localized data pipelines for a global distribution network.",
    expandedText: "By building custom vector embeddings on-premise and implementing secure retrieval-augmented generation architectures, we achieved zero-data-leakage compliance across heavily regulated European and Asian corridors.",
    ctaLabel: "View Case Study",
    theme: "dark-image",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "insight-8",
    type: "RESEARCH REPORT",
    title: "Hyper-personalized telemetry: Building predictive deep data infrastructure",
    previewText: "Static customer data profiles are dead. Tomorrow's industry leaders run on real-time neural streams.",
    expandedText: "This blueprint details how to align decentralized database frameworks with deep predictive modeling nodes, transforming raw unstructured corporate logs into immediate, revenue-generating automated insights.",
    ctaLabel: "Download Report",
    theme: "vibrant-accent",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=700&q=80",
  }
];

const WhatWeThink = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="think-section" id="insights">
      <div className="think-container">
        
        {/* Top Accent Navigation Header */}
        <div className="think-section-header">
          <div className="think-title-group">
            {/* <span className="think-sup">GLOBAL INTELLIGENCE</span> */}
            <h2 className="think-main-title">At Urmistek, innovation begins with ideas that inspire transformation and redefine possibilities.</h2>
          </div>
          {/* <button className="think-global-filter-btn">
            <span>Browse All Insights</span>
            <FiChevronDown />
          </button> */}
        </div>

        {/* Premium Corporate Matrix Grid */}
        <div className="think-editorial-matrix">
          {insightsData.map((item, idx) => {
            const isHovered = hoveredCard === item.id;
            
            return (
              <div 
                key={item.id}
                className={`think-matrix-card ${item.theme} ${isHovered ? "is-expanded" : ""}`}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Layer logic */}
                {item.image && <div className="card-bg-image" style={{ backgroundImage: `url(${item.image})` }} />}
                
                {/* Special Inline Technical Vector simulation for 'Perspective' card */}
                {item.hasGraphic && (
                  <div className="card-vector-canvas">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="60" stroke="#e3e8ee" strokeWidth="1.5" strokeDasharray="4 4" />
                      <rect x="70" y="70" width="60" height="60" rx="8" stroke="#0066ff" strokeWidth="2" />
                      <path d="M40 100 H70 M130 100 H160" stroke="#a3acb9" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}

                {/* Card Main Foreground Wrapper */}
                <div className="card-foreground-content">
                  <div className="card-upper">
                    <span className="card-content-type">{item.type}</span>
                    <h3 className="card-content-title">{item.title}</h3>
                  </div>

                  {/* Dynamic Height Sliding Compartment */}
                  <div className="card-lower-drawer">
                    <p className="card-preview-text">{item.previewText}</p>
                    <p className="card-hidden-narrative">{item.expandedText}</p>
                    
                    <div className="card-action-trigger">
                      <span>{item.ctaLabel}</span>
                      <FiArrowRight className="trigger-icon" />
                    </div>
                  </div>
                </div>

                {/* Corner Indicator Plus Icon */}
                <div className="card-corner-indicator">
                  <FiPlus />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatWeThink;