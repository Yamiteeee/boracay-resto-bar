'use client';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  // ─── MAP PROPORTIONAL METRIC CLASSES ───
  const sizeMap = {
    sm: { icon: 28, title: 'text-lg', badge: 'text-xs ml-1.5', sub: 'text-[7px] tracking-[0.4em] mt-1' },
    md: { icon: 44, title: 'text-3xl', badge: 'text-lg ml-2', sub: 'text-[8px] tracking-[0.48em] mt-2' },
    lg: { icon: 54, title: 'text-4xl sm:text-5xl', badge: 'text-xl sm:text-2xl ml-2.5', sub: 'text-[9px] tracking-[0.55em] mt-3' },
    xl: { icon: 84, title: 'text-5xl sm:text-6xl', badge: 'text-2xl sm:text-3xl ml-3', sub: 'text-[11px] tracking-[0.6em] mt-4' }
  };

  const current = sizeMap[size];

  return (
    <div className={`flex items-center gap-4 sm:gap-5 select-none font-sans transform-gpu ${className}`}>
      
      {/* Defined Tropical Palm Tree SVG Icon */}
      <svg
        width={current.icon}
        height={current.icon}
        viewBox="0 0 24 24"
        fill="currentColor" /* Changed to fill to render sharp solid frond geometries */
        className="overflow-visible flex-shrink-0 text-[#c4962a] transition-all duration-300 will-change-transform"
      >
        {/* 1. Clear Island Ground Base */}
        <path d="M2 22c5-1 15-1 20 0-.5-1-3-1.5-10-1.5S2.5 21 2 22z" />

        {/* 2. Structured Tapered Trunk */}
        <path d="M13.5 20.5c-.2-2-.5-4.2-1.2-6.2l1-.3c-.8-2-1.5-4-2.5-5.8-.4 1.8-.7 3.7-.8 5.5l.9.1c-.2 2.2-.4 4.5-.4 6.7h3z" />

        {/* 3. Defined Distinct Overlapping Fronds */}
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

      {/* Luxury Brand Typography Engine */}
      <div className="flex flex-col justify-center">
        <div className={`flex items-baseline font-serif italic text-[#e2cc90] tracking-[0.02em] leading-none transition-all duration-300 ${current.title}`}>
          Aplaya
          
          {/* Integrated Clean 'bar' Accent */}
          <span className={`font-sans font-light text-[#c4962a] uppercase transition-all duration-300 ${current.badge}`}>
            bar
          </span>
        </div>

        {/* Subtitle Station Location */}
        <div className={`font-sans font-semibold text-amber-600/50 uppercase whitespace-nowrap transition-all duration-300 ${current.sub}`}>
          Boracay
        </div>
      </div>

    </div>
  );
}