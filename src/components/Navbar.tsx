'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Small buffer check to fire the change smoothly
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 select-none transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-stone-950/80 backdrop-blur-md border-b border-stone-900/50 py-4 shadow-lg shadow-black/20' 
          : 'bg-transparent border-b border-stone-900/0 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex items-center justify-between">
        
        {/* Left Side: Scaled Logo Unit */}
        <Link 
          href="#hero" 
          className="origin-left transform scale-[0.65] sm:scale-[0.75] hover:opacity-90 transition-all duration-300"
        >
          <Logo iconSize={36} />
        </Link>

        {/* Right Side: Editorial Minimal Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-8 text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-stone-400">
          <a href="#our-story" className="hover:text-amber-500 transition-colors duration-200">Story</a>
          <a href="#menu" className="hover:text-amber-500 transition-colors duration-200">Menu</a>
          <a 
            href="#reserve" 
            className="px-4 py-2 border border-amber-600/30 rounded text-amber-500 hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500 transition-all duration-300 hidden sm:block"
          >
            Reservations
          </a>
        </nav>

      </div>
    </header>
  );
}