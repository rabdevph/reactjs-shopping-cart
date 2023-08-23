import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Products from './pages/Products.jsx';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [products, setProducts] = useState({});
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    // https://fakestoreapi.com/products
    // https://dummyjson.com/products
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoadingProducts(false); // successfully fetched data
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
        setLoadingProducts(false);
      });
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Content />}>
          <Route
            index
            element={<Products products={products} loadingProducts={loadingProducts} />}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
