'use client';
import { useEffect, useState } from 'react';

export default function LogoAnimationEntry() {
  const [shouldRender, setShouldRender] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Elegant transition orchestrator handled completely on system timers
    const exitTimer = setTimeout(() => setIsExiting(true), 2500);
    const unmountTimer = setTimeout(() => setShouldRender(false), 3600);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a0806] flex items-center justify-center select-none overflow-hidden pointer-events-none transform translate-z-0">
      
      {/* ── HIGH PERFORMANCE COMPILER CSS ENGINE ── */}
      <style>{`
        /* --- Hardware Acceleration & Composite Layers --- */
        .gpu-layer { will-change: transform, opacity; transform: translateZ(0); }
        
        /* --- Organic Palm Path Draws --- */
        .apl-trunk { stroke-dasharray: 50; stroke-dashoffset: 50; animation: tracePath 1.2s cubic-bezier(.16,1,.3,1) forwards 0.4s; }
        .apl-frond { stroke-dasharray: 35; stroke-dashoffset: 35; }
        .f1 { animation: tracePath 1.0s cubic-bezier(.16,1,.3,1) forwards 0.65s; }
        .f2 { animation: tracePath 1.0s cubic-bezier(.16,1,.3,1) forwards 0.72s; }
        .f3 { animation: tracePath 1.0s cubic-bezier(.16,1,.3,1) forwards 0.79s; }
        .f4 { animation: tracePath 1.0s cubic-bezier(.16,1,.3,1) forwards 0.86s; }
        .f5 { animation: tracePath 1.0s cubic-bezier(.16,1,.3,1) forwards 0.93s; }

        /* --- Text Elements Stagger Core --- */
        .char-up { transform: translateY(110%); animation: slideUp 0.65s cubic-bezier(.16,1,.3,1) forwards; }
        .loc-up { transform: translateY(105%); animation: slideUp 0.8s cubic-bezier(.16,1,.3,1) forwards 1.3s; }
        .div-fade { opacity: 0; animation: fadeIn 0.7s ease forwards 1.5s; }
        
        @keyframes tracePath { to { stroke-dashoffset: 0; } }
        @keyframes slideUp { to { transform: translateY(0%); } }
        @keyframes fadeIn { to { opacity: 1; } }

        /* --- Unified Curtain Exit (Single Layer, No Lines) --- */
        .veil-block { position: absolute; inset: 0; bg-color: #0a0806; will-change: transform; transition: transform 1.05s cubic-bezier(0.76, 0, 0.24, 1); background: #0a0806; }
        
        .exit-triggered .veil-block { transform: translateY(-101%); }
        .exit-triggered .core-content { opacity: 0; transform: scale(0.98); filter: blur(4px); transition: opacity 0.5s ease, transform 0.65s cubic-bezier(.16,1,.3,1), filter 0.5s ease; }
      `}</style>

      {/* ── CINEMATIC VEIL WRAPPER ── */}
      <div className={`absolute inset-0 ${isExiting ? 'exit-triggered' : ''}`}>
        
        {/* Solid, unified background sheet */}
        <div className="veil-block" />

        {/* ── CORE CENTRAL GRAPHIC ARCHITECTURE ── */}
        <div className="core-content absolute inset-0 flex flex-col items-center justify-center z-10 gpu-layer">
          <div className="flex items-center gap-6">

            {/* Premium Palm Icon Axis */}
            <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#c4962a" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" className="overflow-visible flex-shrink-0">
              <path className="apl-trunk" d="M13 22c0-3-1-6-3-9-1.5-2.2-3-3.8-5-5" />
              <path className="apl-frond f1" d="M10 13c1.5-1.5 4-2 6-1 2.5.8 4 3 4.5 5" />
              <path className="apl-frond f2" d="M11.5 10.5c2-1 4.5-.5 6.5 1 2 1.5 3 3.5 3 5.5" />
              <path className="apl-frond f3" d="M10.5 8.5c1-2 3-3.5 5.5-3.5 2.5 0 4.5 1.5 5 4" />
              <path className="apl-frond f4" d="M9 10.5c-.5-2.5.5-5 2.5-6.5 2-1.5 4.5-1.5 6 0" />
              <path className="apl-frond f5" d="M7.5 12c-1.5-2-1.5-4.5 0-6.5 1.2-1.5 3.3-2 5-.5" />
            </svg>

            {/* Typography Engine Structure */}
            <div className="flex flex-col">
              <div className="flex items-baseline font-serif text-[44px] text-[#e2cc90] tracking-[0.04em] leading-none">
                {/* Aplaya Split */}
                {['A', 'p', 'l', 'a', 'y', 'a'].map((char, i) => (
                  <span key={i} className="inline-block overflow-hidden h-[50px]">
                    <span className="inline-block char-up" style={{ animationDelay: `${750 + i * 45}ms` }}>{char}</span>
                  </span>
                ))}
                
                {/* Bar Split */}
                <div className="flex ml-2.5 font-sans text-[28px] font-light text-[#c4962a] tracking-[0.16em] uppercase">
                  {['b', 'a', 'r'].map((char, i) => (
                    <span key={i} className="inline-block overflow-hidden h-[34px]">
                      <span className="inline-block char-up" style={{ animationDelay: `${1050 + i * 55}ms` }}>{char}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtitle Station Location */}
              <div className="mt-3 overflow-hidden h-3.5">
                <div className="loc-up font-sans text-[9px] font-semibold tracking-[0.55em] text-amber-600/40 uppercase white-space-nowrap">
                  Boracay
                </div>
              </div>
            </div>

          </div>

          {/* Symmetrical Balanced Dividing Rule */}
          <div className="div-fade mt-8 flex items-center justify-center gap-3.5 opacity-0">
            <div className="w-14 h-[1px] bg-gradient-to-r from-transparent to-amber-500/20" />
            <div className="w-1 h-1 rounded-full bg-amber-500/30" />
            <div className="w-14 h-[1px] bg-gradient-to-l from-transparent to-amber-500/20" />
          </div>

        </div>

      </div>
    </div>
  );
}