import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchProductRequest } from '../redux/actions/productActions';
import MainLayout from '../layouts/MainLayout';
import ProductDetail from '../components/common/product/ProductDetail';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductRequest(id));
    }
  }, [dispatch, id]);

  return (
    <MainLayout>
      <div className="product-container">
        <Link to="/" className="back-link">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="back-icon" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </Link>
      </div>
      
      <ProductDetail 
        product={product} 
        loading={loading} 
        error={error} 
      />
    </MainLayout>
  );
};

export default Product;
