import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './containers/Login';
import { Register } from './containers/Register/index.jsx';
import GlobalStyle from './styles/GlobalStyle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login /> */}
    <Register />
    <GlobalStyle />
  </React.StrictMode>,
);
