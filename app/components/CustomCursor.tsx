"use client";

import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  
  // Use refs for mutable state to avoid re-renders
  const pos = useRef({ x: -100, y: -100 });
  const mouse = useRef({ x: -100, y: -100 });
  const speed = 0.15; // Smoothness factor

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Update the dot immediately for responsiveness
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    // Animation Loop for the follower
    let animationFrameId: number;
    
    const loop = () => {
      // Linear interpolation for smooth trailing effect
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      if (follower) {
        follower.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      animationFrameId = requestAnimationFrame(loop);
    };

    // Start loop
    loop();

    const handleMouseDown = () => {
        cursor.classList.add('scale-75');
        follower.classList.add('scale-75');
    };

    const handleMouseUp = () => {
        cursor.classList.remove('scale-75');
        follower.classList.remove('scale-75');
    };

    const handleLinkHover = () => {
        cursor.classList.add('opacity-0');
        follower.classList.add('scale-[2.5]', 'bg-brand-red/10', 'border-transparent');
    };

    const handleLinkLeave = () => {
        cursor.classList.remove('opacity-0');
        follower.classList.remove('scale-[2.5]', 'bg-brand-red/10', 'border-transparent');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const handleMouseOver = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('a, button, .cursor-pointer')) {
            handleLinkHover();
        }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('a, button, .cursor-pointer')) {
            handleLinkLeave();
        }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-element {
            pointer-events: none;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
            will-change: transform;
            backface-visibility: hidden;
            contain: layout style size; /* Optimization: tells browser this element doesn't affect others */
        }
        #cursor-follower {
            transition: width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s;
        }
        #cursor-dot {
             transition: opacity 0.2s;
        }
        @media (pointer: coarse) {
            .cursor-element { display: none; }
        }
      `}</style>
      
      <div 
        ref={cursorRef} 
        id="cursor-dot"
        className="cursor-element w-2.5 h-2.5 bg-brand-red rounded-full shadow-sm"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
      
      <div 
        ref={followerRef} 
        id="cursor-follower"
        className="cursor-element w-12 h-12 border border-brand-red/50 rounded-full"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </>
  );
};

export default CustomCursor;