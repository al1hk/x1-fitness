"use client";

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import MarqueeSection from './components/MarqueeSection';
import FeaturesSection from './components/FeaturesSection';
import FacilitiesSection from './components/FacilitiesSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import DynamicBackground from './components/DynamicBackground';
import ContactFooter from './components/ContactFooter';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
  const getPath = () => {
    const p = window.location.pathname;
    const trimmed = p.length > 1 ? p.replace(/\/+$/, '') : p;
    return trimmed || '/';
  };

  const [path, setPath] = useState('/');

  useEffect(() => {
    setPath(getPath());
    const onPopState = () => setPath(getPath());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  let page: React.ReactNode;
  if (path === '/about') {
    page = <About />;
  } else if (path === '/services') {
    page = <Services />;
  } else if (path === '/contact') {
    page = <Contact />;
  } else {
    page = (
      <>
        <Hero />
        <MarqueeSection />
        <FeaturesSection />
        <FacilitiesSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactFooter />
      </>
    );
  }

  return (
    <div className="bg-brand-dark min-h-screen w-full relative selection:bg-brand-red selection:text-white cursor-none scroll-smooth">
      <CustomCursor />
      <DynamicBackground />
      <Navbar />
      {page}
    </div>
  );
};

export default App;