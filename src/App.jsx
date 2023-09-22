import { Routes, Route } from 'react-router-dom';

import useProductStore from './stores/productStore.js';

import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';

import Product from './components/Product.jsx';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import { useEffect } from 'react';

const App = () => {
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="font-opensans">
      <Header />
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/product/:productId" element={<Product />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
