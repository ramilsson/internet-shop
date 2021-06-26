import { combineReducers } from 'redux';
import { cartReducer } from 'cart/cartSlice';
import { goodsReducer } from 'goods/goodsSlice';

export const reducer = combineReducers(cartReducer, goodsReducer);
