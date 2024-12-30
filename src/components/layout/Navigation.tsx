import React from 'react';
import { Link } from './Link';

const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-8 py-4 text-gray-600 border-t">
      <Link href="/" active>Home</Link>
      <Link href="/shop">Shop by Category</Link>
      <Link href="/brands">Shop by Brand</Link>
      <Link href="/encyclopedia">Pet Info</Link>
      <Link href="/blog">Pet Care Blog</Link>
      <Link href="/quiz">Pet Quiz</Link>
      <Link href="/delivery">Delivery Info</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

export default Navigation;