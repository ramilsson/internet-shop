const initialState = {
  itemsIds: [],
  quantityMap: {},
};

const actionTypes = {
  CART_ITEM_ADDED: 'cart/itemAdded',
  CART_ITEM_REMOVED: 'cart/itemRemoved',
  CART_ITEMS_REMOVED: 'cart/itemsRemoved',
  CART_QUANTITY_CHANGED: 'cart/quantityChanged',
};

function itemsIds(state = initialState.itemsIds, action) {
  switch (action.type) {
    case actionTypes.CART_ITEM_ADDED: {
      const itemId = action.payload.itemId;
      if (state.itemsIds.indexOf(itemId) !== -1) {
        return state;
      }
      return state.concat(itemId);
    }

    case actionTypes.CART_ITEM_REMOVED: {
      const itemId = action.payload.itemId;
      return state.itemsIds.filter((id) => id !== itemId);
    }

    case actionTypes.CART_ITEMS_REMOVED: {
      return initialState.itemsIds;
    }

    default: {
      return state;
    }
  }
}

function quantityMap(state = initialState.quantityMap, action) {
  switch (action.type) {
    case actionTypes.CART_ITEM_ADDED: {
      const itemId = action.payload.itemId;
      return {
        ...state,
        [itemId]: (state[itemId] || 0) + 1,
      };
    }

    case actionTypes.CART_ITEM_REMOVED: {
      const itemId = action.payload.itemId;
      const updatedQuantityMap = state.quantityMap;
      delete updatedQuantityMap[itemId];
      return updatedQuantityMap;
    }

    case actionTypes.CART_ITEMS_REMOVED: {
      return initialState.quantityMap;
    }

    case actionTypes.CART_QUANTITY_CHANGED: {
      const { itemId, quantity } = action.payload;
      if (!quantity) {
        return state;
      }
      return {
        ...state,
        [itemId]: quantity,
      };
    }
  }
}

export function cartReducer(state = initialState, action) {
  return {
    itemsIds: itemsIds(state.itemsIds, action),
    quantityMap: quantityMap(state.quantityMap, action),
  };
}

/* ACTIONS */

export function cartItemAdded(itemId) {
  return {
    type: actionTypes.CART_ITEM_ADDED,
    payload: { itemId },
  };
}

export function cartItemRemoved(itemId) {
  return {
    type: actionTypes.CART_ITEM_REMOVED,
    payload: { itemId },
  };
}

export function cartItemsRemoved() {
  return {
    type: actionTypes.CART_ITEMS_REMOVED,
  };
}

export function cartQuantityChanged(itemId, quantity) {
  return {
    type: actionTypes.CART_QUANTITY_CHANGED,
    payload: { itemId, quantity },
  };
}
