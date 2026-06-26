'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import OurStory from '@/sections/OurStory';
import Menu from '@/sections/Menu';
import Logo from '@/components/Logo';
import LogoAnimationEntry from '@/components/Animation/LogoAnimationEntry';
import PageAnimation, { slipLeftVariants, slipRightVariants } from '@/components/Animation/PageAnimation';
import Reservation from '@/sections/Reservation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  // ── PURE NATIVE SMOOTH SCROLL ROUTER ──
  useEffect(() => {
    if (isLoading) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const cleanHash = anchor.hash.replace('#', '');
        const targetElement = document.getElementById(cleanHash);
        
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, true);
    return () => document.removeEventListener('click', handleAnchorClick, true);
  }, [isLoading]);

  return (
    // FIXED: Added absolute containment rules to stop horizontal shifting/dragging on mobile layout boundaries
    <div className="relative min-h-screen w-full bg-[#faf9f6] font-sans antialiased text-stone-900 selection:bg-amber-500/20 overflow-x-hidden positioning-isolation-layer-fix">
      
      {/* ── HIGH-END BACKGROUND TEXTURE & GRADIENT MATRIX ── */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii41Ii8+Cjwvc3ZnPg==')] bg-repeat" />
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-transparent via-stone-100/50 to-stone-200/30" />

      <AnimatePresence mode="wait">
        {isLoading && <LogoAnimationEntry />}
      </AnimatePresence>

      {/* FIXED: The inner shell layer explicitly sets overflow-x-hidden to cut off sliding components mid-animation */}
      <div className="min-h-screen w-full flex flex-col relative z-10 overflow-x-hidden">
        <Navbar />

        <main className="w-full flex-grow overflow-x-hidden">
          <PageAnimation className="flex flex-col w-full overflow-x-hidden">
            
            {/* HERO SECTION */}
            <div id="hero" className="w-full overflow-x-hidden">
              <motion.div 
                variants={slipLeftVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.02 }}
                className="w-full bg-transparent will-change-transform backface-hidden"
              >
                <Hero />
              </motion.div>
            </div>
            
            {/* OUR STORY SECTION */}
            <div id="our-story" className="w-full overflow-x-hidden">
              <motion.div 
                variants={slipRightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className="w-full bg-transparent will-change-transform backface-hidden pb-4 md:pb-8"
              >
                <OurStory />
              </motion.div>
            </div>
            
            {/* MENU SECTION */}
            <div id="menu" className="w-full overflow-x-hidden">
              <motion.div 
                variants={slipLeftVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className="w-full bg-transparent will-change-transform backface-hidden -mt-8 md:-mt-12 pt-0 pb-16 md:pb-24"
              >
                <Menu />
              </motion.div>
            </div>
            
            {/* RESERVATION BOOKING SECTION */}
            <div id="reserve" className="w-full overflow-x-hidden">
              <motion.div
                variants={slipRightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className="w-full bg-transparent will-change-transform backface-hidden"
              >
                <Reservation />
              </motion.div>
            </div>

          </PageAnimation>
        </main>

        {/* --- PREMIUM RESPONSIVE FOOTER --- */}
        <footer className="bg-stone-950 text-stone-400 pt-16 md:pt-20 pb-10 md:pb-12 text-sm border-t border-stone-900/60 relative z-10 w-full overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 md:pb-16 border-b border-stone-900/60 items-start">
              <div className="sm:col-span-2 lg:col-span-4 space-y-4 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start transform scale-90 origin-center lg:origin-left opacity-90 transition-all">
                  <Logo iconSize={36} />
                </div>
                <p className="text-xs text-stone-500 font-light max-w-sm mx-auto lg:mx-0 leading-relaxed">
                  Experiencing beachfront dining at its finest. Fresh local ingredients, handcrafted cocktails, and legendary Boracay sunsets.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}