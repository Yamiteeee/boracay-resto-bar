// src/data/reservationData.ts

export interface TimeSlot {
  id: string;
  time: string;
  status: 'available' | 'limited' | 'full';
}

export interface TableOption {
  id: string;
  name: string;
  capacity: string;
  description: string;
  imageUrl: string; 
}

export const DEFAULT_GUEST_OPTIONS = [
  { value: '2', label: '2 Guests (Standard Table)' },
  { value: '4', label: '4 Guests (Family Size)' },
  { value: '6', label: '6 Guests (Lounge Booth)' },
  { value: '8+', label: '8+ Guests (Call to Arrange)' },
];

export const AVAILABLE_TIME_SLOTS: TimeSlot[] = [
  { id: 't1', time: '5:00 PM', status: 'available' },
  { id: 't2', time: '6:30 PM', status: 'limited' }, 
  { id: 't3', time: '8:00 PM', status: 'available' },
  { id: 't4', time: '9:30 PM', status: 'available' },
  { id: 't5', time: '11:00 PM', status: 'limited' },
];

export const ZONE_OPTIONS: TableOption[] = [
  { 
    id: 'z1', 
    name: 'Al Fresco Beachfront', 
    capacity: '2-4', 
    description: 'Direct ocean breeze & panoramic sunset view.',
    imageUrl: 'https://images.unsplash.com/photo-1743804636540-4ee7acde9986?q=80&w=672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  { 
    id: 'z2', 
    name: 'Main Dining Lounge', 
    capacity: '2-6', 
    description: 'Air-conditioned comfort close to live acoustic sessions.',
    imageUrl: 'https://images.unsplash.com/photo-1758561087076-e647b2e2485a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  { 
    id: 'z3', 
    name: 'VIP Deck / Cocktail Bar Area', 
    capacity: '2-8', 
    description: 'Elevated seating looking over the water.',
    imageUrl: 'https://images.unsplash.com/photo-1535023909-6335ea9eb449?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

export const MAX_CAPACITY_PER_SLOT = 2;