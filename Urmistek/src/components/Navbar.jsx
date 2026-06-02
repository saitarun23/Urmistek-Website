import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"; // Styling for the navbar
import logoImage from "../assets/images/logo.png";
import lognameImage from "../assets/images/logoname.png";

const FlyoutLink = ({ children, href, FlyoutContent, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNotVisible, setIsNotVisible] = useState(false);
  const flyoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (flyoutRef.current && !flyoutRef.current.contains(event.target)) {
        setIsNotVisible(true);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (e) => {
    setIsHovered(false);
    setIsNotVisible(true);

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
        setIsHovered(true);
        setIsNotVisible(false);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={href}
        className="flyout-link-anchor"
        onClick={(e) => {
          handleLinkClick(e);
          if (onClick) onClick(e);
        }}
      >
        {children}
        <span className="flyout-link-underline"></span>
      </a>
      
      {/* Optimized Hover Bridge Connection zone to fix unstable drop-downs */}
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

      {FlyoutContent && (
        <div
          className={`flyout-content ${
            isHovered && window.innerWidth > 768 ? "visible" : ""
          } ${isNotVisible ? "display-problem" : ""}`}
          onClick={handleLinkClick}
          style={{ maxWidth: "1000px" }}
        >
          {FlyoutContent}
        </div>
      )}
    </div>
  );
};

const Navbar = ({ onCareerButtonClick }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  
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
      setIsMobileView(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`navbar-container`}>
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/" className="naming">
          <div
            style={{
              top: "12.5%",
              position: "absolute", // Ensure this element is contained within its parent
              width: currentLogo === lognameImage ? "15vw" : "8vh", // YOUR EXACT ORIGINAL SIZES
              height: "10vh",
              backgroundImage: `url(${currentLogo})`,
              backgroundSize: "cover", // YOUR EXACT ORIGINAL VALUE
              backgroundPosition: "center", // YOUR EXACT ORIGINAL VALUE
              backgroundRepeat: "no-repeat",
              borderRadius: "0",
              transition: "all 0.3s ease", // YOUR EXACT ORIGINAL VALUE
              zIndex: 1, // Bring it to the front
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

            if (window.innerWidth < 768) {
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
                    color: "#989898",
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
                      e.target.style.color = "#989898";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/who-we-are");
                      if (window.innerWidth < 768) toggleMenu();
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
                      e.target.style.color = "#989898";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/leadership-vision");
                      if (window.innerWidth < 768) toggleMenu();
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
                      e.target.style.color = "#989898";
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
                      e.target.style.color = "#989898";
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
          Our Company
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

            if (window.innerWidth < 768) {
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
                    color: "#989898",
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
                      e.target.style.color = "#3a3939";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/digital-transformation");
                      if (window.innerWidth < 768) toggleMenu();
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
                      e.target.style.color = "#3a3939";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/cyber-security");
                      if (window.innerWidth < 768) toggleMenu();
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
                      e.target.style.color = "#3a3939";
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
                      e.target.style.color = "#3a3939";
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
          Our Services
        </FlyoutLink>

        <FlyoutLink
          onClick={() => {
            navigate("/products");
            if (window.innerWidth < 768) {
              toggleMenu();
            }
          }}
        >
          Our Products
        </FlyoutLink>

        <FlyoutLink
          onClick={() => {
            navigate("/csr-vision");
            if (window.innerWidth < 768) {
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

                if (window.innerWidth < 768) {
                  setTimeout(() => {
                    toggleMenu();
                  }, 100);
                }
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "8px 12px",
                  borderRadius: "4px",
                }}
              >
                Contact
              </div>
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

          if (window.innerWidth < 768) {
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