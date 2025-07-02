// src/app/book/page.tsx
import Link from 'next/link';
import { guestHouseInfo } from '@/data/info';

export const metadata = {
  title: `Book Your Stay | Serenity Retreat`,
  description: `Information on how to book a room at ${guestHouseInfo.name}. Contact us directly for reservations.`,
};

export default function BookPage() {
  const info = guestHouseInfo;

  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-playfair-display text-center mb-12">
        Book Your Stay at Serenity Retreat
      </h1>
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Thank you for your interest in booking a room at {info.name}!
          For the best and most personalized service, we encourage you to contact us directly to check availability and make your reservation.
        </p>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 font-playfair-display text-blue-800">Contact Us Directly</h2>
          <p className="text-xl text-gray-800 mb-2 font-semibold">Phone:</p>
          <p className="text-lg text-gray-700 mb-4">
            <a href={`tel:${info.phone}`} className="text-blue-600 hover:underline">{info.phone}</a>
          </p>
          <p className="text-xl text-gray-800 mb-2 font-semibold">Email:</p>
          <p className="text-lg text-gray-700 mb-4">
            <a href={`mailto:${info.email}`} className="text-blue-600 hover:underline">{info.email}</a>
          </p>
        </div>

        <p className="text-md md:text-lg text-gray-600 mb-6">
          Our team will be delighted to assist you with any questions, provide detailed information about our rooms, and help secure your dates for a peaceful stay.
        </p>

        {/* Optional: Add a link to a form service like Formspree if you don't have a backend yet */}
        {/* REMOVED <a> TAG */}
        {/* <Link href="https://formspree.io/f/yourformid" target="_blank" rel="noopener noreferrer" className="btn-primary text-xl">
          Send Us an Inquiry
        </Link> */}
      </div>
    </section>
  );
}