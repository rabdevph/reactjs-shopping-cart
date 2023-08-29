import { Routes, Route } from 'react-router-dom';

import { ProductProvider } from './contexts/ProductContext.jsx';

import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';

import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <ProductProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
      <Footer />
    </ProductProvider>
  );
};

export default App;
