import { Button } from "@/components/ui/button"

export default function Packages() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Travel Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Adventure Seeker', 'Relaxation Retreat', 'Cultural Immersion'].map((pkg) => (
          <div key={pkg} className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{pkg}</h2>
            <p className="mb-4">Experience the journey of a lifetime with our {pkg} package.</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Book Now</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

