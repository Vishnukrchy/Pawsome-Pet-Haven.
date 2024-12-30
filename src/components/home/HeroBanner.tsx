import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Welcome to Your Pet's
            <span className="text-purple-600"> Paradise</span>
          </h1>
          <p className="text-xl text-gray-600">
            Flat 20% Off on Your First Purchase + Free Shipping on Orders Above ₹999
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 flex items-center gap-2">
              Shop Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50">
              Explore Categories
            </button>
          </div>
        </div>
        <div className="hidden md:block w-1/2">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80"
            alt="Happy pets"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;