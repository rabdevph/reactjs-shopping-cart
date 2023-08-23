import Loader from '../components/Loader.jsx';

const Products = (props) => {
  const { products, loadingProducts } = props;

  if (loadingProducts) {
    return <Loader text="Loading products..." />;
  }

  console.log(products);

  return <section className="products"></section>;
};

export default Products;
