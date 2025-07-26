import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  Heart,
  Instagram,
  Facebook,
  Twitter,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className='text-white bg-gray-900'>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div className='space-y-4'>
            <Link to='/' className='flex items-center space-x-2'>
              <Heart className='w-7 h-7 text-amber-500' fill='#f59e0b' />
              <span className='text-xl font-bold'>
                <span className='text-amber-500'>Taste </span>Voyage
              </span>
            </Link>
            <p className='max-w-xs text-gray-400'>
              Discover the rich culinary traditions and beautiful destinations
              of Myanmar through our comprehensive guide.
            </p>
            <div className='flex pt-2 space-x-4'>
              <span className='text-gray-400 '>
                <Facebook className='w-5 h-5' />
              </span>
              <span className='text-gray-400 '>
                <Instagram className='w-5 h-5' />
              </span>
              <span className='text-gray-400 '>
                <Twitter className='w-5 h-5' />
              </span>
            </div>
          </div>

          <div>
            <h3 className='pb-2 mb-4 text-lg font-semibold border-b border-gray-700'>
              Explore
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/foods'
                  className='text-gray-400 transition-colors hover:text-amber-500'
                >
                  Popular Foods
                </Link>
              </li>
              <li>
                <Link
                  to='/towns/top-cities'
                  className='text-gray-400 transition-colors hover:text-amber-500'
                >
                  Top Destinations
                </Link>
              </li>
              <li>
                <Link
                  to='/beaches'
                  className='text-gray-400 transition-colors hover:text-amber-500'
                >
                  Beautiful Beaches
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='pb-2 mb-4 text-lg font-semibold border-b border-gray-700'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='https://en.wikipedia.org/wiki/Myanmar'
                  target='_blank'
                  className='text-gray-400 transition-colors hover:text-amber-500'
                >
                  About Myanmar
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  to='https://www.google.com/maps/place/Myanmar+(Burma)/@20.0419414,95.1523088,5.7z/data=!4m15!1m8!3m7!1s0x305652a7714e2907:0xba7b0ee41c622b11!2sMyanmar+(Burma)!3b1!8m2!3d21.916221!4d95.955974!16zL20vMDR4bl8!3m5!1s0x305652a7714e2907:0xba7b0ee41c622b11!8m2!3d21.916221!4d95.955974!16zL20vMDR4bl8?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D'
                  className='text-gray-400 transition-colors hover:text-amber-500'
                >
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-400 transition-colors hover:text-amber-500'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='pb-2 mb-4 text-lg font-semibold border-b border-gray-700'>
              Contact
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-start space-x-3'>
                <MapPin className='h-5 w-5 text-amber-500 mt-0.5' />
                <span className='text-gray-400'>
                  123 Yangon Street, Downtown
                  <br />
                  Yangon, Myanmar
                </span>
              </li>
              <li className='flex items-center space-x-3'>
                <Phone className='w-5 h-5 text-amber-500' />
                <span className='text-gray-400'>+95 1 234 5678</span>
              </li>
              <li className='flex items-center space-x-3'>
                <Mail className='w-5 h-5 text-amber-500' />
                <span className='text-gray-400'>info@tastevoyage.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='pt-8 mt-12 text-center text-gray-400 border-t border-gray-800'>
          <p>© {new Date().getFullYear()} TasteVoyage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
