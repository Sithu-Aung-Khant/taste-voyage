import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { beaches } from '../../data/beaches';
import StarRating from '../ui/StarRating';

interface BeachCardProps {
  beach: {
    id: string;
    name: string;
    region: string;
    image: string;
    rating: number;
    description: string;
  };
}

export const BeachCard: React.FC<BeachCardProps> = ({ beach }) => {
  return (
    <Link
      to={`/beaches/${beach.id}`}
      className='block overflow-hidden transition-transform duration-300 bg-white rounded-xl hover:-translate-y-1'
    >
      <div className='relative h-48'>
        <img
          src={beach.image}
          alt={beach.name}
          className='object-cover w-full h-full'
        />
      </div>
      <div className='p-4'>
        <h3 className='text-xl font-semibold text-gray-900'>{beach.name}</h3>
        <div className='flex items-center mt-1 mb-2 text-gray-600'>
          <MapPin className='w-4 h-4 mr-1' />
          <span className='text-sm'>{beach.region}</span>
        </div>
        <StarRating rating={beach.rating} />
        <p className='mt-2 text-sm text-gray-600 line-clamp-2'>
          {beach.description}
        </p>
      </div>
    </Link>
  );
};

const Beaches: React.FC = () => {
  // Get featured beaches
  const featuredBeaches = beaches.slice(0, 3);

  return (
    <section className='py-16 bg-blue-50'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex items-end justify-between mb-8'>
          <div>
            <h2 className='text-3xl font-bold text-gray-900'>
              Beautiful Beaches
            </h2>
            <p className='mt-2 text-lg text-gray-600'>
              Discover Myanmar's pristine coastal paradise
            </p>
          </div>
          <Link
            to='/beaches'
            className='items-center hidden font-medium transition-colors sm:flex text-amber-600 hover:text-amber-700'
          >
            View all beaches
            <ArrowRight className='w-5 h-5 ml-2' />
          </Link>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {featuredBeaches.map((beach) => (
            <BeachCard key={beach.id} beach={beach} />
          ))}
        </div>

        <div className='mt-8 text-center sm:hidden'>
          <Link
            to='/beaches'
            className='inline-flex items-center font-medium transition-colors text-amber-600 hover:text-amber-700'
          >
            View all beaches
            <ArrowRight className='w-5 h-5 ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Beaches;
