import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface DestinationPageProps {
  params: {
    destination: string;
  };
}

// Map of destination names to their respective image URLs
const destinationImages = new Map<string, string>([
  ['dubai', 'https://cdn.pixabay.com/photo/2020/01/14/20/09/dubai-4761835_1280.jpg'],
  ['paris', 'https://cdn.pixabay.com/photo/2015/03/26/09/46/eiffel-tower-690941_1280.jpg'],
  ['bali', 'https://cdn.pixabay.com/photo/2022/10/05/05/40/sunset-7499759_1280.jpg'],
  ['santorini', 'https://cdn.pixabay.com/photo/2022/10/05/05/40/sunset-7499759_1280.jpg'],
  ['machu picchu', 'https://cdn.pixabay.com/photo/2017/03/11/20/20/peru-2135770_1280.jpg'],
]);

export default function DestinationPage({ params }: DestinationPageProps) {
  const destinationKey = params.destination.toLowerCase(); // Convert destination to lowercase for map lookup
  const destination = params.destination.charAt(0).toUpperCase() + params.destination.slice(1); // Capitalize first letter

  // Get the image for the searched destination or fallback to a placeholder image
  const imageSrc = destinationImages.get(destinationKey) || 'https://cdn.pixabay.com/photo/2022/10/05/05/40/sunset-7499759_1280.jpg';

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to {destination}</h1>
      <img 
        src={imageSrc}
        alt={destination} 
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <p className="mb-8">
        Experience the beauty and culture of {destination}. From stunning landscapes to rich history, 
        {destination} offers a unique adventure for every traveler.
      </p>
      <Link href="/packages" passHref>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          Book Your Trip to {destination}
        </Button>
      </Link>
    </div>
  );
}
