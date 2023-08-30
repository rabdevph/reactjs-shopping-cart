import { Link } from 'react-router-dom';

import { useProductContext } from '../contexts/ProductContext.jsx';

const ProductCard = ({ productId }) => {
  const { products } = useProductContext();
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return null;
  }

  const {
    id,
    node: {
      title,
      featuredImage: { url },
      variants,
    },
  } = product;

  const { amount, currencyCode } = variants.edges[0].node.price;

  return (
    <div className="product-card">
      <Link to={`/shop/product/${productId}`} className="product-card-image-wrapper">
        <img src={url} alt={title} className="product-card-image" />
      </Link>
      <div className="product-card-details-wrapper">
        <p className="product-card-name">{title}</p>
        <p className="product-card-price">
          {currencyCode} {amount}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
