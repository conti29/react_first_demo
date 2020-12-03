import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Homepage from "./homepage/homepage";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App></App>
    <Homepage />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
