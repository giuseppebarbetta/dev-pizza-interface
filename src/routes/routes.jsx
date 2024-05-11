import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Login } from '../containers/Login';
import { Register } from '../containers/Register';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="login" />
        <Route element={<Register />} path="cadastro" />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
