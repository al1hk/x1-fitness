import React from 'react';
import ContactFooter from '../ContactFooter';
import { Target, Shield, Users, Zap, Clock, Trophy } from 'lucide-react';
import Image from '../Image';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-brand-dark overflow-hidden relative">
      
      {/* --- GLOBAL AMBIENT RED SHADING --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Right Red Glow */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(230,0,0,0.08)_0%,transparent_70%)] blur-[60px]"></div>
        {/* Bottom Left Red Glow */}
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(230,0,0,0.06)_0%,transparent_70%)] blur-[80px]"></div>
        {/* Center subtle pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(50,0,0,0.2)_0%,transparent_80%)]"></div>
      </div>

      {/* 1. Hero Section with Gritty Background */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
             <Image 
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" 
                alt="Gym Background"
                className="w-full h-full object-cover filter grayscale brightness-[0.4] contrast-125" 
                loading="eager"
                decoding="async"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
             <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#050505_120%)]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6 animate-fade-in-up">
            <div className="inline-block mb-4 border border-brand-red/30 bg-brand-red/10 px-4 py-1 rounded-sm">
                <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Identity & Ethos</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-bold uppercase text-white leading-none tracking-tight mb-6 drop-shadow-2xl">
                Unbreakable <br/>
                <span className="relative">
                    <span className="absolute inset-0 text-brand-red blur-sm opacity-50" aria-hidden="true">Spirit</span>
                    <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>Spirit</span>
                </span>
            </h1>
        </div>
      </div>

      {/* 2. Manifesto / Origin - Split Layout */}
      <div className="relative py-24 px-6 border-b border-white/5 bg-[#080808]/80 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase leading-[0.9]">
                    Built From <br/><span className="text-brand-red">The Heart</span>
                </h2>
                <div className="space-y-6 text-gray-400 font-medium leading-relaxed text-lg border-l-2 border-brand-red/50 pl-6">
                    <p>
                        We built X1 Fitness with love, passion, and a deep commitment to give our community something truly special. From day one, our vision has been to create a fitness space that is one of a kind — a place where modern equipment, professional guidance, and an inspiring atmosphere come together to help every member become the best version of themselves.
                    </p>
                    <p>
                        X1 Fitness stands out because we use premium and latest equipment to enhance the entire workout experience, from tracking progress to optimizing training routines. We also offer separate timings for women, ensuring comfort, privacy, and a supportive environment. Our team includes certified male and female trainers for men and women, so every member gets the guidance they deserve.
                    </p>
                    <p>
                        The facility features modern cardio, well-maintained and premium machines, and a vibrant, motivating atmosphere that boosts energy the moment you walk through the door. Everything here — the lighting, the layout, the music, the environment — has been designed to make members feel inspired and confident.
                    </p>
                    <p>
                        For us, X1 Fitness is more than a gym. It’s a community-driven space built from the heart, where every detail reflects our dedication to help society live healthier, stronger, and happier lives. We’re truly grateful to everyone who chooses to be part of the X1 family.
                    </p>
                </div>
                
                {/* Stats Strip */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                    <div>
                        <span className="block text-4xl font-display font-bold text-white">2014</span>
                        <span className="text-xs uppercase tracking-widest text-brand-red font-bold">Est.</span>
                    </div>
                    <div>
                        <span className="block text-4xl font-display font-bold text-white">5k+</span>
                        <span className="text-xs uppercase tracking-widest text-brand-red font-bold">Members</span>
                    </div>
                    <div>
                        <span className="block text-4xl font-display font-bold text-white">100%</span>
                        <span className="text-xs uppercase tracking-widest text-brand-red font-bold">Heart</span>
                    </div>
                </div>
            </div>
            
            <div className="relative order-1 lg:order-2 group">
                {/* Decorative Elements */}
                <div className="absolute inset-0 border-2 border-brand-red translate-x-4 translate-y-4 rounded-sm opacity-50 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <div className="relative z-10 overflow-hidden rounded-sm">
                    <Image 
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200" 
                        alt="Gym Interior"
                        className="w-full h-auto grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                        width="1200"
                        height="800"
                    />
                    <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
            </div>
        </div>
      </div>

      {/* 3. Core Directives (Values) */}
      <div className="py-32 bg-transparent relative overflow-hidden z-10">
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm">The Code</span>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase mt-2">Core Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Target, title: "Precision", desc: "We provide modern equipment and data-driven tracking to optimize your fitness journey with absolute accuracy." },
                    { icon: Shield, title: "Support", desc: "A supportive environment with separate timings for women, ensuring privacy, comfort, and confidence for all." },
                    { icon: Users, title: "Community", desc: "More than a gym, we are a family. We grow stronger together, fostering a culture of encouragement and respect." }
                ].map((item, i) => (
                    <div key={i} className="group bg-[#0a0a0a]/90 border border-white/5 p-10 hover:border-brand-red/50 transition-all duration-500 relative overflow-hidden rounded-sm hover:-translate-y-2">
                        {/* Giant Icon Background */}
                        <div className="absolute -top-6 -right-6 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12 group-hover:rotate-0">
                            <item.icon className="w-40 h-40" />
                        </div>
                        
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm mb-8 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 shadow-lg">
                                <item.icon className="w-8 h-8 text-white/70 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-3xl font-display font-bold text-white uppercase mb-4 tracking-wide group-hover:text-brand-red transition-colors">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium group-hover:text-gray-300 transition-colors">{item.desc}</p>
                        </div>
                        
                        {/* Bottom Active Line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                ))}
            </div>
          </div>
      </div>

      {/* 4. Team Section */}
      <div className="bg-[#080808] py-24 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm">Leadership</span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase">Expert <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>Trainers</span></h2>
                </div>
                <div className="h-[1px] flex-1 bg-white/10 hidden md:block mb-4 mx-8"></div>
                <button className="text-white uppercase font-bold tracking-widest text-sm hover:text-brand-red transition-colors">View All Coaches &rarr;</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { name: "Alex Sterling", role: "Head Coach", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80" },
                    { name: "Sarah Connor", role: "Strength Spec.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
                    { name: "Marcus Kane", role: "HIIT Lead", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80" },
                    { name: "Elena R.", role: "Nutritionist", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80" }
                ].map((member, i) => (
                    <div key={i} className="group relative h-[450px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/5 bg-[#0a0a0a]">
                        <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                        <Image 
                            src={member.img} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            loading="lazy" 
                            decoding="async"
                            width="800"
                            height="1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 z-20"></div>
                        <div className="absolute bottom-0 left-0 w-full p-6 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-2xl font-display font-bold text-white uppercase mb-1">{member.name}</h3>
                            <div className="flex items-center gap-2">
                                <div className="h-[1px] w-8 bg-brand-red"></div>
                                <p className="text-gray-300 font-bold tracking-wider text-xs uppercase">{member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <ContactFooter />
      
      <style>{`
        .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default About;