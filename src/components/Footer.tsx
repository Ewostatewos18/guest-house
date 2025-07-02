// src/components/Footer.tsx
import Link from 'next/link';
import { guestHouseInfo } from '@/data/info'; // Assuming you have data/info.ts

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
              {guestHouseInfo.description.substring(0, 150)}...
              {/* REMOVED <a> TAG */}
              <Link href="/about" className="text-blue-400 hover:underline ml-1">
                Read More
              </Link>
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-400">{guestHouseInfo.address}</p>
            {/* These are standard <a> tags for phone/email, not Next.js <Link> components, so they are fine */}
            <p className="text-gray-400">Phone: <a href={`tel:${guestHouseInfo.phone}`} className="text-blue-400 hover:underline">{guestHouseInfo.phone}</a></p>
            <p className="text-gray-400">Email: <a href={`mailto:${guestHouseInfo.email}`} className="text-blue-400 hover:underline">{guestHouseInfo.email}</a></p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul>
              <li>
                {/* REMOVED <a> TAG */}
                <Link href="/rooms" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                {/* REMOVED <a> TAG */}
                <Link href="/amenities" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                {/* REMOVED <a> TAG */}
                <Link href="/book" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                {/* REMOVED <a> TAG */}
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons (These are standard <a> tags, not Next.js <Link> components, so they are fine) */}
        <div className="flex justify-center space-x-6 mt-6">
          {guestHouseInfo.social.facebook && (
            <a href={guestHouseInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">Facebook</a>
          )}
          {guestHouseInfo.social.instagram && (
            <a href={guestHouseInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">Instagram</a>
          )}
        </div>

        <p className="text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} {guestHouseInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}