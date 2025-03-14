// src/redux/reducers/productReducer.js
import * as types from '../../../constants/index';

const initialState = {
  products: [],
  product: null,
  categories: [],
  loading: false,
  error: null,
  filteredProducts: [],
  currentCategory: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        filteredProducts: state.currentCategory ? state.filteredProducts : action.payload,
        error: null,
      };
    case types.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: null,
      };
    case types.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: null,
      };
    case types.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.FILTER_BY_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
        filteredProducts: state.products.filter(
          (product) => product.category === action.payload
        ),
      };
    case types.CLEAR_FILTER:
      return {
        ...state,
        currentCategory: null,
        filteredProducts: state.products,
      };
    default:
      return state;
  }
};

export default productReducer;