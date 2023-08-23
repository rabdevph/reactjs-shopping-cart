import Loader from '../components/Loader.jsx';
import ProductCard from '../components/ProductCard.jsx';

const Products = (props) => {
  const { products, loadingProducts, handleAddToCart } = props;

  if (loadingProducts) {
    return <Loader text="Loading products..." />;
  }

  console.log(products);

  return (
    <section className="products">
      {products.map((product) => {
        return <ProductCard key={product.id} handleAddToCart={handleAddToCart} {...product} />;
      })}
    </section>
  );
};

export default Products;
