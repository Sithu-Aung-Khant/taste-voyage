import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import PopularFoods from '../components/home/PopularFoods';
import FeaturedDestinations from '../components/home/FeaturedDestinations';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <PopularFoods />
      <FeaturedDestinations />
      
      {/* Culture Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Experience Myanmar's Rich Culinary Heritage
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Myanmar's cuisine reflects its unique geographic position between India, China, and Thailand, 
                creating a distinctive blend of flavors and techniques that remain authentically its own.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From the aromatic rice dishes to the tangy salads and rich curries, Myanmar's food tells the story 
                of its diverse people and landscapes, with each region offering its own specialties.
              </p>
              <div className="flex space-x-4">
                <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-amber-100 text-amber-800">
                  <span className="text-xl font-bold">100+</span>
                  <span className="text-xs text-center">Unique Dishes</span>
                </div>
                <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-800">
                  <span className="text-xl font-bold">15+</span>
                  <span className="text-xs text-center">Culinary Regions</span>
                </div>
                <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-800">
                  <span className="text-xl font-bold">50+</span>
                  <span className="text-xs text-center">Local Spices</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/5409039/pexels-photo-5409039.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Myanmar street food" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/5409027/pexels-photo-5409027.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Cooking traditions" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-6">
                <img 
                  src="https://images.pexels.com/photos/5409029/pexels-photo-5409029.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Local ingredients" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/15335843/pexels-photo-15335843/free-photo-of-person-in-burmese-traditional-clothes-picking-tea-leaves.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Tea leaf harvesting" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg?auto=compress&cs=tinysrgb&w=1800)'
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Explore Myanmar's Culinary Wonders?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Discover the authentic tastes and breathtaking destinations that make Myanmar a hidden treasure for food lovers and travelers alike.
          </p>
          <div className="inline-flex rounded-md shadow">
            <a 
              href="/map" 
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-colors"
            >
              Explore Interactive Map
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;