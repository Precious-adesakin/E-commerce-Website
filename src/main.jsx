import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import { CartcontentProvider } from './assets/Cartcontent';

// ONLY ONE createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartcontentProvider>
      <App />
    </CartcontentProvider>
    </BrowserRouter>
  </React.StrictMode>
);
