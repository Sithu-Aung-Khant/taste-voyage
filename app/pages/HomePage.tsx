import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import PopularFoods from '../components/home/PopularFoods';
// import FeaturedDestinations from '../components/home/FeaturedDestinations';
import TopCities from '../components/home/TopCities';
import Beaches from '../components/home/Beaches';
import ShanHighlands from '../components/home/ShanHighlands';
import SoutheastMyanmar from '../components/home/SoutheastMyanmar';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <TopCities />
      {/* <FeaturedDestinations /> */}
      <Beaches />
      <PopularFoods />
      <ShanHighlands />
      <SoutheastMyanmar />

      {/* Culture Section */}
      <section className='py-20 bg-amber-50'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
            <div>
              <h2 className='mb-6 text-3xl font-bold text-gray-900'>
                Experience Myanmar's Rich Culinary Heritage
              </h2>
              <p className='mb-6 text-lg text-gray-700'>
                Myanmar's cuisine reflects its unique geographic position
                between India, China, and Thailand, creating a distinctive blend
                of flavors and techniques that remain authentically its own.
              </p>
              <p className='mb-6 text-lg text-gray-700'>
                From the aromatic rice dishes to the tangy salads and rich
                curries, Myanmar's food tells the story of its diverse people
                and landscapes, with each region offering its own specialties.
              </p>
              <div className='flex space-x-4'>
                <div className='flex flex-col items-center justify-center w-20 h-20 rounded-full bg-amber-100 text-amber-800'>
                  <span className='text-xl font-bold'>100+</span>
                  <span className='text-xs text-center'>Unique Dishes</span>
                </div>
                <div className='flex flex-col items-center justify-center w-20 h-20 text-red-800 bg-red-100 rounded-full'>
                  <span className='text-xl font-bold'>15+</span>
                  <span className='text-xs text-center'>Culinary Regions</span>
                </div>
                <div className='flex flex-col items-center justify-center w-20 h-20 text-green-800 bg-green-100 rounded-full'>
                  <span className='text-xl font-bold'>50+</span>
                  <span className='text-xs text-center'>Local Spices</span>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-4'>
                <img
                  src='https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1620075696/Myanmar-Traditional-Dishes-To-Try-Main/Myanmar-Traditional-Dishes-To-Try-Main-1120x732.jpg'
                  alt='Myanmar street food'
                  className='object-cover w-full h-48 rounded-lg shadow-md'
                />
                <img
                  src='https://myanmarshalom.com/wp-content/uploads/2020/07/bamboo-delight-730x470.jpg'
                  alt='Cooking traditions'
                  className='object-cover w-full h-64 rounded-lg shadow-md'
                />
              </div>
              <div className='pt-6 space-y-4'>
                <img
                  src='https://sethlui.com/wp-content/uploads/2016/09/myanmar-foods-003.jpg'
                  alt='Local ingredients'
                  className='object-cover w-full h-64 rounded-lg shadow-md'
                />
                <img
                  src='https://motherslovetea.com/wp-content/uploads/2017/09/slider1-1.jpg'
                  alt='Tea leaf harvesting'
                  className='object-cover w-full h-48 rounded-lg shadow-md'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section
        className='relative py-20 bg-center bg-cover'
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg?auto=compress&cs=tinysrgb&w=1800)',
        }}
      >
        <div className='absolute inset-0 bg-gray-900 opacity-75'></div>
        <div className='relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8'>
          <h2 className='mb-6 text-3xl font-bold text-white sm:text-4xl'>
            Ready to Explore Myanmar's Culinary Wonders?
          </h2>
          <p className='max-w-3xl mx-auto mb-8 text-lg text-white/90'>
            Discover the authentic tastes and breathtaking destinations that
            make Myanmar a hidden treasure for food lovers and travelers alike.
          </p>
          <div className='inline-flex rounded-md shadow'>
            <a
              href='https://www.google.com/maps/place/Myanmar'
              target='_blank'
              rel='noopener noreferrer'
              className='px-8 py-3 text-base font-medium text-gray-900 transition-colors bg-white border border-transparent rounded-md hover:bg-gray-50'
            >
              Explore Interactive Map
            </a>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default HomePage;
