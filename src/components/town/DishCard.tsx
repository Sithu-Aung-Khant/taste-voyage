import React from 'react';
import { ExternalLink, UtensilsCrossed } from 'lucide-react';

interface DishCardProps {
  name: string;
  // Using a placeholder image for now, we can update this when we have real images
  image: string;
}

const DishCard: React.FC<DishCardProps> = ({ name, image }) => {
  const getWikipediaUrl = (dish: string) => {
    return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
      dish
    )}`;
  };

  const formatDishName = (name: string) => {
    return name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <a
      href={getWikipediaUrl(name)}
      target='_blank'
      rel='noopener noreferrer'
      className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group'
    >
      <div className='relative h-48 overflow-hidden'>
        <img
          src={image}
          alt={formatDishName(name)}
          className='w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
        <div className='absolute top-4 right-4 bg-amber-100 text-amber-800 rounded-full p-2'>
          <UtensilsCrossed className='w-4 h-4' />
        </div>
      </div>

      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-lg text-gray-900'>
            {formatDishName(name)}
          </h3>
          <ExternalLink className='w-4 h-4 text-amber-600' />
        </div>
        <p className='mt-2 text-sm text-gray-600'>Learn more on Wikipedia</p>
      </div>
    </a>
  );
};

export default DishCard;
