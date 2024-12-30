import React from 'react';
import { ArrowUpDown } from 'lucide-react';

export const ProductSort = () => {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="w-4 h-4" />
      <select className="border-none bg-transparent focus:outline-none text-sm">
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="newest">Newest First</option>
      </select>
    </div>
  );
};