import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer 
      className="bg-stone-950 text-stone-400 pt-16 md:pt-20 pb-10 md:pb-12 text-sm border-t border-stone-900/60 relative z-10 w-full overflow-x-hidden transform-gpu" 
      style={{ contentVisibility: 'auto' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Footer Information Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 md:pb-16 border-b border-stone-900/60 items-start">
          
                {/* Brand Story block */}
                <div className="sm:col-span-2 lg:col-span-4 space-y-5 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start opacity-90">
                    {/* Using native sizing keeps text rendering sharp and clean in the footer */}
                    <Logo size="md" />
                </div>
                <p className="text-xs text-stone-500 font-light max-w-sm mx-auto lg:mx-0 leading-relaxed">
                    Experiencing beachfront dining at its finest. Fresh local ingredients, handcrafted cocktails, and legendary Boracay sunsets.
                </p>
                
                            
            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start items-center gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-stone-900/50 hover:bg-stone-900 rounded-full border border-stone-800 text-stone-400 hover:text-amber-400 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-stone-900/50 hover:bg-stone-900 rounded-full border border-stone-800 text-stone-400 hover:text-amber-400 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Operations Schedule */}
          <div className="space-y-4 lg:col-span-3 text-center sm:text-left">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-200">Hours</h4>
            <ul className="space-y-2 text-xs text-stone-500 font-light leading-relaxed">
              <li><span className="text-stone-400 font-normal">Mon – Thu:</span> 11:00 AM – 10:00 PM</li>
              <li><span className="text-stone-400 font-normal">Fri – Sat:</span> 11:00 AM – Midnight</li>
              <li><span className="text-stone-400 font-normal">Sunday:</span> 10:00 AM – 10:00 PM</li>
            </ul>
          </div>

          {/* Google Maps Embed */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4 w-full">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-200 text-center sm:text-left">Find Us</h4>
            <div className="w-full h-36 rounded-2xl overflow-hidden border border-stone-900 bg-stone-900/40 relative shadow-inner">
              <iframe 
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.371887469736!2d121.9224856!3d11.9691924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a53c39603ea9bf%3A0x6e9f28d84422dfdf!2sBoracay!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph"
                className="absolute inset-0 w-full h-full border-0 filter grayscale opacity-60 invert contrast-[0.9] brightness-[0.7]" 
                allowFullScreen={false} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Legal Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-600 font-light">
          <p>© {new Date().getFullYear()} Beachfront Dining. All Rights Reserved.</p>
          <p className="tracking-wide">Boracay Island, Philippines</p>
        </div>

      </div>
    </footer>
  );
}