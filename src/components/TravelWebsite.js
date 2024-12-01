import React from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plane, MapPin, Star, Menu } from 'lucide-react';

export default function TravelWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 lg:px-8">
        <div className="flex items-center space-x-2">
          <Plane className="h-8 w-8 text-orange-500" />
          <span className="text-2xl font-bold">TravelQuest</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#destinations" className="hover:text-orange-500">Destinations</a></li>
            <li><a href="#packages" className="hover:text-orange-500">Packages</a></li>
            <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </nav>
        <Button variant="outline" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{backgroundImage: "url('https://source.unsplash.com/random/1200x800?travel')"}}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Discover Your Next Adventure</h1>
          <p className="text-xl md:text-2xl mb-8">Explore the world's most exotic locations</p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Start Your Journey</Button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-16 px-4 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Bali', 'Santorini', 'Machu Picchu'].map((destination) => (
            <div key={destination} className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={`https://source.unsplash.com/random/400x300?${destination}`}
                alt={destination} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{destination}</h3>
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-orange-500 mr-1" />
                  <span className="text-sm">Exotic Location</span>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="h-4 w-4 text-orange-500 mr-1" />
                  <span className="text-sm">4.8 (120 reviews)</span>
                </div>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-500 py-16 px-4 lg:px-8">
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

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Plane className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">TravelQuest</span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © 2023 TravelQuest. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

