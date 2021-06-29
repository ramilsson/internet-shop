import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemAdded } from 'cart/cartSlice/actions';
import { List } from 'common/components/List';
import { GoodImage } from 'goods/GoodImage';
import { Price } from 'common/components/Price';
import { Result } from 'common/components/Result';
import {
  getGoods,
  isGoodsLoading,
  getGoodsError,
} from 'goods/goodsSlice/selectors';

export function GoodsList() {
  const goods = useSelector(getGoods);
  const isLoading = useSelector(isGoodsLoading);
  const error = useSelector(getGoodsError);
  const dispatch = useDispatch();

  function addToCart(e) {
    const itemName = e.target.value;
    if (itemName) {
      dispatch(cartItemAdded(itemName));
    }
  }

  if (isLoading) return <Result>Loading...</Result>;
  if (error) return <Result>{error}</Result>;

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
