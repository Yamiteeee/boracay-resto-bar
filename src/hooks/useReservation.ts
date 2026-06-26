// src/hooks/useReservation.ts
import { useState, useMemo, useEffect } from 'react';
import { 
  AVAILABLE_TIME_SLOTS, 
  ZONE_OPTIONS, 
  MAX_CAPACITY_PER_SLOT 
} from '@/data/reservationData';

export type StepState = 'search' | 'details' | 'success';

interface MockBooking {
  date: string;
  zone: string;
  time: string;
}

export function useReservation() {
  const [step, setStep] = useState<StepState>('search');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string>('');
  
  // Guard state to delay rendering dynamic evaluations until mounted
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // This only fires on the client machine after hydration is complete
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

  // Safe generation matrix wrapped securely inside useMemo
  const bookingDatabase = useMemo(() => {
    // Return an empty array on the server so it matches the initial client frame
    if (!isHydrated) return [];

    const bookings: MockBooking[] = [];
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
          for (let count = 0; count < finalCount; count++) {
            bookings.push({
              date: dateStr,
              zone: zone.id,
              time: slot.time
            });
          }
        });
      });
    }
    return bookings;
  }, [isHydrated]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = [];
    const firstDayIndex = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDayIndex; i++) days.push(null);
    const totalDays = new Date(year, month + 1, 0).getDate();
    for (let d = 1; d <= totalDays; d++) days.push(new Date(year, month, d));
    return days;
  };

  const handleMonthChange = (direction: 'next' | 'prev') => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + (direction === 'next' ? 1 : -1), 1));
  };

  const currentSelectedZoneObj = ZONE_OPTIONS.find(z => z.id === formData.zone) || ZONE_OPTIONS[0];
  const monthYearString = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
  const calendarDays = getDaysInMonth(currentMonth);
  const todayStr = isHydrated ? new Date().toISOString().split('T')[0] : '';

  const getBookingCountForSlot = (date: string, zone: string, time: string) => {
    if (!isHydrated) return 0;
    return bookingDatabase.filter(res => res.date === date && res.zone === zone && res.time === time).length;
  };

  const getDateBookingStatus = (dateStr: string, zoneId: string) => {
    if (!isHydrated) return 'available';
    
    const slotsStatus = AVAILABLE_TIME_SLOTS.map(slot => {
      return getBookingCountForSlot(dateStr, zoneId, slot.time) >= MAX_CAPACITY_PER_SLOT;
    });

    const fullyBooked = slotsStatus.every(status => status === true);
    const hasSomeBookings = bookingDatabase.some(res => res.date === dateStr && res.zone === zoneId);

    if (fullyBooked) return 'full';
    if (hasSomeBookings) return 'partial';
    return 'available';
  };

  const updateZone = (zoneId: string) => {
    setFormData(prev => ({ ...prev, zone: zoneId, time: '' }));
  };

  const updateTime = (timeStr: string) => {
    setFormData(prev => ({ ...prev, time: timeStr }));
  };

  const updateGuests = (guestsCount: string) => {
    setFormData(prev => ({ ...prev, guests: guestsCount }));
  };

  const resetBooking = () => {
    setFormData(prev => ({ ...prev, time: '' }));
    setStep('search');
  };

  return {
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
    MAX_CAPACITY_PER_SLOT,
    isHydrated // Exposed if you want to conditionally render loaders
  };
}