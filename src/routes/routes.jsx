import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Login, Register, Products, Cart, Home, Admin } from '../containers';
import paths from '../constants/path';
import PrivateRoute from './private-routes';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="login" />
        <Route element={<Register />} path="cadastro" />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/produtos" element={<Products />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/carrinho" element={<Cart />} />
        </Route>

        <Route element={<PrivateRoute isAdmin />}>
          <Route path={paths.Order} element={<Admin />} />
        </Route>
        <Route element={<PrivateRoute isAdmin />}>
          <Route path={paths.Products} element={<Admin />} />
        </Route>
        <Route element={<PrivateRoute isAdmin />}>
          <Route path={paths.newProduct} element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
