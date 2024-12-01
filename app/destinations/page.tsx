import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Destinations() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Our Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Bali', 'Santorini', 'Machu Picchu', 'Tokyo', 'Paris', 'New York'].map((destination) => (
          <div key={destination} className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{destination}</h2>
            <p className="mb-4">Discover the wonders of {destination}. An unforgettable experience awaits you!</p>
            <Link href={`/destinations/${destination.toLowerCase()}`}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Explore {destination}</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

