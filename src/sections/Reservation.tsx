'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useReservation } from '@/hooks/useReservation';
import { 
  AVAILABLE_TIME_SLOTS, 
  DEFAULT_GUEST_OPTIONS, 
  ZONE_OPTIONS 
} from '@/data/reservationData';

export default function Reservation() {
  const {
    step,
    setStep,
    selectedDate,
    setSelectedDate,
    formData,
    currentSelectedZoneObj,
    monthYearString,
    calendarDays,
    todayStr,
    handleMonthChange,
    getBookingCountForSlot,
    getDateBookingStatus,
    updateZone,
    updateTime,
    updateGuests,
    resetBooking,
    MAX_CAPACITY_PER_SLOT
  } = useReservation();

 return (
    // Change id from "reservations" to "reserve" right here:
    <section id="reserve" className="py-20 md:py-28 bg-transparent select-none overflow-hidden relative">
      
      <div className="absolute left-[-5%] bottom-[5%] text-[18vw] font-serif font-black italic opacity-[0.035] text-stone-950 leading-none pointer-events-none uppercase tracking-tighter hidden sm:block">
        Booking
      </div>

      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative max-w-3xl mx-auto mb-20 text-center">
          <div className="relative bg-stone-900 border border-stone-800 p-8 sm:p-12 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-400 font-bold bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
                Oceanside Seating
              </span>
              <h2 className="text-4xl font-black text-stone-50 tracking-tight md:text-5xl font-serif italic uppercase pt-1">
                Secure A Table <span className="font-sans not-italic font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 block mt-2 sm:inline sm:mt-0">
                  & Golden Hours
                </span>
              </h2>
              <div className="w-12 h-[2px] bg-amber-500/40 mx-auto my-4 rounded-full" />
              <p className="text-stone-400 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed tracking-wide">
                Experience premium beachfront dining. Walk-ins are always welcome, but prime seaside lounge decks fill quickly.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto bg-stone-900 border border-stone-800 text-stone-100 rounded-3xl p-6 sm:p-10 shadow-[0_30px_70px_rgba(28,25,23,0.25)] relative overflow-hidden min-h-[420px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 'search' && (
              <motion.form 
                key="search-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={(e) => { e.preventDefault(); if(formData.time) setStep('details'); }}
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* CALENDAR COLLUMN */}
                  <div className="lg:col-span-5 bg-stone-950 border border-stone-850 p-4 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-850 pb-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">{currentSelectedZoneObj.name}</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-400">{monthYearString}</span>
                      </div>
                      <div className="flex gap-1">
                        <button type="button" onClick={() => handleMonthChange('prev')} className="p-1.5 rounded-lg hover:bg-stone-800 text-stone-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg></button>
                        <button type="button" onClick={() => handleMonthChange('next')} className="p-1.5 rounded-lg hover:bg-stone-800 text-stone-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-widest font-semibold text-stone-600">
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <span key={d}>{d}</span>)}
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center text-xs">
                      {calendarDays.map((day, idx) => {
                        if (!day) return <div key={`empty-${idx}`} />;
                        const dayStr = day.toISOString().split('T')[0];
                        const isSelected = selectedDate === dayStr;
                        const isPast = dayStr < todayStr;
                        
                        const bookingStatus = getDateBookingStatus(dayStr, formData.zone);

                        return (
                          <div key={dayStr} className="relative group">
                            <button
                              type="button"
                              disabled={isPast || bookingStatus === 'full'}
                              onClick={() => {
                                setSelectedDate(dayStr);
                                updateTime('');
                              }}
                              className={`w-full py-2 rounded-lg font-medium transition-all relative ${
                                isSelected 
                                  ? 'bg-amber-400 text-stone-950 font-bold' 
                                  : bookingStatus === 'full'
                                    ? 'bg-red-950/40 text-red-500/50 border border-red-900/30 cursor-not-allowed line-through'
                                    : bookingStatus === 'partial'
                                      ? 'text-amber-200 border border-amber-500/30 bg-amber-500/5 hover:bg-stone-800'
                                      : isPast ? 'text-stone-800 cursor-not-allowed opacity-30' : 'text-stone-300 hover:bg-stone-800/60'
                              }`}
                            >
                              {day.getDate()}
                              {bookingStatus === 'partial' && !isSelected && (
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full" />
                              )}
                            </button>

                            {bookingStatus === 'full' && (
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-stone-950 border border-red-900 text-red-400 text-[9px] uppercase tracking-widest font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 whitespace-nowrap">
                                Area Full
                              </div>
                            )}
                            {bookingStatus === 'partial' && (
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-stone-950 border border-amber-700 text-amber-400 text-[9px] uppercase tracking-widest font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 whitespace-nowrap">
                                Limited Slots
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* PREVIEW + SELECTORS COLUMN */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="w-full h-44 rounded-2xl overflow-hidden relative border border-stone-850 bg-stone-950 shadow-inner">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentSelectedZoneObj.id}
                          src={currentSelectedZoneObj.imageUrl} 
                          alt={currentSelectedZoneObj.name}
                          initial={{ opacity: 0, scale: 1.03 }}
                          animate={{ opacity: 0.65, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="w-full h-full object-cover absolute inset-0"
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end pointer-events-none">
                        <div className="space-y-0.5">
                          <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium block">Active Selection</span>
                          <h4 className="text-sm font-bold tracking-wide text-stone-100">{currentSelectedZoneObj.name}</h4>
                        </div>
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 border border-amber-500/20 px-2 py-1 rounded-md">
                          Cap: {currentSelectedZoneObj.capacity}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-xs tracking-wider uppercase font-medium text-stone-400">Party Size</label>
                        <select
                          value={formData.guests}
                          onChange={(e) => updateGuests(e.target.value)}
                          className="bg-stone-950 border border-stone-850 rounded-xl px-4 py-3 text-sm focus:border-amber-500 text-stone-200 outline-none appearance-none cursor-pointer"
                        >
                          {DEFAULT_GUEST_OPTIONS.map(opt => (
                            <option key={opt.value} value={opt.value} className="bg-stone-900">{opt.label}</option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <label className="text-xs tracking-wider uppercase font-medium text-stone-400">Seating Area</label>
                        <select
                          value={formData.zone}
                          onChange={(e) => updateZone(e.target.value)}
                          className="bg-stone-950 border border-stone-850 rounded-xl px-4 py-3 text-sm focus:border-amber-500 text-stone-200 outline-none appearance-none cursor-pointer"
                        >
                          {ZONE_OPTIONS.map(zone => (
                            <option key={zone.id} value={zone.id} className="bg-stone-900">{zone.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* TIME PICKER SLOTS */}
                    <div className="space-y-2">
                      <label className="text-xs tracking-wider uppercase font-medium text-stone-400 block">Available Timings</label>
                      <div className="flex flex-wrap gap-2">
                        {AVAILABLE_TIME_SLOTS.map((slot) => {
                          const currentBookings = getBookingCountForSlot(selectedDate, formData.zone, slot.time);
                          const isSlotFull = currentBookings >= MAX_CAPACITY_PER_SLOT;

                          return (
                            <button
                              type="button"
                              key={slot.id}
                              disabled={isSlotFull}
                              onClick={() => updateTime(slot.time)}
                              className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 border ${
                                formData.time === slot.time
                                  ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-stone-950 border-amber-400 shadow-lg'
                                  : isSlotFull
                                    ? 'bg-stone-950 border-stone-900 text-stone-700 line-through cursor-not-allowed opacity-40'
                                    : 'bg-stone-950 border-stone-850 text-stone-400 hover:text-stone-200'
                              }`}
                            >
                              {slot.time}
                              {isSlotFull && <span className="ml-1 text-[9px] uppercase text-red-500 block">Full</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={!formData.time}
                  className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-xl transition-all ${
                    formData.time 
                      ? 'bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-stone-950 cursor-pointer' 
                      : 'bg-stone-800 text-stone-500 cursor-not-allowed'
                  }`}
                >
                  {formData.time ? `Confirm Table for ${selectedDate} @ ${formData.time}` : 'Select an Available Time Slot'}
                </button>
              </motion.form>
            )}

            {/* CONFIRMATION INPUT STEP */}
            {step === 'details' && (
              <motion.form key="details-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 text-left">
                <p className="text-sm text-stone-400">Please finish configuration by providing booking credentials...</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input type="text" placeholder="Your Name" className="bg-stone-950 border border-stone-850 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:border-amber-500" required />
                  <input type="email" placeholder="Email Address" className="bg-stone-950 border border-stone-850 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:border-amber-500" required />
                  <input type="tel" placeholder="Phone Number" className="bg-stone-950 border border-stone-850 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:border-amber-500" required />
                </div>
                <div className="flex gap-4 pt-2">
                  <button type="button" onClick={() => setStep('search')} className="border border-stone-800 hover:bg-stone-800 text-stone-400 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest">Back</button>
                  <button type="button" onClick={() => setStep('success')} className="flex-1 bg-amber-400 text-stone-950 p-3 rounded-xl text-xs font-bold uppercase tracking-widest">Complete Instant Booking</button>
                </div>
              </motion.form>
            )}

            {/* SUCCESS PANEL */}
            {step === 'success' && (
              <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                </div>
                <h3 className="text-xl text-amber-400 font-serif uppercase tracking-wider">Table Confirmed!</h3>
                <p className="text-sm text-stone-400 mt-2 max-w-sm mx-auto">Your seaside dining space is locked in. A summary confirmation has been routed to your inbox.</p>
                <button type="button" onClick={resetBooking} className="text-xs text-stone-500 mt-6 underline block mx-auto hover:text-stone-300">Book Another Table</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}