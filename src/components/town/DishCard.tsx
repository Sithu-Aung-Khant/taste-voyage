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
      className='group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300'
    >
      <div className='relative h-52 overflow-hidden'>
        <img
          src={image}
          alt={formatDishName(name)}
          className='w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80'></div>
        <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-amber-600 rounded-full p-2 shadow-sm'>
          <UtensilsCrossed className='w-4 h-4' />
        </div>
        <div className='absolute bottom-4 left-4 right-4'>
          <h3 className='text-xl font-bold text-white mb-1'>
            {formatDishName(name)}
          </h3>
          <div className='flex items-center text-amber-200 text-sm'>
            <span>Learn more on Wikipedia</span>
            <ExternalLink className='w-3 h-3 ml-1 inline' />
          </div>
        </div>
      </div>

      <div className='p-5'>
        <p className='text-sm text-gray-600 line-clamp-3'>{description}</p>
        <div className='mt-4 flex items-center justify-end'>
          <div className='h-px flex-1 bg-gray-100'></div>
          <span className='flex items-center justify-center w-8 h-8 bg-amber-50 rounded-full text-amber-600 ml-4 group-hover:bg-amber-100 transition-colors'>
            <ExternalLink className='w-4 h-4' />
          </span>
        </div>
      </div>
    </a>
  );
};

export default DishCard;
