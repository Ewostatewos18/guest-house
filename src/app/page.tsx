// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { guestHouseInfo } from '@/data/info'; // Import your data

// This is a Server Component, meaning data can be fetched directly here
export default function Home() {
  // Data is directly imported and used - Next.js handles static generation
  const info = guestHouseInfo;

  return ( 
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <Image
          src={info.mainBanner}
          alt={info.name + ' exterior and interior'}
          fill // Use 'fill' in App Router for responsive images
          style={{ objectFit: 'cover' }} // Equivalent to objectFit="cover"
          priority // High priority for LCP (Largest Contentful Paint)
          quality={90} // Adjust quality as needed (default is 75)
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4"><div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-playfair-display drop-shadow-lg">
              {info.name}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8 font-light max-w-2xl mx-auto drop-shadow">
              {info.tagline}
            </p>
            {/* REMOVED <a> TAG */}
            <Link href="/rooms" className="btn-primary text-lg md:text-xl">
              Discover Our Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto my-16 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-playfair-display text-center mb-8">
          Welcome to Your Serene Escape
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          {info.description}
        </p>
        <div className="text-center mt-10">
          {/* REMOVED <a> TAG */}
          <Link href="/about" className="text-blue-600 hover:underline text-lg font-semibold">
            Learn More About Us &rarr;
          </Link>
        </div>
      </section>

      {/* Call to Action Sections */}
      <section className="container mx-auto my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-3xl font-semibold mb-4 text-blue-800 font-playfair-display">Explore Our Rooms</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Browse our selection of comfortable and elegant rooms, each designed for your ultimate relaxation.
            </p>
            {/* REMOVED <a> TAG */}
            <Link href="/rooms" className="btn-primary">
              View Rooms
            </Link>
          </div>
          <div className="bg-green-50 p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-3xl font-semibold mb-4 text-green-800 font-playfair-display">Discover Amenities</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              From complimentary breakfast to a tranquil garden, enjoy features that enhance your stay.
            </p>
            {/* REMOVED <a> TAG */}
            <Link href="/amenities" className="btn-primary bg-green-600 hover:bg-green-700">
              See Amenities
            </Link>
          </div>
          <div className="bg-purple-50 p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-3xl font-semibold mb-4 text-purple-800 font-playfair-display">Get In Touch</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Have questions or need assistance? Our friendly team is here to help you plan your visit.
            </p>
            {/* REMOVED <a> TAG */}
            <Link href="/contact" className="btn-primary bg-purple-600 hover:bg-purple-700">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}