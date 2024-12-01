import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";

export default function Destinations() {
  const destinations = [
    {
      name: 'Bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      description: 'Experience the tropical paradise with stunning beaches and rich culture.'
    },
    {
      name: 'Santorini',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
      description: 'Discover the iconic white-washed buildings and breathtaking sunsets.'
    },
    {
      name: 'Machu Picchu',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80',
      description: 'Explore the ancient Incan citadel set high in the Andes Mountains.'
    },
    {
      name: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
      description: 'Immerse yourself in the bustling metropolis blending tradition and technology.'
    },
    {
      name: 'Paris',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      description: 'Indulge in the romance and charm of the City of Light.'
    },
    {
      name: 'New York',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
      description: 'Experience the energy and diversity of the Big Apple.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div key={destination.name} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img 
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{destination.name}</h2>
              <p className="text-gray-400 mb-4">{destination.description}</p>
              <Link to={`/destinations/${destination.name.toLowerCase()}`}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                  Explore {destination.name}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

