import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useLocalStorage } from 'common/hooks/useLocalStorage';
import { fetchGoods } from 'goods/goodsSlice/actions';
import { AppContent } from 'app/AppContent';
import { AppFooter } from 'app/AppFooter';
import { store } from 'app/store';

export function App() {
  const [dealers] = useLocalStorage('dealers');

  useEffect(() => {
    store.dispatch(fetchGoods(dealers));
  }, [dealers]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
        <AppFooter />
      </BrowserRouter>
    </Provider>
  );
}
