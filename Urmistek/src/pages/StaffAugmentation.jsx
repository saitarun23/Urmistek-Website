import React, { useState } from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import "../styles/staffaugmentation.css";

const talentData = [
  {
    id: "talent-1",
    type: "DEDICATED AGILE SQUADS",
    title: "Scaling production velocity with embedded engineering units",
    previewText: "Bypass the friction of traditional multi-month recruitment cycles with pre-vetted squads.",
    expandedText: "We deploy complete, cross-functional engineering cells trained to integrate instantly into your existing sprint ceremonies, backlog systems, and CI/CD development pipelines.",
    ctaLabel: "Deploy Squads",
    theme: "dark-image",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "talent-2",
    type: "NICHE ARCHITECTS",
    title: "On-demand access to advanced AI & MLOps infrastructure specialists",
    previewText: "Bridge critical technical execution gaps with specialized infrastructure architects.",
    expandedText: "Gain immediate access to seasoned experts in large-scale model deployment, secure vector database pipelines, retrieval-augmented generation architectures, and cloud cost optimization.",
    ctaLabel: "Acquire Specialists",
    theme: "light-vector",
    hasGraphic: true,
  },
  {
    id: "talent-3",
    type: "Contract Staffing",
    title: "Flexible workforce solutions tailored for evolving business demands",
    previewText: "We provide flexible staffing solutions for short-term, long-term, contract, and permanent workforce needs.",
    expandedText: "Short-term, long-term or permanent contracts, tailored to your business needs. The skilled contract solutions recruiters at Logic Planet devote ethics and professionalism to filling temporary openings like our direct hire recruiters. To promptly and effectively meet your critical resource needs, including yearly, contract, project, time-sensitive, seasonal, transitional, staff augmentation, and contract-to-hire positions, our specialists create an unmatched local network of mid-to-senior level professionals.",
    ctaLabel: "Scale Capacity",
    theme: "vibrant-accent",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "talent-4",
    type: "Remote Staffing",
    title: "Global Talent Partnership Solutions for Remote Workforce Excellence",
    previewText: "Connecting businesses with skilled global talent and reliable workforce support.",
    expandedText: "Bringing expertise together across borders with real partnership. Our knowledgeable recruiting advisors can find suitable applicants for your company from far-flung places throughout the globe. When you work with us, our hiring process guarantees that the individuals chosen to supply your company with the best equipment possible, including a laptop or computer loaded with the most recent software, strong internet connectivity, and extra resources to help you achieve outstanding results.",
    ctaLabel: "Secure Frontend Talent",
    theme: "gradient-overlay",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "talent-5",
    type: "Technology Staffing",
    title: "Advanced Technology Staffing Solutions for Rapid Digital Transformation",
    previewText: "Connecting businesses with skilled technology professionals to drive innovation, digital transformation.",
    expandedText: "Empower Your Projects with Top Tech Talent associated with us. Technology staffing is the process of sourcing skilled professionals for specific IT and tech roles. It’s about front-end or back-end technologies of in-demand technologies like IoT, AI, ML, AR/VR and so forth. It is essential due to rapid digital transformation, increasing project complexities, and the need for specialized skills to drive innovation.",
    ctaLabel: "Connect With Tech Experts",
    theme: "gradient-overlay",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "talent-6",
    type: "Recruitment Process Outsourcing (RPO)",
    title: "Recruitment Process Outsourcing Solutions for Scalable Talent Acquisition",
    previewText: "Streamline hiring with scalable recruitment solutions that reduce costs, improve efficiency, and connect businesses with top talent.",
    expandedText: "Handle recruitment excellently with reduced cost and boosted efficiency. Over the decade, technical advancements and the rise of globalization have altered the recruitment landscape. Conventional recruiting practices are no longer sufficient for firms in a dynamic market as they confront new trends and difficulties. RPO offers an intelligent, scalable solution that boosts productivity, reduces recruitment expenses, and grants access to top talent to meet the evolving needs of businesses",
    ctaLabel: "Connect With Recruitment Experts",
    theme: "light-vector",
    hasGraphic: true,
  }
];

const StaffAugmentation = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="aug-section" id="talent-augmentation">
      <div className="aug-container">
        
        {/* Top Premium Strategic Header */}
        <div className="aug-section-header">
          <div className="aug-title-group">
            <h2 className="aug-main-title">
              Empowering businesses with agile workforce solutions.
            </h2>
          </div>
        </div>

        {/* Premium Corporate Matrix Grid */}
        <div className="aug-editorial-matrix">
          {talentData.map((item) => {
            const isHovered = hoveredCard === item.id;
            
            return (
              <div 
                key={item.id}
                className={`aug-matrix-card ${item.theme} ${isHovered ? "is-expanded" : ""}`}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Layer logic */}
                {item.image && <div className="aug-card-bg-image" style={{ backgroundImage: `url(${item.image})` }} />}
                
                {/* Special Inline Technical Vector simulation for 'Perspective' card */}
                {item.hasGraphic && (
                  <div className="aug-card-vector-canvas">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="60" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 4" />
                      <rect x="70" y="70" width="60" height="60" rx="4" stroke="#0066ff" strokeWidth="2" />
                      <path d="M40 100 H70 M130 100 H160" stroke="#94a3b8" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}

                {/* Card Main Foreground Wrapper */}
                <div className="aug-card-foreground-content">
                  <div className="aug-card-upper">
                    <span className="aug-card-content-type">{item.type}</span>
                    <h3 className="aug-card-content-title">{item.title}</h3>
                  </div>

                  {/* Dynamic Height Sliding Compartment */}
                  <div className="aug-card-lower-drawer">
                    <p className="aug-card-preview-text">{item.previewText}</p>
                    <p className="aug-card-hidden-narrative">{item.expandedText}</p>
                    
                    <div className="aug-card-action-trigger">
                      <span>{item.ctaLabel}</span>
                      <FiArrowRight className="aug-trigger-icon" />
                    </div>
                  </div>
                </div>

                {/* Corner Indicator Plus Icon */}
                <div className="aug-card-corner-indicator">
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

export default StaffAugmentation;