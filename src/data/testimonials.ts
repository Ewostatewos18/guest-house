// src/data/testimonials.ts

interface Testimonial {
    quote: string;
    author: string;
    location?: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      quote: "Serenity Retreat truly lives up to its name! A peaceful haven with incredibly comfortable rooms and the most welcoming staff. We can't wait to come back.",
      author: "Aisha K.",
      location: "Dubai, UAE",
    },
    {
      quote: "Our stay was simply perfect. The garden is beautiful, breakfast was delicious, and every detail was thoughtfully taken care of. Highly recommend!",
      author: "John D.",
      location: "London, UK",
    },
    {
      quote: "A hidden gem in Addis Ababa. The ambiance is so relaxing, and the personalized service made us feel right at home. Best guesthouse experience ever!",
      author: "Lelise M.",
      location: "Addis Ababa, Ethiopia",
    },
  ];