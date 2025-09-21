import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import {
  Search,
  Menu,
  X,
  MapPin,
  Utensils,
  Map,
  Info,
  FileText,
} from 'lucide-react';
import SearchResults from '../ui/SearchResults';
import { searchAll } from '../../utils/search';
import useDebounce from '../../hooks/useDebounce';

interface SearchResult {
  id: string;
  name: string;
  type: 'town' | 'food' | 'beach' | 'attraction';
  description: string;
  image?: string;
}

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [mobileSearchResults, setMobileSearchResults] = useState<
    SearchResult[]
  >([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isMobileSearching, setIsMobileSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const debouncedSearchTerm = useDebounce(searchQuery, 300);
  const debouncedMobileSearchTerm = useDebounce(mobileSearchQuery, 300);

  useEffect(() => {
    setMobileMenuOpen(false);
    // Clear search when navigating
    setSearchQuery('');
    setMobileSearchQuery('');
    setSearchResults([]);
    setMobileSearchResults([]);
  }, [location]);

  useEffect(() => {
    const handleSearch = () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        const results = searchAll(debouncedSearchTerm);
        setSearchResults(results);
        setIsSearching(false);
      } else {
        setSearchResults([]);
      }
    };

    handleSearch();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const handleMobileSearch = () => {
      if (debouncedMobileSearchTerm) {
        setIsMobileSearching(true);
        const results = searchAll(debouncedMobileSearchTerm);
        setMobileSearchResults(results);
        setIsMobileSearching(false);
      } else {
        setMobileSearchResults([]);
      }
    };

    handleMobileSearch();
  }, [debouncedMobileSearchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchResults([]);
        setSearchQuery('');
      }
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target as Node)
      ) {
        setMobileSearchResults([]);
        setMobileSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Explore Foods', path: '/foods', icon: <Utensils size={18} /> },
    { name: 'Discover Towns', path: '/towns', icon: <MapPin size={18} /> },
    { name: 'Sanity CMS', path: '/sanity', icon: <FileText size={18} /> },
    {
      name: 'Regional Map',
      path: 'https://www.google.com/maps/place/Myanmar+(Burma)/@20.0419414,95.1523088,5.7z/data=!4m15!1m8!3m7!1s0x305652a7714e2907:0xba7b0ee41c622b11!2sMyanmar+(Burma)!3b1!8m2!3d21.916221!4d95.955974!16zL20vMDR4bl8!3m5!1s0x305652a7714e2907:0xba7b0ee41c622b11!8m2!3d21.916221!4d95.955974!16zL20vMDR4bl8?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D',
      icon: <Map size={18} />,
    },
    {
      name: 'About Myanmar',
      path: 'https://en.wikipedia.org/wiki/Myanmar',
      icon: <Info size={18} />,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        mobileMenuOpen
          ? 'shadow-lg backdrop-blur-sm bg-white/95'
          : 'shadow-lg backdrop-blur-sm bg-white/95'
      }`}
    >
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          <Link to='/' className='flex md:w-[250px] items-center space-x-2'>
            <Utensils className='w-8 h-8 text-amber-500' fill='#f59e0b' />
            <span className='text-2xl font-bold text-gray-800'>
              <span className='text-amber-500'>Taste </span>
              <span className='text-gray-800'>Voyage</span>
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
            <div ref={searchRef} className='relative'>
              <div className='relative'>
                <Search className='absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
                <input
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Search foods, towns...'
                  className='w-64 py-2 pl-10 pr-4 text-gray-800 transition-all duration-300 rounded-full shadow-sm bg-white/80 hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white'
                />
                {isSearching && (
                  <div className='absolute transform -translate-y-1/2 right-3 top-1/2'>
                    <div className='w-4 h-4 border-t-2 rounded-full border-amber-500 animate-spin'></div>
                  </div>
                )}
              </div>
              {searchResults.length > 0 && (
                <SearchResults
                  results={searchResults}
                  onClose={() => {
                    setSearchResults([]);
                    setSearchQuery('');
                  }}
                />
              )}
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
        <div className='border-t border-gray-100 backdrop-blur-sm bg-white/95 md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <div className='px-4 py-3'>
              <div ref={mobileSearchRef} className='relative'>
                <Search className='absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
                <input
                  type='text'
                  value={mobileSearchQuery}
                  onChange={(e) => setMobileSearchQuery(e.target.value)}
                  placeholder='Search foods, towns...'
                  className='w-full py-2 pl-10 pr-4 text-gray-800 transition-all duration-300 rounded-full shadow-sm backdrop-blur-sm bg-white/80 hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white'
                />
                {isMobileSearching && (
                  <div className='absolute transform -translate-y-1/2 right-3 top-1/2'>
                    <div className='w-4 h-4 border-t-2 rounded-full border-amber-500 animate-spin'></div>
                  </div>
                )}
                {mobileSearchResults.length > 0 && (
                  <SearchResults
                    results={mobileSearchResults}
                    onClose={() => {
                      setMobileSearchResults([]);
                      setMobileSearchQuery('');
                    }}
                  />
                )}
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
