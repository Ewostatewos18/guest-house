// src/app/rooms/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { rooms, Room } from '@/data/rooms';

// 1. generateStaticParams: Tells Next.js which pages to pre-render at build time
export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

// 2. generateMetadata (Optional): Dynamic metadata for each room page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const room = rooms.find((r) => r.slug === params.slug);

  if (!room) {
    return {
      title: 'Room Not Found',
      description: 'The requested room could not be found.',
    };
  }

  return {
    title: `${room.name} | Serenity Retreat`,
    description: room.shortDescription,
    // Add Open Graph or Twitter Card meta for social sharing if desired
    openGraph: {
      images: room.galleryImages.length > 0 ? room.galleryImages[0] : '/images/default-room.jpg',
    },
  };
}

// 3. Room Detail Page Component (Server Component)
export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const room: Room | undefined = rooms.find((r) => r.slug === params.slug);

  if (!room) {
    // This case should ideally not be hit with fallback: false in generateStaticParams
    // but it's good practice for type safety and clarity.
    return (
        <div className="container mx-auto py-20 text-center">
            <h1 className="text-4xl font-bold text-red-600">Room Not Found</h1>
            <p className="text-lg text-gray-700 mt-4">The room you are looking for does not exist.</p>
            {/* REMOVED <a> TAG */}
            <Link href="/rooms" className="btn-primary mt-8">
              View All Rooms
            </Link>
        </div>
    );
  }

  return (
    <article className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-playfair-display text-center mb-10">{room.name}</h1>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {room.galleryImages.map((imgSrc, index) => (
          <div key={index} className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <Image
              src={imgSrc}
              alt={`${room.name} - ${index + 1}`}
              fill // Use 'fill' for responsive
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizes
              loading="lazy" // Lazy load images in the gallery
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </div>
        ))}
      </div>

      {/* Room Details */}
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-700 font-playfair-display">Room Overview</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">{room.longDescription}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Room Type:</h3>
            <p className="text-lg text-gray-700 capitalize">{room.type}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Capacity:</h3>
            <p className="text-lg text-gray-700">{room.capacity} Guest{room.capacity > 1 ? 's' : ''}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Beds:</h3>
            <p className="text-lg text-gray-700">{room.beds}</p>
          </div>
          {room.sizeSqFt && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Size:</h3>
              <p className="text-lg text-gray-700">{room.sizeSqFt} sq ft</p>
            </div>
          )}
          <div className="lg:col-span-3"> {/* Span full width on larger screens */}
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Price:</h3>
            <p className="text-blue-600 font-bold text-2xl">{room.priceRange}</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-playfair-display">Exclusive Room Features:</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-5 text-gray-700 text-lg mb-8">
          {room.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="text-center mt-10">
          {/* REMOVED <a> TAG */}
          <Link href="/book" className="btn-primary text-xl md:text-2xl">
            Inquire About This Room
          </Link>
        </div>
      </div>
    </article>
  );
}