// src/redux/actions/cartActions.js
import * as types from '../../constants';

export const addToCart = (product) => ({
  type: types.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: types.REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: types.CLEAR_CART,
});