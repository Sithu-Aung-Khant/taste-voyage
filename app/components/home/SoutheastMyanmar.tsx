import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { towns } from '../../data/towns';
import TownCard from '../town/TownCard';

const SoutheastMyanmar: React.FC = () => {
  // Get Southeast Myanmar destinations
  const southeastDestinations = towns.filter((town) =>
    ['hpa-an', 'mawlamyaing'].includes(town.id)
  );

  return (
    <section className='py-16 bg-purple-50'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex items-end justify-between mb-8'>
          <div>
            <h2 className='text-3xl font-bold text-gray-900'>
              Southeast Myanmar
            </h2>
            <p className='mt-2 text-lg text-gray-600'>
              Experience the unique culture and natural beauty of Myanmar's
              southeast
            </p>
          </div>
          <Link
            to='/towns/southeast'
            className='items-center hidden font-medium transition-colors sm:flex text-amber-600 hover:text-amber-700'
          >
            View all destinations
            <ArrowRight className='w-5 h-5 ml-2' />
          </Link>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {southeastDestinations.map((town) => (
            <TownCard key={town.id} town={town} />
          ))}
        </div>

        <div className='mt-8 text-center sm:hidden'>
          <Link
            to='/towns/southeast'
            className='inline-flex items-center font-medium transition-colors text-amber-600 hover:text-amber-700'
          >
            View all destinations
            <ArrowRight className='w-5 h-5 ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SoutheastMyanmar;
