// src/components/home/ProductList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import Loader from '../Loader';
import './Productlist.css'

const ProductList = () => {
  const { loading, filteredProducts, currentCategory, products, error } = useSelector(state => state.products);
  
  const displayProducts = currentCategory ? filteredProducts : products;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error-container">
        Error: {error}
      </div>
    );
  }

  if (displayProducts.length === 0) {
    return (
      <div className="no-products">
        <p>No products found!</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {displayProducts.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
