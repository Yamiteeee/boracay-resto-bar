'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { 
  AVAILABLE_TIME_SLOTS, 
  ZONE_OPTIONS, 
  MAX_CAPACITY_PER_SLOT 
} from '@/data/reservationData';

export type StepState = 'search' | 'details' | 'success';

export function useReservation() {
  const [step, setStep] = useState<StepState>('search');
  const [currentMonth, setCurrentMonth] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    setSelectedDate(new Date().toISOString().split('T')[0]);
  }, []);

  const [formData, setFormData] = useState({
    guests: '2',
    zone: 'z1', 
    time: '',
    name: '',
    email: '',
    phone: '',
  });

  // ─── 1. OPTIMIZED: CREATE AN O(1) LOOKUP HASH MAP ───
  // Instead of an array of thousands of records, we store counts directly: { "2026-06-27_z1_6:30 PM": 4 }
  const bookingDatabaseMap = useMemo(() => {
    if (!isHydrated) return new Map<string, number>();

    const countsMap = new Map<string, number>();
    const totalDaysToPopulate = 60; 

    for (let i = 0; i < totalDaysToPopulate; i++) {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + i);
      const dateStr = targetDate.toISOString().split('T')[0];
      const dayOfWeek = targetDate.getDay(); 

      ZONE_OPTIONS.forEach((zone) => {
        AVAILABLE_TIME_SLOTS.forEach((slot) => {
          let shouldBookCount = 0;

          if (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0) {
            if (slot.time === '6:30 PM' || slot.time === '8:00 PM') {
              shouldBookCount = MAX_CAPACITY_PER_SLOT;
            } else {
              shouldBookCount = Math.floor(Math.random() * (MAX_CAPACITY_PER_SLOT + 1));
            }
          } else {
            if (zone.id === 'z1' && slot.time === '6:30 PM') {
              shouldBookCount = MAX_CAPACITY_PER_SLOT; 
            } else if (i % 3 === 0 && (slot.time === '8:00 PM' || slot.time === '5:00 PM')) {
              shouldBookCount = 1; 
            }
          }

          const finalCount = Math.min(shouldBookCount, MAX_CAPACITY_PER_SLOT);
          if (finalCount > 0) {
            const cacheKey = `${dateStr}_${zone.id}_${slot.time}`;
            countsMap.set(cacheKey, finalCount);
          }
        });
      });
    }
    return countsMap;
  }, [isHydrated]);

  // ─── 2. MEMOIZED CALENDAR CALCULATIONS ───
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const days = [];
    const firstDayIndex = new Date(year, month, 1).getDay();
    
    for (let i = 0; i < firstDayIndex; i++) days.push(null);
    const totalDays = new Date(year, month + 1, 0).getDate();
    for (let d = 1; d <= totalDays; d++) days.push(new Date(year, month, d));
    
    return days;
  }, [currentMonth]);

  const monthYearString = useMemo(() => {
    return currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
  }, [currentMonth]);

  const currentSelectedZoneObj = useMemo(() => {
    return ZONE_OPTIONS.find(z => z.id === formData.zone) || ZONE_OPTIONS[0];
  }, [formData.zone]);

  const todayStr = useMemo(() => {
    return isHydrated ? new Date().toISOString().split('T')[0] : '';
  }, [isHydrated]);

  // ─── 3. LENTICULAR SPEED STATUS LOOKUPS ───
  const getBookingCountForSlot = useCallback((date: string, zone: string, time: string) => {
    if (!isHydrated) return 0;
    return bookingDatabaseMap.get(`${date}_${zone}_${time}`) || 0;
  }, [isHydrated, bookingDatabaseMap]);

  const getDateBookingStatus = useCallback((dateStr: string, zoneId: string) => {
    if (!isHydrated) return 'available';
    
    let fullyBooked = true;
    let hasSomeBookings = false;

    for (const slot of AVAILABLE_TIME_SLOTS) {
      const count = bookingDatabaseMap.get(`${dateStr}_${zoneId}_${slot.time}`) || 0;
      if (count < MAX_CAPACITY_PER_SLOT) {
        fullyBooked = false;
      }
      if (count > 0) {
        hasSomeBookings = true;
      }
    }

    if (fullyBooked) return 'full';
    if (hasSomeBookings) return 'partial';
    return 'available';
  }, [isHydrated, bookingDatabaseMap]);

  // ─── 4. STABILIZED CALL-STACK DISPATCH ACTIONS ───
  const handleMonthChange = useCallback((direction: 'next' | 'prev') => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + (direction === 'next' ? 1 : -1), 1));
  }, []);

  const updateZone = useCallback((zoneId: string) => {
    setFormData(prev => ({ ...prev, zone: zoneId, time: '' }));
  }, []);

  const updateTime = useCallback((timeStr: string) => {
    setFormData(prev => ({ ...prev, time: timeStr }));
  }, []);

  const updateGuests = useCallback((guestsCount: string) => {
    setFormData(prev => ({ ...prev, guests: guestsCount }));
  }, []);

  const resetBooking = useCallback(() => {
    setFormData(prev => ({ ...prev, time: '' }));
    setStep('search');
  }, []);

  return {
    step,
    setStep,
    selectedDate,
    setSelectedDate,
    formData,
    setFormData, // Exposed to let components directly bind textual input targets
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
    MAX_CAPACITY_PER_SLOT,
    isHydrated
  };
}