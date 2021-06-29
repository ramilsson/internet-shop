import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List } from 'common/components/List';
import { Price } from 'common/components/Price';
import { Counter } from 'common/components/Counter';
import { getCartItems, getCartTotalPrice } from 'cart/cartSlice/selectors';
import { GoodImage } from 'goods/GoodImage';
import './CartList.scss';
import {
  cartQuantityChanged,
  cartItemRemoved,
  cartItemsRemoved,
} from 'cart/cartSlice/actions';

export function CartList() {
  const items = useSelector(getCartItems);
  const totalPrice = useSelector(getCartTotalPrice);
  const dispatch = useDispatch();

  function onQuantityChange(name, value) {
    dispatch(cartQuantityChanged(name, value));
  }

  function removeItem(e) {
    dispatch(cartItemRemoved(e.target.value));
  }

  function removeAll() {
    dispatch(cartItemsRemoved());
  }

  if (!items.length) {
    return <div>No items</div>;
  }

  return (
    <div className="cart-list">
      <List
        items={items}
        renderItem={(item) => (
          <List.Item
            key={item.name}
            title={item.name}
            image={<GoodImage good={item} />}
            content={<Price price={item.price} prefix="$" />}
            actions={[
              <Counter
                key={1}
                name={item.name}
                value={item.quantity}
                onChange={onQuantityChange}
              />,
              <button
                key={2}
                value={item.name}
                onClick={removeItem}
                className="button"
              >
                Remove
              </button>,
            ]}
          />
        )}
      />
      <footer className="cart-list__footer">
        <div className="cart-list__total-price">
          Total: <Price price={totalPrice} prefix="$" />
        </div>
        <button onClick={removeAll} className="button button_danger">
          Remove all
        </button>
      </footer>
    </div>
  );
}
