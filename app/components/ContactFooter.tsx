
import React from 'react';
import { Facebook, Instagram, AtSign } from 'lucide-react';
import logo from '../../assets/logo.png';
import tiktokIcon from '../../assets/tiktok-svgrepo-com.svg';
import Link from 'next/link';

const ContactFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#050505] pt-20 relative overflow-hidden">
        
      {/* Consistent Background Tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-tint via-[#050505] to-[#050505] opacity-100 pointer-events-none"></div>

      {/* --- CTA Section --- */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 mb-24">
        <div 
            className="relative w-full bg-brand-red rounded-[2.5rem] md:rounded-[4rem] overflow-hidden px-6 py-20 md:py-24 text-center group shadow-[0_20px_60px_rgba(230,0,0,0.3)] hover:scale-[1.01] transition-transform duration-500"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ 
                    backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
                    backgroundPosition: '0 0, 20px 20px',
                    backgroundSize: '40px 40px'
                 }} 
            />
            
            {/* Hover Glare - Pure CSS Animation */}
            <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-black uppercase tracking-[0.12em] mb-6">
                    Connect Engage Transform
                </h2>
                <p className="font-sans text-black/80 font-medium text-sm md:text-lg max-w-2xl mb-10 tracking-wide uppercase">
                    Join A Vibrant Community For Fuel Motivation, Engagement Drives Progress, And Transformation
                </p>

                {/* Input Field */}
                <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-lg">
                    <div className="relative w-full">
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="font-sans w-full bg-white text-black px-6 py-4 rounded-full outline-none focus:ring-4 focus:ring-black/20 transition-all font-medium placeholder:text-gray-400"
                        />
                    </div>
                    <button className="font-sans w-full md:w-auto bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-900 hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-lg border border-transparent hover:border-white/20">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* --- Footer Content --- */}
      <div className="max-w-[1400px] mx-auto px-6 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start border-t border-white/10 pt-16">
            
            {/* Column 1: Brand */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-2 mb-6 group cursor-pointer">
                    <div className="relative">
                        <img
                            src={logo.src}
                            alt="X1 Fitness"
                            className="w-24 h-24 object-contain"
                            loading="eager"
                            decoding="async"
                        />
                                            </div>
                    <span className="text-2xl font-display font-bold tracking-wide italic">
                    <span className="text-brand-red">X1</span>
                    <span className="text-white">Fitness</span>
                    </span>
                </div>
                <p className="font-sans text-gray-400 text-sm max-w-xs leading-relaxed font-medium">
                    Your Go-To For Personalized Workouts, Meal Plans, And Expert Fitness Advice.
                </p>
            </div>

            {/* Column 2: Socials & Links */}
            <div className="flex flex-col items-center justify-center">
                <h4 className="font-sans text-brand-red font-bold uppercase tracking-widest text-sm mb-6">Follow Us On</h4>
                
                {/* Social Icons - Updated to Instagram, Threads (AtSign), Facebook, TikTok */}
                <div className="flex gap-6 mb-8">
                    {[
                        { name: 'Instagram', href: 'https://www.instagram.com/x1fitness.pk/', icon: <Instagram className="w-6 h-6" /> },
                        { name: 'Threads', href: 'https://www.threads.com/@x1fitness.pk', icon: <AtSign className="w-6 h-6" /> },
                        { name: 'Facebook', href: 'https://www.facebook.com/x1fitness.pk/', icon: <Facebook className="w-6 h-6" /> },
                        {
                            name: 'TikTok',
                            href: 'https://www.tiktok.com/@x1fitness.pk',
                            icon: <img src={(tiktokIcon as unknown as { src?: string }).src ?? (tiktokIcon as unknown as string)} alt="" className="w-6 h-6" />
                        }
                    ].map(({ name, href, icon }) => (
                        <a
                            key={name}
                            href={href}
                            className="bg-white text-black p-3 rounded-lg hover:bg-brand-red hover:text-white transition-all duration-300 hover:-translate-y-1"
                            title={name}
                            aria-label={name}
                        >
                            {icon}
                        </a>
                    ))}
                </div>

                {/* Nav Links */}
                <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'About', href: '/about' },
                        { name: 'Services', href: '/services' },
                        { name: 'Contact', href: '/contact' }
                    ].map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="font-sans text-gray-400 hover:text-brand-red text-sm font-bold uppercase tracking-wider transition-colors">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
                <h4 className="font-sans text-brand-red font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
                
                <div className="font-sans space-y-4 text-sm font-medium">
                    <div className="flex flex-col md:items-end">
                        <span className="text-gray-500 mb-1 uppercase text-xs tracking-wider">Monday-Saturday</span>
                        <span className="text-white">7:00 AM - 12:00 AM</span>
                    </div>
                    
                    <div className="flex flex-col md:items-end">
                        <span className="text-gray-500 mb-1 uppercase text-xs tracking-wider">E-mail</span>
                        <a href="mailto:hello@x1fitness.com" className="text-white hover:text-brand-red transition-colors">
                            hello@x1fitness.com
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-20 pt-8 border-t border-white/5">
            <p className="text-gray-600 text-xs uppercase tracking-widest">
                © 2024 X1FITNESS. All rights reserved. Built for Greatness.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
