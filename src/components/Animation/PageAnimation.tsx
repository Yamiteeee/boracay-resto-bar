'use client';
import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface PageAnimationProps {
  children: ReactNode;
  className?: string;
}

// Optimized horizontal slip variants (Slipping in from Left)
export const slipLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -45,      
    scale: 0.99  
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 80, 
      damping: 26,   
      mass: 0.8,
      delay: 0.35   // <-- FIXED: Waits for the ice-fading animation to reveal the canvas before sliding in
    }
  }
};

// Optimized horizontal slip variants (Slipping in from Right)
export const slipRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 45,       
    scale: 0.99  
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 26,
      mass: 0.8,
      delay: 0.35   // <-- FIXED: Symmetrical delay for perfect entrance coordination
    }
  }
};

export default function PageAnimation({ children, className = "" }: PageAnimationProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}