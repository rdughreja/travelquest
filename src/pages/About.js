import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About TravelQuest</h1>
        <img 
          src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80"
          alt="TravelQuest Team"
          className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
        />
        <div className="space-y-6 text-lg">
          <p>
            TravelQuest was born from a passion for exploration and a desire to share the world's wonders with fellow adventurers. Founded in 2010 by a group of avid travelers, we've grown from a small startup to a leading name in the travel industry.
          </p>
          <p>
            Our mission is simple: to create unforgettable journeys that inspire, educate, and transform. We believe that travel has the power to broaden perspectives, foster understanding, and create lasting memories.
          </p>
          <p>
            What sets us apart is our commitment to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Curating unique, off-the-beaten-path experiences</li>
            <li>Partnering with local communities to ensure sustainable and responsible tourism</li>
            <li>Providing personalized service tailored to each traveler's needs and interests</li>
            <li>Employing passionate guides who are experts in their regions</li>
          </ul>
          <p>
            Whether you're seeking adventure, relaxation, cultural immersion, or a bit of everything, TravelQuest is here to turn your travel dreams into reality. Join us on a journey of discovery, and let's explore the world together!
          </p>
        </div>
      </div>
    </div>
  );
}

