'use client';

interface LogoProps {
  className?: string;
  iconSize?: number;
}

export default function Logo({ className = '', iconSize = 54 }: LogoProps) {
  return (
    <div className={`flex items-center gap-6 select-none font-sans ${className}`}>
      {/* Elegantly Drawn Minimal Palm Tree SVG Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c4962a"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="overflow-visible flex-shrink-0"
      >
        {/* Main curved trunk */}
        <path d="M13 22c0-3-1-6-3-9-1.5-2.2-3-3.8-5-5" />
        
        {/* Right side primary fronds */}
        <path d="M10 13c1.5-1.5 4-2 6-1 2.5.8 4 3 4.5 5" />
        <path d="M11.5 10.5c2-1 4.5-.5 6.5 1 2 1.5 3 3.5 3 5.5" />
        
        {/* Top & Left side primary fronds */}
        <path d="M10.5 8.5c1-2 3-3.5 5.5-3.5 2.5 0 4.5 1.5 5 4" />
        <path d="M9 10.5c-.5-2.5.5-5 2.5-6.5 2-1.5 4.5-1.5 6 0" />
        <path d="M7.5 12c-1.5-2-1.5-4.5 0-6.5 1.2-1.5 3.3-2 5-.5" />
      </svg>

      {/* Luxury Brand Typography Engine */}
      <div className="flex flex-col">
        <div className="flex items-baseline font-serif text-[44px] text-[#e2cc90] tracking-[0.04em] leading-none">
          Aplaya
          
          {/* Integrated Clean 'bar' Accent */}
          <span className="ml-2.5 font-sans text-[28px] font-light text-[#c4962a] tracking-[0.16em] uppercase">
            bar
          </span>
        </div>

        {/* Subtitle Station Location */}
        <div className="mt-3">
          <div className="font-sans text-[9px] font-semibold tracking-[0.55em] text-amber-600/40 uppercase whitespace-nowrap">
            Boracay
          </div>
        </div>
      </div>
    </div>
  );
}