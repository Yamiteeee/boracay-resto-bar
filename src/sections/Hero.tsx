'use client';
import { motion, Variants } from 'framer-motion';
import Button from '@/components/Button';
import { HERO_IMAGES, HERO_TEXT } from '@/data/heroData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 }
  }
};

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex items-center bg-stone-950 select-none overflow-hidden pt-28 pb-20 lg:py-0"
    >
      {/* Structural Editorial Grid Lines */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.015] z-0">
        <div className="border-r border-stone-100 h-full" />
        <div className="border-r border-stone-100 h-full" />
        <div className="border-r border-stone-100 h-full" />
        <div className="h-full" />
      </div>

      {/* Ambient Radial Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 lg:left-1/4 -translate-x-1/2 lg:translate-x-0 w-[320px] sm:w-[500px] h-[300px] sm:h-[400px] bg-amber-500/10 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-orange-500/5 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none z-0" />

      {/* 2-Column Responsive Layout Context */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* --- LEFT SIDE: TYPOGRAPHY & BRAND STORY --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 xl:col-span-7 space-y-6 text-left"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs">
              {HERO_TEXT.tagline}
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl xl:text-[84px] font-black text-stone-100 tracking-tighter leading-[0.9] sm:leading-[0.85] font-serif italic uppercase"
          >
            {HERO_TEXT.titleLine1} <br />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 normal-case font-sans not-italic font-black mt-1 sm:mt-2 tracking-tight">
              {HERO_TEXT.titleAccent}
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base text-stone-400 font-light leading-relaxed tracking-wide max-w-xl pt-1 sm:pt-2"
          >
            {HERO_TEXT.description}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 pt-3 sm:pt-4 w-full sm:w-auto"
          >
            <a href="#menu" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:px-7 bg-gradient-to-r from-amber-500 to-orange-500 border-none shadow-xl shadow-orange-950/20 hover:brightness-110 active:scale-[0.97] transition-all text-stone-950 font-bold tracking-widest uppercase text-[11px]">
                {HERO_TEXT.ctaPrimary}
              </Button>
            </a>
            <Button variant="outline" className="w-full sm:w-auto px-7 border-stone-800 text-stone-300 hover:bg-stone-900/60 hover:text-white active:scale-[0.97] transition-all backdrop-blur-sm tracking-widest uppercase text-[11px]">
              {HERO_TEXT.ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>

        {/* --- RIGHT SIDE: COMPACT TORN PHOTO COLLAGE WALL --- */}
        <div className="lg:col-span-6 xl:col-span-5 w-full flex justify-center lg:justify-end px-2 sm:px-4 lg:px-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.35 }}
            className="grid grid-cols-12 gap-3 sm:gap-4 max-w-md sm:max-w-lg lg:max-w-none w-full"
          >
            {HERO_IMAGES.map((img, i) => (
              <div 
                key={i}
                className={`relative w-full ${img.wrapperClass} filter drop-shadow-[0_10px_16px_rgba(0,0,0,0.85)] md:drop-shadow-[0_12px_20px_rgba(0,0,0,0.85)]`}
              >
                {/* Scrap Paper Matte Wrapper */}
                <div className={`w-full h-full bg-stone-100 p-1.5 pb-4 sm:p-2 sm:pb-6 md:p-2.5 md:pb-8 ${img.ripClass}`}>
                  <div className="w-full h-full overflow-hidden bg-stone-200">
                    <img 
                      src={img.url} 
                      alt={img.alt}
                      className="w-full h-full object-cover select-none filter contrast-[1.02] brightness-[0.98]"
                    />
                  </div>
                </div>

                {/* Textured Washi Tape Strips Overlay */}
                <div 
                  className={`absolute ${img.tapeStyle} bg-white/20 backdrop-blur-[1px] border-y border-white/5 shadow-[0_1px_4px_rgba(0,0,0,0.04)] mix-blend-screen pointer-events-none z-20`}
                  style={{
                    clipPath: 'polygon(0% 15%, 10% 0%, 92% 5%, 100% 18%, 98% 85%, 86% 100%, 4% 92%, 0% 75%)',
                    boxShadow: 'inset 0 0 8px rgba(255,255,255,0.3)'
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Embedded Structural Line Scroll Indicator */}
      <div className="absolute bottom-6 left-6 hidden md:flex items-center gap-4 z-10">
        <span className="text-[9px] text-stone-600 uppercase tracking-[0.4em] font-black vertical-text">Scroll to Discover</span>
        <motion.div 
          animate={{ scaleY: [0.2, 1, 0.2], originY: [0, 0, 1] }} 
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-amber-500 to-transparent"
        />
      </div>
    </section>
  );
}