// src/data/amenities.ts

export interface Amenity {
  id: string;
  name: string;
  description: string;
  iconName?: string; // CHANGED from iconUrl to iconName
}

export const amenities: Amenity[] = [
  {
    id: 'am001',
    name: 'Free Wi-Fi',
    description: 'High-speed internet available throughout the premises, keeping you connected.',
    iconName: 'wifi', // Material Symbol name
  },
  {
    id: 'am002',
    name: 'Complimentary Breakfast',
    description: 'Start your day right with our delicious continental breakfast, served fresh daily.',
    iconName: 'restaurant', // Material Symbol name
  },
  {
    id: 'am003',
    name: '24/7 Front Desk',
    description: 'Our friendly and attentive staff are available around the clock to assist with any needs.',
    iconName: 'support_agent', // Material Symbol name
  },
  {
    id: 'am004',
    name: 'Tranquil Garden',
    description: 'Relax and unwind in our beautifully landscaped garden, a serene escape within the city.',
    iconName: 'park', // Material Symbol name
  },
  {
    id: 'am005',
    name: 'Free Parking',
    description: 'Secure and complimentary parking space available for all our guests.',
    iconName: 'local_parking', // Material Symbol name
  },
  {
    id: 'am006',
    name: 'Airport Shuttle',
    description: 'Convenient and comfortable airport transfer services available upon request, for a hassle-free journey.',
    iconName: 'airport_shuttle', // Material Symbol name
  },
  {
    id: 'am007',
    name: 'Laundry Service',
    description: 'Professional laundry and dry-cleaning services available to keep you fresh during your stay.',
    iconName: 'local_laundry_service', // Material Symbol name
  },
  {
    id: 'am008',
    name: 'Daily Housekeeping',
    description: 'Enjoy a clean and tidy room every day with our meticulous housekeeping service.',
    iconName: 'cleaning_services', // Material Symbol name
  },
];