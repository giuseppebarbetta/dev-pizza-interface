import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ element }) {
  const user = localStorage.getItem('devpizza:userData');

  return user ? element : <Navigate to="/login" />;
}

export default PrivateRoute;

PrivateRoute.proptypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
};
