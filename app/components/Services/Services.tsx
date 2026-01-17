"use client";

import React, { useState } from 'react';
import ContactFooter from '../ContactFooter';
import ServicesSection from '../ServicesSection';
import { 
  Plus, 
  Minus, 
  Search, 
  Crosshair, 
  BarChart2, 
  Flag, 
  Shield, 
  Zap, 
  Activity, 
  Target 
} from 'lucide-react';

const Services: React.FC = () => {
    // FAQ State
    const [openFaq, setOpenFaq] = useState<number | null>(null);

     const protocolSteps = [
        { icon: Search, title: "Intel Gathering", desc: "Comprehensive biometric screening and mobility assessment to identify mechanical weaknesses." },
        { icon: Crosshair, title: "Strategic Planning", desc: "Developing a custom periodization plan tailored to your specific physical objectives." },
        { icon: Flag, title: "Deployment", desc: "High-intensity execution under expert supervision. We push you to the breaking point and back." },
        { icon: BarChart2, title: "After Action Report", desc: "Granular data analysis and progress tracking to refine the strategy for the next cycle." },
        { icon: Shield, title: "Tactical Refinement", desc: "Fine-tuning movement patterns and technical execution based on initial field performance." },
        { icon: Zap, title: "Resilience Protocol", desc: "Advanced recovery techniques and bio-hacking to ensure constant operational readiness." },
        { icon: Activity, title: "Simulated Stress", desc: "Testing physical and mental capacity under high-load environmental conditions and chaos." },
        { icon: Target, title: "Mission Mastery", desc: "Final evaluation of key performance indicators and transition into elite-tier operations." }
    ];


  return (
    <div className="pt-20 min-h-screen bg-brand-dark overflow-hidden">
      
      {/* 1. Services Hero - Tactical HUD Style */}
      <div className="relative py-32 lg:py-40 px-6 overflow-hidden bg-[#050505]">
         {/* Background Elements */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,0,0,0.15),transparent_60%)]"></div>
         {/* Tech Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto text-center relative z-10 animate-fade-in">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold uppercase text-white mb-8 tracking-tight">
                Tactical <br />
                <span className="text-brand-red">Operations</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium tracking-wide border-t border-brand-red/30 pt-8">
                Choose your protocol. From private tactical training to mass group warfare, we have the blueprint for your physical evolution.
            </p>
         </div>
      </div>

      {/* 2. Services Grid (Reused) */}
      <div className="bg-[#080808] relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <ServicesSection variant="services" />
      </div>

    <div className="py-32 px-6 relative bg-[#050505] overflow-hidden">
         {/* Background Map Effect */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         
         {/* Horizontal Divider Lines for Grid Rows */}
         <div className="absolute top-[38%] left-0 w-full h-[1px] bg-brand-red/10 hidden lg:block"></div>
         
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
                <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm">Methodology</span>
                <h2 className="text-5xl font-display font-bold text-white uppercase mt-2">
                    The <span className="stroke-white">Protocol</span>
                </h2>
            </div>

            {/* Grid Layout: 1 col on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24 relative">
                {protocolSteps.map((step, i) => (
                    <div key={i} className="relative group">
                        {/* Step Number Background */}
                        <div className="absolute -top-12 -left-4 text-[100px] lg:text-[120px] font-display font-bold text-white/5 z-0 leading-none select-none group-hover:text-brand-red/10 transition-colors">
                            {i < 9 ? `0${i+1}` : i+1}
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 pt-10">
                            <div className="w-16 h-16 bg-[#111] border border-brand-red/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.2)]">
                                <step.icon className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-display font-bold text-white uppercase mb-4 tracking-tight group-hover:text-brand-red transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed font-medium text-sm">
                                {step.desc}
                            </p>
                        </div>
                        
                        {/* Connector Line (Desktop 4-col logic: don't show on last item of row) */}
                        {((i + 1) % 4 !== 0) && (
                            <div className="hidden lg:block absolute top-[85px] -right-[60px] w-[100px] h-[1px] bg-gradient-to-r from-brand-red/40 to-transparent z-0"></div>
                        )}
                        {/* Connector Line (Tablet 2-col logic) */}
                        {((i + 1) % 2 !== 0) && (
                            <div className="hidden sm:block lg:hidden absolute top-[85px] -right-[30px] w-[60px] h-[1px] bg-gradient-to-r from-brand-red/40 to-transparent z-0"></div>
                        )}
                    </div>
                ))}
            </div>
         </div>
      </div>


      {/* 4. FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 pb-32 pt-12">
        <h2 className="text-3xl font-display font-bold text-white uppercase mb-8 border-b border-white/10 pb-4">Mission Intel (FAQ)</h2>
        <div className="space-y-4">
            {[
                {q: "Can I freeze my membership?", a: "Affirmative. You can freeze your account for up to 3 months per year for medical or travel reasons. Protocol requires a 7-day notice."},
                {q: "Do you offer day passes?", a: "Yes. Drop-in for a single mission for $25. If you sign up within 24 hours, the drop-in fee goes towards your first month."},
                {q: "Is personal training included?", a: "Personal training is a separate directive unless you are on the Commander tier, which includes one tactical assessment session monthly."}
            ].map((item, i) => (
                <div key={i} className="border border-white/5 bg-[#0a0a0a] group hover:border-white/10 transition-colors">
                    <button 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex justify-between items-center p-6 text-left"
                    >
                        <span className={`text-lg font-bold uppercase tracking-wide transition-colors ${openFaq === i ? 'text-brand-red' : 'text-white group-hover:text-gray-300'}`}>
                            {item.q}
                        </span>
                        {openFaq === i ? <Minus className="text-brand-red"/> : <Plus className="text-gray-500"/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-6 pt-0 text-gray-400 font-medium leading-relaxed border-t border-white/5 mt-[-10px]">
                            {item.a}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <ContactFooter />
      
      <style>{`
        @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
        .animate-scan {
            animation: scan 3s linear infinite;
        }
        .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Services;