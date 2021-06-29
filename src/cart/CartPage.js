import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'common/components/Container';
import { PageHeader } from 'common/components/PageHeader';
import { CartList } from 'cart/CartList';

const PAGE_TITLE = 'Shopping cart';

export function CartPage() {
  const history = useHistory();

  return (
    <Container>
      <PageHeader title={PAGE_TITLE} onBack={history.goBack} />
      <CartList />
    </Container>
  );
}
