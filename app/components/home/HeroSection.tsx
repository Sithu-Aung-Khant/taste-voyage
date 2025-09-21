import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Search, MapPin, Utensils } from 'lucide-react';
import Button from '../ui/Button';
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

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const debouncedSearchTerm = useDebounce(searchQuery, 300);

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
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative h-screen'>
      {/* Background image with overlay */}
      <div
        className='absolute inset-0 bg-center bg-no-repeat bg-cover'
        style={{
          backgroundImage:
            'url(https://ashokmasale.com/wp-content/uploads/2024/08/6a0dc5a38598a14b374dfdb95642e124-1-1024x600.jpg)',
        }}
      >
        <div className='absolute inset-0 bg-black/50'></div>
      </div>

      {/* Content */}
      <div className='relative flex flex-col items-center justify-center h-full px-4 text-center sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl animate-fade-in'>
            <h1>
              Explore the Flavors and Wonders of{' '}
              <span className='text-yellow-500'>Myanmar</span>
            </h1>
          </div>

          <p className='max-w-2xl mx-auto mb-12 text-xl text-white opacity-90'>
            Discover delicious authentic cuisine and breathtaking destinations
            across Myanmar's diverse regions.
          </p>

          <div ref={searchRef} className='relative max-w-lg mx-auto mb-10'>
            <Search className='absolute z-10 w-6 h-6 text-gray-400 transform -translate-y-1/2 left-6 top-1/2' />
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search for foods or destinations...'
              className='w-full py-5 pr-6 text-lg text-gray-800 bg-white border border-gray-200 rounded-full shadow-xl pl-14 focus:outline-none focus:ring-4 focus:ring-amber-500/50'
            />
            {isSearching && (
              <div className='absolute transform -translate-y-1/2 right-6 top-1/2'>
                <div className='w-6 h-6 border-t-2 rounded-full border-amber-500 animate-spin'></div>
              </div>
            )}
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

          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Button
              size='lg'
              leftIcon={<Utensils size={20} />}
              onClick={() => navigate('/foods')}
              className='font-semibold text-white transition-all duration-300 transform animate-fade-in animation-delay-300 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 hover:scale-105 hover:shadow-lg'
            >
              Explore Foods
            </Button>
            <Button
              variant='secondary'
              size='lg'
              leftIcon={<MapPin size={20} />}
              onClick={() => navigate('/towns')}
              className='font-semibold text-white transition-all duration-300 transform border animate-fade-in animation-delay-600 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 hover:shadow-lg border-white/20'
            >
              Discover Towns
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute transform -translate-x-1/2 bottom-6 left-1/2 animate-bounce'>
        <svg
          className='w-6 h-6 text-white'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
