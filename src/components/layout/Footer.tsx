import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Pawsome Pet Haven</h3>
            <p className="mb-4">Your one-stop shop for all pet needs. Quality products, excellent service, and happy pets!</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/shop" className="hover:text-white">Shop</a></li>
              <li><a href="/encyclopedia" className="hover:text-white">Pet Info</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +91 8106360786
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@pawsomepethaven.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get 10% off on your first order!</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; 2024 Pawsome Pet Haven. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;