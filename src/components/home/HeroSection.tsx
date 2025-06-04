import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Utensils } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

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
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      </div>

      {/* Content */}
      <div className='relative flex flex-col items-center justify-center h-full px-4 text-center sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='mb-6 text-4xl font-bold leading-loose text-white sm:text-5xl md:text-6xl animate-fade-in'>
            <h1>Explore the Flavors and Wonders</h1>
            <h1 className='mt-1'>
              of
              <span className='text-yellow-500'> Myanmar</span>
            </h1>
          </div>

          <p className='max-w-2xl mx-auto mb-8 text-xl text-white opacity-90'>
            Discover delicious authentic cuisine and breathtaking destinations
            across Myanmar's diverse regions.
          </p>

          <div className='relative max-w-lg mx-auto mb-10'>
            <Search className='absolute w-5 h-5 text-gray-500 transform -translate-y-1/2 left-4 top-1/2' />
            <input
              type='text'
              placeholder='Search for foods or destinations...'
              className='w-full py-4 pl-12 pr-4 text-lg text-gray-800 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500'
            />
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
