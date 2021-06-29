import { actionTypes } from './actionTypes';

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

export function fetchGoods(dealers = []) {
  const dealersString = Array.isArray(dealers) ? dealers.join(',') : '';
  const params = { dealers: dealersString };

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
