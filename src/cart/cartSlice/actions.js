import { actionTypes } from './actionTypes';

export function cartItemAdded(itemName) {
  return {
    type: actionTypes.CART_ITEM_ADDED,
    payload: { itemName },
  };
}

export function cartItemRemoved(itemName) {
  return {
    type: actionTypes.CART_ITEM_REMOVED,
    payload: { itemName },
  };
}

export function cartItemsRemoved() {
  return {
    type: actionTypes.CART_ITEMS_REMOVED,
  };
}

export function cartQuantityChanged(itemName, quantity) {
  return {
    type: actionTypes.CART_QUANTITY_CHANGED,
    payload: { itemName, quantity },
  };
}
