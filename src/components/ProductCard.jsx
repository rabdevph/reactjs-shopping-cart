import { Link } from 'react-router-dom';

import { useProductContext, useCartItemContext } from '../contexts/ShopContext.jsx';

const ProductCard = ({ productId }) => {
  const { products } = useProductContext();
  const { isInCart, getQuantity } = useCartItemContext();
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

  const price = parseFloat(amount).toFixed(2);

  return (
    <div className="product-card">
      {isInCart(id) ? <div className="product-card-in-cart">{getQuantity(id)} IN CART</div> : null}
      <Link to={`/shop/product/${id}`} className="product-card-image-wrapper">
        <img src={url} alt={title} className="product-card-image" />
      </Link>
      <div className="product-card-details-wrapper">
        <p className="product-card-name">{title}</p>
        <p className="product-card-price">
          {currencyCode} {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
