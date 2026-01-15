"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Saad Sheikh",
    date: "a week ago",
    quote: "One of the best gyms in the area. Modern equipment, clean space, and a motivating atmosphere. Highly recommended for anyone serious about fitness 🏋️",
    rating: 5
  },
  {
    id: 2,
    name: "Hammad Aslam",
    date: "2 weeks ago",
    quote: "Well maintained gym and all equipments are avaliable. Highly recommended.",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative w-full bg-black py-24 overflow-hidden border-t border-white/5">
      
      {/* --- BACKGROUND EFFECTS START --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Deep Red Grading */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0505] to-black opacity-90"></div>
        
        {/* 2. Spotlight Red Effect (Optimized Gradient) */}
        <div className="absolute top-0 left-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(230,0,0,0.1)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* 3. Marquee Background */}
        <div className="absolute bottom-0 left-0 w-full opacity-5 select-none pointer-events-none">
             <div className="flex whitespace-nowrap animate-marquee-left will-change-transform">
                 <span className="text-[18vw] font-display font-black italic text-transparent px-10" style={{ WebkitTextStroke: '2px white' }}>
                    VICTORY • GLORY • LEGACY • 
                 </span>
                 <span className="text-[18vw] font-display font-black italic text-transparent px-10" style={{ WebkitTextStroke: '2px white' }}>
                    VICTORY • GLORY • LEGACY • 
                 </span>
             </div>
        </div>
      </div>
      {/* --- BACKGROUND EFFECTS END --- */}

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight text-white leading-[1]">
            Member <span className="text-brand-red">Reviews</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto uppercase tracking-wider text-sm font-medium">
            Real feedback from the X1Fitness community.
          </p>
        </div>

        {/* Text-Focused Carousel */}
        <div className="relative max-w-4xl mx-auto">
            
            {/* Main Card */}
            <div className="relative bg-[#0a0a0a] border border-white/10 p-8 md:p-16 rounded-sm md:rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:border-brand-red/30 group min-h-[400px] justify-center overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
                {/* Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,0,0,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Big Quote Icon */}
                <div className="relative z-10 mb-8">
                    <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red shadow-[0_0_30px_rgba(230,0,0,0.2)]">
                        <Quote className="w-8 h-8 fill-current" />
                    </div>
                </div>

                {/* Review Text */}
                <div key={currentIndex} className="relative z-10 animate-fade-in-up">
                    <p className="text-2xl md:text-4xl font-display font-medium leading-tight text-white italic mb-10 max-w-3xl mx-auto">
                        "{current.quote}"
                    </p>

                    {/* Stars */}
                    <div className="flex justify-center gap-2 text-brand-red mb-6">
                        {[...Array(current.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-current" />
                        ))}
                    </div>

                    {/* Author Info */}
                    <div className="flex flex-col items-center gap-1">
                        <h4 className="text-xl font-bold text-white uppercase tracking-widest">
                            {current.name}
                        </h4>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
                            {current.date}
                        </span>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons (Floating on sides on Desktop, Bottom on Mobile) */}
            <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 pointer-events-none px-0 md:-px-24 max-md:static max-md:mt-8 max-md:justify-center max-md:gap-6">
                 <button 
                    onClick={handlePrev}
                    className="w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all duration-300 group hover:scale-110 active:scale-95 pointer-events-auto md:-translate-x-20 shadow-lg"
                    aria-label="Previous Review"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                    onClick={handleNext}
                    className="w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all duration-300 group hover:scale-110 active:scale-95 pointer-events-auto md:translate-x-20 shadow-lg"
                    aria-label="Next Review"
                >
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-12">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            idx === currentIndex ? 'bg-brand-red w-8' : 'bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Go to review ${idx + 1}`}
                    />
                ))}
            </div>

        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;