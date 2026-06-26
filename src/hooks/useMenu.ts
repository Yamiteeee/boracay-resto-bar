'use client';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { menuItems } from '@/data/menuData';

export function useMenu() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'drinks'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayAreaRef = useRef<HTMLDivElement>(null);
  const [xOffset, setXOffset] = useState(220);

  // Cache derived array calculations
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => 
      activeCategory === 'all' ? true : item.category === activeCategory
    );
  }, [activeCategory]);

  const isCarouselMode = activeCategory === 'all';

  // Carousel navigation handlers
  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : prev));
  }, [filteredItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const changeCategory = useCallback((category: 'all' | 'food' | 'drinks') => {
    setActiveCategory(category);
    setCurrentIndex(0);
  }, []);

  // Responsive track spacing for carousel cards
  useEffect(() => {
    const handleResize = () => {
      setXOffset(window.innerWidth < 768 ? 140 : 220);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optimize gesture re-binding for Framer Motion
  const handleDragEnd = useCallback((event: any, info: any) => {
    const swipeThreshold = 40; 
    if (info.offset.x < -swipeThreshold) {
      setCurrentIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : prev));
    } else if (info.offset.x > swipeThreshold) {
      setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
    }
  }, [filteredItems.length]);

  return {
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
  };
}