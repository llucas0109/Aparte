import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*Pega o elemento de id root e Nele renderiza o conteudo que pega do app.js*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
