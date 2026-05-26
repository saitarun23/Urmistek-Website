import React from "react";
import "../styles/csrVision.css";

const csrData = [
  {
    title: "Community Empowerment",
    desc: "Creating sustainable opportunities through employment, skill development, and digital inclusion initiatives.",
  },
  {
    title: "Environmental Responsibility",
    desc: "Implementing eco-conscious operational systems designed to reduce environmental impact globally.",
  },
  {
    title: "Women Leadership",
    desc: "Enabling women to achieve financial independence and leadership across evolving industries.",
  },
  {
    title: "Education Accessibility",
    desc: "Bridging educational gaps by delivering resources and technological access to underserved communities.",
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
      <div className="csr-watermark">
        IMPACT
      </div>

      <div className="csr-container">

        {/* LEFT SIDE */}
        <div className="csr-left">

          <div className="csr-top">
            <span className="csr-line"></span>
            <p>URMISTEK • CSR ECOSYSTEM</p>
          </div>

          <h1 className="csr-title">
            ENGINEERING
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

        {/* RIGHT SIDE */}
        <div className="csr-right">

          {csrData.map((item, index) => (
            <div className="csr-card" key={index}>

              <div className="csr-card-number">
                0{index + 1}
              </div>

              <div className="csr-card-content">

                <h2>{item.title}</h2>

                <p>{item.desc}</p>

              </div>

              <div className="csr-hover-line"></div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CSRVision;