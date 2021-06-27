const initialState = {
  items: [],
  quantityMap: {},
};

const actionTypes = {
  CART_ITEM_ADDED: 'cart/itemAdded',
  CART_ITEM_REMOVED: 'cart/itemRemoved',
  CART_ITEMS_REMOVED: 'cart/itemsRemoved',
  CART_QUANTITY_CHANGED: 'cart/quantityChanged',
};

function items(state = initialState.items, action) {
  switch (action.type) {
    case actionTypes.CART_ITEM_ADDED: {
      const item = action.payload.item;
      if (state.items.indexOf(item) !== -1) {
        return state;
      }
      return state.concat(item);
    }

    case actionTypes.CART_ITEM_REMOVED: {
      return state.items.filter((item) => item !== action.payload.item);
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
      const item = action.payload.item;
      return {
        ...state,
        [item]: (state[item] || 0) + 1,
      };
    }

    case actionTypes.CART_ITEM_REMOVED: {
      const item = action.payload.item;
      const updatedQuantityMap = state.quantityMap;
      delete updatedQuantityMap[item];
      return updatedQuantityMap;
    }

    case actionTypes.CART_ITEMS_REMOVED: {
      return initialState.quantityMap;
    }

    case actionTypes.CART_QUANTITY_CHANGED: {
      const { item, quantity } = action.payload;
      if (!quantity) {
        return state;
      }
      return {
        ...state,
        [item]: quantity,
      };
    }

    default: {
      return state;
    }
  }
}

export function cartReducer(state = initialState, action) {
  return {
    items: items(state.items, action),
    quantityMap: quantityMap(state.quantityMap, action),
  };
}

/* ACTIONS */

export function cartItemAdded(item) {
  return {
    type: actionTypes.CART_ITEM_ADDED,
    payload: { item },
  };
}

export function cartItemRemoved(item) {
  return {
    type: actionTypes.CART_ITEM_REMOVED,
    payload: { item },
  };
}

export function cartItemsRemoved() {
  return {
    type: actionTypes.CART_ITEMS_REMOVED,
  };
}

export function cartQuantityChanged(item, quantity) {
  return {
    type: actionTypes.CART_QUANTITY_CHANGED,
    payload: { item, quantity },
  };
}
