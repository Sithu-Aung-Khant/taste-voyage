import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { towns } from '../../data/towns';
import TownCard from '../town/TownCard';

const TopCities: React.FC = () => {
  // Get Yangon and Mandalay from towns array
  const topCities = towns.filter(
    (town) => town.id === 'yangon' || town.id === 'mandalay'
  );

  return (
    <section className='py-16 bg-white'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex items-end justify-between mb-8'>
          <div>
            <h2 className='text-3xl font-bold text-gray-900'>
              Top Cities in Myanmar
            </h2>
            <p className='mt-2 text-lg text-gray-600'>
              Discover the vibrant culture and rich heritage of Myanmar's major
              cities
            </p>
          </div>
          <Link
            to='/towns'
            className='items-center hidden font-medium transition-colors sm:flex text-amber-600 hover:text-amber-700'
          >
            View all cities
            <ArrowRight className='w-5 h-5 ml-2' />
          </Link>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {topCities.map((town) => (
            <TownCard key={town.id} town={town} />
          ))}
        </div>

        <div className='mt-8 text-center sm:hidden'>
          <Link
            to='/towns'
            className='inline-flex items-center font-medium transition-colors text-amber-600 hover:text-amber-700'
          >
            View all cities
            <ArrowRight className='w-5 h-5 ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCities;
