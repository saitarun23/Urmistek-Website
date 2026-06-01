import React from "react";
import "../styles/client.css";

import transforma from "../assets/images/TransfFormat.jpg";
import tekcenture from "../assets/images/OIP.jpg";
import mariapps from "../assets/images/MariApps.jpg";

const clients = [
  {
    logo: transforma,
    name: "Transforma",
    tag: "Transformation Systems",
    desc:
      "Driving enterprise-scale transformation ecosystems through intelligent modernization, scalable automation infrastructures, and next-generation digital operations.",
  },

  {
    logo: tekcenture,
    name: "Tekcenture",
    tag: "Enterprise Infrastructure",
    desc:
      "Accelerating enterprise engineering with advanced cloud ecosystems, connected infrastructure platforms, and future-ready transformation architectures.",
  },

  {
    logo: mariapps,
    name: "MariApps",
    tag: "Digital Maritime Platforms",
    desc:
      "Building intelligent maritime technology ecosystems focused on operational efficiency, connected logistics, and digital-first shipping innovation.",
  },
];

const Client = () => {
  return (
    <section className="orbital-client-section">

      {/* GRID */}
      <div className="orbital-grid"></div>

      {/* HUGE WORD */}
      <div className="orbital-word">
        NETWORK
      </div>

      {/* GLOW */}
      <div className="orbital-glow orbital-glow-one"></div>
      <div className="orbital-glow orbital-glow-two"></div>

      <div className="orbital-container">

        {/* HERO */}
        <div className="orbital-hero">

          {/* <div className="orbital-topline">

            <span className="orbital-line"></span>

            <p>URMISTEK • ENTERPRISE CLIENT MATRIX</p>

          </div> */}

          <div className="orbital-hero-layout">

            <h1>
              GLOBAL
              <span>CLIENT</span>
              NETWORK
            </h1>

            <div className="orbital-side-text">

              <div className="orbital-dot"></div>

              <p>
                Building intelligent partnerships with enterprises driving
                next-generation digital transformation infrastructures.
              </p>

            </div>

          </div>

        </div>

        {/* ORBITAL EXPERIENCE */}
        <div className="orbital-system">

          {/* CENTER */}
          <div className="orbital-core">

            <div className="orbital-core-ring"></div>

            <div className="orbital-core-ring orbital-ring-two"></div>

            <div className="orbital-core-center">

              <h2>URMISTEK</h2>

              {/* <span>GLOBAL DIGITAL ENGINEERING</span> */}

            </div>

          </div>

          {/* CLIENTS */}
          {clients.map((client, index) => (
            <div
              className={`orbital-node orbital-node-${index + 1}`}
              key={index}
            >

              <div className="orbital-node-inner">

                {/* LOGO */}
                <div className="orbital-logo-box">

                  <img src={client.logo} alt={client.name} />

                </div>

                {/* CONTENT */}
                <div className="orbital-content">

                  <h3>{client.name}</h3>

                  <p>{client.tag}</p>

                </div>

                {/* HOVER PANEL */}
                <div className="orbital-hover-panel">

                  <span>ENTERPRISE OVERVIEW</span>

                  <h4>{client.name}</h4>

                  <p>{client.desc}</p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Client;