import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
