import React from 'react';
import { ExternalLink, UtensilsCrossed } from 'lucide-react';

interface DishCardProps {
  name: string;
  image: string;
  description: string;
}

const DishCard: React.FC<DishCardProps> = ({ name, image, description }) => {
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
      className='overflow-hidden transition-all duration-300 bg-white shadow-sm group rounded-xl hover:shadow-md'
    >
      <div className='relative overflow-hidden h-52'>
        <img
          src={image}
          alt={formatDishName(name)}
          className='object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80'></div>
        <div className='absolute p-2 rounded-full shadow-sm top-4 right-4 bg-white/90 backdrop-blur-sm text-amber-600'>
          <UtensilsCrossed className='w-4 h-4' />
        </div>
        <div className='absolute bottom-4 left-4 right-4'>
          <h3 className='mb-1 text-xl font-bold text-white'>
            {formatDishName(name)}
          </h3>
          <div className='flex items-center text-sm text-amber-200'>
            <span>Learn more on Wikipedia</span>
            <ExternalLink className='inline w-3 h-3 ml-1' />
          </div>
        </div>
      </div>

      <div className='p-5'>
        <p className='text-sm text-gray-600 line-clamp-3'>{description}</p>
        <div className='flex items-center justify-end mt-4'>
          <div className='flex-1 h-px bg-gray-100'></div>
          <span className='flex items-center justify-center w-8 h-8 ml-4 transition-colors rounded-full bg-amber-50 text-amber-600 group-hover:bg-amber-100'>
            <ExternalLink className='w-4 h-4' />
          </span>
        </div>
      </div>
    </a>
  );
};

export default DishCard;
