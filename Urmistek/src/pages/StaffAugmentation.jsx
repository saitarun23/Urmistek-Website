import React, { useState, useEffect } from "react";
import { FiArrowRight, FiPlus, FiX } from "react-icons/fi";
import "../styles/staffaugmentation.css";

const talentData = [
  {
    id: "talent-1",
    type: "Talent Delivery Models",
    title: "With Urmistek",
    previewText: "By customizing your delivery options, you can achieve the right fit for talent to work in sync with your teams.",
    expandedContent: [
      {
        label: "Onsite",
        desc: "Bring on technology resources to work hand-in-hand with your teams and in your work environment.",
      },
      {
        label: "Onshore",
        desc: "Utilize Urmistek's presence across the country to establish remote teams that can help you deliver projects.",
      },
      {
        label: "Offshore",
        desc: "Optimize costs by utilizing Urmistek's expansive offshore delivery capabilities and skilled talent.",
      },
    ],
    ctaLabel: "Deploy Squads",
    theme: "dark-image",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "talent-2",
    type: "Niche Architects",
    title: "On-demand access to advanced AI & MLOps infrastructure specialists",
    previewText: "Bridge critical technical execution gaps with specialized infrastructure architects.",
    expandedText: "Gain immediate access to seasoned experts in large-scale model deployment, secure vector database pipelines, retrieval-augmented generation architectures, and cloud cost optimization.",
    ctaLabel: "Acquire Specialists",
    theme: "dark-image",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "talent-3",
    type: "Contract Staffing",
    title: "Flexible workforce solutions tailored for evolving business demands",
    previewText: "We provide flexible staffing solutions for short-term, long-term, contract, and permanent workforce needs.",
    expandedText: "Short-term, long-term or permanent contracts, tailored to your business needs. Our specialists create an unmatched local network of mid-to-senior level professionals to promptly meet your critical resource needs.",
    ctaLabel: "Scale Capacity",
    theme: "vibrant-accent",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "talent-4",
    type: "Remote Staffing",
    title: "Global Talent Partnership Solutions for Remote Workforce Excellence",
    previewText: "Connecting businesses with skilled global talent and reliable workforce support.",
    expandedText: "Our knowledgeable recruiting advisors find suitable applicants from far-flung places throughout the globe, guaranteeing the right individuals are equipped with the best tools to achieve outstanding results.",
    ctaLabel: "Secure Frontend Talent",
    theme: "gradient-overlay",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "talent-5",
    type: "Technology Staffing",
    title: "Advanced Technology Staffing Solutions for Rapid Digital Transformation",
    previewText: "Connecting businesses with skilled technology professionals to drive innovation and digital transformation.",
    expandedText: "Empower your projects with top tech talent. We source specialists in IoT, AI, ML, AR/VR, front-end and back-end technologies — essential for rapid digital transformation and increasing project complexities.",
    ctaLabel: "Connect With Tech Experts",
    theme: "gradient-overlay",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "talent-6",
    type: "Recruitment Process Outsourcing (RPO)",
    title: "Recruitment Process Outsourcing Solutions for Scalable Talent Acquisition",
    previewText: "Streamline hiring with scalable recruitment solutions that reduce costs and connect businesses with top talent.",
    expandedText: "RPO offers an intelligent, scalable solution that boosts productivity, reduces recruitment expenses, and grants access to top talent — meeting the evolving needs of businesses in a dynamic market.",
    ctaLabel: "Connect With Recruitment Experts",
    theme: "gradient-overlay",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=700&q=80",
  },
];

const StaffAugmentation = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  const handleCardToggle = (id) => {
    if (!isTouchDevice) return;
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  const isActive = (id) =>
    isTouchDevice ? expandedCard === id : hoveredCard === id;

  return (
    <section className="aug-section" id="talent-augmentation">
      <div className="aug-container">

        {/* Header */}
        <div className="aug-section-header">
          <h2 className="aug-main-title">
            Empowering businesses with agile workforce solutions.
          </h2>
        </div>

        {/* Grid */}
        <div className="aug-editorial-matrix">
          {talentData.map((item) => {
            const active = isActive(item.id);

            return (
              <div
                key={item.id}
                className={`aug-matrix-card ${item.theme} ${active ? "is-expanded" : ""}`}
                onMouseEnter={() => !isTouchDevice && setHoveredCard(item.id)}
                onMouseLeave={() => !isTouchDevice && setHoveredCard(null)}
              >
                {/* Background image */}
                {item.image && (
                  <div
                    className="aug-card-bg-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}

                {/* Vector graphic */}
                {item.hasGraphic && (
                  <div className="aug-card-vector-canvas">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="60" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 4" />
                      <rect x="70" y="70" width="60" height="60" rx="4" stroke="#0066ff" strokeWidth="2" />
                      <path d="M40 100 H70 M130 100 H160" stroke="#94a3b8" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}

                {/* Foreground */}
                <div className="aug-card-foreground-content">
                  <div className="aug-card-upper">
                    <span className="aug-card-content-type">{item.type}</span>
                    <h3 className="aug-card-content-title">{item.title}</h3>
                  </div>

                  <div className="aug-card-lower-drawer">
                    <p className="aug-card-preview-text">{item.previewText}</p>

                    {/* Card 1: structured 3-item delivery model list */}
                    {item.expandedContent ? (
                      <div className="aug-card-hidden-narrative aug-delivery-list">
                        {item.expandedContent.map((row) => (
                          <div className="aug-delivery-item" key={row.label}>
                            <span className="aug-delivery-label">{row.label}</span>
                            <span className="aug-delivery-desc">{row.desc}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="aug-card-hidden-narrative">{item.expandedText}</p>
                    )}

                    {/* <div className="aug-card-action-trigger">
                      <span>{item.ctaLabel}</span>
                      <FiArrowRight className="aug-trigger-icon" />
                    </div> */}
                  </div>
                </div>

                {/* Touch toggle button */}
                <button
                  className="aug-card-corner-indicator"
                  onClick={() => handleCardToggle(item.id)}
                  aria-label={active ? "Collapse card" : "Expand card"}
                >
                  {isTouchDevice && active ? <FiX /> : <FiPlus />}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StaffAugmentation;