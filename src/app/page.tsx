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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#faf9f6] font-sans antialiased text-stone-900 selection:bg-amber-500/20">
      
      {/* ── HIGH-END BACKGROUND TEXTURE & GRADIENT MATRIX ── */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii41Ii8+Cjwvc3ZnPg==')] bg-repeat" />
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-transparent via-stone-100/50 to-stone-200/30" />

      <AnimatePresence mode="wait">
        {isLoading && <LogoAnimationEntry />}
      </AnimatePresence>

      <div className={isLoading ? "h-screen min-h-screen overflow-hidden" : "min-h-screen w-full flex flex-col relative z-10"}>
        <Navbar />

        <main className="w-full flex-grow">
          <PageAnimation className="flex flex-col w-full">
            
            {/* HERO SECTION */}
            <motion.div 
              variants={slipLeftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.02 }}
              className="w-full bg-transparent will-change-transform backface-hidden"
            >
              <Hero />
            </motion.div>
            
            {/* OUR STORY SECTION */}
            {/* Pulled down padding slightly at the bottom to transition tighter */}
            <motion.div 
              variants={slipRightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="w-full bg-transparent will-change-transform backface-hidden pb-4 md:pb-8"
            >
              <OurStory />
            </motion.div>
            
            {/* MENU SECTION */}
            {/* Negative margin top pull (-mt-8) brings the dark card zone closer to remove the void */}
            <motion.div 
              variants={slipLeftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="w-full bg-transparent will-change-transform backface-hidden -mt-8 md:-mt-12 pt-0 pb-16 md:pb-24"
            >
              <Menu />
            </motion.div>

          </PageAnimation>
        </main>

        {/* --- PREMIUM RESPONSIVE FOOTER --- */}
        <footer className="bg-stone-950 text-stone-400 pt-16 md:pt-20 pb-10 md:pb-12 text-sm border-t border-stone-900/60 relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 md:pb-16 border-b border-stone-900/60 items-start">
              
              {/* Brand Profile Axis */}
              <div className="sm:col-span-2 lg:col-span-4 space-y-4 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start transform scale-90 origin-center lg:origin-left opacity-90 transition-all">
                  <Logo iconSize={36} />
                </div>
                <p className="text-xs text-stone-500 font-light max-w-sm mx-auto lg:mx-0 leading-relaxed">
                  Experiencing beachfront dining at its finest. Fresh local ingredients, handcrafted cocktails, and legendary Boracay sunsets.
                </p>
                
                <div className="flex justify-center lg:justify-start items-center gap-4 pt-2">
                  <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-500 hover:border-amber-500/30 hover:bg-stone-900/40 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-500 hover:border-amber-500/30 hover:bg-stone-900/40 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="TripAdvisor" className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-500 hover:border-amber-500/30 hover:bg-stone-900/40 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-4.5 4.5c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zm9 0c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM7.5 8c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm9 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-4.5 4c-2.481 0-4.5 2.019-4.5 4.5h9c0-2.481-2.019-4.5-4.5-4.5z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contact / Station Metrics Metadata Column */}
              <div className="col-span-1 lg:col-span-4 space-y-3 text-center sm:text-left">
                <h4 className="text-stone-300 font-bold tracking-widest text-[11px] uppercase">Location & Hours</h4>
                <div className="space-y-1.5 text-xs text-stone-500 font-light">
                  <p className="text-stone-400">Station 2, White Beach</p>
                  <p>Boracay Island, Malay, Aklan 5608</p>
                  <p className="pt-1.5 text-amber-500/70 font-normal">Open Daily: 10:00 AM – 12:00 AM</p>
                </div>
              </div>

              {/* Digital Map Viewport Matrix Column */}
              <div className="col-span-1 lg:col-span-4 space-y-3 text-center sm:text-left w-full">
                <h4 className="text-stone-300 font-bold tracking-widest text-[11px] uppercase">Find Us On The Beach</h4>
                <div className="w-full h-[140px] sm:h-[120px] rounded-xl overflow-hidden border border-stone-900 shadow-inner filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.355152528766!2d121.92383797600735!3d11.950346336528807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a53c19e5dc4229%3A0xe5a1b3be074747cd!2sWhite%20Beach%20Station%202!5e0!3m2!1sen!2sph!4v1718912345678!5m2!1sen!2sph" 
                    className="w-full h-full border-none"
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>

            {/* Copyright/Secondary Row */}
            <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-[11px] tracking-wider text-stone-600 font-light text-center lg:text-left">
              <p>© {new Date().getFullYear()} Aplaya Boracay. All rights reserved.</p>
              
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 max-w-md lg:max-w-none">
                <a href="#" className="hover:text-stone-400 transition-colors whitespace-nowrap">Privacy Policy</a>
                <span className="hidden sm:inline w-1 h-1 bg-stone-800 rounded-full" />
                <a href="#" className="hover:text-stone-400 transition-colors whitespace-nowrap">Terms of Service</a>
                <span className="hidden sm:inline w-1 h-1 bg-stone-800 rounded-full" />
                <a href="#" className="hover:text-stone-400 transition-colors whitespace-nowrap">Licensing</a>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </div>
  );
}