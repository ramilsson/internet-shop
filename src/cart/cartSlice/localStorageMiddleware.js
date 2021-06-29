export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage['cart'] = JSON.stringify(store.getState().cart);
  return result;
};
