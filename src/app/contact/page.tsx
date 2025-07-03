// src/app/contact/page.tsx
import Link from 'next/link';
// import Image from 'next/image'; // Image import is no longer needed for the hero
import { guestHouseInfo } from '@/data/info';

export const metadata = {
  title: `Contact Us | ${guestHouseInfo.name}`,
  description: `Get in touch with ${guestHouseInfo.name} for reservations, inquiries, or any assistance.`,
};

export default function ContactPage() {
  const info = guestHouseInfo;

  // Encode the address for the Google Maps URL
  const encodedAddress = encodeURIComponent(info.address);
  // Using a standard embed URL for Google Maps

  // NOTE: Replace 'YOUR_Maps_API_KEY' with your actual Google Maps API key
  // You might need to enable the Maps Embed API and Geocoding API in your Google Cloud Project.

  return (
    <main> {/* Wrap content in <main> for semantic HTML */}
      {/* The previous Hero Section has been removed */}

      {/* Main Contact Form Section */}
      <section className="container mx-auto my-20 px-4">
        <div className="card-base bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto"> {/* Wider form card */}
          <h1 className="text-4xl md:text-5xl font-bold font-playfair-display text-neutral-800 mb-8 border-b-2 border-amber-500 pb-3 text-center">
            Connect With Us
          </h1>
          <p className="text-lg text-neutral-700 mb-6 text-center">
            We're here to assist you with any questions, reservations, or special requests.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-neutral-700 text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-800 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-neutral-700 text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-800 transition-colors"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-neutral-700 text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-800 transition-colors"
                placeholder="Reservation Inquiry or General Question"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-neutral-700 text-sm font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={6} // Make textarea a bit taller
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-800 resize-y transition-colors"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full py-3 text-xl">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Our Details Section - More spread out and visually engaging */}
      <section className="bg-stone-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair-display text-center text-neutral-800 mb-12">
            Find Us & Reach Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12"> {/* Added mb-12 for spacing before map */}
            {/* Address Card */}
            <div className="card-base bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-amber-700 text-6xl mb-4">location_on</span>
              <h3 className="text-2xl font-semibold font-playfair-display text-neutral-800 mb-2">Our Location</h3>
              <p className="text-neutral-700 leading-relaxed">{info.address}</p>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline mt-4">
                Get Directions
              </a>
            </div>

            {/* Phone Card */}
            <div className="card-base bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-amber-700 text-6xl mb-4">phone</span>
              <h3 className="text-2xl font-semibold font-playfair-display text-neutral-800 mb-2">Call Us</h3>
              <p className="text-neutral-700 leading-relaxed">{info.phone}</p>
              <a href={`tel:${info.phone}`} className="text-amber-600 hover:underline mt-4">
                Dial Now
              </a>
            </div>

            {/* Email Card */}
            <div className="card-base bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-amber-700 text-6xl mb-4">mail</span>
              <h3 className="text-2xl font-semibold font-playfair-display text-neutral-800 mb-2">Email Us</h3>
              <p className="text-neutral-700 leading-relaxed">{info.email}</p>
              <a href={`mailto:${info.email}`} className="text-amber-600 hover:underline mt-4">
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section (Re-used from other pages for consistency) */}
      <section className="text-center my-16 p-8 bg-stone-50 rounded-lg max-w-4xl mx-auto shadow-lg">
        <h2 className="text-3xl font-playfair-display text-neutral-800 mb-6">
          Ready to Experience Serenity?
        </h2>
        <p className="text-lg text-neutral-700 max-w-2xl mx-auto mb-8">
          We invite you to discover the charm and comfort of {info.name}. Book your stay with us today!
        </p>
        <Link href="/rooms" className="btn-primary text-xl px-8 py-3">
          View Our Rooms
        </Link>
      </section>
    </main>
  );
}