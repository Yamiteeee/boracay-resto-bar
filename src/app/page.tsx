'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Menu from '@/sections/Menu';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-stone-50 font-sans antialiased">
      {/* Floating glass header layout */}
      <Navbar />

      <main className="w-full">
        {/* Clean 100vh Banner Section */}
        <Hero />
        
        {/* Smooth, interactive category filtering grid */}
        <Menu />
      </main>

      {/* Island Footer */}
      <footer className="bg-cyan-950 text-white/60 py-8 text-center text-sm border-t border-cyan-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AplayaBar Boracay. All rights reserved.</p>
          <p className="hover:text-amber-400 transition-colors cursor-pointer">Station 2, White Beach, Boracay Island</p>
        </div>
      </footer>
    </div>
  );
}