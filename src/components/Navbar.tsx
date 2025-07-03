// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-neutral-900 text-white shadow-lg p-4 sticky top-0 z-50"> {/* Darker background for premium feel */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Title */}
        <Link
          href="/"
          className="text-3xl font-bold text-amber-300 hover:text-amber-200 transition-colors font-playfair-display" // Gold accent for logo
        >
          Serenity Retreat
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-lg text-neutral-300 hover:text-amber-200 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/rooms"
            className="text-lg text-neutral-300 hover:text-amber-200 transition-colors font-medium"
          >
            Rooms
          </Link>
          <Link
            href="/amenities"
            className="text-lg text-neutral-300 hover:text-amber-200 transition-colors font-medium"
          >
            Amenities
          </Link>
          <Link
            href="/about"
            className="text-lg text-neutral-300 hover:text-amber-200 transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-lg text-neutral-300 hover:text-amber-200 transition-colors font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Book Now Button */}
        <Link
          href="/book"
          className="btn-primary" // Using the new primary button style (amber)
        >
          Book Now
        </Link>

        {/* Mobile Menu Button (You can implement this later if needed) */}
        {/* <div className="md:hidden">
          <button className="text-neutral-300 hover:text-amber-200 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div> */}
      </div>
    </nav>
  );
}