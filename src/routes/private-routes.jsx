import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header } from '../components/Header';

function PrivateRoute({ isAdmin }) {
  const user = localStorage.getItem('devpizza:userData');

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {!isAdmin && <Header />}
      <Outlet />
    </>
  );
}

export default PrivateRoute;

PrivateRoute.proptypes = {
  isAdmin: PropTypes.bool,
};
