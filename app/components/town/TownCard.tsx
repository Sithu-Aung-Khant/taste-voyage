import React from 'react';
import { Link } from 'react-router';
import { ExternalLink, MapPin } from 'lucide-react';
import { Town } from '../../types';
import StarRating from '../ui/StarRating';

interface TownCardProps {
  town: Town;
}

const TownCard: React.FC<TownCardProps> = ({ town }) => {
  return (
    <Link 
      to={`/towns/${town.id}`}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={town.image} 
          alt={town.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-xl mb-1">{town.name}</h3>
          <div className="flex items-center text-white/90 space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{town.region}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <StarRating rating={town.rating} />
          <div className="bg-amber-100 text-amber-800 rounded-full px-2 py-1 text-xs font-medium">
            {town.attractions.length} Attractions
          </div>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-3">{town.description}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-sm text-gray-500">{town.signatureDishes.length} signature dishes</span>
          <span className="inline-flex items-center text-amber-600 text-sm font-medium group-hover:underline">
            Explore
            <ExternalLink className="ml-1 h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TownCard;