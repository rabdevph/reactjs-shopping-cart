import ProductCard from '../components/ProductCard.jsx';

import { useProductContext } from '../contexts/ShopContext.jsx';

const Shop = () => {
  const { products, loadingProducts } = useProductContext();

  if (loadingProducts) {
    return <p className="loading-products">Loading products...</p>;
  }

  return (
    <section className="shop | grid justify-center grid-cols-shop gap-12 px-4 py-8 | md:px-8 md:py-8 | lg:px-16">
      {products.map((product) => {
        return <ProductCard key={product.node.id} productId={product.id} />;
      })}
    </section>
  );
};

export default Shop;
