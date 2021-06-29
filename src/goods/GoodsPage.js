import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GoodsList } from 'goods/GoodsList';
import { Container } from 'common/components/Container';
import { PageHeader } from 'common/components/PageHeader';
import { getCartTotalQuantity } from 'cart/cartSlice/selectors';

const PAGE_TITLE = 'Shop';

export function GoodsPage() {
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
      <GoodsList />
    </Container>
  );
}
