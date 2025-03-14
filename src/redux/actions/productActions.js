// src/redux/actions/productActions.js
import * as types from '../../constants/index';

export const fetchProductsRequest = () => ({
  type: types.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProductRequest = (id) => ({
  type: types.FETCH_PRODUCT_REQUEST,
  payload: id,
});

export const fetchProductSuccess = (product) => ({
  type: types.FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchProductFailure = (error) => ({
  type: types.FETCH_PRODUCT_FAILURE,
  payload: error,
});

export const fetchCategoriesRequest = () => ({
  type: types.FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: types.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailure = (error) => ({
  type: types.FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const filterByCategory = (category) => ({
  type: types.FILTER_BY_CATEGORY,
  payload: category,
});

export const clearFilter = () => ({
  type: types.CLEAR_FILTER,
});