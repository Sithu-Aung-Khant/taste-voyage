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
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
          <h1 className='mb-4 text-2xl font-bold text-gray-900'>
            Town not found
          </h1>
          <Link
            to='/'
            className='flex items-center justify-center font-medium text-amber-600 hover:text-amber-700'
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
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
        <div className='absolute bottom-0 left-0 right-0 p-8'>
          <div className='mx-auto max-w-7xl'>
            <h1 className='mb-2 text-4xl font-bold text-white'>{town.name}</h1>
            <div className='flex items-center space-x-2 text-white/90'>
              <MapPin className='w-5 h-5' />
              <span className='text-lg'>{town.region}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className='flex items-center mb-6 font-medium text-amber-600 hover:text-amber-700'
        >
          <ArrowLeft className='w-5 h-5 mr-2' />
          Back
        </button>

        {/* Rating and Description */}
        <div className='p-6 mb-8 bg-white rounded-lg shadow-md'>
          <div className='flex items-center mb-4'>
            <StarRating rating={town.rating} />
            <span className='ml-2 text-gray-600'>({town.rating} rating)</span>
          </div>
          <p className='text-lg leading-relaxed text-gray-700'>
            {town.description}
          </p>
        </div>

        {/* Attractions */}
        <div className='px-6 py-12 mb-8 bg-white rounded-lg shadow-md'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>
            Popular Attractions
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {attractions.map((attraction) => (
              <AttractionCard
                key={attraction.id}
                name={attraction.name}
                description={attraction.description}
                townName={town.name}
                image={attraction.image}
              />
            ))}
          </div>
        </div>

        {/* Restaurants */}
        {restaurants.length > 0 && (
          <div className='p-6 mb-8 bg-white rounded-lg shadow-md'>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>
              Recommended Restaurants
            </h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
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
        <div className='p-6 bg-white rounded-lg shadow-md'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>
            Signature Dishes
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
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
