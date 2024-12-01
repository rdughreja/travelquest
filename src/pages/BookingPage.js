import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const packages = [
  {
    id: 1,
    name: "Adventure Seeker",
    price: 1999,
    duration: "10 days",
  },
  {
    id: 2,
    name: "Relaxation Retreat",
    price: 2499,
    duration: "7 days",
  },
  {
    id: 3,
    name: "Cultural Immersion",
    price: 1799,
    duration: "12 days",
  }
];

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packages.find(p => p.id === parseInt(id));

  if (!pkg) {
    return <div className="min-h-screen bg-black text-white p-8 text-center">Package not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the booking logic here
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Book Your Trip</h1>
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{pkg.name}</h2>
          <p className="mb-2"><strong>Duration:</strong> {pkg.duration}</p>
          <p className="mb-4"><strong>Price:</strong> ${pkg.price}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">Full Name</label>
            <Input id="name" type="text" className="bg-gray-800 text-white" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input id="email" type="email" className="bg-gray-800 text-white" required />
          </div>
          <div>
            <label htmlFor="date" className="block mb-2">Preferred Start Date</label>
            <Input id="date" type="date" className="bg-gray-800 text-white" required />
          </div>
          <div>
            <label htmlFor="travelers" className="block mb-2">Number of Travelers</label>
            <Input id="travelers" type="number" min="1" className="bg-gray-800 text-white" required />
          </div>
          <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
            Proceed to Payment
          </Button>
        </form>
      </div>
    </div>
  );
}

