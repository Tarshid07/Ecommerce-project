// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/actions/store/index';

import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;