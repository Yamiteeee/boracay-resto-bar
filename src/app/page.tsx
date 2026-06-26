'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import OurStory from '@/sections/OurStory';
import Menu from '@/sections/Menu';
import Logo from '@/components/Logo';
import LogoAnimationEntry from '@/components/Animation/LogoAnimationEntry';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-stone-950 font-sans antialiased text-stone-200">
      
      {/* Dynamic entry portal container wrapper handled inside AnimatePresence */}
      <AnimatePresence mode="wait">
        {isLoading && <LogoAnimationEntry />}
      </AnimatePresence>

      {/* Primary Landing Page Interface Layer */}
      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        <Navbar />

        <main className="w-full">
          <Hero />
          <OurStory />
          <Menu />
        </main>

        {/* --- PREMIUM BRAND-UPDATED FOOTER --- */}
        <footer className="bg-stone-950 text-stone-500 py-12 text-sm border-t border-stone-900/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left: Downscaled Signature Logo Stamp */}
            <div className="origin-left transform scale-[0.6] opacity-60 filter grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <Logo iconSize={32} />
            </div>

            {/* Right: Fine-print Metadata Coordinates */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-right font-light text-xs tracking-wider text-stone-600">
              <p className="hover:text-amber-500/70 transition-colors cursor-pointer">
                Station 2, White Beach, Boracay Island
              </p>
              <div className="w-1 h-1 bg-stone-800 rounded-full hidden sm:block" />
              <p>© {new Date().getFullYear()} Aplaya. All rights reserved.</p>
            </div>

          </div>
        </footer>
      </div>
    </div>
  );
}