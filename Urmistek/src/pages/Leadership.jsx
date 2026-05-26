import React, { useEffect, useMemo, useRef, useState } from "react";
import "../styles/leadership.css";

const Leadership = () => {
  const pageRef = useRef(null);
  const [activeGroup, setActiveGroup] = useState("board");
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add("ld-in");
        });
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const data = useMemo(
    () => ({
      board: [
        {
          id: "b1",
          label: "CEO & Founder",
          name: "Urmila Bhupathiraju",
          role: "CEO & Founder",
          img: "/src/assets/images/leadership/leader1.png",
          short:
            "Provides strategic direction and long-term governance across the organization.",
          long:
            "Leads the board with a focus on strategy, governance, and responsible growth. Guides leadership alignment, ensures accountability, and supports sustainable decision-making across business units.",
        },
        {
          id: "b2",
          label: "Director",
          name: "Vishnu Bhupathiraju",
          role: "Director",
          img: "/src/assets/images/leadership/leader2.png",
          short:
            "Brings governance, operational oversight, and independent perspective.",
          long:
            "Contributes oversight on risk, audit, and compliance while helping leadership evaluate outcomes objectively. Supports governance standards and transparent decision frameworks.",
        },
      ],
      executive: [
        {
          id: "e1",
          label: "Talent Acquisition",
          name: "Rajshekar V",
          role: "Talent Acquisition",
          img: "/src/assets/images/leadership/leader3.png",
          short:
            "Owns vision, customer outcomes, and execution across engineering, security, and AI.",
          long:
            "Drives company strategy with a delivery-first mindset. Focused on building strong teams, creating repeatable execution systems, and ensuring every engagement ties to measurable business outcomes.",
        },
        {
          id: "e2",
          label: "Chief Operating Officer",
          name: "Dinakar N",
          role: "COO",
          img: "/src/assets/images/leadership/leader4.png",
          short:
            "Owns architecture quality, platform direction, and production-grade standards.",
          long:
            "Leads architecture and engineering excellence. Establishes scalable patterns, improves reliability, and helps teams ship faster with strong quality, security, and observability practices.",
        },
        {
          id: "e3",
          label: "Human Resources",
          name: "Shivani Pennmetsa",
          role: "HR",
          img: "/src/assets/images/leadership/leader5.png",
          short:
            "Drives security programs, risk reduction, and compliance across client environments.",
          long:
            "Builds modern security programs across governance, risk, and incident readiness. Helps clients implement secure-by-default systems through hardening, monitoring, and policy guidance.",
        },
      ],
    }),
    []
  );

  const groups = [
    { key: "board", title: "Board of Directors", desc: "Governance & oversight" },
    { key: "executive", title: "Executive Leadership", desc: "Delivery & strategy" },
  ];

  const activeList = data[activeGroup] || [];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="ld-page" ref={pageRef}>
      {/* Background (subtle, not heavy) */}
      <div className="ld-bg" aria-hidden="true">
        <div className="ld-grid" />
      </div>

      <section className="ld-hero" id="leadership-top">
        <div className="ld-wrap">
          <div className="ld-kicker">Who we are</div>
          <h1 className="ld-title">
            Leadership built for <span className="ld-line">clarity</span> and{" "}
            <span className="ld-line">execution</span>.
          </h1>
          <p className="ld-subtitle">
            We keep this page intentionally clean: strong hierarchy, generous spacing,
            and profiles you can actually read.
          </p>

          <div className="ld-hero-actions">
            <button className="ld-btn ld-btn-primary" onClick={() => scrollToId("ld-groups")}>
              Explore leadership
              <span className="ld-arrow">→</span>
            </button>
            <a className="ld-btn ld-btn-ghost" href="#contact">
              Talk to us
            </a>
          </div>
        </div>
      </section>

      <section className="ld-content" id="ld-groups">
        <div className="ld-wrap">
          {/* Group tabs */}
          <div className="ld-tabs">
            {groups.map((g) => (
              <button
                key={g.key}
                className={`ld-tab ${activeGroup === g.key ? "is-active" : ""}`}
                type="button"
                onClick={() => {
                  setActiveGroup(g.key);
                  setOpenId(null);
                }}
              >
                <div className="ld-tab-title">{g.title}</div>
                <div className="ld-tab-desc">{g.desc}</div>
              </button>
            ))}
          </div>

          {/* Big clean section (white panel like TCS but within black page) */}
          <div className="ld-panel" id={activeGroup === "board" ? "board" : "executive"}>
            <div className="ld-panel-head">
              <div>
                <div className="ld-panel-kicker">
                  {activeGroup === "board" ? "Board of Directors" : "Executive Leadership"}
                </div>
                <h2 className="ld-panel-title">
                  {activeGroup === "board"
                    ? "Governance that protects quality and trust."
                    : "Leaders who ship outcomes, not just plans."}
                </h2>
              </div>
            </div>

            {/* Profiles (one-by-one, alternating layout) */}
            <div className="ld-profiles">
              {activeList.map((p, idx) => {
                const flipped = idx % 2 === 1;
                const isOpen = openId === p.id;

                return (
                  <article
                    key={p.id}
                    className={`ld-profile ${flipped ? "is-flipped" : ""}`}
                  >
                    <div className="ld-photo">
                      <img src={p.img} alt={p.name} loading="lazy" />
                    </div>

                    <div className="ld-info">
                      <div className="ld-roleline">{p.label}</div>
                      <h3 className="ld-name">{p.name}</h3>
                      <div className="ld-role">{p.role}</div>

                      <p className="ld-text">{p.short}</p>

                      <button
                        className="ld-readmore"
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : p.id)}
                        aria-expanded={isOpen}
                      >
                        {isOpen ? "Show less" : "Read more"}
                        <span className="ld-readmore-ic">→</span>
                      </button>

                      {isOpen && <p className="ld-long">{p.long}</p>}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Simple CTA (not congested) */}
          <div className="ld-bottom">
            <div className="ld-bottom-card">
              <div>
                <div className="ld-bottom-title">Want to meet the team?</div>
                <div className="ld-bottom-sub">
                  Share your requirement—we’ll connect you with the right leaders.
                </div>
              </div>

              <a className="ld-btn ld-btn-primary" href="#contact">
                Connect
                <span className="ld-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Leadership;