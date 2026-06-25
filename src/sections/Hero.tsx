'use client';
import { motion, Variants } from 'framer-motion';
import Button from '@/components/Button';

export default function Hero() {
  // Your perfectly sourced live imagery URL
  const heroBg = "https://images.unsplash.com/photo-1708195559744-c2b3e60dbe27?q=80&w=1920&auto=format&fit=crop";

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat select-none"
      style={{ backgroundImage: `url('${heroBg}')` }}
    >
      {/* Warm island shadow overlay to support readability while retaining sunset tones */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/30 to-black/40 z-0 pointer-events-none" />

      {/* Hero Core Content Layout */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto space-y-6 flex flex-col items-center">
        
        <motion.span 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="text-amber-400 font-medium tracking-widest uppercase text-xs md:text-sm bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full backdrop-blur-md"
        >
          Station 2, White Beach, Boracay
        </motion.span>
        
        <motion.h1 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
          className="text-4xl md:text-7xl font-black tracking-tight leading-none drop-shadow-md uppercase font-serif italic"
        >
          Sunsets, Seafood & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 normal-case font-sans not-italic font-black">
            Island Chills.
          </span>
        </motion.h1>
        
        <motion.p 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="text-base md:text-xl text-stone-200/90 font-light max-w-2xl mx-auto drop-shadow-sm tracking-wide"
        >
          Kick off your sandals. Kick back with cold craft beers, local calamansi mojitos, and fresh caught ocean plates while the sun dips low over the horizon.
        </motion.p>

        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full sm:w-auto"
        >
          <a href="#menu" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full px-8 bg-gradient-to-r from-amber-500 to-orange-500 border-none shadow-lg shadow-orange-950/50 hover:brightness-110 transition-all text-stone-950 font-semibold">
              Taste the Island Menu
            </Button>
          </a>
          <Button variant="outline" className="w-full sm:w-auto px-8 border-white/30 text-stone-100 hover:bg-white/10 backdrop-blur-sm">
            Reserve a Daybed
          </Button>
        </motion.div>
      </div>

      {/* Dynamic bouncing scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block z-10">
        <a href="#menu" aria-label="Scroll down">
          <svg className="w-6 h-6 text-amber-400/80 hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}