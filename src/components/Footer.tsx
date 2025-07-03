// src/components/Footer.tsx
import Link from 'next/link';
import { guestHouseInfo } from '@/data/info'; // Assuming you have data/info.ts

// Import Font Awesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF, // Facebook icon
  faInstagram, // Instagram icon
  faLinkedinIn, // LinkedIn icon
  faXTwitter, // Twitter (formerly X) icon
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope, // Envelope icon for email
  faPhone, // Phone icon for contact
} from '@fortawesome/free-solid-svg-icons'; // Solid icons for general purpose like phone/mail

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const aboutSnippet = guestHouseInfo.description.substring(0, 150).trim();

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">

          {/* Brand/About Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-playfair-display font-semibold mb-4 text-amber-400">
              {guestHouseInfo.name}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              {aboutSnippet}{aboutSnippet.length === 150 ? '...' : ''}
              <Link href="/about" className="text-amber-400 hover:text-amber-200 transition-colors ml-1">
                Read More
              </Link>
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-5 mt-6">
              {/* Facebook Icon */}
              {guestHouseInfo.social.facebook && (
                <a href={guestHouseInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-neutral-400 hover:text-amber-400 transition-colors text-3xl">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              )}
              {/* Instagram Icon */}
              {guestHouseInfo.social.instagram && (
                <a href={guestHouseInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-400 hover:text-amber-400 transition-colors text-3xl">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              )}
              {/* LinkedIn Icon (example) */}
              {guestHouseInfo.social.linkedin && ( // Assuming you add linkedin to guestHouseInfo.social
                <a href={guestHouseInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-400 hover:text-amber-400 transition-colors text-3xl">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              )}
              {/* Twitter/X Icon (example) */}
              {guestHouseInfo.social.twitter && ( // Assuming you add twitter to guestHouseInfo.social
                <a href={guestHouseInfo.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-neutral-400 hover:text-amber-400 transition-colors text-3xl">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              )}
              {/* Mail/Email Icon (example - for a general contact email, not necessarily social) */}
              {guestHouseInfo.email && ( // Using email from guestHouseInfo
                <a href={`mailto:${guestHouseInfo.email}`} aria-label="Email" className="text-neutral-400 hover:text-amber-400 transition-colors text-3xl">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-playfair-display font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">
                  About Us
                </Link>
                </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-playfair-display font-semibold mb-4 text-amber-400">Contact Info</h3>
            <div className="space-y-3 text-sm">
                <p className="flex items-start justify-center md:justify-start">
                    <span className="material-symbols-outlined text-amber-400 mr-3 text-lg">location_on</span>
                    <span className="text-neutral-400">{guestHouseInfo.address}</span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                    {/* Phone icon for contact info section */}
                    <FontAwesomeIcon icon={faPhone} className="text-amber-400 mr-3 text-lg" />
                    <a href={`tel:${guestHouseInfo.phone}`} className="text-neutral-400 hover:text-amber-400 transition-colors">{guestHouseInfo.phone}</a>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                    {/* Mail icon for contact info section */}
                    <FontAwesomeIcon icon={faEnvelope} className="text-amber-400 mr-3 text-lg" />
                    <a href={`mailto:${guestHouseInfo.email}`} className="text-neutral-400 hover:text-amber-400 transition-colors">{guestHouseInfo.email}</a>
                </p>
            </div>
          </div>

          {/* Newsletter Signup (Placeholder) */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-playfair-display font-semibold mb-4 text-amber-400">Newsletter</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Stay updated with our latest offers and news.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button type="submit" className="btn-primary py-2 text-sm">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <hr className="border-neutral-700 my-8" />

        <p className="text-neutral-500 text-sm text-center">
          &copy; {currentYear} {guestHouseInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}