"use client";

import React, { useState } from 'react';
import { Leaf, Users, UserCheck, Layout, Zap, Activity } from 'lucide-react';
import Image from './Image';

const features = [
  { icon: Leaf, title: "Nutrition Guidance", desc: "Customized meal plans fueling your specific metabolic needs." },
  { icon: UserCheck, title: "Expert Trainers", desc: "Elite coaching from certified professionals who push your limits." },
  { icon: Users, title: "Community Support", desc: "Join a tribe of like-minded warriors committed to growth." },
  { icon: Layout, title: "Next-Level Spaces", desc: "State-of-the-art equipment in a high-energy atmosphere." },
  { icon: Zap, title: "Hyper-Recovery", desc: "Advanced cryotherapy, infrared saunas, and plunge pools to accelerate repair." },
  { icon: Activity, title: "Biometric Data", desc: "Real-time performance analytics synced directly to your smart ecosystem." },
];

const FeaturesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#050505] overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS START --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Consistent Red Tint Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-tint via-[#050505] to-brand-tint opacity-100"></div>

        {/* 2. Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        {/* 3. Ambient Red Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(230,0,0,0.05)_0%,transparent_70%)]"></div>

        {/* 4. Marquee Background */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full opacity-10 rotate-[-2deg] scale-110 pointer-events-none">
             <div className="flex whitespace-nowrap animate-marquee-right will-change-transform">
                 <span className="text-[20vw] font-display font-black italic text-transparent px-10" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                    PERFORMANCE • PRECISION • POWER • 
                 </span>
                 <span className="text-[20vw] font-display font-black italic text-transparent px-10" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                    PERFORMANCE • PRECISION • POWER • 
                 </span>
             </div>
        </div>
      </div>
      {/* --- BACKGROUND EFFECTS END --- */}

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight text-white leading-[0.9]">
              Built to <span className="text-brand-red">Dominate</span>
            </h2>
          </div>
          <div className="max-w-md text-right md:text-left">
             <p className="text-gray-400 text-sm font-medium tracking-wider uppercase border-l-2 border-brand-red pl-4">
                We don't just sell memberships. We provide the blueprint for your ultimate physical evolution.
             </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative w-full rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a]/80">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
                
                {/* Grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 border-r border-white/5">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            onClick={() => setActiveCard(activeCard === index ? null : index)}
                            className={`group relative p-10 border-b border-r border-white/5 transition-all duration-300 overflow-hidden cursor-pointer ${activeCard === index ? 'bg-white/5' : 'active:bg-white/5'}`}>
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-[#330000] via-[#1a0000] to-transparent transition-opacity duration-300 ease-out z-0 ${activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-active:opacity-100'}`} />
                            
                            {/* Red Glow */}
                            <div className={`absolute -top-20 -left-20 w-40 h-40 bg-[radial-gradient(circle,rgba(230,0,0,0.4)_0%,transparent_70%)] transition-opacity duration-300 z-0 pointer-events-none ${activeCard === index ? 'opacity-100 animate-pulse-slow' : 'opacity-0 group-hover:opacity-100 group-active:opacity-100'}`} />

                            {/* Accent Line */}
                            <div className={`absolute top-0 left-0 w-1 bg-brand-red transition-all duration-300 z-10 ${activeCard === index ? 'h-full' : 'h-0 group-hover:h-full group-active:h-full'}`} />
                            
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="mb-6 flex justify-between items-start">
                                    <div className={`p-3 bg-white/5 rounded-lg text-gray-400 transition-all duration-300 ${activeCard === index ? 'text-white bg-brand-red' : 'group-hover:text-white group-hover:bg-brand-red group-active:text-white group-active:bg-brand-red'}`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-display font-bold text-2xl text-white/10 group-hover:text-brand-red/40 transition-colors">
                                        0{index + 1}
                                    </span>
                                </div>
                                
                                <h3 className={`font-display font-bold text-xl uppercase tracking-wider text-white mb-3 transition-transform duration-300 ${activeCard === index ? 'translate-x-2' : 'group-hover:translate-x-2 group-active:translate-x-2'}`}>
                                    {feature.title}
                                </h3>
                                <p className={`text-sm font-normal leading-relaxed transition-colors ${activeCard === index ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-300 group-active:text-gray-300'}`}>
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Side Image - Optimized */}
                <div className="relative w-full lg:w-[35%] h-[400px] lg:h-auto overflow-hidden group">
                    <Image 
                        src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop" 
                        alt="Bodybuilder" 
                        className="absolute inset-0 w-full h-full object-cover object-center grayscale brightness-75 contrast-125 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="1200"
                    />
                    <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/40 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;