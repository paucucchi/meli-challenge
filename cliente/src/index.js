import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './assets/styles/index.scss';
import App from './App';

const serverURL = 'http://localhost:3001';
axios.defaults.baseURL = process.env.REACT_APP_BE_URL || serverURL;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
