import { actionTypes } from './actionTypes';

const initialState = {
  items: [],
  quantityMap: {},
};

export function cartReducer(state = initialState, action) {
  return {
    items: items(state.items, action),
    quantityMap: quantityMap(state.quantityMap, action),
  };
}

function items(state = initialState.items, action) {
  switch (action.type) {
    case actionTypes.CART_ITEM_ADDED: {
      const itemName = action.payload.itemName;
      if (state.indexOf(itemName) !== -1) {
        return state;
      }
      return state.concat(itemName);
    }

    case actionTypes.CART_ITEM_REMOVED: {
      const itemName = action.payload.itemName;
      return state.filter((item) => item !== itemName);
    }

    case actionTypes.CART_ITEMS_REMOVED: {
      return initialState.items;
    }

    default: {
      return state;
    }
  }
}

function quantityMap(state = initialState.quantityMap, action) {
  switch (action.type) {
    case actionTypes.CART_ITEM_ADDED: {
      const itemName = action.payload.itemName;
      return {
        ...state,
        [itemName]: (state[itemName] || 0) + 1,
      };
    }

    case actionTypes.CART_ITEM_REMOVED: {
      const itemName = action.payload.itemName;
      const updatedQuantityMap = state;
      delete updatedQuantityMap[itemName];
      return updatedQuantityMap;
    }

    case actionTypes.CART_ITEMS_REMOVED: {
      return initialState.quantityMap;
    }

    case actionTypes.CART_QUANTITY_CHANGED: {
      const { itemName, quantity } = action.payload;
      if (!quantity) {
        return state;
      }
      return {
        ...state,
        [itemName]: quantity,
      };
    }

    default: {
      return state;
    }
  }
}
