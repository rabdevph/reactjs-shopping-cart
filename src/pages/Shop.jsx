import ProductCard from '../components/ProductCard.jsx';

import { useProductContext } from '../contexts/ShopContext.jsx';

const Shop = () => {
  const { products, loadingProducts } = useProductContext();

  if (loadingProducts) {
    return <p className="loading-products">Loading products...</p>;
  }

  return (
    <section className="shop | grid justify-center grid-cols-shop gap-x-2 gap-y-8 p-4 | md:grid-cols-shopmd md:gap-8 md:p-8 | lg:gap-16 lg:p-16">
      {products.map((product) => {
        return <ProductCard key={product.node.id} productId={product.id} />;
      })}
    </section>
  );
};

export default Shop;
