import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroduceSection from './components/IntroduceSection';
import ProjectsDashboard from './components/ProjectsDashboard';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
      {/* Global Navigation */}
      <Navbar />

      {/* Vertical Scroll Snap Container */}
      <main className="snap-container">
        
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Introduce Section */}
        <IntroduceSection />

        {/* 3. Projects Dashboard (1 Screen = All Project) */}
        <ProjectsDashboard />

        {/* 4. Contact Section */}
        <ContactSection />

      </main>
    </>
  );
}

export default App;
