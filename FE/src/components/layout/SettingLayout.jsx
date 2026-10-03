import React from 'react';
import LeftSideBar from './LeftSideBar';
import { Outlet } from 'react-router-dom';

const SettingLayout = () => {
  return (
    <div className="flex flex-1 h-full">
      <LeftSideBar />
      <main className="flex-1 ml-6 p-10 border border-neutral-200 rounded-3xl">
        <Outlet />
      </main>
    </div>
  );
};

export default SettingLayout;
