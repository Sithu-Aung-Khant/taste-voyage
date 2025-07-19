import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Food } from '../../types';
import StarRating from '../ui/StarRating';
import Badge from '../ui/Badge';

interface FoodCardProps {
  food: Food;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const getWikipediaUrl = (food: Food) => {
    if (food.wikipediaUrl) {
      return food.wikipediaUrl;
    }
    return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
      food.name
    )}`;
  };

  return (
    <a
      href={getWikipediaUrl(food)}
      target='_blank'
      rel='noopener noreferrer'
      className='flex flex-col h-full overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg'
    >
      <div className='relative h-48 overflow-hidden'>
        <img
          src={food.image}
          alt={food.name}
          className='object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105'
        />
        <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent'>
          <div className='flex items-end justify-between'>
            <h3 className='text-lg font-bold text-white line-clamp-1'>
              {food.name}
            </h3>
            <StarRating rating={food.rating} size='sm' />
          </div>
        </div>
      </div>

      <div className='flex-grow p-4'>
        <p className='mb-4 text-sm text-gray-600 line-clamp-3'>
          {food.description}
        </p>

        <div className='flex flex-wrap gap-2 mt-auto'>
          {food.tasteTags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant='primary' size='sm'>
              {tag}
            </Badge>
          ))}
          {food.isVegetarian && (
            <Badge variant='success' size='sm'>
              vegetarian
            </Badge>
          )}
        </div>
      </div>

      <div className='px-4 pt-2 pb-4 border-t border-gray-100'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center text-xs text-gray-500'>
            <span className='font-medium'>Origin:</span>
            <span className='ml-1.5'>{food.origin[0]}</span>
          </div>
          <div className='flex items-center'>
            <span className='text-sm text-amber-600'>
              {food.wikipediaUrl ? 'View on Wikipedia' : 'Search on Wikipedia'}
            </span>
            <ExternalLink className='w-4 h-4 ml-1 text-amber-600' />
          </div>
        </div>
        <div className='flex items-center mt-2 text-xs text-gray-500'>
          <span>Spice: </span>
          <div className='flex ml-1.5'>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full mx-0.5 ${
                  i < food.spiceLevel ? 'bg-red-500' : 'bg-gray-200'
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default FoodCard;
