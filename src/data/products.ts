export const products = [
  {
    id: '1',
    name: 'Premium Dog Food',
    price: 999,
    originalPrice: 1299,
    description: 'High-quality premium dog food for all breeds',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80',
    category: 'dogs',
    brand: 'Royal Canin',
    rating: 4.5,
    reviews: 128,
    inStock: true
  },
  {
    id: '2',
    name: 'Cat Scratching Post',
    price: 799,
    originalPrice: 999,
    description: 'Durable cat scratching post with platforms',
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=400&q=80',
    category: 'cats',
    brand: 'Whiskas',
    rating: 4.8,
    reviews: 95,
    inStock: true
  },
  // Add more products...
] as const;