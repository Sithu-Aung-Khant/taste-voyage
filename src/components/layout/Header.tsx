import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, MapPin, Utensils, Map, Info, Heart } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Explore Foods', path: '/foods', icon: <Utensils size={18} /> },
    { name: 'Discover Towns', path: '/towns', icon: <MapPin size={18} /> },
    { name: 'Regional Map', path: '/map', icon: <Map size={18} /> },
    { name: 'About Myanmar', path: '/about', icon: <Info size={18} /> },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || mobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <Heart className="h-8 w-8 text-red-800" fill="#a52a2a" />
            <span className={`font-bold text-2xl transition-colors duration-300 ${isScrolled ? 'text-red-800' : 'text-red-800 sm:text-white'}`}>
              <span className="text-amber-600">Taste</span>Myanmar
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-amber-600' 
                    : 'text-white hover:text-amber-300'
                } ${location.pathname === link.path ? 'text-amber-600' : ''}`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className={`relative transition-colors duration-300 ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search foods, towns..." 
                className={`pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'bg-white/20 text-white placeholder:text-white/80 backdrop-blur-sm'
                }`}
              />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center text-gray-700"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-4 py-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search foods, towns..." 
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md font-medium ${
                  location.pathname === link.path 
                    ? 'bg-amber-50 text-amber-600' 
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;