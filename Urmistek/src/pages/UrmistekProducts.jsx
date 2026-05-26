import React from "react";
import "../styles/urmistekProducts.css";

const products = [
  {
    title: "NeuralSync AI",
    desc: "NeuralSync AI is an advanced enterprise intelligence ecosystem designed to automate complex operational workflows through adaptive machine learning architectures, predictive analytics, and realtime decision systems. Built for scalable digital infrastructures, it seamlessly integrates across enterprise environments to enhance efficiency, accelerate intelligent automation, optimize data-driven processes, and deliver next-generation operational intelligence at global scale.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "QuantumFlow Systems",
    desc: "Distributed infrastructure platform synchronizing cloud-native enterprise architectures.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "VisionCore Matrix",
    desc: "AI-driven visual intelligence engine transforming enterprise analytics into immersive decisions.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
  },
];

const UrmistekProducts = () => {
  return (
    <section className="urm-products-section">

      {/* Background Effects */}
      <div className="urm-grid"></div>
      <div className="urm-glow urm-glow-one"></div>
      <div className="urm-glow urm-glow-two"></div>

      {/* HUGE WATERMARK */}
      <div className="urm-watermark">
        PRODUCTS
      </div>

      <div className="urm-products-container">

        {/* HERO */}
        <div className="urm-hero">

          {/* <div className="urm-mini-top">
            <span className="urm-line"></span>
            <p>URMISTEK • AI PRODUCT ECOSYSTEMS</p>
          </div> */}

          <h1 className="urm-main-title">
            <span>Urmistek</span>
            <span>INTELLIGENCE</span>
          </h1>

          <p className="urm-sub-text">
            Building futuristic enterprise ecosystems powered by adaptive intelligence,
            scalable infrastructure, and next-generation digital experiences.
          </p>

        </div>

        {/* PRODUCTS */}
        <div className="urm-products-wrapper">

          {products.map((item, index) => (
            <div className="urm-product-card" key={index}>

              {/* IMAGE */}
              <div className="urm-product-image-wrap">

                <img src={item.image} alt={item.title} />

                <div className="urm-image-overlay"></div>

              </div>

              {/* CONTENT */}
              <div className="urm-product-content">

                <div className="urm-product-top">
                  {/* <span>0{index + 1}</span> */}
                  {/* <p>AI SYSTEM</p> */}
                </div>

                <h2>{item.title}</h2>

                <p className="urm-product-desc">
                  {item.desc}
                </p>

                <button className="urm-product-btn">
                  <span>EXPLORE SYSTEM</span>

                  <div className="urm-btn-bg"></div>
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default UrmistekProducts;