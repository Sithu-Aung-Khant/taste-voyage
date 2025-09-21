import React from 'react';
import { ExternalLink, Utensils } from 'lucide-react';

interface RestaurantCardProps {
  name: string;
  townName: string;
  image: string;
  description: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  townName,
  image,
  description,
}) => {
  const getGoogleMapsUrl = (name: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(name)}`;
  };

  return (
    <a
      href={getGoogleMapsUrl(name + ' ' + townName)}
      target='_blank'
      rel='noopener noreferrer'
      className='overflow-hidden transition-all duration-300 bg-white shadow-sm group rounded-xl hover:shadow-md'
    >
      <div className='relative h-48 overflow-hidden'>
        <img
          src={image}
          alt={name}
          className='object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'></div>
        <div className='absolute p-2 rounded-full shadow-sm top-4 right-4 bg-white/90 backdrop-blur-sm text-amber-600'>
          <Utensils className='w-4 h-4' />
        </div>
        <div className='absolute mt-4 text-xs font-medium transition-opacity duration-300 opacity-0 bottom-4 left-4 text-amber-600 group-hover:opacity-100'>
          View on Google Maps →
        </div>
      </div>

      <div className='p-5'>
        <div className='flex items-start justify-between mb-3'>
          <div>
            <h3 className='text-lg font-bold text-gray-900 transition-colors group-hover:text-amber-600'>
              {name}
            </h3>
          </div>
          <span className='transition-opacity duration-300 opacity-0 text-amber-600 group-hover:opacity-100'>
            <ExternalLink className='w-4 h-4' />
          </span>
        </div>
        <p className='text-sm text-gray-600 line-clamp-2'>{description}</p>
      </div>
    </a>
  );
};

export default RestaurantCard;
