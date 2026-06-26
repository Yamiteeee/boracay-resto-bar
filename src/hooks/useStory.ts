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

  return {
    activeId,
    currentChapter,
    totalChapters,
    storyChapters: STORY_CHAPTERS,
    selectChapter,
  };
}