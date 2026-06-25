'use client';
import { useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-stone-950/60 via-stone-950/20 to-transparent text-white select-none">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo with Island Typography */}
        <div className="text-2xl font-black tracking-widest uppercase font-sans">
          Aplaya<span className="text-amber-400 font-serif italic lowercase tracking-normal font-normal ml-0.5">bar</span>
        </div>

        {/* Desktop Menu - Warm & Elegant */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-stone-200">
          <a href="#hero" className="hover:text-amber-400 transition-colors duration-200">Home</a>
          <a href="#menu" className="hover:text-amber-400 transition-colors duration-200">Menu</a>
          <a href="#about" className="hover:text-amber-400 transition-colors duration-200">Our Story</a>
          <Button 
            variant="outline" 
            className="text-xs py-2 px-5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm tracking-widest uppercase font-semibold"
          >
            Reserve Table
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-stone-100 focus:outline-none p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Upgraded Mobile Dropdown - Warm Beach House Aesthetics */}
      {isOpen && (
        <div className="md:hidden bg-stone-900/90 border-b border-white/5 backdrop-blur-lg absolute top-20 left-0 w-full p-6 flex flex-col gap-5 shadow-2xl tracking-wider text-center uppercase font-medium text-stone-300">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-amber-400 py-1 transition-colors">Home</a>
          <a href="#menu" onClick={() => setIsOpen(false)} className="hover:text-amber-400 py-1 transition-colors">Menu</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-amber-400 py-1 transition-colors">Our Story</a>
          <hr className="border-white/10 my-1" />
          <Button 
            variant="primary" 
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 border-none text-stone-950 font-bold tracking-widest py-3"
          >
            Reserve Table
          </Button>
        </div>
      )}
    </nav>
  );
}