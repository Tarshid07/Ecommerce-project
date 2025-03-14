// src/components/home/CategoryFilter.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesRequest, filterByCategory, clearFilter } from '../../../redux/actions/productActions';
import Button from '../Button';
import './Categoryfilter.css';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { categories, currentCategory, loading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    if (currentCategory === category) {
      dispatch(clearFilter());
    } else {
      dispatch(filterByCategory(category));
    }
  };

  const handleClearFilter = () => {
    dispatch(clearFilter());
  };

  if (loading || categories.length === 0) {
    return <div className="category-loading"></div>;
  }

  return (
    <div className="category-filter-container">
      <h2 className="category-title">Categories</h2>
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`category-button ${currentCategory === category ? 'active' : ''}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
        
        {currentCategory && (
          <Button 
            variant="secondary" 
            onClick={handleClearFilter}
            className="clear-filter-button"
          >
            Clear Filter
          </Button>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;