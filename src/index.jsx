import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/css/style.css"
import AppRouter from './components/Router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppRouter />
  </React.StrictMode>
);

