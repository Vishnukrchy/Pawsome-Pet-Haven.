import React from 'react';
import ProductGrid from '../../components/shop/ProductGrid';
import FilterSidebar from '../../components/shop/FilterSidebar';
import { ProductSort } from '../../components/shop/ProductSort';

const CategoryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Shop by Category</h1>
            <ProductSort />
          </div>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;