import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'Priya Singh',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    comment: 'Amazing range of products and excellent service! My pets are always happy with their treats from Pawsome Pet Haven.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rahul Sharma',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    comment: 'The quality of products is outstanding. Fast delivery and great customer support!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Anjali Patel',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'Best pet store ever! They have everything I need for my dogs and cats. Highly recommended!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;