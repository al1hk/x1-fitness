import React from 'react';

const DynamicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      
      {/* 1. Global Red Color Grading (Simple Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#150303] via-[#050000] to-[#000000] z-[0]"></div>
      
      {/* 2. Global Vignette - Reduced opacity for performance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)] z-[5]"></div>

      {/* Removed texture overlay (stardust.png) to save pixel fill rate bandwidth */}

      {/* 3. Ambient Red Sheen (Simplified Layers) */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(230,0,0,0.06)_0%,transparent_60%)] pointer-events-none transform-gpu will-change-transform"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(230,0,0,0.06)_0%,transparent_60%)] pointer-events-none transform-gpu will-change-transform"></div>

    </div>
  );
};

export default DynamicBackground;