// src/app/book/page.tsx
import Link from 'next/link';
import Image from 'next/image'; // Ensure Image is imported
import { guestHouseInfo } from '@/data/info';
import { rooms } from '@/data/rooms'; // Import rooms data to populate room type options

export const metadata = {
  title: `Book Your Stay | ${guestHouseInfo.name}`,
  description: `Easily book your peaceful and comfortable stay at ${guestHouseInfo.name}. Fill out our inquiry form or contact us directly for reservations.`,
};

export default function BookPage() {
  const info = guestHouseInfo;

  return (
    <main> {/* Wrap content in <main> for semantic HTML */}
      {/* Main Booking Section: Form on Left, Image with Info on Right */}
      <section className="container mx-auto my-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> {/* items-stretch ensures columns are equal height */}
          {/* Booking Inquiry Form */}
          <div className="card-base bg-white p-8 rounded-lg shadow-xl self-stretch"> {/* self-stretch to fill available height */}
            <h1 className="text-4xl md:text-5xl font-bold font-playfair-display text-neutral-800 mb-8 border-b-2 border-amber-500 pb-3">
              Book Your Serene Stay
            </h1>
            <p className="text-lg text-neutral-700 mb-6">
              Please fill out the form below with your preferred dates and room type, and our team will get back to you shortly with availability and pricing.
            </p>
            <form className="space-y-6">
              {/* Personal Details */}
              <h3 className="text-2xl font-semibold text-neutral-700 mb-4 font-playfair-display">Your Details</h3>
              <div>
                <label htmlFor="fullName" className="block text-neutral-700 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-800 transition-colors"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-neutral-700 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-800 transition-colors"
                  placeholder="jane.doe@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-neutral-700 text-sm font-medium mb-2">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-neutral-30- rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-800 transition-colors"
                  placeholder="+251 9XX XXX XXXX"
                />
              </div>

              {/* Reservation Details */}
              <h3 className="text-2xl font-semibold text-neutral-700 pt-6 mb-4 font-playfair-display border-t border-neutral-200">Reservation Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="checkInDate" className="block text-neutral-700 text-sm font-medium mb-2">Check-in Date</label>
                  <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-800 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="checkOutDate" className="block text-neutral-700 text-sm font-medium mb-2">Check-out Date</label>
                  <input
                    type="date"
                    id="checkOutDate"
                    name="checkOutDate"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-800 transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="numGuests" className="block text-neutral-700 text-sm font-medium mb-2">Number of Guests</label>
                  <select
                    id="numGuests"
                    name="numGuests"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-800 transition-colors"
                    required
                  >
                    <option value="">Select</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="roomType" className="block text-neutral-700 text-sm font-medium mb-2">Preferred Room Type</label>
                  <select
                    id="roomType"
                    name="roomType"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-800 transition-colors"
                  >
                    <option value="">Any</option>
                    {rooms.map(room => ( // Dynamically populate room types from data
                      <option key={room.id} value={room.name}>{room.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="specialRequests" className="block text-neutral-700 text-sm font-medium mb-2">Special Requests (Optional)</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-800 resize-y transition-colors"
                  placeholder="e.g., dietary restrictions, early check-in, quiet room"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-3 text-xl">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Right Column: Image with Overlaid Content (Why Book Direct & Contact Info) */}
          <div className="relative rounded-lg overflow-hidden shadow-xl min-h-[400px] flex items-center justify-center lg:min-h-0"> {/* min-h for small screens */}
            <Image
              src="/images/image_964023.jpg" // Using the image from your assets
              alt="Beautiful guest house interior for booking"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw" // Responsive image sizing
              className="brightness-60 z-0" // Dim the image for text readability
            />
            <div className="absolute inset-0 bg-neutral-900/50 flex flex-col items-center justify-center p-8 z-10 text-white">
              <h2 className="text-3xl font-bold font-playfair-display mb-6 text-amber-200 text-center drop-shadow-md">
                Experience the Serenity
              </h2>
              <p className="text-lg mb-8 text-center max-w-md text-neutral-100 leading-relaxed drop-shadow-md">
                Booking directly with us ensures the best rates, personalized service, and exclusive offers for your perfect retreat.
              </p>

              {/* Quick Contact Details within the image overlay */}
              <div className="space-y-4 text-lg text-center">
                <p className="flex items-center justify-center">
                  <span className="material-symbols-outlined text-amber-300 text-3xl mr-3">phone</span>
                  <a href={`tel:${info.phone}`} className="hover:underline">{info.phone}</a>
                </p>
                <p className="flex items-center justify-center">
                  <span className="material-symbols-outlined text-amber-300 text-3xl mr-3">mail</span>
                  <a href={`mailto:${info.email}`} className="hover:underline">{info.email}</a>
                </p>
              </div>

              <Link href="/contact" className="btn-secondary mt-10 text-xl px-8 py-3">
                Go to Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process Steps (Optional, but good for user guidance) */}
      <section className="bg-stone-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair-display text-center text-neutral-800 mb-12">
            Our Simple Booking Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="card-base bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-amber-700 text-6xl mb-4">edit_document</span>
              <h3 className="text-2xl font-semibold font-playfair-display text-neutral-800 mb-3">1. Submit Inquiry</h3>
              <p className="text-neutral-600 leading-relaxed">
                Fill out the form with your preferred dates, room type, and contact details.
              </p>
            </div>
            <div className="card-base bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-amber-700 text-6xl mb-4">call</span>
              <h3 className="text-2xl font-semibold font-playfair-display text-neutral-800 mb-3">2. Get Confirmation</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our team will review your request and contact you within 24 hours to confirm availability and details.
              </p>
            </div>
            <div className="card-base bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-amber-700 text-6xl mb-4">check_circle</span>
              <h3 className="text-2xl font-semibold font-playfair-display text-neutral-800 mb-3">3. Enjoy Your Stay</h3>
              <p className="text-neutral-600 leading-relaxed">
                Once confirmed, your reservation is complete! Prepare for a relaxing experience at our guesthouse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section (Re-used from other pages for consistency) */}
      <section className="text-center my-16 p-8 bg-stone-50 rounded-lg max-w-4xl mx-auto shadow-lg">
        <h2 className="text-3xl font-playfair-display text-neutral-800 mb-6">
          Have More Questions?
        </h2>
        <p className="text-lg text-neutral-700 max-w-2xl mx-auto mb-8">
          If you have specific inquiries before booking, our team is happy to help.
        </p>
        <Link href="/contact" className="btn-primary text-xl px-8 py-3">
          Go to Contact Page
        </Link>
      </section>
    </main>
  );
}