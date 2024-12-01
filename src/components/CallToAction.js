import React from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function CallToAction() {
  return (
    <section className="bg-orange-500 py-16 px-4 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
        <p className="text-xl mb-8">Sign up for our newsletter and get exclusive travel deals!</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="md:w-96 bg-white text-black"
          />
          <Button className="bg-black hover:bg-gray-800 text-white">Subscribe</Button>
        </div>
      </div>
    </section>
  );
}

