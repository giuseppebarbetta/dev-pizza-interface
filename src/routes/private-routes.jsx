import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header } from '../components/Header';

function PrivateRoute({ element }) {
  const user = localStorage.getItem('devpizza:userData');

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default PrivateRoute;

PrivateRoute.proptypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
};
