// src/components/RoomCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Room } from '@/data/rooms'; // Import the Room interface

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* REMOVED <a> TAG */}
      <Link href={`/rooms/${room.slug}`}>
        <div className="relative w-full h-56 bg-gray-200">
          <Image
            src={room.thumbnailUrl}
            alt={room.name}
            fill // Use 'fill' in App Router for responsive images
            style={{ objectFit: 'cover' }} // Equivalent to objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize based on typical card size
            priority={false} // Don't prioritize all cards
            loading="lazy" // Lazy load images not in the initial viewport
            placeholder="blur" // Requires blurDataURL or a tiny image
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-playfair-display text-blue-800">{room.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{room.beds} • Max Guests: {room.capacity}</p>
          <p className="text-gray-700 mb-4 line-clamp-3">{room.shortDescription}</p> {/* Use line-clamp for neatness */}
          <p className="text-blue-600 font-bold text-xl mb-4">{room.priceRange}</p>
          <span className="text-blue-500 hover:underline inline-block font-medium">View Details &rarr;</span>
        </div>
      </Link>
    </div>
  );
}