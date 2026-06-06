import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"; // Styling for the navbar
import logoImage from "../assets/images/logo.png";
import lognameImage from "../assets/images/logoname.png";

const FlyoutLink = ({ children, href, FlyoutContent, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNotVisible, setIsNotVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const flyoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (flyoutRef.current && !flyoutRef.current.contains(event.target)) {
        setIsNotVisible(true);
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (e) => {
    // On mobile/tablet: if there's a flyout, toggle it instead of navigating
    if (FlyoutContent && window.innerWidth <= 1024) {
      e.preventDefault();
      setMobileOpen((prev) => !prev);
      setIsNotVisible(false);
      return;
    }

    setIsHovered(false);
    setIsNotVisible(true);
    setMobileOpen(false);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      className="flyout-link"
      ref={flyoutRef}
      style={{ position: "relative" }}
      onMouseEnter={() => {
        if (window.innerWidth > 1024) {
          setIsHovered(true);
          setIsNotVisible(false);
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth > 1024) {
          setIsHovered(false);
        }
      }}
    >
      <a
        href={href}
        className="flyout-link-anchor"
        onClick={(e) => {
          handleLinkClick(e);
          // Only call onClick directly on desktop when no flyout
          if (!FlyoutContent && onClick) onClick(e);
        }}
      >
        {children}
        {/* Chevron arrow shown only on mobile/tablet for items with flyout */}
        {FlyoutContent && (
          <span className={`mobile-chevron${mobileOpen ? " open" : ""}`}>&#9662;</span>
        )}
        <span className="flyout-link-underline"></span>
      </a>

      {/* Optimized Hover Bridge Connection zone to fix unstable drop-downs — desktop only */}
      {window.innerWidth > 1024 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            height: "30px",
            width: "100%",
            zIndex: 5,
          }}
        ></div>
      )}

      {FlyoutContent && (
        <>
          {/* Desktop flyout — original behaviour */}
          <div
            className={`flyout-content desktop-flyout ${
              isHovered && window.innerWidth > 1024 ? "visible" : ""
            } ${isNotVisible ? "display-problem" : ""}`}
            onClick={handleLinkClick}
            style={{ maxWidth: "1000px" }}
          >
            {FlyoutContent}
          </div>

          {/* Mobile / Tablet accordion flyout */}
          <div className={`mobile-flyout-panel${mobileOpen ? " open" : ""}`}>
            {FlyoutContent}
          </div>
        </>
      )}
    </div>
  );
};

const Navbar = ({ onCareerButtonClick }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024);

  // State for handling the 3-second auto-changing logo image state
  const [currentLogo, setCurrentLogo] = useState(logoImage);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Logic for Auto Changing Logo Images every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLogo((prevLogo) => (prevLogo === logoImage ? lognameImage : logoImage));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 1024);
      // Close menu when resizing to desktop
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Logo sizing ──
  // Desktop: your exact original sizes
  // Tablet (768–1024): slightly scaled down but same ratio
  // Mobile (<768): compact but logoname still readable
  const getLogoWidth = () => {
    const w = window.innerWidth;
    if (w < 768) {
      return currentLogo === lognameImage ? "110px" : "36px";
    } else if (w <= 1024) {
      return currentLogo === lognameImage ? "13vw" : "6vh";
    }
    // Desktop — YOUR EXACT ORIGINAL
    return currentLogo === lognameImage ? "15vw" : "8vh";
  };

  const getLogoHeight = () => {
    const w = window.innerWidth;
    if (w < 768) return "36px";
    if (w <= 1024) return "8vh";
    // Desktop — YOUR EXACT ORIGINAL
    return "10vh";
  };

  return (
    <div className={`navbar-container`}>
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/" className="naming">
          <div
            style={{
              top: "12.5%",
              position: "absolute", // YOUR EXACT ORIGINAL
              width: getLogoWidth(),
              height: getLogoHeight(),
              backgroundImage: `url(${currentLogo})`,
              backgroundSize: "cover", // YOUR EXACT ORIGINAL VALUE
              backgroundPosition: "center", // YOUR EXACT ORIGINAL VALUE
              backgroundRepeat: "no-repeat",
              borderRadius: "0",
              transition: "all 0.3s ease", // YOUR EXACT ORIGINAL VALUE
              zIndex: 1,
            }}
          />
        </Link>
      </div>

      {/* Centered Menu */}
      <nav className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <FlyoutLink
          onClick={() => {
            const section = document.getElementById("our-company");
            const container = document.querySelector(".constart");

            if (section && container) {
              const containerTop = container.getBoundingClientRect().top;
              const sectionTop = section.getBoundingClientRect().top;
              const offset = sectionTop - containerTop - 300;

              container.scrollTo({
                top: container.scrollTop + offset,
                behavior: "smooth",
              });
            }

            if (window.innerWidth <= 1024) {
              setTimeout(() => {
                toggleMenu();
              }, 100);
            }
          }}
          FlyoutContent={
            <div className="flyout-menu">
              <div className="flyout-section">
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    color: "black",
                  }}
                >
                  <li
                    style={{
                      marginBottom: "8px",
                      transition: "transform 0.3s ease, color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateX(10px)";
                      e.target.style.color = "crimson";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateX(0)";
                      e.target.style.color = "black";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/who-we-are");
                      if (window.innerWidth <= 1024) toggleMenu();
                    }}
                  >
                    Who We Are
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      transition: "transform 0.3s ease, color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateX(10px)";
                      e.target.style.color = "crimson";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateX(0)";
                      e.target.style.color = "black";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/leadership-vision");
                      if (window.innerWidth <= 1024) toggleMenu();
                    }}
                  >
                    Leadership
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      transition: "transform 0.3s ease, color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateX(10px)";
                      e.target.style.color = "crimson";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateX(0)";
                      e.target.style.color = "black";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/clients");
                      const section = document.getElementById("clients");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Clients
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      transition: "transform 0.3s ease, color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateX(10px)";
                      e.target.style.color = "crimson";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateX(0)";
                      e.target.style.color = "black";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onCareerButtonClick();
                    }}
                  >
                    Careers
                  </li>
                </ul>
              </div>
            </div>
          }
        >
          <span style={{ color: "white" }}>Our Company</span>
        </FlyoutLink>

        <FlyoutLink
          onClick={() => {
            const section = document.getElementById("our-company");
            const container = document.querySelector(".constart");

            if (section && container) {
              const containerTop = container.getBoundingClientRect().top;
              const sectionTop = section.getBoundingClientRect().top;
              const offset = sectionTop - containerTop - 300;

              container.scrollTo({
                top: container.scrollTop + offset,
                behavior: "smooth",
              });
            }

            if (window.innerWidth <= 1024) {
              setTimeout(() => {
                toggleMenu();
              }, 100);
            }
          }}
          FlyoutContent={
            <div className="flyout-menu">
              <div className="flyout-section">
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    color: "black",
                  }}
                >
                  <li
                    style={{
                      marginBottom: "8px",
                      transition: "transform 0.3s ease, color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateX(10px)";
                      e.target.style.color = "crimson";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateX(0)";
                      e.target.style.color = "black";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/digital-transformation");
                      if (window.innerWidth <= 1024) toggleMenu();
                    }}
                  >
                    Digital Transformation
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      transition: "transform 0.3s ease, color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateX(10px)";
                      e.target.style.color = "crimson";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateX(0)";
                      e.target.style.color = "black";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/cyber-security");
                      if (window.innerWidth <= 1024) toggleMenu();
                    }}
                  >
                    Cyber Security
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      transition: "transform 0.3s ease, color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateX(10px)";
                      e.target.style.color = "crimson";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateX(0)";
                      e.target.style.color = "black";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/staff-augmentation");
                      const section = document.getElementById("clients");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Staff Augmentation
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      transition: "transform 0.3s ease, color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateX(10px)";
                      e.target.style.color = "crimson";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateX(0)";
                      e.target.style.color = "black";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/content-production");
                      onCareerButtonClick();
                    }}
                  >
                    Content Production
                  </li>
                </ul>
              </div>
            </div>
          }
        >
          <span style={{ color: "white" }}>Our Services</span>
        </FlyoutLink>

        <FlyoutLink
          onClick={() => {
            navigate("/products");
            if (window.innerWidth <= 1024) {
              toggleMenu();
            }
          }}
        >
          <span style={{ color: "white" }}>Our Products</span>
        </FlyoutLink>

        <FlyoutLink
          onClick={() => {
            navigate("/csr-vision");
            if (window.innerWidth <= 1024) {
              toggleMenu();
            }
          }}
        >
          <div
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.getElementById("csr");
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            style={{ color: "white" }}
          >
            CSR
          </div>
        </FlyoutLink>

        {isMobileView && (
          <>
            <FlyoutLink
              onClick={() => {
                toggleMenu();
                onCareerButtonClick();
              }}
            >
              <div>Careers</div>
            </FlyoutLink>

            <FlyoutLink
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu();
                const section = document.getElementById("main3");
                const container = document.querySelector(".constart");

                if (section && container) {
                  const containerTop = container.getBoundingClientRect().top;
                  const sectionTop = section.getBoundingClientRect().top;
                  const offset = sectionTop - containerTop + 140;

                  container.scrollTo({
                    top: container.scrollTop + offset,
                    behavior: "smooth",
                  });
                }

                if (window.innerWidth <= 1024) {
                  setTimeout(() => {
                    toggleMenu();
                  }, 100);
                }
              }}
            >
              {/* <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "8px 12px",
                  borderRadius: "4px",
                }}
              >
                Contact
              </div> */}
            </FlyoutLink>
          </>
        )}
      </nav>

      <div
        className="navbar-careers"
        style={{ overflow: "hidden" }}
        onClick={(e) => {
          e.stopPropagation();

          const section = document.getElementById("main3");
          const container = document.querySelector(".constart");

          if (section && container) {
            const containerTop = container.getBoundingClientRect().top;
            const sectionTop = section.getBoundingClientRect().top;
            const offset = sectionTop - containerTop + 140;

            container.scrollTo({
              top: container.scrollTop + offset,
              behavior: "smooth",
            });
          }

          if (window.innerWidth <= 1024) {
            setTimeout(() => {
              toggleMenu();
            }, 100);
          }
        }}
      >
      </div>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default Navbar;