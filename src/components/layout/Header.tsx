import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, MapPin, Utensils, Map, Info } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
        mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-white/95 backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          <Link to='/' className='flex md:w-[250px] items-center space-x-2'>
            <Utensils className='w-8 h-8 text-amber-500' fill='#f59e0b' />
            <span className='text-2xl font-bold text-gray-800'>
              <span className='text-amber-500'>Taste </span>
              <span className='text-gray-800'>Myanmar</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='items-center hidden space-x-8 md:flex'>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 font-medium transition-all duration-300 
                  text-gray-700 hover:text-amber-500
                  ${location.pathname === link.path ? 'text-amber-500' : ''}
                  hover:scale-105`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>

          <div className='items-center md:w-[250px] justify-end hidden space-x-4 md:flex'>
            <div className='relative text-gray-600 transition-all duration-300 hover:scale-110'>
              <Search className='hover:cursor-pointer' />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='flex items-center md:hidden'
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className='w-6 h-6 text-gray-700' />
            ) : (
              <Menu className='w-6 h-6 text-gray-700' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='border-t border-gray-100 bg-white/95 backdrop-blur-sm md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <div className='px-4 py-3'>
              <div className='relative'>
                <Search className='absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
                <input
                  type='text'
                  placeholder='Search foods, towns...'
                  className='w-full py-2 pl-10 pr-4 text-gray-800 transition-all duration-300 rounded-full shadow-sm bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white'
                />
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md font-medium
                  transition-all duration-300
                  ${
                    location.pathname === link.path
                      ? 'bg-amber-50 text-amber-500'
                      : 'text-gray-700 hover:bg-amber-50 hover:text-amber-500'
                  }
                  hover:scale-105`}
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
