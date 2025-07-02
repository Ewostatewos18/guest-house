// src/app/contact/page.tsx
import Link from 'next/link';
import { guestHouseInfo } from '@/data/info';

export const metadata = {
  title: `Contact Us | Serenity Retreat`,
  description: `Get in touch with ${guestHouseInfo.name} for reservations, inquiries, or any assistance.`,
};

export default function ContactPage() {
  const info = guestHouseInfo;

  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-playfair-display text-center mb-12">
        Get In Touch
      </h1>
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg max-w-2xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Have questions or want to make a reservation? Feel free to reach out to us using the contact details below. Our friendly staff are always ready to assist you.
        </p>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 font-playfair-display text-blue-800">Our Details</h2>
          <p className="text-xl text-gray-800 mb-2 font-semibold">Address:</p>
          <p className="text-lg text-gray-700 mb-4">{info.address}</p>

          <p className="text-xl text-gray-800 mb-2 font-semibold">Phone:</p>
          <p className="text-lg text-gray-700 mb-4">
            <a href={`tel:${info.phone}`} className="text-blue-600 hover:underline">{info.phone}</a>
          </p>

          <p className="text-xl text-gray-800 mb-2 font-semibold">Email:</p>
          <p className="text-lg text-gray-700 mb-4">
            <a href={`mailto:${info.email}`} className="text-blue-600 hover:underline">{info.email}</a>
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-700 mb-6">
          We look forward to welcoming you to Serenity Retreat Guest House!
        </p>

        {/* Optional: Simple Call to Action for booking */}
        {/* REMOVED <a> TAG */}
        <Link href="/book" className="btn-primary text-xl md:text-2xl">
          Inquire About Booking
        </Link>
      </div>
    </section>
  );
}