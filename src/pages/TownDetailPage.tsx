import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { towns } from '../data/towns';
import { getAttractionsByTownId } from '../data/attractions';
import { getRestaurantsByTownId } from '../data/restaurants';
import { getDishByName } from '../data/dishes';
import StarRating from '../components/ui/StarRating';
import AttractionCard from '../components/town/AttractionCard';
import RestaurantCard from '../components/town/RestaurantCard';
import DishCard from '../components/town/DishCard';

const TownDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const town = towns.find((t) => t.id === id);

  if (!town) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>
            Town not found
          </h1>
          <Link
            to='/'
            className='text-amber-600 hover:text-amber-700 font-medium flex items-center justify-center'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  const attractions = getAttractionsByTownId(town.id);
  const restaurants = town.restaurants ? getRestaurantsByTownId(town.id) : [];
  const dishes = town.signatureDishes
    .map((dishName) => getDishByName(dishName))
    .filter(Boolean);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='relative h-[60vh] overflow-hidden'>
        <img
          src={town.image}
          alt={town.name}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
        <div className='absolute bottom-0 left-0 right-0 p-8'>
          <div className='max-w-7xl mx-auto'>
            <h1 className='text-white text-4xl font-bold mb-2'>{town.name}</h1>
            <div className='flex items-center text-white/90 space-x-2'>
              <MapPin className='h-5 w-5' />
              <span className='text-lg'>{town.region}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className='mb-6 flex items-center text-amber-600 hover:text-amber-700 font-medium'
        >
          <ArrowLeft className='w-5 h-5 mr-2' />
          Back
        </button>

        {/* Rating and Description */}
        <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <div className='flex items-center mb-4'>
            <StarRating rating={town.rating} />
            <span className='ml-2 text-gray-600'>({town.rating} rating)</span>
          </div>
          <p className='text-gray-700 text-lg leading-relaxed'>
            {town.description}
          </p>
        </div>

        {/* Attractions */}
        <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Popular Attractions
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {attractions.map((attraction) => (
              <AttractionCard
                key={attraction.id}
                name={attraction.name}
                townName={town.name}
                image={attraction.image}
              />
            ))}
          </div>
        </div>

        {/* Restaurants */}
        {restaurants.length > 0 && (
          <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              Recommended Restaurants
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {restaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  name={restaurant.name}
                  townName={town.name}
                  image={restaurant.image}
                />
              ))}
            </div>
          </div>
        )}

        {/* Signature Dishes */}
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Signature Dishes
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {dishes.map((dish) => (
              <DishCard
                key={dish?.id}
                name={dish?.name || ''}
                image={dish?.image || ''}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TownDetailPage;
