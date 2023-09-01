import { useProductContext, useCartItemContext } from '../contexts/ShopContext.jsx';

const CartCard = ({ itemId }) => {
  const { products } = useProductContext();
  const { cartItem, updateItemQuantity, removeItem } = useCartItemContext();

  const productInCart = cartItem.find((product) => product.productId === itemId);
  const product = products.find((product) => product.id === itemId);

  if (!product) {
    return null;
  }

  const {
    node: {
      featuredImage: { url },
      variants,
    },
  } = product;

  const { amount, currencyCode } = variants.edges[0].node.price;

  const { productTitle, qty } = productInCart;

  const productPrice = parseFloat(amount).toFixed(2);

  const handleUpdateQuantity = (event) => {
    updateItemQuantity(itemId, parseInt(event.target.value));
  };

  const handleRemoveItem = () => {
    removeItem(itemId);
  };

  return (
    <>
      <div className="cart-card">
        <div className="cart-card-image-wrapper">
          <img src={url} alt={productTitle} className="cart-card-image" />
        </div>
        <div className="cart-card-details-wrapper">
          <div className="cart-cart-title-price">
            <p className="cart-card-title">{productTitle}</p>
            <p className="cart-card-price">
              {currencyCode} {productPrice}
            </p>
          </div>
          <div className="cart-card-item-control">
            <button className="cart-card-remove-item" onClick={handleRemoveItem}>
              REMOVE
            </button>
            <select
              id="cartQuantityDropdown"
              value={qty}
              onChange={handleUpdateQuantity}
              className="cart-card-quantity-select"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="cart-card-line-break"></div>
    </>
  );
};

export default CartCard;
