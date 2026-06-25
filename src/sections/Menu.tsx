'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import Card from '@/components/Card';
import { menuItems } from '@/data/menuData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'drinks'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollCooldown = useRef(false);
  const displayAreaRef = useRef<HTMLDivElement>(null); // Fixed: Safely handles scroll context
  
  // Responsive track spacing for cards (narrower on mobile screens)
  const [xOffset, setXOffset] = useState(220);

  useEffect(() => {
    const handleResize = () => {
      setXOffset(window.innerWidth < 768 ? 140 : 220);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredItems = menuItems.filter(item => 
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  const isCarouselMode = activeCategory === 'all';

  const nextSlide = () => {
    if (currentIndex < filteredItems.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  // --- Mouse Wheel Carousel Scroll ---
  useEffect(() => {
    if (!isCarouselMode) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 10) return;
      e.preventDefault();

      if (scrollCooldown.current) return;
      scrollCooldown.current = true;

      if (e.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }

      setTimeout(() => {
        scrollCooldown.current = false;
      }, 400);
    };

    const container = displayAreaRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentIndex, isCarouselMode, filteredItems.length]);

  // --- Mobile Drag/Swipe Gesture Handler ---
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 40; // minimum pixels moved to trigger slide change
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <section id="menu" className="py-28 bg-stone-50 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-600 font-bold bg-amber-500/10 px-3 py-1 rounded-full">
            Fresh & Handcrafted
          </span>
          <h2 className="text-4xl font-black text-stone-900 tracking-tight md:text-5xl font-serif italic capitalize pt-2">
            Island Flavors <span className="font-sans not-italic font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">& Cocktails</span>
          </h2>
          <p className="text-stone-600/90 font-light text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            {isCarouselMode 
              ? "Use your mouse wheel or swipe on mobile to explore our beachfront collection."
              : "Sourced daily from local fishers and growers, mixed to perfection."}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center items-center gap-2 p-1.5 bg-stone-200/60 backdrop-blur-sm rounded-full w-fit mx-auto mb-16 border border-stone-200">
          {(['all', 'food', 'drinks'] as const).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentIndex(0);
              }}
              className="relative px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 overflow-hidden"
            >
              {activeCategory === category && (
                <motion.span 
                  layoutId="activeMenuTab"
                  className="absolute inset-0 bg-stone-900 shadow-md shadow-stone-900/20 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                />
              )}
              <span className={`transition-colors duration-200 z-10 ${
                activeCategory === category ? 'text-amber-400' : 'text-stone-600 hover:text-stone-900'
              }`}>
                {category === 'all' ? 'Full Menu' : category}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Display Area */}
        <div 
          ref={displayAreaRef} 
          className="min-h-[520px] relative flex flex-col justify-center items-center w-full"
        >
          <AnimatePresence mode="wait">
            {isCarouselMode ? (
              /* --- WIDE COVERFLOW CAROUSEL MODE --- */
              <motion.div
                key="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-5xl h-[460px] flex items-center justify-center cursor-ew-resize touch-pan-y"
              >
                <AnimatePresence initial={false}>
                  {filteredItems.map((item, index) => {
                    const offset = index - currentIndex;
                    
                    if (Math.abs(offset) > 2) return null;

                    const isActive = offset === 0;
                    const xTranslate = offset * xOffset; 
                    const cardScale = isActive ? 1.05 : 1 - Math.abs(offset) * 0.12;
                    const cardZIndex = 40 - Math.abs(offset);

                    return (
                      <motion.div
                        key={item.id}
                        layout
                        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 1 }}
                        style={{ zIndex: cardZIndex }}
                        animate={{
                          x: xTranslate,
                          scale: cardScale,
                          opacity: 1,
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.4}
                        onDragEnd={handleDragEnd}
                        className="absolute w-full max-w-[270px] sm:max-w-sm h-full origin-center pointer-events-none data-[active=true]:pointer-events-auto transition-shadow duration-300"
                        data-active={isActive}
                      >
                        <div className={`h-full w-full transition-all duration-500 ${isActive ? 'drop-shadow-2xl scale-100' : 'blur-[0.5px]'}`}>
                          <Card
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            tag={item.tag}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* --- STANDARD GRID MODE --- */
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {filteredItems.map((item) => (
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 150, damping: 20, mass: 1 }}
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      className="h-full"
                    >
                      <Card
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        imageUrl={item.imageUrl}
                        tag={item.tag}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls Footer */}
          {isCarouselMode && (
            <div className="flex items-center gap-6 mt-10 z-40">
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="p-3 rounded-full bg-stone-200 text-stone-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-300/80 transition-colors shadow-sm"
                aria-label="Previous Slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Progress dots */}
              <div className="flex gap-1.5">
                {filteredItems.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-amber-500' : 'w-1.5 bg-stone-300'}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                disabled={currentIndex === filteredItems.length - 1}
                className="p-3 rounded-full bg-stone-200 text-stone-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-300/80 transition-colors shadow-sm"
                aria-label="Next Slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}