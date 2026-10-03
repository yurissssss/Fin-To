import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="flex flex-col p-6 min-h-screen">
      <HeaderNavigation />
      <main className="flex-1 flex justify-center px-4 ">
        <div className="w-full max-w-5xl px-6 pt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
