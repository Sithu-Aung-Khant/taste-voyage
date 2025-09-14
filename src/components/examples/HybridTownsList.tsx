import React, { useState, useEffect } from 'react';
import { useTowns } from '../../hooks/useSanityData';
import { convertSanityTown } from '../../utils/sanityConverters';
import { Town } from '../../types';
import { towns as staticTowns } from '../../data/towns';
import TownCard from '../town/TownCard';

// Hybrid component that uses Sanity data if available, falls back to static data
const HybridTownsList: React.FC = () => {
  const { towns: sanityTowns, loading, error } = useTowns();
  const [useSanityData, setUseSanityData] = useState(false);
  const [displayTowns, setDisplayTowns] = useState<Town[]>(staticTowns);

  useEffect(() => {
    if (!loading && !error && sanityTowns.length > 0) {
      // Convert Sanity data and use it
      const convertedTowns = sanityTowns.map(convertSanityTown);
      setDisplayTowns(convertedTowns);
      setUseSanityData(true);
    } else if (!loading && error) {
      // Fallback to static data if Sanity fails
      setDisplayTowns(staticTowns);
      setUseSanityData(false);
    }
  }, [sanityTowns, loading, error]);

  return (
    <div>
      {/* Data source indicator */}
      <div className='p-3 mb-4 bg-gray-100 rounded-lg'>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-600'>
            Data source: {useSanityData ? 'Sanity CMS' : 'Static Data'}
          </span>
          {error && (
            <span className='text-xs text-red-600'>
              Sanity unavailable, using static data
            </span>
          )}
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className='flex items-center justify-center min-h-32'>
          <div className='w-8 h-8 border-b-2 border-blue-600 rounded-full animate-spin'></div>
          <span className='ml-2 text-gray-600'>Loading from Sanity...</span>
        </div>
      )}

      {/* Towns grid */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {displayTowns.map((town) => (
          <TownCard key={town.id} town={town} />
        ))}
      </div>
    </div>
  );
};

export default HybridTownsList;
