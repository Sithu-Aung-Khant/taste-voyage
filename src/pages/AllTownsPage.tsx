import React from 'react';
import Layout from '../components/layout/Layout';
import TownCard from '../components/town/TownCard';
import { towns } from '../data/towns';

const AllTownsPage: React.FC = () => {
  return (
    <Layout>
      <div className='container mx-auto px-4 py-8'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Explore Myanmar's Towns
          </h1>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Discover the diverse cities and towns of Myanmar, each offering
            unique cultural experiences, historical landmarks, and culinary
            delights. From bustling metropolises to serene hill stations, find
            your next destination here.
          </p>
        </div>

        {/* Towns Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {towns.map((town) => (
            <TownCard key={town.id} town={town} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AllTownsPage;
