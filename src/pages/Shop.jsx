import Loader from '../components/Loader.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { useProductContext } from '../contexts/ProductContext.jsx';

const Shop = () => {
  const { products, loadingProducts } = useProductContext();

  if (loadingProducts) {
    return <Loader text="Loading products..." />;
  }

  return (
    <section className="products">
      {products.map((product, index) => (
        <ProductCard key={product.node.id} productIndex={index} />
      ))}
    </section>
  );
};

export default Shop;
