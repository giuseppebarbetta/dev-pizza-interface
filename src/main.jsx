import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes/routes.jsx';

import GlobalStyle from './styles/GlobalStyle.js';
import AppProvider from './hooks';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
    <ToastContainer autoClose={2000} theme="dark" />
    <GlobalStyle />
  </>,
);
