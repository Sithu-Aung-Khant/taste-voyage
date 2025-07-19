import React from 'react';
import { ExternalLink, Utensils } from 'lucide-react';

interface RestaurantCardProps {
  name: string;
  townName: string;
  // Using a placeholder image for now, we can update this when we have real images
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
      className='overflow-hidden transition-shadow duration-300 bg-white border rounded-lg shadow hover:shadow-sm group'
    >
      <div className='relative h-48 overflow-hidden'>
        <img
          src={image}
          alt={name}
          className='object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
        <div className='absolute p-2 rounded-full top-4 right-4 bg-amber-100 text-amber-800'>
          <Utensils className='w-4 h-4' />
        </div>
      </div>

      <div className='p-4'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-bold text-gray-900'>{name}</h3>
          <ExternalLink className='w-4 h-4 text-amber-600' />
        </div>
        <p className='mt-2 text-sm text-gray-600'>{description}</p>
      </div>
    </a>
  );
};

export default RestaurantCard;
