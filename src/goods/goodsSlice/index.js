import { actionTypes } from './actionTypes';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export function goodsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GOODS_LOADED_SUCCESS: {
      return {
        ...state,
        items: action.payload.goods,
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
