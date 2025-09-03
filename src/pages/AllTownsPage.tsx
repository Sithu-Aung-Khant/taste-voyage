import React from 'react';
import Layout from '../components/layout/HeaderOnlyLayout';
import TownCard from '../components/town/TownCard';
import { towns } from '../data/towns';

const AllTownsPage: React.FC = () => {
  // Categorize towns
  const topCities = towns.filter((town) =>
    ['yangon', 'mandalay', 'pyin-oo-lwin', 'nay-pyi-daw', 'bagan','Kyauk-se'].includes(
      town.id
    )
  );

  const shanHighlands = towns.filter((town) =>
    ['taunggyi', 'kalaw', 'nyaung-shwe', 'inle-lake'].includes(town.id)
  );

  const southeastMyanmar = towns.filter((town) =>
    ['hpa-an', 'mawlamyaing', 'dawei', 'kawthaung', 'myeik'].includes(town.id)
  );

  const beachDestinations = towns.filter((town) =>
    ['ngapali', 'ngwe-saung', 'chaung-tha'].includes(town.id)
  );

  return (
    <Layout>
      <div className='container px-4 py-8 mx-auto'>
        {/* Header Section */}
        <div className='mt-20 mb-10 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-gray-900'>
            Explore Myanmar's Towns
          </h1>
          <p className='max-w-3xl mx-auto text-lg text-gray-600'>
            Discover the diverse cities and towns of Myanmar, each offering
            unique cultural experiences, historical landmarks, and culinary
            delights. From bustling metropolises to serene hill stations, find
            your next destination here.
          </p>
        </div>

        {/* Top Cities Section */}
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

        {/* Shan Highlands Section */}
        <section className='py-16 bg-green-50'>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='mb-8'>
              <h2 className='text-3xl font-bold text-gray-900'>
                The Shan Highlands
              </h2>
              <p className='mt-2 text-lg text-gray-600'>
                Explore the cool climate and rich culture of Myanmar's highland
                region
              </p>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {shanHighlands.map((town) => (
                <TownCard key={town.id} town={town} />
              ))}
            </div>
          </div>
        </section>

        {/* Southeast Myanmar Section */}
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

        {/* Beach Destinations Section */}
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
      </div>
    </Layout>
  );
};

export default AllTownsPage;
