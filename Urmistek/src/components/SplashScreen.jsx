import React, { useEffect, useState } from "react";
import "../styles/SplashScreen.css";
import logo1 from "../assets/images/logo.png";

const SplashScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [fadeInImage, setFadeInImage] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [blurring, setBlurring] = useState(false);

  const quote = ["  ", "A", "Culture", "of", "Innovation", "Company"];

  useEffect(() => {
    window.scrollTo(0, 0);
    // NOTE: overflow is controlled by App.jsx — do NOT set it here

    // Step 1: Show the image after 1s, fade in over 1s
    const t1 = setTimeout(() => {
      setShowImage(true);
      setTimeout(() => setFadeInImage(true), 50);
    }, 1000);

    // Step 2: Show words one by one after image is fully visible (2s)
    const t2 = setTimeout(() => {
      const wordTimer = setInterval(() => {
        setCurrentWordIndex((prevIndex) => {
          if (prevIndex < quote.length - 1) {
            return prevIndex + 1;
          } else {
            clearInterval(wordTimer);

            // Step 3: Blur then hide, then notify parent
            const t3 = setTimeout(() => setBlurring(true), 1000);
            const t4 = setTimeout(() => {
              setVisible(false);
              if (onFinish) onFinish(); // ← tells App.jsx to restore scroll
            }, 2000);

            return prevIndex;
          }
        });
      }, 500);

      return () => clearInterval(wordTimer);
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      // body overflow is restored in App.jsx via onFinish
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash-screen ${blurring ? "blurring" : ""}`}>
      <div className="mainwrapper">
        {showImage && (
          <div
            className="logomain"
            style={{
              opacity: fadeInImage ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            <img
              src={logo1}
              alt="Company Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="responsiveImage"
            />
          </div>
        )}
        {currentWordIndex >= 0 && (
          <div className="quote">
            {quote.slice(0, currentWordIndex + 1).join(" ")}
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;