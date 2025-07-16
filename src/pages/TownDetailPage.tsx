import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, ExternalLink } from 'lucide-react';
import { towns } from '../data/towns';
import StarRating from '../components/ui/StarRating';

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

  const getGoogleMapsUrl = (name: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(name)}`;
  };

  const getWikipediaUrl = (dish: string) => {
    return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
      dish
    )}`;
  };

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
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {town.attractions.map((attraction) => (
              <a
                key={attraction}
                href={getGoogleMapsUrl(attraction + ' ' + town.name)}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center p-4 border rounded-lg hover:bg-amber-50 transition-colors'
              >
                <span className='flex-grow text-gray-700'>{attraction}</span>
                <ExternalLink className='w-4 h-4 text-amber-600' />
              </a>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        {town.restaurants && (
          <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              Recommended Restaurants
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {town.restaurants.map((restaurant) => (
                <a
                  key={restaurant}
                  href={getGoogleMapsUrl(restaurant + ' ' + town.name)}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center p-4 border rounded-lg hover:bg-amber-50 transition-colors'
                >
                  <span className='flex-grow text-gray-700'>{restaurant}</span>
                  <ExternalLink className='w-4 h-4 text-amber-600' />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Signature Dishes */}
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Signature Dishes
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {town.signatureDishes.map((dish) => (
              <a
                key={dish}
                href={getWikipediaUrl(dish)}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center p-4 border rounded-lg hover:bg-amber-50 transition-colors'
              >
                <span className='flex-grow text-gray-700'>
                  {dish
                    .split('-')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </span>
                <ExternalLink className='w-4 h-4 text-amber-600' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TownDetailPage;
