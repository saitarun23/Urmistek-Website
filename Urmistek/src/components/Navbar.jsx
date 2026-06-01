import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"; // Styling for the navbar
import logoImage from "../assets/images/logo.png";
import lognameImage from "../assets/images/logoname.png";

// import React, { useState, useRef, useEffect } from 'react';

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
      // If the onClick prop is passed, execute it
      onClick(e);
    }
  };

  return (
    <div
      className="flyout-link"
      ref={flyoutRef}
      style={{ position: "relative" }}
    >
      <a
        href={href}
        className="flyout-link-anchor"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          // Execute internal logic first (close flyout)
          handleLinkClick(e);

          // Then execute the passed `onClick` prop if it exists (this can be your toggleMenu or other logic)
          if (onClick) onClick(e);
        }}
      >
        {children}
        <span className="flyout-link-underline"></span>
      </a>
      <div
        style={{
          visibility: "hidden", // Hide by default
          position: "absolute",
          top: "100%",
          height: "4vh",
          width: "10vw",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
      {FlyoutContent && (
        <div
          className={`flyout-content ${
            isHovered && window.innerWidth > 768 ? "visible" : ""
          } ${isNotVisible ? "display-problem" : ""}`}
          onClick={handleLinkClick} // Handle click on flyout content
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              width: "10vh",
              height: "10vh",
              backgroundImage: `url(${logoImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "0",
              transition: "all 0.3s ease", // Smooth transition
              zIndex: 1, // Bring it to the front
            }}
            onMouseEnter={(e) => {
              e.target.style.width = "15vw"; // Expand width
              e.target.style.backgroundImage = `url(${lognameImage})`; // Change background image
            }}
            onMouseLeave={(e) => {
              e.target.style.width = "8vh"; // Reset width
              e.target.style.backgroundImage = `url(${logoImage})`; // Reset background image
            }}
          />
        </Link>
      </div>

      {/* Centered Menu */}
      <nav className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <FlyoutLink
          onClick={() => {
            // Only perform the scroll and toggle logic for the main "Our Company" click
            const section = document.getElementById("our-company");
            const container = document.querySelector(".constart"); // Using className to get the scroll container

            if (section && container) {
              const containerTop = container.getBoundingClientRect().top;
              const sectionTop = section.getBoundingClientRect().top;

              const offset = sectionTop - containerTop - 300; // Adjust 200 for your navbar height

              container.scrollTo({
                top: container.scrollTop + offset,
                behavior: "smooth",
              });
            }

            if (window.innerWidth < 768) {
              setTimeout(() => {
                toggleMenu(); // Call the toggleMenu after scrolling with a slight delay
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
                      transition: "transform 0.3s ease",
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
                      transition: "transform 0.3s ease",
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
                      transition: "transform 0.3s ease",
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
                      e.stopPropagation(); // Stop click event from bubbling to the parent FlyoutLink
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
                      transition: "transform 0.3s ease",
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
                      e.stopPropagation(); // Stop click event from bubbling to the parent FlyoutLink
                      onCareerButtonClick(); // Call the career button logic
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
            // Only perform the scroll and toggle logic for the main "Our Company" click
            const section = document.getElementById("our-company");
            const container = document.querySelector(".constart"); // Using className to get the scroll container

            if (section && container) {
              const containerTop = container.getBoundingClientRect().top;
              const sectionTop = section.getBoundingClientRect().top;

              const offset = sectionTop - containerTop - 300; // Adjust 200 for your navbar height

              container.scrollTo({
                top: container.scrollTop + offset,
                behavior: "smooth",
              });
            }

            if (window.innerWidth < 768) {
              setTimeout(() => {
                toggleMenu(); // Call the toggleMenu after scrolling with a slight delay
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
                      transition: "transform 0.3s ease",
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
                      transition: "transform 0.3s ease",
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
                      transition: "transform 0.3s ease",
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
                      e.stopPropagation(); // Stop click event from bubbling to the parent FlyoutLink
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
                      transition: "transform 0.3s ease",
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
                      e.stopPropagation(); // Stop click event from bubbling to the parent FlyoutLink
                      navigate("/content-production");
                      onCareerButtonClick(); // Call the career button logic
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
              e.preventDefault(); // Prevent default link behavior
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
                e.stopPropagation(); // Prevent click from bubbling up
                toggleMenu();
                const section = document.getElementById("main3");
                const container = document.querySelector(".constart");

                if (section && container) {
                  const containerTop = container.getBoundingClientRect().top;
                  const sectionTop = section.getBoundingClientRect().top;

                  const offset = sectionTop - containerTop + 140; // 60px scroll padding

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
          e.stopPropagation(); // Prevent click from bubbling up

          const section = document.getElementById("main3");
          const container = document.querySelector(".constart");

          if (section && container) {
            const containerTop = container.getBoundingClientRect().top;
            const sectionTop = section.getBoundingClientRect().top;

            const offset = sectionTop - containerTop + 140; // 60px scroll padding

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
        {/* <button className="careers-button">
          {" "}
          <div>CONTACT</div>
        </button> */}
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
