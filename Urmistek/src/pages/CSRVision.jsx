import React from "react";
import "../styles/csrVision.css";

const csrData = [
  {
    title: "Community Empowerment",
    desc: "Creating sustainable opportunities through employment, skill development, and digital inclusion initiatives.",
    color: "#1d4ed8",
    number: "01",
  },
  {
    title: "Environmental Responsibility",
    desc: "Implementing eco-conscious operational systems designed to reduce environmental impact globally.",
    color: "#6d28d9",
    number: "02",
  },
  {
    title: "Women Leadership",
    desc: "Enabling women to achieve financial independence and leadership across evolving industries.",
    color: "#0e7490",
    number: "03",
  },
  {
    title: "Education Accessibility",
    desc: "Bridging educational gaps by delivering resources and technological access to underserved communities.",
    color: "#065f46",
    number: "04",
  },
];

const CSRVision = () => {
  return (
    <section className="csr-section">

      {/* Background Effects */}
      <div className="csr-grid"></div>
      <div className="csr-glow csr-glow-one"></div>
      <div className="csr-glow csr-glow-two"></div>

      {/* Watermark */}
      <div className="csr-watermark">IMPACT</div>

      <div className="csr-container">

        {/* LEFT SIDE — unchanged */}
        <div className="csr-left">
          <div className="csr-top">
            <span className="csr-line"></span>
            <p>URMISTEK • CSR ECOSYSTEM</p>
          </div>

          <h1 className="csr-title">
            <span>IMPACT</span>
            BEYOND BUSINESS
          </h1>

          <p className="csr-description">
            At Urmistek, Corporate Social Responsibility is deeply integrated
            into our innovation ecosystem — empowering communities,
            accelerating inclusivity, and building sustainable futures
            through intelligent transformation.
          </p>
        </div>

        {/* RIGHT SIDE — cyber-style colored cards */}
        <div className="csr-right">
          {csrData.map((item, index) => (
            <div
              className="csr-card"
              key={index}
              style={{ backgroundColor: item.color }}
            >
              {/* diagonal pattern overlay — same as cyber cards */}
              <div className="csr-card__pattern" />

              {/* number watermark top-left */}
              {/* <span className="csr-card__number">{item.number}</span> */}

              {/* content */}
              <div className="csr-card-content">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>

              {/* hover line at bottom */}
              <div className="csr-hover-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CSRVision;