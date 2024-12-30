export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: 'dogs' | 'cats' | 'birds' | 'small-animals';
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  comment: string;
  rating: number;
}