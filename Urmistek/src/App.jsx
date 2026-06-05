import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

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
  const [splashDone, setSplashDone] = useState(false);

  // When splash finishes, restore scroll on <body>
  const handleSplashFinish = () => {
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden"; // keep if your layout needs it
    setSplashDone(true);
  };

  // Lock scroll while splash is showing
  useEffect(() => {
    if (!splashDone) {
      document.body.style.overflow = "hidden";
    }
  }, [splashDone]);

  return (
    <>
      {!splashDone && <SplashScreen onFinish={handleSplashFinish} />}

      {/* 
        Render the full app underneath so it's mounted and ready.
        It stays hidden behind the splash (z-index) until splashDone.
        This avoids any layout shift or blank flash when the splash exits.
      */}
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