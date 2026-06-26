'use client';
import { motion, AnimatePresence } from 'framer-motion'; 
import Card from '@/components/Card';
import { useMenu } from '@/hooks/useMenu';

export default function Menu() {
  const {
    activeCategory,
    currentIndex,
    displayAreaRef,
    xOffset,
    filteredItems,
    isCarouselMode,
    nextSlide,
    prevSlide,
    handleDragEnd,
    changeCategory
  } = useMenu();

  return (
    <section id="menu" className="py-28 bg-stone-50 select-none overflow-hidden relative">
      
      {/* Editorial Watermark Accent Backdrop */}
      <div className="absolute right-[-5%] bottom-[5%] text-[18vw] font-serif font-black italic opacity-[0.02] text-stone-950 leading-none pointer-events-none uppercase tracking-tighter">
        Menu
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Luxury Spiced Separation Header Frame */}
      <div className="relative max-w-3xl mx-auto mb-20 text-center">
        {/* FIXED: Dark elegant inversion container */}
        <div className="relative bg-stone-900 border border-stone-800 p-8 sm:p-12 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden">
          {/* FIXED: High-impact underlying fire glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            {/* FIXED: Vibrant sunburst badge layout */}
            <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-400 font-bold bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
              Fresh & Handcrafted
            </span>
            
            {/* FIXED: High contrast white layout text mixing with bright sunset gradients */}
            <h2 className="text-4xl font-black text-stone-50 tracking-tight md:text-5xl font-serif italic uppercase pt-1">
              Island Flavors <span className="font-sans not-italic font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 block mt-2 sm:inline sm:mt-0">
                & Cocktails
              </span>
            </h2>
            
            <div className="w-12 h-[2px] bg-orange-500/40 mx-auto my-4 rounded-full" />
            
            {/* FIXED: Muted light text for premium readable editorial contrast */}
            <p className="text-stone-400 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed tracking-wide">
              {isCarouselMode 
                ? "Use your mouse wheel or swipe on mobile to explore our beachfront collection."
                : "Sourced daily from local fishers and growers, mixed to perfection."}
            </p>
          </div>
        </div>
      </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center items-center gap-2 p-1.5 bg-stone-200/60 backdrop-blur-sm rounded-full w-fit mx-auto mb-16 border border-stone-200">
          {(['all', 'food', 'drinks'] as const).map((category) => (
            <button
              key={category}
              onClick={() => changeCategory(category)}
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
        <div ref={displayAreaRef} className="min-h-[520px] relative flex flex-col justify-center items-center w-full">
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