import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
