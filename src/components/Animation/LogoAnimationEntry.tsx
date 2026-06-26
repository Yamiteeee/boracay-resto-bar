'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LogoAnimationEntry() {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Triggers the inner text blur/melt slightly before the whole screen fades
    const exitTimer = setTimeout(() => setIsExiting(true), 2800); // Extended slightly to let users enjoy the neon glow state
    return () => clearTimeout(exitTimer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.02,
        filter: "blur(20px) brightness(1.1)",
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#070605] flex items-center justify-center select-none overflow-hidden pointer-events-none transform translate-z-0"
    >
      
      {/* ── HIGH PERFORMANCE COMPILER CSS ENGINE ── */}
      <style>{`
        .gpu-layer { will-change: transform, opacity, filter; transform: translateZ(0); }
        
        /* --- Organic Palm Path Draws --- */
        .apl-trunk { stroke-dasharray: 60; stroke-dashoffset: 60; animation: tracePath 1.3s cubic-bezier(.16,1,.3,1) forwards 0.2s; }
        .apl-frond { stroke-dasharray: 45; stroke-dashoffset: 45; }
        .f1 { animation: tracePath 1.1s cubic-bezier(.16,1,.3,1) forwards 0.45s; }
        .f2 { animation: tracePath 1.1s cubic-bezier(.16,1,.3,1) forwards 0.52s; }
        .f3 { animation: tracePath 1.1s cubic-bezier(.16,1,.3,1) forwards 0.59s; }
        .f4 { animation: tracePath 1.1s cubic-bezier(.16,1,.3,1) forwards 0.66s; }
        .f5 { animation: tracePath 1.1s cubic-bezier(.16,1,.3,1) forwards 0.73s; }

        /* --- Warm Restobar Amber Neon Glow Flare --- */
        .neon-glow-unit {
          filter: drop-shadow(0 0 0px rgba(245, 158, 11, 0));
          animation: igniteGlow 1.2s cubic-bezier(.25, 1, .5, 1) forwards 1.4s;
        }

        /* --- Text Elements Stagger Core --- */
        .char-up { transform: translateY(110%); animation: slideUp 0.8s cubic-bezier(.16,1,.3,1) forwards; }
        .loc-up { transform: translateY(105%); animation: slideUp 0.8s cubic-bezier(.16,1,.3,1) forwards 1.5s; }
        .div-fade { opacity: 0; animation: fadeIn 0.8s ease forwards 1.7s; }
        
        @keyframes tracePath { to { stroke-dashoffset: 0; } }
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
      `}</style>

      {/* ── CINEMATIC VEIL WRAPPER ── */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center ${isExiting ? 'exit-active' : ''}`}>
        
        {/* ── CORE CENTRAL GRAPHIC ARCHITECTURE ── */}
        <div className="core-content flex flex-col items-center justify-center gpu-layer neon-glow-unit text-[#e5c57b]">
          
        {/* Bigger and Boldly Positioned Palm Icon Unit */}
        <div className="mb-6 transform scale-110 sm:scale-125 transition-transform">
        <svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className="overflow-visible">
            <path className="apl-trunk" d="M13 22c0-3-1-6-3-9-1.5-2.2-3-3.8-5-5" />
            <path className="apl-frond f1" d="M10 13c1.5-1.5 4-2 6-1 2.5.8 4 3 4.5 5" />
            <path className="apl-frond f2" d="M11.5 10.5c2-1 4.5-.5 6.5 1 2 1.5 3 3.5 3 5.5" />
            <path className="apl-frond f3" d="M10.5 8.5c1-2 3-3.5 5.5-3.5 2.5 0 4.5 1.5 5 4" />
            <path className="apl-frond f4" d="M9 10.5c-.5-2.5.5-5 2.5-6.5 2-1.5 4.5-1.5 6 0" />
            {/* FIXED: Restored the 'c' curve command below to smooth out the rough edge */}
            <path className="apl-frond f5" d="M7.5 12c-1.5-2-1.5-4.5 0-6.5 1.2-1.5 3.3-2 5-.5" />
        </svg>
        </div>

          {/* Restobar Specialized Layout Unit */}
          <div className="flex flex-col items-center text-center">
            
            {/* Main Brand Identifier Header */}
            <div className="flex items-baseline font-serif italic font-light text-5xl sm:text-6xl tracking-tight leading-none text-[#ecd49a]">
              {['A', 'p', 'l', 'a', 'y', 'a'].map((char, i) => (
                <span key={i} className="inline-block overflow-hidden h-[56px] sm:h-[68px]">
                  <span className="inline-block char-up" style={{ animationDelay: `${550 + i * 50}ms` }}>{char}</span>
                </span>
              ))}
            </div>

            {/* Sub-Brand Marker */}
            <div className="flex font-sans text-xs font-black tracking-[0.45em] uppercase text-amber-600/70 mt-2.5 h-[16px] overflow-hidden">
              {['r', 'e', 's', 't', 'o', ' ', '•', ' ', 'b', 'a', 'r'].map((char, i) => (
                <span key={i} className="inline-block char-up" style={{ animationDelay: `${950 + i * 40}ms` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>

            {/* Subtitle Station Location Anchor */}
            <div className="mt-4 overflow-hidden h-3.5">
              <div className="loc-up font-sans text-[9px] font-bold tracking-[0.6em] text-stone-500 uppercase whitespace-nowrap">
                Station 2 • Boracay
              </div>
            </div>
          </div>

          {/* Elegant Architectural Dividing Line */}
          <div className="div-fade mt-8 flex items-center justify-center gap-4 w-full">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-amber-500/25" />
            <div className="w-1 h-1 rounded-full bg-amber-500/40 animate-pulse" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-amber-500/25" />
          </div>

        </div>

      </div>
    </motion.div>
  );
}