import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 font-medium rounded-full transition-all duration-300 text-center inline-block cursor-pointer';
  
  const variants = {
    // Sunset Gold / Orange vibe
    primary: 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40',
    // Ocean Teal/Blue vibe
    secondary: 'bg-cyan-900 hover:bg-cyan-950 text-white',
    // Clean transparent beach style
    outline: 'border-2 border-white text-white hover:bg-white hover:text-cyan-950',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}