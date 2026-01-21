"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Maps display text to URL hash
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      // Throttle scroll check
      if (window.scrollY > 20 && !isScrolled) setIsScrolled(true);
      if (window.scrollY <= 20 && isScrolled) setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 transition-all duration-500 border-b will-change-transform ${
          isScrolled || isMobileMenuOpen
            ? 'py-2 md:py-2 bg-[#050505]/95 border-white/10 shadow-lg' 
            : 'py-4 md:py-4 bg-transparent border-transparent'
        }`}
      >
        <div className="flex items-center justify-between max-w-[1600px] mx-auto">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer relative z-50">
            <div className="relative">
                <img
                  src={logo.src}
                  alt="X1 Fitness"
                  className="w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
                {/* Replaced blur with simple opacity glow */}
                <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-40 rounded-full transition-opacity duration-300"></div>
            </div>
            
          </Link>

          {/* Desktop Links - Centered */}
          <ul className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="relative font-navbar text-xs uppercase tracking-[0.25em] text-gray-300 hover:text-white transition-colors duration-300 font-semibold group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_brand-red]"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side: Mobile Toggle */}
          <div className="flex items-center gap-6 relative z-50">
              {/* Mobile Menu Toggle */}
              <div className="lg:hidden">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white hover:text-brand-red transition-colors p-2"
                >
                  {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
              </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Optimized texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
        {/* Replaced blur with radial gradient */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(230,0,0,0.15)_0%,transparent_70%)] pointer-events-none"></div>

        <ul className="flex flex-col items-center gap-8 relative z-10">
          {navLinks.map((link, index) => (
            <li 
              key={link.name} 
              className={`transition-all duration-500 delay-[${index * 100}ms] ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Link 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-5xl font-navbar font-bold uppercase italic text-transparent stroke-white hover:text-brand-red hover:stroke-transparent transition-all duration-300 flex items-center gap-4 group"
                style={{ WebkitTextStroke: '1px white' }}
              >
                {link.name}
                <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>
        
        <div className={`mt-16 transition-all duration-700 delay-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-brand-red text-white px-12 py-5 rounded-sm font-navbar font-semibold text-2xl uppercase tracking-wider skew-x-[-10deg] shadow-[0_0_30px_rgba(230,0,0,0.4)] block text-center">
                Start Free Trial
            </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
