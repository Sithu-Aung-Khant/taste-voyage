import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { towns } from '../data/towns';
import TownCard from '../components/town/TownCard';
import Layout from '../components/layout/Layout';

const TopCitiesPage: React.FC = () => {
  const topCities = towns.filter((town) =>
    ['yangon', 'mandalay', 'bagan', 'pyin-oo-lwin', 'nay-pyi-taw'].includes(
      town.id
    )
  );

  return (
    <Layout>
      <div className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-8'>
            <Link
              to='/'
              className='inline-flex items-center text-amber-600 hover:text-amber-700'
            >
              <ArrowLeft className='h-5 w-5 mr-2' />
              Back to Home
            </Link>
          </div>

          <section>
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>
              Top Cities in Myanmar
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              Discover the vibrant culture and rich heritage of Myanmar's major
              cities
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {topCities.map((town) => (
                <TownCard key={town.id} town={town} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TopCitiesPage;
