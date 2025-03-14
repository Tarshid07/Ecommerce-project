// src/components/cart/CartList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import Button from '../Button';
import { clearCart } from '../../../redux/actions/cartActions';
import { Link } from 'react-router-dom';
import './CartList.css';

const CartList = () => {
  const dispatch = useDispatch();
  const { cartItems, totalItems, totalPrice } = useSelector(state => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-container">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="cart-empty-icon" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
          />
        </svg>
        <h2 className="cart-empty-title">Your cart is empty</h2>
        <p className="cart-empty-text">Looks like you haven't added any products to your cart yet.</p>
        <Link to="/">
          <Button variant="primary">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Shopping Cart ({totalItems} items)</h2>
        <Button variant="secondary" onClick={handleClearCart}>
          Clear Cart
        </Button>
      </div>
      
      <div className="cart-items-container">
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="cart-summary">
          <div className="cart-summary-row">
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="cart-summary-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="cart-summary-total">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          
          <Button variant="primary" fullWidth={true}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
