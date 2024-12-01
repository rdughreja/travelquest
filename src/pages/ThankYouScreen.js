import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";

export default function ThankYouScreen() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Thank You for Your Booking!</h1>
        <p className="mb-8 text-xl">Your adventure awaits. We've sent a confirmation email with all the details.</p>
        <Link to="/">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

