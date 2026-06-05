import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeThink from "./components/WhatWeThink";
import GlobalImpact from "./components/GlobalImpact";
import EnterpriseSystems from "./components/EnterpriseSystems";
import WhoWeAre from "./pages/WhoWeAre";
import LeadershipVision from "./pages/LeadershipVision";
import Client from "./pages/Client";
import FutureCareer from "./components/FutureCareer";
import DigitalTransformation from "./pages/DigitalTransformation";
import CyberSecurity from "./pages/CyberSecurity";
import StaffAugmentation from "./pages/StaffAugmentation";
import ContentProduction from "./pages/ContentProduction";
import UrmistekProducts from "./pages/UrmistekProducts";
import CSRVision from "./pages/CSRVision";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SplashScreen from "./components/SplashScreen";

// sessionStorage persists for the browser tab session —
// splash plays once on first "/" visit, never again on route changes
const hasSplashPlayed = () => sessionStorage.getItem("splashPlayed") === "true";

function Home() {
  return (
    <div className="constart">
      <Hero />
      <WhatWeThink />
      <GlobalImpact />
      <FutureCareer />
      <EnterpriseSystems />
    </div>
  );
}

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Only show splash if we're on "/" and it hasn't played yet this tab session
  const [showSplash, setShowSplash] = useState(
    isHomePage && !hasSplashPlayed()
  );

  // Lock scroll only while splash is active
  useEffect(() => {
    document.body.style.overflow = showSplash ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSplash]);

  const handleSplashFinish = () => {
    sessionStorage.setItem("splashPlayed", "true"); // mark as played for this tab
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/leadership-vision" element={<LeadershipVision />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/digital-transformation" element={<DigitalTransformation />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/staff-augmentation" element={<StaffAugmentation />} />
        <Route path="/content-production" element={<ContentProduction />} />
        <Route path="/products" element={<UrmistekProducts />} />
        <Route path="/csr-vision" element={<CSRVision />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;