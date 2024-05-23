import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import Home from '../containers/Home';
import PrivateRoute from './private-routes';
import Products from '../containers/Products';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute element={<Home />} />} path="/" />
        <Route
          element={<PrivateRoute element={<Products />} />}
          path="/produtos"
        />
        <Route element={<Login />} path="login" />
        <Route element={<Register />} path="cadastro" />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
