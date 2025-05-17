import React from 'react';
import { Link } from 'react-router-dom';
import { Food } from '../../types';
import StarRating from '../ui/StarRating';
import Badge from '../ui/Badge';

interface FoodCardProps {
  food: Food;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <Link 
      to={`/foods/${food.id}`}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex justify-between items-end">
            <h3 className="text-white font-bold text-lg line-clamp-1">{food.name}</h3>
            <StarRating rating={food.rating} size="sm" />
          </div>
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{food.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {food.tasteTags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="primary" size="sm">
              {tag}
            </Badge>
          ))}
          {food.isVegetarian && (
            <Badge variant="success" size="sm">
              vegetarian
            </Badge>
          )}
        </div>
      </div>
      
      <div className="px-4 pb-4 pt-2 border-t border-gray-100 text-xs text-gray-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-medium">Origin:</span>
            <span className="ml-1.5">{food.origin[0]}</span>
          </div>
          <div className="flex items-center">
            <span>Spice: </span>
            <div className="flex ml-1.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`h-2 w-2 rounded-full mx-0.5 ${i < food.spiceLevel ? 'bg-red-500' : 'bg-gray-200'}`}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;