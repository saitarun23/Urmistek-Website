import React, { useState, useEffect, useRef } from "react";
import "../styles/whoWeAre.css";

const letters = [
  { letter: "U", phrase: "Unified",        desc: "One vision, one team — seamlessly aligned across every initiative." },
  { letter: "R", phrase: "Resilient",      desc: "Built to withstand disruption and emerge stronger every time." },
  { letter: "M", phrase: "Modernization",  desc: "Transforming legacy systems into future-ready digital infrastructure." },
  { letter: "I", phrase: "Innovation",     desc: "Pioneering bold ideas that reshape industries and drive growth." },
  { letter: "S", phrase: "Solutions",      desc: "Delivering precise, scalable answers to complex enterprise challenges." },
  { letter: "T", phrase: "Transformative", desc: "Creating lasting change that redefines what organisations can achieve." },
  { letter: "E", phrase: "Excellence",     desc: "Uncompromising standards in every product, service, and partnership." },
  { letter: "K", phrase: "Knowledge",      desc: "Deep expertise that powers smarter decisions and superior outcomes." },
];

const BRAND = "URMISTEK";
const TYPE_SPEED = 200;   // ms per character
const HOLD_AFTER = 600;   // pause after full word typed
const SLIDE_INTERVAL = 2800; // ms per letter

const WhoWeAre = () => {
  // Phase: "typing" | "sliding"
  const [phase, setPhase] = useState("typing");
  const [typed, setTyped] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [dir, setDir] = useState("next"); // "next" | "prev"
  const [animKey, setAnimKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // ── PHASE 1: typewriter ──
  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    const tick = setInterval(() => {
      i++;
      setTyped(BRAND.slice(0, i));
      if (i === BRAND.length) {
        clearInterval(tick);
        setTimeout(() => setPhase("sliding"), HOLD_AFTER);
      }
    }, TYPE_SPEED);
    return () => clearInterval(tick);
  }, [phase]);

  // ── PHASE 2: auto-slide ──
  useEffect(() => {
    if (phase !== "sliding") return;
    if (isPaused) { clearInterval(intervalRef.current); return; }
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDir("next");
      setAnimKey(k => k + 1);
      setActiveIndex(i => (i + 1) % letters.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [phase, isPaused]);

  const goTo = (i) => {
    if (i === activeIndex) return;
    setDir(i > activeIndex ? "next" : "prev");
    setAnimKey(k => k + 1);
    setActiveIndex(i);
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const active = letters[activeIndex];

  return (
    <section className="wwa-section">
      <div className="wwa-grid" />
      <div className="wwa-radial wwa-radial-a" />
      <div className="wwa-radial wwa-radial-b" />

      <div className="wwa-container">

        {/* ── BRAND BLOCK ── */}
        <div
          className="wwa-brand-block"
          onMouseEnter={() => phase === "sliding" && setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* URMISTEK word — typewriter then letter highlights */}
          <div className="wwa-wordrow">
            {phase === "typing" ? (
              <span className="wwa-typeword">
                {typed}<span className="wwa-cursor">|</span>
              </span>
            ) : (
              <div className="wwa-letters">
                {letters.map(({ letter }, i) => (
                  <span
                    key={letter}
                    className={`wwa-lchar ${i === activeIndex ? "wwa-lchar--active" : ""}`}
                    onClick={() => goTo(i)}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Sliding meaning */}
          {phase === "sliding" && (
            <div className="wwa-meaning-wrap">
              <div
                key={animKey}
                className={`wwa-meaning wwa-meaning--${dir}`}
              >
                <p className="wwa-phrase">
                  {/* <span className="wwa-phrase-letter">{active.letter}</span> */}
                  {/* &nbsp;—&nbsp; */}
                  <span className="wwa-phrase-word">{active.phrase}</span>
                </p>
                <p className="wwa-desc">{active.desc}</p>
              </div>

              {/* minimal letter index */}
              {/* <div className="wwa-counter">
                <span className="wwa-counter-num">{String(activeIndex + 1).padStart(2, "0")}</span>
                <span className="wwa-counter-sep">/</span>
                <span className="wwa-counter-total">{String(letters.length).padStart(2, "0")}</span>
              </div> */}
            </div>
          )}
        </div>

        {/* ── EXPERIENCE GRID ── */}
        <div className="spectrum-experience">

          <div className="spectrum-main-panel">
            <div className="spectrum-panel-glow" />
            <div className="spectrum-panel-content">
              <span className="spectrum-label">GLOBAL TRANSFORMATION NETWORK</span>
              <h2>Digital ecosystems for globally connected enterprises.</h2>
              <p>
                We collaborate with digitally mature organizations to create scalable
                infrastructures, accelerate transformation cycles, modernize enterprise
                experiences, and unlock innovation-driven growth across evolving global markets.
              </p>
            </div>
            <div className="spectrum-big-text">FUTURE</div>
          </div>

          <div className="spectrum-side-stack">
            {[
              { tag: "GLOBAL REACH",             text: "23 Countries Connected Through Digital Innovation Ecosystems." },
              { tag: "INNOVATION CULTURE",        text: "Accelerating enterprise transformation with intelligent digital thinking." },
              { tag: "ENTERPRISE MODERNIZATION",  text: "Future-ready infrastructures designed for scalable digital growth." },
            ].map(({ tag, text }) => (
              <div className="spectrum-mini-card" key={tag}>
                <div className="spectrum-mini-top">
                  <div className="spectrum-mini-dot" />
                  <span>{tag}</span>
                </div>
                <h3>{text}</h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;