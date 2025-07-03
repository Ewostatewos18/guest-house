// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/app/globals.css'; // Your global CSS, including Tailwind imports
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Import Font Awesome CSS and configuration
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // This line imports the Font Awesome CSS
config.autoAddCss = false; // This prevents Font Awesome from adding its CSS directly into the <head> again

// 1. Configure Fonts using next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

// 2. Define Metadata (for SEO and browser tab)
export const metadata: Metadata = {
  title: 'Serenity Retreat Guest House - Your Oasis of Calm',
  description: 'Experience peace and comfort at Serenity Retreat Guest House in Addis Ababa, offering beautiful rooms, excellent amenities, and warm hospitality.',
  keywords: ['guest house', 'Addis Ababa', 'accommodation', 'hotel', 'Ethiopia', 'booking', 'rooms'],
};

// 3. Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Material Symbols CDN - Still needed for other icons like location, phone, mail, etc. */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
        {/* Font Awesome CSS is now imported via the JS config above, so no separate <link> tag is needed here */}
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-grow">
            {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}