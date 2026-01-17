"use client";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50 });

    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId: number;

    const updatePosition = () => {
      gsap.set(cursor, { x: mouseX, y: mouseY });
      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => gsap.to([cursor, follower], { scale: 0.8, duration: 0.2 });
    const handleMouseUp = () => gsap.to([cursor, follower], { scale: 1, duration: 0.2 });

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, .cursor-pointer')) {
        gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.2 });
        gsap.to(follower, { 
            scale: 2.5, 
            backgroundColor: 'rgba(230, 0, 0, 0.1)',
            borderColor: 'transparent',
            duration: 0.2 
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, .cursor-pointer')) {
        gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.2 });
        gsap.to(follower, { 
            scale: 1, 
            backgroundColor: 'transparent',
            borderColor: '#E60000',
            duration: 0.2 
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
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
        }
        @media (pointer: coarse) {
            .cursor-element { display: none; }
        }
      `}</style>
      
      {/* Main Cursor Dot */}
      <div 
        ref={cursorRef} 
        className="cursor-element w-2.5 h-2.5 bg-brand-red rounded-full shadow-[0_0_10px_rgba(230,0,0,0.8)]"
      />
      
      {/* Follower Ring */}
      <div 
        ref={followerRef} 
        className="cursor-element w-12 h-12 border border-brand-red/50 rounded-full transition-colors duration-300"
      />
    </>
  );
};

export default CustomCursor;