import React from 'react';
import { Filter } from 'lucide-react';

const filters = {
  price: {
    title: 'Price Range',
    options: [
      { id: '0-500', label: 'Under ₹500' },
      { id: '500-1000', label: '₹500 - ₹1000' },
      { id: '1000-2000', label: '₹1000 - ₹2000' },
      { id: '2000+', label: 'Above ₹2000' }
    ]
  },
  brands: {
    title: 'Brands',
    options: [
      { id: 'royal-canin', label: 'Royal Canin' },
      { id: 'pedigree', label: 'Pedigree' },
      { id: 'whiskas', label: 'Whiskas' },
      { id: 'kong', label: 'KONG' }
    ]
  },
  rating: {
    title: 'Rating',
    options: [
      { id: '4+', label: '4★ & above' },
      { id: '3+', label: '3★ & above' },
      { id: '2+', label: '2★ & above' }
    ]
  }
};

const FilterSidebar = () => {
  return (
    <aside className="w-full md:w-64 space-y-6">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <Filter className="w-5 h-5" />
        <span>Filters</span>
      </div>
      
      {Object.entries(filters).map(([key, section]) => (
        <div key={key} className="border-b pb-4">
          <h3 className="font-medium mb-3">{section.title}</h3>
          <div className="space-y-2">
            {section.options.map(option => (
              <label key={option.id} className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-purple-600" />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;