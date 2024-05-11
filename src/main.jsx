import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes/routes.jsx';

import GlobalStyle from './styles/GlobalStyle.js';
import { UserProvider } from './hooks/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
    <ToastContainer autoClose={2000} theme="dark" />
    <GlobalStyle />
  </React.StrictMode>,
);
