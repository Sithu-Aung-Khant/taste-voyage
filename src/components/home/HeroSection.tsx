import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Utensils } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/5845416/pexels-photo-5845416.jpeg?auto=compress&cs=tinysrgb&w=1800)', 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Explore the Flavors and Wonders of 
            <span className="text-amber-400"> Myanmar</span>
          </h1>
          
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto opacity-90">
            Discover delicious authentic cuisine and breathtaking destinations across Myanmar's diverse regions.
          </p>
          
          <div className="relative max-w-lg mx-auto mb-10">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search for foods or destinations..." 
              className="w-full pl-12 pr-4 py-4 rounded-full shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 text-lg"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              leftIcon={<Utensils size={20} />}
              onClick={() => navigate('/foods')}
              className="animate-fade-in animation-delay-300"
            >
              Explore Foods
            </Button>
            <Button 
              variant="secondary"
              size="lg" 
              leftIcon={<MapPin size={20} />}
              onClick={() => navigate('/towns')}
              className="animate-fade-in animation-delay-600"
            >
              Discover Towns
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;