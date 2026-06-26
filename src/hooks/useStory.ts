'use client';

import { useState, useCallback, useMemo } from 'react';
import { STORY_CHAPTERS } from '@/data/ourStoryData';

export function useStory() {
  const [activeId, setActiveId] = useState(0);
  
  // ─── 1. FREEZE STATIC LENGTH CALCULATIONS ───
  const totalChapters = useMemo(() => STORY_CHAPTERS.length, []);

  // ─── 2. STABILIZE ACTIVE DATA DERIVATION ───
  const currentChapter = useMemo(() => STORY_CHAPTERS[activeId], [activeId]);

  // ─── 3. MEMOIZE NAVIGATION ENGINE TO PREVENT RE-RENDERS ───
  const selectChapter = useCallback((id: number) => {
    setActiveId(id);
  }, []);

  const nextChapter = useCallback(() => {
    setActiveId((prev) => (prev < totalChapters - 1 ? prev + 1 : 0));
  }, [totalChapters]);

  const prevChapter = useCallback(() => {
    setActiveId((prev) => (prev > 0 ? prev - 1 : totalChapters - 1));
  }, [totalChapters]);

  // ─── 4. OPTIMIZE GESTURE RE-BINDING MATRIX ───
  // Using functional updates inside handlers avoids re-creating this function on every slide index update,
  // which means Framer Motion doesn't clear and re-bind event listeners mid-drag.
  const handleDragEnd = useCallback((event: any, info: any) => {
    const swipeThreshold = 40; 
    if (info.offset.x < -swipeThreshold) {
      nextChapter();
    } else if (info.offset.x > swipeThreshold) {
      prevChapter();
    }
  }, [nextChapter, prevChapter]);

  return {
    activeId,
    currentChapter,
    totalChapters,
    storyChapters: STORY_CHAPTERS, // Static reference, safe to pass directly
    selectChapter,
    handleDragEnd,
    nextChapter,
    prevChapter
  };
}