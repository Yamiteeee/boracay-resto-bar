'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useCallback } from 'react';
import { useStory } from '@/hooks/useStory';

// Pre-computed spring config — defined outside component to avoid re-creation on every render
const SPRING = { type: 'spring', stiffness: 120, damping: 20, mass: 0.8 } as const;
const TEXT_TRANSITION = { duration: 0.28, ease: [0.25, 1, 0.5, 1] } as const;

// Clamp distance to the nearest side of the carousel
function wrapDistance(index: number, activeId: number, total: number): number {
  let d = index - activeId;
  if (d > total / 2) d -= total;
  if (d < -total / 2) d += total;
  return d;
}

export default function OurStory() {
  const {
    activeId,
    currentChapter,
    totalChapters,
    storyChapters,
    selectChapter,
    handleDragEnd,
  } = useStory();

  // Memoize the per-card animate values so unchanged cards skip diffing
  const cardAnimations = useMemo(
    () =>
      storyChapters.map((chapter, index) => {
        const isSelected = chapter.id === activeId;
        const d = wrapDistance(index, activeId, totalChapters);
        return {
          isSelected,
          animate: {
            rotate: isSelected ? -1 : d * 9,
            x: isSelected ? 0 : d * 25,
            y: isSelected ? -8 : Math.abs(d) * 6,
            scale: isSelected ? 1 : 0.92,
            // Collapse to a single brightness + blur value — avoids re-compositing unchanged cards
            filter: isSelected
              ? 'brightness(1) contrast(1) blur(0px)'
              : 'brightness(0.65) contrast(1) blur(0.4px)',
          },
          zIndex: isSelected ? 40 : 30 - Math.abs(d),
        };
      }),
    [activeId, storyChapters, totalChapters]
  );

  // Stable drag-end ref prevents re-wiring the event listener on every render
  const onDragEnd = useCallback(handleDragEnd, [handleDragEnd]);

  return (
    <section
      id="our-story"
      className="relative w-full bg-transparent py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* Background Graphic Accent Text */}
      <div className="absolute left-[-3%] top-[5%] text-[16vw] font-serif font-black italic opacity-[0.035] text-stone-950 leading-none pointer-events-none uppercase tracking-tighter">
        Heritage
      </div>

      {/* Subtle Warm Ambient Glow */}
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* ─── LEFT COLUMN: CARD FAN STACK ─── */}
        <div className="order-2 lg:order-1 lg:col-span-5 w-full flex items-center justify-center h-[400px] sm:h-[460px] relative">
          <div className="relative w-[240px] sm:w-[280px] h-full flex items-center justify-center">

            {storyChapters.map((chapter, index) => {
              const { isSelected, animate, zIndex } = cardAnimations[index];

              return (
                <motion.div
                  key={chapter.id}
                  // will-change promotes to its own GPU layer — removes paint on every frame
                  style={{ zIndex, willChange: 'transform, filter' }}
                  animate={animate}
                  whileHover={{
                    scale: isSelected ? 1.02 : 0.95,
                    y: isSelected ? -16 : animate.y - 10,
                    // Only override brightness on hover — avoids re-triggering blur
                    filter: 'brightness(1) contrast(1) blur(0px)',
                    transition: { duration: 0.18 },
                  }}
                  drag={isSelected ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragEnd={onDragEnd}
                  transition={SPRING}
                  onClick={() => selectChapter(chapter.id)}
                  className="absolute inset-0 w-full h-[340px] sm:h-[400px] bg-stone-900 p-3 pb-10 sm:pb-12 cursor-pointer drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)] border border-stone-800/40 [clip-path:polygon(0.5%_1%,_99.5%_0%,_98%_35%,_100%_99%,_70%_97.5%,_35%_100%,_0%_98.5%,_1.5%_40%)] origin-bottom"
                >
                  <div className="w-full h-full overflow-hidden bg-stone-800 relative">
                    {/* loading="lazy" defers off-screen image decoding */}
                    <img
                      src={chapter.img}
                      alt="Aplaya Boracay Heritage Card"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="w-full h-full object-cover pointer-events-none select-none contrast-[1.02]"
                    />

                    {!isSelected && (
                      <div className="absolute inset-0 bg-black/15 flex items-center justify-center">
                        <span className="text-[9px] tracking-[0.25em] font-sans font-bold text-stone-200 uppercase bg-stone-950/90 px-2.5 py-1.5 rounded-full border border-stone-800/60 shadow-xl">
                          0{chapter.id + 1}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-2.5 right-4 font-mono text-[9px] text-stone-600 tracking-wider">
                    APLYA-N°00{chapter.id + 1}
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* ─── RIGHT COLUMN: TEXT CONTENT ─── */}
        <div className="order-1 lg:order-2 lg:col-span-7 text-left lg:pl-12 min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={TEXT_TRANSITION}
              // Isolate stacking context so text animation doesn't invalidate card compositing
              style={{ isolation: 'isolate' }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-amber-600" />
                <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs">
                  {currentChapter.tag}
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tighter leading-none font-serif italic uppercase">
                {currentChapter.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 font-sans not-italic font-black block mt-2">
                  {currentChapter.accentTitle}
                </span>
              </h2>

              <div className="space-y-4 text-stone-600 font-light leading-relaxed tracking-wide text-sm sm:text-base max-w-xl pt-2">
                <p>{currentChapter.text1}</p>
                <p>{currentChapter.text2}</p>
              </div>

              <div className="pt-5 flex items-center gap-8 border-t border-stone-200/80">
                <div>
                  <p className="text-2xl font-serif font-black italic text-amber-600 leading-none">
                    {currentChapter.stat1}
                  </p>
                  <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold mt-1.5">
                    {currentChapter.stat1Label}
                  </p>
                </div>
                <div className="w-[1px] h-8 bg-stone-200" />
                <div>
                  <p className="text-2xl font-serif font-black italic text-amber-600 leading-none">
                    {currentChapter.stat2}
                  </p>
                  <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold mt-1.5">
                    {currentChapter.stat2Label}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}