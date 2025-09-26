import React, { useMemo } from 'react';
import Layout from '../components/layout/HeaderOnlyLayout';
import FoodCard from '../components/food/FoodCard';
import { foods } from '../data/foods';
import { dishes } from '../data/dishes';
import { Food } from '../types';

const AllFoodsPage: React.FC = () => {
  // Transform dishes data to match Food type and combine with foods data
  const allFoods = useMemo(() => {
    const existingFoodIds = new Set(foods.map((food) => food.id));

    const transformedDishes: Food[] = dishes
      .filter((dish) => !existingFoodIds.has(dish.id)) // Only add dishes that don't exist in foods
      .map((dish) => ({
        id: dish.id,
        name: dish.displayName,
        description: dish.description,
        image: dish.image,
        rating: 4.5, // Default rating
        origin: ['Myanmar'], // Default origin
        ingredients: [], // Empty ingredients
        category: dish.name.toLowerCase().includes('curry')
          ? 'main'
          : dish.name.toLowerCase().includes('salad')
            ? 'appetizer'
            : dish.name.toLowerCase().includes('wine')
              ? 'drink'
              : 'main', // Basic category logic
        isVegetarian:
          dish.name.toLowerCase().includes('salad') ||
          dish.name.toLowerCase().includes('vegetable'), // Basic vegetarian logic
      }));

    return [...foods, ...transformedDishes];
  }, []);

  return (
    <Layout>
      <div className='container px-4 py-8 mx-auto'>
        {/* Header Section */}
        <div className='mt-10 mb-20 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-gray-900'>
            Explore Myanmar's Cuisine
          </h1>
          <p className='max-w-3xl mx-auto text-lg text-gray-600'>
            Discover the rich and diverse flavors of Myanmar's traditional
            dishes. From aromatic curries to fresh salads, explore a culinary
            journey through the country's most beloved foods.
          </p>
        </div>

        {/* Foods Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {allFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        {/* Total Count */}
        <div className='mt-8 text-center text-gray-600'>
          Showing all {allFoods.length} dishes
        </div>
      </div>
    </Layout>
  );
};

export default AllFoodsPage;
