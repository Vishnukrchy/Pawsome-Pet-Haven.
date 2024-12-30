import React from 'react';
import { ShoppingCart, Heart, Menu, Search, User } from 'lucide-react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold text-purple-600">
              🐾 Pawsome Pet Haven
            </h1>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-full border focus:outline-none focus:border-purple-500"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        <Navigation />
      </div>
    </header>
  );
}

export default Header;