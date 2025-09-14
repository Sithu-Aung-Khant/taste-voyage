import React from 'react';
import { Link } from 'react-router-dom';
import HybridTownsList from '../components/examples/HybridTownsList';
import SanityTownsList from '../components/examples/SanityTownsList';

const SanityTestPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container px-4 py-8 mx-auto'>
        <div className='mb-8'>
          <h1 className='mb-4 text-4xl font-bold text-gray-900'>
            Sanity CMS Integration Test
          </h1>
          <p className='mb-6 text-lg text-gray-600'>
            This page demonstrates how to integrate Sanity CMS with your React +
            Vite project.
          </p>

          <div className='p-4 mb-6 border border-blue-200 rounded-lg bg-blue-50'>
            <h2 className='mb-2 text-lg font-semibold text-blue-900'>
              Setup Required
            </h2>
            <p className='mb-2 text-blue-800'>
              To see Sanity data, you need to:
            </p>
            <ol className='space-y-1 text-blue-800 list-decimal list-inside'>
              <li>
                Create a <code>.env</code> file with your Sanity project ID
              </li>
              <li>Set up your Sanity Studio with the required schemas</li>
              <li>Add some content to your Sanity dataset</li>
            </ol>
            <p className='mt-2 text-blue-800'>
              See <code>SANITY_INTEGRATION_GUIDE.md</code> for detailed
              instructions.
            </p>
          </div>
        </div>

        <div className='space-y-12'>
          {/* Hybrid Component Demo */}
          <section>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>
              Hybrid Component (Sanity + Static Fallback)
            </h2>
            <p className='mb-6 text-gray-600'>
              This component automatically uses Sanity data if available,
              otherwise falls back to static data.
            </p>
            <HybridTownsList />
          </section>

          {/* Pure Sanity Component Demo */}
          <section>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>
              Pure Sanity Component
            </h2>
            <p className='mb-6 text-gray-600'>
              This component only uses Sanity data and shows loading/error
              states.
            </p>
            <SanityTownsList />
          </section>
        </div>

        <div className='mt-12 text-center'>
          <Link
            to='/'
            className='inline-flex items-center px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700'
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SanityTestPage;
