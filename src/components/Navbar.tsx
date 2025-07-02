// src/components/Navbar.tsx (After Fix)
import Link from 'next/link';
import Image from 'next/image'; // For potential logo

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Title */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
        >
          {/* Example: If you have a logo image */}
          {/* <Image src="/images/logo.png" alt="Serenity Retreat Logo" width={150} height={40} /> */}
          Serenity Retreat
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/rooms"
            className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
          >
            Rooms
          </Link>
          <Link
            href="/amenities"
            className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
          >
            Amenities
          </Link>
          <Link
            href="/about"
            className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Book Now Button */}
        <Link
          href="/book"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button (Optional, for responsive design) */}
        {/* <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div> */}
      </div>
    </nav>
  );
}