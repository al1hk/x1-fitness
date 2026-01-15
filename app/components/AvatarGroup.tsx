import React from 'react';
import Image from './Image';

const AvatarGroup: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
  ];

  return (
    <div className="flex -space-x-3">
      {images.map((src, index) => (
        <div 
          key={index} 
          className="w-10 h-10 rounded-full border-2 border-brand-dark overflow-hidden relative z-10 transition-transform hover:translate-y-[-2px]"
        >
          <Image src={src} alt="User" className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-red flex items-center justify-center relative z-0">
         <span className="text-[10px] font-bold text-black">+</span>
      </div>
    </div>
  );
};

export default AvatarGroup;