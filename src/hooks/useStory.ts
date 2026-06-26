'use client';
import { useState } from 'react';
import { STORY_CHAPTERS } from '@/data/ourStoryData';

export function useStory() {
  const [activeId, setActiveId] = useState(0);
  const currentChapter = STORY_CHAPTERS[activeId];
  const totalChapters = STORY_CHAPTERS.length;

  const selectChapter = (id: number) => {
    setActiveId(id);
  };

  const nextChapter = () => {
    if (activeId < totalChapters - 1) {
      setActiveId((prev) => prev + 1);
    } else {
      setActiveId(0); // Optional: Loop back to first chapter
    }
  };

  const prevChapter = () => {
    if (activeId > 0) {
      setActiveId((prev) => prev - 1);
    } else {
      setActiveId(totalChapters - 1); // Optional: Loop back to last chapter
    }
  };

  // Mobile Drag/Swipe Gesture Handler for Framer Motion
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 40; // minimum pixels moved to trigger slide change
    if (info.offset.x < -swipeThreshold) {
      nextChapter();
    } else if (info.offset.x > swipeThreshold) {
      prevChapter();
    }
  };

  return {
    activeId,
    currentChapter,
    totalChapters,
    storyChapters: STORY_CHAPTERS,
    selectChapter,
    handleDragEnd,
    nextChapter,
    prevChapter
  };
}