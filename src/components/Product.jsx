import { useParams } from 'react-router-dom';

import { useProductContext } from '../contexts/ProductContext.jsx';

const Product = () => {
  const { productId } = useParams();
  const { products } = useProductContext();
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return null;
  }

  const {
    id,
    node: {
      title,
      description,
      featuredImage: { url },
      variants,
    },
  } = product;

  const { amount, currencyCode } = variants.edges[0].node.price;

  return (
    <div className="product">
      <div className="product-image-wrapper">
        <img src={url} alt={title} className="product-image" />
      </div>
      <div className="product-details-wrapper">
        <p className="product-name">{title}</p>
        <p className="product-price">
          {currencyCode} {amount}
        </p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default Product;
