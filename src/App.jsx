import { Routes, Route } from 'react-router-dom';

import useProductStore from './stores/productStore.js';

import { ShopProvider } from './contexts/ShopContext.jsx';

import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';

import Product from './components/Product.jsx';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import { useEffect } from 'react';

const App = () => {
  const { fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ShopProvider>
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
    </ShopProvider>
  );
};

export default App;
