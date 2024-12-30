import React from 'react';
import { Calendar } from 'lucide-react';

const posts = [
  {
    id: '1',
    title: '10 Essential Tips for New Pet Parents',
    excerpt: 'Starting your journey as a pet parent? Here are the most important things to know...',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-20',
    readTime: '5 min read'
  },
  // Add more posts...
];

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Pet Care Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <time>{new Date(post.date).toLocaleDateString()}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a 
                href={`/blog/${post.id}`}
                className="text-purple-600 font-medium hover:text-purple-700"
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;