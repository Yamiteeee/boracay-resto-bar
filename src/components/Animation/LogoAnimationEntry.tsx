'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// ─── 1. EXTRACT STYLING OUTSIDE COMPONENT LIFECYCLE ───
const STATIC_CSS_ENGINE = `
  .gpu-layer { will-change: transform, opacity, filter; transform: translateZ(0); }
  
  /* --- Sharp Silhouette Palm Tree Animation --- */
  .palm-silhouette {
    opacity: 0;
    transform: scale(0.85);
    animation: revealPalm 1.2s cubic-bezier(.16,1,.3,1) forwards 0.2s;
  }

  /* --- Warm Restobar Amber Neon Glow Flare --- */
  .neon-glow-unit {
    filter: drop-shadow(0 0 0px rgba(245, 158, 11, 0));
    animation: igniteGlow 1.2s cubic-bezier(.25, 1, .5, 1) forwards 1.4s;
  }

  /* --- Text Elements Stagger Core --- */
  .char-up { transform: translateY(110%); animation: slideUp 0.8s cubic-bezier(.16,1,.3,1) forwards; }
  .loc-up { transform: translateY(105%); animation: slideUp 0.8s cubic-bezier(.16,1,.3,1) forwards 1.5s; }
  .div-fade { opacity: 0; animation: fadeIn 0.8s ease forwards 1.7s; }
  
  @keyframes revealPalm { 
    to { 
      opacity: 1;
      transform: scale(1);
    } 
  }
  @keyframes slideUp { to { transform: translateY(0%); } }
  @keyframes fadeIn { to { opacity: 1; } }
  
  @keyframes igniteGlow { 
    to { 
      filter: drop-shadow(0 0 12px rgba(217, 119, 6, 0.45)) drop-shadow(0 0 35px rgba(245, 158, 11, 0.2));
      color: #fef3c7;
    } 
  }

  /* --- Inner Ice Text Dissolve --- */
  .core-content { transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
  .exit-active .core-content { 
    opacity: 0; 
    transform: scale(0.97); 
    filter: blur(10px) brightness(1.3); 
  }
`;

export default function LogoAnimationEntry() {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), 2800);
    return () => clearTimeout(exitTimer);
  }, []);

  // ─── 2. FREEZE TEXT ARRAY REFERENCES ───
  const brandChars = useMemo(() => ['A', 'p', 'l', 'a', 'y', 'a'], []);
  const restobarChars = useMemo(() => ['r', 'e', 's', 't', 'o', ' ', '•', ' ', 'b', 'a', 'r'], []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.02,
        filter: "blur(20px) brightness(1.1)",
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } 
      }}
      // 📱 MOBILE FIXED: Added side horizontal padding (px-6) so text can never touch edge screens on small devices
      className="fixed inset-0 z-[9999] bg-[#070605] flex items-center justify-center select-none overflow-hidden pointer-events-none transform translate-z-0 px-6"
    >
      <style dangerouslySetInnerHTML={{ __html: STATIC_CSS_ENGINE }} />
      
      {/* ── CINEMATIC VEIL WRAPPER ── */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center ${isExiting ? 'exit-active' : ''}`}>
        
        {/* ── CORE CENTRAL GRAPHIC ARCHITECTURE ── */}
        <div className="core-content flex flex-col items-center justify-center gpu-layer neon-glow-unit text-[#e5c57b] w-full max-w-md">
          
          {/* Real Solid Palm Icon Unit */}
          {/* 📱 MOBILE FIXED: Scaled down slightly for tiny mobile views (scale-90) and scaled up gracefully for tablet/desktop */}
          <div className="mb-6 transform scale-90 sm:scale-110 md:scale-125 transition-transform">
            <svg
              width="84"
              height="84"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="overflow-visible flex-shrink-0 palm-silhouette"
            >
              {/* Ground Base */}
              <path d="M2 22c5-1 15-1 20 0-.5-1-3-1.5-10-1.5S2.5 21 2 22z" />

              {/* Tapered Trunk */}
              <path d="M13.5 20.5c-.2-2-.5-4.2-1.2-6.2l1-.3c-.8-2-1.5-4-2.5-5.8-.4 1.8-.7 3.7-.8 5.5l.9.1c-.2 2.2-.4 4.5-.4 6.7h3z" />

              {/* Top Canopy Center */}
              <path d="M11 8.2c-.2-1.5-1-3.5-2.5-4.7C7 2.3 5 1.8 3 1.8c2 1 3.5 2.8 4 4.7.3 1.2.5 2.3.5 3.2.9-.5 2.2-.9 3.5-1.5z" />
              
              {/* Left Side Mid-Frond */}
              <path d="M10.2 9c-1.3-.8-3-1.8-5-2-2.5-.2-4.7.5-6.2 1.7 2 .2 3.8 1.2 5 2.8.8 1 1.4 2 1.8 3 .6-2.1 2.2-4.1 4.4-5.5z" />
              
              {/* Left Bottom Droop Frond */}
              <path d="M10.2 10.5c-1-.2-2.5-.3-4 0C4 11 2.3 12.2 1 14c1.7-.8 3.5-1 5.2-.6 1.3.4 2.5 1 3.3 1.8.1-1.6.4-3.1.7-4.7z" />

              {/* Right Side Mid-Frond */}
              <path d="M11.5 8.8c1.3-.9 3-1.8 5-2.1 2.5-.3 4.8.3 6.3 1.5-1.9.3-3.6 1.4-4.8 3.1-.7 1-1.2 2.2-1.5 3.3-.7-2.1-2.4-4.1-5-5.8z" />

              {/* Right Bottom Droop Frond */}
              <path d="M12 10.4c1-.1 2.4.1 3.8.7 2.1.8 3.6 2.3 4.7 4.2-1.6-1-3.4-1.4-5.2-1.3-1.3.1-2.5.6-3.4 1.3.1-1.6.1-3.2.1-4.9z" />
            </svg>
          </div>

          {/* Text Layout */}
          <div className="flex flex-col items-center text-center w-full">
            {/* Main Brand Identifier Header */}
            {/* 📱 MOBILE FIXED: Shifted text to fluid sizes (text-4xl to sm:text-6xl) so it naturally wraps/resizes gracefully */}
            <div className="flex items-baseline justify-center font-serif italic font-light text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none text-[#ecd49a] w-full">
              {brandChars.map((char, i) => (
                // 📱 MOBILE FIXED: Changed fixed px height container to font-relative em height (h-[1.2em]) to stop text-clipping
                <span key={i} className="inline-block overflow-hidden h-[1.2em]">
                  <span className="inline-block char-up" style={{ animationDelay: `${550 + i * 50}ms` }}>{char}</span>
                </span>
              ))}
            </div>

            {/* Sub-Brand Marker */}
            {/* 📱 MOBILE FIXED: Reduced tracking on small viewports so letters don't wrap onto separate lines */}
            <div className="flex justify-center font-sans text-[10px] sm:text-xs font-black tracking-[0.3em] sm:tracking-[0.45em] uppercase text-amber-600/70 mt-3 h-[1.5em] overflow-hidden w-full">
              {restobarChars.map((char, i) => (
                <span key={i} className="inline-block char-up" style={{ animationDelay: `${950 + i * 40}ms` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>

            {/* Subtitle Station Location Anchor */}
            {/* 📱 MOBILE FIXED: Adjusted tracking and layout mask to em heights to support tablet/mobile fluid scaling */}
            <div className="mt-4 overflow-hidden h-[1.5em] w-full">
              <div className="loc-up font-sans text-[8px] sm:text-[9px] font-bold tracking-[0.4em] sm:tracking-[0.6em] text-stone-500 uppercase whitespace-nowrap">
                Station 2 • Boracay
              </div>
            </div>
          </div>

          {/* Elegant Architectural Dividing Line */}
          <div className="div-fade mt-8 flex items-center justify-center gap-4 w-full">
            <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-amber-500/25" />
            <div className="w-1 h-1 rounded-full bg-amber-500/40 animate-pulse" />
            <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-amber-500/25" />
          </div>

        </div>
      </div>
    </motion.div>
  );
}