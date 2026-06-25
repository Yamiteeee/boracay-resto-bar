'use client';
import { motion, Variants } from 'framer-motion';
import Button from '@/components/Button';

export default function Hero() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1495031451303-d8ab59c8df37?q=80&w=500&auto=format&fit=crop",
      alt: "Boracay Cocktails",
      wrapperClass: "col-span-6 h-[140px] sm:h-[180px] md:h-[260px] -rotate-3 self-end",
      tapeStyle: "top-[-10px] left-[15%] w-16 sm:w-20 h-5 sm:h-6 rotate-[-12deg]",
      ripClass: "[clip-path:polygon(0%_2%,_15%_0%,_33%_3%,_55%_0%,_78%_2%,_92%_0%,_100%_4%,_99%_35%,_100%_70%,_98%_95%,_85%_100%,_62%_97%,_40%_100%,_18%_98%,_0%_100%,_2%_65%,_0%_30%)]"
    },
    {
      url: "https://images.unsplash.com/photo-1675759801135-cc2bba0a677b?q=80&w=1074&auto=format&fit=crop",
      alt: "Fresh Coastal Dining",
      wrapperClass: "col-span-6 h-[160px] sm:h-[210px] md:h-[310px] rotate-3 translate-y-3 sm:translate-y-4",
      tapeStyle: "top-[-10px] right-[10%] w-16 sm:w-20 h-5 sm:h-6 rotate-[8deg]",
      ripClass: "[clip-path:polygon(2%_0%,_22%_4%,_45%_1%,_68%_3%,_90%_0%,_100%_2%,_98%_30%,_100%_65%,_97%_98%,_75%_96%,_50%_100%,_28%_97%,_0%_100%,_2%_74%,_0%_40%,_3%_15%)]"
    },
    {
      url: "https://images.unsplash.com/photo-1542213493895-edf5b94f5a96?q=80&w=1073&auto=format&fit=crop",
      alt: "Boracay Coastline",
      wrapperClass: "col-span-7 h-[150px] sm:h-[190px] md:h-[280px] rotate-[-2deg] -translate-y-1 sm:translate-y-0",
      tapeStyle: "bottom-[-10px] left-[20%] w-18 sm:w-22 h-5 sm:h-6 rotate-[4deg]",
      ripClass: "[clip-path:polygon(0%_0%,_30%_3%,_60%_1%,_85%_4%,_100%_0%,_97%_40%,_100%_80%,_96%_100%,_70%_97%,_40%_100%,_15%_96%,_0%_100%,_3%_60%,_0%_25%)]"
    },
    {
      url: "https://images.unsplash.com/photo-1639526473371-e68e5336df56?q=80&w=1074&auto=format&fit=crop",
      alt: "Island Sunset Chills",
      wrapperClass: "col-span-5 h-[120px] sm:h-[160px] md:h-[230px] rotate-4 self-start translate-y-4 sm:translate-y-6",
      tapeStyle: "top-[-12px] left-[25%] w-14 sm:w-18 h-5 sm:h-6 rotate-[-6deg]",
      ripClass: "[clip-path:polygon(1%_3%,_25%_0%,_50%_4%,_75%_1%,_100%_5%,_98%_40%,_100%_85%,_97%_100%,_80%_97%,_55%_100%,_30%_96%,_0%_100%,_2%_70%,_0%_35%,_2%_10%)]"
    }
  ];

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
              Station 2, White Beach, Boracay
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl xl:text-[84px] font-black text-stone-100 tracking-tighter leading-[0.9] sm:leading-[0.85] font-serif italic uppercase"
          >
            Sunsets, Seafood <br />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 normal-case font-sans not-italic font-black mt-1 sm:mt-2 tracking-tight">
              & Island Chills.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base text-stone-400 font-light leading-relaxed tracking-wide max-w-xl pt-1 sm:pt-2"
          >
            Kick off your sandals. Kick back with cold craft beers, local calamansi mojitos, and fresh caught ocean plates while the sun dips low over the horizon.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 pt-3 sm:pt-4 w-full sm:w-auto"
          >
            <a href="#menu" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:px-7 bg-gradient-to-r from-amber-500 to-orange-500 border-none shadow-xl shadow-orange-950/20 hover:brightness-110 active:scale-[0.97] transition-all text-stone-950 font-bold tracking-widest uppercase text-[11px]">
                Taste The Menu
              </Button>
            </a>
            <Button variant="outline" className="w-full sm:w-auto px-7 border-stone-800 text-stone-300 hover:bg-stone-900/60 hover:text-white active:scale-[0.97] transition-all backdrop-blur-sm tracking-widest uppercase text-[11px]">
              Reserve a Daybed
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
            {images.map((img, i) => (
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