import { createStore, applyMiddleware } from 'redux';
import { reducer } from 'app/reducer';
import thunkMiddleware from 'redux-thunk';
import { localStorageMiddleware } from 'cart/cartSlice/localStorageMiddleware';

// Load cart data from localStorage if exists
const preloadedState = {
  cart: localStorage.cart ? JSON.parse(localStorage.cart) : undefined,
};

export const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(thunkMiddleware, localStorageMiddleware)
);
