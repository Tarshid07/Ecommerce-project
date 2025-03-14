import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import './Card.css';

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const { id, title, price, image, category } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="cardContainer">
      <div className="cardImageWrapper">
        <img 
          src={image} 
          alt={title} 
          className="cardImage"
        />
      </div>
      <div className="cardBody">
        <Link to={`/product/${id}`}>
          <h3 className="cardTitle">{title}</h3>
        </Link>
        <div className="cardCategoryWrapper">
          <span className="cardCategory">
            {category}
          </span>
        </div>
        <p className="cardPrice">${price.toFixed(2)}</p>
      </div>
      <Button 
        variant="primary" 
        onClick={handleAddToCart} 
        fullWidth={true}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default Card;
