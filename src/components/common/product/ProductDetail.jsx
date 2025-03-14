import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/actions/cartActions';
import Button from '../Button';
import Loader from '../Loader';
import './ProductDetail.css';

const ProductDetail = ({ product, loading, error }) => {
  const dispatch = useDispatch();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="product-error">
        Error: {error}
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const { title, price, description, image, category, rating } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-container">
      <div className="product-grid">
        <div className="product-image-wrapper">
          <img 
            src={image} 
            alt={title} 
            className="product-image"
          />
        </div>
        
        <div className="product-info">
          <h1 className="product-title">{title}</h1>
          
          <div className="product-category">
            <span className="product-category-badge">
              {category}
            </span>
          </div>
          
          <div className="product-rating">
            <div className="product-stars">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className={`product-star ${
                    i < Math.round(rating.rate) ? 'product-star-filled' : 'product-star-empty'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="product-review-count">{rating.rate} ({rating.count} reviews)</span>
          </div>
          
          <p className="product-description">{description}</p>
          
          <div className="product-purchase">
            <span className="product-price">${price.toFixed(2)}</span>
            <Button variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
