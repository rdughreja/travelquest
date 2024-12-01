import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';
import { Button } from "./ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/travelquest" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold">TravelQuest</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link to="/destinations" className="hover:text-orange-500">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-orange-500">Packages</Link></li>
              <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
            </ul>
          </nav>
          <Button
            variant="outline"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/destinations" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 hover:bg-gray-900">Destinations</Link>
            <Link to="/packages" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 hover:bg-gray-900">Packages</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 hover:bg-gray-900">About Us</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 hover:bg-gray-900">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}

