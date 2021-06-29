import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from 'common/components/Container';
import { PageHeader } from 'common/components/PageHeader';
import { getCartTotalQuantity } from 'cart/cartSlice/selectors';
import { getGoods } from 'goods/goodsSlice/selectors';
import { GoodsList } from 'goods/GoodsList';

const PAGE_TITLE = 'Shop';

export function GoodsPage() {
  const goods = useSelector(getGoods);
  const cartTotalQuantity = useSelector(getCartTotalQuantity);

  return (
    <Container>
      <PageHeader
        title={PAGE_TITLE}
        actions={
          <Link
            to="/cart"
            className="button button_medium"
            data-badge={cartTotalQuantity}
          >
            Cart
          </Link>
        }
      />
      <GoodsList goods={goods} />
    </Container>
  );
}
