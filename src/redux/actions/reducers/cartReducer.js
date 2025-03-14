// src/redux/reducers/cartReducer.js
import * as types from '../../../constants/index';

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotal = (items) => {
  return items.reduce((acc, item) => {
    return {
      totalItems: acc.totalItems + item.quantity,
      totalPrice: acc.totalPrice + item.price * item.quantity,
    };
  }, { totalItems: 0, totalPrice: 0 });
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const product = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.id === product.id);
      
      let updatedCartItems;
      
      if (existingItemIndex >= 0) {
        // Item already exists in cart, increment quantity
        updatedCartItems = state.cartItems.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Item doesn't exist in cart, add it
        updatedCartItems = [...state.cartItems, { ...product, quantity: 1 }];
      }
      
      const { totalItems, totalPrice } = calculateTotal(updatedCartItems);
      
      return {
        ...state,
        cartItems: updatedCartItems,
        totalItems,
        totalPrice,
      };
    }
    
    case types.REMOVE_FROM_CART: {
      const productId = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.id === productId);
      
      if (existingItemIndex >= 0) {
        let updatedCartItems;
        
        // If quantity is 1, remove the item completely
        if (state.cartItems[existingItemIndex].quantity === 1) {
          updatedCartItems = state.cartItems.filter(item => item.id !== productId);
        } else {
          // Decrement the quantity
          updatedCartItems = state.cartItems.map((item, index) => 
            index === existingItemIndex 
              ? { ...item, quantity: item.quantity - 1 } 
              : item
          );
        }
        
        const { totalItems, totalPrice } = calculateTotal(updatedCartItems);
        
        return {
          ...state,
          cartItems: updatedCartItems,
          totalItems,
          totalPrice,
        };
      }
      return state;
    }
    
    case types.CLEAR_CART:
      return {
        ...initialState,
      };
      
    default:
      return state;
  }
};

export default cartReducer;