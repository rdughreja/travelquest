import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "../components/ui/button";

export default function DestinationPage() {
  const { destination } = useParams();
  const destinations = {
    bali: {
      name: 'Bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      description: 'Bali, the Island of the Gods, is a tropical paradise known for its lush landscapes, vibrant culture, and stunning beaches. From the spiritual town of Ubud to the surfing hotspots of Uluwatu, Bali offers a diverse range of experiences for every traveler.'
    },
    santorini: {
      name: 'Santorini',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
      description: 'Santorini, a jewel of the Aegean Sea, is famous for its dramatic views, stunning sunsets, and distinctive white-washed buildings. Explore charming villages, relax on unique beaches, and indulge in delicious Greek cuisine while overlooking the caldera.'
    },
    'machu picchu': {
      name: 'Machu Picchu',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80',
      description: 'Machu Picchu, the ancient Incan citadel, stands majestically high in the Andes Mountains. This UNESCO World Heritage site offers breathtaking views and a glimpse into the rich history of the Inca civilization. Hike the Inca Trail for an unforgettable adventure.'
    },
    tokyo: {
      name: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
      description: 'Tokyo, a city where tradition meets the future, offers a unique blend of ultra-modern living and ancient traditions. From towering skyscrapers and high-tech gadgets to serene temples and traditional gardens, Tokyo promises an exciting and diverse experience.'
    },
    paris: {
      name: 'Paris',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      description: 'Paris, the City of Light, is renowned for its art, fashion, gastronomy, and culture. Iconic landmarks like the Eiffel Tower and Notre-Dame cathedral stand alongside world-class museums and charming cafés. Stroll along the Seine or through the bohemian Montmartre for a truly Parisian experience.'
    },
    'new york': {
      name: 'New York',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
      description: 'New York City, the city that never sleeps, is a melting pot of cultures and a global hub for art, finance, and entertainment. From the bright lights of Times Square to the tranquility of Central Park, NYC offers endless opportunities for exploration, inspiration, and adventure.'
    }
  };

  const destinationInfo = destinations[destination] || {
    name: 'Unknown Destination',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    description: 'We\'re sorry, but we couldn\'t find information about this destination.'
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{destinationInfo.name}</h1>
      <div className="max-w-4xl mx-auto">
        <img 
          src={destinationInfo.image}
          alt={destinationInfo.name} 
          className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
        />
        <p className="mb-8 text-lg leading-relaxed">
          {destinationInfo.description}
        </p>
        <div className="flex justify-center">
          <Link to="/packages">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3">
              Book Your Trip to {destinationInfo.name}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

