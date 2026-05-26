import React from "react";
import { FiMove } from "react-icons/fi";
import "../styles/leadershipvision.css";

// 1. IMPORT YOUR LOCAL IMAGE HERE
// Adjust the path ('../assets/images/...') to match exactly where your file lives relative to this component
import CEOImage from "../assets/images/aboutDirector.png"; 

const LeadershipVision = () => {
  return (
    <section className="vision-section" id="ceo-vision">
      <div className="vision-container">
        <div className="vision-architectural-layout">
          
          {/* Left Column: Asymmetric Layered Frame */}
          <div className="vision-portrait-frame">
            <div className="portrait-backdrop-geometry" />
            <div className="portrait-image-wrapper">
              {/* 2. USE THE IMPORTED VARIABLE NAME IN THE SRC */}
              <img 
                src={CEOImage} 
                alt="Urmila Bhupathiraju, CEO of Urmistek" 
                className="portrait-img"
              />
            </div>
            {/* Minimalist Corporate Structural Asset Label */}
            {/* <div className="portrait-floating-tag">
              <FiMove className="tag-vector" />
              <span>URMISTEK HQ // DIRECTORS OFFICE</span>
            </div> */}
          </div>

          {/* Right Column: Statement Terminal & Credentials */}
          <div className="vision-statement-pane">
            <span className="vision-pane-sup">EXECUTIVE MANDATE</span>
            
            <h2 className="vision-quote-text">
              “True technological velocity isn’t about matching the current baseline; it is about building the engineering structures that allow global enterprise operations to outrun legacy constraints entirely.”
            </h2>
            
            <div className="vision-sign-off-block">
              <div className="sign-off-divider" />
              <h4 className="leader-name">Urmila Bhupathiraju</h4>
              <p className="leader-role">Chief Executive Officer, Urmistek</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadershipVision;