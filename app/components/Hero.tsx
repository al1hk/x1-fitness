"use client";

import React, { useRef } from "react";
import { Clock, Flame, Activity, Dumbbell, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingCard from "./FloatingCard";
import heroImage from "../../assets/heroimage.png";

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[100svh] bg-brand-dark isolate overflow-hidden"
    >
      {/* ================= BACKGROUND MARQUEE ================= */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="rotate-[-8deg] scale-[1.3] md:scale-150">
          <div className="flex whitespace-nowrap animate-marquee-slow">
            {[1, 2].map((i) => (
              <span
                key={i}
                className="text-[20vw] font-display uppercase italic text-outline-red px-12 leading-none"
              >
                Titan • Strength • Power • Legacy •
              </span>
            ))}
          </div>

          <div className="flex whitespace-nowrap animate-marquee-reverse-slow -mt-8">
            {[1, 2].map((i) => (
              <span
                key={i}
                className="text-[20vw] font-display uppercase italic text-stroke-white px-12 leading-none"
              >
                Relentless • Grit • Obsession •
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= GRADIENT + VIGNETTE ================= */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(230,0,0,0.12)_0%,transparent_60%)]" />
      </div>

      {/* ================= MAIN GRID LAYOUT ================= */}
      <div className="relative z-20 grid grid-cols-2 grid-rows-[auto_1fr_auto] h-full max-w-7xl mx-auto px-4">
        
        {/* ---------- HEADLINE ---------- */}
        <motion.div
          style={{ y: headlineY, opacity: fadeOut }}
          className="col-span-2 text-center mt-[10vh]"
        >
          <h1 className="font-display uppercase font-bold text-[18vw] md:text-[14vw] leading-[0.85] tracking-tighter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              Redefine
            </span>
            <span className="block text-brand-red drop-shadow-[0_0_30px_rgba(230,0,0,0.6)]">
              Your Limits
            </span>
          </h1>
        </motion.div>

        {/* ---------- HERO IMAGE ---------- */}
        <motion.div
          style={{ y: imageY }}
          className="col-span-2 flex items-end justify-center pointer-events-none"
        >
          <img
            src={heroImage.src}
            alt="Elite Athlete"
            className="h-[70vh] md:h-[85vh] object-contain object-bottom"
            style={{
              filter: "grayscale(100%) contrast(1.1) brightness(0.9)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 80%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* ---------- GRID CARDS (iOS SAFE) ---------- */}
        <div className="absolute inset-0 z-30 grid grid-cols-2 grid-rows-2 pointer-events-none px-4">
          
          <div className="flex items-start justify-start pt-[20vh]">
            <FloatingCard
              icon={<Clock className="w-5 h-5" />}
              label="Accessibility"
              value="OPEN 24/7"
            />
          </div>

          <div className="flex items-start justify-end pt-[20vh]">
            <FloatingCard
              icon={<Activity className="w-5 h-5" />}
              label="Intensity"
              value="ELITE"
            />
          </div>

          <div className="flex items-end justify-start pb-[20vh]">
            <FloatingCard
              icon={<Flame className="w-5 h-5" />}
              label="Avg Session"
              value="950 KCAL"
            />
          </div>

          <div className="flex items-end justify-end pb-[20vh]">
            <FloatingCard
              icon={<Dumbbell className="w-5 h-5" />}
              label="Equipment"
              value="HAMMER STRENGTH"
            />
          </div>

        </div>

        {/* ---------- SCROLL INDICATOR ---------- */}
        <div className="col-span-2 flex flex-col items-center mb-6 opacity-60">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-brand-red animate-bounce" />
          <div className="w-[1px] h-10 bg-gradient-to-b from-brand-red to-transparent mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;