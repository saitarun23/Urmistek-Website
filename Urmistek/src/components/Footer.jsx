import React from "react";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin, FiPhone, FiGlobe } from "react-icons/fi";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-master">
      <div className="footer-container">
        
        {/* Four Column Responsive Grid Matrix */}
        <div className="footer-grid-matrix">
          
          {/* COLUMN 1: Brand & Social Narrative */}
          <div className="footer-column brand-info-block">
            <h2 className="footer-brand-title">Urmistek</h2>
            <p className="footer-brand-desc">
              Committed to expanding gender-inclusive corporate landscapes and pioneering
              disruptive technical solutions. Fostering cross-border innovation models that deliver 
              transformative architectures across global enterprise systems.
            </p>
            <div className="footer-social-wrap">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="footer-social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <FaXTwitter className="footer-social-icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="footer-social-icon" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="footer-social-icon" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Contact Vectors */}
          <div className="footer-column contact-info-block">
            <h3 className="footer-column-heading">Contacts</h3>
            
            <div className="contact-loc-card">
              <span className="contact-country-label">Australia</span>
              <div className="contact-row">
                <FiMapPin className="contact-row-icon" />
                <p>17 Plough Avenue, Truganina, Victoria, 3029</p>
              </div>
              <div className="contact-row">
                <FiPhone className="contact-row-icon" />
                <p>+61 449882345</p>
              </div>
            </div>

            <div className="contact-loc-card">
              <span className="contact-country-label">India</span>
              <div className="contact-row">
                <FiMapPin className="contact-row-icon" />
                <p>9-1-44/2/1, Opp. Hotel Athidi Grand, AU North Campus, Visakhapatnam, AP 530013</p>
              </div>
              <div className="contact-row">
                <FiPhone className="contact-row-icon" />
                <p>+91 9618323745</p>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Modular Engineering Services */}
          <div className="footer-column links-info-block">
            <h3 className="footer-column-heading">Services</h3>
            <ul className="footer-links-list">
              <li><a href="/staff-augmentation">Staffing Solutions</a></li>
              <li><a href="/cyber-security">Cybersecurity</a></li>
              <li><a href="/content-production">Content Production</a></li>
              <li><a href="/clients">Client Development</a></li>
              <li><a href="/products">AI/ML Offerings</a></li>
              <li><a href="/digital-transformation">Digital Transformation</a></li>
            </ul>
          </div>

          {/* COLUMN 4: Premium Technical Sticker / Brand Sticker Graphic Area */}
          <div className="footer-column graphic-sticker-block">
            <div className="operations-badge-sticker">
              {/* <div className="sticker-grid-lines"></div> */}
              <div className="sticker-foreground">
                <FiGlobe className="sticker-globe-icon" />
                <div className="sticker-meta">
                  <span className="sticker-tag-small">URMISTEK</span>
                  <span className="sticker-tag-main">GLOBAL OPERATIONAL PARADIGM</span>
                </div>
                {/* <div className="sticker-status-bar">
                  <span className="status-ping-dot"></span>
                  <span className="status-ping-text">NETWORK NODE: ACTIVE</span>
                </div> */}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metadata Border Frame */}
        <div className="footer-bottom-bar">
          <p className="copyright-notice">
            &copy; 2024 Urmistek. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

// {new Date().getFullYear()} 