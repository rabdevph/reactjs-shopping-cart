import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import useProductStore from './stores/productStore.js';

import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';

import Product from './components/Product.jsx';
import Wrapper from './components/Wrapper.jsx';
import NotFound from './components/NotFound.jsx';

const App = () => {
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div id="app" className="font-sans">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/product/:productId" element={<Product />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
