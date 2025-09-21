import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { beaches } from '../data/beaches';
import Layout from '../components/layout/Layout';
import { BeachCard } from '../components/home/Beaches';

const AllBeachesPage: React.FC = () => {
  // Filter beaches based on the provided list
  const popularBeaches = beaches.filter((beach) =>
    ['ngapali', 'ngwe-saung', 'chaung-tha', 'nyaung-oo-phee'].includes(beach.id)
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

          {/* Beaches Section */}
          <section>
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>
              Popular Beaches
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {popularBeaches.map((beach) => (
                <BeachCard key={beach.id} beach={beach} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AllBeachesPage;
