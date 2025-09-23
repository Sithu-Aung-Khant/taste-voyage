import React from 'react';
import Layout from '../components/layout/HeaderOnlyLayout';
import TownCard from '../components/town/TownCard';
import { SanityTown, Town } from '../types';

interface AllTownsSanityPageProps {
  loaderData: { sanityTowns: SanityTown[] };
}

const AllTownsSanityPage: React.FC<AllTownsSanityPageProps> = ({
  loaderData,
}) => {
  // Convert SanityTown to Town format
  const convertSanityTownToTown = (sanityTown: SanityTown): Town => ({
    id: sanityTown.slug.current,
    name: sanityTown.name,
    description: sanityTown.description || '',
    image: sanityTown.imageUrl || '',
    rating: sanityTown.rating || 0,
    region: sanityTown.region || 'Myanmar',
    coordinates: sanityTown.coordinates || { lat: 0, lng: 0 },
    attractions: sanityTown.attractions || [],
    restaurants: sanityTown.restaurants || [],
    signatureDishes: sanityTown.signatureDishes || [],
  });

  // Convert Sanity towns to Town format
  const sanityTownsAsTowns = loaderData.sanityTowns.map(
    convertSanityTownToTown
  );

  // Match filtering logic and hyphenation with AllTownsPage (by IDs)
  const topCitiesIds = new Set([
    'yangon',
    'mandalay',
    'pyin-oo-lwin',
    'nay-pyi-daw',
    'bagan',
    'kyauk-se',
  ]);
  const shanHighlandsIds = new Set([
    'taunggyi',
    'kalaw',
    'nyaung-shwe',
    'inle-lake',
  ]);
  const southeastMyanmarIds = new Set([
    'hpa-an',
    'mawlamyaing',
    'dawei',
    'kawthaung',
    'myeik',
  ]);
  const beachDestinationIds = new Set(['ngapali', 'ngwe-saung', 'chaung-tha']);

  const topCities = sanityTownsAsTowns.filter((town) =>
    topCitiesIds.has((town.id || '').toLowerCase())
  );

  const shanHighlands = sanityTownsAsTowns.filter((town) =>
    shanHighlandsIds.has((town.id || '').toLowerCase())
  );

  const southeastMyanmar = sanityTownsAsTowns.filter((town) =>
    southeastMyanmarIds.has((town.id || '').toLowerCase())
  );

  const beachDestinations = sanityTownsAsTowns.filter((town) =>
    beachDestinationIds.has((town.id || '').toLowerCase())
  );

  // Towns that don't fit into any category
  const otherTowns = sanityTownsAsTowns.filter(
    (town) =>
      !topCities.includes(town) &&
      !shanHighlands.includes(town) &&
      !southeastMyanmar.includes(town) &&
      !beachDestinations.includes(town)
  );

  return (
    <Layout>
      <div className='container px-4 py-8 mx-auto'>
        {/* Header Section */}
        <div className='mt-20 mb-10 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-gray-900'>
            Explore Myanmar's Towns (Sanity CMS)
          </h1>
          <p className='max-w-3xl mx-auto text-lg text-gray-600'>
            Discover towns managed through our Sanity CMS, each offering unique
            cultural experiences, historical landmarks, and culinary delights.
            From bustling metropolises to serene hill stations, find your next
            destination here.
          </p>
        </div>

        {/* Top Cities Section */}
        {topCities.length > 0 && (
          <section className='py-16 bg-white'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='mb-8'>
                <h2 className='text-3xl font-bold text-gray-900'>
                  Top Cities in Myanmar
                </h2>
                <p className='mt-2 text-lg text-gray-600'>
                  Discover the vibrant culture and rich heritage of Myanmar's
                  major cities
                </p>
              </div>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {topCities.map((town) => (
                  <TownCard key={town.id} town={town} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Shan Highlands Section */}
        {shanHighlands.length > 0 && (
          <section className='py-16 bg-green-50'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='mb-8'>
                <h2 className='text-3xl font-bold text-gray-900'>
                  The Shan Highlands
                </h2>
                <p className='mt-2 text-lg text-gray-600'>
                  Explore the cool climate and rich culture of Myanmar's
                  highland region
                </p>
              </div>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {shanHighlands.map((town) => (
                  <TownCard key={town.id} town={town} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Southeast Myanmar Section */}
        {southeastMyanmar.length > 0 && (
          <section className='py-16'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='mb-8'>
                <h2 className='text-3xl font-bold text-gray-900'>
                  Southeast Myanmar
                </h2>
                <p className='mt-2 text-lg text-gray-600'>
                  Experience the unique culture and natural beauty of Myanmar's
                  southeast
                </p>
              </div>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {southeastMyanmar.map((town) => (
                  <TownCard key={town.id} town={town} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Beach Destinations Section */}
        {beachDestinations.length > 0 && (
          <section className='py-16 bg-blue-50'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='mb-8'>
                <h2 className='text-3xl font-bold text-gray-900'>
                  Beach Destinations
                </h2>
                <p className='mt-2 text-lg text-gray-600'>
                  Relax on pristine beaches and enjoy the coastal beauty of
                  Myanmar
                </p>
              </div>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                {beachDestinations.map((town) => (
                  <TownCard key={town.id} town={town} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Towns Section */}
        {otherTowns.length > 0 && (
          <section className='py-16 bg-purple-50'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='mb-8'>
                <h2 className='text-3xl font-bold text-gray-900'>
                  Other Towns
                </h2>
                <p className='mt-2 text-lg text-gray-600'>
                  Discover more towns from our Sanity CMS
                </p>
              </div>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {otherTowns.map((town) => (
                  <TownCard key={town.id} town={town} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No towns message */}
        {sanityTownsAsTowns.length === 0 && (
          <section className='py-16'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='text-center'>
                <h2 className='mb-4 text-3xl font-bold text-gray-900'>
                  No Towns Found
                </h2>
                <p className='text-lg text-gray-600'>
                  No towns are currently available in our Sanity CMS.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default AllTownsSanityPage;
