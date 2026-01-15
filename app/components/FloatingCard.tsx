import React from 'react';

interface FloatingCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ icon, label, value }) => {
  return (
    <div className="relative group cursor-none pointer-events-auto select-none">
      {/* Card Container - Removed backdrop-blur for performance */}
      <div className="relative overflow-hidden bg-[#111] border border-white/10 p-5 min-w-[160px] rounded-sm transition-all duration-500 hover:border-brand-red/50 hover:bg-[#1a1a1a] hover:translate-y-[-5px] shadow-lg">
        
        {/* Simplified sheen - opacity only */}
        <div className="absolute inset-0 bg-white/5 translate-x-[-150%] skew-x-[-20deg] group-hover:animate-sheen pointer-events-none" />
        
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-500 group-hover:w-full" />
        
        {/* Content */}
        <div className="flex flex-col gap-3 relative z-10">
            <div className="flex items-center justify-between">
                <div className="p-2 bg-white/5 rounded-md text-brand-red group-hover:text-white group-hover:bg-brand-red transition-colors duration-300">
                    {icon}
                </div>
                {/* Status Dot */}
                <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                </div>
            </div>
            
            <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-bold group-hover:text-brand-red transition-colors duration-300">{label}</span>
                <div className="text-2xl md:text-3xl font-display font-bold text-white mt-1 tracking-wide">
                    {value}
                </div>
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes sheen {
            0% { transform: translateX(-150%) skewX(-20deg); }
            100% { transform: translateX(150%) skewX(-20deg); }
        }
        .animate-sheen {
            animation: sheen 0.7s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default FloatingCard;