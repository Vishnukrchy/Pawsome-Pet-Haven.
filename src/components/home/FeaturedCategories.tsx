import React from 'react';
import { Dog, Cat, Bird, Mouse } from 'lucide-react';

const categories = [
  {
    id: 'dogs',
    name: 'Dogs',
    icon: <Dog className="w-8 h-8" />,
    description: 'Food, toys, accessories & more',
  },
  {
    id: 'cats',
    name: 'Cats',
    icon: <Cat className="w-8 h-8" />,
    description: 'Everything your cat needs',
  },
  {
    id: 'birds',
    name: 'Birds',
    icon: <Bird className="w-8 h-8" />,
    description: 'Cages, food & accessories',
  },
  {
    id: 'small-animals',
    name: 'Small Animals',
    icon: <Mouse className="w-8 h-8" />,
    description: 'For hamsters, guinea pigs & more',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group p-6 rounded-xl border hover:border-purple-500 transition-all hover:shadow-lg cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;