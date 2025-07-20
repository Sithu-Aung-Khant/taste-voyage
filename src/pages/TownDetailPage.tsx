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
        {/* Back Button and Overview Card */}
        <div className='flex flex-col gap-6'>
          <button
            onClick={handleGoBack}
            className='inline-flex items-center px-4 py-2 font-medium transition-all rounded-full bg-white/80 backdrop-blur-sm text-amber-600 hover:text-amber-700 hover:bg-white/90 w-fit'
          >
            <ArrowLeft className='w-5 h-5 mr-2' />
            Back to Explore
          </button>

          {/* Rating and Description Card */}
          <div className='p-8 bg-white shadow-sm rounded-xl lg:mb-12'>
            <div className='flex items-center mb-6'>
              <StarRating rating={town.rating} />
              <span className='ml-3 text-lg text-gray-600'>
                ({town.rating} rating)
              </span>
            </div>
            <p className='mb-6 text-lg leading-relaxed text-gray-700'>
              {town.description}
            </p>
            <a
              href={`https://en.wikipedia.org/wiki/${town.name}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-4 py-2 transition-colors rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100'
            >
              Read more on Wikipedia
              <svg
                className='w-4 h-4 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Attractions Section */}
        <section className='my-12'>
          <h2 className='mb-8 text-3xl font-bold text-gray-900'>
            Popular Attractions
          </h2>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2'>
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
        </section>

        {/* Restaurants Section */}
        {restaurants.length > 0 && (
          <section className='px-4 py-12 my-12 -mx-4 bg-amber-50/50 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
            <div className='mx-auto max-w-7xl'>
              <h2 className='mb-8 text-3xl font-bold text-gray-900'>
                Recommended Restaurants
              </h2>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
                {restaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    name={restaurant.name}
                    townName={town.name}
                    image={restaurant.image}
                    description={restaurant.description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Signature Dishes Section */}
        {dishes.length > 0 && (
          <section className='my-12'>
            <h2 className='mb-8 text-3xl font-bold text-gray-900'>
              Signature Dishes
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {dishes.map((dish) => (
                <DishCard
                  key={dish?.id}
                  name={dish?.name || ''}
                  image={dish?.image || ''}
                  description={dish?.description || ''}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default TownDetailPage;
