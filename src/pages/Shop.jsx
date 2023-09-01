import ProductCard from '../components/ProductCard.jsx';

import { useProductContext } from '../contexts/ShopContext.jsx';

const Shop = () => {
  const { products, loadingProducts } = useProductContext();

  if (loadingProducts) {
    return <p className="loading-products">Loading products...</p>;
  }

  return (
    <section className="shop">
      {products.map((product) => {
        return <ProductCard key={product.node.id} productId={product.id} />;
      })}
    </section>
  );
};

export default Shop;
