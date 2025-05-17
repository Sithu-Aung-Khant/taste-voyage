import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-7 w-7 text-amber-500" fill="#f59e0b" />
              <span className="font-bold text-xl">
                <span className="text-amber-500">Taste</span>Myanmar
              </span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Discover the rich culinary traditions and beautiful destinations 
              of Myanmar through our comprehensive guide.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/foods" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Popular Foods
                </Link>
              </li>
              <li>
                <Link to="/towns" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Top Destinations
                </Link>
              </li>
              <li>
                <Link to="/regions" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Regions of Myanmar
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link to="/festivals" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Food Festivals
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/travel-tips" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Travel Tips
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-gray-400">
                  123 Yangon Street, Downtown<br />
                  Yangon, Myanmar
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-gray-400">+95 1 234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-gray-400">info@tastemyanmar.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TasteMyanmar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;