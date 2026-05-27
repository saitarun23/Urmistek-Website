import React from "react";

import "../styles/contentProduction.css";

const productionData = [
  {
    number: "01",

    title: "Composition",

    desc: "We offer an extensive range of composition services, from simple to complex, single column to multicolumn, and plain text to heavy math. Powered by a Unified Content Framework, our workflow includes auto ingestion, auto diagnostics, and auto structuring, creating a seamless experience for authors, editors, and publishers.",
  },

  {
    number: "02",

    title: "eBooks",

    desc: "We help publishers develop eBooks with services that enhance the reading experience and discoverability. Our team ensures content integration and cross-linking using HTML5/EPUB3, supporting rich layouts, multimedia, and accessibility.",
  },

  {
    number: "03",

    title: "Digital Conversion",

    desc: "We provide digital conversion services to help clients reach the widest possible audience. From scanning and OCR to XML workflows and EPUB services, we ensure your content is technologically up-to-date.",
  },
];

const ContentProduction = () => {
  return (
    <section className="quantum-production">
      {/* BACKGROUND SYSTEM */}

      <div className="quantum-lines"></div>

      <div className="quantum-overlay"></div>

      {/* SIDE VERTICAL TEXT */}

      <div className="quantum-vertical-word">CONTENT SYSTEM</div>

      <div className="quantum-wrapper">
        {/* HERO */}

        <div className="quantum-hero">
          {/* <div className="quantum-topbar">
            <span className="quantum-bar"></span>

            <p>URMISTEK • DIGITAL CONTENT INFRASTRUCTURE</p>
          </div> */}

          <div className="quantum-heading-area">
            <h1>
              FUTURE
              <span>PUBLISHING</span>
              EXPERIENCE
            </h1>

            {/* <div className="quantum-side-description">
              <div className="quantum-small-dot"></div>

              <p>
                Transforming content ecosystems through intelligent publishing
                infrastructures, immersive digital experiences, and adaptive
                production architectures.
              </p>
            </div> */}
          </div>
        </div>

        {/* EXPERIENCE BLOCK */}

        <div className="quantum-flow-container">
          {productionData.map((item, index) => (
            <div className="quantum-flow-card" key={index}>
              {/* LEFT MASSIVE NUMBER */}

              <div className="quantum-big-number">{item.number}</div>

              {/* CENTER */}

              <div className="quantum-card-core">
                <div className="quantum-card-top">
                  <span className="quantum-status"></span>

                  <p>CONTENT MODULE</p>
                </div>

                <h2>{item.title}</h2>

                <p className="quantum-description">{item.desc}</p>
              </div>

              {/* RIGHT MASSIVE WORD */}

              <div className="quantum-bg-word">FLOW</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentProduction;
