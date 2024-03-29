import React from 'react';
import Header from './Header';
import useAuth from '../Auth/useAuth';
import { adminPages, userPages } from '../utils/pages';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  const { isAdmin } = useAuth();
  return (
    <>
      <Header pages={isAdmin ? adminPages : userPages} />
      <Outlet />
    </>
  );
}

export default MainLayout;
