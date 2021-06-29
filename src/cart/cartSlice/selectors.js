export function getCartTotalQuantity(state) {
  const { quantityMap } = state.cart;
  return Object.values(quantityMap).reduce(
    (total, value) => (total += value),
    0
  );
}

export function getCartTotalPrice(state) {
  const cartItems = getCartItems(state);
  return cartItems.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);
}

export function getCartItems(state) {
  const allItems = state.goods.items;
  const itemNames = state.cart.items;
  const cartItems = allItems.filter((item) => itemNames.includes(item.name));
  const cartItemsWithQuantity = cartItems.map((item) => {
    const quantity = state.cart.quantityMap[item.name];
    return { ...item, quantity };
  });
  return cartItemsWithQuantity;
}
