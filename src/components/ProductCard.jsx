import { Link } from 'react-router-dom';

import { useProductContext } from '../contexts/ProductContext.jsx';

const ProductCard = ({ productIndex }) => {
  const { products } = useProductContext();
  const {
    node: {
      title,
      featuredImage: { url },
      variants,
    },
  } = products[productIndex];
  const { amount, currencyCode } = variants.edges[0].node.price;

  return (
    <div className="product-card">
      <Link className="product-image-wrapper">
        <img src={url} alt={title} className="product-image" />
      </Link>
      <div className="product-details-wrapper">
        <p className="product-name">{title}</p>
        <p className="product-price">
          {currencyCode} {amount}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
