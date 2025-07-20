import React from 'react';
import Header from './Header';

interface HeaderOnlyLayoutProps {
  children: React.ReactNode;
}

const HeaderOnlyLayout: React.FC<HeaderOnlyLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow pt-16'>{children}</main>
    </div>
  );
};

export default HeaderOnlyLayout;
