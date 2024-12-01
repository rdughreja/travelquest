import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";

const packages = [
  {
    id: 1,
    name: "Adventure Seeker",
    description: "Embark on thrilling adventures across exotic locations.",
    price: 1999,
    duration: "10 days",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Relaxation Retreat",
    description: "Unwind and rejuvenate at luxurious resorts and spas.",
    price: 2499,
    duration: "7 days",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Cultural Immersion",
    description: "Dive deep into local traditions and historical wonders.",
    price: 1799,
    duration: "12 days",
    image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Packages() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Travel Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img 
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{pkg.name}</h2>
              <p className="text-gray-400 mb-4">{pkg.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">${pkg.price}</span>
                <span className="text-sm text-gray-400">{pkg.duration}</span>
              </div>
              <Link to={`/book/${pkg.id}`}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

