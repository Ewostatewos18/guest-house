// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link'; // Make sure Link is imported for CTAs
import { guestHouseInfo } from '@/data/info';

export const metadata = {
  title: `About Us | ${guestHouseInfo.name}`,
  description: `Learn more about ${guestHouseInfo.name} and our commitment to providing a peaceful and comfortable stay in Addis Ababa.`,
};

export default function AboutPage() {
  const info = guestHouseInfo;

  return (
    <main> {/* Wrap content in <main> for semantic HTML */}
      {/* About Page Header Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-white text-center overflow-hidden">
        <Image
          src="/images/general/main-banner.jpg" // This image should be in public/images/general/
          alt="Elegant interior of Serenity Retreat"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
          className="z-0 filter brightness-70" // Slightly darker for text contrast
        />
        <div className="absolute inset-0 bg-neutral-900/70 flex flex-col items-center justify-center p-4 z-10"> {/* Lighter overlay than homepage hero */}
          <h1 className="text-5xl md:text-6xl font-bold font-playfair-display drop-shadow-lg text-amber-200 leading-tight animate-fade-in-up">
            About {info.name}
          </h1>
        </div>
      </section>

      {/* Our Story Section (Text with Image Side-by-Side) */}
      <section className="container mx-auto my-20 px-4 py-8 card-base bg-white rounded-lg shadow-xl flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-playfair-display text-neutral-800 mb-6 border-b-2 border-amber-500 pb-2 inline-block">
            Our Story
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            {info.description}
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            At {info.name}, our mission is to provide a serene and welcoming environment for all our guests. We believe in offering personalized service and attention to detail to ensure your stay is as comfortable and memorable as possible. From our meticulously maintained rooms to our beautiful, tranquil garden, every aspect of our guest house is designed with your peace and relaxation in mind.
          </p>
        </div>
        <div className="md:w-1/2 relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/general/main-banner.jpg" // This image should be in public/images/about/
            alt="Warm and inviting common area of Serenity Retreat"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Our Commitment/Philosophy Section (Grid of Value Cards) */}
      <section className="bg-stone-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair-display text-center text-neutral-800 mb-12">
            Our Commitment to You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Commitment Card 1 */}
            <div className="card-base bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-amber-700 text-6xl mb-4">favorite</span>
              <h3 className="text-2xl font-semibold font-playfair-display text-neutral-800 mb-3">Exceptional Comfort</h3>
              <p className="text-neutral-600 leading-relaxed">
                We prioritize your relaxation, ensuring every room and common area offers the utmost comfort and tranquility.
              </p>
            </div>
            {/* Commitment Card 2 */}
            <div className="card-base bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-amber-700 text-6xl mb-4">handshake</span>
              <h3 className="text-2xl font-semibold font-playfair-display text-neutral-800 mb-3">Warm Hospitality</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our dedicated team provides personalized service, making you feel at home from the moment you arrive.
              </p>
            </div>
            {/* Commitment Card 3 */}
            <div className="card-base bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-amber-700 text-6xl mb-4">nature</span>
              <h3 className="text-2xl font-semibold font-playfair-display text-neutral-800 mb-3">Serene Environment</h3>
              <p className="text-neutral-600 leading-relaxed">
                Nestled in a peaceful setting, our guesthouse offers a quiet escape to recharge and reconnect with nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location Section (Text with Image Reversed Side-by-Side) */}
      <section className="container mx-auto my-20 px-4 py-8 card-base bg-white rounded-lg shadow-xl flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-playfair-display text-neutral-800 mb-6 border-b-2 border-amber-500 pb-2 inline-block">
            Our Location
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            We are proudly located in the vibrant city of Addis Ababa, offering easy access to local attractions and cultural sites while providing a tranquil haven away from the hustle and bustle. Our dedicated team is committed to making your visit a truly exceptional experience, whether you are traveling for business or leisure.
          </p>
          <Link href="/contact" className="btn-secondary text-lg px-6 py-2 mt-4">
            Get Directions &rarr;
          </Link>
        </div>
        <div className="md:w-1/2 relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/general/main-banner.jpg" // This image should be in public/images/about/
            alt="View of Addis Ababa, Ethiopia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Final Call to Action */}
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