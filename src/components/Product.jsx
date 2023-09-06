import { useParams } from 'react-router-dom';

import { useProductContext, useCartItemContext } from '../contexts/ShopContext.jsx';

const Product = () => {
  const { productId } = useParams();
  const { products } = useProductContext();
  const { updateCart, isInCart, getQuantity } = useCartItemContext();

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return null;
  }

  console.log(product);

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

  const price = parseFloat(amount).toFixed(2);

  const itemQuantity = getQuantity(id);

  const item = {
    id: id,
    name: title,
    quantity: 1,
    price: amount,
  };

  const handleUpdateCart = () => {
    updateCart(item, productId);
  };

  return (
    <div className="product">
      <div className="product-image-wrapper">
        {isInCart(id) ? <div className="product-in-cart">{getQuantity(id)} IN CART</div> : null}
        <img src={url} alt={title} className="product-image" />
      </div>
      <div className="product-details-wrapper">
        <p className="product-name">{title}</p>
        <p className="product-price">
          {currencyCode} {price}
        </p>
        <p className="product-description">{description}</p>
        <div className="product-cart-control">
          {itemQuantity >= 5 ? (
            <div className="product-cart-limit">
              Reached the maximum quantity of one item in the cart (5).
            </div>
          ) : (
            <button className="product-add-to-cart" onClick={handleUpdateCart}>
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
