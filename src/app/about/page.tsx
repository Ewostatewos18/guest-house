// src/app/about/page.tsx
import Image from 'next/image';
import { guestHouseInfo } from '@/data/info';

export const metadata = {
  title: `About Us | Serenity Retreat`,
  description: `Learn more about ${guestHouseInfo.name} and our commitment to providing a peaceful and comfortable stay in Addis Ababa.`,
};

export default function AboutPage() {
  const info = guestHouseInfo;

  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-playfair-display text-center mb-12">
        Welcome to {info.name}
      </h1>
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg max-w-4xl mx-auto text-center">
        {/* Optional: Add an image related to the guest house's story or interior */}
        {/* <div className="mb-8 relative w-full h-72 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/general/guest-house-interior-about.jpg"
            alt="Serenity Retreat Interior"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div> */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          {info.description}
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          At {info.name}, our mission is to provide a serene and welcoming environment for all our guests. We believe in offering personalized service and attention to detail to ensure your stay is as comfortable and memorable as possible. From our meticulously maintained rooms to our beautiful, tranquil garden, every aspect of our guest house is designed with your peace and relaxation in mind.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          We are proudly located in the vibrant city of Addis Ababa, offering easy access to local attractions and cultural sites while providing a tranquil haven away from the hustle and bustle. Our dedicated team is committed to making your visit a truly exceptional experience, whether you are traveling for business or leisure.
        </p>
      </div>
    </section>
  );
}