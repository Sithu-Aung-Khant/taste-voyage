import React from 'react';
import { useTowns } from '../../hooks/useSanityData';
import { convertSanityTown } from '../../utils/sanityConverters';
import { Town } from '../../types';
import TownCard from '../town/TownCard';

// Example component showing how to use Sanity data
const SanityTownsList: React.FC = () => {
  const { towns, loading, error } = useTowns();

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-64'>
        <div className='w-32 h-32 border-b-2 border-blue-600 rounded-full animate-spin'></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='py-8 text-center'>
        <div className='mb-4 text-red-600'>
          <h3 className='text-lg font-semibold'>Error loading towns</h3>
          <p>{error}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
        >
          Retry
        </button>
      </div>
    );
  }

  // Convert Sanity data to your existing format
  const convertedTowns: Town[] = towns.map(convertSanityTown);

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {convertedTowns.map((town) => (
        <TownCard key={town.id} town={town} />
      ))}
    </div>
  );
};

export default SanityTownsList;
