import { useEffect } from 'react';
import useProductStore from '../stores/productStore.js';
import ProductCard from '../components/ProductCard.jsx';

const Shop = () => {
  const { products, loadingProducts } = useProductStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loadingProducts) {
    return (
      <div className="flex items-center justify-center h-svh w-full">
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <section
      id="shop"
      className="grid justify-center grid-cols-shop gap-x-4 gap-y-6 p-4 md:grid-cols-shopmd md:gap-x-8 md:gap-y-12 md:p-8 lg:gap-x-8 lg:gap-y-12 lg:p-16"
    >
      {products.map((product) => {
        return <ProductCard key={product.id} productId={product.id} />;
      })}
    </section>
  );
};

export default Shop;
