// src/data/rooms.ts

export interface Room {
    id: string;
    slug: string; // For URL, e.g., 'cozy-single-room'
    name: string; // e.g., "Cozy Single Room"
    type: 'single' | 'double' | 'suite' | 'family';
    capacity: number; // Max number of guests
    beds: string; // e.g., "1 King Bed" or "2 Twin Beds"
    sizeSqFt?: number; // Optional room size
    priceRange: string; // e.g., "from $80 / night" (since this is showcase, not live pricing)
    shortDescription: string;
    longDescription: string;
    features: string[]; // Specific features for this room, e.g., "City View", "Private Balcony"
    thumbnailUrl: string; // Image path for room listing card
    galleryImages: string[]; // Array of image paths for the detail page
  }
  
  export const rooms: Room[] = [
    {
      id: 'rm001',
      slug: 'cozy-single-room',
      name: 'Cozy Single Room',
      type: 'single',
      capacity: 1,
      beds: '1 Single Bed',
      priceRange: 'from $50 / night',
      shortDescription: 'Perfect for solo travelers seeking comfort and peace.',
      longDescription: 'Our Cozy Single Room offers a quiet retreat with a comfortable single bed, private bathroom, and ample workspace. Enjoy natural light and a calming view of our lush garden. Equipped with modern amenities to ensure a pleasant and productive stay for individuals.',
      features: ['Garden View', 'Work Desk', 'Private Bathroom', 'Air Conditioning'],
      thumbnailUrl: '/images/rooms/room001-thumb.jpg',
      galleryImages: [
        '/images/rooms/room001-1.jpg',
        '/images/rooms/room001-2.jpg',
        '/images/rooms/room001-3.jpg',
      ],
    },
    {
      id: 'rm002',
      slug: 'spacious-double-deluxe',
      name: 'Spacious Double Deluxe',
      type: 'double',
      capacity: 2,
      beds: '1 King Bed',
      sizeSqFt: 350,
      priceRange: 'from $120 / night',
      shortDescription: 'Luxurious comfort for couples with modern amenities.',
      longDescription: 'Indulge in the Spacious Double Deluxe, featuring a plush king-sized bed, a cozy seating area, and an elegant en-suite bathroom. Perfect for a romantic getaway, this room provides ample space and premium facilities, including a smart TV and city views.',
      features: ['City View', 'Sitting Area', 'Smart TV', 'En-suite Bathroom', 'King Bed'],
      thumbnailUrl: '/images/rooms/room002-thumb.jpg',
      galleryImages: [
        '/images/rooms/room002-1.jpg',
        '/images/rooms/room002-2.jpg',
        '/images/rooms/room002-3.jpg',
        '/images/rooms/room002-4.jpg',
      ],
    },
    {
      id: 'rm003',
      slug: 'family-suite',
      name: 'Family Suite',
      type: 'family',
      capacity: 4,
      beds: '1 Queen Bed, 2 Twin Beds',
      sizeSqFt: 500,
      priceRange: 'from $180 / night',
      shortDescription: 'Ample space and comfort for families traveling together.',
      longDescription: 'Our Family Suite is designed for maximum comfort, offering two separate sleeping areas, a spacious living room, and a large private bathroom. Ideal for extended stays, it includes a convenient kitchenette and connects to an adjacent room if needed, ensuring privacy and convenience for all.',
      features: ['Separate Living Area', 'Kitchenette', 'Two Bedrooms', 'Connecting Rooms Available', 'Large Private Bathroom'],
      thumbnailUrl: '/images/rooms/room003-thumb.jpg',
      galleryImages: [
        '/images/rooms/room003-1.jpg',
        '/images/rooms/room003-2.jpg',
        '/images/rooms/room003-3.jpg',
        '/images/rooms/room003-4.jpg',
        '/images/rooms/room003-5.jpg',
      ],
    },
  ];