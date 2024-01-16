import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './Context';
import { CartProvider } from './Context/CartContext';
import { FilterProvider } from './Context/FilterContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { Authenticate } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <FilterProvider>
          <CartProvider>
            <Authenticate>
              <App />
            </Authenticate>
          </CartProvider>
        </FilterProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
