// src/components/common/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const { totalItems } = useSelector(state => state.cart);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">FlipMart</Link>

        <div className="header-links">
          <Link to="/" className="nav-link">Home</Link>
          
          <Link to="/cart" className="cart-link">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="cart-icon" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>

            {totalItems > 0 && (
              <span className="cart-badge">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
