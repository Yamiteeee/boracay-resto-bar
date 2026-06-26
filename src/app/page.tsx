'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import OurStory from '@/sections/OurStory';
import Menu from '@/sections/Menu';
import Footer from '@/sections/Footer';
import LogoAnimationEntry from '@/components/Animation/LogoAnimationEntry';
import PageAnimation from '@/components/Animation/PageAnimation';
import Reservation from '@/sections/Reservation';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    // 🚨 ULTIMATE MOBILE FIX: Force strict viewport dimensions on the outer wrapper
    <div className="relative min-h-screen w-full max-w-full bg-[#faf9f6] font-sans antialiased text-stone-900 selection:bg-amber-500/20 overflow-x-hidden overscroll-behavior-x-none">
      
      {/* ── 1. SHORT-CIRCUIT LOADER ── */}
      <AnimatePresence mode="wait">
        {isLoading && <LogoAnimationEntry key="loader" />}
      </AnimatePresence>

      {/* ── 2. CONDITIONAL MOUNT ── */}
      {!isLoading && (
        <SmoothScroll>
          {/* ── Background textures ── */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-0 opacity-[0.012] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii41Ii8+Cjwvc3ZnPg==')] bg-repeat contain-strict"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-transparent via-stone-100/40 to-stone-200/20 contain-strict"
          />

          {/* Inner layout shell */}
          {/* 🚨 ULTIMATE MOBILE FIX: Added w-screen and max-w-full to prevent third-party wrappers like SmoothScroll from widening the viewport layout */}
          <div className="min-h-screen w-screen max-w-full flex flex-col relative z-10 overflow-x-hidden">
            <Navbar />

            {/* 🚨 ULTIMATE MOBILE FIX: Forced main tag container bounds */}
            <main className="w-full max-w-full flex-grow layout-containment-shell overflow-x-hidden px-0">
              <PageAnimation className="flex flex-col w-full max-w-full overflow-x-hidden">

                {/* HERO SECTION */}
                <div 
                  id="hero" 
                  className="w-full max-w-full bg-transparent transform-gpu overflow-hidden" 
                  style={{ contentVisibility: 'auto', containIntrinsicSize: '0 var(--hero-height, 650px)' }}
                >
                  <Hero />
                </div>

                {/* OUR STORY SECTION */}
                <div 
                  id="our-story" 
                  className="w-full max-w-full bg-transparent pb-6 md:pb-8 transform-gpu overflow-hidden" 
                  style={{ contentVisibility: 'auto', containIntrinsicSize: '0 var(--story-height, 750px)' }}
                >
                  <OurStory />
                </div>

                {/* MENU SECTION */}
                <div 
                  id="menu" 
                  className="w-full max-w-full bg-transparent mt-0 md:-mt-12 pt-0 pb-16 md:pb-24 transform-gpu overflow-hidden" 
                  style={{ contentVisibility: 'auto', containIntrinsicSize: '0 var(--menu-height, 600px)' }}
                >
                  <Menu />
                </div>

                {/* RESERVATION SECTION */}
                <div 
                  id="reserve" 
                  className="w-full max-w-full bg-transparent transform-gpu overflow-hidden" 
                  style={{ contentVisibility: 'auto', containIntrinsicSize: '0 var(--reserve-height, 850px)' }}
                >
                  <Reservation />
                </div>

                {/* FOOTER SECTION */}
                <div 
                  id="footer" 
                  className="w-full max-w-full bg-transparent transform-gpu overflow-hidden"
                  style={{ contentVisibility: 'auto', containIntrinsicSize: '0 var(--footer-height, 450px)' }}
                >
                  <Footer />
                </div>

              </PageAnimation>
            </main>
          </div>
        </SmoothScroll>
      )}
    </div>
  );
}