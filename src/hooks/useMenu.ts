'use client';
import { useState, useRef, useEffect } from 'react';
import { menuItems } from '@/data/menuData';

export function useMenu() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'drinks'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollCooldown = useRef(false);
  const displayAreaRef = useRef<HTMLDivElement>(null);
  const [xOffset, setXOffset] = useState(220);

  // Responsive track spacing for carousel cards
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

  // Mouse Wheel Carousel Scroll Event Binding
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

  // Mobile Swipe Gesture Normalization Wrapper
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 40; 
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  const changeCategory = (category: 'all' | 'food' | 'drinks') => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  return {
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
  };
}