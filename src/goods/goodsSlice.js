const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const actionTypes = {
  GOODS_LOADED_SUCCESS: 'goods/goodsLoadedSuccess',
  GOODS_LOADED_FAILURE: 'goods/goodsLoadedFailure',
  GOODS_LOADING: 'goods/loading',
};

export function goodsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GOODS_LOADED_SUCCESS: {
      return {
        ...state,
        items: action.payload.items,
        isLoading: false,
      };
    }

    case actionTypes.GOODS_LOADED_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case actionTypes.GOODS_LOADING: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }

    default: {
      return state;
    }
  }
}

/* ACTIONS */

export function goodsLoadedSuccess(goods) {
  return {
    type: actionTypes.GOODS_LOADED_SUCCESS,
    payload: { goods },
  };
}

export function goodsLoadedFailure(error) {
  return {
    type: actionTypes.GOODS_LOADED_FAILURE,
    payload: { error },
  };
}

export function goodsLoading() {
  return {
    type: actionTypes.GOODS_LOADING,
  };
}

export function fetchGoods(dealerIds) {
  const dealerIdsString = dealerIds.join(',');
  const params = { dealerIds: dealerIdsString };

  return async function (dispatch) {
    dispatch(goodsLoading());
    const url = new URL('https://murmuring-tor-81614.herokuapp.com/api/goods');
    url.search = new URLSearchParams(params).toString();

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Could not fetch goods from the server');
      }
      const goods = await response.json();

      dispatch(goodsLoadedSuccess(goods));
    } catch (error) {
      dispatch(goodsLoadedFailure(error));
    }
  };
}
