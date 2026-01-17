import React from 'react';
import Hero from './components/Hero';
import MarqueeSection from './components/MarqueeSection';
import FeaturesSection from './components/FeaturesSection';
import FacilitiesSection from './components/FacilitiesSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactFooter from './components/ContactFooter';

export default function Page() {
  return (
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