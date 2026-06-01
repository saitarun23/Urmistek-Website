import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {FaXTwitter } from "react-icons/fa6";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px 60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Grid Container */}
      <div className="responsive-grid">
        {/* About Section */}
        <div>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Urmistek</h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Urmistek is committed to providing work to women and fostering a
            culture of innovation. Our goal is to deliver sustainable and
            transformative solutions across industries.
          </p>
          {/* Social Media Icons */}
          <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} color="#fff" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} color="#fff" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} color="#fff" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} color="#fff" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Contacts</h3>
          <p style={{ margin: "5px 0" }}>
            <strong>Australia : </strong>
          </p>
          <p style={{ margin: "5px 0" }}>
           17 Plough average <br />Truganina Victoria, 3029
          </p>
          <p style={{ margin: "5px 0" }}>
            +61 449882345
          </p>
          
          {/* <p style={{ margin: "5px 0" }}>
            
          </p> */}
          {/* <p style={{ margin: "5px 0" }}>
            <strong>Email:</strong>3029
          </p> */}
          <br />
          <br />
          <p style={{ margin: "5px 0" }}>
            <strong> India: </strong>
          </p>
          <p style={{ margin: "5px 0" }}>
            9-1-44/2/1, Opp. Hotel Athidi Grand,
          </p>
          <p style={{ margin: "5px 0" }}>AU North Campus, Visakhapatnam,</p>
          <p style={{ margin: "5px 0" }}>Andhra Pradesh 530013</p>
          <p style={{ margin: "5px 0" }}>
            +91 9618323745
          </p>
          
        </div>

        {/* Services Section */}
        <div>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Services</h3>
          <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
            <li style={{ margin: "5px 0" }}>Staffing Solutions</li>
            <li style={{ margin: "5px 0" }}>Cybersecurity</li>
            <li style={{ margin: "5px 0" }}>Content Production</li>
            <li style={{ margin: "5px 0" }}>Accessibility Services</li>
            <li style={{ margin: "5px 0" }}>AI/ML Offerings</li>
            <li style={{ margin: "5px 0" }}>Digital Transformation</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          borderTop: "1px solid #333",
          paddingTop: "20px",
        }}
      >
        <p style={{ margin: "0", fontSize: "14px", color: "#aaa" }}>
          &copy; 2024 Urmistek. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
