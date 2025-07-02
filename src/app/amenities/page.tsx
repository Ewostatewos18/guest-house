// src/app/amenities/page.tsx
import { amenities, Amenity } from '@/data/amenities'; // Ensure this import is correct

export const metadata = {
  title: 'Our Amenities | Serenity Retreat',
  description: 'Discover the wide range of amenities available at Serenity Retreat Guest House, designed to make your stay comfortable and enjoyable.',
};

export default function AmenitiesPage() {
  const allAmenities: Amenity[] = amenities;

  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-playfair-display text-center mb-12">
        Guest House Amenities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allAmenities.map((amenity) => (
          <div key={amenity.id} className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center">
            {/* --- THIS IS THE KEY CHANGE FOR ICONS --- */}
            {amenity.iconName && ( // Now we check for iconName, which holds the Material Symbol text
              <div className="mb-4">
                {/* Use a <span> tag with the Material Symbols classes */}
                <span className="material-symbols-outlined text-blue-600 text-5xl">
                  {amenity.iconName} {/* Display the icon's text name */}
                </span>
              </div>
            )}
            {/* --- END OF KEY CHANGE --- */}

            <h2 className="text-2xl font-semibold mb-3 font-playfair-display text-blue-800">{amenity.name}</h2>
            <p className="text-gray-700 leading-relaxed">{amenity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}