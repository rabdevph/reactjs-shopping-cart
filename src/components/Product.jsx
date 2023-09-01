import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useProductContext, useCartItemContext } from '../contexts/ShopContext.jsx';

const Product = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { productId } = useParams();
  const { products } = useProductContext();
  const { cartItem, updateCart, isInCart, getQuantity } = useCartItemContext();
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

  const price = parseFloat(amount).toFixed(2);

  const item = {
    productId: id,
    productTitle: title,
    qty: selectedQuantity,
    price: amount,
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value));
  };

  const handleUpdateCart = () => {
    updateCart(item, productId);
  };

  return (
    <div className="product">
      <div className="product-image-wrapper">
        {isInCart(productId) ? (
          <div className="product-in-cart">{getQuantity(productId)} IN CART</div>
        ) : null}
        <img src={url} alt={title} className="product-image" />
      </div>
      <div className="product-details-wrapper">
        <p className="product-name">{title}</p>
        <p className="product-price">
          {currencyCode} {price}
        </p>
        <p className="product-description">{description}</p>
        <div className="product-cart-control">
          <div className="product-quantity-wrapper">
            <label htmlFor="quantityDropdown" className="product-quantity-label">
              QUANTITY:
            </label>
            <select
              id="quantityDropdown"
              value={selectedQuantity}
              onChange={handleQuantityChange}
              className="product-quantity-select"
            >
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
          <button className="product-add-to-cart" onClick={handleUpdateCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
