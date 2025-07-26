import React from 'react';
import Layout from '../components/layout/HeaderOnlyLayout';
import TownCard from '../components/town/TownCard';
import { towns } from '../data/towns';

const AllTownsPage: React.FC = () => {
  return (
    <Layout>
      <div className='container px-4 py-8 mx-auto'>
        {/* Header Section */}
        <div className='mt-10 mb-20 text-center'>
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

        {/* Towns Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {towns.map((town) => (
            <TownCard key={town.id} town={town} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AllTownsPage;
