import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px', marginLeft: '200px' }}>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
