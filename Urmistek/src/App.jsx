import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeThink from "./components/WhatWeThink";
import GlobalImpact from "./components/GlobalImpact";
import EnterpriseSystems from "./components/EnterpriseSystems";
import LeadershipVision from "./components/LeadershipVision";
import FutureCareer from "./components/FutureCareer"; 
import UrmistekProducts from "./pages/UrmistekProducts";
import CSRVision from "./pages/CSRVision";
import Footer from "./components/Footer";

function Home() {
  return (
    // IMPORTANT: keep this wrapper if your Navbar scroll logic uses ".constart"
    <div className="constart">
      <Hero />
      {/* <LeadershipVision /> */}
      <WhatWeThink />
      <GlobalImpact />
      <FutureCareer />
      <EnterpriseSystems />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/leadership" element={<Leadership />} /> */}
        <Route path="/products" element={<UrmistekProducts />} />
        <Route path="/csr-vision" element={<CSRVision />} />

      </Routes>
    </>
  );
}

export default App;