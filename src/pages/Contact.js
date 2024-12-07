import React from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">We'd love to hear from you. Whether you have a question about our trips, need help with booking, or want to share your travel experience, our team is ready to assist you.</p>
            <div className="space-y-2">
              <p><strong>Email:</strong> patelrushi9293@gmail.com </p>
              <p><strong>Phone:</strong> +91 7802833723 </p>
              <p><strong>Address:</strong> morbi, gujarat, india</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <Input id="name" type="text" className="bg-gray-800 text-white" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <Input id="email" type="email" className="bg-gray-800 text-white" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <Textarea id="message" className="bg-gray-800 text-white" rows={4} required />
            </div>
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

