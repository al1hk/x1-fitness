"use client";

import React, { useState } from 'react';
import { Dumbbell, Users, Laptop, Trophy, ArrowUpRight } from 'lucide-react';
import Image from './Image';

const services = [
  {
    id: 1,
    title: "1-on-1 Training",
    description: "Personalized coaching to shatter your limits. We build the roadmap; you put in the work.",
    price: "From $80/session",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Group Warfare",
    description: "High-intensity group classes. Compete, sweat, and dominate together.",
    price: "From $150/month",
    icon: Users,
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Online Coaching",
    description: "World-class programming delivered to your phone. Train anywhere, anytime.",
    price: "From $200/month",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Competition Prep",
    description: "Elite physique sculpting for bodybuilders and athletes ready for the stage.",
    price: "Custom Plan",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
  }
];

const ServiceCard: React.FC<{
  service: typeof services[0];
  isActive: boolean;
  onToggle: () => void;
}> = ({ service, isActive, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`group relative h-[450px] rounded-xl overflow-hidden cursor-pointer bg-[#0a0a0a] border border-white/5 hover:border-brand-red/50 transition-all duration-500 active:scale-[0.99] ${isActive ? 'border-brand-red/50 shadow-[0_0_0_1px_rgba(230,0,0,0.25)]' : ''}`}
    >
        
        {/* --- IMAGE LAYER WITH RED GRADING --- */}
        <div className="absolute inset-0 overflow-hidden">
            <Image 
                src={service.image} 
                alt={service.title} 
                className={`w-full h-full object-cover transition-transform duration-700 ease-out filter grayscale brightness-75 contrast-125 ${isActive ? 'scale-105' : 'group-hover:scale-105 group-active:scale-105'}`}
                loading="lazy"
                decoding="async"
                width="600"
                height="450"
            />
            <div className={`absolute inset-0 bg-brand-red mix-blend-multiply transition-opacity duration-500 ease-out ${isActive ? 'opacity-30' : 'opacity-0 group-hover:opacity-30 group-active:opacity-30'}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
            {/* Icon Box */}
            <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-none skew-x-[-10deg] bg-white/5 backdrop-blur-none border border-white/10 group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all duration-300">
                <service.icon className="w-5 h-5 text-gray-400 group-hover:text-white skew-x-[10deg] transition-colors" />
            </div>

            {/* Text Content */}
            <div className={`transform transition-transform duration-500 ease-out ${isActive ? 'translate-y-0' : 'md:translate-y-2 md:group-hover:translate-y-0'}`}>
                <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-3xl font-display font-bold uppercase text-white tracking-wide">
                        {service.title}
                    </h3>
                </div>
                
                <p className={`text-gray-400 text-sm mb-6 transition-opacity duration-500 delay-75 leading-relaxed font-normal ${isActive ? 'opacity-100' : 'opacity-0 md:opacity-0 md:group-hover:opacity-100'}`}>
                    {service.description}
                </p>

                <div className={`flex items-center justify-between border-t border-white/10 pt-4 transition-opacity duration-500 delay-100 ${isActive ? 'opacity-100' : 'opacity-0 md:opacity-0 md:group-hover:opacity-100'}`}>
                     <span className="text-brand-red font-bold uppercase tracking-wider text-xs">
                        {service.price}
                     </span>
                     <ArrowUpRight className="w-5 h-5 text-brand-red" />
                </div>
            </div>
        </div>
    </div>
  );
};

const ServiceRow: React.FC<{ service: typeof services[0]; showEngage?: boolean }> = ({
  service,
  showEngage = true,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/90 hover:border-brand-red/50 transition-colors cursor-pointer active:bg-white/5 active:scale-[0.995] transition-transform">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,0,0,0.18),transparent_55%)]"></div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 md:p-8">
        <div className="relative w-full md:w-[220px] h-[140px] rounded-xl overflow-hidden border border-white/10">
          <Image
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover filter grayscale brightness-75 contrast-125 group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            decoding="async"
            width="440"
            height="280"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent"></div>
          <div className="absolute top-3 left-3 w-10 h-10 flex items-center justify-center rounded-lg bg-brand-red/90 border border-brand-red text-black">
            <service.icon className="w-5 h-5" />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-start justify-between gap-6">
              <h3 className="text-3xl font-display font-bold uppercase text-white tracking-wide">
                {service.title}
              </h3>
              <span className="shrink-0 text-brand-red font-bold uppercase tracking-wider text-xs">
                {service.price}
              </span>
            </div>
            <p className="mt-4 text-gray-400 leading-relaxed font-normal text-sm">
              {service.description}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
            {showEngage && (
              <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold">
                Engage
              </span>
            )}
            <ArrowUpRight className="w-5 h-5 text-brand-red" />
          </div>
        </div>
      </div>
    </div>
  );
};

type ServicesSectionProps = {
  variant?: 'landing' | 'services';
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ variant = 'landing' }) => {
  const isServicesVariant = variant === 'services';
  const [activeServiceId, setActiveServiceId] = useState<number | null>(null);

  return (
    <section
      id="services"
      className={`relative w-full py-24 overflow-hidden border-t border-white/5 ${
        isServicesVariant ? 'bg-[#060606]' : 'bg-[#050505]'
      }`}
    >
      
      {/* --- BACKGROUND EFFECTS START --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {isServicesVariant ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0b] via-[#050505] to-brand-tint opacity-100"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,0,0,0.10),transparent_62%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1px_7px] opacity-20"></div>
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] bg-brand-red/10 rounded-full blur-[160px]"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/35 to-transparent"></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-tint via-[#050505] to-brand-tint opacity-100"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-red/5 rounded-full blur-[120px]"></div>
            <div className="absolute top-0 right-0 w-full opacity-10 rotate-[5deg] scale-110 pointer-events-none">
              <div className="flex whitespace-nowrap animate-marquee-left will-change-transform">
                <span
                  className="text-[20vw] font-display font-black italic text-transparent px-10"
                  style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}
                >
                  TACTICAL • TRAINING • WARFARE •
                </span>
                <span
                  className="text-[20vw] font-display font-black italic text-transparent px-10"
                  style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}
                >
                  TACTICAL • TRAINING • WARFARE •
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      {/* --- BACKGROUND EFFECTS END --- */}

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {isServicesVariant ? (
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-brand-red/30 text-brand-red font-bold tracking-[0.2em] uppercase text-xs">
                Our Arsenal
              </span>
              <h2 className="mt-6 text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight leading-[0.9]">
                Choose Your{' '}
                <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>
                  Weapon
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
              <div className="mt-4 h-px w-2/3 bg-gradient-to-r from-brand-red/70 to-transparent"></div>
            </div>
          </div>
        ) : (
          <div className="mb-16 flex flex-col items-start gap-2">
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm">Our Arsenal</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight">
              Choose Your{' '}
              <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>
                Weapon
              </span>
            </h2>
          </div>
        )}

        {isServicesVariant ? (
          <div className="space-y-6">
            {services.map((service) => (
              <ServiceRow key={service.id} service={service} showEngage={false} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isActive={activeServiceId === service.id}
                onToggle={() =>
                  setActiveServiceId((prev) => (prev === service.id ? null : service.id))
                }
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;