import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Golbalstyle from './Global-styles.js'//Estilo global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Golbalstyle/>
    <App />
  </React.StrictMode>,
)
