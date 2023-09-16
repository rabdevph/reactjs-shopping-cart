import ProductCard from '../components/ProductCard.jsx';

import { useProductContext } from '../contexts/ShopContext.jsx';

const Shop = () => {
  const { products, loadingProducts } = useProductContext();

  if (loadingProducts) {
    return <p className="loading-products">Loading products...</p>;
  }

  return (
    <section className="shop | grid justify-center grid-cols-shop gap-x-4 gap-y-6 p-4 | md:grid-cols-shopmd md:gap-x-8 md:gap-y-12 md:p-8 | lg:gap-x-8 lg:gap-y-12 lg:p-16">
      {products.map((product) => {
        return <ProductCard key={product.node.id} productId={product.id} />;
      })}
    </section>
  );
};

export default Shop;
