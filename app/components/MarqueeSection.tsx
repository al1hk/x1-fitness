
import React from 'react';
import { Dumbbell } from 'lucide-react';

const MarqueeSection: React.FC = () => {
  const words = ["UNLEASH THE BEAST", "NO PAIN NO GAIN", "CONQUER YOURSELF", "SWEAT IS WEAKNESS", "DOMINATE THE GYM"];
  
  // Duplicate the array enough times to fill width + buffer
  const content = [...words, ...words, ...words, ...words];

  return (
    <div className="relative w-full bg-black py-6 md:py-10 border-y-2 border-brand-red z-30 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

      <div className="relative flex overflow-hidden group">
        <div className="flex whitespace-nowrap animate-marquee-infinite will-change-transform">
            {content.map((text, i) => (
                <div key={i} className="flex items-center mx-4 md:mx-8">
                    <span 
                        className={`text-4xl md:text-7xl font-display font-black italic tracking-tight uppercase px-2 ${
                            i % 2 === 0 ? 'text-brand-red' : 'text-transparent stroke-white'
                        }`}
                        style={i % 2 !== 0 ? { WebkitTextStroke: '1px #fff' } : {}}
                    >
                        {text}
                    </span>
                    <Dumbbell className="w-6 h-6 md:w-10 md:h-10 text-white/20 mx-4 rotate-45" />
                </div>
            ))}
        </div>
        {/* Mirror for seamless loop */}
        <div className="flex whitespace-nowrap animate-marquee-infinite will-change-transform absolute top-0 left-0 translate-x-[100%]">
             {content.map((text, i) => (
                <div key={`dup-${i}`} className="flex items-center mx-4 md:mx-8">
                    <span 
                        className={`text-4xl md:text-7xl font-display font-black italic tracking-tight uppercase px-2 ${
                            i % 2 === 0 ? 'text-brand-red' : 'text-transparent stroke-white'
                        }`}
                        style={i % 2 !== 0 ? { WebkitTextStroke: '1px #fff' } : {}}
                    >
                        {text}
                    </span>
                    <Dumbbell className="w-6 h-6 md:w-10 md:h-10 text-white/20 mx-4 rotate-45" />
                </div>
            ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-infinite {
          /* Slowed significantly for elite readability and brand feel */
          animation: marquee-infinite 80s linear infinite;
        }
        /* Mobile adjustment for balanced speed */
        @media (max-width: 768px) {
            .animate-marquee-infinite {
                animation-duration: 50s;
            }
        }
        .will-change-transform {
            will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default MarqueeSection;
