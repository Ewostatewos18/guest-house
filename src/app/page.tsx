// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { guestHouseInfo } from '@/data/info'; // Import your data
import { rooms } from '@/data/rooms'; // Import rooms data
import { testimonials } from '../data/testimonials'; // Adjusted path to match the correct location
import RoomCard from '@/components/RoomCard'; // Import RoomCard component

// This is a Server Component, meaning data can be fetched directly here
export default function Home() {
  // Data is directly imported and used - Next.js handles static generation
  const info = guestHouseInfo;

  return (
    <>
      {/* Hero Section - Simplified Dark Overlay, no booking form */}
      <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center text-white text-center">
        <Image
          src={info.mainBanner} // This should point to image_964023.jpg for the new look
          alt={info.name + ' interior and amenities'}
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={90}
          sizes="100vw"
          className="z-0 filter brightness-60 !h-full !w-full" // Increased filter to brightness-60 for better contrast
        />
        {/* Simple Dark Overlay for consistent contrast */}
        <div className="absolute inset-0 bg-neutral-900/70 flex flex-col items-center justify-center p-4 z-10"> {/* Using bg-neutral-900/70 for robust opacity */}
          <div className="animate-fade-in-up max-w-5xl px-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 font-playfair-display drop-shadow-lg text-white leading-tight">
              {info.name} 
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-12 font-light max-w-4xl mx-auto drop-shadow-lg text-neutral-100 leading-relaxed">
              {info.tagline}
            </p>
            {/* Re-introduce a primary CTA since booking form is removed */}
            <Link href="/rooms" className="btn-primary text-xl md:text-2xl px-10 py-4">
              Explore Our Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - This links to the new About page */}
      <section className="container mx-auto my-24 p-10 card-base bg-white">
        <h2 className="text-4xl md:text-5xl font-playfair-display text-center mb-12 text-neutral-800 leading-tight">
          Welcome to Your Serene Escape
        </h2>
        <p className="text-lg md:text-xl text-neutral-700 text-center max-w-4xl mx-auto leading-relaxed mb-10">
          {info.description}
        </p>
        <div className="text-center mt-12">
          <Link href="/about" className="text-amber-700 hover:underline text-lg font-semibold">
            Learn More About Us &rarr;
          </Link>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="container mx-auto my-24 px-4">
        <h2 className="text-4xl md:text-5xl font-playfair-display text-center mb-16 text-neutral-800 leading-tight">
          Our Most Popular Rooms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Display first 3 rooms as featured */}
          {rooms.slice(0, 3).map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/rooms" className="btn-secondary text-xl px-8 py-3">
            View All Rooms
          </Link>
        </div>
      </section>

      {/* Guest Testimonials Section */}
      <section className="bg-stone-50 py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair-display text-center mb-16 text-neutral-800 leading-tight">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-base bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-amber-700 text-6xl mb-4">format_quote</span>
                <p className="text-lg text-neutral-700 italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="font-semibold text-neutral-800 text-xl font-playfair-display">
                  {testimonial.author}
                </p>
                {testimonial.location && (
                  <p className="text-sm text-neutral-500 mt-1">
                    {testimonial.location}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Sections */}
      <section className="container mx-auto my-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="card-base text-center bg-stone-50 p-8 flex flex-col items-center justify-between h-full">
            <div>
              <span className="material-symbols-outlined text-amber-700 text-7xl mb-6">hotel</span>
              <h3 className="text-3xl font-semibold mb-4 text-neutral-800 font-playfair-display">Explore Our Rooms</h3>
              <p className="text-neutral-700 mb-8 leading-relaxed">
                Browse our selection of comfortable and elegant rooms, each designed for your ultimate relaxation.
              </p>
            </div>
            <Link href="/rooms" className="btn-primary">
              View Rooms
            </Link>
          </div>
          <div className="card-base text-center bg-stone-50 p-8 flex flex-col items-center justify-between h-full">
            <div>
              <span className="material-symbols-outlined text-neutral-700 text-7xl mb-6">spa</span>
              <h3 className="text-3xl font-semibold mb-4 text-neutral-800 font-playfair-display">Discover Amenities</h3>
              <p className="text-neutral-700 mb-8 leading-relaxed">
                From complimentary breakfast to a tranquil garden, enjoy features that enhance your stay.
              </p>
            </div>
            <Link href="/amenities" className="btn-secondary">
              See Amenities
            </Link>
          </div>
          <div className="card-base text-center bg-stone-50 p-8 flex flex-col items-center justify-between h-full">
            <div>
              <span className="material-symbols-outlined text-amber-700 text-7xl mb-6">mail</span>
              <h3 className="text-3xl font-semibold mb-4 text-neutral-800 font-playfair-display">Get In Touch</h3>
              <p className="text-neutral-700 mb-8 leading-relaxed">
                Have questions or need assistance? Our friendly team is here to help you plan your visit.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}