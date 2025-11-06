import React from 'react';
import Header from './Header';

interface HeaderOnlyLayoutProps {
  children: React.ReactNode;
}

const HeaderOnlyLayout: React.FC<HeaderOnlyLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Maintenance Overlay */}
      <div className='fixed inset-0 z-50 flex items-center justify-center pointer-events-none bg-black/75'>
        <div className='max-w-2xl p-8 m-4 text-center border-4 border-yellow-500 rounded-lg shadow-2xl pointer-events-auto bg-white/95 backdrop-blur-sm'>
          <div className='mb-4'>
            <svg
              className='w-16 h-16 mx-auto text-yellow-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
          </div>
          <h2 className='mb-4 text-3xl font-bold text-gray-900'>
            Under Maintenance
          </h2>
          <p className='mb-2 text-lg text-gray-700'>
            This project is currently under maintenance.
          </p>
          <p className='text-base text-gray-600'>
            Thank you for your patience.
          </p>
        </div>
      </div>

      {/* Content with reduced opacity */}
      <div className='opacity-25 pointer-events-none'>
        <Header />
        <main className='flex-grow pt-16'>{children}</main>
      </div>
    </div>
  );
};

export default HeaderOnlyLayout;
