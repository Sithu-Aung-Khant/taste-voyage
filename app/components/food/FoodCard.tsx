import React from 'react';
import { Food } from '../../types';

interface FoodCardProps {
  food: Food;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <div className='flex flex-col h-full overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg'>
      <div className='relative h-48 overflow-hidden'>
        <img
          src={food.image}
          alt={food.name}
          className='object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105'
        />
        <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent'>
          <div className='flex items-end justify-between'>
            <h3 className='text-lg font-bold text-white'>{food.name}</h3>
          </div>
        </div>
      </div>

      <div className='flex-grow p-4'>
        <p className='mb-2 text-sm text-gray-600'>{food.description}</p>
      </div>

      <div className='px-4 pt-2 pb-4 border-t border-gray-100'>
        <div className='flex items-center justify-end'>
          <div className='flex items-center text-xs text-gray-500'>
            <span className='font-medium'>Origin:</span>
            <span className='ml-1.5'>{food.origin[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
