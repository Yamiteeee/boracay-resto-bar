import Button from '@/components/Button';
import { HERO_IMAGES, HERO_TEXT } from '@/data/heroData';

export default function Hero() {
  return (
    <section 
      id="hero" 
      // added contain-strict to prevent layout recalculations from spilling out
      className="relative min-h-screen w-full flex items-center bg-stone-950 select-none overflow-hidden pt-28 pb-20 lg:py-0 contain-layout"
    >
      {/* Background Glows - Isolated from layout painting */}
      <div className="absolute top-1/4 left-1/2 lg:left-1/4 -translate-x-1/2 lg:translate-x-0 w-[320px] sm:w-[500px] h-[300px] sm:h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none z-0 content-visibility-auto" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none z-0 content-visibility-auto" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* --- LEFT SIDE: TYPOGRAPHY --- */}
        <div className="lg:col-span-6 xl:col-span-7 space-y-6 text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs">
              {HERO_TEXT.tagline}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl xl:text-[84px] font-black text-stone-100 tracking-tighter leading-[0.9] sm:leading-[0.85] font-serif italic uppercase">
            {HERO_TEXT.titleLine1} <br />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 normal-case font-sans not-italic font-black mt-1 sm:mt-2 tracking-tight">
              {HERO_TEXT.titleAccent}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed tracking-wide max-w-xl pt-1 sm:pt-2">
            {HERO_TEXT.description}
          </p>

         <div className="flex flex-col sm:flex-row gap-3 pt-3 sm:pt-4 w-full sm:w-auto">
            {/* Primary CTA Link */}
            <a href="#menu" className="w-full sm:w-auto block">
              <Button 
                variant="primary" 
                className="w-full sm:px-7 bg-gradient-to-r from-amber-500 to-orange-500 border-none shadow-xl shadow-orange-950/20 hover:brightness-110 active:scale-[0.97] transition-all text-stone-950 font-bold tracking-widest uppercase text-[11px]"
              >
                {HERO_TEXT.ctaPrimary}
              </Button>
            </a>

            {/* Secondary CTA Link - CONNECTED & STABILIZED */}
            <a href="#reserve" className="w-full sm:w-auto block">
              <Button 
                variant="outline" 
               className="w-full sm:px-7 border-stone-800 text-stone-300 hover:bg-white hover:text-stone-950 active:scale-[0.97] transition-all tracking-widest uppercase text-[11px]"
              >
                {HERO_TEXT.ctaSecondary}
              </Button>
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE: PHOTO COLLAGE WALL --- */}
        <div className="lg:col-span-6 xl:col-span-5 w-full flex justify-center lg:justify-end px-2 sm:px-4 lg:px-0">
          <div className="grid grid-cols-12 gap-3 sm:gap-4 max-w-md sm:max-w-lg lg:max-w-none w-full">
            {HERO_IMAGES.map((img, i) => (
              <div 
                key={i}
                className={`relative w-full ${img.wrapperClass} shadow-2xl overflow-hidden`}
                style={{ contentVisibility: 'auto', containIntrinsicSize: '300px' }} // Prevents background layers from choking layouts
              >
                {/* Scrap Paper Matte Wrapper */}
                <div className={`w-full h-full bg-stone-100 p-1.5 pb-4 sm:p-2 sm:pb-6 md:p-2.5 md:pb-8 ${img.ripClass}`}>
                  <div className="w-full h-full overflow-hidden bg-stone-200">
                    <img 
                      src={img.url} 
                      alt={img.alt}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async" // 👈 CRITICAL: Instructs the browser to decode the images off the main thread asynchronously
                      className="w-full h-full object-cover select-none"
                    />
                  </div>
                </div>

                {/* Textured Washi Tape Strips Overlay */}
                <div 
                  className={`absolute ${img.tapeStyle} bg-white/20 border-y border-white/5 mix-blend-screen pointer-events-none z-20`}
                  style={{
                    transform: 'rotate(-1.5deg)',
                    boxShadow: 'inset 0 0 6px rgba(255,255,255,0.2)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Static Visual Custom Scroll Indicator */}
      <div className="absolute bottom-6 left-6 hidden md:flex items-center gap-4 z-10 select-none pointer-events-none">
        <span className="text-[9px] text-stone-600 uppercase tracking-[0.4em] font-black vertical-text">Scroll to Discover</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-amber-500 to-transparent opacity-40" />
      </div>
    </section>
  );
}