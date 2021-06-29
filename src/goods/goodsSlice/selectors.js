export function getGoods(state) {
  return state.goods.items;
}

export function isGoodsLoading(state) {
  return state.goods.isLoading;
}

export function getGoodsError(state) {
  return state.goods.error;
}
