import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GoodsPage } from 'goods/GoodsPage';
import { CartPage } from 'cart/CartPage';

export function AppContent() {
  return (
    <main className="app-content">
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/" component={GoodsPage} />
      </Switch>
    </main>
  );
}
