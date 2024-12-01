import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/31/14/51/parachutes-2700972_1280.jpg')"}}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="relative z-20 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Discover Your Next Adventure</h1>
        <p className="text-xl md:text-2xl mb-8">Explore the world's most exotic locations</p>
        <Link to="/destinations">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Start Your Journey</Button>
        </Link>
      </div>
    </section>
  );
}

