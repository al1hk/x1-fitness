"use client";

import React, { useRef } from 'react';
import { Clock, Flame, Activity, Dumbbell, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingCard from './FloatingCard';
import heroImage from '../../assets/heroimage.png';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax transformations
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const marqueeY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);


  return (
    <section 
      ref={ref} 
      className="relative w-full h-[100svh] overflow-hidden flex flex-col items-center justify-center bg-brand-dark contain-paint"
    >
      
      {/* 1. Background Layer: Marquee Text */}
      <motion.div 
        style={{ y: marqueeY }}
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20 select-none overflow-hidden"
      >
        <div className="absolute w-full rotate-[-8deg] scale-[1.3] md:scale-150 transform-gpu">
            <div className="flex whitespace-nowrap animate-marquee-slow will-change-transform">
                {[1, 2].map((i) => (
                    <span key={i} className="text-[20vw] font-display font-black uppercase italic text-outline-red px-8 md:px-12 leading-none">
                        Titan • Strength • Power • Legacy •
                    </span>
                ))}
            </div>
            <div className="flex whitespace-nowrap animate-marquee-reverse-slow -mt-4 md:-mt-8 will-change-transform">
                {[1, 2].map((i) => (
                    <span key={i} className="text-[20vw] font-display font-black uppercase italic text-stroke-white px-8 md:px-12 leading-none">
                        Relentless • Grit • Obsession •
                    </span>
                ))}
            </div>
        </div>
      </motion.div>

      {/* 2. Visual Layer: Glows & Vignette */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] bg-[radial-gradient(circle,rgba(230,0,0,0.12)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40"></div>
      </div>

      {/* 3. Mid-Layer: The Main Headline */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="absolute top-[8%] md:top-[14%] w-full flex flex-col items-center z-10 pointer-events-auto select-none px-4 will-change-transform"
      >
        <h1 className="font-display font-bold uppercase text-[18vw] md:text-[15vw] leading-[0.85] tracking-tighter text-center cursor-default w-full">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl">
            Redefine
          </span>
          <span className="block text-brand-red drop-shadow-[0_0_30px_rgba(230,0,0,0.6)]">
            Your Limits
          </span>
        </h1>
      </motion.div>
      {/* 4. Foreground Layer: Character Image */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute bottom-0 z-30 h-[65vh] md:h-[85vh] lg:h-[90vh] w-full max-w-6xl flex items-end justify-center pointer-events-none will-change-transform transform-gpu"
      >
        <img 
          src={heroImage.src}
          alt="Elite Athlete"
          loading="eager"
          decoding="async"
          className="h-full w-auto object-contain object-bottom"
          style={{
            filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          }}
          
        />
        <div className="absolute inset-0 bg-brand-red/5 mix-blend-color pointer-events-none"></div>
      </motion.div>

      {/* 5. UI Layer: Floating Info Cards - Optimized for Mobile Overlap */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute inset-0 z-40 w-full h-full max-w-[1600px] mx-auto pointer-events-none"
      >
        {/* TOP LEFT */}
        <div className="absolute top-[25%] left-2 md:left-[8%] lg:left-[12%] animate-float-slow will-change-transform transform scale-[0.65] xs:scale-[0.75] md:scale-100 origin-left">
            <FloatingCard 
                icon={<Clock className="w-5 h-5" />} 
                label="Accessibility" 
                value="OPEN 24/7" 
            />
        </div>

        {/* BOTTOM LEFT - Pushed further left/bottom to avoid character */}
        <div className="absolute bottom-[30%] left-2 md:left-[5%] lg:left-[10%] animate-float-delayed will-change-transform transform scale-[0.65] xs:scale-[0.75] md:scale-100 origin-left">
            <FloatingCard 
                icon={<Flame className="w-5 h-5" />} 
                label="Avg Session" 
                value="950 KCAL" 
            />
        </div>

        {/* TOP RIGHT */}
        <div className="absolute top-[25%] right-2 md:right-[8%] lg:right-[12%] animate-float-reverse will-change-transform transform scale-[0.65] xs:scale-[0.75] md:scale-100 origin-right">
            <FloatingCard 
                icon={<Activity className="w-5 h-5" />} 
                label="Intensity" 
                value="ELITE" 
            />
        </div>

        {/* BOTTOM RIGHT - Pushed further right/bottom to avoid character */}
        <div className="absolute bottom-[30%] right-2 md:right-[5%] lg:right-[10%] animate-float-slow will-change-transform transform scale-[0.65] xs:scale-[0.75] md:scale-100 origin-right">
            <FloatingCard 
                icon={<Dumbbell className="w-5 h-5" />} 
                label="Equipment" 
                value="HAMMER STRENGTH" 
            />
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 z-50 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <div className="flex flex-col items-center text-white/20 gap-1 animate-bounce">
            <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.3em]">Scroll</span>
            <ChevronDown className="w-4 h-4 text-brand-red" />
        </div>
        <div className="w-[1px] h-6 md:h-12 bg-gradient-to-b from-brand-red to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;