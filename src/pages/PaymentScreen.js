import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function PaymentScreen() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the payment processing here
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Payment</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cardName" className="block mb-2">Name on Card</label>
            <Input id="cardName" type="text" className="bg-gray-800 text-white" required />
          </div>
          <div>
            <label htmlFor="cardNumber" className="block mb-2">Card Number</label>
            <Input id="cardNumber" type="text" className="bg-gray-800 text-white" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="block mb-2">Expiry Date</label>
              <Input id="expiry" type="text" placeholder="MM/YY" className="bg-gray-800 text-white" required />
            </div>
            <div>
              <label htmlFor="cvv" className="block mb-2">CVV</label>
              <Input id="cvv" type="text" className="bg-gray-800 text-white" required />
            </div>
          </div>
          <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
            Pay Now
          </Button>
        </form>
      </div>
    </div>
  );
}

