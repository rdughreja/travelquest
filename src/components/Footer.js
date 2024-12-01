import React from 'react';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <Plane className="h-6 w-6 text-orange-500" />
          <span className="text-xl font-bold">TravelQuest</span>
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center gap-6">
            <li><Link to="/privacy" className="hover:text-orange-500">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-orange-500">Terms of Service</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2023 TravelQuest. All rights reserved.
      </div>
    </footer>
  );
}

