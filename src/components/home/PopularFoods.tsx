import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Food } from '../../types';
import { foods } from '../../data/foods';
import FoodCard from '../food/FoodCard';

const PopularFoods: React.FC = () => {
  // Get top 4 foods by rating
  const topFoods = [...foods]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Top-Rated Myanmar Dishes
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Discover the most beloved traditional foods from across Myanmar
            </p>
          </div>
          <Link 
            to="/foods" 
            className="hidden sm:flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
          >
            View all foods
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link 
            to="/foods" 
            className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
          >
            View all foods
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularFoods;