import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Contact Us</h1>
          <p className='text-lg text-gray-600'>
            Get in touch with us for any inquiries about Myanmar's culinary
            delights and destinations.
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <div className='space-y-8'>
            <div className='flex items-start space-x-4'>
              <MapPin className='h-6 w-6 text-amber-500 mt-1' />
              <div>
                <h3 className='text-lg font-medium text-gray-900'>
                  Our Location
                </h3>
                <p className='mt-2 text-gray-600'>
                  123 Yangon Street, Downtown
                  <br />
                  Yangon, Myanmar
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <Phone className='h-6 w-6 text-amber-500 mt-1' />
              <div>
                <h3 className='text-lg font-medium text-gray-900'>Phone</h3>
                <p className='mt-2 text-gray-600'>+95 1 234 5678</p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <Mail className='h-6 w-6 text-amber-500 mt-1' />
              <div>
                <h3 className='text-lg font-medium text-gray-900'>Email</h3>
                <p className='mt-2 text-gray-600'>info@tastevoyage.com</p>
              </div>
            </div>
          </div>

          <div className='mt-12 pt-8 border-t border-gray-200'>
            <p className='text-center text-gray-600'>
              We're available Monday through Friday, 9:00 AM to 6:00 PM
              (GMT+6:30)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
