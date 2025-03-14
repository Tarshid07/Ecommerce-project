// src/pages/Cart.jsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import CartList from '../components/common/cart/CartList';
import './Cart.css'; // Importing CSS file

const Cart = () => {
  return (
    <MainLayout>
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        <CartList />
      </div>
    </MainLayout>
  );
};

export default Cart;
