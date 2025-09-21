import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { towns } from '../data/towns';
import TownCard from '../components/town/TownCard';
import HeaderOnlyLayout from '../components/layout/HeaderOnlyLayout';

const ShanHighlandsPage: React.FC = () => {
  const shanHighlands = towns.filter((town) =>
    [
      'taunggyi',
      'nyaung-shwe',
      'keng-tung',
      'tachileik',
      'kalaw',
      'inle-lake',
    ].includes(town.id)
  );

  return (
    <HeaderOnlyLayout>
      <div className='py-12 bg-green-50'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='mb-8'>
            <Link
              to='/'
              className='inline-flex items-center text-amber-600 hover:text-amber-700'
            >
              <ArrowLeft className='w-5 h-5 mr-2' />
              Back to Home
            </Link>
          </div>

          <section>
            <h2 className='mb-8 text-3xl font-bold text-gray-900'>
              The Shan Highlands
            </h2>
            <p className='mb-8 text-lg text-gray-600'>
              Explore the cool climate and rich culture of Myanmar's highland
              region
            </p>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {shanHighlands.map((town) => (
                <TownCard key={town.id} town={town} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </HeaderOnlyLayout>
  );
};

export default ShanHighlandsPage;
