import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Login, Register, Products, Cart, Home } from '../containers';
import PrivateRoute from './private-routes';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="login" />
        <Route element={<Register />} path="cadastro" />
        {/* <Route element={<PrivateRoute element={<Home />} />} path="/" /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/produtos" element={<Products />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/carrinho" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
