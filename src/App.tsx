import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroBanner from './components/home/HeroBanner';
import FeaturedCategories from './components/home/FeaturedCategories';
import FeaturedProducts from './components/home/FeaturedProducts';
import Testimonials from './components/home/Testimonials';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <FeaturedCategories />
        <FeaturedProducts />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;