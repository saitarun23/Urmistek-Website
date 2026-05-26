import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="src/assets/images/herovideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-text">
                  
          <h1 className="hero-title">
            <span className="title-with-logo">
              B
              <img src="/src/assets/images/logo.png" alt="Urmistek Logo" className="hero-logo" />
              ILDING THE
            </span>
            <span className="title-line-two">
            FUTURE WITH    AI
            </span>
            {/* <span className="title-line-three">
               <span className="highlight-text">TECHNOLOGY </span>
            </span> */}
          </h1>
          
          {/* <p className="hero-description">
            At Urmistek, we transform visionary ideas into powerful digital solutions. 
            Our expertise drives innovation, empowers businesses, and creates lasting impact 
            in the ever-evolving tech landscape.
          </p> */}
          
          <div className="hero-cta">
            {/* <button className="btn-primary">
              Explore Our Services
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button> */}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;