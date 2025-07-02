// src/app/rooms/page.tsx
import RoomCard from '@/components/RoomCard';
import { rooms, Room } from '@/data/rooms'; // Import your mock data

// This is a Server Component, so you can fetch data directly
// Next.js will automatically static render this page at build time
// as it doesn't use dynamic functions like headers() or cookies()
export const metadata = {
  title: 'Our Rooms & Suites | Serenity Retreat',
  description: 'Explore the comfortable and serene rooms at Serenity Retreat Guest House, offering a variety of options for solo travelers, couples, and families.',
};

export default function RoomsPage() {
  // Data is imported directly and used. Next.js knows to pre-render this.
  const allRooms: Room[] = rooms;

  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-playfair-display text-center mb-12">
        Discover Our Comforting Rooms
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}