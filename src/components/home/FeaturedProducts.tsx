import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Premium Dog Food',
    price: 999,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80',
    rating: 4.5,
    reviews: 128,
  },
  {
    id: '2',
    name: 'Cat Scratching Post',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    reviews: 95,
  },
  {
    id: '3',
    name: 'Bird Cage Deluxe',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1544181093-c712fb401bdc?auto=format&fit=crop&w=400&q=80',
    rating: 4.7,
    reviews: 67,
  },
  {
    id: '4',
    name: 'Hamster Habitat',
    price: 1499,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=400&q=80',
    rating: 4.6,
    reviews: 42,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 space-y-2">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-purple-50">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                {product.originalPrice && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <span className="text-xl font-bold">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                  <button className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;