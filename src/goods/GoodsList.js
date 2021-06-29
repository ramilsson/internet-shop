import React from 'react';
import { useDispatch } from 'react-redux';
import { cartItemAdded } from 'cart/cartSlice/actions';
import { List } from 'common/components/List';
import { GoodImage } from 'goods/GoodImage';
import { Price } from 'common/components/Price';

export function GoodsList({ goods }) {
  const dispatch = useDispatch();

  function addToCart(e) {
    const itemName = e.target.value;
    if (itemName) {
      dispatch(cartItemAdded(itemName));
    }
  }

  return (
    <List
      items={goods}
      renderItem={(good) => (
        <List.Item
          key={good.name}
          title={good.name}
          content={<Price price={good.price} prefix="$" />}
          image={<GoodImage good={good} />}
          actions={
            <button
              onClick={addToCart}
              value={good.name}
              className="button button_primary"
            >
              Add to cart
            </button>
          }
        />
      )}
    />
  );
}
