'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu drawer is wide open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Clean, reusable explicit animation scroll runner
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Timeout allows the mobile drawer state to clear cleanly before calculating heights
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 select-none transition-all duration-500 ease-in-out ${
          isScrolled || isOpen
            ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-900/50 py-4 shadow-lg shadow-black/20' 
            : 'bg-transparent border-b border-stone-900/0 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex items-center justify-between">
          
          {/* Left Side: Scaled Logo Unit */}
          <Link 
            href="#hero" 
            onClick={() => setIsOpen(false)}
            className="origin-left transform scale-[0.65] sm:scale-[0.75] hover:opacity-90 transition-all duration-300 relative z-50"
          >
            <Logo iconSize={36} />
          </Link>

          {/* Desktop & Tablet Navigation Layout */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-stone-400">
            <a 
              href="#our-story" 
              onClick={(e) => handleScrollToSection(e, 'our-story')}
              className="hover:text-amber-500 transition-colors duration-200"
            >
              Story
            </a>
            <a 
              href="#menu" 
              onClick={(e) => handleScrollToSection(e, 'menu')}
              className="hover:text-amber-500 transition-colors duration-200"
            >
              Menu
            </a>
            <a 
              href="#reserve" 
              onClick={(e) => handleScrollToSection(e, 'reserve')}
              className="px-4 py-2 border border-amber-600/30 rounded text-amber-500 hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500 transition-all duration-300"
            >
              Reservations
            </a>
          </nav>

          {/* Right Side: Hamburger Control */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col justify-center items-end w-8 h-8 relative z-50 focus:outline-none space-y-1.5 p-1"
            aria-label="Toggle Menu"
          >
            <span className={`h-[2px] bg-stone-100 rounded-full transition-all duration-300 ease-out ${isOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-6'}`} />
            <span className={`h-[2px] bg-stone-100 rounded-full transition-all duration-300 ease-out ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`h-[2px] bg-stone-100 rounded-full transition-all duration-300 ease-out ${isOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-5'}`} />
          </button>

        </div>
      </header>

      {/* --- MOBILE FULLSCREEN OVERLAY DRAWER --- */}
      <div 
        className={`fixed inset-0 bg-stone-950/98 backdrop-blur-lg z-40 md:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-sm font-sans font-bold tracking-[0.3em] uppercase text-stone-300">
          <a 
            href="#our-story" 
            onClick={(e) => handleScrollToSection(e, 'our-story')}
            className="hover:text-amber-500 transition-colors duration-200 py-2 transform transition-transform active:scale-95"
          >
            Story
          </a>
          <a 
            href="#menu" 
            onClick={(e) => handleScrollToSection(e, 'menu')}
            className="hover:text-amber-500 transition-colors duration-200 py-2 transform transition-transform active:scale-95"
          >
            Menu
          </a>
          <a
            href="#reserve" 
            onClick={(e) => handleScrollToSection(e, 'reserve')}
            className="mt-4 inline-block text-center px-8 py-3 border border-amber-500 rounded text-amber-500 hover:bg-amber-500 hover:text-stone-950 transition-all duration-300 text-xs tracking-[0.25em]"
          >
            Reservations
          </a>
        </nav>
      </div>
    </>
  );
}