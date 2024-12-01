import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { Button } from "./ui/button";

export default function FeaturedDestinations() {
  const destinations = ['Bali', 'Santorini', 'Machu Picchu'];
  const emage = [
    'https://cdn.pixabay.com/photo/2018/03/19/14/55/pagoda-3240169_960_720.jpg',
    'https://cdn.pixabay.com/photo/2022/10/05/05/40/sunset-7499759_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/03/11/20/20/peru-2135770_1280.jpg'
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div key={destination} className="bg-gray-900 rounded-lg overflow-hidden">
            <img 
              src={emage[index]} // Use the corresponding image for the destination
              alt={destination} 
              className="w-full h-49 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{destination}</h3>
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-orange-500 mr-1" />
                <span className="text-sm">Exotic Location</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="h-4 w-4 text-orange-500 mr-1" />
                <span className="text-sm">4.8 (120 reviews)</span>
              </div>
              <Link to={`/destinations/${destination.toLowerCase()}`}>
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
