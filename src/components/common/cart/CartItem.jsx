import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/actions/cartActions';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, price, image, quantity } = item;

  const handleIncreaseQuantity = () => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__image-container">
        <img src={image} alt={title} />
      </div>
      
      <div className="cart-item__details">
        <h3 className="cart-item__title">{title}</h3>
        <p className="cart-item__price">${price.toFixed(2)} each</p>
      </div>
      
      <div className="cart-item__controls">
        <button
          onClick={handleDecreaseQuantity}
          className="cart-item__button"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        
        <span className="cart-item__quantity">{quantity}</span>
        
        <button
          onClick={handleIncreaseQuantity}
          className="cart-item__button"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      
      <div className="cart-item__total">
        <p>${(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
