"use client";

import React, { useState } from 'react';

const facilities = [
  {
    id: 1,
    title: "IRON SANCTUARY",
    description: "10,000 sq ft of Hammer Strength equipment, calibrated plates, and monolithic dumbbell racks up to 150lbs.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "CARDIO DECK",
    description: "Immersive endurance zone featuring Peloton bikes, Woodway treadmills, and Concept2 rowers overlooking the city.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "CROSSFIT ARENA",
    description: "Official affiliate box equipped with Rogue rigs, Olympic platforms, and high-ceilings for rope climbs.",
    image: "https://images.unsplash.com/photo-1517963879466-e825c1d42893?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "COMBAT ZONE",
    description: "Professional-grade boxing ring, heavy bags, speed bags, and mat space for MMA and BJJ training.",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "RECOVERY LAB",
    description: "Advanced recovery suite including cryotherapy chambers, infrared saunas, and cold plunge therapy.",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2525&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "FUNCTIONAL TURF",
    description: "50m indoor turf track dedicated to sled pushes, sprints, agility drills, and plyometric work.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
  }
];

const FacilitiesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="relative w-full py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* --- BACKGROUND EFFECTS START --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Consistent Red Tint Background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-brand-tint via-[#050505] to-brand-tint opacity-100"></div>

        {/* 2. Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        {/* 3. Ambient Red Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(230,0,0,0.05)_0%,transparent_70%)]"></div>

        {/* 4. Marquee Background */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rotate-[5deg] scale-110 pointer-events-none overflow-hidden opacity-15">
             <div className="flex whitespace-nowrap animate-marquee-right will-change-transform" style={{ animationDuration: '120s' }}>
                 <span className="text-[15vw] font-display font-black italic text-transparent px-10" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)' }}>
                    IRON • SANCTUARY • ELITE • 
                 </span>
                 <span className="text-[15vw] font-display font-black italic text-transparent px-10" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)' }}>
                    IRON • SANCTUARY • ELITE • 
                 </span>
             </div>
        </div>
      </div>
      {/* --- BACKGROUND EFFECTS END --- */}

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm block mb-2">
                Built For Performance
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight text-white leading-none">
                World Class <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>Facilities</span>
            </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => {
            const isActive = activeId === facility.id;
            return (
              <div 
                key={facility.id}
                onClick={() => toggleCard(facility.id)}
                className={`
                    group relative h-[400px] rounded-sm overflow-hidden cursor-pointer border-t border-b border-white/10 hover:border-brand-red/50
                    transition-all duration-300 ease-out
                    ${isActive ? 'z-20 shadow-lg' : 'grayscale hover:grayscale-0'}
                `}
              >
                {/* Background Image */}
                <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-out will-change-transform"
                    style={{ 
                        backgroundImage: `url(${facility.image})`,
                        transform: isActive ? 'scale(1.05)' : 'scale(1.0)'
                    }}
                />
                
                {/* Overlay - Significantly brighter by default */}
                <div className={`
                    absolute inset-0 transition-colors duration-300
                    ${isActive ? 'bg-brand-red/40' : 'bg-black/20 group-hover:bg-black/10'}
                `}></div>
                
                {/* Dark Gradient for Text Readability - Reduced opacity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Index Number */}
                <div className="absolute top-6 left-6 z-10">
                    <span className={`text-4xl font-display font-bold transition-colors duration-300 ${isActive ? 'text-brand-red' : 'text-white/10 group-hover:text-white'}`}>
                        0{index + 1}
                    </span>
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    
                    {/* Title */}
                    <h3 className={`
                        text-3xl font-display font-bold text-white uppercase tracking-wider mb-2
                        transition-transform duration-300 ease-out origin-left
                        ${isActive ? 'translate-y-[-10px] text-brand-red' : 'translate-y-0'}
                    `}>
                        {facility.title}
                    </h3>

                    {/* Indicator Line */}
                    <div className={`
                        h-0.5 bg-brand-red mb-4
                        transition-all duration-300 ease-out
                        ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-12 group-hover:opacity-100'}
                    `}></div>

                    {/* Description */}
                    <div className={`
                        overflow-hidden transition-all duration-300 ease-out
                        ${isActive ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                    `}>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal">
                            {facility.description}
                        </p>
                    </div>

                    {/* Plus Icon */}
                    <div className={`
                        absolute top-6 right-6
                        transition-all duration-300 transform
                        ${isActive ? 'rotate-45 text-brand-red' : 'rotate-0 text-white/50 group-hover:text-white'}
                    `}>
                        <div className="text-3xl font-light leading-none">+</div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;