import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <h1 className="header">React Test App</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);