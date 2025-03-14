// src/components/common/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-8 mt-auto">
      <div className="footer-container container mx-auto px-4">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-brand">
            <h3 className="footer-title text-xl font-bold mb-4">FlipMart</h3>
            <p className="footer-text">
              Your one-stop shop for all your needs. Quality products at the best prices.
            </p>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-title text-xl font-bold mb-4">Quick Links</h3>
            <ul className="footer-list space-y-2">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/cart" className="footer-link">Cart</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-title text-xl font-bold mb-4">Contact Us</h3>
            <ul className="footer-list text-light-muted">
              <li>123 E-commerce Street, Shopping City</li>
              <li>Phone: +1 234 567 890</li>
              <li>Email: info@flipmart.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom border-t border-gray-700 mt-8 pt-6 text-light-muted text-center">
          <p>&copy; {new Date().getFullYear()} FlipMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
