'use client';
import { useMemo, useRef, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import Card from '@/components/Card';
import { useMenu } from '@/hooks/useMenu';

export default function Menu() {
  const {
    activeCategory,
    currentIndex,
    setCurrentIndex,
    displayAreaRef,
    xOffset,
    filteredItems,
    isCarouselMode,
    nextSlide,
    prevSlide,
    handleDragEnd,
    changeCategory
  } = useMenu();

  // Reference trackers to pass stable values into our native listener safely
  const lastScrollTime = useRef(0);
  const stateRef = useRef({ currentIndex, isCarouselMode, totalLength: filteredItems.length });

  useEffect(() => {
    stateRef.current = { currentIndex, isCarouselMode, totalLength: filteredItems.length };
  }, [currentIndex, isCarouselMode, filteredItems.length]);

  // Stabilize and sort render list
  const stableMenuItems = useMemo(() => {
    if (!filteredItems) return [];
    return [...filteredItems].sort((a, b) => String(a.id).localeCompare(String(b.id)));
  }, [filteredItems]);

  // 🏎️ CRITICAL SMOOTH SCROLL BYPASS LISTENER
  useEffect(() => {
    const container = displayAreaRef.current;
    if (!container) return;

    const handleNativeWheel = (e: WheelEvent) => {
      const { currentIndex: currentIdx, isCarouselMode: activeMode, totalLength } = stateRef.current;
      
      if (!activeMode) return;

      // Intercept the scroll event right here before SmoothScroll picks it up globally
      e.stopPropagation();

      const now = Date.now();
      if (now - lastScrollTime.current < 500) {
        e.preventDefault();
        return;
      }

      const scrollDelta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(scrollDelta) < 15) return;

      // Boundary safety checks
      if (scrollDelta > 0 && currentIdx >= totalLength - 1) return;
      if (scrollDelta < 0 && currentIdx <= 0) return;

      e.preventDefault();
      lastScrollTime.current = now;

      if (scrollDelta > 0) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(prev => prev - 1);
      }
    };

    container.addEventListener('wheel', handleNativeWheel, { passive: false, capture: true });
    return () => container.removeEventListener('wheel', handleNativeWheel, { capture: true });
  }, [setCurrentIndex]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-transparent select-none overflow-hidden relative content-visibility-auto">
      
      {/* Editorial Watermark Accent Backdrop */}
      <div className="absolute right-[-5%] bottom-[5%] text-[18vw] font-serif font-black italic opacity-[0.025] text-stone-950 leading-none pointer-events-none uppercase tracking-tighter select-none contain-strict">
        Menu
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header layout layout */}
        <div className="relative max-w-3xl mx-auto mb-20 text-center">
          <div className="relative bg-stone-900 border border-stone-800 p-8 sm:p-12 rounded-3xl shadow-xl overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none will-change-transform" />
            
            <div className="relative z-10 space-y-4">
              <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-400 font-bold bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
                Fresh & Handcrafted
              </span>
              
              <h2 className="text-4xl font-black text-stone-50 tracking-tight md:text-5xl font-serif italic uppercase pt-1">
                Island Flavors <span className="font-sans not-italic font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 block mt-2 sm:inline sm:mt-0">
                  & Cocktails
                </span>
              </h2>
              
              <div className="w-12 h-[2px] bg-orange-500/40 mx-auto my-4 rounded-full" />
              
              <p className="text-stone-400 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed tracking-wide">
                {isCarouselMode 
                  ? "Use your mouse wheel or swipe on mobile to explore our beachfront collection."
                  : "Sourced daily from local fishers and growers, mixed to perfection."}
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center items-center gap-2 p-1.5 w-fit mx-auto mb-16">
          {(['all', 'food', 'drinks'] as const).map((category) => (
            <button
              key={category}
              onClick={() => changeCategory(category)}
              className="relative px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 overflow-hidden"
            >
              {activeCategory === category && (
                <motion.span 
                  layoutId="activeMenuTab"
                  className="absolute inset-0 bg-stone-900 rounded-full -z-10"
                  transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }} 
                />
              )}
              <span className={`transition-colors duration-200 z-10 ${
                activeCategory === category ? 'text-amber-400' : 'text-stone-500 hover:text-stone-200'
              }`}>
                {category === 'all' ? 'Full Menu' : category}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Display Area Container */}
        <div ref={displayAreaRef} className="min-h-[520px] relative flex flex-col justify-center items-center w-full layout-gpu">
          <AnimatePresence mode="wait">
            {isCarouselMode ? (
              <motion.div
                key="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="relative w-full max-w-5xl h-[460px] flex items-center justify-center cursor-ew-resize overscroll-contain touch-none will-change-transform transform-gpu"
              >
                <AnimatePresence initial={false}>
                  {stableMenuItems.map((item, index) => { 
                    const offset = index - currentIndex;
                    if (Math.abs(offset) > 2) return null; 

                    const isActive = offset === 0;
                    const xTranslate = offset * xOffset; 
                    const cardScale = isActive ? 1.02 : 1 - Math.abs(offset) * 0.1; 
                    const cardZIndex = 40 - Math.abs(offset);

                    return (
                      <motion.div
                        key={item.id}
                        transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
                        style={{ zIndex: cardZIndex }}
                        animate={{
                          x: xTranslate,
                          scale: cardScale,
                          opacity: 1,
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                        className="absolute w-full max-w-[270px] sm:max-w-sm origin-center pointer-events-none data-[active=true]:pointer-events-auto will-change-transform transform-gpu"
                        data-active={isActive}
                      >
                        <div className={`w-full transform-gpu ${isActive ? 'shadow-xl scale-100' : ''}`}>
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
                transition={{ duration: 0.15 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full transform-gpu"
              >
                {stableMenuItems.map((item) => ( 
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="h-full will-change-transform transform-gpu"
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
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls Footer */}
          {isCarouselMode && (
            <div className="flex items-center gap-6 mt-10 z-40">
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="p-3 rounded-full bg-stone-800 text-stone-200 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-stone-700 transition-colors shadow-sm"
                aria-label="Previous Slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Responsive Dots Matrix */}
              <div className="flex gap-1.5 items-center">
                {stableMenuItems.map((_, i) => { 
                  const isFirstFew = currentIndex <= 1;
                  const isLastFew = currentIndex >= stableMenuItems.length - 2;
                  
                  const isVisibleOnMobile = 
                    isFirstFew ? i < 3 : 
                    isLastFew ? i >= stableMenuItems.length - 3 : 
                    Math.abs(i - currentIndex) <= 1;

                  return (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentIndex 
                          ? 'w-6 bg-amber-500' 
                          : 'w-1.5 bg-stone-700'
                      } ${
                        isVisibleOnMobile ? 'block' : 'hidden md:block'
                      }`}
                    />
                  );
                })}
              </div>

              <button 
                onClick={nextSlide}
                disabled={currentIndex === stableMenuItems.length - 1}
                className="p-3 rounded-full bg-stone-800 text-stone-200 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-stone-700 transition-colors shadow-sm"
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